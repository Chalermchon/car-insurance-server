'use strict'

/*
|--------------------------------------------------------------------------
| CarTypeSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const CarType = use('App/Models/CarType')

class CarTypeSeeder {
  async run () {
    const carType = new CarType()
    // carType.type_name = "..."
    // carType.save()

    carType.type_name = "รถเก๋ง"
    carType.save()
    
  }
}

module.exports = CarTypeSeeder
