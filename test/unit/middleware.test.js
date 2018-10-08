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
})
