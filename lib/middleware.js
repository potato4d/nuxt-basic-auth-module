const parseBasicAuth = require('basic-auth')

const matchCredential = (requirement, input) =>
  Object.entries(requirement).every(([key, value]) => value === input[key])
const auth = ({ name, pass }, req) => {
  if (!(name && pass && req)) {
    throw new TypeError('Missing argument "name" or "pass" or request object.')
  }
  const credential = parseBasicAuth(req)
  return !!(credential && matchCredential({ name, pass }, credential))
}

const createBasicMessage = (options = {}) =>
  `Basic realm="${options.message || 'Please enter username and password'}"`

const createMiddleware = options => {
  return (req, res, next) => {
    try {
      let enabled = true
      let match = options.match
      let name = options.name
      let pass = options.pass

      if (typeof name === 'function') {
        options.name = name(req)
      }

      if (typeof pass === 'function') {
        options.pass = pass(req)
      }

      if (typeof match === 'function') {
        enabled = match(req)
      }
      else if (match instanceof RegExp) {
        enabled = match.test(req.url)
      }
      else if (typeof match === 'string') {
        enabled = match === req.url 
      }
      
      if (!enabled || auth(options, req)) {
        return next()
      }
    } catch (e) {
      //
    }
    res.statusCode = 401
    res.setHeader('WWW-Authenticate', createBasicMessage(options))
    return res.end()
  }
}

exports.auth = auth
exports.createBasicMessage = createBasicMessage
exports.createMiddleware = createMiddleware
