const { createMiddleware } = require('./middleware')

module.exports = function(moduleOptions) {
  const consola = require('consola')
  const options = Object.assign({}, this.options.basic, moduleOptions || {})
  const { name, pass, enabled } = options
  if (!(name && pass)) {
    consola.info(
      'name or pass not found. Skip registration of authentication server.'
    )
    return false
  }
  if (!enabled) {
    consola.info(
      'Enabled flag is false. Skip registration of authentication server.'
    )
    return false
  }
  const middleware = createMiddleware(options)
  this.addServerMiddleware(middleware)
  consola.info('Register basic auth module to server middleware')
  return true
}

module.exports.meta = require('../package.json')
