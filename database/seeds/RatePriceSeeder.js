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
    await ratePrice.save()

    ratePrice = new RatePrice()
    ratePrice.insurance_type_id = 1
    ratePrice.car_group_id = 1
    ratePrice.car_type_id = 2
    ratePrice.price = 11000
    await ratePrice.save()

    ratePrice = new RatePrice()
    ratePrice.insurance_type_id = 1
    ratePrice.car_group_id = 1
    ratePrice.car_type_id = 3
    ratePrice.price = 12800
    await ratePrice.save()

    //-------- รถกลุ่ม 2 -------- 
    ratePrice = new RatePrice()
    ratePrice.insurance_type_id = 1
    ratePrice.car_group_id = 2
    ratePrice.car_type_id = 1
    ratePrice.price = 11000
    await ratePrice.save()

    ratePrice = new RatePrice()
    ratePrice.insurance_type_id = 1
    ratePrice.car_group_id = 2
    ratePrice.car_type_id = 2
    ratePrice.price = 11000
    await ratePrice.save()

    ratePrice = new RatePrice()
    ratePrice.insurance_type_id = 1
    ratePrice.car_group_id = 2
    ratePrice.car_type_id = 3
    ratePrice.price = 12800
    await ratePrice.save()

    //-------- รถกลุ่ม 3 -------- 
    ratePrice = new RatePrice()
    ratePrice.insurance_type_id = 1
    ratePrice.car_group_id = 3
    ratePrice.car_type_id = 1
    ratePrice.price = 10000
    await ratePrice.save()

    ratePrice = new RatePrice()
    ratePrice.insurance_type_id = 1
    ratePrice.car_group_id = 3
    ratePrice.car_type_id = 2
    ratePrice.price = 10000
    await ratePrice.save()

    ratePrice = new RatePrice()
    ratePrice.insurance_type_id = 1
    ratePrice.car_group_id = 3
    ratePrice.car_type_id = 3
    ratePrice.price = 11800
    await ratePrice.save()

    //-------- รถกลุ่ม 4 -------- 
    ratePrice = new RatePrice()
    ratePrice.insurance_type_id = 1
    ratePrice.car_group_id = 4
    ratePrice.car_type_id = 1
    ratePrice.price = 10000
    await ratePrice.save()

    ratePrice = new RatePrice()
    ratePrice.insurance_type_id = 1
    ratePrice.car_group_id = 4
    ratePrice.car_type_id = 2
    ratePrice.price = 10000
    await ratePrice.save()

    ratePrice = new RatePrice()
    ratePrice.insurance_type_id = 1
    ratePrice.car_group_id = 4
    ratePrice.car_type_id = 3
    ratePrice.price = 11800
    await ratePrice.save()

    //-------- รถกลุ่ม 5 -------- 
    ratePrice = new RatePrice()
    ratePrice.insurance_type_id = 1
    ratePrice.car_group_id = 5
    ratePrice.car_type_id = 1
    ratePrice.price = 10000
    await ratePrice.save()

    ratePrice = new RatePrice()
    ratePrice.insurance_type_id = 1
    ratePrice.car_group_id = 5
    ratePrice.car_type_id = 2
    ratePrice.price = 10000
    await ratePrice.save()

    ratePrice = new RatePrice()
    ratePrice.insurance_type_id = 1
    ratePrice.car_group_id = 5
    ratePrice.car_type_id = 3
    ratePrice.price = 11800
    await ratePrice.save()

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
    await ratePrice.save()

    ratePrice = new RatePrice()
    ratePrice.insurance_type_id = 2
    ratePrice.car_group_id = 1
    ratePrice.car_type_id = 2
    ratePrice.price = 11600
    await ratePrice.save()

    ratePrice = new RatePrice()
    ratePrice.insurance_type_id = 2
    ratePrice.car_group_id = 1
    ratePrice.car_type_id = 3
    ratePrice.price = 13400
    await ratePrice.save()

    //-------- รถกลุ่ม 2 -------- 
    ratePrice = new RatePrice()
    ratePrice.insurance_type_id = 2
    ratePrice.car_group_id = 2
    ratePrice.car_type_id = 1
    ratePrice.price = 11600
    await ratePrice.save()

    ratePrice = new RatePrice()
    ratePrice.insurance_type_id = 2
    ratePrice.car_group_id = 2
    ratePrice.car_type_id = 2
    ratePrice.price = 11600
    await ratePrice.save()

    ratePrice = new RatePrice()
    ratePrice.insurance_type_id = 2
    ratePrice.car_group_id = 2
    ratePrice.car_type_id = 3
    ratePrice.price = 13400
    await ratePrice.save()

    //-------- รถกลุ่ม 3 -------- 
    ratePrice = new RatePrice()
    ratePrice.insurance_type_id = 2
    ratePrice.car_group_id = 3
    ratePrice.car_type_id = 1
    ratePrice.price = 10600
    await ratePrice.save()

    ratePrice = new RatePrice()
    ratePrice.insurance_type_id = 2
    ratePrice.car_group_id = 3
    ratePrice.car_type_id = 2
    ratePrice.price = 10600
    await ratePrice.save()

    ratePrice = new RatePrice()
    ratePrice.insurance_type_id = 2
    ratePrice.car_group_id = 3
    ratePrice.car_type_id = 3
    ratePrice.price = 12400
    await ratePrice.save()

    //-------- รถกลุ่ม 4 -------- 
    ratePrice = new RatePrice()
    ratePrice.insurance_type_id = 2
    ratePrice.car_group_id = 4
    ratePrice.car_type_id = 1
    ratePrice.price = 10600
    await ratePrice.save()

    ratePrice = new RatePrice()
    ratePrice.insurance_type_id = 2
    ratePrice.car_group_id = 4
    ratePrice.car_type_id = 2
    ratePrice.price = 10600
    await ratePrice.save()

    ratePrice = new RatePrice()
    ratePrice.insurance_type_id = 2
    ratePrice.car_group_id = 4
    ratePrice.car_type_id = 3
    ratePrice.price = 12400
    await ratePrice.save()

    //-------- รถกลุ่ม 5 -------- 
    ratePrice = new RatePrice()
    ratePrice.insurance_type_id = 2
    ratePrice.car_group_id = 5
    ratePrice.car_type_id = 1
    ratePrice.price = 10600
    await ratePrice.save()

    ratePrice = new RatePrice()
    ratePrice.insurance_type_id = 2
    ratePrice.car_group_id = 5
    ratePrice.car_type_id = 2
    ratePrice.price = 10600
    await ratePrice.save()

    ratePrice = new RatePrice()
    ratePrice.insurance_type_id = 2
    ratePrice.car_group_id = 5
    ratePrice.car_type_id = 3
    ratePrice.price = 12400
    await ratePrice.save()

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
    await ratePrice.save()

    ratePrice = new RatePrice()
    ratePrice.insurance_type_id = 3
    ratePrice.car_group_id = 1
    ratePrice.car_type_id = 2
    ratePrice.price = 12600
    await ratePrice.save()

    ratePrice = new RatePrice()
    ratePrice.insurance_type_id = 3
    ratePrice.car_group_id = 1
    ratePrice.car_type_id = 3
    ratePrice.price = 14400
    await ratePrice.save()

    //-------- รถกลุ่ม 2 -------- 
    ratePrice = new RatePrice()
    ratePrice.insurance_type_id = 3
    ratePrice.car_group_id = 2
    ratePrice.car_type_id = 1
    ratePrice.price = 12600
    await ratePrice.save()

    ratePrice = new RatePrice()
    ratePrice.insurance_type_id = 3
    ratePrice.car_group_id = 2
    ratePrice.car_type_id = 2
    ratePrice.price = 12600
    await ratePrice.save()

    ratePrice = new RatePrice()
    ratePrice.insurance_type_id = 3
    ratePrice.car_group_id = 2
    ratePrice.car_type_id = 3
    ratePrice.price = 14400
    await ratePrice.save()

    //-------- รถกลุ่ม 3 -------- 
    ratePrice = new RatePrice()
    ratePrice.insurance_type_id = 3
    ratePrice.car_group_id = 3
    ratePrice.car_type_id = 1
    ratePrice.price = 11600
    await ratePrice.save()

    ratePrice = new RatePrice()
    ratePrice.insurance_type_id = 3
    ratePrice.car_group_id = 3
    ratePrice.car_type_id = 2
    ratePrice.price = 11600
    await ratePrice.save()

    ratePrice = new RatePrice()
    ratePrice.insurance_type_id = 3
    ratePrice.car_group_id = 3
    ratePrice.car_type_id = 3
    ratePrice.price = 13400
    await ratePrice.save()

    //-------- รถกลุ่ม 4 -------- 
    ratePrice = new RatePrice()
    ratePrice.insurance_type_id = 3
    ratePrice.car_group_id = 4
    ratePrice.car_type_id = 1
    ratePrice.price = 11600
    await ratePrice.save()

    ratePrice = new RatePrice()
    ratePrice.insurance_type_id = 3
    ratePrice.car_group_id = 4
    ratePrice.car_type_id = 2
    ratePrice.price = 11600
    await ratePrice.save()

    ratePrice = new RatePrice()
    ratePrice.insurance_type_id = 3
    ratePrice.car_group_id = 4
    ratePrice.car_type_id = 3
    ratePrice.price = 13400
    await ratePrice.save()

    //-------- รถกลุ่ม 5 -------- 
    ratePrice = new RatePrice()
    ratePrice.insurance_type_id = 3
    ratePrice.car_group_id = 5
    ratePrice.car_type_id = 1
    ratePrice.price = 11600
    await ratePrice.save()

    ratePrice = new RatePrice()
    ratePrice.insurance_type_id = 3
    ratePrice.car_group_id = 5
    ratePrice.car_type_id = 2
    ratePrice.price = 11600
    await ratePrice.save()

    ratePrice = new RatePrice()
    ratePrice.insurance_type_id = 3
    ratePrice.car_group_id = 5
    ratePrice.car_type_id = 3
    ratePrice.price = 13400
    await ratePrice.save()

    /** 2+ Max (ซ่อมอู่)
     *  option 1
     *  > ทุนประกัน = 150,000
     *  > ภัยธรรมชาติ = 100,000
    */
    //-------- รถกลุ่ม 1 -------- 
    ratePrice = new RatePrice()
    ratePrice.insurance_type_id = 4
    ratePrice.car_group_id = 1
    ratePrice.car_type_id = 1
    ratePrice.price = 8900
    await ratePrice.save()

    ratePrice = new RatePrice()
    ratePrice.insurance_type_id = 4
    ratePrice.car_group_id = 1
    ratePrice.car_type_id = 2
    ratePrice.price = 8900
    await ratePrice.save()

    ratePrice = new RatePrice()
    ratePrice.insurance_type_id = 4
    ratePrice.car_group_id = 1
    ratePrice.car_type_id = 3
    ratePrice.price = 10700
    await ratePrice.save()

    //-------- รถกลุ่ม 2 -------- 
    ratePrice = new RatePrice()
    ratePrice.insurance_type_id = 4
    ratePrice.car_group_id = 2
    ratePrice.car_type_id = 1
    ratePrice.price = 8900
    await ratePrice.save()

    ratePrice = new RatePrice()
    ratePrice.insurance_type_id = 4
    ratePrice.car_group_id = 2
    ratePrice.car_type_id = 2
    ratePrice.price = 8900
    await ratePrice.save()

    ratePrice = new RatePrice()
    ratePrice.insurance_type_id = 4
    ratePrice.car_group_id = 2
    ratePrice.car_type_id = 3
    ratePrice.price = 10700
    await ratePrice.save()

    //-------- รถกลุ่ม 3 -------- 
    ratePrice = new RatePrice()
    ratePrice.insurance_type_id = 4
    ratePrice.car_group_id = 3
    ratePrice.car_type_id = 1
    ratePrice.price = 7900
    await ratePrice.save()

    ratePrice = new RatePrice()
    ratePrice.insurance_type_id = 4
    ratePrice.car_group_id = 3
    ratePrice.car_type_id = 2
    ratePrice.price = 7900
    await ratePrice.save()

    ratePrice = new RatePrice()
    ratePrice.insurance_type_id = 4
    ratePrice.car_group_id = 3
    ratePrice.car_type_id = 3
    ratePrice.price = 9700
    await ratePrice.save()

    //-------- รถกลุ่ม 4 -------- 
    ratePrice = new RatePrice()
    ratePrice.insurance_type_id = 4
    ratePrice.car_group_id = 4
    ratePrice.car_type_id = 1
    ratePrice.price = 7900
    await ratePrice.save()

    ratePrice = new RatePrice()
    ratePrice.insurance_type_id = 4
    ratePrice.car_group_id = 4
    ratePrice.car_type_id = 2
    ratePrice.price = 7900
    await ratePrice.save()

    ratePrice = new RatePrice()
    ratePrice.insurance_type_id = 4
    ratePrice.car_group_id = 4
    ratePrice.car_type_id = 3
    ratePrice.price = 9700
    await ratePrice.save()

    //-------- รถกลุ่ม 5 -------- 
    ratePrice = new RatePrice()
    ratePrice.insurance_type_id = 4
    ratePrice.car_group_id = 5
    ratePrice.car_type_id = 1
    ratePrice.price = 7900
    await ratePrice.save()

    ratePrice = new RatePrice()
    ratePrice.insurance_type_id = 4
    ratePrice.car_group_id = 5
    ratePrice.car_type_id = 2
    ratePrice.price = 7900
    await ratePrice.save()

    ratePrice = new RatePrice()
    ratePrice.insurance_type_id = 4
    ratePrice.car_group_id = 5
    ratePrice.car_type_id = 3
    ratePrice.price = 9700
    await ratePrice.save()

    /** 2+ Max (ซ่อมอู่)
     *  option 2
     *  > ทุนประกัน = 200,000
     *  > ภัยธรรมชาติ = 200,000
    */
    //-------- รถกลุ่ม 1 -------- 
    ratePrice = new RatePrice()
    ratePrice.insurance_type_id = 5
    ratePrice.car_group_id = 1
    ratePrice.car_type_id = 1
    ratePrice.price = 9500
    await ratePrice.save()

    ratePrice = new RatePrice()
    ratePrice.insurance_type_id = 5
    ratePrice.car_group_id = 1
    ratePrice.car_type_id = 2
    ratePrice.price = 9500
    await ratePrice.save()

    ratePrice = new RatePrice()
    ratePrice.insurance_type_id = 5
    ratePrice.car_group_id = 1
    ratePrice.car_type_id = 3
    ratePrice.price = 11300
    await ratePrice.save()

    //-------- รถกลุ่ม 2 -------- 
    ratePrice = new RatePrice()
    ratePrice.insurance_type_id = 5
    ratePrice.car_group_id = 2
    ratePrice.car_type_id = 1
    ratePrice.price = 9500
    await ratePrice.save()

    ratePrice = new RatePrice()
    ratePrice.insurance_type_id = 5
    ratePrice.car_group_id = 2
    ratePrice.car_type_id = 2
    ratePrice.price = 9500
    await ratePrice.save()

    ratePrice = new RatePrice()
    ratePrice.insurance_type_id = 5
    ratePrice.car_group_id = 2
    ratePrice.car_type_id = 3
    ratePrice.price = 11300
    await ratePrice.save()

    //-------- รถกลุ่ม 3 -------- 
    ratePrice = new RatePrice()
    ratePrice.insurance_type_id = 5
    ratePrice.car_group_id = 3
    ratePrice.car_type_id = 1
    ratePrice.price = 8500
    await ratePrice.save()

    ratePrice = new RatePrice()
    ratePrice.insurance_type_id = 5
    ratePrice.car_group_id = 3
    ratePrice.car_type_id = 2
    ratePrice.price = 8500
    await ratePrice.save()

    ratePrice = new RatePrice()
    ratePrice.insurance_type_id = 5
    ratePrice.car_group_id = 3
    ratePrice.car_type_id = 3
    ratePrice.price = 10300
    await ratePrice.save()

    //-------- รถกลุ่ม 4 -------- 
    ratePrice = new RatePrice()
    ratePrice.insurance_type_id = 5
    ratePrice.car_group_id = 4
    ratePrice.car_type_id = 1
    ratePrice.price = 8500
    await ratePrice.save()

    ratePrice = new RatePrice()
    ratePrice.insurance_type_id = 5
    ratePrice.car_group_id = 4
    ratePrice.car_type_id = 2
    ratePrice.price = 8500
    await ratePrice.save()

    ratePrice = new RatePrice()
    ratePrice.insurance_type_id = 5
    ratePrice.car_group_id = 4
    ratePrice.car_type_id = 3
    ratePrice.price = 10300
    await ratePrice.save()

    //-------- รถกลุ่ม 5 -------- 
    ratePrice = new RatePrice()
    ratePrice.insurance_type_id = 5
    ratePrice.car_group_id = 5
    ratePrice.car_type_id = 1
    ratePrice.price = 8500
    await ratePrice.save()

    ratePrice = new RatePrice()
    ratePrice.insurance_type_id = 5
    ratePrice.car_group_id = 5
    ratePrice.car_type_id = 2
    ratePrice.price = 8500
    await ratePrice.save()

    ratePrice = new RatePrice()
    ratePrice.insurance_type_id = 5
    ratePrice.car_group_id = 5
    ratePrice.car_type_id = 3
    ratePrice.price = 10300
    await ratePrice.save()

    /** 2+ Max (ซ่อมอู่)
     *  option 3
     *  > ทุนประกัน = 300,000
     *  > ภัยธรรมชาติ = 200,000
    */
    //-------- รถกลุ่ม 1 -------- 
    ratePrice = new RatePrice()
    ratePrice.insurance_type_id = 6
    ratePrice.car_group_id = 1
    ratePrice.car_type_id = 1
    ratePrice.price = 10500
    await ratePrice.save()

    ratePrice = new RatePrice()
    ratePrice.insurance_type_id = 6
    ratePrice.car_group_id = 1
    ratePrice.car_type_id = 2
    ratePrice.price = 10500
    await ratePrice.save()

    ratePrice = new RatePrice()
    ratePrice.insurance_type_id = 6
    ratePrice.car_group_id = 1
    ratePrice.car_type_id = 3
    ratePrice.price = 12300
    await ratePrice.save()

    //-------- รถกลุ่ม 2 -------- 
    ratePrice = new RatePrice()
    ratePrice.insurance_type_id = 6
    ratePrice.car_group_id = 2
    ratePrice.car_type_id = 1
    ratePrice.price = 10500
    await ratePrice.save()

    ratePrice = new RatePrice()
    ratePrice.insurance_type_id = 6
    ratePrice.car_group_id = 2
    ratePrice.car_type_id = 2
    ratePrice.price = 10500
    await ratePrice.save()

    ratePrice = new RatePrice()
    ratePrice.insurance_type_id = 6
    ratePrice.car_group_id = 2
    ratePrice.car_type_id = 3
    ratePrice.price = 12300
    await ratePrice.save()

    //-------- รถกลุ่ม 3 -------- 
    ratePrice = new RatePrice()
    ratePrice.insurance_type_id = 6
    ratePrice.car_group_id = 3
    ratePrice.car_type_id = 1
    ratePrice.price = 9500
    await ratePrice.save()

    ratePrice = new RatePrice()
    ratePrice.insurance_type_id = 6
    ratePrice.car_group_id = 3
    ratePrice.car_type_id = 2
    ratePrice.price = 9500
    await ratePrice.save()

    ratePrice = new RatePrice()
    ratePrice.insurance_type_id = 6
    ratePrice.car_group_id = 3
    ratePrice.car_type_id = 3
    ratePrice.price = 11300
    await ratePrice.save()

    //-------- รถกลุ่ม 4 -------- 
    ratePrice = new RatePrice()
    ratePrice.insurance_type_id = 6
    ratePrice.car_group_id = 4
    ratePrice.car_type_id = 1
    ratePrice.price = 9500
    await ratePrice.save()

    ratePrice = new RatePrice()
    ratePrice.insurance_type_id = 6
    ratePrice.car_group_id = 4
    ratePrice.car_type_id = 2
    ratePrice.price = 9500
    await ratePrice.save()

    ratePrice = new RatePrice()
    ratePrice.insurance_type_id = 6
    ratePrice.car_group_id = 4
    ratePrice.car_type_id = 3
    ratePrice.price = 11300
    await ratePrice.save()

    //-------- รถกลุ่ม 5 -------- 
    ratePrice = new RatePrice()
    ratePrice.insurance_type_id = 6
    ratePrice.car_group_id = 5
    ratePrice.car_type_id = 1
    ratePrice.price = 9500
    await ratePrice.save()

    ratePrice = new RatePrice()
    ratePrice.insurance_type_id = 6
    ratePrice.car_group_id = 5
    ratePrice.car_type_id = 2
    ratePrice.price = 9500
    await ratePrice.save()

    ratePrice = new RatePrice()
    ratePrice.insurance_type_id = 6
    ratePrice.car_group_id = 5
    ratePrice.car_type_id = 3
    ratePrice.price = 11300
    await ratePrice.save()

    /** 2+ 35 up
     *  option 1
     *  > ทุนประกัน = 100,000
    */
    //-------- รถกลุ่ม 1 -------- 
    ratePrice = new RatePrice()
    ratePrice.insurance_type_id = 7
    ratePrice.car_group_id = 1
    ratePrice.car_type_id = 1
    ratePrice.price = 6900
    await ratePrice.save()

    ratePrice = new RatePrice()
    ratePrice.insurance_type_id = 7
    ratePrice.car_group_id = 1
    ratePrice.car_type_id = 2
    ratePrice.price = 6499
    await ratePrice.save()

    //-------- รถกลุ่ม 2 -------- 
    ratePrice = new RatePrice()
    ratePrice.insurance_type_id = 7
    ratePrice.car_group_id = 2
    ratePrice.car_type_id = 1
    ratePrice.price = 6900
    await ratePrice.save()

    ratePrice = new RatePrice()
    ratePrice.insurance_type_id = 7
    ratePrice.car_group_id = 2
    ratePrice.car_type_id = 2
    ratePrice.price = 6499
    await ratePrice.save()

    //-------- รถกลุ่ม 3 -------- 
    ratePrice = new RatePrice()
    ratePrice.insurance_type_id = 7
    ratePrice.car_group_id = 3
    ratePrice.car_type_id = 1
    ratePrice.price = 5900
    await ratePrice.save()

    ratePrice = new RatePrice()
    ratePrice.insurance_type_id = 7
    ratePrice.car_group_id = 3
    ratePrice.car_type_id = 2
    ratePrice.price = 6499
    await ratePrice.save()

    //-------- รถกลุ่ม 4 -------- 
    ratePrice = new RatePrice()
    ratePrice.insurance_type_id = 7
    ratePrice.car_group_id = 4
    ratePrice.car_type_id = 1
    ratePrice.price = 5900
    await ratePrice.save()

    ratePrice = new RatePrice()
    ratePrice.insurance_type_id = 7
    ratePrice.car_group_id = 4
    ratePrice.car_type_id = 2
    ratePrice.price = 6499
    await ratePrice.save()

    //-------- รถกลุ่ม 5 -------- 
    ratePrice = new RatePrice()
    ratePrice.insurance_type_id = 7
    ratePrice.car_group_id = 5
    ratePrice.car_type_id = 1
    ratePrice.price = 5900
    await ratePrice.save()

    ratePrice = new RatePrice()
    ratePrice.insurance_type_id = 7
    ratePrice.car_group_id = 5
    ratePrice.car_type_id = 2
    ratePrice.price = 6499
    await ratePrice.save()

    /** 2+ 35 up
     *  option 2
     *  > ทุนประกัน = 200,000
    */
    //-------- รถกลุ่ม 1 -------- 

    ratePrice = new RatePrice()
    ratePrice.insurance_type_id = 8
    ratePrice.car_group_id = 1
    ratePrice.car_type_id = 2
    ratePrice.price = 7499
    await ratePrice.save()

    //-------- รถกลุ่ม 2 -------- 

    ratePrice = new RatePrice()
    ratePrice.insurance_type_id = 8
    ratePrice.car_group_id = 2
    ratePrice.car_type_id = 2
    ratePrice.price = 7499
    await ratePrice.save()

    //-------- รถกลุ่ม 3 -------- 
    ratePrice = new RatePrice()
    ratePrice.insurance_type_id = 8
    ratePrice.car_group_id = 3
    ratePrice.car_type_id = 1
    ratePrice.price = 6900
    await ratePrice.save()

    ratePrice = new RatePrice()
    ratePrice.insurance_type_id = 8
    ratePrice.car_group_id = 3
    ratePrice.car_type_id = 2
    ratePrice.price = 7499
    await ratePrice.save()

    //-------- รถกลุ่ม 4 -------- 
    ratePrice = new RatePrice()
    ratePrice.insurance_type_id = 8
    ratePrice.car_group_id = 4
    ratePrice.car_type_id = 1
    ratePrice.price = 6900
    await ratePrice.save()

    ratePrice = new RatePrice()
    ratePrice.insurance_type_id = 8
    ratePrice.car_group_id = 4
    ratePrice.car_type_id = 2
    ratePrice.price = 7499
    await ratePrice.save()

    //-------- รถกลุ่ม 5 -------- 
    ratePrice = new RatePrice()
    ratePrice.insurance_type_id = 8
    ratePrice.car_group_id = 5
    ratePrice.car_type_id = 1
    ratePrice.price = 6900
    await ratePrice.save()

    ratePrice = new RatePrice()
    ratePrice.insurance_type_id = 8
    ratePrice.car_group_id = 5
    ratePrice.car_type_id = 2
    ratePrice.price = 7499
    await ratePrice.save()
    
     /** 2 Minimal (ซ่อมอู่)
    */
    //-------- รถกลุ่ม 1 -------- 
    ratePrice = new RatePrice()
    ratePrice.insurance_type_id = 9
    ratePrice.car_group_id = 1
    ratePrice.car_type_id = 1
    ratePrice.price = 7900
    await ratePrice.save()

    ratePrice = new RatePrice()
    ratePrice.insurance_type_id = 9
    ratePrice.car_group_id = 1
    ratePrice.car_type_id = 2
    ratePrice.price = 7900
    await ratePrice.save()

    //-------- รถกลุ่ม 2 -------- 
    ratePrice = new RatePrice()
    ratePrice.insurance_type_id = 9
    ratePrice.car_group_id = 2
    ratePrice.car_type_id = 1
    ratePrice.price = 7900
    await ratePrice.save()

    ratePrice = new RatePrice()
    ratePrice.insurance_type_id = 9
    ratePrice.car_group_id = 2
    ratePrice.car_type_id = 2
    ratePrice.price = 7900
    await ratePrice.save()

    //-------- รถกลุ่ม 3 -------- 
    ratePrice = new RatePrice()
    ratePrice.insurance_type_id = 9
    ratePrice.car_group_id = 3
    ratePrice.car_type_id = 1
    ratePrice.price = 6900
    await ratePrice.save()

    ratePrice = new RatePrice()
    ratePrice.insurance_type_id = 9
    ratePrice.car_group_id = 3
    ratePrice.car_type_id = 2
    ratePrice.price = 6900
    await ratePrice.save()

    //-------- รถกลุ่ม 4 -------- 
    ratePrice = new RatePrice()
    ratePrice.insurance_type_id = 9
    ratePrice.car_group_id = 4
    ratePrice.car_type_id = 1
    ratePrice.price = 6900
    await ratePrice.save()

    ratePrice = new RatePrice()
    ratePrice.insurance_type_id = 9
    ratePrice.car_group_id = 4
    ratePrice.car_type_id = 2
    ratePrice.price = 6900
    await ratePrice.save()

    //-------- รถกลุ่ม 5 -------- 
    ratePrice = new RatePrice()
    ratePrice.insurance_type_id = 9
    ratePrice.car_group_id = 5
    ratePrice.car_type_id = 1
    ratePrice.price = 6900
    await ratePrice.save()

    ratePrice = new RatePrice()
    ratePrice.insurance_type_id = 9
    ratePrice.car_group_id = 5
    ratePrice.car_type_id = 2
    ratePrice.price = 6900
    await ratePrice.save()

    /** 3+
     *  option 1
     *  > มีค่าเสียหายส่วนแรก = 2,000
    */
    //-------- รถกลุ่ม 1 -------- 
    ratePrice = new RatePrice()
    ratePrice.insurance_type_id = 10
    ratePrice.car_group_id = 1
    ratePrice.car_type_id = 1
    ratePrice.price = 7800
    await ratePrice.save()

    ratePrice = new RatePrice()
    ratePrice.insurance_type_id = 10
    ratePrice.car_group_id = 1
    ratePrice.car_type_id = 2
    ratePrice.price = 7800
    await ratePrice.save()

    ratePrice = new RatePrice()
    ratePrice.insurance_type_id = 10
    ratePrice.car_group_id = 1
    ratePrice.car_type_id = 3
    ratePrice.price = 7800
    await ratePrice.save()

    //-------- รถกลุ่ม 2 -------- 
    ratePrice = new RatePrice()
    ratePrice.insurance_type_id = 10
    ratePrice.car_group_id = 2
    ratePrice.car_type_id = 1
    ratePrice.price = 7800
    await ratePrice.save()

    ratePrice = new RatePrice()
    ratePrice.insurance_type_id = 10
    ratePrice.car_group_id = 2
    ratePrice.car_type_id = 2
    ratePrice.price = 7800
    await ratePrice.save()

    ratePrice = new RatePrice()
    ratePrice.insurance_type_id = 10
    ratePrice.car_group_id = 2
    ratePrice.car_type_id = 2
    ratePrice.price = 7800
    await ratePrice.save()

    //-------- รถกลุ่ม 3 -------- 
    ratePrice = new RatePrice()
    ratePrice.insurance_type_id = 10
    ratePrice.car_group_id = 3
    ratePrice.car_type_id = 1
    ratePrice.price = 6800
    await ratePrice.save()

    ratePrice = new RatePrice()
    ratePrice.insurance_type_id = 10
    ratePrice.car_group_id = 3
    ratePrice.car_type_id = 2
    ratePrice.price = 6800
    await ratePrice.save()

    ratePrice = new RatePrice()
    ratePrice.insurance_type_id = 10
    ratePrice.car_group_id = 3
    ratePrice.car_type_id = 3
    ratePrice.price = 6800
    await ratePrice.save()

    //-------- รถกลุ่ม 4 -------- 
    ratePrice = new RatePrice()
    ratePrice.insurance_type_id = 10
    ratePrice.car_group_id = 4
    ratePrice.car_type_id = 1
    ratePrice.price = 6800
    await ratePrice.save()

    ratePrice = new RatePrice()
    ratePrice.insurance_type_id = 10
    ratePrice.car_group_id = 4
    ratePrice.car_type_id = 2
    ratePrice.price = 6800
    await ratePrice.save()

    ratePrice = new RatePrice()
    ratePrice.insurance_type_id = 10
    ratePrice.car_group_id = 4
    ratePrice.car_type_id = 3
    ratePrice.price = 6800
    await ratePrice.save()

    //-------- รถกลุ่ม 5 -------- 
    ratePrice = new RatePrice()
    ratePrice.insurance_type_id = 10
    ratePrice.car_group_id = 5
    ratePrice.car_type_id = 1
    ratePrice.price = 6800
    await ratePrice.save()

    ratePrice = new RatePrice()
    ratePrice.insurance_type_id = 10
    ratePrice.car_group_id = 5
    ratePrice.car_type_id = 2
    ratePrice.price = 6800
    await ratePrice.save()

    ratePrice = new RatePrice()
    ratePrice.insurance_type_id = 10
    ratePrice.car_group_id = 5
    ratePrice.car_type_id = 3
    ratePrice.price = 6800
    await ratePrice.save()

    /** 3+
     *  option 2
     *  > ไม่มีค่าเสียหายส่วนแรก
    */
    //-------- รถกลุ่ม 1 -------- 
    ratePrice = new RatePrice()
    ratePrice.insurance_type_id = 11
    ratePrice.car_group_id = 1
    ratePrice.car_type_id = 1
    ratePrice.price = 8500
    await ratePrice.save()

    ratePrice = new RatePrice()
    ratePrice.insurance_type_id = 11
    ratePrice.car_group_id = 1
    ratePrice.car_type_id = 2
    ratePrice.price = 8500
    await ratePrice.save()

    ratePrice = new RatePrice()
    ratePrice.insurance_type_id = 11
    ratePrice.car_group_id = 1
    ratePrice.car_type_id = 3
    ratePrice.price = 8500
    await ratePrice.save()

    //-------- รถกลุ่ม 2 -------- 
    ratePrice = new RatePrice()
    ratePrice.insurance_type_id = 11
    ratePrice.car_group_id = 2
    ratePrice.car_type_id = 1
    ratePrice.price = 8500
    await ratePrice.save()

    ratePrice = new RatePrice()
    ratePrice.insurance_type_id = 11
    ratePrice.car_group_id = 2
    ratePrice.car_type_id = 2
    ratePrice.price = 8500
    await ratePrice.save()

    ratePrice = new RatePrice()
    ratePrice.insurance_type_id = 11
    ratePrice.car_group_id = 2
    ratePrice.car_type_id = 3
    ratePrice.price = 8500
    await ratePrice.save()

    //-------- รถกลุ่ม 3 -------- 
    ratePrice = new RatePrice()
    ratePrice.insurance_type_id = 11
    ratePrice.car_group_id = 3
    ratePrice.car_type_id = 1
    ratePrice.price = 7500
    await ratePrice.save()

    ratePrice = new RatePrice()
    ratePrice.insurance_type_id = 11
    ratePrice.car_group_id = 3
    ratePrice.car_type_id = 2
    ratePrice.price = 7500
    await ratePrice.save()

    ratePrice = new RatePrice()
    ratePrice.insurance_type_id = 11
    ratePrice.car_group_id = 3
    ratePrice.car_type_id = 3
    ratePrice.price = 7500
    await ratePrice.save()

    //-------- รถกลุ่ม 4 -------- 
    ratePrice = new RatePrice()
    ratePrice.insurance_type_id = 11
    ratePrice.car_group_id = 4
    ratePrice.car_type_id = 1
    ratePrice.price = 7500
    await ratePrice.save()

    ratePrice = new RatePrice()
    ratePrice.insurance_type_id = 11
    ratePrice.car_group_id = 4
    ratePrice.car_type_id = 2
    ratePrice.price = 7500
    await ratePrice.save()

    ratePrice = new RatePrice()
    ratePrice.insurance_type_id = 11
    ratePrice.car_group_id = 4
    ratePrice.car_type_id = 3
    ratePrice.price = 7500
    await ratePrice.save()

    //-------- รถกลุ่ม 5 -------- 
    ratePrice = new RatePrice()
    ratePrice.insurance_type_id = 11
    ratePrice.car_group_id = 5
    ratePrice.car_type_id = 1
    ratePrice.price = 7500
    await ratePrice.save()

    ratePrice = new RatePrice()
    ratePrice.insurance_type_id = 11
    ratePrice.car_group_id = 5
    ratePrice.car_type_id = 2
    ratePrice.price = 7500
    await ratePrice.save()

    ratePrice = new RatePrice()
    ratePrice.insurance_type_id = 11
    ratePrice.car_group_id = 5
    ratePrice.car_type_id = 3
    ratePrice.price = 7500
    await ratePrice.save()

    /** 2 เซฟ Special
     *  no option 
    */
    //-------- รถกลุ่ม 1 --------  
    ratePrice = new RatePrice()
    ratePrice.insurance_type_id = 12
    ratePrice.car_group_id = 1
    ratePrice.car_type_id = 1
    ratePrice.price = 2550
    await ratePrice.save()

    ratePrice = new RatePrice()
    ratePrice.insurance_type_id = 12
    ratePrice.car_group_id = 1
    ratePrice.car_type_id = 2
    ratePrice.price = 3350
    await ratePrice.save()

    //-------- รถกลุ่ม 2 -------- 
    ratePrice = new RatePrice()
    ratePrice.insurance_type_id = 12
    ratePrice.car_group_id = 2
    ratePrice.car_type_id = 1
    ratePrice.price = 2550
    await ratePrice.save()

    ratePrice = new RatePrice()
    ratePrice.insurance_type_id = 12
    ratePrice.car_group_id = 2
    ratePrice.car_type_id = 2
    ratePrice.price = 3350
    await ratePrice.save()
    
    //-------- รถกลุ่ม 3 -------- 
    ratePrice = new RatePrice()
    ratePrice.insurance_type_id = 12
    ratePrice.car_group_id = 3
    ratePrice.car_type_id = 1
    ratePrice.price = 2550
    await ratePrice.save()

    ratePrice = new RatePrice()
    ratePrice.insurance_type_id = 12
    ratePrice.car_group_id = 3
    ratePrice.car_type_id = 2
    ratePrice.price = 3350
    await ratePrice.save()

    //-------- รถกลุ่ม 4 -------- 
    ratePrice = new RatePrice()
    ratePrice.insurance_type_id = 12
    ratePrice.car_group_id = 4
    ratePrice.car_type_id = 1
    ratePrice.price = 2550
    await ratePrice.save()

    ratePrice = new RatePrice()
    ratePrice.insurance_type_id = 12
    ratePrice.car_group_id = 4
    ratePrice.car_type_id = 2
    ratePrice.price = 3350
    await ratePrice.save()

    //-------- รถกลุ่ม 5 -------- 
    ratePrice = new RatePrice()
    ratePrice.insurance_type_id = 12
    ratePrice.car_group_id = 5
    ratePrice.car_type_id = 1
    ratePrice.price = 2550
    await ratePrice.save()

    ratePrice = new RatePrice()
    ratePrice.insurance_type_id = 12
    ratePrice.car_group_id = 5
    ratePrice.car_type_id = 2
    ratePrice.price = 3350
    await ratePrice.save()

    /** 2 Bumper
     *  no option 
    */
    //-------- รถกลุ่ม 1 --------  
    ratePrice = new RatePrice()
    ratePrice.insurance_type_id = 13
    ratePrice.car_group_id = 1
    ratePrice.car_type_id = 1
    ratePrice.price = 3599
    await ratePrice.save()

    ratePrice = new RatePrice()
    ratePrice.insurance_type_id = 13
    ratePrice.car_group_id = 1
    ratePrice.car_type_id = 2
    ratePrice.price = 3599
    await ratePrice.save()

    //-------- รถกลุ่ม 2 -------- 
    ratePrice = new RatePrice()
    ratePrice.insurance_type_id = 13
    ratePrice.car_group_id = 2
    ratePrice.car_type_id = 1
    ratePrice.price = 3599
    await ratePrice.save()

    ratePrice = new RatePrice()
    ratePrice.insurance_type_id = 13
    ratePrice.car_group_id = 2
    ratePrice.car_type_id = 2
    ratePrice.price = 3599
    await ratePrice.save()
    
    //-------- รถกลุ่ม 3 -------- 
    ratePrice = new RatePrice()
    ratePrice.insurance_type_id = 13
    ratePrice.car_group_id = 3
    ratePrice.car_type_id = 1
    ratePrice.price = 3599
    await ratePrice.save()

    ratePrice = new RatePrice()
    ratePrice.insurance_type_id = 13
    ratePrice.car_group_id = 3
    ratePrice.car_type_id = 2
    ratePrice.price = 3599
    await ratePrice.save()

    //-------- รถกลุ่ม 4 -------- 
    ratePrice = new RatePrice()
    ratePrice.insurance_type_id = 13
    ratePrice.car_group_id = 4
    ratePrice.car_type_id = 1
    ratePrice.price = 3599
    await ratePrice.save()

    ratePrice = new RatePrice()
    ratePrice.insurance_type_id = 13
    ratePrice.car_group_id = 4
    ratePrice.car_type_id = 2
    ratePrice.price = 3599
    await ratePrice.save()

    //-------- รถกลุ่ม 5 -------- 
    ratePrice = new RatePrice()
    ratePrice.insurance_type_id = 13
    ratePrice.car_group_id = 5
    ratePrice.car_type_id = 1
    ratePrice.price = 3599
    await ratePrice.save()

    ratePrice = new RatePrice()
    ratePrice.insurance_type_id = 13
    ratePrice.car_group_id = 5
    ratePrice.car_type_id = 2
    ratePrice.price = 3599
    await ratePrice.save()
    
    /** 3 Best
     *  no option 
    */
    //-------- รถกลุ่ม 1 --------  
    ratePrice = new RatePrice()
    ratePrice.insurance_type_id = 14
    ratePrice.car_group_id = 1
    ratePrice.car_type_id = 1
    ratePrice.price = 2250
    await ratePrice.save()

    ratePrice = new RatePrice()
    ratePrice.insurance_type_id = 14
    ratePrice.car_group_id = 1
    ratePrice.car_type_id = 2
    ratePrice.price = 3000
    await ratePrice.save()

    ratePrice = new RatePrice()
    ratePrice.insurance_type_id = 14
    ratePrice.car_group_id = 1
    ratePrice.car_type_id = 3
    ratePrice.price = 3250
    await ratePrice.save()
    
    //-------- รถกลุ่ม 2 -------- 
    ratePrice = new RatePrice()
    ratePrice.insurance_type_id = 14
    ratePrice.car_group_id = 2
    ratePrice.car_type_id = 1
    ratePrice.price = 2250
    await ratePrice.save()

    ratePrice = new RatePrice()
    ratePrice.insurance_type_id = 14
    ratePrice.car_group_id = 2
    ratePrice.car_type_id = 2
    ratePrice.price = 3000
    await ratePrice.save()

    ratePrice = new RatePrice()
    ratePrice.insurance_type_id = 14
    ratePrice.car_group_id = 2
    ratePrice.car_type_id = 3
    ratePrice.price = 3250
    await ratePrice.save()
    
    //-------- รถกลุ่ม 3 -------- 
    ratePrice = new RatePrice()
    ratePrice.insurance_type_id = 14
    ratePrice.car_group_id = 3
    ratePrice.car_type_id = 1
    ratePrice.price = 2250
    await ratePrice.save()

    ratePrice = new RatePrice()
    ratePrice.insurance_type_id = 14
    ratePrice.car_group_id = 3
    ratePrice.car_type_id = 2
    ratePrice.price = 3000
    await ratePrice.save()

    ratePrice = new RatePrice()
    ratePrice.insurance_type_id = 14
    ratePrice.car_group_id = 3
    ratePrice.car_type_id = 3
    ratePrice.price = 3250
    await ratePrice.save()

    //-------- รถกลุ่ม 4 -------- 
    ratePrice = new RatePrice()
    ratePrice.insurance_type_id = 14
    ratePrice.car_group_id = 4
    ratePrice.car_type_id = 1
    ratePrice.price = 2250
    await ratePrice.save()

    ratePrice = new RatePrice()
    ratePrice.insurance_type_id = 14
    ratePrice.car_group_id = 4
    ratePrice.car_type_id = 2
    ratePrice.price = 3000
    await ratePrice.save()

    ratePrice = new RatePrice()
    ratePrice.insurance_type_id = 14
    ratePrice.car_group_id = 4
    ratePrice.car_type_id = 3
    ratePrice.price = 3250
    await ratePrice.save()

    //-------- รถกลุ่ม 5 -------- 
    ratePrice = new RatePrice()
    ratePrice.insurance_type_id = 14
    ratePrice.car_group_id = 5
    ratePrice.car_type_id = 1
    ratePrice.price = 2250
    await ratePrice.save()

    ratePrice = new RatePrice()
    ratePrice.insurance_type_id = 14
    ratePrice.car_group_id = 5
    ratePrice.car_type_id = 2
    ratePrice.price = 3000
    await ratePrice.save()

    ratePrice = new RatePrice()
    ratePrice.insurance_type_id = 14
    ratePrice.car_group_id = 5
    ratePrice.car_type_id = 3
    ratePrice.price = 3250
    await ratePrice.save()

    /** 3 กันชน
     *  no option 
    */
    //-------- รถกลุ่ม 1 --------  
    ratePrice = new RatePrice()
    ratePrice.insurance_type_id = 15
    ratePrice.car_group_id = 1
    ratePrice.car_type_id = 1
    ratePrice.price = 3333
    await ratePrice.save()

    ratePrice = new RatePrice()
    ratePrice.insurance_type_id = 15
    ratePrice.car_group_id = 1
    ratePrice.car_type_id = 2
    ratePrice.price = 3333
    await ratePrice.save()

    ratePrice = new RatePrice()
    ratePrice.insurance_type_id = 15
    ratePrice.car_group_id = 1
    ratePrice.car_type_id = 3
    ratePrice.price = 3333
    await ratePrice.save()
    
    //-------- รถกลุ่ม 2 -------- 
    ratePrice = new RatePrice()
    ratePrice.insurance_type_id = 15
    ratePrice.car_group_id = 2
    ratePrice.car_type_id = 1
    ratePrice.price = 3333
    await ratePrice.save()

    ratePrice = new RatePrice()
    ratePrice.insurance_type_id = 15
    ratePrice.car_group_id = 2
    ratePrice.car_type_id = 2
    ratePrice.price = 3333
    await ratePrice.save()

    ratePrice = new RatePrice()
    ratePrice.insurance_type_id = 15
    ratePrice.car_group_id = 2
    ratePrice.car_type_id = 3
    ratePrice.price = 3333
    await ratePrice.save()
    
    //-------- รถกลุ่ม 3 -------- 
    ratePrice = new RatePrice()
    ratePrice.insurance_type_id = 15
    ratePrice.car_group_id = 3
    ratePrice.car_type_id = 1
    ratePrice.price = 3333
    await ratePrice.save()

    ratePrice = new RatePrice()
    ratePrice.insurance_type_id = 15
    ratePrice.car_group_id = 3
    ratePrice.car_type_id = 2
    ratePrice.price = 3333
    await ratePrice.save()

    ratePrice = new RatePrice()
    ratePrice.insurance_type_id = 15
    ratePrice.car_group_id = 3
    ratePrice.car_type_id = 3
    ratePrice.price = 3333
    await ratePrice.save()

    //-------- รถกลุ่ม 4 -------- 
    ratePrice = new RatePrice()
    ratePrice.insurance_type_id = 15
    ratePrice.car_group_id = 4
    ratePrice.car_type_id = 1
    ratePrice.price = 3333
    await ratePrice.save()

    ratePrice = new RatePrice()
    ratePrice.insurance_type_id = 15
    ratePrice.car_group_id = 4
    ratePrice.car_type_id = 2
    ratePrice.price = 3333
    await ratePrice.save()

    ratePrice = new RatePrice()
    ratePrice.insurance_type_id = 15
    ratePrice.car_group_id = 4
    ratePrice.car_type_id = 3
    ratePrice.price = 3333
    await ratePrice.save()

    //-------- รถกลุ่ม 5 -------- 
    ratePrice = new RatePrice()
    ratePrice.insurance_type_id = 15
    ratePrice.car_group_id = 5
    ratePrice.car_type_id = 1
    ratePrice.price = 3333
    await ratePrice.save()

    ratePrice = new RatePrice()
    ratePrice.insurance_type_id = 15
    ratePrice.car_group_id = 5
    ratePrice.car_type_id = 2
    ratePrice.price = 3333
    await ratePrice.save()

    ratePrice = new RatePrice()
    ratePrice.insurance_type_id = 15
    ratePrice.car_group_id = 5
    ratePrice.car_type_id = 3
    ratePrice.price = 3333
    await ratePrice.save()

  }
}

module.exports = RatePriceSeeder
