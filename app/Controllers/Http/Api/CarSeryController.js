'use strict'

const CarSery = use('App/Models/CarSery')

class CarSeryController {
 
 
  async index ({ request, response }) {
    const carSery = (await CarSery.query()
      .with('carGroup', async carGroupQuery => {
        await carGroupQuery.select('id', 'group_name')
      }).with('carType', async carTypeQuery => {
        await carTypeQuery.select('id', 'type_name')
      }).fetch()).rows;

    const count_brands = []
    const count_models = []
    const brands = []

    carSery.map((value) => {
      if (!count_brands.includes(value.brand)) {
        count_brands.push(value.brand)
      }
    })

    carSery.map((value) => {
      if (!count_models.includes(value.model)) {
        count_models.push(value.model)
      }
    })

    console.log(count_models);
    


    response.status(200).json({
      message: 'Here are your car series.',
      data: carSery
    })
  }
}

module.exports = CarSeryController
