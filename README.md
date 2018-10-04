# Nuxt.js basic auth module

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

  basic: {
    name: 'AUTH USER NAME HERE',
    pass: 'AUTH PASSWORD HERE',
    enabled: process.env.BASIC_ENABLED === 'true' // require boolean value(nullable)
  },

  // ...
}
```

## License

MIT

[https://github.com/potato4d/nuxt-basic-auth-module/blob/master/LICENSE](https://github.com/potato4d/nuxt-basic-auth-module/blob/master/LICENSE)
