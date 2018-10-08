const { createMiddleware } = require('./middleware')

module.exports = function(moduleOptions) {
  const options = Object.assign({}, this.options.basic, moduleOptions || {})
  const { name, pass, enabled } = options
  if (!(name && pass)) {
    console.log(
      'name or pass not found. Skip registration of authentication server.'
    )
    return false
  }
  if (enabled === false) {
    console.log(
      'Enabled flag is false. Skip registration of authentication server.'
    )
    return false
  }
  const middleware = createMiddleware(options)
  this.addServerMiddleware(middleware)
  return true
}

module.exports.meta = require('../package.json')
