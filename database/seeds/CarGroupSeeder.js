'use strict'

/*
|--------------------------------------------------------------------------
| CarGroupSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const CarGroup = use('App/Models/CarGroup')

class CarGroupSeeder {
  async run () {
    const carGroup = new CarGroup()

    carGroup.group_name = 'กลุ่มที่ 1'
    await carGroup.save()

    carGroup.group_name = 'กลุ่มที่ 2'
    await carGroup.save()

    carGroup.group_name = 'กลุ่มที่ 3'
    await carGroup.save()

    carGroup.group_name = 'กลุ่มที่ 4'
    await carGroup.save()

    carGroup.group_name = 'กลุ่มที่ 5'
    await carGroup.save()
    
  }
}

module.exports = CarGroupSeeder
