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

    /** 2+ Max (ซ่อมอู่)
     *  option 1
     *  > ทุนประกัน = 150,000
     *  > ภัยธรรมชาติ = 100,000
    */
    //-------- รถกลุ่ม 1 -------- 
    ratePrice = new RatePrice()
    ratePrice.insurance_type_id = 1
    ratePrice.car_group_id = 1
    ratePrice.car_type_id = 1
    ratePrice.price = 8,900
    ratePrice.save()

    ratePrice = new RatePrice()
    ratePrice.insurance_type_id = 1
    ratePrice.car_group_id = 1
    ratePrice.car_type_id = 2
    ratePrice.price = 8,900
    ratePrice.save()

    ratePrice = new RatePrice()
    ratePrice.insurance_type_id = 1
    ratePrice.car_group_id = 1
    ratePrice.car_type_id = 3
    ratePrice.price = 10,700
    ratePrice.save()

    //-------- รถกลุ่ม 2 -------- 
    ratePrice = new RatePrice()
    ratePrice.insurance_type_id = 1
    ratePrice.car_group_id = 2
    ratePrice.car_type_id = 1
    ratePrice.price = 8,900
    ratePrice.save()

    ratePrice = new RatePrice()
    ratePrice.insurance_type_id = 1
    ratePrice.car_group_id = 2
    ratePrice.car_type_id = 2
    ratePrice.price = 8,900
    ratePrice.save()

    ratePrice = new RatePrice()
    ratePrice.insurance_type_id = 1
    ratePrice.car_group_id = 2
    ratePrice.car_type_id = 3
    ratePrice.price = 10,700
    ratePrice.save()

    //-------- รถกลุ่ม 3 -------- 
    ratePrice = new RatePrice()
    ratePrice.insurance_type_id = 1
    ratePrice.car_group_id = 3
    ratePrice.car_type_id = 1
    ratePrice.price = 7,900
    ratePrice.save()

    ratePrice = new RatePrice()
    ratePrice.insurance_type_id = 1
    ratePrice.car_group_id = 3
    ratePrice.car_type_id = 2
    ratePrice.price = 7,900
    ratePrice.save()

    ratePrice = new RatePrice()
    ratePrice.insurance_type_id = 1
    ratePrice.car_group_id = 3
    ratePrice.car_type_id = 3
    ratePrice.price = 9,700
    ratePrice.save()

    //-------- รถกลุ่ม 4 -------- 
    ratePrice = new RatePrice()
    ratePrice.insurance_type_id = 1
    ratePrice.car_group_id = 4
    ratePrice.car_type_id = 1
    ratePrice.price = 7,900
    ratePrice.save()

    ratePrice = new RatePrice()
    ratePrice.insurance_type_id = 1
    ratePrice.car_group_id = 4
    ratePrice.car_type_id = 2
    ratePrice.price = 7,900
    ratePrice.save()

    ratePrice = new RatePrice()
    ratePrice.insurance_type_id = 1
    ratePrice.car_group_id = 4
    ratePrice.car_type_id = 3
    ratePrice.price = 9,700
    ratePrice.save()

    //-------- รถกลุ่ม 5 -------- 
    ratePrice = new RatePrice()
    ratePrice.insurance_type_id = 1
    ratePrice.car_group_id = 5
    ratePrice.car_type_id = 1
    ratePrice.price = 7,900
    ratePrice.save()

    ratePrice = new RatePrice()
    ratePrice.insurance_type_id = 1
    ratePrice.car_group_id = 5
    ratePrice.car_type_id = 2
    ratePrice.price = 7,900
    ratePrice.save()

    ratePrice = new RatePrice()
    ratePrice.insurance_type_id = 1
    ratePrice.car_group_id = 5
    ratePrice.car_type_id = 3
    ratePrice.price = 9,700
    ratePrice.save()

    /** 2+ Max (ซ่อมอู่)
     *  option 2
     *  > ทุนประกัน = 200,000
     *  > ภัยธรรมชาติ = 200,000
    */
    //-------- รถกลุ่ม 1 -------- 
    ratePrice = new RatePrice()
    ratePrice.insurance_type_id = 2
    ratePrice.car_group_id = 1
    ratePrice.car_type_id = 1
    ratePrice.price = 9,500
    ratePrice.save()

    ratePrice = new RatePrice()
    ratePrice.insurance_type_id = 2
    ratePrice.car_group_id = 1
    ratePrice.car_type_id = 2
    ratePrice.price = 9,500
    ratePrice.save()

    ratePrice = new RatePrice()
    ratePrice.insurance_type_id = 2
    ratePrice.car_group_id = 1
    ratePrice.car_type_id = 3
    ratePrice.price = 11,300
    ratePrice.save()

    //-------- รถกลุ่ม 2 -------- 
    ratePrice = new RatePrice()
    ratePrice.insurance_type_id = 2
    ratePrice.car_group_id = 2
    ratePrice.car_type_id = 1
    ratePrice.price = 9,500
    ratePrice.save()

    ratePrice = new RatePrice()
    ratePrice.insurance_type_id = 2
    ratePrice.car_group_id = 2
    ratePrice.car_type_id = 2
    ratePrice.price = 9,500
    ratePrice.save()

    ratePrice = new RatePrice()
    ratePrice.insurance_type_id = 2
    ratePrice.car_group_id = 2
    ratePrice.car_type_id = 3
    ratePrice.price = 11,300
    ratePrice.save()

    //-------- รถกลุ่ม 3 -------- 
    ratePrice = new RatePrice()
    ratePrice.insurance_type_id = 2
    ratePrice.car_group_id = 3
    ratePrice.car_type_id = 1
    ratePrice.price = 8,500
    ratePrice.save()

    ratePrice = new RatePrice()
    ratePrice.insurance_type_id = 2
    ratePrice.car_group_id = 3
    ratePrice.car_type_id = 2
    ratePrice.price = 8,500
    ratePrice.save()

    ratePrice = new RatePrice()
    ratePrice.insurance_type_id = 2
    ratePrice.car_group_id = 3
    ratePrice.car_type_id = 3
    ratePrice.price = 10,300
    ratePrice.save()

    //-------- รถกลุ่ม 4 -------- 
    ratePrice = new RatePrice()
    ratePrice.insurance_type_id = 2
    ratePrice.car_group_id = 4
    ratePrice.car_type_id = 1
    ratePrice.price = 8,500
    ratePrice.save()

    ratePrice = new RatePrice()
    ratePrice.insurance_type_id = 2
    ratePrice.car_group_id = 4
    ratePrice.car_type_id = 2
    ratePrice.price = 8,500
    ratePrice.save()

    ratePrice = new RatePrice()
    ratePrice.insurance_type_id = 2
    ratePrice.car_group_id = 4
    ratePrice.car_type_id = 3
    ratePrice.price = 10,300
    ratePrice.save()

    //-------- รถกลุ่ม 5 -------- 
    ratePrice = new RatePrice()
    ratePrice.insurance_type_id = 2
    ratePrice.car_group_id = 5
    ratePrice.car_type_id = 1
    ratePrice.price = 8,500
    ratePrice.save()

    ratePrice = new RatePrice()
    ratePrice.insurance_type_id = 2
    ratePrice.car_group_id = 5
    ratePrice.car_type_id = 2
    ratePrice.price = 8,500
    ratePrice.save()

    ratePrice = new RatePrice()
    ratePrice.insurance_type_id = 2
    ratePrice.car_group_id = 5
    ratePrice.car_type_id = 3
    ratePrice.price = 10,300
    ratePrice.save()

    /** 2+ Max (ซ่อมอู่)
     *  option 3
     *  > ทุนประกัน = 300,000
     *  > ภัยธรรมชาติ = 200,000
    */
    //-------- รถกลุ่ม 1 -------- 
    ratePrice = new RatePrice()
    ratePrice.insurance_type_id = 3
    ratePrice.car_group_id = 1
    ratePrice.car_type_id = 1
    ratePrice.price = 10,500
    ratePrice.save()

    ratePrice = new RatePrice()
    ratePrice.insurance_type_id = 3
    ratePrice.car_group_id = 1
    ratePrice.car_type_id = 2
    ratePrice.price = 10,500
    ratePrice.save()

    ratePrice = new RatePrice()
    ratePrice.insurance_type_id = 3
    ratePrice.car_group_id = 1
    ratePrice.car_type_id = 3
    ratePrice.price = 12,300
    ratePrice.save()

    //-------- รถกลุ่ม 2 -------- 
    ratePrice = new RatePrice()
    ratePrice.insurance_type_id = 3
    ratePrice.car_group_id = 2
    ratePrice.car_type_id = 1
    ratePrice.price = 10,500
    ratePrice.save()

    ratePrice = new RatePrice()
    ratePrice.insurance_type_id = 3
    ratePrice.car_group_id = 2
    ratePrice.car_type_id = 2
    ratePrice.price = 10,500
    ratePrice.save()

    ratePrice = new RatePrice()
    ratePrice.insurance_type_id = 3
    ratePrice.car_group_id = 2
    ratePrice.car_type_id = 3
    ratePrice.price = 12,300
    ratePrice.save()

    //-------- รถกลุ่ม 3 -------- 
    ratePrice = new RatePrice()
    ratePrice.insurance_type_id = 3
    ratePrice.car_group_id = 3
    ratePrice.car_type_id = 1
    ratePrice.price = 9,500
    ratePrice.save()

    ratePrice = new RatePrice()
    ratePrice.insurance_type_id = 3
    ratePrice.car_group_id = 3
    ratePrice.car_type_id = 2
    ratePrice.price = 9,500
    ratePrice.save()

    ratePrice = new RatePrice()
    ratePrice.insurance_type_id = 3
    ratePrice.car_group_id = 3
    ratePrice.car_type_id = 3
    ratePrice.price = 11,300
    ratePrice.save()

    //-------- รถกลุ่ม 4 -------- 
    ratePrice = new RatePrice()
    ratePrice.insurance_type_id = 3
    ratePrice.car_group_id = 4
    ratePrice.car_type_id = 1
    ratePrice.price = 9,500
    ratePrice.save()

    ratePrice = new RatePrice()
    ratePrice.insurance_type_id = 3
    ratePrice.car_group_id = 4
    ratePrice.car_type_id = 2
    ratePrice.price = 9,500
    ratePrice.save()

    ratePrice = new RatePrice()
    ratePrice.insurance_type_id = 3
    ratePrice.car_group_id = 4
    ratePrice.car_type_id = 3
    ratePrice.price = 11,300
    ratePrice.save()

    //-------- รถกลุ่ม 5 -------- 
    ratePrice = new RatePrice()
    ratePrice.insurance_type_id = 3
    ratePrice.car_group_id = 5
    ratePrice.car_type_id = 1
    ratePrice.price = 9,500
    ratePrice.save()

    ratePrice = new RatePrice()
    ratePrice.insurance_type_id = 3
    ratePrice.car_group_id = 5
    ratePrice.car_type_id = 2
    ratePrice.price = 9,500
    ratePrice.save()

    ratePrice = new RatePrice()
    ratePrice.insurance_type_id = 3
    ratePrice.car_group_id = 5
    ratePrice.car_type_id = 3
    ratePrice.price = 11,300
    ratePrice.save()

    /** 2+ 35 up
     *  option 1
     *  > ทุนประกัน = 100,000
    */
    //-------- รถกลุ่ม 1 -------- 
    ratePrice = new RatePrice()
    ratePrice.insurance_type_id = 1
    ratePrice.car_group_id = 1
    ratePrice.car_type_id = 1
    ratePrice.price = 6,900
    ratePrice.save()

    ratePrice = new RatePrice()
    ratePrice.insurance_type_id = 1
    ratePrice.car_group_id = 1
    ratePrice.car_type_id = 2
    ratePrice.price = 6,499
    ratePrice.save()

    //-------- รถกลุ่ม 2 -------- 
    ratePrice = new RatePrice()
    ratePrice.insurance_type_id = 1
    ratePrice.car_group_id = 2
    ratePrice.car_type_id = 1
    ratePrice.price = 6,900
    ratePrice.save()

    ratePrice = new RatePrice()
    ratePrice.insurance_type_id = 1
    ratePrice.car_group_id = 2
    ratePrice.car_type_id = 2
    ratePrice.price = 6,499
    ratePrice.save()

    //-------- รถกลุ่ม 3 -------- 
    ratePrice = new RatePrice()
    ratePrice.insurance_type_id = 1
    ratePrice.car_group_id = 3
    ratePrice.car_type_id = 1
    ratePrice.price = 5,900
    ratePrice.save()

    ratePrice = new RatePrice()
    ratePrice.insurance_type_id = 1
    ratePrice.car_group_id = 3
    ratePrice.car_type_id = 2
    ratePrice.price = 6,499
    ratePrice.save()

    //-------- รถกลุ่ม 4 -------- 
    ratePrice = new RatePrice()
    ratePrice.insurance_type_id = 1
    ratePrice.car_group_id = 4
    ratePrice.car_type_id = 1
    ratePrice.price = 5,900
    ratePrice.save()

    ratePrice = new RatePrice()
    ratePrice.insurance_type_id = 1
    ratePrice.car_group_id = 4
    ratePrice.car_type_id = 2
    ratePrice.price = 6,499
    ratePrice.save()

    //-------- รถกลุ่ม 5 -------- 
    ratePrice = new RatePrice()
    ratePrice.insurance_type_id = 1
    ratePrice.car_group_id = 5
    ratePrice.car_type_id = 1
    ratePrice.price = 5,900
    ratePrice.save()

    ratePrice = new RatePrice()
    ratePrice.insurance_type_id = 1
    ratePrice.car_group_id = 5
    ratePrice.car_type_id = 2
    ratePrice.price = 6,499
    ratePrice.save()

    /** 2+ 35 up
     *  option 2
     *  > ทุนประกัน = 100,000
    */
    //-------- รถกลุ่ม 1 -------- 
    ratePrice = new RatePrice()
    ratePrice.insurance_type_id = 2
    ratePrice.car_group_id = 1
    ratePrice.car_type_id = 1
    ratePrice.price = null
    ratePrice.save()

    ratePrice = new RatePrice()
    ratePrice.insurance_type_id = 2
    ratePrice.car_group_id = 1
    ratePrice.car_type_id = 2
    ratePrice.price = 7,499
    ratePrice.save()

    //-------- รถกลุ่ม 2 -------- 
    ratePrice = new RatePrice()
    ratePrice.insurance_type_id = 2
    ratePrice.car_group_id = 2
    ratePrice.car_type_id = 1
    ratePrice.price = null
    ratePrice.save()

    ratePrice = new RatePrice()
    ratePrice.insurance_type_id = 2
    ratePrice.car_group_id = 2
    ratePrice.car_type_id = 2
    ratePrice.price = 7,499
    ratePrice.save()

    //-------- รถกลุ่ม 3 -------- 
    ratePrice = new RatePrice()
    ratePrice.insurance_type_id = 2
    ratePrice.car_group_id = 3
    ratePrice.car_type_id = 1
    ratePrice.price = 6,900
    ratePrice.save()

    ratePrice = new RatePrice()
    ratePrice.insurance_type_id = 2
    ratePrice.car_group_id = 3
    ratePrice.car_type_id = 2
    ratePrice.price = 7,499
    ratePrice.save()

    //-------- รถกลุ่ม 4 -------- 
    ratePrice = new RatePrice()
    ratePrice.insurance_type_id = 2
    ratePrice.car_group_id = 4
    ratePrice.car_type_id = 1
    ratePrice.price = 6,900
    ratePrice.save()

    ratePrice = new RatePrice()
    ratePrice.insurance_type_id = 2
    ratePrice.car_group_id = 4
    ratePrice.car_type_id = 2
    ratePrice.price = 7,499
    ratePrice.save()

    //-------- รถกลุ่ม 5 -------- 
    ratePrice = new RatePrice()
    ratePrice.insurance_type_id = 2
    ratePrice.car_group_id = 5
    ratePrice.car_type_id = 1
    ratePrice.price = 6,900
    ratePrice.save()

    ratePrice = new RatePrice()
    ratePrice.insurance_type_id = 2
    ratePrice.car_group_id = 5
    ratePrice.car_type_id = 2
    ratePrice.price = 7,499
    ratePrice.save()
    
     /** 2 Minimal (ซ่อมอู่)
    */
    //-------- รถกลุ่ม 1 -------- 
    ratePrice = new RatePrice()
    ratePrice.insurance_type_id = 1
    ratePrice.car_group_id = 1
    ratePrice.car_type_id = 1
    ratePrice.price = 7,900
    ratePrice.save()

    ratePrice = new RatePrice()
    ratePrice.insurance_type_id = 1
    ratePrice.car_group_id = 1
    ratePrice.car_type_id = 2
    ratePrice.price = 7,900
    ratePrice.save()

    //-------- รถกลุ่ม 2 -------- 
    ratePrice = new RatePrice()
    ratePrice.insurance_type_id = 1
    ratePrice.car_group_id = 2
    ratePrice.car_type_id = 1
    ratePrice.price = 7,900
    ratePrice.save()

    ratePrice = new RatePrice()
    ratePrice.insurance_type_id = 1
    ratePrice.car_group_id = 2
    ratePrice.car_type_id = 2
    ratePrice.price = 7,900
    ratePrice.save()

    //-------- รถกลุ่ม 3 -------- 
    ratePrice = new RatePrice()
    ratePrice.insurance_type_id = 1
    ratePrice.car_group_id = 3
    ratePrice.car_type_id = 1
    ratePrice.price = 6,900
    ratePrice.save()

    ratePrice = new RatePrice()
    ratePrice.insurance_type_id = 1
    ratePrice.car_group_id = 3
    ratePrice.car_type_id = 2
    ratePrice.price = 6,900
    ratePrice.save()

    //-------- รถกลุ่ม 4 -------- 
    ratePrice = new RatePrice()
    ratePrice.insurance_type_id = 1
    ratePrice.car_group_id = 4
    ratePrice.car_type_id = 1
    ratePrice.price = 6,900
    ratePrice.save()

    ratePrice = new RatePrice()
    ratePrice.insurance_type_id = 1
    ratePrice.car_group_id = 4
    ratePrice.car_type_id = 2
    ratePrice.price = 6,900
    ratePrice.save()

    //-------- รถกลุ่ม 5 -------- 
    ratePrice = new RatePrice()
    ratePrice.insurance_type_id = 1
    ratePrice.car_group_id = 5
    ratePrice.car_type_id = 1
    ratePrice.price = 6,900
    ratePrice.save()

    ratePrice = new RatePrice()
    ratePrice.insurance_type_id = 1
    ratePrice.car_group_id = 5
    ratePrice.car_type_id = 2
    ratePrice.price = 6,900
    ratePrice.save()

    /** 3+
     *  option 1
     *  > มีค่าเสียหายส่วนแรก = 2,000
    */
    //-------- รถกลุ่ม 1 -------- 
    ratePrice = new RatePrice()
    ratePrice.insurance_type_id = 1
    ratePrice.car_group_id = 1
    ratePrice.car_type_id = 1
    ratePrice.price = 7,800
    ratePrice.save()

    ratePrice = new RatePrice()
    ratePrice.insurance_type_id = 1
    ratePrice.car_group_id = 1
    ratePrice.car_type_id = 2
    ratePrice.price = 7,800
    ratePrice.save()

    ratePrice = new RatePrice()
    ratePrice.insurance_type_id = 1
    ratePrice.car_group_id = 1
    ratePrice.car_type_id = 3
    ratePrice.price = 7,800
    ratePrice.save()

    //-------- รถกลุ่ม 2 -------- 
    ratePrice = new RatePrice()
    ratePrice.insurance_type_id = 1
    ratePrice.car_group_id = 2
    ratePrice.car_type_id = 1
    ratePrice.price = 7,800
    ratePrice.save()

    ratePrice = new RatePrice()
    ratePrice.insurance_type_id = 1
    ratePrice.car_group_id = 2
    ratePrice.car_type_id = 2
    ratePrice.price = 7,800
    ratePrice.save()

    ratePrice = new RatePrice()
    ratePrice.insurance_type_id = 1
    ratePrice.car_group_id = 2
    ratePrice.car_type_id = 2
    ratePrice.price = 7,800
    ratePrice.save()

    //-------- รถกลุ่ม 3 -------- 
    ratePrice = new RatePrice()
    ratePrice.insurance_type_id = 1
    ratePrice.car_group_id = 3
    ratePrice.car_type_id = 1
    ratePrice.price = 6,800
    ratePrice.save()

    ratePrice = new RatePrice()
    ratePrice.insurance_type_id = 1
    ratePrice.car_group_id = 3
    ratePrice.car_type_id = 2
    ratePrice.price = 6,800
    ratePrice.save()

    ratePrice = new RatePrice()
    ratePrice.insurance_type_id = 1
    ratePrice.car_group_id = 3
    ratePrice.car_type_id = 3
    ratePrice.price = 6,800
    ratePrice.save()

    //-------- รถกลุ่ม 4 -------- 
    ratePrice = new RatePrice()
    ratePrice.insurance_type_id = 1
    ratePrice.car_group_id = 4
    ratePrice.car_type_id = 1
    ratePrice.price = 6,800
    ratePrice.save()

    ratePrice = new RatePrice()
    ratePrice.insurance_type_id = 1
    ratePrice.car_group_id = 4
    ratePrice.car_type_id = 2
    ratePrice.price = 6,800
    ratePrice.save()

    ratePrice = new RatePrice()
    ratePrice.insurance_type_id = 1
    ratePrice.car_group_id = 4
    ratePrice.car_type_id = 3
    ratePrice.price = 6,800
    ratePrice.save()

    //-------- รถกลุ่ม 5 -------- 
    ratePrice = new RatePrice()
    ratePrice.insurance_type_id = 1
    ratePrice.car_group_id = 5
    ratePrice.car_type_id = 1
    ratePrice.price = 6,800
    ratePrice.save()

    ratePrice = new RatePrice()
    ratePrice.insurance_type_id = 1
    ratePrice.car_group_id = 5
    ratePrice.car_type_id = 2
    ratePrice.price = 6,800
    ratePrice.save()

    ratePrice = new RatePrice()
    ratePrice.insurance_type_id = 1
    ratePrice.car_group_id = 5
    ratePrice.car_type_id = 3
    ratePrice.price = 6,800
    ratePrice.save()

    /** 3+
     *  option 2
     *  > ไม่มีค่าเสียหายส่วนแรก
    */
    //-------- รถกลุ่ม 1 -------- 
    ratePrice = new RatePrice()
    ratePrice.insurance_type_id = 2
    ratePrice.car_group_id = 1
    ratePrice.car_type_id = 1
    ratePrice.price = 8,500
    ratePrice.save()

    ratePrice = new RatePrice()
    ratePrice.insurance_type_id = 2
    ratePrice.car_group_id = 1
    ratePrice.car_type_id = 2
    ratePrice.price = 8,500
    ratePrice.save()

    ratePrice = new RatePrice()
    ratePrice.insurance_type_id = 2
    ratePrice.car_group_id = 1
    ratePrice.car_type_id = 3
    ratePrice.price = 8,500
    ratePrice.save()

    //-------- รถกลุ่ม 2 -------- 
    ratePrice = new RatePrice()
    ratePrice.insurance_type_id = 2
    ratePrice.car_group_id = 2
    ratePrice.car_type_id = 1
    ratePrice.price = 8,500
    ratePrice.save()

    ratePrice = new RatePrice()
    ratePrice.insurance_type_id = 2
    ratePrice.car_group_id = 2
    ratePrice.car_type_id = 2
    ratePrice.price = 8,500
    ratePrice.save()

    ratePrice = new RatePrice()
    ratePrice.insurance_type_id = 2
    ratePrice.car_group_id = 2
    ratePrice.car_type_id = 3
    ratePrice.price = 8,500
    ratePrice.save()

    //-------- รถกลุ่ม 3 -------- 
    ratePrice = new RatePrice()
    ratePrice.insurance_type_id = 2
    ratePrice.car_group_id = 3
    ratePrice.car_type_id = 1
    ratePrice.price = 7,500
    ratePrice.save()

    ratePrice = new RatePrice()
    ratePrice.insurance_type_id = 2
    ratePrice.car_group_id = 3
    ratePrice.car_type_id = 2
    ratePrice.price = 7,500
    ratePrice.save()

    ratePrice = new RatePrice()
    ratePrice.insurance_type_id = 2
    ratePrice.car_group_id = 3
    ratePrice.car_type_id = 3
    ratePrice.price = 7,500
    ratePrice.save()

    //-------- รถกลุ่ม 4 -------- 
    ratePrice = new RatePrice()
    ratePrice.insurance_type_id = 2
    ratePrice.car_group_id = 4
    ratePrice.car_type_id = 1
    ratePrice.price = 7,500
    ratePrice.save()

    ratePrice = new RatePrice()
    ratePrice.insurance_type_id = 2
    ratePrice.car_group_id = 4
    ratePrice.car_type_id = 2
    ratePrice.price = 7,500
    ratePrice.save()

    ratePrice = new RatePrice()
    ratePrice.insurance_type_id = 2
    ratePrice.car_group_id = 4
    ratePrice.car_type_id = 3
    ratePrice.price = 7,500
    ratePrice.save()

    //-------- รถกลุ่ม 5 -------- 
    ratePrice = new RatePrice()
    ratePrice.insurance_type_id = 2
    ratePrice.car_group_id = 5
    ratePrice.car_type_id = 1
    ratePrice.price = 7,500
    ratePrice.save()

    ratePrice = new RatePrice()
    ratePrice.insurance_type_id = 2
    ratePrice.car_group_id = 5
    ratePrice.car_type_id = 2
    ratePrice.price = 7,500
    ratePrice.save()

    ratePrice = new RatePrice()
    ratePrice.insurance_type_id = 2
    ratePrice.car_group_id = 5
    ratePrice.car_type_id = 3
    ratePrice.price = 7,500
    ratePrice.save()

    /** 2 เซฟ Special
     *  no option 
    */
    //-------- รถกลุ่ม 1 --------  
    ratePrice = new RatePrice()
    ratePrice.insurance_type_id = 1
    ratePrice.car_group_id = 1
    ratePrice.car_type_id = 1
    ratePrice.price = 2,550
    ratePrice.save()

    ratePrice = new RatePrice()
    ratePrice.insurance_type_id = 1
    ratePrice.car_group_id = 1
    ratePrice.car_type_id = 2
    ratePrice.price = 3,350
    ratePrice.save()

    //-------- รถกลุ่ม 2 -------- 
    ratePrice = new RatePrice()
    ratePrice.insurance_type_id = 1
    ratePrice.car_group_id = 2
    ratePrice.car_type_id = 1
    ratePrice.price = 2,550
    ratePrice.save()

    ratePrice = new RatePrice()
    ratePrice.insurance_type_id = 1
    ratePrice.car_group_id = 2
    ratePrice.car_type_id = 2
    ratePrice.price = 3,350
    ratePrice.save()
    
    //-------- รถกลุ่ม 3 -------- 
    ratePrice = new RatePrice()
    ratePrice.insurance_type_id = 1
    ratePrice.car_group_id = 3
    ratePrice.car_type_id = 1
    ratePrice.price = 2,550
    ratePrice.save()

    ratePrice = new RatePrice()
    ratePrice.insurance_type_id = 1
    ratePrice.car_group_id = 3
    ratePrice.car_type_id = 2
    ratePrice.price = 3,350
    ratePrice.save()

    //-------- รถกลุ่ม 4 -------- 
    ratePrice = new RatePrice()
    ratePrice.insurance_type_id = 1
    ratePrice.car_group_id = 4
    ratePrice.car_type_id = 1
    ratePrice.price = 2,550
    ratePrice.save()

    ratePrice = new RatePrice()
    ratePrice.insurance_type_id = 1
    ratePrice.car_group_id = 4
    ratePrice.car_type_id = 2
    ratePrice.price = 3,350
    ratePrice.save()

    //-------- รถกลุ่ม 5 -------- 
    ratePrice = new RatePrice()
    ratePrice.insurance_type_id = 1
    ratePrice.car_group_id = 5
    ratePrice.car_type_id = 1
    ratePrice.price = 2,550
    ratePrice.save()

    ratePrice = new RatePrice()
    ratePrice.insurance_type_id = 1
    ratePrice.car_group_id = 5
    ratePrice.car_type_id = 2
    ratePrice.price = 3,350
    ratePrice.save()

    /** 2 Bumper
     *  no option 
    */
    //-------- รถกลุ่ม 1 --------  
    ratePrice = new RatePrice()
    ratePrice.insurance_type_id = 1
    ratePrice.car_group_id = 1
    ratePrice.car_type_id = 1
    ratePrice.price = 3,599
    ratePrice.save()

    ratePrice = new RatePrice()
    ratePrice.insurance_type_id = 1
    ratePrice.car_group_id = 1
    ratePrice.car_type_id = 2
    ratePrice.price = 3,599
    ratePrice.save()

    //-------- รถกลุ่ม 2 -------- 
    ratePrice = new RatePrice()
    ratePrice.insurance_type_id = 1
    ratePrice.car_group_id = 2
    ratePrice.car_type_id = 1
    ratePrice.price = 3,599
    ratePrice.save()

    ratePrice = new RatePrice()
    ratePrice.insurance_type_id = 1
    ratePrice.car_group_id = 2
    ratePrice.car_type_id = 2
    ratePrice.price = 3,599
    ratePrice.save()
    
    //-------- รถกลุ่ม 3 -------- 
    ratePrice = new RatePrice()
    ratePrice.insurance_type_id = 1
    ratePrice.car_group_id = 3
    ratePrice.car_type_id = 1
    ratePrice.price = 3,599
    ratePrice.save()

    ratePrice = new RatePrice()
    ratePrice.insurance_type_id = 1
    ratePrice.car_group_id = 3
    ratePrice.car_type_id = 2
    ratePrice.price = 3,599
    ratePrice.save()

    //-------- รถกลุ่ม 4 -------- 
    ratePrice = new RatePrice()
    ratePrice.insurance_type_id = 1
    ratePrice.car_group_id = 4
    ratePrice.car_type_id = 1
    ratePrice.price = 3,599
    ratePrice.save()

    ratePrice = new RatePrice()
    ratePrice.insurance_type_id = 1
    ratePrice.car_group_id = 4
    ratePrice.car_type_id = 2
    ratePrice.price = 3,599
    ratePrice.save()

    //-------- รถกลุ่ม 5 -------- 
    ratePrice = new RatePrice()
    ratePrice.insurance_type_id = 1
    ratePrice.car_group_id = 5
    ratePrice.car_type_id = 1
    ratePrice.price = 3,599
    ratePrice.save()

    ratePrice = new RatePrice()
    ratePrice.insurance_type_id = 1
    ratePrice.car_group_id = 5
    ratePrice.car_type_id = 2
    ratePrice.price = 3,599
    ratePrice.save()
    
    /** 3 Best
     *  no option 
    */
    //-------- รถกลุ่ม 1 --------  
    ratePrice = new RatePrice()
    ratePrice.insurance_type_id = 1
    ratePrice.car_group_id = 1
    ratePrice.car_type_id = 1
    ratePrice.price = 2,250
    ratePrice.save()

    ratePrice = new RatePrice()
    ratePrice.insurance_type_id = 1
    ratePrice.car_group_id = 1
    ratePrice.car_type_id = 2
    ratePrice.price = 3,000
    ratePrice.save()

    ratePrice = new RatePrice()
    ratePrice.insurance_type_id = 1
    ratePrice.car_group_id = 1
    ratePrice.car_type_id = 3
    ratePrice.price = 3,250
    ratePrice.save()
    
    //-------- รถกลุ่ม 2 -------- 
    ratePrice = new RatePrice()
    ratePrice.insurance_type_id = 1
    ratePrice.car_group_id = 2
    ratePrice.car_type_id = 1
    ratePrice.price = 2,250
    ratePrice.save()

    ratePrice = new RatePrice()
    ratePrice.insurance_type_id = 1
    ratePrice.car_group_id = 2
    ratePrice.car_type_id = 2
    ratePrice.price = 3,000
    ratePrice.save()

    ratePrice = new RatePrice()
    ratePrice.insurance_type_id = 1
    ratePrice.car_group_id = 2
    ratePrice.car_type_id = 3
    ratePrice.price = 3,250
    ratePrice.save()
    
    //-------- รถกลุ่ม 3 -------- 
    ratePrice = new RatePrice()
    ratePrice.insurance_type_id = 1
    ratePrice.car_group_id = 3
    ratePrice.car_type_id = 1
    ratePrice.price = 2,250
    ratePrice.save()

    ratePrice = new RatePrice()
    ratePrice.insurance_type_id = 1
    ratePrice.car_group_id = 3
    ratePrice.car_type_id = 2
    ratePrice.price = 3,000
    ratePrice.save()

    ratePrice = new RatePrice()
    ratePrice.insurance_type_id = 1
    ratePrice.car_group_id = 3
    ratePrice.car_type_id = 3
    ratePrice.price = 3,250
    ratePrice.save()

    //-------- รถกลุ่ม 4 -------- 
    ratePrice = new RatePrice()
    ratePrice.insurance_type_id = 1
    ratePrice.car_group_id = 4
    ratePrice.car_type_id = 1
    ratePrice.price = 2,250
    ratePrice.save()

    ratePrice = new RatePrice()
    ratePrice.insurance_type_id = 1
    ratePrice.car_group_id = 4
    ratePrice.car_type_id = 2
    ratePrice.price = 3,000
    ratePrice.save()

    ratePrice = new RatePrice()
    ratePrice.insurance_type_id = 1
    ratePrice.car_group_id = 4
    ratePrice.car_type_id = 3
    ratePrice.price = 3,250
    ratePrice.save()

    //-------- รถกลุ่ม 5 -------- 
    ratePrice = new RatePrice()
    ratePrice.insurance_type_id = 1
    ratePrice.car_group_id = 5
    ratePrice.car_type_id = 1
    ratePrice.price = 2,250
    ratePrice.save()

    ratePrice = new RatePrice()
    ratePrice.insurance_type_id = 1
    ratePrice.car_group_id = 5
    ratePrice.car_type_id = 2
    ratePrice.price = 3,000
    ratePrice.save()

    ratePrice = new RatePrice()
    ratePrice.insurance_type_id = 1
    ratePrice.car_group_id = 5
    ratePrice.car_type_id = 3
    ratePrice.price = 3,250
    ratePrice.save()

    /** 3 กันชน
     *  no option 
    */
    //-------- รถกลุ่ม 1 --------  
    ratePrice = new RatePrice()
    ratePrice.insurance_type_id = 1
    ratePrice.car_group_id = 1
    ratePrice.car_type_id = 1
    ratePrice.price = 3,333
    ratePrice.save()

    ratePrice = new RatePrice()
    ratePrice.insurance_type_id = 1
    ratePrice.car_group_id = 1
    ratePrice.car_type_id = 2
    ratePrice.price = 3,333
    ratePrice.save()

    ratePrice = new RatePrice()
    ratePrice.insurance_type_id = 1
    ratePrice.car_group_id = 1
    ratePrice.car_type_id = 3
    ratePrice.price = 3,333
    ratePrice.save()
    
    //-------- รถกลุ่ม 2 -------- 
    ratePrice = new RatePrice()
    ratePrice.insurance_type_id = 1
    ratePrice.car_group_id = 2
    ratePrice.car_type_id = 1
    ratePrice.price = 3,333
    ratePrice.save()

    ratePrice = new RatePrice()
    ratePrice.insurance_type_id = 1
    ratePrice.car_group_id = 2
    ratePrice.car_type_id = 2
    ratePrice.price = 3,333
    ratePrice.save()

    ratePrice = new RatePrice()
    ratePrice.insurance_type_id = 1
    ratePrice.car_group_id = 2
    ratePrice.car_type_id = 3
    ratePrice.price = 3,333
    ratePrice.save()
    
    //-------- รถกลุ่ม 3 -------- 
    ratePrice = new RatePrice()
    ratePrice.insurance_type_id = 1
    ratePrice.car_group_id = 3
    ratePrice.car_type_id = 1
    ratePrice.price = 3,333
    ratePrice.save()

    ratePrice = new RatePrice()
    ratePrice.insurance_type_id = 1
    ratePrice.car_group_id = 3
    ratePrice.car_type_id = 2
    ratePrice.price = 3,333
    ratePrice.save()

    ratePrice = new RatePrice()
    ratePrice.insurance_type_id = 1
    ratePrice.car_group_id = 3
    ratePrice.car_type_id = 3
    ratePrice.price = 3,333
    ratePrice.save()

    //-------- รถกลุ่ม 4 -------- 
    ratePrice = new RatePrice()
    ratePrice.insurance_type_id = 1
    ratePrice.car_group_id = 4
    ratePrice.car_type_id = 1
    ratePrice.price = 3,333
    ratePrice.save()

    ratePrice = new RatePrice()
    ratePrice.insurance_type_id = 1
    ratePrice.car_group_id = 4
    ratePrice.car_type_id = 2
    ratePrice.price = 3,333
    ratePrice.save()

    ratePrice = new RatePrice()
    ratePrice.insurance_type_id = 1
    ratePrice.car_group_id = 4
    ratePrice.car_type_id = 3
    ratePrice.price = 3,333
    ratePrice.save()

    //-------- รถกลุ่ม 5 -------- 
    ratePrice = new RatePrice()
    ratePrice.insurance_type_id = 1
    ratePrice.car_group_id = 5
    ratePrice.car_type_id = 1
    ratePrice.price = 3,333
    ratePrice.save()

    ratePrice = new RatePrice()
    ratePrice.insurance_type_id = 1
    ratePrice.car_group_id = 5
    ratePrice.car_type_id = 2
    ratePrice.price = 3,333
    ratePrice.save()

    ratePrice = new RatePrice()
    ratePrice.insurance_type_id = 1
    ratePrice.car_group_id = 5
    ratePrice.car_type_id = 3
    ratePrice.price = 3,333
    ratePrice.save()

  }
}

module.exports = RatePriceSeeder
