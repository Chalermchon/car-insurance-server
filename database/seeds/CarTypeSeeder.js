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
    var carType
    // carType.type_name = "..."
    // await carType.save()

    carType = new CarType()
    carType.type_name = "รถเก๋ง"
    await carType.save()

    carType = new CarType()
    carType.type_name = "รถปิคอัพ"
    await carType.save()

    carType = new CarType()
    carType.type_name = "รถตู้"
    await carType.save()

    carType = new CarType()
    carType.type_name = "รถตู้ส่วนบุคคล"
    await carType.save()
    
  }
}

module.exports = CarTypeSeeder
