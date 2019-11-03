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
    // await insuranceType.save()
   
    //-----2+ max ซ่อมห้าง-------
    insuranceType  = new InsuranceType()
    insuranceType.insurance_group = "2+"
    insuranceType.insurance_name = "2+ Max (ซ่อมห้าง)"
    insuranceType.option = JSON.stringify({
      "ทุนประกัน" : "150,000",
      "ภัยธรรมชาติ" : "100,000"
    })
    insuranceType.protection_detail_id = 1
    await insuranceType.save()

    insuranceType  = new InsuranceType()
    insuranceType.insurance_group = "2+"
    insuranceType.insurance_name = "2+ Max (ซ่อมห้าง)"
    insuranceType.option = JSON.stringify({
      "ทุนประกัน" : "200,000",
      "ภัยธรรมชาติ" : "200,000"
    })
    insuranceType.protection_detail_id = 1
    await insuranceType.save()

    insuranceType  = new InsuranceType()
    insuranceType.insurance_group = "2+"
    insuranceType.insurance_name = "2+ Max (ซ่อมห้าง)"
    insuranceType.option = JSON.stringify({
      "ทุนประกัน" : "300,000",
      "ภัยธรรมชาติ" : "200,000"
    })
    insuranceType.protection_detail_id = 1
    await insuranceType.save()

    //--------2+ max ซ่อมอู่--------
    insuranceType  = new InsuranceType()
    insuranceType.insurance_group = "2+"
    insuranceType.insurance_name = "2+ Max (ซ่อมอู่)"
    insuranceType.option = JSON.stringify({
      "ทุนประกัน" : "150,000",
      "ภัยธรรมชาติ" : "100,000"
    })
    insuranceType.protection_detail_id = 2
    await insuranceType.save()

    insuranceType  = new InsuranceType()
    insuranceType.insurance_group = "2+"
    insuranceType.insurance_name = "2+ Max (ซ่อมอู่)"
    insuranceType.option = JSON.stringify({
      "ทุนประกัน" : "200,000",
      "ภัยธรรมชาติ" : "200,000"
    })
    insuranceType.protection_detail_id = 2
    await insuranceType.save()

    insuranceType  = new InsuranceType()
    insuranceType.insurance_group = "2+"
    insuranceType.insurance_name = "2+ Max (ซ่อมอู่)"
    insuranceType.option = JSON.stringify({
      "ทุนประกัน" : "300,000",
      "ภัยธรรมชาติ" : "200,000"
    })
    insuranceType.protection_detail_id = 2
    await insuranceType.save()

    //--------2+ 35 up--------
    insuranceType  = new InsuranceType()
    insuranceType.insurance_group = "2+"
    insuranceType.insurance_name = "2+ 35 up"
    insuranceType.option = JSON.stringify({
      "ทุนประกัน" : "100,000",
      "ภัยธรรมชาติ" : null
    })
    insuranceType.protection_detail_id = 3
    await insuranceType.save()

    insuranceType  = new InsuranceType()
    insuranceType.insurance_group = "2+"
    insuranceType.insurance_name = "2+ 35 up"
    insuranceType.option = JSON.stringify({
      "ทุนประกัน" : "200,000",
      "ภัยธรรมชาติ" : null
    })
    insuranceType.protection_detail_id = 3
    await insuranceType.save()


    //-----2+ Minimal ซ่อมอู่-------
    insuranceType  = new InsuranceType()
    insuranceType.insurance_group = "2+"
    insuranceType.insurance_name = "2+ Minimal (ซ่อมอู่)"
    insuranceType.option = null
    insuranceType.protection_detail_id = 4
    await insuranceType.save()

    //-------------- 3+ --------------
    insuranceType  = new InsuranceType()
    insuranceType.insurance_group = "3+"
    insuranceType.insurance_name = "3+"
    insuranceType.option = JSON.stringify({
      // "ทุนประกัน" : "150,000",
      // "ภัยธรรมชาติ" : null
      "ค่าเสียหายส่วนแรก" : "2000"
    })
    insuranceType.protection_detail_id = 5
    await insuranceType.save()

    insuranceType  = new InsuranceType()
    insuranceType.insurance_group = "3+"
    insuranceType.insurance_name = "3+"
    insuranceType.option = JSON.stringify({
      // "ทุนประกัน" : "150,000",
      // "ภัยธรรมชาติ" : null
      "ค่าเสียหายส่วนแรก" : "ไม่มี"
    })
    insuranceType.protection_detail_id = 5
    await insuranceType.save()

    //-------------- 2 เซฟ Special --------------
    insuranceType  = new InsuranceType()
    insuranceType.insurance_group = "2"
    insuranceType.insurance_name = "2 เซฟ Special"
    insuranceType.option = null
    insuranceType.protection_detail_id = 6
    await insuranceType.save()

    //-------------- 2 กันชน --------------
    insuranceType  = new InsuranceType()
    insuranceType.insurance_group = "2"
    insuranceType.insurance_name = "2 กันชน"
    insuranceType.option = null
    insuranceType.protection_detail_id = 6
    await insuranceType.save()

    //-------------- 3 Best --------------
    insuranceType  = new InsuranceType()
    insuranceType.insurance_group = "3"
    insuranceType.insurance_name = "3 Best"
    insuranceType.option = null
    insuranceType.protection_detail_id = 7
    await insuranceType.save()

    //-------------- 3 กันชน --------------
    insuranceType  = new InsuranceType()
    insuranceType.insurance_group = "3"
    insuranceType.insurance_name = "3 กันชน"
    insuranceType.option = null
    insuranceType.protection_detail_id = 8
    await insuranceType.save()
  }
}

module.exports = InsuranceTypeSeeder
