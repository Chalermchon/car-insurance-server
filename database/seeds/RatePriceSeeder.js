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
    var ratePrice 
    // ratePrice.insurance_type_id = 0
    // ratePrice.car_group_id = 0
    // ratePrice.car_type_id = 0
    // ratePrice.price = 0.0

    /** 2+ Max (ซ่อมห้าง)
     *  option 1
     *  > ทุนประกัน = 150,000
     *  > ภัยธรรมชาติ = 100,000
    */
    //-------- รถกลุ่ม 1 -------- 
    ratePrice = new RatePrice()
    ratePrice.insurance_type_id = 1
    ratePrice.car_group_id = 1
    ratePrice.car_type_id = 1
    ratePrice.price = 11000
    ratePrice.save()

    ratePrice = new RatePrice()
    ratePrice.insurance_type_id = 1
    ratePrice.car_group_id = 1
    ratePrice.car_type_id = 2
    ratePrice.price = 11000
    ratePrice.save()

    ratePrice = new RatePrice()
    ratePrice.insurance_type_id = 1
    ratePrice.car_group_id = 1
    ratePrice.car_type_id = 3
    ratePrice.price = 12800
    ratePrice.save()

    //-------- รถกลุ่ม 2 -------- 
    ratePrice = new RatePrice()
    ratePrice.insurance_type_id = 1
    ratePrice.car_group_id = 2
    ratePrice.car_type_id = 1
    ratePrice.price = 11000
    ratePrice.save()

    ratePrice = new RatePrice()
    ratePrice.insurance_type_id = 1
    ratePrice.car_group_id = 2
    ratePrice.car_type_id = 2
    ratePrice.price = 11000
    ratePrice.save()

    ratePrice = new RatePrice()
    ratePrice.insurance_type_id = 1
    ratePrice.car_group_id = 2
    ratePrice.car_type_id = 3
    ratePrice.price = 12800
    ratePrice.save()

    //-------- รถกลุ่ม 3 -------- 
    ratePrice = new RatePrice()
    ratePrice.insurance_type_id = 1
    ratePrice.car_group_id = 3
    ratePrice.car_type_id = 1
    ratePrice.price = 10000
    ratePrice.save()

    ratePrice = new RatePrice()
    ratePrice.insurance_type_id = 1
    ratePrice.car_group_id = 3
    ratePrice.car_type_id = 2
    ratePrice.price = 10000
    ratePrice.save()

    ratePrice = new RatePrice()
    ratePrice.insurance_type_id = 1
    ratePrice.car_group_id = 3
    ratePrice.car_type_id = 3
    ratePrice.price = 11800
    ratePrice.save()

    //-------- รถกลุ่ม 4 -------- 
    ratePrice = new RatePrice()
    ratePrice.insurance_type_id = 1
    ratePrice.car_group_id = 4
    ratePrice.car_type_id = 1
    ratePrice.price = 10000
    ratePrice.save()

    ratePrice = new RatePrice()
    ratePrice.insurance_type_id = 1
    ratePrice.car_group_id = 4
    ratePrice.car_type_id = 2
    ratePrice.price = 10000
    ratePrice.save()

    ratePrice = new RatePrice()
    ratePrice.insurance_type_id = 1
    ratePrice.car_group_id = 4
    ratePrice.car_type_id = 3
    ratePrice.price = 11800
    ratePrice.save()

    //-------- รถกลุ่ม 5 -------- 
    ratePrice = new RatePrice()
    ratePrice.insurance_type_id = 1
    ratePrice.car_group_id = 5
    ratePrice.car_type_id = 1
    ratePrice.price = 10000
    ratePrice.save()

    ratePrice = new RatePrice()
    ratePrice.insurance_type_id = 1
    ratePrice.car_group_id = 5
    ratePrice.car_type_id = 2
    ratePrice.price = 10000
    ratePrice.save()

    ratePrice = new RatePrice()
    ratePrice.insurance_type_id = 1
    ratePrice.car_group_id = 5
    ratePrice.car_type_id = 3
    ratePrice.price = 11800
    ratePrice.save()

    /** 2+ Max (ซ่อมห้าง)
     *  option 2
     *  > ทุนประกัน = 200,000
     *  > ภัยธรรมชาติ = 200,000
    */
    //-------- รถกลุ่ม 1 -------- 
    ratePrice = new RatePrice()
    ratePrice.insurance_type_id = 2
    ratePrice.car_group_id = 1
    ratePrice.car_type_id = 1
    ratePrice.price = 11600
    ratePrice.save()

    ratePrice = new RatePrice()
    ratePrice.insurance_type_id = 2
    ratePrice.car_group_id = 1
    ratePrice.car_type_id = 2
    ratePrice.price = 11600
    ratePrice.save()

    ratePrice = new RatePrice()
    ratePrice.insurance_type_id = 2
    ratePrice.car_group_id = 1
    ratePrice.car_type_id = 3
    ratePrice.price = 13400
    ratePrice.save()

    //-------- รถกลุ่ม 2 -------- 
    ratePrice = new RatePrice()
    ratePrice.insurance_type_id = 2
    ratePrice.car_group_id = 2
    ratePrice.car_type_id = 1
    ratePrice.price = 11600
    ratePrice.save()

    ratePrice = new RatePrice()
    ratePrice.insurance_type_id = 2
    ratePrice.car_group_id = 2
    ratePrice.car_type_id = 2
    ratePrice.price = 11600
    ratePrice.save()

    ratePrice = new RatePrice()
    ratePrice.insurance_type_id = 2
    ratePrice.car_group_id = 2
    ratePrice.car_type_id = 3
    ratePrice.price = 13400
    ratePrice.save()

    //-------- รถกลุ่ม 3 -------- 
    ratePrice = new RatePrice()
    ratePrice.insurance_type_id = 2
    ratePrice.car_group_id = 3
    ratePrice.car_type_id = 1
    ratePrice.price = 10600
    ratePrice.save()

    ratePrice = new RatePrice()
    ratePrice.insurance_type_id = 2
    ratePrice.car_group_id = 3
    ratePrice.car_type_id = 2
    ratePrice.price = 10600
    ratePrice.save()

    ratePrice = new RatePrice()
    ratePrice.insurance_type_id = 2
    ratePrice.car_group_id = 3
    ratePrice.car_type_id = 3
    ratePrice.price = 12400
    ratePrice.save()

    //-------- รถกลุ่ม 4 -------- 
    ratePrice = new RatePrice()
    ratePrice.insurance_type_id = 2
    ratePrice.car_group_id = 4
    ratePrice.car_type_id = 1
    ratePrice.price = 10600
    ratePrice.save()

    ratePrice = new RatePrice()
    ratePrice.insurance_type_id = 2
    ratePrice.car_group_id = 4
    ratePrice.car_type_id = 2
    ratePrice.price = 10600
    ratePrice.save()

    ratePrice = new RatePrice()
    ratePrice.insurance_type_id = 2
    ratePrice.car_group_id = 4
    ratePrice.car_type_id = 3
    ratePrice.price = 12400
    ratePrice.save()

    //-------- รถกลุ่ม 5 -------- 
    ratePrice = new RatePrice()
    ratePrice.insurance_type_id = 2
    ratePrice.car_group_id = 5
    ratePrice.car_type_id = 1
    ratePrice.price = 10600
    ratePrice.save()

    ratePrice = new RatePrice()
    ratePrice.insurance_type_id = 2
    ratePrice.car_group_id = 5
    ratePrice.car_type_id = 2
    ratePrice.price = 10600
    ratePrice.save()

    ratePrice = new RatePrice()
    ratePrice.insurance_type_id = 2
    ratePrice.car_group_id = 5
    ratePrice.car_type_id = 3
    ratePrice.price = 12400
    ratePrice.save()

    /** 2+ Max (ซ่อมห้าง)
     *  option 3
     *  > ทุนประกัน = 300,000
     *  > ภัยธรรมชาติ = 200,000
    */
    //-------- รถกลุ่ม 1 -------- 
    ratePrice = new RatePrice()
    ratePrice.insurance_type_id = 3
    ratePrice.car_group_id = 1
    ratePrice.car_type_id = 1
    ratePrice.price = 12600
    ratePrice.save()

    ratePrice = new RatePrice()
    ratePrice.insurance_type_id = 3
    ratePrice.car_group_id = 1
    ratePrice.car_type_id = 2
    ratePrice.price = 12600
    ratePrice.save()

    ratePrice = new RatePrice()
    ratePrice.insurance_type_id = 3
    ratePrice.car_group_id = 1
    ratePrice.car_type_id = 3
    ratePrice.price = 14400
    ratePrice.save()

    //-------- รถกลุ่ม 2 -------- 
    ratePrice = new RatePrice()
    ratePrice.insurance_type_id = 3
    ratePrice.car_group_id = 2
    ratePrice.car_type_id = 1
    ratePrice.price = 12600
    ratePrice.save()

    ratePrice = new RatePrice()
    ratePrice.insurance_type_id = 3
    ratePrice.car_group_id = 2
    ratePrice.car_type_id = 2
    ratePrice.price = 12600
    ratePrice.save()

    ratePrice = new RatePrice()
    ratePrice.insurance_type_id = 3
    ratePrice.car_group_id = 2
    ratePrice.car_type_id = 3
    ratePrice.price = 14400
    ratePrice.save()

    //-------- รถกลุ่ม 3 -------- 
    ratePrice = new RatePrice()
    ratePrice.insurance_type_id = 3
    ratePrice.car_group_id = 3
    ratePrice.car_type_id = 1
    ratePrice.price = 11600
    ratePrice.save()

    ratePrice = new RatePrice()
    ratePrice.insurance_type_id = 3
    ratePrice.car_group_id = 3
    ratePrice.car_type_id = 2
    ratePrice.price = 11600
    ratePrice.save()

    ratePrice = new RatePrice()
    ratePrice.insurance_type_id = 3
    ratePrice.car_group_id = 3
    ratePrice.car_type_id = 3
    ratePrice.price = 13400
    ratePrice.save()

    //-------- รถกลุ่ม 4 -------- 
    ratePrice = new RatePrice()
    ratePrice.insurance_type_id = 3
    ratePrice.car_group_id = 4
    ratePrice.car_type_id = 1
    ratePrice.price = 11600
    ratePrice.save()

    ratePrice = new RatePrice()
    ratePrice.insurance_type_id = 3
    ratePrice.car_group_id = 4
    ratePrice.car_type_id = 2
    ratePrice.price = 11600
    ratePrice.save()

    ratePrice = new RatePrice()
    ratePrice.insurance_type_id = 3
    ratePrice.car_group_id = 4
    ratePrice.car_type_id = 3
    ratePrice.price = 13400
    ratePrice.save()

    //-------- รถกลุ่ม 5 -------- 
    ratePrice = new RatePrice()
    ratePrice.insurance_type_id = 3
    ratePrice.car_group_id = 5
    ratePrice.car_type_id = 1
    ratePrice.price = 11600
    ratePrice.save()

    ratePrice = new RatePrice()
    ratePrice.insurance_type_id = 3
    ratePrice.car_group_id = 5
    ratePrice.car_type_id = 2
    ratePrice.price = 11600
    ratePrice.save()

    ratePrice = new RatePrice()
    ratePrice.insurance_type_id = 3
    ratePrice.car_group_id = 5
    ratePrice.car_type_id = 3
    ratePrice.price = 13400
    ratePrice.save()
  }
}

module.exports = RatePriceSeeder
