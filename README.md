# Nuxt.js basic auth module

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

## License

MIT

[https://github.com/potato4d/nuxt-basic-auth-module/blob/master/LICENSE](https://github.com/potato4d/nuxt-basic-auth-module/blob/master/LICENSE)
