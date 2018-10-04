const { auth } = require('../../lib/middleware')
const b64credential = 'basic Zm9vOmJhcg==' // foo / bar

describe('middleware.js', () => {
  it('Should be an error when the argument is missing', () => {
    expect(() => auth()).toThrow()
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
