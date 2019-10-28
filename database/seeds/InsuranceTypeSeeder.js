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
    var insuranceType
    // insuranceType.insurance_name = "..."
    // insuranceType.option = "..." /ถ้าไม่มี ใส่ null
    // insuranceType.protection_detail_id = 0
    // insuranceType.save()
   
    insuranceType  = new InsuranceType()
    insuranceType.insurance_name = "2+ Max (ซ่อมห้าง)"
    insuranceType.option = JSON.stringify({
      "ทุนประกัน" : "150,000",
      "ภัยธรรมชาติ" : "100,000"
    })
    insuranceType.protection_detail_id = 1
    insuranceType.save()

    insuranceType  = new InsuranceType()
    insuranceType.insurance_name = "2+ Max (ซ่อมห้าง)"
    insuranceType.option = JSON.stringify({
      "ทุนประกัน" : "200,000",
      "ภัยธรรมชาติ" : "200,000"
    })
    insuranceType.protection_detail_id = 1
    insuranceType.save()

    insuranceType  = new InsuranceType()
    insuranceType.insurance_name = "2+ Max (ซ่อมห้าง)"
    insuranceType.option = JSON.stringify({
      "ทุนประกัน" : "300,000",
      "ภัยธรรมชาติ" : "200,000"
    })
    insuranceType.protection_detail_id = 1
    insuranceType.save()
  }
}

module.exports = InsuranceTypeSeeder
