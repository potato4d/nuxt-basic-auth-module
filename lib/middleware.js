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
      if (auth(options, req)) {
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
