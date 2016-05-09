'use strict'
const {router} = require('../../../src/router')
const required = require('../../../src/required')
const limiter = require('../../../src/limiter')

module.exports = class testController {
  @router({method: 'GET', path: '/test'})
  async get (ctx) {
    ctx.body = 'test'
  }

  @router({method: 'GET', path: '/required-qs'})
  @required({query: ['haha', 'hehe']})
  async testRequiredQs (ctx) {
    ctx.body = 'test'
  }

  @router({method: 'POST', path: '/required-body'})
  @required({body: ['haha', 'hehe']})
  async testRequiredBody (ctx) {
    ctx.body = 'test'
  }

  @router({method: 'GET', path: '/rate-limit'})
  @limiter({limit: 3, duration: 6000 * 10})
  async testRateLimit (ctx) {
    ctx.body = 'test'
  }
}
