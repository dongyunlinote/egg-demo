'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async user() {
    const { ctx } = this;
    //ctx.body = 'hi, egg';
   const productList = await ctx.service.user.find();
   ctx.body = JSON.stringify(productList)
  }
}

module.exports = HomeController;
