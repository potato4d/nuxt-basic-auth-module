const createMockMiddleware = (options) => ({
  options: options || { basic: {} },
  module: require('../../lib/module'),
  middleware: null,
  addServerMiddleware: (middleware) => {
    this.middleware = middleware
  }
})

describe('module.js', () => {
  describe('when access to meta data', () => {
    it('shoud returns object', () => {
      const mock = createMockMiddleware(null)
      expect(mock.module.meta).toBeInstanceOf(Object)
    })
  })

  describe('createMiddleware test', () => {
    describe('when all arguments are null', () => {
      it('should returns false', () => {
        const mock = createMockMiddleware()
        expect(mock.module(null)).toBeFalsy()
      })
    })

    describe('when enabled is false', () => {
      it('should returns false', () => {
        const mock = createMockMiddleware()
        expect(mock.module({ name: 'name', pass: 'pass', enabled: false })).toBeFalsy()
      })
    })

    describe('when name or pass is falsy value', () => {
      it('should returns false', () => {
        const mock = createMockMiddleware()
        expect(mock.module({ name: '', pass: '', enabled: true })).toBeFalsy()
      })
    })


    describe('when name or pass is truthy value and enabled is true', () => {
      it('should returns false', () => {
        const mock = createMockMiddleware()
        expect(mock.module({ name: 'name', pass: 'pass', enabled: true })).toBeTruthy()
      })
    })
  })
})
