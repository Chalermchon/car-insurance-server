'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const Seller = use('App/Models/Seller')

/**
 * Resourceful controller for interacting with sellers
 */
class SellerController {
  /**
   * Show a list of all sellers.
   * GET sellers
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {
    const sellers = (await Seller.all()).rows
    
    return view.render('sellers.index',  {
      beforeThisView: 'HomeController.index',
      sellers: sellers
    })
  }

  /**
   * Render a form to be used for creating a new seller.
   * GET sellers/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create ({ request, response, view }) {
    return view.render('sellers.create', {
      beforeThisView: 'HomeController.index'
    })
  }

  /**
   * Create/save a new seller.
   * POST sellers
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {
    const seller_req = request.post()

    const seller = new Seller()
    const birth_date = seller_req.birth_date.split('-')[1] +'-'+
                       seller_req.birth_date.split('-')[0] +'-'+
                       seller_req.birth_date.split('-')[2]

    seller.name_prefix = seller_req.name_prefix
    seller.first_name = seller_req.first_name
    seller.last_name = seller_req.last_name
    seller.birth_date = new Date(birth_date)
    seller.phone = seller_req.phone
    seller.email = seller_req.email
    seller.username = seller_req.username
    seller.password = seller_req.password

    if (await seller.save()) {
      console.log('CREATE: Seller{ id: "' + seller.id + '", username: "' + seller.username + '" }')
      return response.route('SellerController.show', {id: seller.username})
    } else {
      return response.redirect('/welcome', false, 400)
    }
  }

  /**
   * Display a single seller.
   * GET sellers/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
    try {
      const seller = await Seller.findByOrFail('username', params.id)
      return view.render('sellers.show', {
        beforeThisView: 'SellerController.index',
        seller: seller
      })
    } catch (error) {
      return response.status(404).redirect('back')
    }
  }

  /**
   * Render a form to update an existing seller.
   * GET sellers/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit ({ params, request, response, view }) {
  }

  /**
   * Update seller details.
   * PUT or PATCH sellers/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
  }

  /**
   * Delete a seller with id.
   * DELETE sellers/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
  }
}

module.exports = SellerController
