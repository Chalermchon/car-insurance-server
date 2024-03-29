'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const CarSery = use('App/Models/CarSery')

/**
 * Resourceful controller for interacting with carseries
 */
class CarSeryController {
  /**
   * Show a list of all carseries.
   * GET carseries
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index({ params, request, response, view }) {
    const carSery = await CarSery.query().where('brand', params.brand).fetch()
    
    const brand = params.brand
    const models = []
    await carSery.rows.map( async (element) => {
      notFound = true
      models.map( (model) => {
        if (model.name === element.model) {
          notFound = false
        }
      })
      if (notFound) {
        var carGroup = await element.carGroup().fetch()
        var carType = await element.carType().fetch()
          models.push({
            name: element.model,
            groupName: carGroup.group_name,
            typeName: carType.type_name,
          })
          console.log(models);
      }
    });
    console.log(models);
    
    return view.render('car-series.index', { brand: brand, models: models })
  }

  /**
   * Render a form to be used for creating a new carsery.
   * GET carseries/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create({ request, response, view }) {
  }

  /**
   * Create/save a new carsery.
   * POST carseries
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store({ request, response }) {
  }

  /**
   * Display a single carsery.
   * GET carseries/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show({ params, request, response, view }) {
    const brand = params.brand
    const model = params.model
    const detailsOfYears = []

    const carSery = await CarSery.query().where({ 'brand': brand, 'model': model.name }).fetch()
    
    carSery.rows.map( (element) => {

      let notFound = true
      detailsOfYears.forEach(detailsOfYear => {
        if (detailsOfYear.year === element.year) {
          notFound = false
          return detailsOfYear.details.push(element.detail)
        }
      })
      if (notFound) {
        detailsOfYears.push({
          year: element.year,
          details: [element.detail]
        })
      }
    })

    return view.render('car-series.show', { brand: brand, model: model, detailsOfYears: detailsOfYears })
  }

  /**
   * Render a form to update an existing carsery.
   * GET carseries/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit({ params, request, response, view }) {
    const brand = params.brand
    const model = params.model
    return view.render('car-series.edit', { brand: brand, model: model })
  }

  /**
   * Update carsery details.
   * PUT or PATCH carseries/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update({ params, request, response }) {
  }

  /**
   * Delete a carsery with id.
   * DELETE carseries/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy({ params, request, response }) {
  }
}

module.exports = CarSeryController
