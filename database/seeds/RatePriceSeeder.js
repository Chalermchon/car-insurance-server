'use strict'

/*
|--------------------------------------------------------------------------
| RatePriceSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const RatePrice = use('App/Models/RatePrice')

class RatePriceSeeder {
  async run () {
    const ratePrice = new RatePrice()
    // ratePrice.insurance_type_id = 0
    // ratePrice.car_group_id = 0
    // ratePrice.car_type_id = 0
    // ratePrice.price = 0.0

    //ยังไม่ต้องทำ
      
  }
}

module.exports = RatePriceSeeder
