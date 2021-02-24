# Nuxt.js basic auth module

[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)
[![donate: Patreon](https://img.shields.io/badge/donate-patreon-orange.svg?style=flat-square)](https://www.patreon.com/potato4d)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg?style=flat-square)](https://opensource.org/licenses/MIT)
[![NPM version](https://img.shields.io/npm/v/nuxt-basic-auth-module.svg?style=flat-square)](https://npmjs.com/package/nuxt-basic-auth-module)
[![All Contributors](https://img.shields.io/badge/all_contributors-2-orange.svg?style=flat-square)](#contributors)
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
export default {
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

Basic Auth user password.

### message

- type: String,
- default: 'Please enter username and password'
- required: false

Message to be displayed during basic authentication.

### match

- type: String(regex literal) | Function
- required: false

The target path.
This allows you to set up basic authentication that is limited to routes that match regular expression literals or where the function returns true.

The function passes req as an argument.

## License

MIT

[https://github.com/potato4d/nuxt-basic-auth-module/blob/master/LICENSE](https://github.com/potato4d/nuxt-basic-auth-module/blob/master/LICENSE)

## Contributors

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore -->
<table><tr><td align="center"><a href="https://potato4d.me"><img src="https://avatars0.githubusercontent.com/u/6993514?v=4" width="100px;" alt="Takuma HANATANI"/><br /><sub><b>Takuma HANATANI</b></sub></a><br /><a href="https://github.com/potato4d/nuxt-basic-auth-module/commits?author=potato4d" title="Code">💻</a> <a href="#maintenance-potato4d" title="Maintenance">🚧</a> <a href="https://github.com/potato4d/nuxt-basic-auth-module/commits?author=potato4d" title="Documentation">📖</a> <a href="https://github.com/potato4d/nuxt-basic-auth-module/issues?q=author%3Apotato4d" title="Bug reports">🐛</a></td><td align="center"><a href="http://antnf.com"><img src="https://avatars2.githubusercontent.com/u/11247099?v=4" width="100px;" alt="Anthony Fu"/><br /><sub><b>Anthony Fu</b></sub></a><br /><a href="https://github.com/potato4d/nuxt-basic-auth-module/commits?author=antfu" title="Code">💻</a></td></tr></table>

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!
