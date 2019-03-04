# Nuxt.js basic auth module

[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)
[![donate: Patreon](https://img.shields.io/badge/donate-patreon-orange.svg?style=flat-square)](https://www.patreon.com/potato4d)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg?style=flat-square)](https://opensource.org/licenses/MIT)
[![NPM version](https://img.shields.io/npm/v/nuxt-basic-auth-module.svg?style=flat-square)](https://npmjs.com/package/nuxt-basic-auth-module)
[![All Contributors](https://img.shields.io/badge/all_contributors-5-orange.svg?style=flat-square)](#contributors)
[![NPM downloads](https://img.shields.io/npm/dm/nuxt-basic-auth-module.svg?style=flat-square)](https://npmjs.com/package/nuxt-basic-auth-module)
[![codecov](https://codecov.io/gh/potato4d/nuxt-basic-auth-module/branch/master/graph/badge.svg)](https://codecov.io/gh/potato4d/nuxt-basic-auth-module)

![f2653ad0d131606c49edb3f605cbf547](https://user-images.githubusercontent.com/6993514/46481007-5af6b000-c82d-11e8-99b7-4cae88c22796.gif)

Provide basic authentication to your Nuxt.js application

[https://www.npmjs.com/package/nuxt-basic-auth-module](https://www.npmjs.com/package/nuxt-basic-auth-module)

<a href="https://patreon.com/potato4d">
  <img src="https://c5.patreon.com/external/logo/become_a_patron_button@2x.png" height="50">
</a>

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
