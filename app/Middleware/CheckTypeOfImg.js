'use strict'
/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const Helpers = use('Helpers')
const Env = use('Env')

class CheckTypeOfImg {
  /**
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Function} next
   */
  async handle ({ request, response }, next) {
    // call next to advance the request
    const identImg = request.file('ident_img', {
      types: ['image'],
      extname: ['jpg', 'jpeg', 'png']
    })
    
    await identImg.move(Helpers.tmpPath('identImges'), {
      name: `${Date.now()}.jpg`
    })
    request.post().ident_img = Env.get('APP_URL')+'/'+'identImges/' + identImg.fileName
    
    if (!identImg.moved()) {
      return response.status(406).json({
        message: 'File upload is failed.',
        note: 'Please check your file type that is jpg, jpeg or png.'
      })
    }

    await next()
  }
}

module.exports = CheckTypeOfImg
