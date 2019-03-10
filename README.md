# Nuxt.js basic auth module

[![codecov](https://codecov.io/gh/potato4d/nuxt-basic-auth-module/branch/master/graph/badge.svg)](https://codecov.io/gh/potato4d/nuxt-basic-auth-module) [![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)

![f2653ad0d131606c49edb3f605cbf547](https://user-images.githubusercontent.com/6993514/46481007-5af6b000-c82d-11e8-99b7-4cae88c22796.gif)

Provide basic authentication to your Nuxt.js application

[https://www.npmjs.com/package/nuxt-basic-auth-module](https://www.npmjs.com/package/nuxt-basic-auth-module)

## Installation

```bash
$ yarn add nuxt-basic-auth-module # or npm install
```

## Usage

Edit your nuxt.config.js

```js
module.exports = {
  // ...
  modules: [
    'nuxt-basic-auth-module'
  ],
  basic: {
    name: 'AUTH USER NAME HERE',
    pass: 'AUTH PASSWORD HERE',
    enabled: process.env.BASIC_ENABLED === 'true' // require boolean value(nullable)
  },

  // ...
}
```

## Arguments

### enabled

- type: Boolean
- default: false
- required: false

Whether to activate this module.
If false, module registration is skipped.

### name

- type: String
- required: true

Basic Auth user name.

### pass

- type: String
- required: true

Basic Auth use name.

### message

- type: String,
- default: 'Please enter username and password'
- required: false

Message to be displayed during basic authentication.

## License

MIT

[https://github.com/potato4d/nuxt-basic-auth-module/blob/master/LICENSE](https://github.com/potato4d/nuxt-basic-auth-module/blob/master/LICENSE)
