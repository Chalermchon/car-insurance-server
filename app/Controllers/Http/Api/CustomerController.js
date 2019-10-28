'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const Customer = use('App/Models/Customer')

/**
 * Resourceful controller for interacting with customers
 */
class CustomerController {
  /**
   * Show a list of all customers.
   * GET customers
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index({ request, response, view }) {

    const customers = (await Customer.all()).rows

    const customersRes = []

    customers.forEach(customer => {
      let customerTmp = {
        name_prefix: customer.name_prefix,
        first_name: customer.first_name,
        last_name: customer.last_name,
        ident_number: customer.ident_number,
        ident_img: customer.ident_img,
        birth_date: customer.birth_date,
        address: JSON.parse(customer.address),
        phone: customer.phone,
        email: customer.email,
        career: customer.career
      }

      customersRes.push(customerTmp)
    })

    console.log('GET Customers')
    return response.json(customersRes)
  }

  /**
   * Create/save a new customer.
   * POST customers
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store({ request, response }) {
    const customer_req = request.post()

    const customer = new Customer()

    customer.name_prefix = customer_req.name_prefix
    customer.first_name = customer_req.first_name
    customer.last_name = customer_req.last_name
    customer.ident_number = customer_req.ident_number
    customer.ident_img = customer_req.ident_img
    customer.birth_date = new Date(customer_req.birth_date)
    customer.address = JSON.stringify(customer_req.address)
    customer.phone = customer_req.phone
    customer.email = customer_req.email
    customer.career = customer_req.career

    if (await customer.save()) {
      console.log('POST: CustomerID ' + customer.id)
      response.send(true)
    } else {
      response.send(false)
    }
  }

  /**
   * Display a single customer.
   * GET customers/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show({ params, request, response, view }) {
    const customer = await Customer.find(params.id)

      let customerRes = {
        name_prefix: customer.name_prefix,
        first_name: customer.first_name,
        last_name: customer.last_name,
        ident_number: customer.ident_number,
        ident_img: customer.ident_img,
        birth_date: customer.birth_date,
        address: JSON.parse(customer.address),
        phone: customer.phone,
        email: customer.email,
        career: customer.career
      }

      response.json(customerRes);
  }

  /**
   * Update customer details.
   * PUT or PATCH customers/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update({ params, request, response }) {
  }

  /**
   * Delete a customer with id.
   * DELETE customers/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy({ params, request, response }) {
  }
}

module.exports = CustomerController
