const puppeteer = require('puppeteer')
const request = require('request-promise-native')

const { Nuxt, Builder } = require('nuxt')
const config = require('../fixture/nuxt.config')

const url = path => `http://localhost:3000${path}`
const get = path => request(url(path))

jest.setTimeout(10000)

describe('module E2E test', () => {
  let nuxt
  let page
  let browser

  beforeAll(async () => {
    nuxt = new Nuxt(config)

    const createNuxt = async () => {
      await new Builder(nuxt).build()
      await nuxt.listen(3000)
    }
    const createBrowser = async () => {
      browser = await puppeteer.launch({
        headless: process.env.NODE_ENV !== 'development',
        timeout: 0
      })
      page = await browser.newPage()
    }
    await Promise.all([createNuxt(), createBrowser()])
  }, 60000)

  afterAll(async () => {
    await browser.close()
    await nuxt.close()
  })

  test('on Server', () => {
    // TODO: write test
  })
})
