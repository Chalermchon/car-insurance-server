'use strict'

const CarSery = use('App/Models/CarSery')

class CarSeryController {
 
 
  async index ({ request, response }) {
    const carSery = await CarSery.query()
      .with('carGroup', async carGroupQuery => {
        await carGroupQuery.select('id', 'group_name')
      }).with('carType', async carTypeQuery => {
        await carTypeQuery.select('id', 'type_name')
      }).fetch()

    response.status(200).json({
      message: 'Here are your car series.',
      data: carSery
    })
  }
}

module.exports = CarSeryController
