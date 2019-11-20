'use strict'
/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */



class CheckDataExists {
  /**
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Function} next
   */
  async handle({ request, response }, next) {
    // call next to advance the request
    
    const body = request.post();
    
    const keyError = Object.keys(body).filter(key => {
      return (body[key] === '') || (body[key] === null)
    })
    if (keyError.length) {
      return response.status(400).json({
        message: "Data is not exists value.",
        data: keyError
      });
    }

    await next()
  }
}

module.exports = CheckDataExists
