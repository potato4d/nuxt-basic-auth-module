const {
  auth,
  createMiddleware,
  createBasicMessage
} = require('../../lib/middleware')
const b64credential = 'basic Zm9vOmJhcg==' // foo / bar

describe('middleware.js', () => {
  it('Should be an error when the argument is missing', () => {
    expect(() => auth()).toThrow()
  })

  describe('createMessage', () => {
    test('default message', () => {
      expect(createBasicMessage()).toBe(
        'Basic realm="Please enter username and password"'
      )
    })

    test('custom message', () => {
      expect(createBasicMessage({ message: 'hello' })).toBe(
        'Basic realm="hello"'
      )
    })
  })

  describe('createMiddleware', () => {
    const middleware = createMiddleware({ name: 'foo', pass: 'bar' })
    const res = { setHeader: ([_, message]) => message, end: () => 'res.end' }
    const next = () => 'next'

    test('allow', () => {
      const req = { headers: { authorization: b64credential } }
      expect(middleware(req, res, next)).toBe('next')
    })

    test('deny', () => {
      const req = { headers: { authorization: '' } }
      expect(middleware(req, res, next)).toBe('res.end')
    })
  })

  describe('auth', () => {
    describe('When arguments are null', () => {
      it('should throws TypeError', () => {
        expect(() => auth({ name: null, pass: null }, null)).toThrow()
      })
    })

    describe('When authentication information matches', () => {
      it('should return true', () => {
        const req = {
          headers: {
            authorization: b64credential
          }
        }
        const result = auth({ name: 'foo', pass: 'bar' }, req)
        expect(result).toBeTruthy()
      })
    })

    describe('When authentication information does not match', () => {
      it('should return false', () => {
        const req = {
          headers: {
            authorization: b64credential
          }
        }
        const result = auth({ name: 'foo', pass: 'baz' }, req)
        expect(result).toBeFalsy()
      })
    })
  })

  describe('option.match', () => {
    const res = { setHeader: ([_, message]) => message, end: () => 'res.end' }
    const next = () => 'next'
    const configs = { name: 'foo', pass: 'bar' }

    const makeReq = (url, auth=false) => ({
      url,
      headers: { authorization: auth ? b64credential : '' }
    })

    test('match option set to undefined', () => {
      const match = undefined
      const middleware = createMiddleware({ ...configs, match })
      
      // enabled on all routes
      expect(middleware(makeReq('/', false), res, next)).toBe('res.end')
      expect(middleware(makeReq('/foo/bar', false), res, next)).toBe('res.end')
      expect(middleware(makeReq('/', true), res, next)).toBe('next')
    })

    test('match option set to string', () => {
      const match = '/admin'
      const middleware = createMiddleware({ ...configs, match  })
      
      // disabled routes
      expect(middleware(makeReq('/', false), res, next)).toBe('next')
      expect(middleware(makeReq('/foo/bar', false), res, next)).toBe('next')
      expect(middleware(makeReq('/admin/foo', false), res, next)).toBe('next')

      // enabled routes
      expect(middleware(makeReq('/admin', false), res, next)).toBe('res.end')
      expect(middleware(makeReq('/admin', true), res, next)).toBe('next')
    })

    test('match option set to regex', () => {
      // enable auth only digits route (eg."/1245")
      const match = /^\/\d+$/
      const middleware = createMiddleware({ ...configs, match })
      
      // disabled routes
      expect(middleware(makeReq('/', false), res, next)).toBe('next')
      expect(middleware(makeReq('/foo/bar', false), res, next)).toBe('next')
      expect(middleware(makeReq('/231/234', false), res, next)).toBe('next')

      // enabled routes
      expect(middleware(makeReq('/0', false), res, next)).toBe('res.end')
      expect(middleware(makeReq('/123', false), res, next)).toBe('res.end')
      expect(middleware(makeReq('/123', true), res, next)).toBe('next')
    })

    test('match option set to function', () => {
      const match = ({url}) => {
        return url === '/auth' || url.toLowerCase().startsWith('/admin')
      }
      const middleware = createMiddleware({ ...configs, match })
      
      // disabled routes
      expect(middleware(makeReq('/', false), res, next)).toBe('next')
      expect(middleware(makeReq('/foo/bar', false), res, next)).toBe('next')

      // enabled routes
      expect(middleware(makeReq('/auth', false), res, next)).toBe('res.end')
      expect(middleware(makeReq('/admin', false), res, next)).toBe('res.end')
      expect(middleware(makeReq('/admin/foo', false), res, next)).toBe('res.end')
    })

  })
})
