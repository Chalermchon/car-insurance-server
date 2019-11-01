'use strict'

/*
|--------------------------------------------------------------------------
| InsuranceTypeSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const InsuranceType = use('App/Models/InsuranceType')

class InsuranceTypeSeeder {
  async run () {
    const insuranceType = new InsuranceType()
    // insuranceType.insurance_name = "..."
    // insuranceType.option = "..." /ถ้าไม่มี ใส่ null
    // insuranceType.protection_detail_id = 0
    // insuranceType.save()

    //ยังไม่ต้องทำ
  }
}

module.exports = InsuranceTypeSeeder
