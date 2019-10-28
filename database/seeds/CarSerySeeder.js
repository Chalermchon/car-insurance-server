'use strict'

/*
|--------------------------------------------------------------------------
| CarSerySeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const CarSery = use('App/Models/CarSery')

class CarSerySeeder {
  async run () {
    var carSery
    // carSery.brand = "..."
    // carSery.model = "..."
    // carSery.year = "..."
    // carSery.detail = "..."
    // carSery.car_group_id = 0
    // carSery.car_type_id = 0
    // carSery.save()

    carSery = new CarSery()
    carSery.brand = "Toyota"
    carSery.model = "Camry"
    carSery.year = "1993"
    carSery.detail = "2.2 GXi 4Doors"
    carSery.car_group_id = 3
    carSery.car_type_id = 1
    carSery.save()

    carSery = new CarSery()
    carSery.brand = "Toyota"
    carSery.model = "Camry"
    carSery.year = "1994"
    carSery.detail = "2.2 GXi 4Doors"
    carSery.car_group_id = 3
    carSery.car_type_id = 1
    carSery.save()

    carSery = new CarSery()
    carSery.brand = "Toyota"
    carSery.model = "Camry"
    carSery.year = "1994"
    carSery.detail = "3.0 GLX V6 4Doors"
    carSery.car_group_id = 3
    carSery.car_type_id = 1
    carSery.save()
  }
}

module.exports = CarSerySeeder
