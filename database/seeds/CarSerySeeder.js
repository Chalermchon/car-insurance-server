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
    

    //----Toyota Start
    //----4Runner no group
    //----86 GT
    carSery = new CarSery()
    carSery.brand = "Toyota"
    carSery.model = "Alphard"
    carSery.year = "2008"
    carSery.detail = "3.5 Q 4Doors"
    carSery.car_group_id = 2
    carSery.car_type_id = 4
    carSery.save()

    carSery = new CarSery()
    carSery.brand = "Toyota"
    carSery.model = "Alphard"
    carSery.year = "2008"
    carSery.detail = "3.5 V 4Doors"
    carSery.car_group_id = 2
    carSery.car_type_id = 4
    carSery.save()

    carSery = new CarSery()
    carSery.brand = "Toyota"
    carSery.model = "Alphard"
    carSery.year = "2009"
    carSery.detail = "2.4 V 4Doors"
    carSery.car_group_id = 2
    carSery.car_type_id = 4
    carSery.save()

    carSery = new CarSery()
    carSery.brand = "Toyota"
    carSery.model = "Alphard"
    carSery.year = "2009"
    carSery.detail = "3.5 Q 4Doors"
    carSery.car_group_id = 2
    carSery.car_type_id = 4
    carSery.save()

    carSery = new CarSery()
    carSery.brand = "Toyota"
    carSery.model = "Alphard"
    carSery.year = "2009"
    carSery.detail = "3.5 V 4Doors"
    carSery.car_group_id = 2
    carSery.car_type_id = 4
    carSery.save()

    carSery = new CarSery()
    carSery.brand = "Toyota"
    carSery.model = "Alphard"
    carSery.year = "2010"
    carSery.detail = "2.4 V 4Doors"
    carSery.car_group_id = 2
    carSery.car_type_id = 4
    carSery.save()

    carSery = new CarSery()
    carSery.brand = "Toyota"
    carSery.model = "Alphard"
    carSery.year = "2010"
    carSery.detail = "3.5 Q 4Doors"
    carSery.car_group_id = 2
    carSery.car_type_id = 4
    carSery.save()

    carSery = new CarSery()
    carSery.brand = "Toyota"
    carSery.model = "Alphard"
    carSery.year = "2010"
    carSery.detail = "3.5 V 4Doors"
    carSery.car_group_id = 2
    carSery.car_type_id = 4
    carSery.save()

    carSery = new CarSery()
    carSery.brand = "Toyota"
    carSery.model = "Alphard"
    carSery.year = "2011"
    carSery.detail = "2.4 V 4Doors"
    carSery.car_group_id = 2
    carSery.car_type_id = 4
    carSery.save()

    carSery = new CarSery()
    carSery.brand = "Toyota"
    carSery.model = "Alphard"
    carSery.year = "2011"
    carSery.detail = "3.5 Q 4Doors"
    carSery.car_group_id = 2
    carSery.car_type_id = 4
    carSery.save()

    carSery = new CarSery()
    carSery.brand = "Toyota"
    carSery.model = "Alphard"
    carSery.year = "2011"
    carSery.detail = "3.5 V 4Doors"
    carSery.car_group_id = 2
    carSery.car_type_id = 4
    carSery.save()

    carSery = new CarSery()
    carSery.brand = "Toyota"
    carSery.model = "Alphard"
    carSery.year = "2012"
    carSery.detail = "2.4 HV 4Doors"
    carSery.car_group_id = 2
    carSery.car_type_id = 4
    carSery.save()

    carSery = new CarSery()
    carSery.brand = "Toyota"
    carSery.model = "Alphard"
    carSery.year = "2012"
    carSery.detail = "2.4 V 4Doors"
    carSery.car_group_id = 2
    carSery.car_type_id = 4
    carSery.save()

    carSery = new CarSery()
    carSery.brand = "Toyota"
    carSery.model = "Alphard"
    carSery.year = "2012"
    carSery.detail = "3.5 Q 4Doors"
    carSery.car_group_id = 2
    carSery.car_type_id = 4
    carSery.save()

    carSery.detail = "3.5 V 4Doors"
    carSery.save()

    carSery.year = "2013"
    carSery.detail = "2.4 HV 4Doors"
    carSery.save()

    carSery.detail = "2.4 V 4Doors"
    carSery.save()

    carSery.detail = "3.5 V 4Doors"
    carSery.save()

    carSery.year = "2014"
    carSery.detail = "2.4 HV 4Doors"
    carSery.save()

    carSery.detail = "2.4 V 4Doors"
    carSery.save()

    carSery.detail = "3.5 V 4Doors"
    carSery.save()

    carSery.year = "2015"
    carSery.detail = "2.4 HV 4Doors"
    carSery.save()

    carSery.detail = "2.4 V 4Doors"
    carSery.save()

    carSery.detail = "2.5 HV 4Doors"
    carSery.save()

    carSery.detail = "3.5 4Doors"
    carSery.save()

    carSery.detail = "3.5 V 4Doors"
    carSery.save()

    carSery.year = "2016"
    carSery.detail = "2.5 HV 4Doors"
    carSery.save()
    
    carSery.detail = "3.5 4Doors"
    carSery.save()

    carSery.year = "2017"
    carSery.detail = "2.5 HV 4Doors"
    carSery.save()
    
    carSery.detail = "3.5 4Doors"
    carSery.save()

    carSery.year = "2018"
    carSery.detail = "2.5 HV 4Doors"
    carSery.save()
    
    carSery.detail = "3.5 4Doors"
    carSery.save()

    carSery.detail = "3.5 VIP 4Doors"
    carSery.save()

    carSery.year = "2019"
    carSery.detail = "2.5 HV 4Doors"
    carSery.save()

    carSery.detail = "3.5 VIP 4Doors"
    carSery.save()
    //-----Alphard

    carSery.brand = "Toyota"
    carSery.model = "Avanza"
    carSery.year = "2004"
    carSery.detail = "1.3 E 4Doors"
    carSery.car_group_id = 1
    carSery.car_type_id = 5
    carSery.save()

    carSery.detail = "1.3 E Limited 4Doors"
    carSery.save()

    carSery.detail = "1.3 S 4Doors"
    carSery.save()

    carSery.year = "2005"
    carSery.detail = "1.3 E 4Doors"
    carSery.save()

    carSery.detail = "1.3 E Limited 4Doors"
    carSery.save()

    carSery.detail = "1.3 S 4Doors"
    carSery.save()

    carSery.year = "2006"
    carSery.detail = "1.3 E 4Doors"
    carSery.save()

    carSery.detail = "1.3 E Limited 4Doors"
    carSery.save()

    carSery.detail = "1.3 S 4Doors"
    carSery.save()

    carSery.detail = "1.5 E 4Doors"
    carSery.save()

    carSery.detail = "1.5 J 4Doors"
    carSery.save()

    carSery.detail = "1.5 S 4Doors"
    carSery.save()

    carSery.year = "2006"
    carSery.detail = "1.3 E 4Doors"
    carSery.save()

    carSery.detail = "1.3 E Limited 4Doors"
    carSery.save()

    carSery.detail = "1.3 s 4Doors"
    carSery.save()

    carSery.detail = "1.5 E 4Doors"
    carSery.save()

    carSery.detail = "1.5 J 4Doors"
    carSery.save()

    carSery.detail = "1.5 S 4Doors"
    carSery.save()

    carSery.year = "2007"
    carSery.detail = "1.5 E 4Doors"
    carSery.save()

    carSery.detail = "1.5 J 4Doors"
    carSery.save()

    carSery.detail = "1.5 S 4Doors"
    carSery.save()

    carSery.year = "2008"
    carSery.detail = "1.5 E 4Doors"
    carSery.save()

    carSery.detail = "1.5 E Limited 4Doors"
    carSery.save()

    carSery.detail = "1.5 J 4Doors"
    carSery.save()

    carSery.detail = "1.5 S 4Doors"
    carSery.save()

    carSery.year = "2009"
    carSery.detail = "1.5 E 4Doors"
    carSery.save()

    carSery.detail = "1.5 J 4Doors"
    carSery.save()

    carSery.detail = "1.5 S 4Doors"
    carSery.save()

    carSery.year = "2010"
    carSery.detail = "1.5 E 4Doors"
    carSery.save()

    carSery.detail = "1.5 E Exclusive 4Doors"
    carSery.save()

    carSery.detail = "1.5 J 4Doors"
    carSery.save()

    carSery.detail = "1.5 S 4Doors"
    carSery.save()

    carSery.year = "2011"
    carSery.detail = "1.5 E 4Doors"
    carSery.save()

    carSery.detail = "1.5 E Exclusive 4Doors"
    carSery.save()

    carSery.detail = "1.5 J 4Doors"
    carSery.save()

    carSery.detail = "1.5 S 4Doors"
    carSery.save()

    carSery.year = "2012"
    carSery.detail = "1.5 E 4Doors"
    carSery.save()

    carSery.detail = "1.5 E Exclusive 4Doors"
    carSery.save()

    carSery.detail = "1.5 G 4Doors"
    carSery.save()

    carSery.detail = "1.5 J 4Doors"
    carSery.save()

    carSery.detail = "1.5 S 4Doors"
    carSery.save()
    
    carSery.year = "2013"
    carSery.detail = "1.5 E 4Doors"
    carSery.save()

    carSery.detail = "1.5 G 4Doors"
    carSery.save()

    carSery.detail = "1.5 S 4Doors"
    carSery.save()

    carSery.detail = "1.5 S Touring 4Doors"
    carSery.save()

    carSery.year = "2014"
    carSery.detail = "1.5 E 4Doors"
    carSery.save()

    carSery.detail = "1.5 G 4Doors"
    carSery.save()

    carSery.detail = "1.5 S 4Doors"
    carSery.save()

    carSery.detail = "1.5 S Touring 4Doors"
    carSery.save()

    carSery.year = "2015"
    carSery.detail = "1.5 E 4Doors"
    carSery.save()

    carSery.detail = "1.5 G 4Doors"
    carSery.save()

    carSery.detail = "1.5 S 4Doors"
    carSery.save()

    carSery.detail = "1.5 S Touring 4Doors"
    carSery.save()

    carSery.year = "2016"
    carSery.detail = "1.5 E 4Doors"
    carSery.save()

    carSery.detail = "1.5 G 4Doors"
    carSery.save()

    carSery.detail = "1.5 S 4Doors"
    carSery.save()

    carSery.year = "2017"
    carSery.detail = "1.5 E 4Doors"
    carSery.save()

    carSery.detail = "1.5 G 4Doors"
    carSery.save()

    carSery.detail = "1.5 S 4Doors"
    carSery.save()
    
    carSery.year = "2018"
    carSery.detail = "1.5 E 4Doors"
    carSery.save()

    carSery.detail = "1.5 G 4Doors"
    carSery.save()

    carSery.detail = "1.5 S 4Doors"
    carSery.save()

    carSery.year = "2019"
    carSery.detail = "1.5 E 4Doors"
    carSery.save()

    carSery.detail = "1.5 G 4Doors"
    carSery.save()

    carSery.detail = "1.5 S 4Doors"
    carSery.save()

    //-----Avanza

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

    carSery.year = "1995"
    carSery.save()

    carSery.detail = "2.2 GXi 4Doors"
    carSery.save()

    carSery.year = "1996"
    carSery.save()

    carSery.detail = "3.0 GLX V6 4Doors"
    carSery.save()

    carSery.year = "1997"
    carSery.save()

    carSery.detail = "2.2 SEG 4Doors"
    carSery.save()

    carSery.year = "1998"
    carSery.save()

    carSery.detail = "3.0 GLX V6 4Doors"
    carSery.save()

    carSery.year = "1999"
    carSery.detail = "2.2 SEG 4Doors"
    carSery.save()

    carSery.year = "2000"
    carSery.save()

    carSery.detail = "2.2 GXi 4Doors"
    carSery.save()

    carSery.year = "2001"
    carSery.save()

    carSery.detail = "2.2 SEG 4Doors"
    carSery.save()

    carSery.year = "2002"
    carSery.detail = "2.0 E 4Doors"
    carSery.save()

    carSery.detail = "2.2 SEG 4Doors"
    carSery.save()

    carSery.detail = "2.2 GXi 4Doors"
    carSery.save()

    carSery.detail = "2.4 G 4Doors"
    carSery.save()

    carSery.detail = "2.4 Q 4Doors"
    carSery.save()

    carSery.year = "2003"
    carSery.detail = "2.0 E 4Doors"
    carSery.save()

    carSery.detail = "2.4 G 4Doors"
    carSery.save()

    carSery.detail() = "2.4 Q 4Doors"
    carSery.save()

    carSery.year = "2004"
    carSery.detail = "2.0 E 4Doors"
    carSery.save()

    carSery.detail = "2.4 G 4Doors"
    carSery.save()

    carSery.detail() = "2.4 Q 4Doors"
    carSery.save()

    carSery.year = "2005"
    carSery.detail = "2.0 E 4Doors"
    carSery.save()

    carSery.detail = "2.0 G 4Doors"
    carSery.save()

    carSery.detail = "2.4 G 4Doors"
    carSery.save()

    carSery.detail() = "2.4 Q 4Doors"
    carSery.save()

    carSery.year = "2006"
    carSery.detail = "2.0 E 4Doors"
    carSery.save()

    carSery.detail = "2.0 G 4Doors"
    carSery.save()

    carSery.detail = "2.4 G 4Doors"
    carSery.save()

    carSery.detail() = "2.4 Q 4Doors"
    carSery.save()

    carSery.detail() = "2.4 V 4Doors"
    carSery.save()

    carSery.detail() = "3.5 Q 4Doors"
    carSery.save()

    carSery.year = "2007"
    carSery.detail = "2.0 E 4Doors"
    carSery.save()

    carSery.detail = "2.0 G 4Doors"
    carSery.save()

    carSery.detail = "2.4 G 4Doors"
    carSery.save()

    carSery.detail() = "2.4 V 4Doors"
    carSery.save()

    carSery.detail() = "3.5 Q 4Doors"
    carSery.save()

    carSery.year = "2008"
    carSery.detail = "2.0 E 4Doors"
    carSery.save()

    carSery.detail = "2.0 G 4Doors"
    carSery.save()

    carSery.detail = "2.0 G Extremo 4Doors"
    carSery.save()

    carSery.detail = "2.4 G 4Doors"
    carSery.save()

    carSery.detail() = "2.4 V 4Doors"
    carSery.save()

    carSery.detail() = "3.5 Q 4Doors"
    carSery.save()

    carSery.year = "2009"
    carSery.detail = "2.0 E 4Doors"
    carSery.save()

    carSery.detail = "2.0 G 4Doors"
    carSery.save()

    carSery.detail = "2.0 G Extremo 4Doors"
    carSery.save()

    carSery.detail = "2.4 G 4Doors"
    carSery.save()

    carSery.detail = "2.4 Hybrid 4Doors"
    carSery.save()

    carSery.detail() = "2.4 V 4Doors"
    carSery.save()

    carSery.detail() = "2.4 V Extrmo 4Doors"
    carSery.save()

    carSery.detail() = "3.5 Q 4Doors"
    carSery.save()

    carSery.year = "2010"
    carSery.detail = "2.0 E 4Doors"
    carSery.save()

    carSery.detail = "2.0 G 4Doors"
    carSery.save()

    carSery.detail = "2.0 G Extremo 4Doors"
    carSery.save()

    carSery.detail = "2.4 G 4Doors"
    carSery.save()

    carSery.detail = "2.4 Hybrid 4Doors"
    carSery.save()

    carSery.detail() = "3.5 Q 4Doors"
    carSery.save()

    carSery.year = "2011"
    carSery.detail = "2.0 E 4Doors"
    carSery.save()

    carSery.detail = "2.0 G 4Doors"
    carSery.save()

    carSery.detail = "2.0 G Extremo 4Doors"
    carSery.save()

    carSery.detail = "2.4 G 4Doors"
    carSery.save()

    carSery.detail = "2.4 Hybrid 4Doors"
    carSery.save()

    carSery.detail = "2.4 Hybrid Extremo 4Doors"
    carSery.save()

    carSery.detail() = "3.5 Q 4Doors"
    carSery.save()

    carSery.year = "2012"
    carSery.detail = "2.0 E 4Doors"
    carSery.save()

    carSery.detail = "2.0 G 4Doors"
    carSery.save()

    carSery.detail = "2.0 G Extremo 4Doors"
    carSery.save()

    carSery.detail = "2.4 G 4Doors"
    carSery.save()

    carSery.detail = "2.4 Hybrid 4Doors"
    carSery.save()

    carSery.detail = "2.4 Hybrid Extremo 4Doors"
    carSery.save()

    carSery.detail = "2.5 G 4Doors"
    carSery.save()

    carSery.detail = "2.5 Hybrid 4Doors"
    carSery.save()

    carSery.year = "2013"
    carSery.detail = "2.0 G 4Doors"
    carSery.save()

    carSery.detail = "2.0 G Extremo 4Doors"
    carSery.save()

    carSery.detail = "2.5 G 4Doors"
    carSery.save()

    carSery.detail = "2.5 Hybrid 4Doors"
    carSery.save()

    carSery.year = "2014"
    carSery.detail = "2.0 G 4Doors"
    carSery.save()

    carSery.detail = "2.0 G Extremo 4Doors"
    carSery.save()
    
    carSery.detail = "2.5 G 4Doors"
    carSery.save()

    carSery.detail = "2.5 Hybrid 4Doors"
    carSery.save()

    carSery.year = "2015"
    carSery.detail = "2.0 G 4Doors"
    carSery.save()

    carSery.detail = "2.0 G Extremo 4Doors"
    carSery.save()

    carSery.detail = "2.5 ESPORT 4Doors"
    carSery.save()
    
    carSery.detail = "2.5 G 4Doors"
    carSery.save()

    carSery.detail = "2.5 Hybrid 4Doors"
    carSery.save()

    carSery.year = "2016"
    carSery.detail = "2.0 G 4Doors"
    carSery.save()

    carSery.detail = "2.0 G Extremo 4Doors"
    carSery.save()

    carSery.detail = "2.5 ESPORT 4Doors"
    carSery.save()
    
    carSery.detail = "2.5 G 4Doors"
    carSery.save()

    carSery.detail = "2.5 Hybrid 4Doors"
    carSery.save()

    carSery.year = "2017"
    carSery.detail = "2.0 G 4Doors"
    carSery.save()

    carSery.detail = "2.0 G Extremo 4Doors"
    carSery.save()

    carSery.detail = "2.5 ESPORT 4Doors"
    carSery.save()
    
    carSery.detail = "2.5 G 4Doors"
    carSery.save()

    carSery.detail = "2.5 Hybrid 4Doors"
    carSery.save()

    carSery.year = "2018"
    carSery.detail = "2.0 G 4Doors"
    carSery.save()

    carSery.detail = "2.0 G Extremo 4Doors"
    carSery.save()

    carSery.detail = "2.5 ESPORT 4Doors"
    carSery.save()
    
    carSery.detail = "2.5 G 4Doors"
    carSery.save()

    carSery.detail = "2.5 Hybrid 4Doors"
    carSery.save()

    carSery.year = "2019"
    carSery.detail = "2.0 G 4Doors"
    carSery.save()

    carSery.detail = "2.5 G 4Doors"
    carSery.save()

    carSery.detail = "2.5 Hybrid 4Doors"
    carSery.save()
    //----Camry

    carSery.model = "Celica"
    carSery.year = "1993"
    carSery.detail = "2.2 2Doors"
    carSery.car_group_id = 2
    carSery.car_type_id = 1
    carSery.save()

    carSery.year = "1994"
    carSery.detail = "2.0 GT-4 2Doors"
    carSery.save()

    carSery.detail = "2.2 2Doors"
    carSery.save()

    carSery.year = "1995"
    carSery.detail = "2.0 GT-4 2Doors"
    carSery.save()

    carSery.detail = "2.2 2Doors"
    carSery.save()

    carSery.year = "1996"
    carSery.detail = "2.0 GT-4 2Doors"
    carSery.save()

    carSery.detail = "2.2 2Doors"
    carSery.save()

    carSery.year = "1997"
    carSery.detail = "2.0 GT-4 2Doors"
    carSery.save()

    carSery.detail = "2.2 2Doors"
    carSery.save()

    carSery.year = "1998"
    carSery.detail = "2.2 2Doors"
    carSery.save()

    carSery.year = "1999"
    carSery.detail = "1.8 2Doors"
    carSery.save()

    carSery.detail = "2.2 2Doors"
    carSery.save()

    carSery.year = "2000"
    carSery.detail = "1.8 2Doors"
    carSery.save()

    carSery.year = "2001"
    carSery.save()
    //----Celica

    //----C-HR no group
    //----Commuter no group
    carSery.model = "Corolla"
    carSery.year = "1992"
    carSery.detail = "1.3 GL 4Doors"
    carSery.car_group_id = 4
    carSery.car_type_id = 1
    carSery.save()

    carSery.detail = "1.3 XL 4Doors"
    carSery.save()

    carSery.detail = "1.6 GLi 4Doors"
    carSery.save()

    carSery.year = "1993"
    carSery.detail = "1.3 GL 4Doors"
    carSery.save()

    carSery.detail = "1.3 GLi 4Doors"
    carSery.save()

    carSery.detail = "1.3 XL 4Doors"
    carSery.save()

    carSery.detail = "1.3 XLi 4Doors"
    carSery.save()

    carSery.detail = "1.6 GLi 4Doors"
    carSery.save()

    carSery.detail = "1.6 GXi 4Doors"
    carSery.save()

    carSery.year = "1994"
    carSery.detail = "1.3 DXi 4Doors"
    carSery.save()

    carSery.detail = "1.3 GLi 4Doors"
    carSery.save()

    carSery.detail = "1.3 GXi 4Doors"
    carSery.save()

    carSery.detail = "1.3 XLi 4Doors"
    carSery.save()

    carSery.detail = "1.6 GXi 4Doors"
    carSery.save()

    carSery.year = "1995"
    carSery.detail = "1.3 DXi 4Doors"
    carSery.save()

    carSery.detail = "1.3 GXi 4Doors"
    carSery.save()

    carSery.detail = "1.6 GXi 4Doors"
    carSery.save()

    carSery.year = "1996"
    carSery.detail = "1.3 DXi 4Doors"
    carSery.save()

    carSery.detail = "1.3 GXi 4Doors"
    carSery.save()

    carSery.detail = "1.5 DXi 4Doors"
    carSery.save()

    carSery.detail = "1.5 GXi 4Doors"
    carSery.save()

    carSery.detail = "1.5 GXi Saloon 4Doors"
    carSery.save()

    carSery.detail = "1.6 GXi 4Doors"
    carSery.save()

    carSery.detail = "1.6 GXi S-Limited 4Doors"
    carSery.save()

    carSery.detail = "1.6 SEG 4Doors"
    carSery.save()

    carSery.detail = "1.6 SEG S-Limited 4Doors"
    carSery.save()

    carSery.year = "1997"
    carSery.detail = "1.5 DXi 4Doors"
    carSery.save()

    carSery.detail = "1.5 DXi Saloon 4Doors"
    carSery.save()

    carSery.detail = "1.5 GXi 4Doors"
    carSery.save()

    carSery.detail = "1.5 GXi Saloon 4Doors"
    carSery.save()

    carSery.detail = "1.6 GXi 4Doors"
    carSery.save()

    carSery.detail = "1.6 GXi Saloon 4Doors"
    carSery.save()

    carSery.detail = "1.6 GXi S-Limited 4Doors"
    carSery.save()

    carSery.detail = "1.6 SEG 4Doors"
    carSery.save()

    carSery.detail = "1.6 SEG Saloon 4Doors"
    carSery.save()

    carSery.detail = "1.6 SEG S-Limited 4Doors"
    carSery.save()

    carSery.year = "1998"
    carSery.detail = "1.5 DXi Saloon 4Doors"
    carSery.save()

    carSery.detail = "1.5 GXi 4Doors"
    carSery.save()

    carSery.detail = "1.5 GXi Saloon 4Doors"
    carSery.save()

    carSery.detail = "1.6 GXi Saloon 4Doors"
    carSery.save()

    carSery.detail = "1.6 GXIS 4Doors"
    carSery.save()

    carSery.detail = "1.6 SEG Saloon 4Doors"
    carSery.save()

    carSery.detail = "1.8 SEG 4Doors"
    carSery.save()

    carSery.year = "1999"
    carSery.detail = "1.5 GXi 4Doors"
    carSery.save()

    carSery.detail = "1.6 DXIS 4Doors"
    carSery.save()

    carSery.detail = "1.6 GXi 4Doors"
    carSery.save()

    carSery.detail = "1.6 GXi S-Limited 4Doors"
    carSery.save()

    carSery.detail = "1.6 GXIS 4Doors"
    carSery.save()

    carSery.detail = "1.8 SEG 4Doors"
    carSery.save()

    carSery.detail = "1.8 SEG Altis 4Doors"
    carSery.save()

    carSery.year = "2000"
    carSery.detail = "1.6 DXIS 4Doors"
    carSery.save()

    carSery.detail = "1.6 GXi 4Doors"
    carSery.save()

    carSery.detail = "1.6 GXi S-Limited 4Doors"
    carSery.save()

    carSery.detail = "1.6 GXIS 4Doors"
    carSery.save()

    carSery.detail = "1.8 SEG 4Doors"
    carSery.save()

    carSery.detail = "1.8 SEG Altis 4Doors"
    carSery.save()

    carSery.year = "2001"
    carSery.detail = "1.6 DXIS 4Doors"
    carSery.save()

    carSery.detail = "1.6 GXi 4Doors"
    carSery.save()

    carSery.detail = "1.6 GXIS 4Doors"
    carSery.save()

    carSery.detail = "1.8 SEG 4Doors"
    carSery.save()

    carSery.detail = "1.8 SEG Altis 4Doors"
    carSery.save()
    //----Corolla

    carSery.model = "Corolla Altis"
    carSery.year = "2001"
    carSery.detail = "1.6 E 4Doors"
    carSery.car_group_id = 4
    carSery.car_type_id = 1
    carSery.save()

    carSery.detail = "1.6 E S-Limited 4Doors"
    carSery.save()

    carSery.detail = "1.6 J 4Doors"
    carSery.save()

    carSery.detail = "1.8 E 4Doors"
    carSery.save()

    carSery.detail = "1.8 G 4Doors"
    carSery.save()

    carSery.year = "2002"
    carSery.detail = "1.6 E 4Doors"
    carSery.save()

    carSery.detail = "1.6 J 4Doors"
    carSery.save()

    carSery.detail = "1.8 E 4Doors"
    carSery.save()

    carSery.detail = "1.8 G 4Doors"
    carSery.save()

    carSery.detail = "1.8 S 4Doors"
    carSery.save()

    carSery.year = "2003"
    carSery.detail = "1.6 E 4Doors"
    carSery.save()

    carSery.detail = "1.6 E Premium 4Doors"
    carSery.save()

    carSery.detail = "1.6 J 4Doors"
    carSery.save()

    carSery.detail = "1.8 E 4Doors"
    carSery.save()

    carSery.detail = "1.8 G 4Doors"
    carSery.save()

    carSery.detail = "1.8 S 4Doors"
    carSery.save()

    carSery.year = "2004"
    carSery.detail = "1.6 E 4Doors"
    carSery.save()

    carSery.detail = "1.6 J 4Doors"
    carSery.save()

    carSery.detail = "1.8 E 4Doors"
    carSery.save()

    carSery.detail = "1.8 G 4Doors"
    carSery.save()

    carSery.year = "2005"
    carSery.detail = "1.6 E 4Doors"
    carSery.save()

    carSery.detail = "1.6 J 4Doors"
    carSery.save()

    carSery.detail = "1.8 E 4Doors"
    carSery.save()

    carSery.detail = "1.8 G 4Doors"
    carSery.save()

    carSery.year = "2006"
    carSery.detail = "1.6 E 4Doors"
    carSery.save()

    carSery.detail = "1.6 G 4Doors"
    carSery.save()

    carSery.detail = "1.6 G Edition 4Doors"
    carSery.save()

    carSery.detail = "1.6 J 4Doors"
    carSery.save()

    carSery.detail = "1.8 E 4Doors"
    carSery.save()

    carSery.detail = "1.8 G 4Doors"
    carSery.save()

    carSery.detail = "1.8 G Limited 4Doors"
    carSery.save()

    carSery.year = "2007"
    carSery.detail = "1.6 E 4Doors"
    carSery.save()

    carSery.detail = "1.6 E Limited 4Doors"
    carSery.save()

    carSery.detail = "1.6 G 4Doors"
    carSery.save()

    carSery.detail = "1.6 G Edition 4Doors"
    carSery.save()

    carSery.detail = "1.6 G Limited 4Doors"
    carSery.save()

    carSery.detail = "1.6 J 4Doors"
    carSery.save()

    carSery.detail = "1.8 E 4Doors"
    carSery.save()

    carSery.detail = "1.8 E Limited 4Doors"
    carSery.save()

    carSery.detail = "1.8 G 4Doors"
    carSery.save()

    carSery.year = "2008"
    carSery.detail = "1.6 E 4Doors"
    carSery.save()

    carSery.detail = "1.6 E Limited 4Doors"
    carSery.save()

    carSery.detail = "1.6 G 4Doors"
    carSery.save()

    carSery.detail = "1.6 G Limited 4Doors"
    carSery.save()

    carSery.detail = "1.6 J 4Doors"
    carSery.save()

    carSery.detail = "1.8 E 4Doors"
    carSery.save()

    carSery.detail = "1.8 E Limited 4Doors"
    carSery.save()

    carSery.detail = "1.8 G 4Doors"
    carSery.save()

    carSery.year = "2009"
    carSery.detail = "1.6 CNG 4Doors"
    carSery.save()

    carSery.detail = "1.6 E 4Doors"
    carSery.save()

    carSery.detail = "1.6 G 4Doors"
    carSery.save()

    carSery.detail = "1.6 J 4Doors"
    carSery.save()

    carSery.detail = "1.6 SS-I 4Doors"
    carSery.save()

    carSery.detail = "1.8 E 4Doors"
    carSery.save()

    carSery.detail = "1.8 G 4Doors"
    carSery.save()

    carSery.detail = "2.0 G 4Doors"
    carSery.save()

    carSery.detail = "2.0 V 4Doors"
    carSery.save()

    carSery.year = "2010"
    carSery.detail = "1.6 CNG 4Doors"
    carSery.save()

    carSery.detail = "1.6 E 4Doors"
    carSery.save()

    carSery.detail = "1.6 G 4Doors"
    carSery.save()

    carSery.detail = "1.6 J 4Doors"
    carSery.save()

    carSery.detail = "1.6 TRD Sportivo 4Doors"
    carSery.save()

    carSery.detail = "1.8 E 4Doors"
    carSery.save()

    carSery.detail = "1.8 G 4Doors"
    carSery.save()

    carSery.detail = "1.8 TRD Sportivo 4Doors"
    carSery.save()

    carSery.detail = "2.0 G 4Doors"
    carSery.save()

    carSery.detail = "2.0 V 4Doors"
    carSery.save()

    carSery.year = "2011"
    carSery.detail = "1.6 CNG 4Doors"
    carSery.save()

    carSery.detail = "1.6 E 4Doors"
    carSery.save()

    carSery.detail = "1.6 G 4Doors"
    carSery.save()

    carSery.detail = "1.6 J 4Doors"
    carSery.save()

    carSery.detail = "1.8 E 4Doors"
    carSery.save()

    carSery.detail = "1.8 G 4Doors"
    carSery.save()

    carSery.detail = "1.8 TRD Sportivo 4Doors"
    carSery.save()

    carSery.detail = "2.0 G 4Doors"
    carSery.save()

    carSery.detail = "2.0 V 4Doors"
    carSery.save()

    carSery.year = "2012"
    carSery.detail = "1.6 CNG 4Doors"
    carSery.save()

    carSery.detail = "1.6 E 4Doors"
    carSery.save()

    carSery.detail = "1.6 G 4Doors"
    carSery.save()

    carSery.detail = "1.6 J 4Doors"
    carSery.save()

    carSery.detail = "1.8 E 4Doors"
    carSery.save()

    carSery.detail = "1.8 G 4Doors"
    carSery.save()

    carSery.detail = "1.8 TRD Sportivo 4Doors"
    carSery.save()

    carSery.detail = "2.0 G 4Doors"
    carSery.save()

    carSery.detail = "2.0 V 4Doors"
    carSery.save()

    carSery.year = "2013"
    carSery.detail = "1.6 CNG 4Doors"
    carSery.save()

    carSery.detail = "1.6 E 4Doors"
    carSery.save()

    carSery.detail = "1.6 G 4Doors"
    carSery.save()

    carSery.detail = "1.6 J 4Doors"
    carSery.save()

    carSery.detail = "1.8 E 4Doors"
    carSery.save()

    carSery.detail = "1.8 G 4Doors"
    carSery.save()

    carSery.detail = "1.8 TRD Sportivo 4Doors"
    carSery.save()

    carSery.detail = "2.0 G 4Doors"
    carSery.save()

    carSery.detail = "2.0 V 4Doors"
    carSery.save()

    carSery.year = "2014"
    carSery.detail = "1.6 E 4Doors"
    carSery.save()

    carSery.detail = "1.6 G 4Doors"
    carSery.save()

    carSery.detail = "1.6 J 4Doors"
    carSery.save()

    carSery.detail = "1.8 E 4Doors"
    carSery.save()

    carSery.detail = "1.8 G 4Doors"
    carSery.save()

    carSery.detail = "1.8 S 4Doors"
    carSery.save()

    carSery.detail = "1.8 TRD Sportivo 4Doors"
    carSery.save()

    carSery.detail = "1.8 V 4Doors"
    carSery.save()

    carSery.detail = "2.0 G 4Doors"
    carSery.save()

    carSery.detail = "2.0 V 4Doors"
    carSery.save()

    carSery.year = "2015"
    carSery.detail = "1.6 E 4Doors"
    carSery.save()

    carSery.detail = "1.6 G 4Doors"
    carSery.save()

    carSery.detail = "1.8 E 4Doors"
    carSery.save()

    carSery.detail = "1.8 ESPORT 4Doors"
    carSery.save()

    carSery.detail = "1.8 G 4Doors"
    carSery.save()

    carSery.detail = "1.8 S 4Doors"
    carSery.save()

    carSery.detail = "1.8 V 4Doors"
    carSery.save()

    carSery.year = "2016"
    carSery.detail = "1.6 E 4Doors"
    carSery.save()

    carSery.detail = "1.6 G 4Doors"
    carSery.save()

    carSery.detail = "1.6 J 4Doors"
    carSery.save()

    carSery.detail = "1.8 E 4Doors"
    carSery.save()

    carSery.detail = "1.8 ESPORT 4Doors"
    carSery.save()

    carSery.detail = "1.8 G 4Doors"
    carSery.save()

    carSery.detail = "1.8 S 4Doors"
    carSery.save()

    carSery.detail = "1.8 V 4Doors"
    carSery.save()

    carSery.year = "2017"
    carSery.detail = "1.6 E 4Doors"
    carSery.save()

    carSery.detail = "1.6 G 4Doors"
    carSery.save()

    carSery.detail = "1.6 J 4Doors"
    carSery.save()

    carSery.detail = "1.8 E 4Doors"
    carSery.save()

    carSery.detail = "1.8 ESPORT 4Doors"
    carSery.save()

    carSery.detail = "1.8 V 4Doors"
    carSery.save()

    carSery.year = "2018"
    carSery.detail = "1.6 E 4Doors"
    carSery.save()

    carSery.detail = "1.6 G 4Doors"
    carSery.save()

    carSery.detail = "1.6 J 4Doors"
    carSery.save()

    carSery.detail = "1.8 E 4Doors"
    carSery.save()

    carSery.detail = "1.8 ESPORT 4Doors"
    carSery.save()

    carSery.detail = "1.8 S 4Doors"
    carSery.save()

    carSery.detail = "1.8 V 4Doors"
    carSery.save()

    carSery.year = "2019"
    carSery.detail = "1.6 E 4Doors"
    carSery.save()

    carSery.detail = "1.6 G 4Doors"
    carSery.save()

    carSery.detail = "1.6 J 4Doors"
    carSery.save()

    carSery.detail = "1.8 E 4Doors"
    carSery.save()

    carSery.detail = "1.8 ESPORT 4Doors"
    carSery.save()

    carSery.detail = "1.8 S 4Doors"
    carSery.save()

    carSery.detail = "1.8 V 4Doors"
    carSery.save()
    //----Corlla Altis

    carSery.model = "Corona"
    carSery.year = "1993"
    carSery.detail = "1.6 GLi 4Doors"
    carSery.car_group_id = 3
    carSery.car_type_id = 1
    carSery.save()

    carSery.detail = "1.6 XLi 4Doors"
    carSery.save()

    carSery.detail = "2.0 4Doors"
    carSery.save()

    carSery.year = "1994"
    carSery.detail = "1.6 GLi 4Doors"
    carSery.save()

    carSery.detail = "1.6 XLi 4Doors"
    carSery.save()

    carSery.detail = "2.0 4Doors"
    carSery.save()

    carSery.year = "1995"
    carSery.detail = "1.6 GLi 4Doors"
    carSery.save()

    carSery.detail = "2.0 4Doors"
    carSery.save()

    carSery.year = "1996"
    carSery.detail = "1.6 Exsior GXi 4Doors"
    carSery.save()

    carSery.detail = "1.6 GLi 4Doors"
    carSery.save()

    carSery.detail = "2.0 4Doors"
    carSery.save()

    carSery.detail = "2.0 Exsior GXi 4Doors"
    carSery.save()

    carSery.detail = "2.0 SEG GXi 4Doors"
    carSery.save()

    carSery.year = "1997"
    carSery.detail = "1.6 Exsior GXi 4Doors"
    carSery.save()

    carSery.detail = "2.0 Exsior GXi 4Doors"
    carSery.save()

    carSery.detail = "2.0 Exsior SEG 4Doors"
    carSery.save()

    carSery.year = "1998"
    carSery.detail = "1.6 Exsior GXi 4Doors"
    carSery.save()

    carSery.detail = "2.0 Exsior SEG 4Doors"
    carSery.save()

    carSery.year = "1999"
    carSery.detail = "1.6 Exsior GXi 4Doors"
    carSery.save()

    carSery.detail = "2.0 Exsior SEG 4Doors"
    carSery.save()

    carSery.year = "2000"
    carSery.detail = "2.0 Exsior SEG 4Doors"
    carSery.save()
    //----Corona

    carSery.model = "Crown"
    carSery.year = "1992"
    carSery.detail = "2.8 Duluxe 4Doors"
    carSery.car_group_id = 2
    carSery.car_type_id = 1
    carSery.save()

    carSery.detail = "2.8 Royal Saloon 4Doors"
    carSery.save()

    carSery.detail = "3.0 Royal Saloon 4Doors"
    carSery.save()

    carSery.year = "1993"
    carSery.detail = "2.8 Duluxe 4Doors"
    carSery.save()

    carSery.detail = "2.8 Royal Saloon 4Doors"
    carSery.save()

    carSery.detail = "3.0 Royal Saloon 4Doors"
    carSery.save()

    carSery.year = "1994"
    carSery.save()

    carSery.year = "1995"
    carSery.save()

    carSery.year = "1996"
    carSery.save()

    carSery.year = "1997"
    carSery.detail = "2.0 Royal Extra 4Doors"
    carSery.save()

    carSery.detail = "3.0 EFI 4Doors"
    carSery.save()

    carSery.detail = "3.0 Royal Saloon 4Doors"
    carSery.save()

    carSery.year = "1998"
    carSery.detail = "2.0 Royal Extra 4Doors"
    carSery.save()

    carSery.detail = "3.0 EFI 4Doors"
    carSery.save()

    carSery.detail = "3.0 Royal Saloon 4Doors"
    carSery.save()

    carSery.year = "1999"
    carSery.detail = "3.0 EFI 4Doors"
    carSery.save()

    carSery.detail = "3.0 Royal Saloon 4Doors"
    carSery.save()

    carSery.year = "2000"
    carSery.detail = "3.0 EFI 4Doors"
    carSery.save()

    carSery.detail = "3.0 Royal Saloon 4Doors"
    carSery.save()

    carSery.year = "2001"
    carSery.detail = "3.0 EFI 4Doors"
    carSery.save()

    carSery.detail = "3.0 Royal Saloon 4Doors"
    carSery.save()

    carSery.year = "2002"
    carSery.save()

    carSery.year = "2003"
    carSery.save()

    carSery.year = "2004"
    carSery.save()

    carSery.year = "2005"
    carSery.save()

    carSery.year = "2006"
    carSery.save()

    carSery.year = "2007"
    carSery.save()

    carSery.year = "2008"
    carSery.save()
    //----Crown

    carSery.model = "Fortuner"
    carSery.year = "2004"
    carSery.detail = "2.7 V 4Doors"
    carSery.car_group_id = 3
    carSery.car_type_id = 5
    carSery.save()

    carSery.detail = "3.0 G 4Doors"
    carSery.save()

    carSery.detail = "3.0 V 4Doors"
    carSery.save()

    carSery.year = "2005"
    carSery.detail = "2.7 V 4Doors"
    carSery.save()

    carSery.detail = "3.0 G 4Doors"
    carSery.save()

    carSery.detail = "3.0 V 4Doors"
    carSery.save()

    carSery.year = "2006"
    carSery.detail = "2.7 V 4Doors"
    carSery.save()

    carSery.detail = "2.7 V Exclusive 4Doors"
    carSery.save()

    carSery.detail = "3.0 G 4Doors"
    carSery.save()

    carSery.detail = "3.0 V 4Doors"
    carSery.save()

    carSery.detail = "3.0 V Exclusive 4Doors"
    carSery.save()

    carSery.year = "2007"
    carSery.detail = "2.7 V 4Doors"
    carSery.save()

    carSery.detail = "2.7 V Exclusive 4Doors"
    carSery.save()

    carSery.detail = "3.0 G 4Doors"
    carSery.save()

    carSery.detail = "3.0 V 4Doors"
    carSery.save()

    carSery.detail = "3.0 V Exclusive 4Doors"
    carSery.save()

    carSery.detail = "3.0 V Smart 4Doors"
    carSery.save()

    carSery.year = "2008"
    carSery.detail = "2.7 V 4Doors"
    carSery.save()

    carSery.detail = "3.0 G 4Doors"
    carSery.save()

    carSery.detail = "3.0 TRD Sportivo I 4Doors"
    carSery.save()

    carSery.detail = "3.0 V 4Doors"
    carSery.save()

    carSery.detail = "3.0 V Smart 4Doors"
    carSery.save()

    carSery.year = "2009"
    carSery.detail = "2.5 G 4Doors"
    carSery.save()

    carSery.detail = "2.7 V 4Doors"
    carSery.save()

    carSery.detail = "3.0 G 4Doors"
    carSery.save()

    carSery.detail = "3.0 TRD Sportivo I 4Doors"
    carSery.save()

    carSery.detail = "3.0 TRD Sportivo II 4Doors"
    carSery.save()

    carSery.detail = "3.0 V 4Doors"
    carSery.save()

    carSery.detail = "3.0 V Aperto 4Doors"
    carSery.save()

    carSery.year = "2010"
    carSery.detail = "2.5 G 4Doors"
    carSery.save()

    carSery.detail = "2.7 V 4Doors"
    carSery.save()

    carSery.detail = "3.0 G 4Doors"
    carSery.save()

    carSery.detail = "3.0 TRD Sportivo I 4Doors"
    carSery.save()

    carSery.detail = "3.0 TRD Sportivo II 4Doors"
    carSery.save()

    carSery.detail = "3.0 V 4Doors"
    carSery.save()

    carSery.detail = "3.0 V Aperto 4Doors"
    carSery.save()

    carSery.year = "2011"
    carSery.detail = "2.5 G 4Doors"
    carSery.save()

    carSery.detail = "2.7 V 4Doors"
    carSery.save()

    carSery.detail = "3.0 TRD Sportivo III 4Doors"
    carSery.save()

    carSery.detail = "3.0 V 4Doors"
    carSery.save()

    carSery.year = "2012"
    carSery.detail = "2.5 G 4Doors"
    carSery.save()

    carSery.detail = "2.7 V 4Doors"
    carSery.save()

    carSery.detail = "3.0 TRD Sportivo 4Doors"
    carSery.save()

    carSery.detail = "3.0 V 4Doors"
    carSery.save()

    carSery.year = "2013"
    carSery.detail = "2.5 G 4Doors"
    carSery.save()

    carSery.detail = "2.5 V 4Doors"
    carSery.save()

    carSery.detail = "2.7 V 4Doors"
    carSery.save()

    carSery.detail = "3.0 TRD Sportivo 4Doors"
    carSery.save()

    carSery.detail = "3.0 V 4Doors"
    carSery.save()

    carSery.year = "2014"
    carSery.detail = "2.5 G 4Doors"
    carSery.save()

    carSery.detail = "2.5 V 4Doors"
    carSery.save()

    carSery.detail = "2.7 V 4Doors"
    carSery.save()

    carSery.detail = "3.0 TRD Sportivo 4Doors"
    carSery.save()

    carSery.detail = "3.0 V 4Doors"
    carSery.save()

    carSery.year = "2015"
    carSery.detail = "2.4 G 4Doors"
    carSery.save()

    carSery.detail = "2.4 V 4Doors"
    carSery.save()

    carSery.detail = "2.5 G 4Doors"
    carSery.save()

    carSery.detail = "2.5 V 4Doors"
    carSery.save()

    carSery.detail = "2.7 V 4Doors"
    carSery.save()

    carSery.detail = "2.8 V 4Doors"
    carSery.save()

    carSery.detail = "3.0 TRD Sportivo 4Doors"
    carSery.save()

    carSery.detail = "3.0 V 4Doors"
    carSery.save()

    carSery.year = "2016"
    carSery.detail = "2.4 G 4Doors"
    carSery.save()

    carSery.detail = "2.4 V 4Doors"
    carSery.save()

    carSery.detail = "2.7 V 4Doors"
    carSery.save()

    carSery.detail = "2.8 TRD Sportivo 4Doors"
    carSery.save()

    carSery.detail = "2.8 V 4Doors"
    carSery.save()

    carSery.year = "2017"
    carSery.detail = "2.4 G 4Doors"
    carSery.save()

    carSery.detail = "2.4 V 4Doors"
    carSery.save()

    carSery.detail = "2.7 V 4Doors"
    carSery.save()

    carSery.detail = "2.8 TRD Sportivo 4Doors"
    carSery.save()

    carSery.detail = "2.8 V 4Doors"
    carSery.save()

    carSery.year = "2018"
    carSery.detail = "2.4 G 4Doors"
    carSery.save()

    carSery.detail = "2.4 V 4Doors"
    carSery.save()

    carSery.detail = "2.7 V 4Doors"
    carSery.save()

    carSery.detail = "2.8 TRD Sportivo 4Doors"
    carSery.save()

    carSery.detail = "2.8 V 4Doors"
    carSery.save()

    carSery.year = "2019"
    carSery.detail = "2.4 G 4Doors"
    carSery.save()

    carSery.detail = "2.4 V 4Doors"
    carSery.save()

    carSery.detail = "2.7 V 4Doors"
    carSery.save()

    carSery.detail = "2.8 TRD Sportivo 4Doors"
    carSery.save()

    carSery.detail = "2.8 V 4Doors"
    carSery.save()
    //----Fortuner

    //----Grand Wagon no group
    //----Hiace no group
    //----Hilux Mighty-X no group
    //----Hilux Revo no group
    //----Hilux Tiger no group
    //----Hilux Vigo no group
    carSery.model = "Innova"
    carSery.year = "2004"
    carSery.detail = "2.0 G 4Doors"
    carSery.car_group_id = 3
    carSery.car_type_id = 1
    carSery.save()

    carSery.detail = "2.0 V 4Doors"
    carSery.save()

    carSery.detail = "2.5 G 4Doors"
    carSery.save()

    carSery.detail = "2.5 V 4Doors"
    carSery.save()

    carSery.year = "2005"
    carSery.detail = "2.0 G 4Doors"
    carSery.save()

    carSery.detail = "2.0 V 4Doors"
    carSery.save()

    carSery.detail = "2.5 G 4Doors"
    carSery.save()

    carSery.detail = "2.5 V 4Doors"
    carSery.save()

    carSery.year = "2006"
    carSery.detail = "2.0 G 4Doors"
    carSery.save()

    carSery.detail = "2.0 V 4Doors"
    carSery.save()

    carSery.detail = "2.5 G 4Doors"
    carSery.save()

    carSery.detail = "2.5 V 4Doors"
    carSery.save()

    carSery.year = "2007"
    carSery.detail = "2.0 E 4Doors"
    carSery.save()

    carSery.detail = "2.0 G 4Doors"
    carSery.save()

    carSery.detail = "2.0 V 4Doors"
    carSery.save()

    carSery.detail = "2.5 G 4Doors"
    carSery.save()

    carSery.detail = "2.5 V 4Doors"
    carSery.save()

    carSery.year = "2008"
    carSery.detail = "2.0 E 4Doors"
    carSery.save()

    carSery.detail = "2.0 G 4Doors"
    carSery.save()

    carSery.detail = "2.0 G Option 4Doors"
    carSery.save()

    carSery.detail = "2.0 V 4Doors"
    carSery.save()

    carSery.detail = "2.5 V 4Doors"
    carSery.save()

    carSery.year = "2009"
    carSery.detail = "2.0 E 4Doors"
    carSery.save()

    carSery.detail = "2.0 G 4Doors"
    carSery.save()

    carSery.detail = "2.0 G Option 4Doors"
    carSery.save()

    carSery.detail = "2.0 V 4Doors"
    carSery.save()

    carSery.year = "2010"
    carSery.detail = "2.0 E 4Doors"
    carSery.save()

    carSery.detail = "2.0 G 4Doors"
    carSery.save()

    carSery.detail = "2.0 G Exclusive 4Doors"
    carSery.save()

    carSery.detail = "2.0 G Option 4Doors"
    carSery.save()

    carSery.detail = "2.0 V 4Doors"
    carSery.save()

    carSery.year = "2011"
    carSery.detail = "2.0 E 4Doors"
    carSery.save()

    carSery.detail = "2.0 G 4Doors"
    carSery.save()

    carSery.detail = "2.0 G Exclusive 4Doors"
    carSery.save()

    carSery.detail = "2.0 G Option 4Doors"
    carSery.save()

    carSery.detail = "2.0 V 4Doors"
    carSery.save()

    carSery.year = "2012"
    carSery.detail = "2.0 E 4Doors"
    carSery.save()

    carSery.detail = "2.0 G 4Doors"
    carSery.save()

    carSery.detail = "2.0 G Option 4Doors"
    carSery.save()

    carSery.detail = "2.0 V 4Doors"
    carSery.save()

    carSery.year = "2013"
    carSery.detail = "2.0 E 4Doors"
    carSery.save()

    carSery.detail = "2.0 G 4Doors"
    carSery.save()

    carSery.detail = "2.0 G Option 4Doors"
    carSery.save()

    carSery.detail = "2.0 V 4Doors"
    carSery.save()

    carSery.year = "2014"
    carSery.detail = "2.0 E 4Doors"
    carSery.save()

    carSery.detail = "2.0 G 4Doors"
    carSery.save()

    carSery.detail = "2.0 G Option 4Doors"
    carSery.save()

    carSery.detail = "2.0 V 4Doors"
    carSery.save()

    carSery.year = "2015"
    carSery.detail = "2.0 E 4Doors"
    carSery.save()

    carSery.detail = "2.0 G 4Doors"
    carSery.save()

    carSery.detail = "2.0 G Option 4Doors"
    carSery.save()

    carSery.detail = "2.0 V 4Doors"
    carSery.save()

    carSery.year = "2016"
    carSery.detail = "2.0 Crysta E 4Doors"
    carSery.save()

    carSery.detail = "2.0 E 4Doors"
    carSery.save()

    carSery.detail = "2.0 G 4Doors"
    carSery.save()

    carSery.detail = "2.0 G Option 4Doors"
    carSery.save()

    carSery.detail = "2.0 V 4Doors"
    carSery.save()

    carSery.detail = "2.8 Crysta G 4Doors"
    carSery.save()

    carSery.detail = "2.8 Crysta V 4Doors"
    carSery.save()

    carSery.year = "2017"
    carSery.detail = "2.0 Crysta E 4Doors"
    carSery.save()

    carSery.detail = "2.8 Crysta G 4Doors"
    carSery.save()

    carSery.detail = "2.8 Crysta V 4Doors"
    carSery.save()

    carSery.year = "2018"
    carSery.detail = "2.0 Crysta E 4Doors"
    carSery.save()

    carSery.detail = "2.8 Crysta G 4Doors"
    carSery.save()

    carSery.detail = "2.8 Crysta V 4Doors"
    carSery.save()

    carSery.year = "2019"
    carSery.detail = "2.0 Crysta E 4Doors"
    carSery.save()

    carSery.detail = "2.8 Crysta G 4Doors"
    carSery.save()

    carSery.detail = "2.8 Crysta V 4Doors"
    carSery.save()
    //----Innova

    carSery.model = "Landcruiser Prado"
    carSery.year = "1996"
    carSery.detail = "3.4 4Doors"
    carSery.car_group_id = 2
    carSery.car_type_id = 1
    carSery.save()

    carSery.year = "1997"
    carSery.save()

    carSery.year = "1998"
    carSery.save()

    carSery.year = "1999"
    carSery.save()

    carSery.year = "2000"
    carSery.save()

    carSery.year = "2001"
    carSery.save()

    carSery.year = "2002"
    carSery.save()

    carSery.year = "2003"
    carSery.save()

    carSery.detail = "4.0 4Doors"
    carSery.save()

    carSery.year = "2004"
    carSery.save()

    carSery.year = "2005"
    carSery.save()

    carSery.year = "2006"
    carSery.save()
    //----Landcruiser Prado

    carSery.model = "Prius"
    carSery.year = "2010"
    carSery.detail = "1.8 Hybrid 4Doors"
    carSery.car_group_id = 3
    carSery.car_type_id = 1
    carSery.save()

    carSery.year = "2011"
    carSery.save()

    carSery.detail = "1.8 Hybrid E TRD Sportivo 4Doors"
    carSery.save()

    carSery.year = "2012"
    carSery.detail = "1.8 Hybrid 4Doors"
    carSery.save()

    carSery.detail = "1.8 Hybrid E TRD Sportivo 4Doors"
    carSery.save()

    carSery.detail = "1.8 Hybrid Standard grade 4Doors"
    carSery.save()

    carSery.detail = "1.8 Hybrid Top grade 4Doors"
    carSery.save()

    carSery.detail = "1.8 Hybrid Top option grade 4Doors"
    carSery.save()

    carSery.detail = "1.8 Hybrid TRD Sportivo II 4Doors"
    carSery.save()

    carSery.year = "2013"
    carSery.detail = "1.8 Hybrid Standard grade 4Doors"
    carSery.save()

    carSery.detail = "1.8 Hybrid Top grade 4Doors"
    carSery.save()

    carSery.detail = "1.8 Hybrid Top option grade 4Doors"
    carSery.save()

    carSery.detail = "1.8 Hybrid TRD Sportivo II 4Doors"
    carSery.save()

    carSery.detail = "1.8 Hybrid TRD Sportivo Top option 4Doors"
    carSery.save()

    carSery.year = "2014"
    carSery.detail = "1.8 Hybrid Standard grade 4Doors"
    carSery.save()

    carSery.detail = "1.8 Hybrid Top grade 4Doors"
    carSery.save()

    carSery.detail = "1.8 Hybrid Top option grade 4Doors"
    carSery.save()

    carSery.detail = "1.8 Hybrid TRD Sportivo II 4Doors"
    carSery.save()

    carSery.detail = "1.8 Hybrid TRD Sportivo Top option 4Doors"
    carSery.save()

    carSery.year = "2015"
    carSery.detail = "1.8 Hybrid Standard grade 4Doors"
    carSery.save()

    carSery.detail = "1.8 Hybrid Top grade 4Doors"
    carSery.save()

    carSery.detail = "1.8 Hybrid Top option grade 4Doors"
    carSery.save()

    carSery.detail = "1.8 Hybrid TRD Sportivo II 4Doors"
    carSery.save()

    carSery.detail = "1.8 Hybrid TRD Sportivo Top option 4Doors"
    carSery.save()
    //----Prius

    carSery.model = "Rav4"
    carSery.year = "1995"
    carSery.detail = "2.0 4Doors"
    carSery.car_group_id = 2
    carSery.car_type_id = 1
    carSery.save()

    carSery.year = "1996"
    carSery.save()

    carSery.year = "1997"
    carSery.save()

    carSery.year = "1998"
    carSery.save()

    carSery.year = "1999"
    carSery.save()

    carSery.year = "2000"
    carSery.save()

    carSery.year = "2001"
    carSery.save()

    carSery.year = "2002"
    carSery.save()
    //----Rav4

    //----Sienta no group
    carSery.model = "Soluna"
    carSery.year = "1997"
    carSery.detail = "1.5 GLi 4Doors"
    carSery.car_group_id = 5
    carSery.car_type_id = 1
    carSery.save()

    carSery.detail = "1.5 GLi S-Version  4Doors"
    carSery.save()
    
    carSery.detail = "1.5 XLi 4Doors"
    carSery.save()

    carSery.detail = "1.5 XLi-L 4Doors"
    carSery.save()

    carSery.year = "1998"
    carSery.detail = "1.5 GLi 4Doors"
    carSery.save()

    carSery.detail = "1.5 GLi S-Version  4Doors"
    carSery.save()

    carSery.detail = "1.5 SLi 4Doors"
    carSery.save()
    
    carSery.detail = "1.5 XLi 4Doors"
    carSery.save()

    carSery.detail = "1.5 XLi-L 4Doors"
    carSery.save()

    carSery.year = "1999"
    carSery.detail = "1.5 GLi 4Doors"
    carSery.save()

    carSery.detail = "1.5 GLi S-Series 4Doors"
    carSery.save()

    carSery.detail = "1.5 GLi S-Version  4Doors"
    carSery.save()

    carSery.detail = "1.5 GLi V-Version  4Doors"
    carSery.save()

    carSery.detail = "1.5 SLi 4Doors"
    carSery.save()

    carSery.detail = "1.5 SLi V-Version  4Doors"
    carSery.save()
    
    carSery.detail = "1.5 XLi 4Doors"
    carSery.save()

    carSery.detail = "1.5 XLi-L 4Doors"
    carSery.save()

    carSery.year = "2000"
    carSery.detail = "1.5 GLi 4Doors"
    carSery.save()

    carSery.detail = "1.5 GLi S-Series 4Doors"
    carSery.save()

    carSery.detail = "1.5 GLi V-Version  4Doors"
    carSery.save()

    carSery.detail = "1.5 SLi 4Doors"
    carSery.save()

    carSery.detail = "1.5 SLi V-Version  4Doors"
    carSery.save()
    
    carSery.detail = "1.5 XLi 4Doors"
    carSery.save()

    carSery.year = "2001"
    carSery.detail = "1.5 GLi 4Doors"
    carSery.save()

    carSery.detail = "1.5 SLi 4Doors"
    carSery.save()

    carSery.detail = "1.5 S-Limited 4Doors"
    carSery.save()
    
    carSery.detail = "1.5 XLi 4Doors"
    carSery.save()

    carSery.year = "2002"
    carSery.detail = "1.5 GLi 4Doors"
    carSery.save()

    carSery.detail = "1.5 GLi Sporty 4Doors"
    carSery.save()

    carSery.detail = "1.5 SLi 4Doors"
    carSery.save()

    carSery.detail = "1.5 SLi Sporty 4Doors"
    carSery.save()
    
    carSery.detail = "1.5 XLi 4Doors"
    carSery.save()
    //----Soluna

    carSery.model = "Sport Cruiser"
    carSery.year = "2001"
    carSery.detail = "2.4 4Doors"
    carSery.car_group_id = 3
    carSery.car_type_id = 2
    carSery.save()

    carSery.detail = "2.5 E 4Doors"
    carSery.save()

    carSery.detail = "2.5 Prerunner E 4Doors"
    carSery.save()

    carSery.detail = "2.5 S 4Doors"
    carSery.save()

    carSery.detail = "3.0 G Limited 4Doors"
    carSery.save()

    carSery.year = "2002"
    carSery.detail = "2.4 4Doors"
    carSery.save()

    carSery.detail = "2.5 E 4Doors"
    carSery.save()

    carSery.detail = "2.5 Prerunner E 4Doors"
    carSery.save()

    carSery.detail = "2.5 S 4Doors"
    carSery.save()

    carSery.detail = "3.0 G 4Doors"
    carSery.save()

    carSery.detail = "3.0 G Limited 4Doors"
    carSery.save()

    carSery.year = "2003"
    carSery.detail = "2.4 4Doors"
    carSery.save()

    carSery.detail = "2.5 E 4Doors"
    carSery.save()

    carSery.detail = "2.5 Prerunner E 4Doors"
    carSery.save()

    carSery.detail = "2.5 S 4Doors"
    carSery.save()

    carSery.detail = "3.0 G 4Doors"
    carSery.save()

    carSery.detail = "3.0 G Limited 4Doors"
    carSery.save()

    carSery.year = "2004"
    carSery.detail = "2.4 4Doors"
    carSery.save()

    carSery.detail = "2.5 E 4Doors"
    carSery.save()

    carSery.detail = "2.5 Prerunner E 4Doors"
    carSery.save()

    carSery.detail = "2.5 S 4Doors"
    carSery.save()

    carSery.detail = "3.0 G 4Doors"
    carSery.save()

    carSery.detail = "3.0 G Limited 4Doors"
    carSery.save()
    //----Sport Cruiser

    carSery.model = "Sport Rider"
    carSery.year = "1998"
    carSery.detail = "3.0 Prerunner 4Doors"
    carSery.car_group_id = 4
    carSery.car_type_id = 5
    carSery.save()

    carSery.detail = "3.0 SR5 4Doors"
    carSery.save()

    carSery.detail = "3.0 SR5 Limited 4Doors"
    carSery.save()

    carSery.year = "1999"
    carSery.detail = "3.0 Prerunner 4Doors"
    carSery.save()

    carSery.detail = "3.0 SR5 4Doors"
    carSery.save()

    carSery.detail = "3.0 SR5 Limited 4Doors"
    carSery.save()

    carSery.year = "2000"
    carSery.detail = "3.0 Prerunner 4Doors"
    carSery.save()

    carSery.detail = "3.0 Prerunner SGL 4Doors"
    carSery.save()

    carSery.detail = "3.0 Prerunner SGL Limited 4Doors"
    carSery.save()

    carSery.detail = "3.0 SR5 4Doors"
    carSery.save()

    carSery.detail = "3.0 SR5 Limited 4Doors"
    carSery.save()

    carSery.detail = "3.0 SR5 Limited G-Series 4Doors"
    carSery.save()

    carSery.year = "2001"
    carSery.detail = "2.5 D4D 4Doors"
    carSery.save()

    carSery.detail = "2.5 S 4Doors"
    carSery.save()

    carSery.detail = "3.0 D4D 4Doors"
    carSery.save()

    carSery.detail = "3.0 G Limited 4Doors"
    carSery.save()

    carSery.detail = "3.0 Prerunner 4Doors"
    carSery.save()

    carSery.detail = "3.0 Prerunner SGL 4Doors"
    carSery.save()

    carSery.detail = "3.0 Prerunner SGL Limited 4Doors"
    carSery.save()

    carSery.detail = "3.0 SR5 Limited 4Doors"
    carSery.save()

    carSery.detail = "3.0 SR5 Limited G-Series 4Doors"
    carSery.save()

    carSery.year = "2002"
    carSery.detail = "2.5 Prerunner E 4Doors"
    carSery.save()

    carSery.detail = "2.5 S 4Doors"
    carSery.save()

    carSery.detail = "3.0 G Limited 4Doors"
    carSery.save()

    carSery.year = "2003"
    carSery.detail = "2.5 Prerunner E 4Doors"
    carSery.save()

    carSery.detail = "2.5 S 4Doors"
    carSery.save()

    carSery.detail = "3.0 G Limited 4Doors"
    carSery.save()

    carSery.year = "2004"
    carSery.detail = "2.5 Prerunner E 4Doors"
    carSery.save()

    carSery.detail = "2.5 S 4Doors"
    carSery.save()

    carSery.detail = "3.0 G Limited 4Doors"
    carSery.save()
    //----Sport Rider

    //----Super Custom no group
    //----Super Wagon no group
    carSery.model = "Vellfire"
    carSery.year = "2015"
    carSery.detail = "2.5 4Doors"
    carSery.car_group_id = 2
    carSery.car_type_id = 6
    carSery.save()

    carSery.year = "2016"
    carSery.save()

    carSery.year = "2017"
    carSery.save()

    carSery.year = "2018"
    carSery.save()

    carSery.year = "2019"
    carSery.save()
    //----Vellfire

    //----Ventury no group

    carSery.model = "Vios"
    carSery.year = "2002"
    carSery.detail = "1.5 E 4Doors"
    carSery.car_group_id = 5
    carSery.car_type_id = 1
    carSery.save()

    carSery.detail = "1.5 J 4Doors"
    carSery.save()

    carSery.detail = "1.5 S 4Doors"
    carSery.save()

    carSery.year = "2003"
    carSery.detail = "1.5 E 4Doors"
    carSery.save()

    carSery.detail = "1.5 J 4Doors"
    carSery.save()

    carSery.detail = "1.5 S 4Doors"
    carSery.save()

    carSery.detail = "1.5 S Sporty 4Doors"
    carSery.save()

    carSery.year = "2004"
    carSery.detail = "1.5 E 4Doors"
    carSery.save()

    carSery.detail = "1.5 J 4Doors"
    carSery.save()

    carSery.detail = "1.5 S 4Doors"
    carSery.save()

    carSery.detail = "1.5 S Sporty 4Doors"
    carSery.save()

    carSery.detail = "1.5 Turbo 4Doors"
    carSery.save()

    carSery.year = "2005"
    carSery.detail = "1.5 E 4Doors"
    carSery.save()

    carSery.detail = "1.5 J 4Doors"
    carSery.save()

    carSery.detail = "1.5 S 4Doors"
    carSery.save()

    carSery.detail = "1.5 S Sporty 4Doors"
    carSery.save()

    carSery.detail = "1.5 Turbo 4Doors"
    carSery.save()

    carSery.year = "2006"
    carSery.detail = "1.5 E 4Doors"
    carSery.save()

    carSery.detail = "1.5 J 4Doors"
    carSery.save()

    carSery.detail = "1.5 S 4Doors"
    carSery.save()

    carSery.detail = "1.5 S Sporty 4Doors"
    carSery.save()

    carSery.year = "2007"
    carSery.detail = "1.5 E 4Doors"
    carSery.save()

    carSery.detail = "1.5 ES 4Doors"
    carSery.save()

    carSery.detail = "1.5 G 4Doors"
    carSery.save()

    carSery.detail = "1.5 J 4Doors"
    carSery.save()

    carSery.detail = "1.5 S 4Doors"
    carSery.save()

    carSery.detail = "1.5 S Sporty 4Doors"
    carSery.save()

    carSery.year = "2008"
    carSery.detail = "1.5 E 4Doors"
    carSery.save()

    carSery.detail = "1.5 ES 4Doors"
    carSery.save()

    carSery.detail = "1.5 G 4Doors"
    carSery.save()

    carSery.detail = "1.5 J 4Doors"
    carSery.save()

    carSery.detail = "1.5 S 4Doors"
    carSery.save()

    carSery.year = "2009"
    carSery.detail = "1.5 E 4Doors"
    carSery.save()

    carSery.detail = "1.5 ES 4Doors"
    carSery.save()

    carSery.detail = "1.5 G 4Doors"
    carSery.save()

    carSery.detail = "1.5 GT 4Doors"
    carSery.save()

    carSery.detail = "1.5 J 4Doors"
    carSery.save()

    carSery.detail = "1.5 S 4Doors"
    carSery.save()

    carSery.year = "2010"
    carSery.detail = "1.5 E 4Doors"
    carSery.save()

    carSery.detail = "1.5 ES 4Doors"
    carSery.save()

    carSery.detail = "1.5 G 4Doors"
    carSery.save()

    carSery.detail = "1.5 GT 4Doors"
    carSery.save()

    carSery.detail = "1.5 J 4Doors"
    carSery.save()

    carSery.detail = "1.5 J Sportivo 4Doors"
    carSery.save()

    carSery.detail = "1.5 S 4Doors"
    carSery.save()

    carSery.year = "2011"
    carSery.detail = "1.5 E 4Doors"
    carSery.save()

    carSery.detail = "1.5 ES 4Doors"
    carSery.save()

    carSery.detail = "1.5 G 4Doors"
    carSery.save()

    carSery.detail = "1.5 J 4Doors"
    carSery.save()

    carSery.detail = "1.5 J Sportivo 4Doors"
    carSery.save()

    carSery.detail = "1.5 TRD Sportivo 4Doors"
    carSery.save()

    carSery.year = "2012"
    carSery.detail = "1.5 E 4Doors"
    carSery.save()

    carSery.detail = "1.5 ES 4Doors"
    carSery.save()

    carSery.detail = "1.5 G 4Doors"
    carSery.save()

    carSery.detail = "1.5 J 4Doors"
    carSery.save()

    carSery.detail = "1.5 TRD Sportivo 4Doors"
    carSery.save()

    carSery.year = "2013"
    carSery.detail = "1.5 E 4Doors"
    carSery.save()

    carSery.detail = "1.5 G 4Doors"
    carSery.save()

    carSery.detail = "1.5 J 4Doors"
    carSery.save()

    carSery.detail = "1.5 S 4Doors"
    carSery.save()

    carSery.detail = "1.5 TRD Sportivo 4Doors"
    carSery.save()

    carSery.year = "2014"
    carSery.detail = "1.5 E 4Doors"
    carSery.save()

    carSery.detail = "1.5 G 4Doors"
    carSery.save()

    carSery.detail = "1.5 J 4Doors"
    carSery.save()

    carSery.detail = "1.5 S 4Doors"
    carSery.save()

    carSery.detail = "1.5 TRD Sportivo 4Doors"
    carSery.save()

    carSery.year = "2015"
    carSery.detail = "1.5 E 4Doors"
    carSery.save()

    carSery.detail = "1.5 G 4Doors"
    carSery.save()

    carSery.detail = "1.5 J 4Doors"
    carSery.save()

    carSery.detail = "1.5 S 4Doors"
    carSery.save()

    carSery.detail = "1.5 TRD Sportivo 4Doors"
    carSery.save()

    carSery.year = "2016"
    carSery.detail = "1.5 E 4Doors"
    carSery.save()

    carSery.detail = "1.5 Exclusive 4Doors"
    carSery.save()

    carSery.detail = "1.5 G 4Doors"
    carSery.save()

    carSery.detail = "1.5 J 4Doors"
    carSery.save()

    carSery.detail = "1.5 S 4Doors"
    carSery.save()

    carSery.detail = "1.5 TRD Sportivo 4Doors"
    carSery.save()

    carSery.year = "2017"
    carSery.detail = "1.5 E 4Doors"
    carSery.save()

    carSery.detail = "1.5 Exclusive 4Doors"
    carSery.save()

    carSery.detail = "1.5 G 4Doors"
    carSery.save()

    carSery.detail = "1.5 J 4Doors"
    carSery.save()

    carSery.detail = "1.5 S 4Doors"
    carSery.save()

    carSery.year = "2018"
    carSery.detail = "1.5 E 4Doors"
    carSery.save()

    carSery.detail = "1.5 G 4Doors"
    carSery.save()

    carSery.detail = "1.5 GT 4Doors"
    carSery.save()

    carSery.detail = "1.5 J 4Doors"
    carSery.save()

    carSery.detail = "1.5 S 4Doors"
    carSery.save()

    carSery.year = "2019"
    carSery.detail = "1.5 E 4Doors"
    carSery.save()

    carSery.detail = "1.5 Entry 4Doors"
    carSery.save()

    carSery.detail = "1.5 G 4Doors"
    carSery.save()

    carSery.detail = "1.5 High 4Doors"
    carSery.save()

    carSery.detail = "1.5 J 4Doors"
    carSery.save()

    carSery.detail = "1.5 Mid 4Doors"
    carSery.save()

    carSery.detail = "1.5 S 4Doors"
    carSery.save()
    //----Vios

    carSery.model = "Wish"
    carSery.year = "2003"
    carSery.detail = "2.0 Q 4Doors"
    carSery.car_group_id = 3
    carSery.car_type_id = 1
    carSery.save()

    carSery.detail = "2.0 Q Limited 4Doors"
    carSery.save()

    carSery.detail = "2.0 S 4Doors"
    carSery.save()

    carSery.year = "2004"
    carSery.detail = "2.0 Q 4Doors"
    carSery.save()

    carSery.detail = "2.0 Q Limited 4Doors"
    carSery.save()

    carSery.detail = "2.0 S 4Doors"
    carSery.save()

    carSery.year = "2005"
    carSery.detail = "2.0 Q 4Doors"
    carSery.save()

    carSery.detail = "2.0 Q Limited 4Doors"
    carSery.save()

    carSery.detail = "2.0 Q Limited Option 4Doors"
    carSery.save()

    carSery.detail = "2.0 Q Sport Touring 4Doors"
    carSery.save()

    carSery.detail = "2.0 S 4Doors"
    carSery.save()

    carSery.year = "2006"
    carSery.detail = "2.0 Q 4Doors"
    carSery.save()

    carSery.detail = "2.0 Q Limited 4Doors"
    carSery.save()

    carSery.detail = "2.0 Q Limited Option 4Doors"
    carSery.save()

    carSery.detail = "2.0 Q Sport Touring 4Doors"
    carSery.save()

    carSery.detail = "2.0 S 4Doors"
    carSery.save()

    carSery.year = "2007"
    carSery.detail = "2.0 Q 4Doors"
    carSery.save()

    carSery.detail = "2.0 Q Limited 4Doors"
    carSery.save()

    carSery.detail = "2.0 Q Limited Option 4Doors"
    carSery.save()

    carSery.detail = "2.0 Q Sport Touring 4Doors"
    carSery.save()

    carSery.detail = "2.0 S 4Doors"
    carSery.save()

    carSery.year = "2008"
    carSery.detail = "2.0 Q 4Doors"
    carSery.save()

    carSery.detail = "2.0 Q Limited 4Doors"
    carSery.save()

    carSery.detail = "2.0 Q Limited Option 4Doors"
    carSery.save()

    carSery.detail = "2.0 Q Sport Touring II 4Doors"
    carSery.save()

    carSery.detail = "2.0 Q Sport Touring III 4Doors"
    carSery.save()

    carSery.detail = "2.0 S 4Doors"
    carSery.save()

    carSery.year = "2009"
    carSery.detail = "2.0 Q 4Doors"
    carSery.save()

    carSery.detail = "2.0 Q Limited 4Doors"
    carSery.save()

    carSery.detail = "2.0 Q Limited Option 4Doors"
    carSery.save()

    carSery.detail = "2.0 Q Sport Touring III 4Doors"
    carSery.save()

    carSery.detail = "2.0 S 4Doors"
    carSery.save()

    carSery.year = "2010"
    carSery.detail = "2.0 Q Sport Touring III 4Doors"
    carSery.save()
    //----Wish

    carSery.model = "Wish"
    carSery.year = "2006"
    carSery.detail = "1.5 E 4Doors"
    carSery.car_group_id = 5
    carSery.car_type_id = 1
    carSery.save()

    carSery.detail = "1.5 E Limited 4Doors"
    carSery.save()

    carSery.detail = "1.5 G 4Doors"
    carSery.save()

    carSery.detail = "1.5 G Limited 4Doors"
    carSery.save()

    carSery.detail = "1.5 S 4Doors"
    carSery.save()

    carSery.detail = "1.5 S Limited 4Doors"
    carSery.save()

    carSery.year = "2007"
    carSery.detail = "1.5 E 4Doors"
    carSery.save()

    carSery.detail = "1.5 E Limited 4Doors"
    carSery.save()

    carSery.detail = "1.5 G 4Doors"
    carSery.save()

    carSery.detail = "1.5 G Limited 4Doors"
    carSery.save()

    carSery.detail = "1.5 S 4Doors"
    carSery.save()

    carSery.detail = "1.5 S Limited 4Doors"
    carSery.save()

    carSery.year = "2008"
    carSery.detail = "1.5 E 4Doors"
    carSery.save()

    carSery.detail = "1.5 E Limited 4Doors"
    carSery.save()

    carSery.detail = "1.5 G 4Doors"
    carSery.save()

    carSery.detail = "1.5 G Limited 4Doors"
    carSery.save()

    carSery.detail = "1.5 J 4Doors"
    carSery.save()

    carSery.detail = "1.5 S 4Doors"
    carSery.save()

    carSery.detail = "1.5 S Limited 4Doors"
    carSery.save()

    carSery.detail = "1.5 TRD Sportivo 4Doors"
    carSery.save()

    carSery.year = "2009"
    carSery.detail = "1.5 E 4Doors"
    carSery.save()

    carSery.detail = "1.5 E Limited 4Doors"
    carSery.save()

    carSery.detail = "1.5 G 4Doors"
    carSery.save()

    carSery.detail = "1.5 G Limited 4Doors"
    carSery.save()

    carSery.detail = "1.5 J 4Doors"
    carSery.save()

    carSery.detail = "1.5 S 4Doors"
    carSery.save()

    carSery.detail = "1.5 S Limited 4Doors"
    carSery.save()

    carSery.detail = "1.5 TRD Sportivo 4Doors"
    carSery.save()

    carSery.year = "2010"
    carSery.detail = "1.5 E 4Doors"
    carSery.save()

    carSery.detail = "1.5 E Limited 4Doors"
    carSery.save()

    carSery.detail = "1.5 G 4Doors"
    carSery.save()

    carSery.detail = "1.5 J 4Doors"
    carSery.save()

    carSery.detail = "1.5 S 4Doors"
    carSery.save()

    carSery.detail = "1.5 S Limited 4Doors"
    carSery.save()

    carSery.detail = "1.5 TRD Sportivo 4Doors"
    carSery.save()

    carSery.year = "2011"
    carSery.detail = "1.5 E 4Doors"
    carSery.save()

    carSery.detail = "1.5 E Limited 4Doors"
    carSery.save()

    carSery.detail = "1.5 G 4Doors"
    carSery.save()

    carSery.detail = "1.5 J 4Doors"
    carSery.save()

    carSery.detail = "1.5 S 4Doors"
    carSery.save()

    carSery.detail = "1.5 S Limited 4Doors"
    carSery.save()

    carSery.detail = "1.5 TRD Sportivo 4Doors"
    carSery.save()

    carSery.year = "2012"
    carSery.detail = "1.5 E 4Doors"
    carSery.save()

    carSery.detail = "1.5 E Limited 4Doors"
    carSery.save()

    carSery.detail = "1.5 G 4Doors"
    carSery.save()

    carSery.detail = "1.5 J 4Doors"
    carSery.save()

    carSery.detail = "1.5 RS 4Doors"
    carSery.save()

    carSery.detail = "1.5 S 4Doors"
    carSery.save()

    carSery.detail = "1.5 S Limited 4Doors"
    carSery.save()

    carSery.detail = "1.5 TRD Sportivo 4Doors"
    carSery.save()

    carSery.year = "2013"
    carSery.detail = "1.2 E 4Doors"
    carSery.save()

    carSery.detail = "1.2 G 4Doors"
    carSery.save()

    carSery.detail = "1.2 J 4Doors"
    carSery.save()

    carSery.detail = "1.2 J ECO 4Doors"
    carSery.save()

    carSery.detail = "1.5 E 4Doors"
    carSery.save()

    carSery.detail = "1.5 G 4Doors"
    carSery.save()

    carSery.detail = "1.5 J 4Doors"
    carSery.save()

    carSery.detail = "1.5 RS 4Doors"
    carSery.save()

    carSery.year = "2014"
    carSery.detail = "1.2 E 4Doors"
    carSery.save()

    carSery.detail = "1.2 G 4Doors"
    carSery.save()

    carSery.detail = "1.2 J 4Doors"
    carSery.save()

    carSery.detail = "1.2 J ECO 4Doors"
    carSery.save()

    carSery.detail = "1.2 TRD Sportivo 4Doors"
    carSery.save()

    carSery.year = "2015"
    carSery.detail = "1.2 E 4Doors"
    carSery.save()

    carSery.detail = "1.2 G 4Doors"
    carSery.save()

    carSery.detail = "1.2 J 4Doors"
    carSery.save()

    carSery.detail = "1.2 J ECO 4Doors"
    carSery.save()

    carSery.detail = "1.2 TRD Sportivo 4Doors"
    carSery.save()

    carSery.year = "2016"
    carSery.detail = "1.2 E 4Doors"
    carSery.save()

    carSery.detail = "1.2 G 4Doors"
    carSery.save()

    carSery.detail = "1.2 J 4Doors"
    carSery.save()

    carSery.detail = "1.2 J ECO 4Doors"
    carSery.save()

    carSery.detail = "1.2 TRD Sportivo 4Doors"
    carSery.save()

    carSery.year = "2017"
    carSery.detail = "1.2 E 4Doors"
    carSery.save()

    carSery.detail = "1.2 G 4Doors"
    carSery.save()

    carSery.detail = "1.2 J 4Doors"
    carSery.save()

    carSery.detail = "1.2 J ECO 4Doors"
    carSery.save()

    carSery.detail = "1.2 TRD Sportivo 4Doors"
    carSery.save()

    carSery.year = "2018"
    carSery.detail = "1.2 E 4Doors"
    carSery.save()

    carSery.detail = "1.2 G 4Doors"
    carSery.save()

    carSery.detail = "1.2 G+ 4Doors"
    carSery.save()

    carSery.detail = "1.2 J 4Doors"
    carSery.save()

    carSery.detail = "1.2 J ECO 4Doors"
    carSery.save()

    carSery.year = "2019"
    carSery.detail = "1.2 E 4Doors"
    carSery.save()

    carSery.detail = "1.2 G 4Doors"
    carSery.save()

    carSery.detail = "1.2 G+ 4Doors"
    carSery.save()

    carSery.detail = "1.2 J 4Doors"
    carSery.save()

    carSery.detail = "1.2 J ECO 4Doors"
    carSery.save()
    //----Yaris
    //----Yaris Ativ no group
    //----Toyota End

    //----Honda Start
    carSery.brand = "Honda"
    carSery.model = "Accord"
    carSery.year = "1992"
    carSery.detail = "2.0 EX 4Doors"
    carSery.car_group_id = 3
    carSery.car_type_id = 1
    carSery.save()

    carSery.detail = "2.0 EXi 4Doors"
    carSery.save()

    carSery.detail = "2.0 LX 4Doors"
    carSery.save()

    carSery.detail = "2.0 LXi 4Doors"
    carSery.save()

    carSery.year = "1993"
    carSery.detail = "2.0 EX 4Doors"
    carSery.save()

    carSery.detail = "2.0 EXi 4Doors"
    carSery.save()

    carSery.detail = "2.0 LX 4Doors"
    carSery.save()

    carSery.detail = "2.0 LXi 4Doors"
    carSery.save()

    carSery.detail = "2.2 EXi 4Doors"
    carSery.save()

    carSery.detail = "2.2 LXi 4Doors"
    carSery.save()

    carSery.detail = "2.2 VTi-S EXi 4Doors"
    carSery.save()

    carSery.year = "1994"
    carSery.detail = "2.0 EX 4Doors"
    carSery.save()

    carSery.detail = "2.0 EXi 4Doors"
    carSery.save()

    carSery.detail = "2.0 LX 4Doors"
    carSery.save()

    carSery.detail = "2.0 LXi 4Doors"
    carSery.save()

    carSery.detail = "2.2 EXi 4Doors"
    carSery.save()

    carSery.detail = "2.2 LXi 4Doors"
    carSery.save()

    carSery.detail = "2.2 VTi EX 4Doors"
    carSery.save()

    carSery.detail = "2.2 VTi LX 4Doors"
    carSery.save()

    carSery.detail = "2.2 VTi-S EXi 4Doors"
    carSery.save()

    carSery.year = "1995"
    carSery.detail = "2.2 EXi 4Doors"
    carSery.save()

    carSery.detail = "2.2 LXi 4Doors"
    carSery.save()

    carSery.detail = "2.2 VTi EX 4Doors"
    carSery.save()

    carSery.detail = "2.2 VTi LX 4Doors"
    carSery.save()

    carSery.detail = "2.2 VTi-S EXi 4Doors"
    carSery.save()

    carSery.year = "1996"
    carSery.detail = "2.2 EXi 4Doors"
    carSery.save()

    carSery.detail = "2.2 LXi 4Doors"
    carSery.save()

    carSery.detail = "2.2 VTi EX 4Doors"
    carSery.save()

    carSery.detail = "2.2 VTi LX 4Doors"
    carSery.save()

    carSery.detail = "2.2 VTi-S EXi 4Doors"
    carSery.save()

    carSery.year = "1997"
    carSery.detail = "2.2 EXi 4Doors"
    carSery.save()

    carSery.detail = "2.2 LXi 4Doors"
    carSery.save()

    carSery.detail = "2.2 VTi EX 4Doors"
    carSery.save()

    carSery.detail = "2.2 VTi LX 4Doors"
    carSery.save()

    carSery.detail = "2.2 VTi-S EXi 4Doors"
    carSery.save()

    carSery.detail = "2.3 EXi 4Doors"
    carSery.save()

    carSery.detail = "2.3 VTi 4Doors"
    carSery.save()

    carSery.detail = "3.0 V6 4Doors"
    carSery.save()

    carSery.year = "1998"
    carSery.detail = "2.2 EXi 4Doors"
    carSery.save()

    carSery.detail = "2.2 LXi 4Doors"
    carSery.save()

    carSery.detail = "2.2 VTi EX 4Doors"
    carSery.save()

    carSery.detail = "2.2 VTi LX 4Doors"
    carSery.save()

    carSery.detail = "2.3 EXi 4Doors"
    carSery.save()

    carSery.detail = "2.3 VTi 4Doors"
    carSery.save()

    carSery.detail = "2.3 VTi Exclusive 4Doors"
    carSery.save()

    carSery.detail = "3.0 V6 4Doors"
    carSery.save()

    carSery.year = "1999"
    carSery.detail = "2.3 EXi 4Doors"
    carSery.save()

    carSery.detail = "2.3 VTi 4Doors"
    carSery.save()

    carSery.detail = "3.0 V6 4Doors"
    carSery.save()

    carSery.year = "2000"
    carSery.detail = "2.3 EXi 4Doors"
    carSery.save()

    carSery.detail = "2.3 Millennium VTi 4Doors"
    carSery.save()

    carSery.detail = "2.3 VTi 4Doors"
    carSery.save()

    carSery.detail = "2.3 VTi Prestige 4Doors"
    carSery.save()

    carSery.detail = "3.0 V6 4Doors"
    carSery.save()

    carSery.detail = "3.0 VTi Prestige 4Doors"
    carSery.save()

    carSery.year = "2001"
    carSery.detail = "2.3 EXi 4Doors"
    carSery.save()

    carSery.detail = "2.3 VTi 4Doors"
    carSery.save()

    carSery.detail = "2.3 VTi Prestige 4Doors"
    carSery.save()

    carSery.detail = "3.0 V6 4Doors"
    carSery.save()

    carSery.detail = "3.0 VTi Prestige 4Doors"
    carSery.save()

    carSery.year = "2002"
    carSery.detail = "2.3 EXi 4Doors"
    carSery.save()

    carSery.detail = "2.3 VTi 4Doors"
    carSery.save()

    carSery.detail = "3.0 V6 4Doors"
    carSery.save()

    carSery.year = "2003"
    carSery.detail = "2.3 EXi 4Doors"
    carSery.save()

    carSery.detail = "2.3 VTi 4Doors"
    carSery.save()

    carSery.detail = "2.4 E i-VTEC 4Doors"
    carSery.save()

    carSery.detail = "2.4 EL i-VTEC 4Doors"
    carSery.save()

    carSery.detail = "2.4 S i-VTEC 4Doors"
    carSery.save()

    carSery.detail = "3.0 V6 i-VTEC 4Doors"
    carSery.save()

    carSery.year = "2004"
    carSery.detail = "2.4 E i-VTEC 4Doors"
    carSery.save()

    carSery.detail = "2.4 EL i-VTEC 4Doors"
    carSery.save()

    carSery.detail = "2.4 S i-VTEC 4Doors"
    carSery.save()

    carSery.detail = "3.0 V6 i-VTEC 4Doors"
    carSery.save()

    carSery.year = "2005"
    carSery.detail = "2.0 E i-VTEC 4Doors"
    carSery.save()

    carSery.detail = "2.0 S i-VTEC 4Doors"
    carSery.save()

    carSery.detail = "2.4 E i-VTEC 4Doors"
    carSery.save()

    carSery.detail = "2.4 EL i-VTEC 4Doors"
    carSery.save()

    carSery.detail = "2.4 S i-VTEC 4Doors"
    carSery.save()

    carSery.detail = "3.0 V6 i-VTEC 4Doors"
    carSery.save()

    carSery.year = "2006"
    carSery.detail = "2.0 E i-VTEC 4Doors"
    carSery.save()

    carSery.detail = "2.0 S i-VTEC 4Doors"
    carSery.save()

    carSery.detail = "2.4 E i-VTEC 4Doors"
    carSery.save()

    carSery.detail = "2.4 EL i-VTEC 4Doors"
    carSery.save()

    carSery.detail = "2.4 S i-VTEC 4Doors"
    carSery.save()

    carSery.detail = "3.0 V6 i-VTEC 4Doors"
    carSery.save()

    carSery.year = "2007"
    carSery.detail = "2.0 E i-VTEC 4Doors"
    carSery.save()

    carSery.detail = "2.4 E i-VTEC 4Doors"
    carSery.save()

    carSery.detail = "2.4 EL i-VTEC 4Doors"
    carSery.save()

    carSery.detail = "3.0 V6 i-VTEC 4Doors"
    carSery.save()

    carSery.detail = "3.5 V6 i-VTEC 4Doors"
    carSery.save()

    carSery.year = "2008"
    carSery.detail = "2.0 E i-VTEC 4Doors"
    carSery.save()

    carSery.detail = "2.4 E i-VTEC 4Doors"
    carSery.save()

    carSery.detail = "2.4 EL i-VTEC 4Doors"
    carSery.save()

    carSery.detail = "3.5 V6 i-VTEC 4Doors"
    carSery.save()

    carSery.year = "2009"
    carSery.detail = "2.0 E i-VTEC 4Doors"
    carSery.save()

    carSery.detail = "2.0 E Wise Edition i-VTEC 4Doors"
    carSery.save()

    carSery.detail = "2.4 E i-VTEC 4Doors"
    carSery.save()

    carSery.detail = "2.4 EL i-VTEC 4Doors"
    carSery.save()

    carSery.detail = "3.5 V6 i-VTEC 4Doors"
    carSery.save()

    carSery.year = "2010"
    carSery.detail = "2.0 E i-VTEC 4Doors"
    carSery.save()

    carSery.detail = "2.0 EL i-VTEC 4Doors"
    carSery.save()

    carSery.detail = "2.4 E i-VTEC 4Doors"
    carSery.save()

    carSery.detail = "2.4 EL i-VTEC 4Doors"
    carSery.save()

    carSery.detail = "3.5 V6 i-VTEC 4Doors"
    carSery.save()

    carSery.year = "2011"
    carSery.detail = "2.0 E i-VTEC 4Doors"
    carSery.save()

    carSery.detail = "2.0 EL i-VTEC 4Doors"
    carSery.save()

    carSery.detail = "2.4 EL i-VTEC 4Doors"
    carSery.save()

    carSery.detail = "3.5 V6 i-VTEC 4Doors"
    carSery.save()

    carSery.year = "2012"
    carSery.detail = "2.0 E i-VTEC 4Doors"
    carSery.save()

    carSery.detail = "2.0 EL i-VTEC 4Doors"
    carSery.save()

    carSery.detail = "2.0 JP 4Doors"
    carSery.save()

    carSery.detail = "2.4 EL i-VTEC 4Doors"
    carSery.save()

    carSery.detail = "2.4 JP 4Doors"
    carSery.save()

    carSery.detail = "3.5 V6 i-VTEC 4Doors"
    carSery.save()

    carSery.year = "2013"
    carSery.detail = "2.0 E i-VTEC 4Doors"
    carSery.save()

    carSery.detail = "2.0 EL i-VTEC 4Doors"
    carSery.save()

    carSery.detail = "2.4 EL i-VTEC 4Doors"
    carSery.save()

    carSery.detail = "2.4 TECH 4Doors"
    carSery.save()

    carSery.detail = "3.5 V6 i-VTEC 4Doors"
    carSery.save()

    carSery.year = "2014"
    carSery.detail = "2.0 EL i-VTEC 4Doors"
    carSery.save()

    carSery.detail = "2.0 Hybrid i-VTEC 4Doors"
    carSery.save()

    carSery.detail = "2.0 Hybrid TECH i-VTEC 4Doors"
    carSery.save()

    carSery.detail = "2.4 EL i-VTEC 4Doors"
    carSery.save()

    carSery.detail = "2.4 TECH 4Doors"
    carSery.save()

    carSery.year = "2015"
    carSery.detail = "2.0 EL i-VTEC 4Doors"
    carSery.save()

    carSery.detail = "2.0 Hybrid i-VTEC 4Doors"
    carSery.save()

    carSery.detail = "2.0 Hybrid TECH i-VTEC 4Doors"
    carSery.save()

    carSery.detail = "2.4 EL i-VTEC 4Doors"
    carSery.save()

    carSery.detail = "2.4 TECH 4Doors"
    carSery.save()

    carSery.year = "2016"
    carSery.detail = "2.0 E i-VTEC 4Doors"
    carSery.save()

    carSery.detail = "2.0 EL i-VTEC 4Doors"
    carSery.save()

    carSery.detail = "2.0 Hybrid i-VTEC 4Doors"
    carSery.save()

    carSery.detail = "2.0 Hybrid TECH i-VTEC 4Doors"
    carSery.save()

    carSery.detail = "2.4 EL i-VTEC 4Doors"
    carSery.save()

    carSery.detail = "2.4 TECH 4Doors"
    carSery.save()

    carSery.year = "2017"
    carSery.detail = "2.0 E i-VTEC 4Doors"
    carSery.save()

    carSery.detail = "2.0 EL i-VTEC 4Doors"
    carSery.save()

    carSery.detail = "2.0 Hybrid i-VTEC 4Doors"
    carSery.save()

    carSery.detail = "2.0 Hybrid TECH i-VTEC 4Doors"
    carSery.save()

    carSery.detail = "2.4 EL i-VTEC 4Doors"
    carSery.save()

    carSery.year = "2018"
    carSery.detail = "2.0 E i-VTEC 4Doors"
    carSery.save()

    carSery.detail = "2.0 EL i-VTEC 4Doors"
    carSery.save()

    carSery.detail = "2.0 Hybrid i-VTEC 4Doors"
    carSery.save()

    carSery.detail = "2.0 Hybrid TECH i-VTEC 4Doors"
    carSery.save()

    carSery.detail = "2.4 EL i-VTEC 4Doors"
    carSery.save()

    carSery.year = "2019"
    carSery.detail = "1.5 TURBO EL 4Doors"
    carSery.save()

    carSery.detail = "2.0 E i-VTEC 4Doors"
    carSery.save()

    carSery.detail = "2.0 EL i-VTEC 4Doors"
    carSery.save()

    carSery.detail = "2.0 Hybrid 4Doors"
    carSery.save()

    carSery.detail = "2.0 Hybrid i-VTEC 4Doors"
    carSery.save()

    carSery.detail = "2.0 Hybrid TECH 4Doors"
    carSery.save()

    carSery.detail = "2.0 Hybrid TECH i-VTEC 4Doors"
    carSery.save()

    carSery.detail = "2.4 EL i-VTEC 4Doors"
    carSery.save()
    //----Accord

    carSery.model = "Brio"
    carSery.year = "2011"
    carSery.detail = "1.2 S 4Doors"
    carSery.car_group_id = 5
    carSery.save()

    carSery.detail = "1.2 V 4Doors"
    carSery.save()

    carSery.year = "2012"
    carSery.detail = "1.2 Amaze S 4Doors"
    carSery.save()

    carSery.detail = "1.2 Amaze V 4Doors"
    carSery.save()

    carSery.detail = "1.2 S 4Doors"
    carSery.save()

    carSery.detail = "1.2 V 4Doors"
    carSery.save()

    carSery.year = "2013"
    carSery.detail = "1.2 Amaze S 4Doors"
    carSery.save()

    carSery.detail = "1.2 Amaze V 4Doors"
    carSery.save()

    carSery.detail = "1.2 S 4Doors"
    carSery.save()

    carSery.detail = "1.2 V 4Doors"
    carSery.save()

    carSery.detail = "1.2 V Limited 4Doors"
    carSery.save()

    carSery.year = "2014"
    carSery.detail = "1.2 Amaze S 4Doors"
    carSery.save()

    carSery.detail = "1.2 Amaze V 4Doors"
    carSery.save()

    carSery.detail = "1.2 S 4Doors"
    carSery.save()

    carSery.detail = "1.2 V 4Doors"
    carSery.save()

    carSery.detail = "1.2 V Limited 4Doors"
    carSery.save()

    carSery.year = "2015"
    carSery.detail = "1.2 Amaze S 4Doors"
    carSery.save()

    carSery.detail = "1.2 Amaze V 4Doors"
    carSery.save()

    carSery.detail = "1.2 S 4Doors"
    carSery.save()

    carSery.detail = "1.2 V 4Doors"
    carSery.save()

    carSery.detail = "1.2 V Limited 4Doors"
    carSery.save()

    carSery.year = "2016"
    carSery.detail = "1.2 Amaze S 4Doors"
    carSery.save()

    carSery.detail = "1.2 Amaze SV 4Doors"
    carSery.save()

    carSery.detail = "1.2 Amaze V 4Doors"
    carSery.save()

    carSery.detail = "1.2 S 4Doors"
    carSery.save()

    carSery.detail = "1.2 V 4Doors"
    carSery.save()

    carSery.detail = "1.2 V Limited 4Doors"
    carSery.save()

    carSery.year = "2017"
    carSery.detail = "1.2 Amaze SV 4Doors"
    carSery.save()

    carSery.detail = "1.2 Amaze V 4Doors"
    carSery.save()

    carSery.detail = "1.2 V 4Doors"
    carSery.save()

    carSery.year = "2018"
    carSery.detail = "1.2 Amaze SV 4Doors"
    carSery.save()

    carSery.detail = "1.2 Amaze V 4Doors"
    carSery.save()

    carSery.detail = "1.2 Black Sport 4Doors"
    carSery.save()

    carSery.detail = "1.2 V 4Doors"
    carSery.save()

    carSery.year = "2019"
    carSery.detail = "1.2 Amaze V 4Doors"
    carSery.save()

    carSery.detail = "1.2 Black Sport 4Doors"
    carSery.save()

    carSery.detail = "1.2 V 4Doors"
    carSery.save()

    //----BR-V no group

    carSery.model = "City"
    carSery.year = "1996"
    carSery.detail = "1.3 EXi 4Doors"
    carSery.save()

    carSery.detail = "1.3 LI 4Doors"
    carSery.save()

    carSery.detail = "1.3 LXi 4Doors"
    carSery.save()

    carSery.year = "1997"
    carSery.detail = "1.3 Di 4Doors"
    carSery.save()

    carSery.detail = "1.3 EXi 4Doors"
    carSery.save()

    carSery.detail = "1.3 LI 4Doors"
    carSery.save()

    carSery.detail = "1.3 LXi 4Doors"
    carSery.save()

    carSery.detail = "1.5 EXi 4Doors"
    carSery.save()

    carSery.detail = "1.5 LXi 4Doors"
    carSery.save()

    carSery.year = "1998"
    carSery.detail = "1.3 Di 4Doors"
    carSery.save()

    carSery.detail = "1.3 EXi 4Doors"
    carSery.save()

    carSery.detail = "1.5 EXi 4Doors"
    carSery.save()

    carSery.detail = "1.5 LI 4Doors"
    carSery.save()

    carSery.detail = "1.5 LXi 4Doors"
    carSery.save()

    carSery.year = "1999"
    carSery.detail = "1.5 EXi 4Doors"
    carSery.save()

    carSery.detail = "1.5 LI 4Doors"
    carSery.save()

    carSery.detail = "1.5 LXi 4Doors"
    carSery.save()

    carSery.detail = "1.5 Type-Z EXi 4Doors"
    carSery.save()

    carSery.detail = "1.5 Type-Z LI 4Doors"
    carSery.save()

    carSery.detail = "1.5 Type-Z VTi 4Doors"
    carSery.save()

    carSery.year = "2000"
    carSery.detail = "1.5 EXi 4Doors"
    carSery.save()

    carSery.detail = "1.5 Type-Z EXi 4Doors"
    carSery.save()

    carSery.detail = "1.5 Type-Z LI 4Doors"
    carSery.save()

    carSery.detail = "1.5 Type-Z VTi 4Doors"
    carSery.save()

    carSery.detail = "1.5 VTi 4Doors"
    carSery.save()

    carSery.year = "2001"
    carSery.detail = "1.5 Type-Z EXi 4Doors"
    carSery.save()

    carSery.detail = "1.5 Type-Z LI 4Doors"
    carSery.save()

    carSery.detail = "1.5 Type-Z LXi 4Doors"
    carSery.save()

    carSery.detail = "1.5 Type-Z VTi 4Doors"
    carSery.save()

    carSery.year = "2002"
    carSery.detail = "1.5 A i-DSi 4Doors"
    carSery.save()

    carSery.detail = "1.5 E i-DSi 4Doors"
    carSery.save()

    carSery.detail = "1.5 S i-DSi 4Doors"
    carSery.save()

    carSery.detail = "1.5 Type-Z EXi 4Doors"
    carSery.save()

    carSery.detail = "1.5 Type-Z LI 4Doors"
    carSery.save()

    carSery.detail = "1.5 Type-Z LXi 4Doors"
    carSery.save()

    carSery.detail = "1.5 Type-Z VTi 4Doors"
    carSery.save()

    carSery.year = "2003"
    carSery.detail = "1.5 A i-DSi 4Doors"
    carSery.save()

    carSery.detail = "1.5 E i-DSi 4Doors"
    carSery.save()

    carSery.detail = "1.5 S i-DSi 4Doors"
    carSery.save()

    carSery.year = "2004"
    carSery.detail = "1.5 A i-DSi 4Doors"
    carSery.save()

    carSery.detail = "1.5 E i-DSi 4Doors"
    carSery.save()

    carSery.detail = "1.5 E-V VTEC 4Doors"
    carSery.save()

    carSery.detail = "1.5 S i-DSi 4Doors"
    carSery.save()

    carSery.year = "2005"
    carSery.detail = "1.5 A i-DSi 4Doors"
    carSery.save()

    carSery.detail = "1.5 E i-DSi 4Doors"
    carSery.save()

    carSery.detail = "1.5 E-V VTEC 4Doors"
    carSery.save()

    carSery.detail = "1.5 S i-DSi 4Doors"
    carSery.save()

    carSery.detail = "1.5 ZX A i-DSi 4Doors"
    carSery.save()

    carSery.detail = "1.5 ZX V VTEC 4Doors"
    carSery.save()

    carSery.detail = "1.5 ZX EV VTEC 4Doors"
    carSery.save()

    carSery.detail = "1.5 ZX SV VTEC 4Doors"
    carSery.save()

    carSery.year = "2006"
    carSery.detail = "1.5 ZX A i-DSi 4Doors"
    carSery.save()

    carSery.detail = "1.5 ZX V VTEC 4Doors"
    carSery.save()

    carSery.detail = "1.5 ZX EV VTEC 4Doors"
    carSery.save()

    carSery.detail = "1.5 ZX LV VTEC 4Doors"
    carSery.save()

    carSery.detail = "1.5 ZX SV VTEC 4Doors"
    carSery.save()

    carSery.year = "2007"
    carSery.detail = "1.5 ZX A i-DSi 4Doors"
    carSery.save()

    carSery.detail = "1.5 ZX V VTEC 4Doors"
    carSery.save()

    carSery.detail = "1.5 ZX EV VTEC 4Doors"
    carSery.save()

    carSery.detail = "1.5 ZX LV VTEC 4Doors"
    carSery.save()

    carSery.detail = "1.5 ZX SV VTEC 4Doors"
    carSery.save()

    carSery.year = "2008"
    carSery.detail = "1.5 S i-VTEC 4Doors"
    carSery.save()

    carSery.detail = "1.5 SV i-VTEC 4Doors"
    carSery.save()

    carSery.detail = "1.5 V i-VTEC 4Doors"
    carSery.save()

    carSery.detail = "1.5 ZX A i-DSi 4Doors"
    carSery.save()

    carSery.detail = "1.5 ZX V VTEC 4Doors"
    carSery.save()

    carSery.detail = "1.5 ZX SV VTEC 4Doors"
    carSery.save()

    carSery.year = "2009"
    carSery.detail = "1.5 S i-VTEC 4Doors"
    carSery.save()

    carSery.detail = "1.5 SV i-VTEC 4Doors"
    carSery.save()

    carSery.detail = "1.5 V i-VTEC 4Doors"
    carSery.save()

    carSery.detail = "1.5 V Wise Edition i-VTEC 4Doors"
    carSery.save()

    carSery.year = "2010"
    carSery.detail = "1.5 S i-VTEC 4Doors"
    carSery.save()

    carSery.detail = "1.5 SV i-VTEC 4Doors"
    carSery.save()

    carSery.detail = "1.5 V i-VTEC 4Doors"
    carSery.save()

    carSery.year = "2011"
    carSery.detail = "1.5 S i-VTEC 4Doors"
    carSery.save()

    carSery.detail = "1.5 SV i-VTEC 4Doors"
    carSery.save()

    carSery.detail = "1.5 V i-VTEC 4Doors"
    carSery.save()

    carSery.detail = "1.5 V i-VTEC Society 4Doors"
    carSery.save()

    carSery.year = "2012"
    carSery.detail = "1.5 S CNG 4Doors"
    carSery.save()

    carSery.detail = "1.5 S i-VTEC 4Doors"
    carSery.save()

    carSery.detail = "1.5 SV i-VTEC 4Doors"
    carSery.save()

    carSery.detail = "1.5 V CNG 4Doors"
    carSery.save()

    carSery.detail = "1.5 V i-VTEC 4Doors"
    carSery.save()


    carSery.year = "2013"
    carSery.detail = "1.5 S CNG 4Doors"
    carSery.save()

    carSery.detail = "1.5 S i-VTEC 4Doors"
    carSery.save()

    carSery.detail = "1.5 SV i-VTEC 4Doors"
    carSery.save()

    carSery.detail = "1.5 V CNG 4Doors"
    carSery.save()

    carSery.detail = "1.5 V i-VTEC 4Doors"
    carSery.save()

    carSery.detail = "1.5 V i-VTEC Modulo 4Doors"
    carSery.save()

    carSery.year = "2014"
    carSery.detail = "1.5 S CNG 4Doors"
    carSery.save()

    carSery.detail = "1.5 S i-VTEC 4Doors"
    carSery.save()

    carSery.detail = "1.5 SV i-VTEC 4Doors"
    carSery.save()

    carSery.detail = "1.5 SV+ i-VTEC 4Doors"
    carSery.save()

    carSery.detail = "1.5 V CNG 4Doors"
    carSery.save()

    carSery.detail = "1.5 V i-VTEC 4Doors"
    carSery.save()

    carSery.detail = "1.5 V+ i-VTEC 4Doors"
    carSery.save()

    carSery.year = "2015"
    carSery.detail = "1.5 S CNG 4Doors"
    carSery.save()

    carSery.detail = "1.5 S i-VTEC 4Doors"
    carSery.save()

    carSery.detail = "1.5 SV i-VTEC 4Doors"
    carSery.save()

    carSery.detail = "1.5 SV+ i-VTEC 4Doors"
    carSery.save()

    carSery.detail = "1.5 V CNG 4Doors"
    carSery.save()

    carSery.detail = "1.5 V i-VTEC 4Doors"
    carSery.save()

    carSery.detail = "1.5 V+ i-VTEC 4Doors"
    carSery.save()

    carSery.year = "2016"
    carSery.detail = "1.5 S CNG 4Doors"
    carSery.save()

    carSery.detail = "1.5 S i-VTEC 4Doors"
    carSery.save()

    carSery.detail = "1.5 SV i-VTEC 4Doors"
    carSery.save()

    carSery.detail = "1.5 SV+ i-VTEC 4Doors"
    carSery.save()

    carSery.detail = "1.5 V CNG 4Doors"
    carSery.save()

    carSery.detail = "1.5 V i-VTEC 4Doors"
    carSery.save()

    carSery.detail = "1.5 V+ i-VTEC 4Doors"
    carSery.save()

    carSery.year = "2017"
    carSery.detail = "1.5 S CNG 4Doors"
    carSery.save()

    carSery.detail = "1.5 S i-VTEC 4Doors"
    carSery.save()

    carSery.detail = "1.5 SV i-VTEC 4Doors"
    carSery.save()

    carSery.detail = "1.5 SV+ i-VTEC 4Doors"
    carSery.save()

    carSery.detail = "1.5 V CNG 4Doors"
    carSery.save()

    carSery.detail = "1.5 V i-VTEC 4Doors"
    carSery.save()

    carSery.detail = "1.5 V+ i-VTEC 4Doors"
    carSery.save()

    carSery.year = "2018"
    carSery.detail = "1.5 S i-VTEC 4Doors"
    carSery.save()

    carSery.detail = "1.5 SV i-VTEC 4Doors"
    carSery.save()

    carSery.detail = "1.5 SV+ i-VTEC 4Doors"
    carSery.save()

    carSery.detail = "1.5 V i-VTEC 4Doors"
    carSery.save()

    carSery.detail = "1.5 V+ i-VTEC 4Doors"
    carSery.save()

    carSery.year = "2019"
    carSery.detail = "1.5 S i-VTEC 4Doors"
    carSery.save()

    carSery.detail = "1.5 SV i-VTEC 4Doors"
    carSery.save()

    carSery.detail = "1.5 SV+ i-VTEC 4Doors"
    carSery.save()

    carSery.detail = "1.5 V i-VTEC 4Doors"
    carSery.save()

    carSery.detail = "1.5 V+ i-VTEC 4Doors"
    carSery.save()
    //----City

    carSery.model = "Civic"
    carSery.year = "1992"
    carSery.detail = "1.5 EX 4Doors"
    carSery.car_group_id = 3
    carSery.save()

    carSery.detail = "1.5 LX 4Doors"
    carSery.save()

    carSery.year = "1993"
    carSery.detail = "1.5 EX 2Doors"
    carSery.save()

    carSery.detail = "1.5 EX 4Doors"
    carSery.save()

    carSery.detail = "1.5 LX 2Doors"
    carSery.save()

    carSery.detail = "1.5 LX 4Doors"
    carSery.save()

    carSery.detail = "1.6 EXi 4Doors"
    carSery.save()

    carSery.detail = "1.6 LXi 4Doors"
    carSery.save()

    carSery.year = "1994"
    carSery.detail = "1.5 EX 2Doors"
    carSery.save()

    carSery.detail = "1.5 EX 4Doors"
    carSery.save()

    carSery.detail = "1.5 LX 2Doors"
    carSery.save()

    carSery.detail = "1.5 LX 4Doors"
    carSery.save()

    carSery.detail = "1.6 EXi 4Doors"
    carSery.save()

    carSery.detail = "1.6 LXi 4Doors"
    carSery.save()

    carSery.detail = "1.6 VTi EX 4Doors"
    carSery.save()

    carSery.detail = "1.6 VTi LX 4Doors"
    carSery.save()

    carSery.year = "1995"
    carSery.detail = "1.5 EX 2Doors"
    carSery.save()

    carSery.detail = "1.5 EX 4Doors"
    carSery.save()

    carSery.detail = "1.5 LX 2Doors"
    carSery.save()

    carSery.detail = "1.5 LX 4Doors"
    carSery.save()

    carSery.detail = "1.6 EXi 4Doors"
    carSery.save()

    carSery.detail = "1.6 LXi 4Doors"
    carSery.save()

    carSery.detail = "1.6 VTi EX 4Doors"
    carSery.save()

    carSery.detail = "1.6 VTi EXA 4Doors"
    carSery.save()

    carSery.detail = "1.6 VTi LX 4Doors"
    carSery.save()

    carSery.detail = "1.6 VTi LXA 4Doors"
    carSery.save()

    carSery.year = "1996"
    carSery.detail = "1.6 EXi 4Doors"
    carSery.save()

    carSery.detail = "1.6 LXi 4Doors"
    carSery.save()

    carSery.detail = "1.6 VTi EX 4Doors"
    carSery.save()

    carSery.detail = "1.6 VTi EXA 4Doors"
    carSery.save()

    carSery.detail = "1.6 VTi LX 4Doors"
    carSery.save()

    carSery.detail = "1.6 VTi LXA 4Doors"
    carSery.save()

    carSery.year = "1997"
    carSery.detail = "1.6 EXi 4Doors"
    carSery.save()

    carSery.detail = "1.6 LXi 4Doors"
    carSery.save()

    carSery.detail = "1.6 VTi EX 4Doors"
    carSery.save()

    carSery.detail = "1.6 VTi EXA 4Doors"
    carSery.save()

    carSery.detail = "1.6 VTi LX 4Doors"
    carSery.save()

    carSery.detail = "1.6 VTi LXA 4Doors"
    carSery.save()

    carSery.year = "1998"
    carSery.detail = "1.6 EXi 4Doors"
    carSery.save()

    carSery.detail = "1.6 LXi 4Doors"
    carSery.save()

    carSery.detail = "1.6 VTi EX 4Doors"
    carSery.save()

    carSery.detail = "1.6 VTi EXA 2Doors"
    carSery.save()

    carSery.detail = "1.6 VTi EXA 4Doors"
    carSery.save()

    carSery.detail = "1.6 VTi LX 4Doors"
    carSery.save()

    carSery.detail = "1.6 VTi LXA 4Doors"
    carSery.save()

    carSery.year = "1999"
    carSery.detail = "1.6 EXi 4Doors"
    carSery.save()

    carSery.detail = "1.6 LXi 4Doors"
    carSery.save()

    carSery.detail = "1.6 VTi 4Doors"
    carSery.save()

    carSery.detail = "1.6 VTi EXA 2Doors"
    carSery.save()

    carSery.detail = "1.8 VTi 4Doors"
    carSery.save()

    carSery.year = "2000"
    carSery.detail = "1.6 EXi 4Doors"
    carSery.save()

    carSery.detail = "1.6 LXi 4Doors"
    carSery.save()

    carSery.detail = "1.6 Racing I 2Doors"
    carSery.save()

    carSery.detail = "1.6 Racing II 2Doors"
    carSery.save()

    carSery.detail = "1.6 VTi 4Doors"
    carSery.save()

    carSery.detail = "1.6 VTi EXA 2Doors"
    carSery.save()

    carSery.detail = "1.7 EXi 4Doors"
    carSery.save()

    carSery.detail = "1.7 VTi 4Doors"
    carSery.save()

    carSery.detail = "1.8 VTi 4Doors"
    carSery.save()

    carSery.year = "2001"
    carSery.detail = "1.6 EXi 4Doors"
    carSery.save()

    carSery.detail = "1.6 LXi 4Doors"
    carSery.save()

    carSery.detail = "1.6 VTi 4Doors"
    carSery.save()

    carSery.detail = "1.7 EXi 4Doors"
    carSery.save()

    carSery.detail = "1.7 RX VTi 4Doors"
    carSery.save()

    carSery.detail = "1.7 VTi 4Doors"
    carSery.save()

    carSery.year = "2002"
    carSery.detail = "1.7 EXi 4Doors"
    carSery.save()

    carSery.detail = "1.7 VTi 4Doors"
    carSery.save()

    carSery.year = "2003"
    carSery.detail = "1.7 EXi 4Doors"
    carSery.save()
    
    carSery.detail = "1.7 VTi 4Doors"
    carSery.save()

    carSery.detail = "2.0 Excites i-VTEC 4Doors"
    carSery.save()

    carSery.year = "2004"
    carSery.detail = "1.7 EXi 4Doors"
    carSery.save()
    
    carSery.detail = "1.7 VTi 4Doors"
    carSery.save()

    carSery.detail = "2.0 Excites i-VTEC 4Doors"
    carSery.save()


    carSery.year = "2005"
    carSery.detail = "1.7 Exclusive EXi 4Doors"
    carSery.save()

    carSery.detail = "1.7 EXi 4Doors"
    carSery.save()

    carSery.detail = "1.7 RX Sports VTEC 4Doors"
    carSery.save()
    
    carSery.detail = "1.7 VTi 4Doors"
    carSery.save()

    carSery.detail = "1.8 E i-VTEC 4Doors"
    carSery.save()

    carSery.detail = "1.8 S i-VTEC 4Doors"
    carSery.save()

    carSery.detail = "2.0 E i-VTEC 4Doors"
    carSery.save()

    carSery.detail = "2.0 EL i-VTEC 4Doors"
    carSery.save()

    carSery.detail = "2.0 Excites i-VTEC 4Doors"
    carSery.save()

    carSery.year = "2006"
    carSery.detail = "1.8 E i-VTEC 4Doors"
    carSery.save()

    carSery.detail = "1.8 S i-VTEC 4Doors"
    carSery.save()

    carSery.detail = "2.0 E i-VTEC 4Doors"
    carSery.save()

    carSery.detail = "2.0 EL i-VTEC 4Doors"
    carSery.save()

    carSery.year = "2007"
    carSery.detail = "1.8 E i-VTEC 4Doors"
    carSery.save()

    carSery.detail = "1.8 S i-VTEC 4Doors"
    carSery.save()

    carSery.detail = "2.0 EL i-VTEC 4Doors"
    carSery.save()

    carSery.year = "2008"
    carSery.detail = "1.8 E i-VTEC 4Doors"
    carSery.save()

    carSery.detail = "1.8 S i-VTEC 4Doors"
    carSery.save()

    carSery.detail = "2.0 EL i-VTEC 4Doors"
    carSery.save()

    carSery.detail = "2.0 Sport i-VTEC 4Doors"
    carSery.save()

    carSery.year = "2009"
    carSery.detail = "1.8 E i-VTEC 4Doors"
    carSery.save()

    carSery.detail = "1.8 E Wise Edition i-VTEC 4Doors"
    carSery.save()

    carSery.detail = "1.8 S i-VTEC 4Doors"
    carSery.save()

    carSery.detail = "2.0 EL i-VTEC 4Doors"
    carSery.save()

    carSery.year = "2010"
    carSery.detail = "1.8 E i-VTEC 4Doors"
    carSery.save()

    carSery.detail = "1.8 S i-VTEC 4Doors"
    carSery.save()

    carSery.detail = "2.0 EL i-VTEC 4Doors"
    carSery.save()

    carSery.year = "2011"
    carSery.detail = "1.8 E i-VTEC 4Doors"
    carSery.save()

    carSery.detail = "1.8 E Sport Pearl 4Doors"
    carSery.save()

    carSery.detail = "1.8 S i-VTEC 4Doors"
    carSery.save()

    carSery.detail = "2.0 EL i-VTEC 4Doors"
    carSery.save()

    carSery.year = "2012"
    carSery.detail = "1.8 E i-VTEC 4Doors"
    carSery.save()

    carSery.detail = "1.8 E Sport Pearl 4Doors"
    carSery.save()

    carSery.detail = "1.8 S i-VTEC 4Doors"
    carSery.save()

    carSery.detail = "2.0 EL i-VTEC 4Doors"
    carSery.save()

    carSery.year = "2013"
    carSery.detail = "1.5 Hybrid 4Doors"
    carSery.save()

    carSery.detail = "1.8 E i-VTEC 4Doors"
    carSery.save()

    carSery.detail = "1.8 S i-VTEC 4Doors"
    carSery.save()

    carSery.detail = "2.0 EL i-VTEC 4Doors"
    carSery.save()

    carSery.year = "2014"
    carSery.detail = "1.5 Hybrid 4Doors"
    carSery.save()

    carSery.detail = "1.8 E i-VTEC 4Doors"
    carSery.save()

    carSery.detail = "1.8 ES i-VTEC 4Doors"
    carSery.save()

    carSery.detail = "1.8 S i-VTEC 4Doors"
    carSery.save()

    carSery.detail = "2.0 EL i-VTEC 4Doors"
    carSery.save()

    carSery.detail = "2.0 ES i-VTEC 4Doors"
    carSery.save()

    carSery.year = "2015"
    carSery.detail = "1.8 E i-VTEC 4Doors"
    carSery.save()

    carSery.detail = "1.8 ES i-VTEC 4Doors"
    carSery.save()

    carSery.detail = "1.8 S i-VTEC 4Doors"
    carSery.save()

    carSery.detail = "2.0 ES i-VTEC 4Doors"
    carSery.save()

    carSery.year = "2016"
    carSery.detail = "1.5 Turbo 4Doors"
    carSery.save()

    carSery.detail = "1.5 Turbo RS 4Doors"
    carSery.save()

    carSery.detail = "1.8 E i-VTEC 4Doors"
    carSery.save()

    carSery.detail = "1.8 EL i-VTEC 4Doors"
    carSery.save()

    carSery.detail = "1.8 ES i-VTEC 4Doors"
    carSery.save()

    carSery.detail = "1.8 S i-VTEC 4Doors"
    carSery.save()

    carSery.detail = "2.0 ES i-VTEC 4Doors"
    carSery.save()

    carSery.year = "2017"
    carSery.detail = "1.5 Turbo 4Doors"
    carSery.save()

    carSery.detail = "1.5 Turbo RS 4Doors"
    carSery.save()

    carSery.detail = "1.8 E i-VTEC 4Doors"
    carSery.save()

    carSery.detail = "1.8 EL i-VTEC 4Doors"
    carSery.save()

    carSery.year = "2018"
    carSery.detail = "1.5 Turbo 4Doors"
    carSery.save()

    carSery.detail = "1.5 Turbo RS 4Doors"
    carSery.save()

    carSery.detail = "1.8 E i-VTEC 4Doors"
    carSery.save()

    carSery.detail = "1.8 EL i-VTEC 4Doors"
    carSery.save()

    carSery.year = "2019"
    carSery.detail = "1.5 Turbo 4Doors"
    carSery.save()

    carSery.detail = "1.5 Turbo RS 4Doors"
    carSery.save()

    carSery.detail = "1.8 E i-VTEC 4Doors"
    carSery.save()

    carSery.detail = "1.8 EL i-VTEC 4Doors"
    carSery.save()
    //----Civic

    carSery.model = "CR-V"
    carSery.year = "1996"
    carSery.detail = "2.0 E 4Doors"
    carSery.save()

    carSery.year = "1997"
    carSery.save()

    carSery.detail = "2.0 EXi 4Doors"
    carSery.save()

    carSery.year = "1998"
    carSery.save()

    carSery.year = "1999"
    carSery.save()

    carSery.year = "2000"
    carSery.save()

    carSery.detail = "2.0 EXi Limited 4Doors"
    carSery.save()

    carSery.year = "2001"
    carSery.detail = "2.0 EXi 4Doors"
    carSery.save()

    carSery.detail = "2.0 EXi Limited 4Doors"
    carSery.save()

    carSery.year = "2002"
    carSery.detail = "2.0 E 4Doors"
    carSery.save()

    carSery.detail = "2.0 EF 4Doors"
    carSery.save()

    carSery.detail = "2.0 EXi 4Doors"
    carSery.save()

    carSery.detail = "2.0 EXi Limited 4Doors"
    carSery.save()

    carSery.detail = "2.0 S 4Doors"
    carSery.save()

    carSery.detail = "2.0 SF 4Doors"
    carSery.save()

    carSery.year = "2003"
    carSery.detail = "2.0 E 4Doors"
    carSery.save()

    carSery.detail = "2.0 EF 4Doors"
    carSery.save()

    carSery.detail = "2.0 S 4Doors"
    carSery.save()

    carSery.detail = "2.0 SF 4Doors"
    carSery.save()

    carSery.year = "2004"
    carSery.detail = "2.0 E 4Doors"
    carSery.save()

    carSery.detail = "2.0 EF 4Doors"
    carSery.save()

    carSery.detail = "2.0 S 4Doors"
    carSery.save()

    carSery.detail = "2.0 SF 4Doors"
    carSery.save()

    carSery.detail = "2.4 E 4Doors"
    carSery.save()

    carSery.detail = "2.4 EL 4Doors"
    carSery.save()

    carSery.year = "2005"
    carSery.detail = "2.0 E 4Doors"
    carSery.save()

    carSery.detail = "2.0 EF 4Doors"
    carSery.save()

    carSery.detail = "2.0 S 4Doors"
    carSery.save()

    carSery.detail = "2.4 E 4Doors"
    carSery.save()

    carSery.detail = "2.4 EL 4Doors"
    carSery.save()

    carSery.detail = "2.4 ELF 4Doors"
    carSery.save()

    carSery.year = "2006"
    carSery.detail = "2.0 E 4Doors"
    carSery.save()

    carSery.detail = "2.0 S 4Doors"
    carSery.save()

    carSery.detail = "2.4 EL 4Doors"
    carSery.save()

    carSery.detail = "2.4 ELF 4Doors"
    carSery.save()

    carSery.year = "2007"
    carSery.detail = "2.0 E 4Doors"
    carSery.save()

    carSery.detail = "2.0 S 4Doors"
    carSery.save()

    carSery.detail = "2.4 EL 4Doors"
    carSery.save()

    carSery.year = "2008"
    carSery.detail = "2.0 E 4Doors"
    carSery.save()

    carSery.detail = "2.0 S 4Doors"
    carSery.save()

    carSery.detail = "2.4 EL 4Doors"
    carSery.save()

    carSery.detail = "2.4 EL Prestige 4Doors"
    carSery.save()

    carSery.year = "2009"
    carSery.detail = "2.0 E 4Doors"
    carSery.save()

    carSery.detail = "2.0 E Wise Edition 4Doors"
    carSery.save()

    carSery.detail = "2.0 S 4Doors"
    carSery.save()

    carSery.detail = "2.4 EL 4Doors"
    carSery.save()

    carSery.detail = "2.4 EL Prestige 4Doors"
    carSery.save()

    carSery.year = "2010"
    carSery.detail = "2.0 E 4Doors"
    carSery.save()

    carSery.detail = "2.0 S 4Doors"
    carSery.save()

    carSery.detail = "2.4 EL 4Doors"
    carSery.save()

    carSery.year = "2011"
    carSery.detail = "2.0 E 4Doors"
    carSery.save()

    carSery.detail = "2.0 S 4Doors"
    carSery.save()

    carSery.detail = "2.4 EL 4Doors"
    carSery.save()

    carSery.year = "2012"
    carSery.detail = "2.0 E 4Doors"
    carSery.save()

    carSery.detail = "2.0 S 4Doors"
    carSery.save()

    carSery.detail = "2.4 EL 4Doors"
    carSery.save()

    carSery.year = "2013"
    carSery.detail = "2.0 E 4Doors"
    carSery.save()

    carSery.detail = "2.0 S 4Doors"
    carSery.save()

    carSery.detail = "2.4 EL 4Doors"
    carSery.save()

    carSery.year = "2014"
    carSery.detail = "2.0 E 4Doors"
    carSery.save()

    carSery.detail = "2.0 S 4Doors"
    carSery.save()

    carSery.detail = "2.4 EL 4Doors"
    carSery.save()

    carSery.year = "2015"
    carSery.detail = "2.0 E 4Doors"
    carSery.save()

    carSery.detail = "2.0 S 4Doors"
    carSery.save()

    carSery.detail = "2.4 EL 4Doors"
    carSery.save()

    carSery.year = "2016"
    carSery.detail = "2.0 E 4Doors"
    carSery.save()

    carSery.detail = "2.0 S 4Doors"
    carSery.save()

    carSery.detail = "2.0 SE 4Doors"
    carSery.save()

    carSery.detail = "2.4 EL 4Doors"
    carSery.save()

    carSery.year = "2017"
    carSery.detail = "1.6 DT E 4Doors"
    carSery.save()

    carSery.detail = "1.6 DT EL 4Doors"
    carSery.save()

    carSery.detail = "2.0 E 4Doors"
    carSery.save()

    carSery.detail = "2.0 S 4Doors"
    carSery.save()

    carSery.detail = "2.0 SE 4Doors"
    carSery.save()

    carSery.detail = "2.4 E 4Doors"
    carSery.save()

    carSery.detail = "2.4 EL 4Doors"
    carSery.save()

    carSery.year = "2018"
    carSery.detail = "1.6 DT E 4Doors"
    carSery.save()

    carSery.detail = "1.6 DT EL 4Doors"
    carSery.save()

    carSery.detail = "2.4 E 4Doors"
    carSery.save()

    carSery.detail = "2.4 EL 4Doors"
    carSery.save()

    carSery.detail = "2.4 ES 4Doors"
    carSery.save()

    carSery.detail = "2.4 S 4Doors"
    carSery.save()

    carSery.year = "2019"
    carSery.detail = "1.6 DT E 4Doors"
    carSery.save()

    carSery.detail = "1.6 DT EL 4Doors"
    carSery.save()

    carSery.detail = "2.4 E 4Doors"
    carSery.save()

    carSery.detail = "2.4 EL 4Doors"
    carSery.save()

    carSery.detail = "2.4 ES 4Doors"
    carSery.save()

    carSery.detail = "2.4 S 4Doors"
    carSery.save()
    //----CR-V

    carSery.model = "CR-Z"
    carSery.year = "2012"
    carSery.detail = "1.5 JP 2Doors"
    carSery.car_group_id = 1
    carSery.save()

    carSery.year = "2013"
    carSery.save()

    carSery.year = "2014"
    carSery.save()

    carSery.year = "2015"
    carSery.save()

    carSery.year = "2016"
    carSery.save()
    //----CR-Z

    carSery.model = "Freed"
    carSery.year = "2009"
    carSery.detail = "1.5 E 4Doors"
    carSery.car_group_id = 3
    carSery.save()

    carSery.detail = "1.5 E Sport 4Doors"
    carSery.save()

    carSery.detail = "1.5 S 4Doors"
    carSery.save()

    carSery.year = "2010"
    carSery.detail = "1.5 E 4Doors"
    carSery.save()

    carSery.detail = "1.5 E Sport 4Doors"
    carSery.save()

    carSery.detail = "1.5 S 4Doors"
    carSery.save()

    carSery.year = "2011"
    carSery.detail = "1.5 E 4Doors"
    carSery.save()

    carSery.detail = "1.5 E Sport 4Doors"
    carSery.save()

    carSery.detail = "1.5 Limited 4Doors"
    carSery.save()

    carSery.detail = "1.5 S 4Doors"
    carSery.save()

    carSery.year = "2012"
    carSery.detail = "1.5 E 4Doors"
    carSery.save()

    carSery.detail = "1.5 E Sport 4Doors"
    carSery.save()

    carSery.detail = "1.5 EL 4Doors"
    carSery.save()

    carSery.detail = "1.5 Limited 4Doors"
    carSery.save()

    carSery.detail = "1.5 S 4Doors"
    carSery.save()

    carSery.detail = "1.5 SE 4Doors"
    carSery.save()

    carSery.year = "2013"
    carSery.detail = "1.5 E 4Doors"
    carSery.save()

    carSery.detail = "1.5 EL 4Doors"
    carSery.save()

    carSery.detail = "1.5 SE 4Doors"
    carSery.save()

    carSery.year = "2014"
    carSery.detail = "1.5 E 4Doors"
    carSery.save()

    carSery.detail = "1.5 EL 4Doors"
    carSery.save()

    carSery.detail = "1.5 SE 4Doors"
    carSery.save()

    carSery.year = "2015"
    carSery.detail = "1.5 E 4Doors"
    carSery.save()

    carSery.detail = "1.5 EL 4Doors"
    carSery.save()

    carSery.detail = "1.5 SE 4Doors"
    carSery.save()

    carSery.year = "2016"
    carSery.detail = "1.5 E 4Doors"
    carSery.save()

    carSery.detail = "1.5 EL 4Doors"
    carSery.save()

    carSery.detail = "1.5 SE 4Doors"
    carSery.save()
    //----Freed

    carSery.model = "HR-V"
    carSery.year = "2014"
    carSery.detail = "1.8 E 4Doors"
    carSery.car_group_id = 4
    carSery.car_type_id = 5
    carSery.save()

    carSery.detail = "1.8 EL 4Doors"
    carSery.save()

    carSery.detail = "1.8 S 4Doors"
    carSery.save()

    carSery.year = "2015"
    carSery.detail = "1.8 E 4Doors"
    carSery.save()

    carSery.detail = "1.8 E Limited 4Doors"
    carSery.save()

    carSery.detail = "1.8 EL 4Doors"
    carSery.save()

    carSery.detail = "1.8 S 4Doors"
    carSery.save()

    carSery.year = "2016"
    carSery.detail = "1.8 E 4Doors"
    carSery.save()

    carSery.detail = "1.8 E Limited 4Doors"
    carSery.save()

    carSery.detail = "1.8 EL 4Doors"
    carSery.save()

    carSery.detail = "1.8 S 4Doors"
    carSery.save()

    carSery.year = "2017"
    carSery.detail = "1.8 E 4Doors"
    carSery.save()

    carSery.detail = "1.8 E Limited 4Doors"
    carSery.save()

    carSery.detail = "1.8 EL 4Doors"
    carSery.save()

    carSery.detail = "1.8 S 4Doors"
    carSery.save()

    carSery.year = "2018"
    carSery.detail = "1.8 E 4Doors"
    carSery.save()

    carSery.detail = "1.8 E Limited 4Doors"
    carSery.save()

    carSery.detail = "1.8 EL 4Doors"
    carSery.save()

    carSery.detail = "1.8 RS 4Doors"
    carSery.save()

    carSery.detail = "1.8 S 4Doors"
    carSery.save()

    carSery.year = "2019"
    carSery.detail = "1.8 E 4Doors"
    carSery.save()

    carSery.detail = "1.8 EL 4Doors"
    carSery.save()

    carSery.detail = "1.8 RS 4Doors"
    carSery.save()
    //----HR-V
    //----Insight no group
    //----Integra no group

    carSery.model = "Jazz"
    carSery.year = "2003"
    carSery.detail = "1.5 E i-DSi 4Doors"
    carSery.car_group_id = 5
    carSery.car_type_id = 1
    carSery.save()

    carSery.detail = "1.5 S i-DSi 4Doors"
    carSery.save()

    carSery.year = "2004"
    carSery.detail = "1.5 E i-DSi 4Doors"
    carSery.save()

    carSery.detail = "1.5 E-V VTEC 4Doors"
    carSery.save()

    carSery.detail = "1.5 S i-DSi 4Doors"
    carSery.save()

    carSery.year = "2005"
    carSery.detail = "1.5 E i-DSi 4Doors"
    carSery.save()

    carSery.detail = "1.5 E i-DSi Plus 4Doors"
    carSery.save()

    carSery.detail = "1.5 E i-DSi Safety 4Doors"
    carSery.save()

    carSery.detail = "1.5 E-V VTEC 4Doors"
    carSery.save()

    carSery.detail = "1.5 E-V VTEC Cool 4Doors"
    carSery.save()

    carSery.detail = "1.5 E-V VTEC X-Treme 4Doors"
    carSery.save()

    carSery.detail = "1.5 S i-DSi 4Doors"
    carSery.save()

    carSery.year = "2006"
    carSery.detail = "1.5 E i-DSi 4Doors"
    carSery.save()

    carSery.detail = "1.5 E i-DSi Plus 4Doors"
    carSery.save()

    carSery.detail = "1.5 E i-DSi Safety 4Doors"
    carSery.save()

    carSery.detail = "1.5 E-V VTEC 4Doors"
    carSery.save()

    carSery.detail = "1.5 E-V VTEC Cool 4Doors"
    carSery.save()

    carSery.detail = "1.5 E-V VTEC X-Treme 4Doors"
    carSery.save()

    carSery.detail = "1.5 S i-DSi 4Doors"
    carSery.save()

    carSery.detail = "1.5 SV VTEC 4Doors"
    carSery.save()

    carSery.detail = "1.5 V VTEC 4Doors"
    carSery.save()

    carSery.year = "2007"
    carSery.detail = "1.5 S i-DSi 4Doors"
    carSery.save()

    carSery.detail = "1.5 SV VTEC 4Doors"
    carSery.save()

    carSery.detail = "1.5 V VTEC 4Doors"
    carSery.save()

    carSery.year = "2008"
    carSery.detail = "1.5 S i-DSi 4Doors"
    carSery.save()

    carSery.detail = "1.5 S i-VTEC 4Doors"
    carSery.save()

    carSery.detail = "1.5 SV i-VTEC 4Doors"
    carSery.save()

    carSery.detail = "1.5 SV VTEC 4Doors"
    carSery.save()

    carSery.detail = "1.5 V i-VTEC 4Doors"
    carSery.save()

    carSery.detail = "1.5 V VTEC 4Doors"
    carSery.save()

    carSery.year = "2009"
    carSery.detail = "1.5 S i-VTEC 4Doors"
    carSery.save()

    carSery.detail = "1.5 SV i-VTEC 4Doors"
    carSery.save()

    carSery.detail = "1.5 V i-VTEC 4Doors"
    carSery.save()

    carSery.detail = "1.5 V Wise Edition i-VTEC 4Doors"
    carSery.save()

    carSery.year = "2010"
    carSery.detail = "1.5 S i-VTEC 4Doors"
    carSery.save()

    carSery.detail = "1.5 SV i-VTEC 4Doors"
    carSery.save()

    carSery.detail = "1.5 V Active Plus 4Doors"
    carSery.save()

    carSery.detail = "1.5 V i-VTEC 4Doors"
    carSery.save()

    carSery.year = "2011"
    carSery.detail = "1.5 S i-VTEC 4Doors"
    carSery.save()

    carSery.detail = "1.5 SV i-VTEC 4Doors"
    carSery.save()

    carSery.detail = "1.5 V i-VTEC 4Doors"
    carSery.save()

    carSery.year = "2012"
    carSery.detail = "1.3 Hybrid 4Doors"
    carSery.save()

    carSery.detail = "1.5 JP 4Doors"
    carSery.save()

    carSery.detail = "1.5 S i-VTEC 4Doors"
    carSery.save()

    carSery.detail = "1.5 SV i-VTEC 4Doors"
    carSery.save()
    
    carSery.detail = "1.5 V i-VTEC 4Doors"
    carSery.save()

    carSery.year = "2013"
    carSery.detail = "1.3 Hybrid 4Doors"
    carSery.save()

    carSery.detail = "1.5 S i-VTEC 4Doors"
    carSery.save()

    carSery.detail = "1.5 SV i-VTEC 4Doors"
    carSery.save()
    
    carSery.detail = "1.5 V i-VTEC 4Doors"
    carSery.save()

    carSery.detail = "1.5 V i-VTEC Modulo 4Doors"
    carSery.save()

    carSery.year = "2014"
    carSery.detail = "1.3 Hybrid 4Doors"
    carSery.save()

    carSery.detail = "1.5 S i-VTEC 4Doors"
    carSery.save()

    carSery.detail = "1.5 SV i-VTEC 4Doors"
    carSery.save()

    carSery.detail = "1.5 SV+ i-VTEC 4Doors"
    carSery.save()
    
    carSery.detail = "1.5 V i-VTEC 4Doors"
    carSery.save()

    carSery.detail = "1.5 V+ i-VTEC 4Doors"
    carSery.save()

    carSery.year = "2015"
    carSery.detail = "1.5 S i-VTEC 4Doors"
    carSery.save()

    carSery.detail = "1.5 SV i-VTEC 4Doors"
    carSery.save()

    carSery.detail = "1.5 SV+ i-VTEC 4Doors"
    carSery.save()
    
    carSery.detail = "1.5 V i-VTEC 4Doors"
    carSery.save()

    carSery.detail = "1.5 V+ i-VTEC 4Doors"
    carSery.save()

    carSery.year = "2016"
    carSery.detail = "1.5 S i-VTEC 4Doors"
    carSery.save()

    carSery.detail = "1.5 SV i-VTEC 4Doors"
    carSery.save()

    carSery.detail = "1.5 SV+ i-VTEC 4Doors"
    carSery.save()
    
    carSery.detail = "1.5 V i-VTEC 4Doors"
    carSery.save()

    carSery.detail = "1.5 V+ i-VTEC 4Doors"
    carSery.save()

    carSery.year = "2017"
    carSery.detail = "1.5 RS i-VTEC 4Doors"
    carSery.save()

    carSery.detail = "1.5 RS+ i-VTEC 4Doors"
    carSery.save()

    carSery.detail = "1.5 S i-VTEC 4Doors"
    carSery.save()

    carSery.detail = "1.5 SV i-VTEC 4Doors"
    carSery.save()

    carSery.detail = "1.5 SV+ i-VTEC 4Doors"
    carSery.save()
    
    carSery.detail = "1.5 V i-VTEC 4Doors"
    carSery.save()

    carSery.detail = "1.5 V+ i-VTEC 4Doors"
    carSery.save()

    carSery.year = "2018"
    carSery.detail = "1.5 RS i-VTEC 4Doors"
    carSery.save()

    carSery.detail = "1.5 RS+ i-VTEC 4Doors"
    carSery.save()

    carSery.detail = "1.5 S i-VTEC 4Doors"
    carSery.save()
    
    carSery.detail = "1.5 V i-VTEC 4Doors"
    carSery.save()

    carSery.detail = "1.5 V+ i-VTEC 4Doors"
    carSery.save()

    carSery.year = "2019"
    carSery.detail = "1.5 RS i-VTEC 4Doors"
    carSery.save()

    carSery.detail = "1.5 RS+ i-VTEC 4Doors"
    carSery.save()

    carSery.detail = "1.5 S i-VTEC 4Doors"
    carSery.save()
    
    carSery.detail = "1.5 V i-VTEC 4Doors"
    carSery.save()

    carSery.detail = "1.5 V+ i-VTEC 4Doors"
    carSery.save()
    //----Jazz

    carSery.model = "Legend"
    carSery.year = "1992"
    carSery.detail = "3.2 EXi 4Doors"
    carSery.car_group_id = 1
    carSery.save()

    carSery.year = "1993"
    carSery.save()

    carSery.year = "1994"
    carSery.save()

    carSery.year = "1995"
    carSery.save()

    carSery.year = "1996"
    carSery.save()

    carSery.year = "1997"
    carSery.save()

    carSery.year = "1998"
    carSery.save()
    //----Legend

    carSery.model = "Mobilio"
    carSery.year = "2014"
    carSery.detail = "1.5 RS 4Doors"
    carSery.car_group_id = 5
    carSery.car_type_id = 6
    carSery.save()

    carSery.detail = "1.5 S 4Doors"
    carSery.save()

    carSery.detail = "1.5 V 4Doors"
    carSery.save()

    carSery.year = "2015"
    carSery.detail = "1.5 RS 4Doors"
    carSery.save()

    carSery.detail = "1.5 S 4Doors"
    carSery.save()

    carSery.detail = "1.5 V 4Doors"
    carSery.save()

    carSery.year = "2016"
    carSery.detail = "1.5 RS 4Doors"
    carSery.save()

    carSery.detail = "1.5 S 4Doors"
    carSery.save()

    carSery.detail = "1.5 V 4Doors"
    carSery.save()

    carSery.year = "2017"
    carSery.detail = "1.5 RS 4Doors"
    carSery.save()

    carSery.detail = "1.5 S 4Doors"
    carSery.save()

    carSery.detail = "1.5 V 4Doors"
    carSery.save()

    carSery.year = "2018"
    carSery.detail = "1.5 RS 4Doors"
    carSery.save()

    carSery.detail = "1.5 S 4Doors"
    carSery.save()

    carSery.detail = "1.5 V 4Doors"
    carSery.save()

    carSery.year = "2019"
    carSery.detail = "1.5 RS 4Doors"
    carSery.save()

    carSery.detail = "1.5 S 4Doors"
    carSery.save()

    carSery.detail = "1.5 V 4Doors"
    carSery.save()
    //----Mobilio

    carSery.model = "NSX"
    carSery.year = "1992"
    carSery.detail = "3.0 EXi 2Doors"
    carSery.car_group_id = 1
    carSery.car_type_id = 1
    carSery.save()

    carSery.detail = "3.0 LXi 2Doors"
    carSery.save()

    carSery.year = "1993"
    carSery.detail = "3.0 EXi 2Doors"
    carSery.save()

    carSery.detail = "3.0 LXi 2Doors"
    carSery.save()

    carSery.detail = "3.0 R 2Doors"
    carSery.save()

    carSery.year = "1994"
    carSery.detail = "3.0 EXi 2Doors"
    carSery.save()

    carSery.detail = "3.0 LXi 2Doors"
    carSery.save()

    carSery.year = "1995"
    carSery.detail = "3.0 EXi 2Doors"
    carSery.save()

    carSery.detail = "3.0 LXi 2Doors"
    carSery.save()

    carSery.year = "1996"
    carSery.detail = "3.0 EXi 2Doors"
    carSery.save()

    carSery.detail = "3.0 LXi 2Doors"
    carSery.save()
    //----NSX

    carSery.model = "Odyssey"
    carSery.year = "1995"
    carSery.detail = "2.2 EXi 4Doors"
    carSery.car_type_id = 6
    carSery.save()

    carSery.year = "1996"
    carSery.detail = "2.2 EXi 4Doors"
    carSery.save()

    carSery.year = "1997"
    carSery.detail = "2.2 EXi 4Doors"
    carSery.save()

    carSery.year = "1998"
    carSery.detail = "2.2 EXi 4Doors"
    carSery.save()

    carSery.year = "1999"
    carSery.detail = "2.3 EXi 4Doors"
    carSery.save()

    carSery.year = "2000"
    carSery.detail = "2.3 VTi 4Doors"
    carSery.save()

    carSery.year = "2001"
    carSery.detail = "2.3 VTi 4Doors"
    carSery.save()

    carSery.year = "2002"
    carSery.detail = "2.3 VTi 4Doors"
    carSery.save()

    carSery.year = "2003"
    carSery.detail = "2.3 S 4Doors"
    carSery.save()

    carSery.detail = "2.3 VTi 4Doors"
    carSery.save()

    carSery.year = "2004"
    carSery.detail = "2.3 VTi 4Doors"
    carSery.save()

    carSery.detail = "2.4 EL 4Doors"
    carSery.save()

    carSery.detail = "2.4 ELX 4Doors"
    carSery.save()

    carSery.year = "2005"
    carSery.detail = "2.4 EL 4Doors"
    carSery.save()

    carSery.detail = "2.4 ELX 4Doors"
    carSery.save()

    carSery.year = "2006"
    carSery.detail = "2.4 EL 4Doors"
    carSery.save()

    carSery.detail = "2.4 ELX 4Doors"
    carSery.save()

    carSery.year = "2007"
    carSery.detail = "2.4 ELX 4Doors"
    carSery.save()

    carSery.year = "2012"
    carSery.detail = "2.4 JP 4Doors"
    carSery.save()

    carSery.year = "2013"
    carSery.detail = "2.4 E 4Doors"
    carSery.save()

    carSery.detail = "2.4 EL 4Doors"
    carSery.save()

    carSery.detail = "2.4 JP 4Doors"
    carSery.save()

    carSery.year = "2014"
    carSery.detail = "2.4 E 4Doors"
    carSery.save()

    carSery.detail = "2.4 EL 4Doors"
    carSery.save()

    carSery.year = "2015"
    carSery.detail = "2.4 E 4Doors"
    carSery.save()

    carSery.detail = "2.4 EL 4Doors"
    carSery.save()

    carSery.year = "2016"
    carSery.detail = "2.4 E 4Doors"
    carSery.save()

    carSery.detail = "2.4 EL 4Doors"
    carSery.save()
    //----Odyssey

    carSery.model = "Prelude"
    carSery.year = "1992"
    carSery.detail = "2.2 EXi 2Doors"
    carSery.car_type_id = 1
    carSery.save()

    carSery.detail = "2.2 LXi 2Doors"
    carSery.save()

    carSery.year = "1993"
    carSery.detail = "2.2 EXi 2Doors"
    carSery.save()

    carSery.detail = "2.2 EXi CX 2Doors"
    carSery.save()

    carSery.detail = "2.2 LXi 2Doors"
    carSery.save()

    carSery.detail = "2.2 LXi CX 2Doors"
    carSery.save()

    carSery.detail = "2.3 EXi SI 2Doors"
    carSery.save()

    carSery.detail = "2.3 LXi SI 2Doors"
    carSery.save()

    carSery.year = "1994"
    carSery.detail = "2.2 VTi-LX 2Doors"
    carSery.save()

    carSery.detail = "2.3 EXi SI 2Doors"
    carSery.save()

    carSery.detail = "2.3 LXi SI 2Doors"
    carSery.save()

    carSery.year = "1995"
    carSery.detail = "2.2 VTi-LX 2Doors"
    carSery.save()

    carSery.detail = "2.3 EXi SI 2Doors"
    carSery.save()

    carSery.detail = "2.3 LXi SI 2Doors"
    carSery.save()

    carSery.year = "1996"
    carSery.detail = "2.2 VTi-LX 2Doors"
    carSery.save()

    carSery.detail = "2.3 EXi SI 2Doors"
    carSery.save()

    carSery.detail = "2.3 LXi SI 2Doors"
    carSery.save()

    carSery.year = "1997"
    carSery.detail = "2.3 EXi SI 2Doors"
    carSery.save()
    //----Prelude
    //----S2000 no group

    carSery.model = "STEPWGN SPADA"
    carSery.year = "2012"
    carSery.detail = "2.0 JP 4Doors"
    carSery.car_type_id = 6
    carSery.save()

    carSery.year = "2013"
    carSery.detail = "2.0 E 4Doors"
    carSery.save()

    carSery.detail = "2.0 EL 4Doors"
    carSery.save()

    carSery.detail = "2.0 JP 4Doors"
    carSery.save()

    carSery.year = "2014"
    carSery.detail = "2.0 E 4Doors"
    carSery.save()

    carSery.detail = "2.0 EL 4Doors"
    carSery.save()

    carSery.year = "2015"
    carSery.detail = "2.0 E 4Doors"
    carSery.save()

    carSery.detail = "2.0 EL 4Doors"
    carSery.save()
    //----STEPWGN SPADA

    carSery.model = "Stream"
    carSery.year = "2002"
    carSery.detail = "2.0 S 4Doors"
    carSery.car_group_id = 2
    carSery.save()

    carSery.year = "2003"
    carSery.save()

    carSery.year = "2004"
    carSery.detail = "2.0 E 4Doors"
    carSery.save()

    carSery.detail = "2.0 S 4Doors"
    carSery.save()

    carSery.year = "2005"
    carSery.detail = "2.0 E 4Doors"
    carSery.save()

    carSery.detail = "2.0 S 4Doors"
    carSery.save()

    carSery.year = "2006"
    carSery.detail = "2.0 E 4Doors"
    carSery.save()

    carSery.detail = "2.0 S 4Doors"
    carSery.save()
    //----Stream
    //----Tourmaster no group
    //----Vigor no group
    //----Honda End

    //----Nissan Start
    carSery.brand = "Nissan"
    carSery.model = "200SX"
    carSery.year = "1992"
    carSery.detail = "1.8 2Doors"
    carSery.car_group_id = 3
    carSery.car_type_id = 1
    carSery.save()

    carSery.year = "1993"
    carSery.save()

    carSery.year = "1994"
    carSery.save()

    carSery.detail = "2.0 2Doors"
    carSery.save()
    //----200SX
    //----300ZX no group
    //----350Z no group
    //----370Z no group

    carSery.model = "Almera"
    carSery.year = "2011"
    carSery.detail = "1.2 E 4Doors"
    carSery.car_group_id = 5
    carSery.save()

    carSery.detail = "1.2 ES 4Doors"
    carSery.save()

    carSery.detail = "1.2 S 4Doors"
    carSery.save()

    carSery.detail = "1.2 V 4Doors"
    carSery.save()

    carSery.detail = "1.2 VL 4Doors"
    carSery.save()

    carSery.year = "2012"
    carSery.detail = "1.2 E 4Doors"
    carSery.save()

    carSery.detail = "1.2 ES 4Doors"
    carSery.save()

    carSery.detail = "1.2 S 4Doors"
    carSery.save()

    carSery.detail = "1.2 V 4Doors"
    carSery.save()

    carSery.detail = "1.2 VL 4Doors"
    carSery.save()

    carSery.year = "2013"
    carSery.detail = "1.2 E 4Doors"
    carSery.save()

    carSery.detail = "1.2 ES 4Doors"
    carSery.save()

    carSery.detail = "1.2 S 4Doors"
    carSery.save()

    carSery.detail = "1.2 V 4Doors"
    carSery.save()

    carSery.detail = "1.2 VL 4Doors"
    carSery.save()

    carSery.year = "2014"
    carSery.detail = "1.2 E 4Doors"
    carSery.save()

    carSery.detail = "1.2 E SPORTECH 4Doors"
    carSery.save()

    carSery.detail = "1.2 EL 4Doors"
    carSery.save()

    carSery.detail = "1.2 ES 4Doors"
    carSery.save()

    carSery.detail = "1.2 S 4Doors"
    carSery.save()

    carSery.detail = "1.2 V 4Doors"
    carSery.save()

    carSery.detail = "1.2 VL 4Doors"
    carSery.save()

    carSery.detail = "1.2 VL SPORTECH 4Doors"
    carSery.save()

    carSery.year = "2015"
    carSery.detail = "1.2 E 4Doors"
    carSery.save()

    carSery.detail = "1.2 E SPORTECH 4Doors"
    carSery.save()

    carSery.detail = "1.2 EL 4Doors"
    carSery.save()

    carSery.detail = "1.2 S 4Doors"
    carSery.save()

    carSery.detail = "1.2 V 4Doors"
    carSery.save()

    carSery.detail = "1.2 VL 4Doors"
    carSery.save()

    carSery.detail = "1.2 VL SPORTECH 4Doors"
    carSery.save()

    carSery.year = "2016"
    carSery.detail = "1.2 E 4Doors"
    carSery.save()

    carSery.detail = "1.2 E Nismo 4Doors"
    carSery.save()

    carSery.detail = "1.2 E SPORTECH 4Doors"
    carSery.save()

    carSery.detail = "1.2 EL 4Doors"
    carSery.save()

    carSery.detail = "1.2 EL Nismo 4Doors"
    carSery.save()

    carSery.detail = "1.2 S 4Doors"
    carSery.save()

    carSery.detail = "1.2 V 4Doors"
    carSery.save()

    carSery.detail = "1.2 VL 4Doors"
    carSery.save()

    carSery.detail = "1.2 VL Nismo 4Doors"
    carSery.save()

    carSery.detail = "1.2 VL SPORTECH 4Doors"
    carSery.save()

    carSery.year = "2017"
    carSery.detail = "1.2 E 4Doors"
    carSery.save()

    carSery.detail = "1.2 E Nismo 4Doors"
    carSery.save()

    carSery.detail = "1.2 E SPORTECH 4Doors"
    carSery.save()

    carSery.detail = "1.2 EL 4Doors"
    carSery.save()

    carSery.detail = "1.2 EL Nismo 4Doors"
    carSery.save()

    carSery.detail = "1.2 S 4Doors"
    carSery.save()

    carSery.detail = "1.2 V 4Doors"
    carSery.save()

    carSery.detail = "1.2 V SPORTECH 4Doors"
    carSery.save()

    carSery.detail = "1.2 VL 4Doors"
    carSery.save()

    carSery.detail = "1.2 VL Nismo 4Doors"
    carSery.save()

    carSery.detail = "1.2 VL SPORTECH 4Doors"
    carSery.save()

    carSery.year = "2018"
    carSery.detail = "1.2 E 4Doors"
    carSery.save()

    carSery.detail = "1.2 E Nismo 4Doors"
    carSery.save()

    carSery.detail = "1.2 E SPORTECH 4Doors"
    carSery.save()

    carSery.detail = "1.2 EL 4Doors"
    carSery.save()

    carSery.detail = "1.2 EL Nismo 4Doors"
    carSery.save()

    carSery.detail = "1.2 S 4Doors"
    carSery.save()

    carSery.detail = "1.2 V 4Doors"
    carSery.save()

    carSery.detail = "1.2 V SPORTECH 4Doors"
    carSery.save()

    carSery.detail = "1.2 VL 4Doors"
    carSery.save()

    carSery.detail = "1.2 VL Nismo 4Doors"
    carSery.save()

    carSery.detail = "1.2 VL SPORTECH 4Doors"
    carSery.save()

    carSery.year = "2019"
    carSery.detail = "1.2 E 4Doors"
    carSery.save()

    carSery.detail = "1.2 E Nismo 4Doors"
    carSery.save()

    carSery.detail = "1.2 E SPORTECH 4Doors"
    carSery.save()

    carSery.detail = "1.2 EL Nismo 4Doors"
    carSery.save()

    carSery.detail = "1.2 S 4Doors"
    carSery.save()

    carSery.detail = "1.2 V SPORTECH 4Doors"
    carSery.save()

    carSery.detail = "1.2 VL Nismo 4Doors"
    carSery.save()

    carSery.detail = "1.2 VL SPORTECH 4Doors"
    carSery.save()
    //----Almera
    //----Big M no group
    //----BLuebird Atessa no group

    carSery.model = "Cedric"
    carSery.year = "1992"
    carSery.detail = "3.0 Gran Turismo 4Doors"
    carSery.car_group_id = 2
    carSery.save()

    carSery.year = "1993"
    carSery.save()

    carSery.year = "1994"
    carSery.save()

    carSery.year = "1995"
    carSery.save()
    //----Cedric

    carSery.model = "Cefiro"
    carSery.year = "1992"
    carSery.detail = "2.0 4Doors"
    carSery.car_group_id = 3
    carSery.save()

    carSery.year = "1993"
    carSery.save()

    carSery.year = "1994"
    carSery.save()

    carSery.year = "1995"
    carSery.save()

    carSery.year = "1996"
    carSery.detail = "2.0 VIP 4Doors"
    carSery.save()

    carSery.detail = "3.0 VIP 4Doors"
    carSery.save()

    carSery.year = "1997"
    carSery.detail = "2.0 VIP 4Doors"
    carSery.save()

    carSery.detail = "3.0 VIP 4Doors"
    carSery.save()

    carSery.year = "1998"
    carSery.detail = "2.0 VIP 4Doors"
    carSery.save()

    carSery.detail = "3.0 VIP 4Doors"
    carSery.save()

    carSery.year = "1999"
    carSery.detail = "2.0 VIP 4Doors"
    carSery.save()

    carSery.detail = "3.0 VIP 4Doors"
    carSery.save()

    carSery.year = "2000"
    carSery.detail = "2.0 Classic 4Doors"
    carSery.save()

    carSery.detail = "2.0 Executive 4Doors"
    carSery.save()

    carSery.detail = "2.0 VIP 4Doors"
    carSery.save()

    carSery.detail = "3.0 VIP 4Doors"
    carSery.save()

    carSery.year = "2001"
    carSery.detail = "2.0 Classic 4Doors"
    carSery.save()

    carSery.detail = "2.0 Excimo 4Doors"
    carSery.save()

    carSery.detail = "2.0 Executive 4Doors"
    carSery.save()

    carSery.detail = "2.0 VIP 4Doors"
    carSery.save()

    carSery.detail = "3.0 Brougham 4Doors"
    carSery.save()

    carSery.detail = "3.0 VIP 4Doors"
    carSery.save()

    carSery.year = "2002"
    carSery.detail = "2.0 Classic 4Doors"
    carSery.save()

    carSery.detail = "2.0 Excimo 4Doors"
    carSery.save()

    carSery.detail = "2.0 Executive 4Doors"
    carSery.save()

    carSery.detail = "3.0 Brougham 4Doors"
    carSery.save()

    carSery.year = "2003"
    carSery.detail = "2.0 Excimo 4Doors"
    carSery.save()

    carSery.detail = "2.0 Executive 4Doors"
    carSery.save()

    carSery.detail = "3.0 Brougham 4Doors"
    carSery.save()

    carSery.year = "2003"
    carSery.detail = "2.0 Executive 4Doors"
    carSery.save()

    carSery.detail = "3.0 Brougham 4Doors"
    carSery.save()
    //----Cefiro
    //----Frontier no group
    //----Frontier Navara no group
    //----GT-R no group

    carSery.model = "Infiniti"
    carSery.year = "1997"
    carSery.detail = "4.1 4Doors"
    carSery.car_group_id = 1
    carSery.car_type_id = 5
    carSery.save()

    carSery.year = "1998"
    carSery.save()
    //----Infiniti

    carSery.model = "Juke"
    carSery.year = "2014"
    carSery.detail = "1.6 E 4Doors"
    carSery.car_group_id = 4
    carSery.save()

    carSery.detail = "1.6 V 4Doors"
    carSery.save()
    //group in 2014 is differernt

    carSery.year = "2015"
    carSery.detail = "1.6 E 4Doors"
    carSery.car_group_id = 2
    carSery.save()

    carSery.detail = "1.6 S 4Doors"
    carSery.save()

    carSery.detail = "1.6 Tokyo Edition 4Doors"
    carSery.save()

    carSery.detail = "1.6 V 4Doors"
    carSery.save()

    carSery.year = "2016"
    carSery.detail = "1.6 E 4Doors"
    carSery.save()

    carSery.detail = "1.6 S 4Doors"
    carSery.save()

    carSery.detail = "1.6 Tokyo Edition 4Doors"
    carSery.save()

    carSery.detail = "1.6 V 4Doors"
    carSery.save()

    carSery.year = "2017"
    carSery.detail = "1.6 E 4Doors"
    carSery.save()

    carSery.detail = "1.6 S 4Doors"
    carSery.save()

    carSery.detail = "1.6 Tokyo Edition 4Doors"
    carSery.save()

    carSery.detail = "1.6 V 4Doors"
    carSery.save()
    //----Juke
    //----LEAF no group

    carSery.model = "Livina"
    carSery.year = "2014"
    carSery.detail = "1.6 E 4Doors"
    carSery.car_group_id = 4
    carSery.car_type_id = 6
    carSery.save()

    carSery.detail = "1.6 V 4Doors"
    carSery.save()

    carSery.year = "2015"
    carSery.detail = "1.6 E 4Doors"
    carSery.save()

    carSery.detail = "1.6 V 4Doors"
    carSery.save()

    carSery.year = "2016"
    carSery.detail = "1.6 E 4Doors"
    carSery.save()

    carSery.detail = "1.6 V 4Doors"
    carSery.save()
    //----Livina

    carSery.model = "March"
    carSery.year = "2010"
    carSery.detail = "1.2 E 4Doors"
    carSery.car_group_id = 5
    carSery.car_type_id = 1
    carSery.save()

    carSery.detail = "1.2 EL 4Doors"
    carSery.save()

    carSery.detail = "1.2 S 4Doors"
    carSery.save()

    carSery.detail = "1.2 V 4Doors"
    carSery.save()

    carSery.detail = "1.2 VL 4Doors"
    carSery.save()

    carSery.year = "2011"
    carSery.detail = "1.2 E 4Doors"
    carSery.save()

    carSery.detail = "1.2 EL 4Doors"
    carSery.save()

    carSery.detail = "1.2 EL Sport Version 4Doors"
    carSery.save()

    carSery.detail = "1.2 S 4Doors"
    carSery.save()

    carSery.detail = "1.2 V 4Doors"
    carSery.save()

    carSery.detail = "1.2 VL 4Doors"
    carSery.save()

    carSery.detail = "1.2 VL Sport Version 4Doors"
    carSery.save()

    carSery.year = "2012"
    carSery.detail = "1.2 E 4Doors"
    carSery.save()

    carSery.detail = "1.2 EL 4Doors"
    carSery.save()

    carSery.detail = "1.2 EL Sport Version 4Doors"
    carSery.save()

    carSery.detail = "1.2 S 4Doors"
    carSery.save()

    carSery.detail = "1.2 V 4Doors"
    carSery.save()

    carSery.detail = "1.2 VL 4Doors"
    carSery.save()

    carSery.detail = "1.2 VL Sport Version 4Doors"
    carSery.save()

    carSery.year = "2013"
    carSery.detail = "1.2 E 4Doors"
    carSery.save()

    carSery.detail = "1.2 EL 4Doors"
    carSery.save()

    carSery.detail = "1.2 EL Sport Version 4Doors"
    carSery.save()

    carSery.detail = "1.2 S 4Doors"
    carSery.save()

    carSery.detail = "1.2 V 4Doors"
    carSery.save()

    carSery.detail = "1.2 VL 4Doors"
    carSery.save()

    carSery.detail = "1.2 VL Sport Version 4Doors"
    carSery.save()

    carSery.year = "2014"
    carSery.detail = "1.2 E 4Doors"
    carSery.save()

    carSery.detail = "1.2 E Limited Edition 4Doors"
    carSery.save()

    carSery.detail = "1.2 E Smart Edition 4Doors"
    carSery.save()

    carSery.detail = "1.2 EL 4Doors"
    carSery.save()

    carSery.detail = "1.2 EL Limited Edition 4Doors"
    carSery.save()

    carSery.detail = "1.2 S 4Doors"
    carSery.save()

    carSery.detail = "1.2 V 4Doors"
    carSery.save()

    carSery.detail = "1.2 VL 4Doors"
    carSery.save()

    carSery.year = "2015"
    carSery.detail = "1.2 E 4Doors"
    carSery.save()

    carSery.detail = "1.2 E Limited Edition 4Doors"
    carSery.save()

    carSery.detail = "1.2 EL 4Doors"
    carSery.save()

    carSery.detail = "1.2 EL Limited Edition 4Doors"
    carSery.save()

    carSery.detail = "1.2 S 4Doors"
    carSery.save()

    carSery.detail = "1.2 V 4Doors"
    carSery.save()

    carSery.detail = "1.2 V Sport Deco 4Doors"
    carSery.save()

    carSery.detail = "1.2 VL 4Doors"
    carSery.save()

    carSery.detail = "1.2 VL Sport Deco 4Doors"
    carSery.save()

    carSery.year = "2016"
    carSery.detail = "1.2 E 4Doors"
    carSery.save()

    carSery.detail = "1.2 E Limited Edition 4Doors"
    carSery.save()

    carSery.detail = "1.2 EL 4Doors"
    carSery.save()

    carSery.detail = "1.2 EL Limited Edition 4Doors"
    carSery.save()

    carSery.detail = "1.2 S 4Doors"
    carSery.save()

    carSery.detail = "1.2 V 4Doors"
    carSery.save()

    carSery.detail = "1.2 V Sport Deco 4Doors"
    carSery.save()

    carSery.detail = "1.2 VL 4Doors"
    carSery.save()

    carSery.detail = "1.2 VL Sport Deco 4Doors"
    carSery.save()

    carSery.year = "2017"
    carSery.detail = "1.2 E 4Doors"
    carSery.save()

    carSery.detail = "1.2 EL 4Doors"
    carSery.save()

    carSery.detail = "1.2 S 4Doors"
    carSery.save()

    carSery.detail = "1.2 V 4Doors"
    carSery.save()

    carSery.detail = "1.2 VL 4Doors"
    carSery.save()

    carSery.year = "2018"
    carSery.detail = "1.2 E 4Doors"
    carSery.save()

    carSery.detail = "1.2 EL 4Doors"
    carSery.save()

    carSery.detail = "1.2 S 4Doors"
    carSery.save()

    carSery.detail = "1.2 V 4Doors"
    carSery.save()

    carSery.detail = "1.2 VL 4Doors"
    carSery.save()

    carSery.year = "2019"
    carSery.detail = "1.2 E 4Doors"
    carSery.save()

    carSery.detail = "1.2 EL 4Doors"
    carSery.save()

    carSery.detail = "1.2 S 4Doors"
    carSery.save()
    //----March

    carSery.model = "Murano"
    carSery.year = "2005"
    carSery.detail = "3.5 4Doors"
    carSery.car_group_id = 1
    carSery.car_type_id = 5
    carSery.save()

    carSery.year = "2006"
    carSery.save()

    carSery.year = "2007"
    carSery.detail = "2.5 4Doors"
    carSery.save()

    carSery.detail = "3.5 4Doors"
    carSery.save()

    carSery.year = "2008"
    carSery.detail = "2.5 4Doors"
    carSery.save()

    carSery.detail = "3.5 4Doors"
    carSery.save()

    carSery.year = "2009"
    carSery.detail = "2.5 4Doors"
    carSery.save()

    carSery.detail = "3.5 4Doors"
    carSery.save()

    carSery.year = "2010"
    carSery.detail = "2.5 4Doors"
    carSery.save()
    //----Murano
    //----Note no group
    //----NP 300 Navara no group

    carSery.model = "NV"
    carSery.year = "1993"
    carSery.detail = "1.6 SGX 4Doors"
    carSery.car_group_id = 5
    carSery.car_type_id = 2
    carSery.save()

    carSery.detail = "1.6 SLX 4Doors"
    carSery.save()

    carSery.year = "1994"
    carSery.detail = "1.6 LX 2Doors"
    carSery.save()

    carSery.detail = "1.6 SGX 4Doors"
    carSery.save()

    carSery.detail = "1.6 SLX 2Doors"
    carSery.save()

    carSery.detail = "1.6 SLX 4Doors"
    carSery.save()

    carSery.year = "1995"
    carSery.detail = "1.6 LX 2Doors"
    carSery.save()

    carSery.detail = "1.6 SGX 4Doors"
    carSery.save()

    carSery.detail = "1.6 SLX 2Doors"
    carSery.save()

    carSery.detail = "1.6 SLX 4Doors"
    carSery.save()

    carSery.year = "1996"
    carSery.detail = "1.6 LX 2Doors"
    carSery.save()

    carSery.detail = "1.6 SGX 4Doors"
    carSery.save()

    carSery.detail = "1.6 SLX 2Doors"
    carSery.save()

    carSery.detail = "1.6 SLX 4Doors"
    carSery.save()

    carSery.year = "1997"
    carSery.detail = "1.6 LX 2Doors"
    carSery.save()

    carSery.detail = "1.6 Queen Cab SLX 2Doors"
    carSery.save()

    carSery.detail = "1.6 SLX 2Doors"
    carSery.save()

    carSery.year = "1998"
    carSery.detail = "1.6 LX 2Doors"
    carSery.save()

    carSery.detail = "1.6 Queen Cab LXT 2Doors"
    carSery.save()

    carSery.detail = "1.6 Queen Cab SLX 2Doors"
    carSery.save()

    carSery.detail = "1.6 SLX 2Doors"
    carSery.save()

    carSery.year = "1999"
    carSery.detail = "1.6 Queen Cab LXT 2Doors"
    carSery.save()

    carSery.detail = "1.6 Queen Cab SLX 2Doors"
    carSery.save()

    carSery.year = "2000"
    carSery.detail = "1.6 Queen Cab SLX 2Doors"
    carSery.save()

    carSery.detail = "1.6 Wing Road SLX 2Doors"
    carSery.save()

    carSery.year = "2001"
    carSery.detail = "1.6 Wing Road SLX 2Doors"
    carSery.save()

    carSery.year = "2002"
    carSery.detail = "1.6 Wing Road Di GRX 2Doors"
    carSery.save()

    carSery.detail = "1.6 Wing Road SLX 2Doors"
    carSery.save()

    carSery.year = "2003"
    carSery.save()

    carSery.year = "2004"
    carSery.save()

    carSery.year = "2005"
    carSery.save()

    carSery.year = "2006"
    carSery.save()

    carSery.year = "2007"
    carSery.save()

    carSery.year = "2008"
    carSery.save()
    //----NV

    carSery.model = "NX"
    carSery.year = "1992"
    carSery.detail = "1.6 2Doors"
    carSery.car_group_id = 4
    carSery.car_type_id = 1
    carSery.save()

    carSery.year = "1993"
    carSery.save()

    carSery.year = "1994"
    carSery.save()
    //----NX
    //----Patrol no group

    carSery.model = "Presea"
    carSery.year = "1993"
    carSery.detail = "1.6 4Doors"
    carSery.car_group_id = 2
    carSery.save()

    carSery.year = "1994"
    carSery.save()

    carSery.year = "1995"
    carSery.detail = "1.8 4Doors"
    carSery.save()

    carSery.year = "1996"
    carSery.save()
    //----Presea

    carSery.model = "President"
    carSery.year = "1993"
    carSery.detail = "4.5 4Doors"
    carSery.car_group_id = 1
    carSery.save()

    carSery.year = "1994"
    carSery.save()

    carSery.year = "1995"
    carSery.detail = "2.0 4Doors"
    carSery.save()

    carSery.detail = "3.0 4Doors"
    carSery.save()

    carSery.detail = "4.5 4Doors"
    carSery.save()
    //----President

    carSery.model = "Primera"
    carSery.year = "1997"
    carSery.detail = "2.0 4Doors"
    carSery.car_group_id = 3
    carSery.save()

    carSery.year = "1998"
    carSery.save()
    //----Primera

    carSery.model = "Pulsar"
    carSery.year = "2013"
    carSery.detail = "1.6 S 4Doors"
    carSery.car_group_id = 4
    carSery.car_type_id = 6
    carSery.save()

    carSery.detail = "1.6 SV 4Doors"
    carSery.save()

    carSery.detail = "1.6 V 4Doors"
    carSery.save()

    carSery.detail = "1.8 V 4Doors"
    carSery.save()

    carSery.year = "2014"
    carSery.detail = "1.6 DIG Turbo 4Doors"
    carSery.save()

    carSery.detail = "1.6 S 4Doors"
    carSery.save()

    carSery.detail = "1.6 SV 4Doors"
    carSery.save()

    carSery.detail = "1.6 V 4Doors"
    carSery.save()

    carSery.detail = "1.8 V 4Doors"
    carSery.save()

    carSery.year = "2015"
    carSery.detail = "1.6 DIG Turbo 4Doors"
    carSery.save()

    carSery.detail = "1.6 S 4Doors"
    carSery.save()

    carSery.detail = "1.6 SV 4Doors"
    carSery.save()

    carSery.detail = "1.6 V 4Doors"
    carSery.save()

    carSery.detail = "1.8 V 4Doors"
    carSery.save()

    carSery.year = "2016"
    carSery.detail = "1.6 DIG Turbo 4Doors"
    carSery.save()

    carSery.detail = "1.6 S 4Doors"
    carSery.save()

    carSery.detail = "1.6 SV 4Doors"
    carSery.save()

    carSery.detail = "1.6 V 4Doors"
    carSery.save()

    carSery.detail = "1.8 V 4Doors"
    carSery.save()
    //----Pulsar

    carSery.model = "Sentra"
    carSery.year = "1992"
    carSery.detail = "1.4 EX Saloon 4Doors"
    carSery.car_group_id = 5
    carSery.car_type_id = 1
    carSery.save()

    carSery.detail = "1.6 EGI Super Saloon 4Doors"
    carSery.save()

    carSery.detail = "1.6 EX Saloon 4Doors"
    carSery.save()

    carSery.year = "1993"
    carSery.detail = "1.4 EX Saloon 4Doors"
    carSery.save()

    carSery.detail = "1.6 EGI Super Saloon 4Doors"
    carSery.save()

    carSery.detail = "1.6 EX Saloon 4Doors"
    carSery.save()

    carSery.year = "1994"
    carSery.detail = "1.4 EX Saloon 4Doors"
    carSery.save()

    carSery.detail = "1.5 EX Saloon 4Doors"
    carSery.save()

    carSery.detail = "1.6 EGI Super Saloon 4Doors"
    carSery.save()

    carSery.detail = "1.6 EX Saloon 4Doors"
    carSery.save()

    carSery.year = "1995"
    carSery.detail = "1.5 EX Saloon 4Doors"
    carSery.save()

    carSery.detail = "1.6 EX Saloon 4Doors"
    carSery.save()
    //----Sentra

    carSery.model = "Serena"
    carSery.year = "1992"
    carSery.detail = "2.0 4Doors"
    carSery.car_group_id = 2
    carSery.car_type_id = 6
    carSery.save()

    carSery.year = "1993"
    carSery.save()

    carSery.year = "1994"
    carSery.save()

    carSery.year = "1995"
    carSery.save()

    carSery.year = "1996"
    carSery.save()

    carSery.year = "1997"
    carSery.save()

    carSery.year = "2000"
    carSery.save()
    //----Serena

    carSery.model = "Sunny"
    carSery.year = "1992"
    carSery.detail = "1.3 DX 4Doors"
    carSery.car_group_id = 5
    carSery.car_type_id = 1
    carSery.save()

    carSery.detail = "1.3 GL 4Doors"
    carSery.save()

    carSery.year = "1993"
    carSery.detail = "1.3 DX 4Doors"
    carSery.save()

    carSery.detail = "1.3 GL 4Doors"
    carSery.save()

    carSery.year = "1994"
    carSery.detail = "1.3 DX 4Doors"
    carSery.save()

    carSery.detail = "1.3 GL 4Doors"
    carSery.save()

    carSery.detail = "1.5 EX Saloon 4Doors"
    carSery.save()

    carSery.detail = "1.6 Super Saloon 4Doors"
    carSery.save()

    carSery.year = "1995"
    carSery.detail = "1.5 EX Saloon 4Doors"
    carSery.save()

    carSery.detail = "1.6 Super Saloon 4Doors"
    carSery.save()

    carSery.year = "1996"
    carSery.detail = "1.5 EX Saloon 4Doors"
    carSery.save()

    carSery.detail = "1.6 Super GL Saloon 4Doors"
    carSery.save()

    carSery.year = "1997"
    carSery.detail = "1.5 EX Saloon 4Doors"
    carSery.save()

    carSery.detail = "1.6 Super GL Saloon 4Doors"
    carSery.save()

    carSery.year = "1998"
    carSery.detail = "1.6 FE 4Doors"
    carSery.save()

    carSery.detail = "1.6 Super GL Saloon 4Doors"
    carSery.save()

    carSery.year = "1999"
    carSery.detail = "1.6 FE 4Doors"
    carSery.save()

    carSery.detail = "1.6 Super GL Saloon 4Doors"
    carSery.save()

    carSery.year = "2000"
    carSery.detail = "1.6 GL Neo 4Doors"
    carSery.save()

    carSery.detail = "1.6 Super GL Saloon 4Doors"
    carSery.save()

    carSery.detail = "1.6 Super Neo 4Doors"
    carSery.save()

    carSery.year = "2001"
    carSery.detail = "1.6 GL Neo 4Doors"
    carSery.save()

    carSery.detail = "1.6 Super GL 4Doors"
    carSery.save()

    carSery.detail = "1.6 Super GL Saloon 4Doors"
    carSery.save()

    carSery.detail = "1.6 Super Neo 4Doors"
    carSery.save()

    carSery.detail = "1.6 VIP Neo 4Doors"
    carSery.save()

    carSery.detail = "1.8 Almera SX 4Doors"
    carSery.save()

    carSery.detail = "1.8 Almera Young 4Doors"
    carSery.save()

    carSery.year = "2002"
    carSery.detail = "1.6 GL Neo 4Doors"
    carSery.save()

    carSery.detail = "1.6 Super Neo 4Doors"
    carSery.save()

    carSery.detail = "1.6 VIP Neo 4Doors"
    carSery.save()

    carSery.detail = "1.8 Almera Young 4Doors"
    carSery.save()

    carSery.year = "2003"
    carSery.detail = "1.6 GL Neo 4Doors"
    carSery.save()

    carSery.detail = "1.6 Super Neo 4Doors"
    carSery.save()

    carSery.detail = "1.8 Almera Young 4Doors"
    carSery.save()

    carSery.detail = "1.8 Super Neo 4Doors"
    carSery.save()

    carSery.detail = "1.8 VIP Neo 4Doors"
    carSery.save()

    carSery.year = "2004"
    carSery.detail = "1.6 GL Neo 4Doors"
    carSery.save()

    carSery.detail = "1.8 Super Neo 4Doors"
    carSery.save()

    carSery.detail = "1.8 VIP Neo 4Doors"
    carSery.save()

    carSery.year = "2005"
    carSery.detail = "1.6 GL Neo 4Doors"
    carSery.save()

    carSery.detail = "1.6 Super Neo 4Doors"
    carSery.save()

    carSery.detail = "1.8 Super Neo 4Doors"
    carSery.save()

    carSery.detail = "1.8 VIP Neo 4Doors"
    carSery.save()

    carSery.year = "2006"
    carSery.detail = "1.6 GL Neo 4Doors"
    carSery.save()

    carSery.detail = "1.6 Super Neo 4Doors"
    carSery.save()

    carSery.detail = "1.8 Super Neo 4Doors"
    carSery.save()

    carSery.detail = "1.8 VIP Neo 4Doors"
    carSery.save()
    //----Sunny

    carSery.model = "Sylphy"
    carSery.year = "2012"
    carSery.detail = "1.6 E 4Doors"
    carSery.car_group_id = 4
    carSery.save()

    carSery.detail = "1.6 S 4Doors"
    carSery.save()

    carSery.detail = "1.6 V 4Doors"
    carSery.save()

    carSery.detail = "1.8 V 4Doors"
    carSery.save()

    carSery.year = "2013"
    carSery.detail = "1.6 E 4Doors"
    carSery.save()

    carSery.detail = "1.6 S 4Doors"
    carSery.save()

    carSery.detail = "1.6 SV 4Doors"
    carSery.save()

    carSery.detail = "1.6 V 4Doors"
    carSery.save()

    carSery.detail = "1.8 V 4Doors"
    carSery.save()

    carSery.year = "2014"
    carSery.detail = "1.6 E 4Doors"
    carSery.save()

    carSery.detail = "1.6 S 4Doors"
    carSery.save()

    carSery.detail = "1.6 SV 4Doors"
    carSery.save()

    carSery.detail = "1.6 V 4Doors"
    carSery.save()

    carSery.detail = "1.8 V 4Doors"
    carSery.save()

    carSery.year = "2015"
    carSery.detail = "1.6 DIG Turbo 4Doors"
    carSery.save()

    carSery.detail = "1.6 E 4Doors"
    carSery.save()

    carSery.detail = "1.6 S 4Doors"
    carSery.save()

    carSery.detail = "1.6 SV 4Doors"
    carSery.save()

    carSery.detail = "1.6 V 4Doors"
    carSery.save()

    carSery.detail = "1.8 SV 4Doors"
    carSery.save()

    carSery.detail = "1.8 V 4Doors"
    carSery.save()

    carSery.year = "2016"
    carSery.detail = "1.6 DIG Turbo 4Doors"
    carSery.save()

    carSery.detail = "1.6 E 4Doors"
    carSery.save()

    carSery.detail = "1.6 S 4Doors"
    carSery.save()

    carSery.detail = "1.6 SV 4Doors"
    carSery.save()

    carSery.detail = "1.6 V 4Doors"
    carSery.save()

    carSery.detail = "1.8 SV 4Doors"
    carSery.save()

    carSery.detail = "1.8 V 4Doors"
    carSery.save()

    carSery.year = "2017"
    carSery.detail = "1.6 DIG Turbo 4Doors"
    carSery.save()

    carSery.detail = "1.6 E 4Doors"
    carSery.save()

    carSery.detail = "1.6 SV 4Doors"
    carSery.save()

    carSery.detail = "1.6 V 4Doors"
    carSery.save()

    carSery.year = "2018"
    carSery.detail = "1.6 DIG Turbo 4Doors"
    carSery.save()

    carSery.detail = "1.6 E 4Doors"
    carSery.save()

    carSery.detail = "1.6 SV 4Doors"
    carSery.save()

    carSery.detail = "1.6 V 4Doors"
    carSery.save()

    carSery.year = "2019"
    carSery.detail = "1.6 DIG Turbo 4Doors"
    carSery.save()

    carSery.detail = "1.6 E 4Doors"
    carSery.save()

    carSery.detail = "1.6 SV 4Doors"
    carSery.save()

    carSery.detail = "1.6 V 4Doors"
    carSery.save()
    //----Sylphy

    carSery.model = "Teana"
    carSery.year = "2004"
    carSery.detail = "2.3 230 JK 4Doors"
    carSery.car_group_id = 3
    carSery.save()

    carSery.detail = "2.3 230 JM 4Doors"
    carSery.save()

    carSery.year = "2005"
    carSery.detail = "2.3 230 JK 4Doors"
    carSery.save()

    carSery.detail = "2.3 230 JM 4Doors"
    carSery.save()

    carSery.year = "2006"
    carSery.detail = "2.0 200 JK 4Doors"
    carSery.save()

    carSery.detail = "2.3 230 JK 4Doors"
    carSery.save()

    carSery.detail = "2.3 230 JM 4Doors"
    carSery.save()

    carSery.detail = "2.3 230 JS 4Doors"
    carSery.save()

    carSery.year = "2007"
    carSery.detail = "2.0 200 JK 4Doors"
    carSery.save()

    carSery.detail = "2.3 230 JS 4Doors"
    carSery.save()

    carSery.year = "2008"
    carSery.detail = "2.0 200 JK 4Doors"
    carSery.save()

    carSery.detail = "2.3 230 JS 4Doors"
    carSery.save()

    carSery.year = "2009"
    carSery.detail = "2.0 200 JK 4Doors"
    carSery.save()

    carSery.detail = "2.0 200 XE 4Doors"
    carSery.save()

    carSery.detail = "2.0 200 XL 4Doors"
    carSery.save()

    carSery.detail = "2.0 250 XV Sport 4Doors"
    carSery.save()

    carSery.detail = "2.3 230 JS 4Doors"
    carSery.save()

    carSery.detail = "2.5 250 XV 4Doors"
    carSery.save()

    carSery.detail = "2.5 250 XV Sport 4Doors"
    carSery.save()

    carSery.year = "2010"
    carSery.detail = "2.0 200 XE 4Doors"
    carSery.save()

    carSery.detail = "2.0 200 XL 4Doors"
    carSery.save()

    carSery.detail = "2.0 200 XL Sport 4Doors"
    carSery.save()

    carSery.detail = "2.0 250 XV Sport 4Doors"
    carSery.save()

    carSery.detail = "2.5 250 XV 4Doors"
    carSery.save()

    carSery.detail = "2.5 250 XV Sport 4Doors"
    carSery.save()

    carSery.year = "2011"
    carSery.detail = "2.0 200 XL 4Doors"
    carSery.save()

    carSery.detail = "2.0 200 XL Sport 4Doors"
    carSery.save()

    carSery.detail = "2.5 250 XV 4Doors"
    carSery.save()

    carSery.detail = "2.5 250 XV Sport 4Doors"
    carSery.save()

    carSery.year = "2012"
    carSery.detail = "2.0 200 XL 4Doors"
    carSery.save()

    carSery.detail = "2.0 200 XL Sport 4Doors"
    carSery.save()

    carSery.detail = "2.5 250 XV 4Doors"
    carSery.save()

    carSery.detail = "2.5 250 XV Sport 4Doors"
    carSery.save()

    carSery.year = "2013"
    carSery.detail = "2.0 200 XL 4Doors"
    carSery.save()

    carSery.detail = "2.0 200 XL Sport 4Doors"
    carSery.save()

    carSery.detail = "2.0 XE 4Doors"
    carSery.save()

    carSery.detail = "2.0 XL 4Doors"
    carSery.save()

    carSery.detail = "2.5 250 XV 4Doors"
    carSery.save()

    carSery.detail = "2.5 250 XV Sport 4Doors"
    carSery.save()

    carSery.detail = "2.5 XV 4Doors"
    carSery.save()

    carSery.year = "2014"
    carSery.detail = "2.0 XE 4Doors"
    carSery.save()

    carSery.detail = "2.0 XL 4Doors"
    carSery.save()

    carSery.detail = "2.5 XV 4Doors"
    carSery.save()

    carSery.year = "2015"
    carSery.detail = "2.0 XE 4Doors"
    carSery.save()

    carSery.detail = "2.0 XL 4Doors"
    carSery.save()

    carSery.detail = "2.5 XV 4Doors"
    carSery.save()

    carSery.year = "2016"
    carSery.detail = "2.0 XE 4Doors"
    carSery.save()

    carSery.detail = "2.0 XL 4Doors"
    carSery.save()

    carSery.detail = "2.5 XV 4Doors"
    carSery.save()

    carSery.year = "2017"
    carSery.detail = "2.0 XE 4Doors"
    carSery.save()

    carSery.detail = "2.0 XL 4Doors"
    carSery.save()

    carSery.detail = "2.5 XV 4Doors"
    carSery.save()

    carSery.year = "2018"
    carSery.detail = "2.0 XE 4Doors"
    carSery.save()

    carSery.detail = "2.0 XL 4Doors"
    carSery.save()

    carSery.detail = "2.5 XV 4Doors"
    carSery.save()

    carSery.year = "2019"
    carSery.detail = "2.0 XE 4Doors"
    carSery.save()

    carSery.detail = "2.0 XL 4Doors"
    carSery.save()

    carSery.detail = "2.5 XV 4Doors"
    carSery.save()
    //----Teana
    //----Terra no group

    carSery.model = "Terrano II"
    carSery.year = "1996"
    carSery.detail = "2.4 4Doors"
    carSery.car_group_id = 2
    carSery.car_type_id = 5
    carSery.save()

    carSery.year = "1997"
    carSery.save()

    carSery.year = "1998"
    carSery.save()

    carSery.year = "1999"
    carSery.save()
    //----Terrano II

    carSery.model = "Tiida"
    carSery.year = "2006"
    carSery.detail = "1.6 G 4Doors"
    carSery.car_group_id = 5
    carSery.car_type_id = 1
    carSery.save()

    carSery.detail = "1.6 M 4Doors"
    carSery.save()

    carSery.detail = "1.6 S 4Doors"
    carSery.save()

    carSery.detail = "1.8 G 4Doors"
    carSery.save()

    carSery.year = "2007"
    carSery.detail = "1.6 G 4Doors"
    carSery.save()

    carSery.detail = "1.6 M 4Doors"
    carSery.save()

    carSery.detail = "1.6 S 4Doors"
    carSery.save()

    carSery.detail = "1.8 G 4Doors"
    carSery.save()

    carSery.year = "2008"
    carSery.detail = "1.6 B Latio 4Doors"
    carSery.save()

    carSery.detail = "1.6 G 4Doors"
    carSery.save()

    carSery.detail = "1.6 G Latio 4Doors"
    carSery.save()

    carSery.detail = "1.6 M 4Doors"
    carSery.save()

    carSery.detail = "1.6 M Latio 4Doors"
    carSery.save()

    carSery.detail = "1.6 S 4Doors"
    carSery.save()

    carSery.detail = "1.6 S Latio 4Doors"
    carSery.save()

    carSery.detail = "1.8 G 4Doors"
    carSery.save()

    carSery.year = "2009"
    carSery.detail = "1.6 B Latio 4Doors"
    carSery.save()

    carSery.detail = "1.6 G 4Doors"
    carSery.save()

    carSery.detail = "1.6 G Latio 4Doors"
    carSery.save()

    carSery.detail = "1.6 G Nismo 4Doors"
    carSery.save()

    carSery.detail = "1.6 M Latio 4Doors"
    carSery.save()

    carSery.detail = "1.6 S 4Doors"
    carSery.save()

    carSery.detail = "1.6 S Latio 4Doors"
    carSery.save()

    carSery.detail = "1.8 G 4Doors"
    carSery.save()

    carSery.detail = "1.8 G Nismo 4Doors"
    carSery.save()

    carSery.year = "2010"
    carSery.detail = "1.6 B Latio 4Doors"
    carSery.save()

    carSery.detail = "1.6 G 4Doors"
    carSery.save()

    carSery.detail = "1.6 G Fun Pack 4Doors"
    carSery.save()

    carSery.detail = "1.6 G Latio 4Doors"
    carSery.save()

    carSery.detail = "1.6 G Nismo 4Doors"
    carSery.save()

    carSery.detail = "1.6 M Latio 4Doors"
    carSery.save()

    carSery.detail = "1.6 S 4Doors"
    carSery.save()

    carSery.detail = "1.8 G 4Doors"
    carSery.save()

    carSery.detail = "1.8 G Fun Pack 4Doors"
    carSery.save()

    carSery.detail = "1.8 G Nismo 4Doors"
    carSery.save()

    carSery.year = "2011"
    carSery.detail = "1.6 B Latio 4Doors"
    carSery.save()

    carSery.detail = "1.6 G 4Doors"
    carSery.save()

    carSery.detail = "1.6 G Latio 4Doors"
    carSery.save()

    carSery.detail = "1.6 M Latio 4Doors"
    carSery.save()

    carSery.detail = "1.6 S 4Doors"
    carSery.save()

    carSery.detail = "1.8 G 4Doors"
    carSery.save()

    carSery.year = "2012"
    carSery.detail = "1.6 B Latio 4Doors"
    carSery.save()

    carSery.detail = "1.6 G 4Doors"
    carSery.save()

    carSery.detail = "1.6 G Latio 4Doors"
    carSery.save()

    carSery.detail = "1.6 M Latio 4Doors"
    carSery.save()

    carSery.detail = "1.6 S 4Doors"
    carSery.save()

    carSery.detail = "1.8 G 4Doors"
    carSery.save()
    //----Tiida
    //----Urvan no group
    //----Vanette no group

    carSery.model = "X-Trail"
    carSery.year = "2005"
    carSery.detail = "2.5 Comfort 4Doors"
    carSery.car_group_id = 2
    carSery.save()

    carSery.detail = "2.5 Luxury 4Doors"
    carSery.save()

    carSery.year = "2006"
    carSery.detail = "2.5 Comfort 4Doors"
    carSery.save()

    carSery.detail = "2.5 Luxury 4Doors"
    carSery.save()

    carSery.year = "2007"
    carSery.detail = "2.5 Comfort 4Doors"
    carSery.save()

    carSery.detail = "2.5 Luxury 4Doors"
    carSery.save()

    carSery.year = "2009"
    carSery.detail = "2.0 4Doors"
    carSery.save()

    carSery.year = "2010"
    carSery.detail = "2.0 4Doors"
    carSery.save()

    carSery.detail = "2.0 V 4Doors"
    carSery.save()

    carSery.year = "2011"
    carSery.detail = "2.0 4Doors"
    carSery.save()

    carSery.detail = "2.0 V 4Doors"
    carSery.save()

    carSery.year = "2012"
    carSery.detail = "2.0 4Doors"
    carSery.save()

    carSery.detail = "2.0 V 4Doors"
    carSery.save()

    carSery.year = "2013"
    carSery.save()

    carSery.year = "2014"
    carSery.detail = "2.0 E 4Doors"
    carSery.save()

    carSery.detail = "2.0 S 4Doors"
    carSery.save()

    carSery.detail = "2.0 V 4Doors"
    carSery.save()

    carSery.detail = "2.5 V 4Doors"
    carSery.save()

    carSery.year = "2015"
    carSery.detail = "2.0 E 4Doors"
    carSery.save()

    carSery.detail = "2.0 E Hybrid 4Doors"
    carSery.save()

    carSery.detail = "2.0 S 4Doors"
    carSery.save()

    carSery.detail = "2.0 S Hybrid 4Doors"
    carSery.save()

    carSery.detail = "2.0 V 4Doors"
    carSery.save()

    carSery.detail = "2.0 V Hybrid 4Doors"
    carSery.save()

    carSery.detail = "2.5 V 4Doors"
    carSery.save()

    carSery.year = "2016"
    carSery.detail = "2.0 E 4Doors"
    carSery.save()

    carSery.detail = "2.0 E Hybrid 4Doors"
    carSery.save()

    carSery.detail = "2.0 S 4Doors"
    carSery.save()

    carSery.detail = "2.0 S Hybrid 4Doors"
    carSery.save()

    carSery.detail = "2.0 V 4Doors"
    carSery.save()

    carSery.detail = "2.0 V Hybrid 4Doors"
    carSery.save()

    carSery.detail = "2.5 V 4Doors"
    carSery.save()

    carSery.year = "2017"
    carSery.detail = "2.0 E 4Doors"
    carSery.save()

    carSery.detail = "2.0 E Hybrid 4Doors"
    carSery.save()

    carSery.detail = "2.0 S 4Doors"
    carSery.save()

    carSery.detail = "2.0 S Hybrid 4Doors"
    carSery.save()

    carSery.detail = "2.0 V 4Doors"
    carSery.save()

    carSery.detail = "2.0 V Hybrid 4Doors"
    carSery.save()

    carSery.detail = "2.5 V 4Doors"
    carSery.save()

    carSery.year = "2018"
    carSery.detail = "2.0 E 4Doors"
    carSery.save()

    carSery.detail = "2.0 E Hybrid 4Doors"
    carSery.save()

    carSery.detail = "2.0 Limited Edition 4Doors"
    carSery.save()

    carSery.detail = "2.0 S 4Doors"
    carSery.save()

    carSery.detail = "2.0 S Hybrid 4Doors"
    carSery.save()

    carSery.detail = "2.0 V 4Doors"
    carSery.save()

    carSery.detail = "2.0 V Hybrid 4Doors"
    carSery.save()

    carSery.detail = "2.5 V 4Doors"
    carSery.save()

    carSery.year = "2019"
    carSery.detail = "2.0 E Hybrid 4Doors"
    carSery.save()

    carSery.detail = "2.0 Limited Edition 4Doors"
    carSery.save()

    carSery.detail = "2.0 S 4Doors"
    carSery.save()

    carSery.detail = "2.0 S Hybrid 4Doors"
    carSery.save()

    carSery.detail = "2.0 V 4Doors"
    carSery.save()

    carSery.detail = "2.0 V Hybrid 4Doors"
    carSery.save()

    carSery.detail = "2.0 VL Hybrid 4Doors"
    carSery.save()

    carSery.detail = "2.5 S 4Doors"
    carSery.save()

    carSery.detail = "2.5 V 4Doors"
    carSery.save()

    carSery.detail = "2.5 VL 4Doors"
    carSery.save()
    //----X-Trail
    //----Nissan End

    //----Mitsubishi Start
    //----3000GT no group
    //----Asti no group
    carSery.brand = "Mitsubishi"
    carSery.model = "Attrage"
    carSery.year = "2013"
    carSery.detail = "1.2 GLS 4Doors"
    carSery.car_group_id = 5
    carSery.car_type_id = 1
    carSery.save()

    carSery.detail = "1.2 GLS LTD 4Doors"
    carSery.save()

    carSery.detail = "1.2 GLX 4Doors"
    carSery.save()

    carSery.year = "2014"
    carSery.detail = "1.2 GLS 4Doors"
    carSery.save()

    carSery.detail = "1.2 GLS LTD 4Doors"
    carSery.save()

    carSery.detail = "1.2 GLX 4Doors"
    carSery.save()

    carSery.year = "2015"
    carSery.detail = "1.2 GLS 4Doors"
    carSery.save()

    carSery.detail = "1.2 GLS LTD 4Doors"
    carSery.save()

    carSery.detail = "1.2 GLX 4Doors"
    carSery.save()

    carSery.year = "2016"
    carSery.detail = "1.2 GLS 4Doors"
    carSery.save()

    carSery.detail = "1.2 GLS LTD 4Doors"
    carSery.save()

    carSery.detail = "1.2 GLX 4Doors"
    carSery.save()

    carSery.year = "2017"
    carSery.detail = "1.2 GLS 4Doors"
    carSery.save()

    carSery.detail = "1.2 GLS LTD 4Doors"
    carSery.save()

    carSery.detail = "1.2 GLX 4Doors"
    carSery.save()

    carSery.year = "2018"
    carSery.detail = "1.2 GLS 4Doors"
    carSery.save()

    carSery.detail = "1.2 GLS LTD 4Doors"
    carSery.save()

    carSery.detail = "1.2 GLX 4Doors"
    carSery.save()

    carSery.detail = "1.2 Limited Edition 4Doors"
    carSery.save()

    carSery.year = "2019"
    carSery.detail = "1.2 GLS 4Doors"
    carSery.save()

    carSery.detail = "1.2 GLS LTD 4Doors"
    carSery.save()

    carSery.detail = "1.2 GLX 4Doors"
    carSery.save()
    //----Attrage
    //----Colt no group
    //----Cyclone no group
    //----Delica Space Wagon no group

    carSery.model = "Galant"
    carSery.year = "1992"
    carSery.detail = "2.0 Ultima 4Doors"
    carSery.car_group_id = 3
    carSery.save()

    carSery.detail = "2.0 Ultima GLSi 4Doors"
    carSery.save()

    carSery.detail = "2.0 Ultima TCL 4Doors"
    carSery.save()

    carSery.year = "1993"
    carSery.detail = "2.0 Ultima 4Doors"
    carSery.save()

    carSery.detail = "2.0 Ultima GLSi 4Doors"
    carSery.save()

    carSery.detail = "2.0 Ultima TCL 4Doors"
    carSery.save()

    carSery.year = "1994"
    carSery.detail = "2.0 Ultima 4Doors"
    carSery.save()

    carSery.detail = "2.0 Ultima GLSi 4Doors"
    carSery.save()

    carSery.detail = "2.0 Ultima TCL 4Doors"
    carSery.save()

    carSery.year = "1995"
    carSery.detail = "2.0 Ultima 4Doors"
    carSery.save()

    carSery.detail = "2.0 Ultima GLSi 4Doors"
    carSery.save()

    carSery.detail = "2.0 Ultima TCL 4Doors"
    carSery.save()

    carSery.year = "1996"
    carSery.detail = "2.0 Ultima 4Doors"
    carSery.save()

    carSery.detail = "2.0 Ultima GLSi 4Doors"
    carSery.save()

    carSery.year = "1997"
    carSery.detail = "2.0 Ultima 4Doors"
    carSery.save()

    carSery.detail = "2.0 Ultima GLSi 4Doors"
    carSery.save()

    carSery.year = "1998"
    carSery.detail = "2.0 Ultima 4Doors"
    carSery.save()

    carSery.detail = "2.0 Ultima GLSi 4Doors"
    carSery.save()

    carSery.year = "1999"
    carSery.detail = "2.0 Ultima 4Doors"
    carSery.save()

    carSery.detail = "2.0 Ultima GLSi 4Doors"
    carSery.save()

    carSery.year = "2000"
    carSery.detail = "2.0 Super Saloon 4Doors"
    carSery.save()

    carSery.detail = "2.5 4Doors"
    carSery.save()
    //----Galant
    //----Guts no group
    //----L300 no group
    carSery.model = "Lancer"
    carSery.year = "1992"
    carSery.detail = "1.3 Champ III 4Doors"
    carSery.car_group_id = 4
    carSery.save()

    carSery.detail = "1.3 GL 4Doors"
    carSery.save()

    carSery.detail = "1.5 GLX 2Doors"
    carSery.save()

    carSery.detail = "1.5 GLX 4Doors"
    carSery.save()

    carSery.detail = "1.5 GLXi 4Doors"
    carSery.save()

    carSery.detail = "1.6 GLXi 4Doors"
    carSery.save()

    carSery.detail = "1.8 GLi 4Doors"
    carSery.save()

    carSery.year = "1993"
    carSery.detail = "1.3 Champ III 4Doors"
    carSery.save()

    carSery.detail = "1.5 GLX 2Doors"
    carSery.save()

    carSery.detail = "1.5 GLX 4Doors"
    carSery.save()

    carSery.detail = "1.5 GLXi 4Doors"
    carSery.save()

    carSery.detail = "1.6 GLXi 4Doors"
    carSery.save()

    carSery.detail = "1.8 GLi 4Doors"
    carSery.save()

    carSery.year = "1994"
    carSery.detail = "1.3 Champ III 4Doors"
    carSery.save()

    carSery.detail = "1.5 GLXi 4Doors"
    carSery.save()

    carSery.detail = "1.6 GLXi 4Doors"
    carSery.save()

    carSery.detail = "1.8 GLi 4Doors"
    carSery.save()

    carSery.year = "1995"
    carSery.detail = "1.3 Champ III 4Doors"
    carSery.save()

    carSery.detail = "1.3 EL 4Doors"
    carSery.save()

    carSery.detail = "1.5 GLXi 4Doors"
    carSery.save()

    carSery.detail = "1.6 GLXi 4Doors"
    carSery.save()

    carSery.year = "1996"
    carSery.detail = "1.3 Champ III 4Doors"
    carSery.save()

    carSery.detail = "1.3 EL 4Doors"
    carSery.save()

    carSery.detail = "1.5 GLXi 4Doors"
    carSery.save()

    carSery.detail = "1.5 GLXi LTD 4Doors"
    carSery.save()

    carSery.detail = "1.6 GLXi 4Doors"
    carSery.save()

    carSery.detail = "1.8 SEi 4Doors"
    carSery.save()

    carSery.detail = "1.8 SEi LTD 4Doors"
    carSery.save()

    carSery.year = "1997"
    carSery.detail = "1.3 EL 4Doors"
    carSery.save()

    carSery.detail = "1.5 GLXi 4Doors"
    carSery.save()

    carSery.detail = "1.5 GLXi LTD 4Doors"
    carSery.save()

    carSery.detail = "1.6 GLXi 4Doors"
    carSery.save()

    carSery.detail = "1.8 SEi 4Doors"
    carSery.save()

    carSery.detail = "1.8 SEi LTD 4Doors"
    carSery.save()

    carSery.year = "1998"
    carSery.detail = "1.5 GLi 4Doors"
    carSery.save()

    carSery.detail = "1.5 GLXi 4Doors"
    carSery.save()

    carSery.detail = "1.5 GLXi LTD 4Doors"
    carSery.save()

    carSery.detail = "1.8 SEi 4Doors"
    carSery.save()

    carSery.detail = "1.8 SEi LTD 4Doors"
    carSery.save()

    carSery.year = "1999"
    carSery.detail = "1.5 GLi 4Doors"
    carSery.save()

    carSery.detail = "1.5 GLXi 4Doors"
    carSery.save()

    carSery.detail = "1.5 GLXi LTD 4Doors"
    carSery.save()

    carSery.detail = "1.6 GLXi 4Doors"
    carSery.save()

    carSery.detail = "1.6 GLXi LTD 4Doors"
    carSery.save()

    carSery.detail = "1.8 SEi 4Doors"
    carSery.save()

    carSery.detail = "1.8 SEi LTD 4Doors"
    carSery.save()

    carSery.year = "2000"
    carSery.detail = "1.5 GLXi 4Doors"
    carSery.save()

    carSery.detail = "1.5 GLXi LTD 4Doors"
    carSery.save()

    carSery.detail = "1.6 GLXi 4Doors"
    carSery.save()

    carSery.detail = "1.6 GLXi LTD 4Doors"
    carSery.save()

    carSery.detail = "1.8 SEi 4Doors"
    carSery.save()

    carSery.detail = "1.8 SEi LTD 4Doors"
    carSery.save()

    carSery.year = "2001"
    carSery.detail = "1.6 Cedia GLXi 4Doors"
    carSery.save()

    carSery.detail = "1.6 Cedia GLXi-LTD 4Doors"
    carSery.save()

    carSery.detail = "1.6 GLXi 4Doors"
    carSery.save()

    carSery.detail = "1.6 GLXi LTD 4Doors"
    carSery.save()

    carSery.detail = "1.8 Cedia SEi-LTD 4Doors"
    carSery.save()

    carSery.detail = "1.8 SEi LTD 4Doors"
    carSery.save()

    carSery.year = "2002"
    carSery.detail = "1.6 Cedia GLXi 4Doors"
    carSery.save()

    carSery.detail = "1.6 Cedia GLXi-LTD 4Doors"
    carSery.save()

    carSery.detail = "1.8 Cedia SEi-LTD 4Doors"
    carSery.save()

    carSery.year = "2003"
    carSery.detail = "1.6 Cedia GLXi 4Doors"
    carSery.save()

    carSery.detail = "1.6 Cedia GLXi-LTD 4Doors"
    carSery.save()

    carSery.detail = "1.8 Cedia SEi-LTD 4Doors"
    carSery.save()

    carSery.detail = "1.8 Cedia Virage 4Doors"
    carSery.save()

    carSery.year = "2004"
    carSery.detail = "1.6 Cedia GLXi 4Doors"
    carSery.save()

    carSery.detail = "1.6 Cedia GLXi-LTD 4Doors"
    carSery.save()

    carSery.detail = "1.6 GLXi 4Doors"
    carSery.save()

    carSery.detail = "1.6 GLXi LTD 4Doors"
    carSery.save()

    carSery.detail = "1.8 Cedia SEi-LTD 4Doors"
    carSery.save()

    carSery.detail = "2.0 SEi LTD 4Doors"
    carSery.save()

    carSery.year = "2005"
    carSery.detail = "1.6 GLXi 4Doors"
    carSery.save()

    carSery.detail = "1.6 GLXi LTD 4Doors"
    carSery.save()

    carSery.detail = "2.0 SEi LTD 4Doors"
    carSery.save()

    carSery.detail = "2.0 SEi Ralliart 4Doors"
    carSery.save()

    carSery.year = "2006"
    carSery.detail = "1.6 GLXi 4Doors"
    carSery.save()

    carSery.detail = "1.6 GLXi LTD Ralliart 4Doors"
    carSery.save()

    carSery.detail = "1.6 GLXi LTD 4Doors"
    carSery.save()

    carSery.detail = "2.0 SEi LTD 4Doors"
    carSery.save()

    carSery.detail = "2.0 SEi Ralliart 4Doors"
    carSery.save()

    carSery.year = "2007"
    carSery.detail = "1.6 GLXi 4Doors"
    carSery.save()

    carSery.detail = "1.6 GLXi LTD Ralliart 4Doors"
    carSery.save()

    carSery.detail = "1.6 GLXi LTD 4Doors"
    carSery.save()

    carSery.detail = "2.0 SEi Ralliart 4Doors"
    carSery.save()

    carSery.year = "2008"
    carSery.detail = "1.6 GLXi 4Doors"
    carSery.save()

    carSery.detail = "1.6 GLXi LTD Ralliart 4Doors"
    carSery.save()

    carSery.detail = "1.6 GLXi LTD 4Doors"
    carSery.save()

    carSery.detail = "2.0 SEi LTD 4Doors"
    carSery.save()

    carSery.detail = "2.0 SEi Ralliart 4Doors"
    carSery.save()

    carSery.year = "2009"
    carSery.detail = "1.6 GLXi 4Doors"
    carSery.save()

    carSery.detail = "1.6 GLXi LTD 4Doors"
    carSery.save()

    carSery.detail = "1.6 SEi 4Doors"
    carSery.save()

    carSery.year = "2010"
    carSery.detail = "1.6 GLXi 4Doors"
    carSery.save()

    carSery.year = "2011"
    carSery.save()

    carSery.year = "2012"
    carSery.save()
    //----Lancer
    //----Lancer EX nogroup

    carSery.model = "Mirage"
    carSery.year = "2012"
    carSery.detail = "1.2 GL 4Doors"
    carSery.car_group_id = 5
    carSery.save()

    carSery.detail = "1.2 GLS 4Doors"
    carSery.save()

    carSery.detail = "1.2 GLS LTD 4Doors"
    carSery.save()

    carSery.detail = "1.2 GLX 4Doors"
    carSery.save()

    carSery.year = "2013"
    carSery.detail = "1.2 GL 4Doors"
    carSery.save()

    carSery.detail = "1.2 GLS 4Doors"
    carSery.save()

    carSery.detail = "1.2 GLS LTD 4Doors"
    carSery.save()

    carSery.detail = "1.2 GLX 4Doors"
    carSery.save()

    carSery.year = "2014"
    carSery.detail = "1.2 GL 4Doors"
    carSery.save()

    carSery.detail = "1.2 GLS 4Doors"
    carSery.save()

    carSery.detail = "1.2 GLS LTD 4Doors"
    carSery.save()

    carSery.detail = "1.2 GLX 4Doors"
    carSery.save()

    carSery.year = "2015"
    carSery.detail = "1.2 GL 4Doors"
    carSery.save()

    carSery.detail = "1.2 GLS 4Doors"
    carSery.save()

    carSery.detail = "1.2 GLS LTD 4Doors"
    carSery.save()

    carSery.detail = "1.2 GLX 4Doors"
    carSery.save()

    carSery.year = "2016"
    carSery.detail = "1.2 GL 4Doors"
    carSery.save()

    carSery.detail = "1.2 GLS 4Doors"
    carSery.save()

    carSery.detail = "1.2 GLS LTD 4Doors"
    carSery.save()

    carSery.detail = "1.2 GLX 4Doors"
    carSery.save()

    carSery.year = "2017"
    carSery.detail = "1.2 GL 4Doors"
    carSery.save()

    carSery.detail = "1.2 GLS 4Doors"
    carSery.save()

    carSery.detail = "1.2 GLS LTD 4Doors"
    carSery.save()

    carSery.detail = "1.2 GLX 4Doors"
    carSery.save()

    carSery.year = "2018"
    carSery.detail = "1.2 GLS 4Doors"
    carSery.save()

    carSery.detail = "1.2 GLS LTD 4Doors"
    carSery.save()

    carSery.detail = "1.2 GLX 4Doors"
    carSery.save()

    carSery.detail = "1.2 Limited Edition 4Doors"
    carSery.save()

    carSery.year = "2019"
    carSery.detail = "1.2 GLS 4Doors"
    carSery.save()

    carSery.detail = "1.2 GLS LTD 4Doors"
    carSery.save()

    carSery.detail = "1.2 GLX 4Doors"
    carSery.save()

    carSery.detail = "1.2 Limited Edition 4Doors"
    carSery.save()
    //----Mirage
    //----Outlander no group

    carSery.model = "Pajero"
    carSery.year = "1993"
    carSery.detail = "2.5 4Doors"
    carSery.car_group_id = 2
    carSery.car_type_id = 5
    carSery.save()

    carSery.year = "1994"
    carSery.save()

    carSery.detail = "3.5 GLS 4Doors"
    carSery.save()

    carSery.year = "1995"
    carSery.detail = "2.5 4Doors"
    carSery.save()

    carSery.detail = "3.5 GLS 4Doors"
    carSery.save()

    carSery.year = "1996"
    carSery.detail = "3.0 GLX 4Doors"
    carSery.save()

    carSery.detail = "3.5 GLS 4Doors"
    carSery.save()

    carSery.year = "1997"
    carSery.detail = "3.0 GLX 4Doors"
    carSery.save()

    carSery.year = "1998"
    carSery.save()

    carSery.year = "1999"
    carSery.save()

    carSery.year = "2000"
    carSery.detail = "2.8 4Doors"
    carSery.save()

    carSery.detail = "3.0 GLX 4Doors"
    carSery.save()

    carSery.detail = "3.5 GLS 4Doors"
    carSery.save()

    carSery.year = "2001"
    carSery.detail = "2.8 4Doors"
    carSery.save()

    carSery.detail = "3.0 GLX 4Doors"
    carSery.save()

    carSery.detail = "3.2 4Doors"
    carSery.save()

    carSery.detail = "3.5 GLS 4Doors"
    carSery.save()

    carSery.year = "2002"
    carSery.detail = "2.8 4Doors"
    carSery.save()

    carSery.detail = "3.0 GLX 4Doors"
    carSery.save()

    carSery.detail = "3.2 4Doors"
    carSery.save()

    carSery.detail = "3.5 GLS 4Doors"
    carSery.save()

    carSery.year = "2003"
    carSery.detail = "2.8 4Doors"
    carSery.save()

    carSery.detail = "3.0 GLX 4Doors"
    carSery.save()

    carSery.detail = "3.2 4Doors"
    carSery.save()

    carSery.detail = "3.5 GLS 4Doors"
    carSery.save()

    carSery.year = "2004"
    carSery.detail = "3.2 4Doors"
    carSery.save()

    carSery.detail = "3.5 GLS 4Doors"
    carSery.save()

    carSery.year = "2005"
    carSery.detail = "3.2 4Doors"
    carSery.save()

    carSery.year = "2008"
    carSery.detail = "3.8 Exceed 4Doors"
    carSery.save()

    carSery.year = "2009"
    carSery.save()
    //----Pajero

    carSery.model = "Pajero Sport"
    carSery.year = "2008"
    carSery.detail = "2.5 GLS 4Doors"
    carSery.car_group_id = 4
    carSery.save()

    carSery.detail = "2.5 GT 4Doors"
    carSery.save()

    carSery.detail = "3.2 GLS 4Doors"
    carSery.save()

    carSery.detail = "3.2 GT 4Doors"
    carSery.save()

    carSery.year = "2009"
    carSery.detail = "2.5 GLS 4Doors"
    carSery.save()

    carSery.detail = "2.5 GT 4Doors"
    carSery.save()

    carSery.detail = "3.2 GLS 4Doors"
    carSery.save()

    carSery.detail = "3.2 GT 4Doors"
    carSery.save()

    carSery.year = "2010"
    carSery.detail = "2.5 GLS 4Doors"
    carSery.save()

    carSery.detail = "2.5 GT 4Doors"
    carSery.save()

    carSery.detail = "3.2 GLS 4Doors"
    carSery.save()

    carSery.detail = "3.2 GT 4Doors"
    carSery.save()

    carSery.year = "2011"
    carSery.detail = "2.4 GLS 4Doors"
    carSery.save()

    carSery.detail = "2.5 GLS 4Doors"
    carSery.save()

    carSery.detail = "2.5 GT 4Doors"
    carSery.save()

    carSery.year = "2012"
    carSery.detail = "2.4 GLS 4Doors"
    carSery.save()

    carSery.detail = "2.5 GLS 4Doors"
    carSery.save()

    carSery.detail = "2.5 GT 4Doors"
    carSery.save()

    carSery.detail = "3.0 GT 4Doors"
    carSery.save()

    carSery.year = "2013"
    carSery.detail = "2.4 GLS 4Doors"
    carSery.save()

    carSery.detail = "2.5 GLS 4Doors"
    carSery.save()

    carSery.detail = "2.5 GT 4Doors"
    carSery.save()

    carSery.detail = "3.0 GT 4Doors"
    carSery.save()

    carSery.year = "2014"
    carSery.detail = "2.4 GLS 4Doors"
    carSery.save()

    carSery.detail = "2.5 GLS 4Doors"
    carSery.save()

    carSery.detail = "2.5 GT 4Doors"
    carSery.save()

    carSery.detail = "3.0 GT 4Doors"
    carSery.save()

    carSery.year = "2015"
    carSery.detail = "2.4 GLS 4Doors"
    carSery.save()

    carSery.detail = "2.4 GLS LTD 4Doors"
    carSery.save()

    carSery.detail = "2.4 GT 4Doors"
    carSery.save()

    carSery.detail = "2.4 GT Premium 4Doors"
    carSery.save()

    carSery.detail = "2.5 GLS 4Doors"
    carSery.save()

    carSery.detail = "2.5 GT 4Doors"
    carSery.save()

    carSery.detail = "3.0 GT 4Doors"
    carSery.save()

    carSery.year = "2016"
    carSery.detail = "2.4 GLS LTD 4Doors"
    carSery.save()

    carSery.detail = "2.4 GT 4Doors"
    carSery.save()

    carSery.detail = "2.4 GT Premium 4Doors"
    carSery.save()

    carSery.year = "2017"
    carSery.detail = "2.4 GLS LTD 4Doors"
    carSery.save()

    carSery.detail = "2.4 GT 4Doors"
    carSery.save()

    carSery.detail = "2.4 GT Premium 4Doors"
    carSery.save()

    carSery.year = "2018"
    carSery.detail = "2.4 GLS LTD 4Doors"
    carSery.save()

    carSery.detail = "2.4 GT 4Doors"
    carSery.save()

    carSery.detail = "2.4 GT Premium 4Doors"
    carSery.save()

    carSery.detail = "2.4 GT Premium Elite Edition 4Doors"
    carSery.save()

    carSery.year = "2019"
    carSery.detail = "2.4 GT 4Doors"
    carSery.save()

    carSery.detail = "2.4 GT Premium 4Doors"
    carSery.save()

    carSery.detail = "2.4 GT Premium Elite Edition 4Doors"
    carSery.save()
    //----Pajero Sport
    //----Sigma no group
    //----Space Runner no group

    carSery.model = "Space Wagon"
    carSery.year = "1992"
    carSery.detail = "1.8 4Doors"
    carSery.car_group_id = 2
    carSery.car_type_id = 1
    carSery.save()

    carSery.year = "1993"
    carSery.save()

    carSery.detail = "2.0 4Doors"
    carSery.save()

    carSery.year = "1994"
    carSery.save()

    carSery.year = "1995"
    carSery.save()

    carSery.year = "1996"
    carSery.save()

    carSery.year = "2004"
    carSery.detail = "2.4 GLS 4Doors"
    carSery.save()

    carSery.year = "2005"
    carSery.save()

    carSery.detail = "2.4 GT 4Doors"
    carSery.save()

    carSery.year = "2006"
    carSery.detail = "2.4 GLS 4Doors"
    carSery.save()

    carSery.detail = "2.4 GT 4Doors"
    carSery.save()

    carSery.year = "2007"
    carSery.detail = "2.4 GLS 4Doors"
    carSery.save()

    carSery.detail = "2.4 GLS Limited 4Doors"
    carSery.save()

    carSery.detail = "2.4 GT 4Doors"
    carSery.save()

    carSery.year = "2008"
    carSery.detail = "2.4 GLS 4Doors"
    carSery.save()

    carSery.detail = "2.4 GLS Limited 4Doors"
    carSery.save()

    carSery.detail = "2.4 GT 4Doors"
    carSery.save()

    carSery.year = "2009"
    carSery.detail = "2.4 GLS 4Doors"
    carSery.save()

    carSery.detail = "2.4 GLS Limited 4Doors"
    carSery.save()

    carSery.detail = "2.4 GT 4Doors"
    carSery.save()

    carSery.year = "2010"
    carSery.detail = "2.4 GLS Limited 4Doors"
    carSery.save()

    carSery.detail = "2.4 GT 4Doors"
    carSery.save()

    carSery.year = "2011"
    carSery.detail = "2.4 GLS Limited 4Doors"
    carSery.save()

    carSery.detail = "2.4 GT 4Doors"
    carSery.save()

    carSery.year = "2012"
    carSery.detail = "2.4 GLS Limited 4Doors"
    carSery.save()

    carSery.detail = "2.4 GT 4Doors"
    carSery.save()
    //----Space Wagon

    carSery.model = "Strada"
    carSery.year = "1995"
    carSery.detail = "2.5 GL 2Doors"
    carSery.car_group_id = 4
    carSery.car_type_id = 2
    carSery.save()

    carSery.detail = "2.5 GLX 2Doors"
    carSery.save()

    carSery.detail = "2.5 STD 2Doors"
    carSery.save()

    carSery.detail = "2.8 GLX 2Doors"
    carSery.save()

    carSery.year = "1996"
    carSery.detail = "2.5 Economy 2Doors"
    carSery.save()

    carSery.detail = "2.5 GL 2Doors"
    carSery.save()

    carSery.detail = "2.5 GLX 2Doors"
    carSery.save()

    carSery.detail = "2.5 STD 2Doors"
    carSery.save()

    carSery.detail = "2.8 GLX 2Doors"
    carSery.save()

    carSery.year = "1997"
    carSery.detail = "2.5 Economy 2Doors"
    carSery.save()

    carSery.detail = "2.5 GL 2Doors"
    carSery.save()

    carSery.detail = "2.5 GLX 2Doors"
    carSery.save()

    carSery.detail = "2.5 STD 2Doors"
    carSery.save()

    carSery.detail = "2.8 GLX 2Doors"
    carSery.save()

    carSery.year = "1998"
    carSery.detail = "2.5 Economy 2Doors"
    carSery.save()

    carSery.detail = "2.5 GL 2Doors"
    carSery.save()

    carSery.detail = "2.5 GLX 2Doors"
    carSery.save()

    carSery.detail = "2.5 STD 2Doors"
    carSery.save()

    carSery.detail = "2.8 GL 2Doors"
    carSery.save()

    carSery.detail = "2.8 GLX 2Doors"
    carSery.save()

    carSery.year = "1999"
    carSery.detail = "2.5 Economy 2Doors"
    carSery.save()

    carSery.detail = "2.5 GL 2Doors"
    carSery.save()

    carSery.detail = "2.5 GLX 2Doors"
    carSery.save()

    carSery.detail = "2.5 STD 2Doors"
    carSery.save()

    carSery.detail = "2.8 GL 2Doors"
    carSery.save()

    carSery.detail = "2.8 GLS 2Doors"
    carSery.save()

    carSery.detail = "2.8 GLX 2Doors"
    carSery.save()

    carSery.year = "2000"
    carSery.detail = "2.5 GL 2Doors"
    carSery.save()

    carSery.detail = "2.5 GLX 2Doors"
    carSery.save()

    carSery.detail = "2.5 STD 2Doors"
    carSery.save()

    carSery.detail = "2.8 GLS 2Doors"
    carSery.save()

    carSery.detail = "2.8 GLX 2Doors"
    carSery.save()

    carSery.detail = "2.8 Grandis GLS 4Doors"
    carSery.save()

    carSery.detail = "2.8 Grandis GLX 4Doors"
    carSery.save()

    carSery.year = "2001"
    carSery.detail = "2.5 GL 2Doors"
    carSery.save()

    carSery.detail = "2.5 Grandis 4Doors"
    carSery.save()

    carSery.detail = "2.5 STD 2Doors"
    carSery.save()

    carSery.detail = "2.8 GLS 2Doors"
    carSery.save()

    carSery.detail = "2.8 GLX 2Doors"
    carSery.save()

    carSery.detail = "2.8 Grandis GLS 4Doors"
    carSery.save()

    carSery.detail = "2.8 Grandis GLX 4Doors"
    carSery.save()

    carSery.year = "2002"
    carSery.detail = "2.5 GL 2Doors"
    carSery.save()

    carSery.detail = "2.5 Grandis 4Doors"
    carSery.save()

    carSery.detail = "2.5 Grandis VG Turbo 4Doors"
    carSery.save()

    carSery.detail = "2.5 STD 2Doors"
    carSery.save()

    carSery.detail = "2.5 VG Turbo 2Doors"
    carSery.save()

    carSery.detail = "2.8 GLS 2Doors"
    carSery.save()

    carSery.detail = "2.8 GLX 2Doors"
    carSery.save()

    carSery.detail = "2.8 Grandis GLS 24oors"
    carSery.save()

    carSery.detail = "2.8 Grandis GLX 4Doors"
    carSery.save()

    carSery.year = "2003"
    carSery.detail = "2.5 GL 2Doors"
    carSery.save()

    carSery.detail = "2.5 Grandis 4Doors"
    carSery.save()

    carSery.detail = "2.5 Grandis VG Turbo 4Doors"
    carSery.save()

    carSery.detail = "2.5 STD 2Doors"
    carSery.save()

    carSery.detail = "2.5 VG Turbo 2Doors"
    carSery.save()

    carSery.detail = "2.8 GLS 2Doors"
    carSery.save()

    carSery.detail = "2.8 GLX 2Doors"
    carSery.save()

    carSery.detail = "2.8 Grandis GLS 24oors"
    carSery.save()

    carSery.detail = "2.8 Grandis GLX 4Doors"
    carSery.save()

    carSery.detail = "2.8 Grandis Rally Master 4Doors"
    carSery.save()

    carSery.year = "2004"
    carSery.detail = "2.5 GL 2Doors"
    carSery.save()

    carSery.detail = "2.5 Grandis 4Doors"
    carSery.save()

    carSery.detail = "2.5 STD 2Doors"
    carSery.save()

    carSery.detail = "2.8 GLS 2Doors"
    carSery.save()

    carSery.detail = "2.8 GLX 2Doors"
    carSery.save()

    carSery.detail = "2.8 Grandis GLS 24oors"
    carSery.save()

    carSery.detail = "2.8 Grandis GLX 4Doors"
    carSery.save()

    carSery.year = "2005"
    carSery.detail = "2.5 GL 2Doors"
    carSery.save()

    carSery.detail = "2.5 Grandis 4Doors"
    carSery.save()

    carSery.detail = "2.5 STD 2Doors"
    carSery.save()

    carSery.detail = "2.8 GLS 2Doors"
    carSery.save()

    carSery.detail = "2.8 GLX 2Doors"
    carSery.save()

    carSery.detail = "2.8 Grandis GLS 24oors"
    carSery.save()

    carSery.detail = "2.8 Grandis GLX 4Doors"
    carSery.save()
    //----Strada
    //----Strada G-Wagon no group

    carSery.model = "Triton"
    carSery.year = "2005"
    carSery.detail = "2.5 GL 2Doors"
    carSery.car_type_id = 2
    carSery.save()

    carSery.detail = "2.5 GL 4Doors"
    carSery.save()

    carSery.detail = "2.5 GLS 2Doors"
    carSery.save()

    carSery.detail = "2.5 GLS 4Doors"
    carSery.save()

    carSery.detail = "2.5 GLX 2Doors"
    carSery.save()

    carSery.detail = "2.5 GLX 4Doors"
    carSery.save()

    carSery.detail = "3.2 GLS 4Doors"
    carSery.save()

    carSery.year = "2006"
    carSery.detail = "2.5 GL 2Doors"
    carSery.save()

    carSery.detail = "2.5 GL 4Doors"
    carSery.save()

    carSery.detail = "2.5 GLS 2Doors"
    carSery.save()

    carSery.detail = "2.5 GLS 4Doors"
    carSery.save()

    carSery.detail = "2.5 GLS Plus 2Doors"
    carSery.save()

    carSery.detail = "2.5 GLS Plus 4Doors"
    carSery.save()

    carSery.detail = "2.5 GLX 2Doors"
    carSery.save()

    carSery.detail = "2.5 GLX 4Doors"
    carSery.save()

    carSery.detail = "2.5 GLX Plus 2Doors"
    carSery.save()

    carSery.detail = "3.2 GLS 4Doors"
    carSery.save()

    carSery.year = "2007"
    carSery.detail = "2.5 GL 2Doors"
    carSery.save()

    carSery.detail = "2.5 GL 4Doors"
    carSery.save()

    carSery.detail = "2.5 GLS 2Doors"
    carSery.save()

    carSery.detail = "2.5 GLS 4Doors"
    carSery.save()

    carSery.detail = "2.5 GLS Plus 2Doors"
    carSery.save()

    carSery.detail = "2.5 GLS Plus 4Doors"
    carSery.save()

    carSery.detail = "2.5 GLX 2Doors"
    carSery.save()

    carSery.detail = "2.5 GLX 4Doors"
    carSery.save()

    carSery.detail = "2.5 GLX Plus 2Doors"
    carSery.save()

    carSery.detail = "3.2 GLS 4Doors"
    carSery.save()

    carSery.year = "2008"
    carSery.detail = "2.4 GL 2Doors"
    carSery.save()

    carSery.detail = "2.4 GLX 4Doors"
    carSery.save()

    carSery.detail = "2.5 GL 2Doors"
    carSery.save()

    carSery.detail = "2.5 GL 4Doors"
    carSery.save()

    carSery.detail = "2.5 GLS 2Doors"
    carSery.save()

    carSery.detail = "2.5 GLS 4Doors"
    carSery.save()

    carSery.detail = "2.5 GLS Plus 2Doors"
    carSery.save()

    carSery.detail = "2.5 GLS Plus 4Doors"
    carSery.save()

    carSery.detail = "2.5 GLX 2Doors"
    carSery.save()

    carSery.detail = "2.5 GLX 4Doors"
    carSery.save()

    carSery.detail = "2.5 GLX Plus 2Doors"
    carSery.save()

    carSery.detail = "3.2 GLS 4Doors"
    carSery.save()

    carSery.year = "2009"
    carSery.detail = "2.4 GL 2Doors"
    carSery.save()

    carSery.detail = "2.4 GLS Plus 4Doors"
    carSery.save()

    carSery.detail = "2.4 GLX 2Doors"
    carSery.save()

    carSery.detail = "2.4 GLX 4Doors"
    carSery.save()

    carSery.detail = "2.5 GL 2Doors"
    carSery.save()

    carSery.detail = "2.5 GL 4Doors"
    carSery.save()

    carSery.detail = "2.5 GLS 2Doors"
    carSery.save()

    carSery.detail = "2.5 GLS 4Doors"
    carSery.save()

    carSery.detail = "2.5 GLS Plus 2Doors"
    carSery.save()

    carSery.detail = "2.5 GLS Plus 4Doors"
    carSery.save()

    carSery.detail = "2.5 GLX 2Doors"
    carSery.save()

    carSery.detail = "2.5 GLX 4Doors"
    carSery.save()

    carSery.detail = "2.5 GLX Plus 2Doors"
    carSery.save()

    carSery.detail = "3.2 GLS 4Doors"
    carSery.save()

    carSery.year = "2010"
    carSery.detail = "2.4 GL 2Doors"
    carSery.save()

    carSery.detail = "2.4 GLS Plus 4Doors"
    carSery.save()

    carSery.detail = "2.4 GLX 2Doors"
    carSery.save()

    carSery.detail = "2.5 GL 2Doors"
    carSery.save()

    carSery.detail = "2.5 GLS 4Doors"
    carSery.save()

    carSery.detail = "2.5 GLS Plus 2Doors"
    carSery.save()

    carSery.detail = "2.5 GLS Plus 4Doors"
    carSery.save()

    carSery.detail = "2.5 GLX 2Doors"
    carSery.save()

    carSery.detail = "2.5 GLX 4Doors"
    carSery.save()

    carSery.detail = "2.5 GLX Plus 2Doors"
    carSery.save()

    carSery.detail = "3.2 GLS 4Doors"
    carSery.save()

    carSery.year = "2011"
    carSery.detail = "2.4 GL 2Doors"
    carSery.save()

    carSery.detail = "2.4 GLS 4Doors"
    carSery.save()

    carSery.detail = "2.4 GLS Plus 4Doors"
    carSery.save()

    carSery.detail = "2.4 GLX 2Doors"
    carSery.save()

    carSery.detail = "2.5 GL 2Doors"
    carSery.save()

    carSery.detail = "2.5 GLS 4Doors"
    carSery.save()

    carSery.detail = "2.5 GLS Plus 2Doors"
    carSery.save()

    carSery.detail = "2.5 GLS Plus 4Doors"
    carSery.save()

    carSery.detail = "2.5 GLX 2Doors"
    carSery.save()

    carSery.detail = "2.5 GLX 4Doors"
    carSery.save()

    carSery.detail = "2.5 GLX Plus 2Doors"
    carSery.save()

    carSery.year = "2012"
    carSery.detail = "2.4 GL 2Doors"
    carSery.save()

    carSery.detail = "2.4 GLS Plus 2Doors"
    carSery.save()

    carSery.detail = "2.4 GLS Plus 4Doors"
    carSery.save()

    carSery.detail = "2.4 GLX 2Doors"
    carSery.save()

    carSery.detail = "2.4 GLX 4Doors"
    carSery.save()

    carSery.detail = "2.5 GL 2Doors"
    carSery.save()

    carSery.detail = "2.5 GLS 4Doors"
    carSery.save()

    carSery.detail = "2.5 GLS Plus 2Doors"
    carSery.save()

    carSery.detail = "2.5 GLS Plus 4Doors"
    carSery.save()

    carSery.detail = "2.5 GLS-Limited 4Doors"
    carSery.save()

    carSery.detail = "2.5 GLX 2Doors"
    carSery.save()

    carSery.detail = "2.5 GLX 4Doors"
    carSery.save()

    carSery.detail = "2.5 GLX Plus 2Doors"
    carSery.save()

    carSery.year = "2013"
    carSery.detail = "2.4 GL 2Doors"
    carSery.save()

    carSery.detail = "2.4 GLS Plus 2Doors"
    carSery.save()

    carSery.detail = "2.4 GLS Plus 4Doors"
    carSery.save()

    carSery.detail = "2.4 GLX 2Doors"
    carSery.save()

    carSery.detail = "2.4 GLX 4Doors"
    carSery.save()

    carSery.detail = "2.5 GL 2Doors"
    carSery.save()

    carSery.detail = "2.5 GLS 4Doors"
    carSery.save()

    carSery.detail = "2.5 GLS Plus 2Doors"
    carSery.save()

    carSery.detail = "2.5 GLS Plus 4Doors"
    carSery.save()

    carSery.detail = "2.5 GLS-Limited 4Doors"
    carSery.save()

    carSery.detail = "2.5 GLX 2Doors"
    carSery.save()

    carSery.detail = "2.5 GLX 4Doors"
    carSery.save()

    carSery.detail = "2.5 GLX Plus 2Doors"
    carSery.save()

    carSery.year = "2014"
    carSery.detail = "2.4 GL 2Doors"
    carSery.save()

    carSery.detail = "2.4 GLS 4Doors"
    carSery.save()

    carSery.detail = "2.4 GLS Plus 2Doors"
    carSery.save()

    carSery.detail = "2.4 GLS Plus 4Doors"
    carSery.save()

    carSery.detail = "2.4 GLS-Limited 4Doors"
    carSery.save()

    carSery.detail = "2.4 GLX 2Doors"
    carSery.save()

    carSery.detail = "2.4 GLX 4Doors"
    carSery.save()

    carSery.detail = "2.4 GLX Plus 4Doors"
    carSery.save()

    carSery.detail = "2.5 GL 2Doors"
    carSery.save()

    carSery.detail = "2.5 GLS 4Doors"
    carSery.save()

    carSery.detail = "2.5 GLS Plus 2Doors"
    carSery.save()

    carSery.detail = "2.5 GLS Plus 4Doors"
    carSery.save()

    carSery.detail = "2.5 GLS-Limited 4Doors"
    carSery.save()

    carSery.detail = "2.5 GLX 2Doors"
    carSery.save()

    carSery.detail = "2.5 GLX 4Doors"
    carSery.save()

    carSery.detail = "2.5 GLX Plus 2Doors"
    carSery.save()

    carSery.year = "2015"
    carSery.detail = "2.4 GL 2Doors"
    carSery.save()

    carSery.detail = "2.4 GLS 4Doors"
    carSery.save()

    carSery.detail = "2.4 GLS Plus 2Doors"
    carSery.save()

    carSery.detail = "2.4 GLS Plus 4Doors"
    carSery.save()

    carSery.detail = "2.4 GLS-Limited 4Doors"
    carSery.save()

    carSery.detail = "2.4 GLX 2Doors"
    carSery.save()

    carSery.detail = "2.4 GLX Plus 2Doors"
    carSery.save()

    carSery.detail = "2.4 GLX Plus 4Doors"
    carSery.save()

    carSery.detail = "2.5 GL 2Doors"
    carSery.save()

    carSery.detail = "2.5 GLS 2Doors"
    carSery.save()

    carSery.detail = "2.5 GLX 2Doors"
    carSery.save()

    carSery.detail = "2.5 GLX Plus 4Doors"
    carSery.save()

    carSery.year = "2016"
    carSery.detail = "2.4 GL 2Doors"
    carSery.save()

    carSery.detail = "2.4 GLS 4Doors"
    carSery.save()

    carSery.detail = "2.4 GLS Plus 2Doors"
    carSery.save()

    carSery.detail = "2.4 GLS Plus 4Doors"
    carSery.save()

    carSery.detail = "2.4 GLS-Limited 4Doors"
    carSery.save()

    carSery.detail = "2.4 GLS-Limited Plus 2Doors"
    carSery.save()

    carSery.detail = "2.4 GLS-Limited Plus 4Doors"
    carSery.save()

    carSery.detail = "2.4 GLX 2Doors"
    carSery.save()

    carSery.detail = "2.4 GLX Plus 2Doors"
    carSery.save()

    carSery.detail = "2.4 GLX Plus 4Doors"
    carSery.save()

    carSery.detail = "2.5 GL 2Doors"
    carSery.save()

    carSery.detail = "2.5 GLS 2Doors"
    carSery.save()

    carSery.detail = "2.5 GLX 2Doors"
    carSery.save()

    carSery.detail = "2.5 GLX 4Doors"
    carSery.save()

    carSery.detail = "2.5 GLX Plus 4Doors"
    carSery.save()

    carSery.year = "2017"
    carSery.detail = "2.4 ATHLETE 4Doors"
    carSery.save()

    carSery.detail = "2.4 GL 2Doors"
    carSery.save()

    carSery.detail = "2.4 GLS-Limited 4Doors"
    carSery.save()

    carSery.detail = "2.4 GLS-Limited Plus 2Doors"
    carSery.save()

    carSery.detail = "2.4 GLS-Limited Plus 4Doors"
    carSery.save()

    carSery.detail = "2.4 GLX 2Doors"
    carSery.save()

    carSery.detail = "2.4 GLX Plus 2Doors"
    carSery.save()

    carSery.detail = "2.4 GLX Plus 4Doors"
    carSery.save()

    carSery.detail = "2.4 Plus ATHLETE 4Doors"
    carSery.save()

    carSery.detail = "2.5 GL 2Doors"
    carSery.save()

    carSery.detail = "2.5 GLX 2Doors"
    carSery.save()

    carSery.detail = "2.5 GLX 4Doors"
    carSery.save()

    carSery.year = "2018"
    carSery.detail = "2.4 ATHLETE 4Doors"
    carSery.save()

    carSery.detail = "2.4 GL 2Doors"
    carSery.save()

    carSery.detail = "2.4 GLS 4Doors"
    carSery.save()

    carSery.detail = "2.4 GLS Plus 2Doors"
    carSery.save()

    carSery.detail = "2.4 GLS Plus 4Doors"
    carSery.save()

    carSery.detail = "2.4 GLS-Limited 4Doors"
    carSery.save()

    carSery.detail = "2.4 GLS-Limited Plus 2Doors"
    carSery.save()

    carSery.detail = "2.4 GLS-Limited Plus 4Doors"
    carSery.save()

    carSery.detail = "2.4 GLX Plus 2Doors"
    carSery.save()

    carSery.detail = "2.4 GLX Plus 4Doors"
    carSery.save()

    carSery.detail = "2.4 GT Plus 2Doors"
    carSery.save()

    carSery.detail = "2.4 GT Plus 4Doors"
    carSery.save()

    carSery.detail = "2.4 GT Premium 4Doors"
    carSery.save()

    carSery.detail = "2.4 GT Premium Plus 4Doors"
    carSery.save()

    carSery.detail = "2.4 Plus ATHLETE 2Doors"
    carSery.save()

    carSery.detail = "2.4 Plus ATHLETE 4Doors"
    carSery.save()

    carSery.detail = "2.5 GL 2Doors"
    carSery.save()

    carSery.detail = "2.5 GLX 2Doors"
    carSery.save()

    carSery.detail = "2.5 GLX 4Doors"
    carSery.save()

    carSery.year = "2019"
    carSery.detail = "2.4 GL 2Doors"
    carSery.save()

    carSery.detail = "2.4 GLS 4Doors"
    carSery.save()

    carSery.detail = "2.4 GLS Plus 2Doors"
    carSery.save()

    carSery.detail = "2.4 GLS Plus 4Doors"
    carSery.save()

    carSery.detail = "2.4 GLX Plus 2Doors"
    carSery.save()

    carSery.detail = "2.4 GLX Plus 4Doors"
    carSery.save()

    carSery.detail = "2.4 GT Plus 2Doors"
    carSery.save()

    carSery.detail = "2.4 GT Plus 4Doors"
    carSery.save()

    carSery.detail = "2.4 GT Premium 4Doors"
    carSery.save()

    carSery.detail = "2.4 GT Premium Plus 4Doors"
    carSery.save()

    carSery.detail = "2.5 GL 2Doors"
    carSery.save()

    carSery.detail = "2.5 GLX 2Doors"
    carSery.save()

    carSery.detail = "2.5 GLX 4Doors"
    carSery.save()
    //----Triton
    //----Xpander no group
    //----Mitsubishi End

    //----Mazda Start
    carSery.brand = "Mazda"
    carSery.model = "121"
    carSery.year = "1992"
    carSery.detail = "1.3 4Doors"
    carSery.car_group_id = 3
    carSery.car_type_id = 1
    carSery.save()

    carSery.year = "1993"
    carSery.save()

    carSery.year = "1994"
    carSery.save()

    carSery.year = "1995"
    carSery.save()
    //----121

    carSery.model = "2"
    carSery.year = "2009"
    carSery.detail = "1.5 R 4Doors"
    carSery.car_group_id = 4
    carSery.save()

    carSery.detail = "1.5 S 4Doors"
    carSery.save()

    carSery.detail = "1.5 V 4Doors"
    carSery.save()

    carSery.year = "2010"
    carSery.detail = "1.5 Groove 4Doors"
    carSery.save()

    carSery.detail = "1.5 Maxx Sports 4Doors"
    carSery.save()

    carSery.detail = "1.5 R 4Doors"
    carSery.save()

    carSery.detail = "1.5 S 4Doors"
    carSery.save()

    carSery.detail = "1.5 Spirit Sports 4Doors"
    carSery.save()

    carSery.detail = "1.5 Sports Groove 4Doors"
    carSery.save()

    carSery.detail = "1.5 V 4Doors"
    carSery.save()

    carSery.year = "2011"
    carSery.detail = "1.5 Elegance Groove 4Doors"
    carSery.save()

    carSery.detail = "1.5 Elegance Maxx 4Doors"
    carSery.save()

    carSery.detail = "1.5 Elegance Spirit 4Doors"
    carSery.save()

    carSery.detail = "1.5 Groove 4Doors"
    carSery.save()

    carSery.detail = "1.5 Maxx Sports 4Doors"
    carSery.save()

    carSery.detail = "1.5 Spirit Sports 4Doors"
    carSery.save()

    carSery.detail = "1.5 Sports Groove 4Doors"
    carSery.save()

    carSery.detail = "1.5 Sports Maxx 4Doors"
    carSery.save()

    carSery.detail = "1.5 Sports Spirit 4Doors"
    carSery.save()

    carSery.year = "2012"
    carSery.detail = "1.5 Elegance Groove 4Doors"
    carSery.save()

    carSery.detail = "1.5 Elegance Maxx 4Doors"
    carSery.save()

    carSery.detail = "1.5 Elegance Spirit 4Doors"
    carSery.save()

    carSery.detail = "1.5 Sports Groove 4Doors"
    carSery.save()

    carSery.detail = "1.5 Sports Maxx 4Doors"
    carSery.save()

    carSery.detail = "1.5 Sports Maxx Sports 4Doors"
    carSery.save()

    carSery.detail = "1.5 Sports Spirit 4Doors"
    carSery.save()

    carSery.year = "2013"
    carSery.detail = "1.5 Elegance Groove 4Doors"
    carSery.save()

    carSery.detail = "1.5 Elegance Maxx 4Doors"
    carSery.save()

    carSery.detail = "1.5 Elegance Spirit 4Doors"
    carSery.save()

    carSery.detail = "1.5 Sports Groove 4Doors"
    carSery.save()

    carSery.detail = "1.5 Sports Maxx Sports 4Doors"
    carSery.save()

    carSery.detail = "1.5 Sports Spirit 4Doors"
    carSery.save()

    carSery.year = "2014"
    carSery.detail = "1.5 Elegance Groove 4Doors"
    carSery.save()

    carSery.detail = "1.5 Elegance Maxx 4Doors"
    carSery.save()

    carSery.detail = "1.5 Elegance Spirit 4Doors"
    carSery.save()

    carSery.detail = "1.5 Sports Groove 4Doors"
    carSery.save()

    carSery.detail = "1.5 Sports Maxx Sports 4Doors"
    carSery.save()

    carSery.detail = "1.5 Sports Spirit 4Doors"
    carSery.save()

    carSery.year = "2015"
    carSery.detail = "1.3 High 4Doors"
    carSery.save()

    carSery.detail = "1.3 High Connect 4Doors"
    carSery.save()

    carSery.detail = "1.3 High Plus 4Doors"
    carSery.save()

    carSery.detail = "1.3 Sports High 4Doors"
    carSery.save()

    carSery.detail = "1.3 Sports High Connect 4Doors"
    carSery.save()

    carSery.detail = "1.3 Sports High Plus 4Doors"
    carSery.save()

    carSery.detail = "1.3 Sports Standard 4Doors"
    carSery.save()
  
    carSery.detail = "1.5 Elegance Groove 4Doors"
    carSery.save()

    carSery.detail = "1.5 Elegance Maxx 4Doors"
    carSery.save()

    carSery.detail = "1.5 Elegance Spirit 4Doors"
    carSery.save()

    carSery.detail = "1.5 Sports Groove 4Doors"
    carSery.save()

    carSery.detail = "1.5 Sports Maxx Sports 4Doors"
    carSery.save()

    carSery.detail = "1.5 Sports Spirit 4Doors"
    carSery.save()

    carSery.detail = "1.5 XD 4Doors"
    carSery.save()

    carSery.detail = "1.5 XD High 4Doors"
    carSery.save()

    carSery.detail = "1.5 XD High Connect 4Doors"
    carSery.save()

    carSery.detail = "1.5 XD High Plus 4Doors"
    carSery.save()

    carSery.detail = "1.5 XD High Plus L 4Doors"
    carSery.save()

    carSery.detail = "1.5 XD Sport High Plus L 4Doors"
    carSery.save()

    carSery.detail = "1.5 XD Sports 4Doors"
    carSery.save()

    carSery.detail = "1.5 XD Sports High 4Doors"
    carSery.save()

    carSery.detail = "1.5 XD Sports High Connect 4Doors"
    carSery.save()

    carSery.detail = "1.5 XD Sports High Plus 4Doors"
    carSery.save()

    carSery.year = "2016"
    carSery.detail = "1.3 High 4Doors"
    carSery.save()

    carSery.detail = "1.3 High Connect 4Doors"
    carSery.save()

    carSery.detail = "1.3 High Plus 4Doors"
    carSery.save()

    carSery.detail = "1.3 Sports High 4Doors"
    carSery.save()

    carSery.detail = "1.3 Sports High Connect 4Doors"
    carSery.save()

    carSery.detail = "1.3 Sports High Plus 4Doors"
    carSery.save()

    carSery.detail = "1.3 Sports Standard 4Doors"
    carSery.save()

    carSery.detail = "1.5 XD 4Doors"
    carSery.save()

    carSery.detail = "1.5 XD High 4Doors"
    carSery.save()

    carSery.detail = "1.5 XD High Connect 4Doors"
    carSery.save()

    carSery.detail = "1.5 XD High Plus 4Doors"
    carSery.save()

    carSery.detail = "1.5 XD High Plus L 4Doors"
    carSery.save()

    carSery.detail = "1.5 XD Sport High Plus L 4Doors"
    carSery.save()

    carSery.detail = "1.5 XD Sports 4Doors"
    carSery.save()

    carSery.detail = "1.5 XD Sports High 4Doors"
    carSery.save()

    carSery.detail = "1.5 XD Sports High Connect 4Doors"
    carSery.save()

    carSery.detail = "1.5 XD Sports High Plus 4Doors"
    carSery.save()

    carSery.year = "2015"
    carSery.detail = "1.3 High 4Doors"
    carSery.save()

    carSery.detail = "1.3 High Connect 4Doors"
    carSery.save()

    carSery.detail = "1.3 High Plus 4Doors"
    carSery.save()

    carSery.detail = "1.3 Sports High 4Doors"
    carSery.save()

    carSery.detail = "1.3 Sports High Connect 4Doors"
    carSery.save()

    carSery.detail = "1.3 Sports High Plus 4Doors"
    carSery.save()

    carSery.detail = "1.3 Sports Standard 4Doors"
    carSery.save()
  
    carSery.detail = "1.3 Standard 4Doors"
    carSery.save()

    carSery.detail = "1.5 XD 4Doors"
    carSery.save()

    carSery.detail = "1.5 XD High 4Doors"
    carSery.save()

    carSery.detail = "1.5 XD High Connect 4Doors"
    carSery.save()

    carSery.detail = "1.5 XD High Plus 4Doors"
    carSery.save()

    carSery.detail = "1.5 XD High Plus L 4Doors"
    carSery.save()

    carSery.detail = "1.5 XD Sport High Plus L 4Doors"
    carSery.save()

    carSery.detail = "1.5 XD Sports 4Doors"
    carSery.save()

    carSery.detail = "1.5 XD Sports High 4Doors"
    carSery.save()

    carSery.detail = "1.5 XD Sports High Connect 4Doors"
    carSery.save()

    carSery.detail = "1.5 XD Sports High Plus 4Doors"
    carSery.save()

    carSery.year = "2018"
    carSery.detail = "1.3 High 4Doors"
    carSery.save()

    carSery.detail = "1.3 High Connect 4Doors"
    carSery.save()

    carSery.detail = "1.3 High Plus 4Doors"
    carSery.save()

    carSery.detail = "1.3 Sports High 4Doors"
    carSery.save()

    carSery.detail = "1.3 Sports High Connect 4Doors"
    carSery.save()

    carSery.detail = "1.3 Sports High Plus 4Doors"
    carSery.save()

    carSery.detail = "1.3 Sports Standard 4Doors"
    carSery.save()
  
    carSery.detail = "1.3 Standard 4Doors"
    carSery.save()

    carSery.detail = "1.5 XD 4Doors"
    carSery.save()

    carSery.detail = "1.5 XD High Connect 4Doors"
    carSery.save()

    carSery.detail = "1.5 XD High Plus L 4Doors"
    carSery.save()

    carSery.detail = "1.5 XD Sport High Plus L 4Doors"
    carSery.save()

    carSery.detail = "1.5 XD Sports 4Doors"
    carSery.save()

    carSery.detail = "1.5 XD Sports High Connect 4Doors"
    carSery.save()

    carSery.year = "2019"
    carSery.detail = "1.3 High 4Doors"
    carSery.save()

    carSery.detail = "1.3 High Connect 4Doors"
    carSery.save()

    carSery.detail = "1.3 High Plus 4Doors"
    carSery.save()

    carSery.detail = "1.3 Sports High 4Doors"
    carSery.save()

    carSery.detail = "1.3 Sports High Connect 4Doors"
    carSery.save()

    carSery.detail = "1.3 Sports High Plus 4Doors"
    carSery.save()

    carSery.detail = "1.3 Sports Standard 4Doors"
    carSery.save()
  
    carSery.detail = "1.3 Standard 4Doors"
    carSery.save()

    carSery.detail = "1.5 XD 4Doors"
    carSery.save()

    carSery.detail = "1.5 XD High Connect 4Doors"
    carSery.save()

    carSery.detail = "1.5 XD High Plus L 4Doors"
    carSery.save()

    carSery.detail = "1.5 XD Sport High Plus L 4Doors"
    carSery.save()

    carSery.detail = "1.5 XD Sports 4Doors"
    carSery.save()
    
    carSery.detail = "1.5 XD Sports High Connect 4Doors"
    carSery.save()
    //----2

    carSery.model = "3"
    carSery.year = "2004"
    carSery.detail = "1.6 S 4Doors"
    carSery.car_group_id = 3
    carSery.save()

    carSery.detail = "1.6 V 4Doors"
    carSery.save()

    carSery.detail = "2.0 R 4Doors"
    carSery.save()

    carSery.detail = "2.0 R Sport 4Doors"
    carSery.save()

    carSery.year = "2005"
    carSery.detail = "1.6 S 4Doors"
    carSery.save()

    carSery.detail = "1.6 V 4Doors"
    carSery.save()

    carSery.detail = "2.0 R 4Doors"
    carSery.save()

    carSery.detail = "2.0 R Sport 4Doors"
    carSery.save()

    carSery.year = "2006"
    carSery.detail = "1.6 S 4Doors"
    carSery.save()

    carSery.detail = "1.6 V 4Doors"
    carSery.save()

    carSery.detail = "2.0 R 4Doors"
    carSery.save()

    carSery.detail = "2.0 R Sport 4Doors"
    carSery.save()

    carSery.year = "2007"
    carSery.detail = "1.6 Groove 4Doors"
    carSery.save()

    carSery.detail = "1.6 S 4Doors"
    carSery.save()

    carSery.detail = "1.6 Spirit 4Doors"
    carSery.save()

    carSery.detail = "1.6 Spirit Sports 4Doors"
    carSery.save()

    carSery.detail = "1.6 V 4Doors"
    carSery.save()

    carSery.detail = "2.0 Maxx 4Doors"
    carSery.save()

    carSery.detail = "2.0 Maxx Sports 4Doors"
    carSery.save()

    carSery.detail = "2.0 R 4Doors"
    carSery.save()

    carSery.detail = "2.0 R Sport 4Doors"
    carSery.save()

    carSery.year = "2008"
    carSery.detail = "1.6 Groove 4Doors"
    carSery.save()

    carSery.detail = "1.6 Spirit 4Doors"
    carSery.save()

    carSery.detail = "1.6 Spirit Sports 4Doors"
    carSery.save()

    carSery.detail = "2.0 Maxx 4Doors"
    carSery.save()

    carSery.detail = "2.0 Maxx Sports 4Doors"
    carSery.save()

    carSery.year = "2009"
    carSery.detail = "1.6 Groove 4Doors"
    carSery.save()

    carSery.detail = "1.6 i-Move 4Doors"
    carSery.save()

    carSery.detail = "1.6 Life 4Doors"
    carSery.save()

    carSery.detail = "1.6 Spirit 4Doors"
    carSery.save()

    carSery.detail = "1.6 Spirit Sports 4Doors"
    carSery.save()

    carSery.detail = "2.0 Maxx 4Doors"
    carSery.save()

    carSery.detail = "2.0 Maxx Sports 4Doors"
    carSery.save()

    carSery.detail = "2.0 Play 4Doors"
    carSery.save()

    carSery.detail = "2.0 S-Move 4Doors"
    carSery.save()

    carSery.year = "2010"
    carSery.detail = "1.6 Groove 4Doors"
    carSery.save()

    carSery.detail = "1.6 i-Move 4Doors"
    carSery.save()

    carSery.detail = "1.6 Life 4Doors"
    carSery.save()

    carSery.detail = "1.6 Spirit 4Doors"
    carSery.save()

    carSery.detail = "1.6 Spirit Sports 4Doors"
    carSery.save()

    carSery.detail = "2.0 Maxx 4Doors"
    carSery.save()

    carSery.detail = "2.0 Maxx Sports 4Doors"
    carSery.save()

    carSery.detail = "2.0 Play 4Doors"
    carSery.save()

    carSery.detail = "2.0 S-Move 4Doors"
    carSery.save()

    carSery.year = "2011"
    carSery.detail = "1.6 Groove 4Doors"
    carSery.save()

    carSery.detail = "1.6 Spirit 4Doors"
    carSery.save()

    carSery.detail = "1.6 Spirit Sports 4Doors"
    carSery.save()

    carSery.detail = "2.0 Maxx 4Doors"
    carSery.save()

    carSery.detail = "2.0 Maxx Sports 4Doors"
    carSery.save()

    carSery.year = "2012"
    carSery.detail = "1.6 Groove 4Doors"
    carSery.save()

    carSery.detail = "1.6 Spirit 4Doors"
    carSery.save()

    carSery.detail = "1.6 Spirit Sports 4Doors"
    carSery.save()

    carSery.detail = "2.0 Maxx 4Doors"
    carSery.save()

    carSery.detail = "2.0 Maxx Sports 4Doors"
    carSery.save()

    carSery.year = "2013"
    carSery.detail = "1.6 Groove 4Doors"
    carSery.save()

    carSery.detail = "1.6 Spirit 4Doors"
    carSery.save()

    carSery.detail = "1.6 Spirit Plus 4Doors"
    carSery.save()

    carSery.detail = "1.6 Spirit Sports 4Doors"
    carSery.save()

    carSery.detail = "1.6 Spirit Sports Plus 4Doors"
    carSery.save()

    carSery.detail = "2.0 Maxx 4Doors"
    carSery.save()

    carSery.detail = "2.0 Maxx Sports 4Doors"
    carSery.save()

    carSery.detail = "2.0 Spirit Plus 4Doors"
    carSery.save()

    carSery.year = "2014"
    carSery.detail = "1.6 Groove 4Doors"
    carSery.save()

    carSery.detail = "1.6 Spirit 4Doors"
    carSery.save()

    carSery.detail = "1.6 Spirit Plus 4Doors"
    carSery.save()

    carSery.detail = "1.6 Spirit Sports 4Doors"
    carSery.save()

    carSery.detail = "1.6 Spirit Sports Plus 4Doors"
    carSery.save()

    carSery.detail = "2.0 C 4Doors"
    carSery.save()

    carSery.detail = "2.0 C Sports 4Doors"
    carSery.save()

    carSery.detail = "2.0 E 4Doors"
    carSery.save()

    carSery.detail = "2.0 E Sports 4Doors"
    carSery.save()

    carSery.detail = "2.0 Maxx 4Doors"
    carSery.save()

    carSery.detail = "2.0 Maxx Sports 4Doors"
    carSery.save()

    carSery.detail = "2.0 S 4Doors"
    carSery.save()

    carSery.detail = "2.0 S Sports 4Doors"
    carSery.save()

    carSery.detail = "2.0 SP Sports 4Doors"
    carSery.save()

    carSery.detail = "2.0 Spirit Plus 4Doors"
    carSery.save()

    carSery.year = "2015"
    carSery.detail = "2.0 C 4Doors"
    carSery.save()

    carSery.detail = "2.0 C Sports 4Doors"
    carSery.save()

    carSery.detail = "2.0 E 4Doors"
    carSery.save()

    carSery.detail = "2.0 E Sports 4Doors"
    carSery.save()

    carSery.detail = "2.0 S 4Doors"
    carSery.save()

    carSery.detail = "2.0 S Sports 4Doors"
    carSery.save()

    carSery.detail = "2.0 SP Sports 4Doors"
    carSery.save()

    carSery.year = "2016"
    carSery.detail = "2.0 C 4Doors"
    carSery.save()

    carSery.detail = "2.0 C Sports 4Doors"
    carSery.save()

    carSery.detail = "2.0 E 4Doors"
    carSery.save()

    carSery.detail = "2.0 E Sports 4Doors"
    carSery.save()

    carSery.detail = "2.0 S 4Doors"
    carSery.save()

    carSery.detail = "2.0 S Sports 4Doors"
    carSery.save()

    carSery.detail = "2.0 SP Sports 4Doors"
    carSery.save()

    carSery.year = "2017"
    carSery.detail = "2.0 C 4Doors"
    carSery.save()

    carSery.detail = "2.0 C Sports 4Doors"
    carSery.save()

    carSery.detail = "2.0 E 4Doors"
    carSery.save()

    carSery.detail = "2.0 E Sports 4Doors"
    carSery.save()

    carSery.detail = "2.0 S 4Doors"
    carSery.save()

    carSery.detail = "2.0 S Sports 4Doors"
    carSery.save()

    carSery.detail = "2.0 SP 4Doors"
    carSery.save()

    carSery.detail = "2.0 SP Sports 4Doors"
    carSery.save()

    carSery.year = "2018"
    carSery.detail = "2.0 C 4Doors"
    carSery.save()

    carSery.detail = "2.0 C Sports 4Doors"
    carSery.save()

    carSery.detail = "2.0 E 4Doors"
    carSery.save()

    carSery.detail = "2.0 E Sports 4Doors"
    carSery.save()

    carSery.detail = "2.0 S 4Doors"
    carSery.save()

    carSery.detail = "2.0 S Sports 4Doors"
    carSery.save()

    carSery.detail = "2.0 SP 4Doors"
    carSery.save()

    carSery.detail = "2.0 SP Sports 4Doors"
    carSery.save()

    carSery.year = "2019"
    carSery.detail = "2.0 C 4Doors"
    carSery.save()

    carSery.detail = "2.0 C Sports 4Doors"
    carSery.save()

    carSery.detail = "2.0 E 4Doors"
    carSery.save()

    carSery.detail = "2.0 E Sports 4Doors"
    carSery.save()

    carSery.detail = "2.0 S 4Doors"
    carSery.save()

    carSery.detail = "2.0 S Sports 4Doors"
    carSery.save()

    carSery.detail = "2.0 SP 4Doors"
    carSery.save()

    carSery.detail = "2.0 SP Sports 4Doors"
    carSery.save()
    //----3

    carSery.model = "323"
    carSery.year = "1992"
    carSery.detail = "1.6 GLX 4Doors"
    carSery.car_group_id = 4
    carSery.save()

    carSery.year = "1993"
    carSery.detail = "1.3 2Doors"
    carSery.save()

    carSery.detail = "1.6 GLX 4Doors"
    carSery.save()

    carSery.detail = "1.6 LX 4Doors"
    carSery.save()

    carSery.detail = "1.8 Astina 4Doors"
    carSery.save()

    carSery.year = "1994"
    carSery.detail = "1.3 2Doors"
    carSery.save()

    carSery.detail = "1.6 GLX 4Doors"
    carSery.save()

    carSery.detail = "1.6 LX 4Doors"
    carSery.save()

    carSery.detail = "1.8 Astina 4Doors"
    carSery.save()

    carSery.year = "1995"
    carSery.detail = "1.3 2Doors"
    carSery.save()

    carSery.detail = "1.6 GLX 4Doors"
    carSery.save()

    carSery.detail = "1.6 SGLX 4Doors"
    carSery.save()

    carSery.detail = "1.8 Astina GTi 4Doors"
    carSery.save()

    carSery.year = "1996"
    carSery.detail = "1.6 GLX 4Doors"
    carSery.save()

    carSery.detail = "1.6 SGLX 4Doors"
    carSery.save()

    carSery.detail = "1.8 Astina GTi 4Doors"
    carSery.save()

    carSery.year = "1997"
    carSery.detail = "1.6 GLX 4Doors"
    carSery.save()

    carSery.detail = "1.6 SGLX 4Doors"
    carSery.save()

    carSery.detail = "1.8 Astina EGI 4Doors"
    carSery.save()

    carSery.detail = "1.8 Astina GTi 4Doors"
    carSery.save()

    carSery.year = "1998"
    carSery.detail = "1.6 GLX 4Doors"
    carSery.save()

    carSery.detail = "1.6 SGLX 4Doors"
    carSery.save()

    carSery.detail = "1.8 Astina EGI 4Doors"
    carSery.save()

    carSery.detail = "1.8 Astina GTi 4Doors"
    carSery.save()

    carSery.year = "1999"
    carSery.detail = "1.6 SGLX 4Doors"
    carSery.save()

    carSery.detail = "1.8 Astina EGI 4Doors"
    carSery.save()

    carSery.year = "2000"
    carSery.detail = "1.6 Protege GLX 4Doors"
    carSery.save()

    carSery.detail = "1.6 Protege LX 4Doors"
    carSery.save()

    carSery.detail = "1.6 SGLX 4Doors"
    carSery.save()

    carSery.detail = "1.8 Protege GT 4Doors"
    carSery.save()

    carSery.year = "2001"
    carSery.detail = "1.6 Protege GLX 4Doors"
    carSery.save()

    carSery.detail = "1.6 Protege LX 4Doors"
    carSery.save()

    carSery.detail = "1.8 Protege GT 4Doors"
    carSery.save()

    carSery.detail = "1.8 Protege Ninja 4Doors"
    carSery.save()

    carSery.detail = "1.8 Protege Sport GT 4Doors"
    carSery.save()

    carSery.year = "2002"
    carSery.detail = "1.6 Protege GLX 4Doors"
    carSery.save()

    carSery.detail = "1.6 Protege LX 4Doors"
    carSery.save()

    carSery.detail = "1.8 Protege Ninja 4Doors"
    carSery.save()

    carSery.detail = "2.0 Protege GT 4Doors"
    carSery.save()

    carSery.year = "2003"
    carSery.detail = "1.6 Protege G-Force 4Doors"
    carSery.save()

    carSery.detail = "1.6 Protege GLX 4Doors"
    carSery.save()

    carSery.detail = "1.6 Protege LX 4Doors"
    carSery.save()

    carSery.detail = "1.6 Protege Sport 4Doors"
    carSery.save()

    carSery.detail = "1.8 Protege Sport 4Doors"
    carSery.save()

    carSery.detail = "2.0 Protege GT 4Doors"
    carSery.save()

    carSery.detail = "2.0 Protege Sport 4Doors"
    carSery.save()

    carSery.year = "2004"
    carSery.detail = "1.6 Protege GLX 4Doors"
    carSery.save()

    carSery.detail = "1.6 Protege LX 4Doors"
    carSery.save()

    carSery.detail = "1.6 Protege Sport 4Doors"
    carSery.save()

    carSery.detail = "2.0 Protege Sport 4Doors"
    carSery.save()
    //----323

    carSery.model = "626"
    carSery.year = "1992"
    carSery.detail = "2.0 Cronos 4Doors"
    carSery.car_group_id = 3
    carSery.save()

    carSery.year = "1993"
    carSery.save()

    carSery.year = "1994"
    carSery.save()

    carSery.detail = "2.0 Cronos V6 4Doors"
    carSery.save()

    carSery.year = "1995"
    carSery.detail = "2.0 Cronos 4Doors"
    carSery.save()

    carSery.detail = "2.0 Cronos V6 4Doors"
    carSery.save()

    carSery.year = "1996"
    carSery.detail = "2.0 Cronos 4Doors"
    carSery.save()

    carSery.detail = "2.0 Cronos V6 4Doors"
    carSery.save()

    carSery.year = "1997"
    carSery.detail = "2.0 Cronos 4Doors"
    carSery.save()

    carSery.detail = "2.0 Cronos V6 4Doors"
    carSery.save()

    carSery.detail = "2.0 GLX 4Doors"
    carSery.save()

    carSery.detail = "2.0 LTD 4Doors"
    carSery.save()

    carSery.year = "1998"
    carSery.detail = "2.0 GLX 4Doors"
    carSery.save()

    carSery.detail = "2.0 LTD 4Doors"
    carSery.save()

    carSery.year = "1999"
    carSery.detail = "2.0 GLX 4Doors"
    carSery.save()
    //----626
    //----929 no group

    carSery.model = "BT-50"
    carSery.year = "2006"
    carSery.detail = "2.5 S 2Doors"
    carSery.car_type_id = 2
    carSery.save()

    carSery.detail = "2.5 S 4Doors"
    carSery.save()

    carSery.detail = "2.5 V 2Doors"
    carSery.save()

    carSery.detail = "2.5 V 4Doors"
    carSery.save()

    carSery.detail = "2.5 V High 2Doors"
    carSery.save()

    carSery.detail = "3.0 R 2Doors"
    carSery.save()

    carSery.detail = "3.0 R 4Doors"
    carSery.save()

    carSery.year = "2007"
    carSery.detail = "2.5 Hi-Racer 2Doors"
    carSery.save()

    carSery.detail = "2.5 Hi-Racer 4Doors"
    carSery.save()

    carSery.detail = "2.5 Hi-Racer Zei-Go 2Doors"
    carSery.save()

    carSery.detail = "2.5 S 2Doors"
    carSery.save()

    carSery.detail = "2.5 S 4Doors"
    carSery.save()

    carSery.detail = "2.5 V 2Doors"
    carSery.save()

    carSery.detail = "2.5 V 4Doors"
    carSery.save()

    carSery.detail = "2.5 V High 2Doors"
    carSery.save()

    carSery.detail = "2.5 V High 4Doors"
    carSery.save()

    carSery.detail = "2.5 V High SpeedRunner 2Doors"
    carSery.save()

    carSery.detail = "2.5 V SpeedRunner 2Doors"
    carSery.save()

    carSery.detail = "3.0 R 2Doors"
    carSery.save()

    carSery.detail = "3.0 R 4Doors"
    carSery.save()

    carSery.year = "2008"
    carSery.detail = "2.5 Hi-Racer 2Doors"
    carSery.save()

    carSery.detail = "2.5 Hi-Racer 4Doors"
    carSery.save()

    carSery.detail = "2.5 Hi-Racer Sport 2Doors"
    carSery.save()

    carSery.detail = "2.5 Hi-Racer Sport 4Doors"
    carSery.save()

    carSery.detail = "2.5 S 2Doors"
    carSery.save()

    carSery.detail = "2.5 S 4Doors"
    carSery.save()

    carSery.detail = "2.5 V 2Doors"
    carSery.save()

    carSery.detail = "2.5 V 4Doors"
    carSery.save()

    carSery.detail = "3.0 R 2Doors"
    carSery.save()

    carSery.detail = "3.0 R 4Doors"
    carSery.save()

    carSery.year = "2009"
    carSery.detail = "2.5 Hi-Racer 2Doors"
    carSery.save()

    carSery.detail = "2.5 Hi-Racer 4Doors"
    carSery.save()

    carSery.detail = "2.5 Hi-Racer Sport 2Doors"
    carSery.save()

    carSery.detail = "2.5 Hi-Racer Sport 4Doors"
    carSery.save()

    carSery.detail = "2.5 S 2Doors"
    carSery.save()

    carSery.detail = "2.5 S 4Doors"
    carSery.save()

    carSery.detail = "2.5 V 2Doors"
    carSery.save()

    carSery.detail = "2.5 V 4Doors"
    carSery.save()

    carSery.detail = "3.0 R 2Doors"
    carSery.save()

    carSery.detail = "3.0 R 4Doors"
    carSery.save()

    carSery.year = "2010"
    carSery.detail = "2.5 Hi-Racer 2Doors"
    carSery.save()

    carSery.detail = "2.5 Hi-Racer 4Doors"
    carSery.save()

    carSery.detail = "2.5 Hi-Racer Road Master 2Doors"
    carSery.save()

    carSery.detail = "2.5 S 2Doors"
    carSery.save()

    carSery.detail = "2.5 S 4Doors"
    carSery.save()

    carSery.detail = "2.5 V 2Doors"
    carSery.save()

    carSery.detail = "2.5 V 4Doors"
    carSery.save()

    carSery.detail = "3.0 R 2Doors"
    carSery.save()

    carSery.detail = "3.0 R 4Doors"
    carSery.save()

    carSery.year = "2011"
    carSery.detail = "2.5 Hi-Racer 2Doors"
    carSery.save()

    carSery.detail = "2.5 Hi-Racer 4Doors"
    carSery.save()

    carSery.detail = "2.5 Hi-Racer Road Master 2Doors"
    carSery.save()

    carSery.detail = "2.5 S 2Doors"
    carSery.save()

    carSery.detail = "2.5 S 4Doors"
    carSery.save()

    carSery.detail = "2.5 V 2Doors"
    carSery.save()

    carSery.detail = "2.5 V 4Doors"
    carSery.save()

    carSery.detail = "3.0 R 2Doors"
    carSery.save()

    carSery.detail = "3.0 R 4Doors"
    carSery.save()

    carSery.year = "2012"
    carSery.detail = "2.5 Hi-Racer 2Doors"
    carSery.save()

    carSery.detail = "2.5 Hi-Racer 4Doors"
    carSery.save()

    carSery.detail = "2.5 Hi-Racer Road Master 2Doors"
    carSery.save()

    carSery.detail = "2.5 S 2Doors"
    carSery.save()

    carSery.detail = "2.5 S 4Doors"
    carSery.save()

    carSery.detail = "2.5 V 2Doors"
    carSery.save()

    carSery.detail = "2.5 V 4Doors"
    carSery.save()

    carSery.detail = "3.0 R 2Doors"
    carSery.save()

    carSery.detail = "3.0 R 4Doors"
    carSery.save()
    //----BT-50

    carSery.model = "BT-50 PRO"
    carSery.detail = "2.2 Hi-Racer 2Doors"
    carSery.save()

    carSery.detail = "2.2 Hi-Racer 4Doors"
    carSery.save()

    carSery.detail = "2.2 S 2Doors"
    carSery.save()

    carSery.detail = "2.2 S 4Doors"
    carSery.save()

    carSery.detail = "2.2 V 2Doors"
    carSery.save()

    carSery.detail = "2.2 V 4Doors"
    carSery.save()

    carSery.detail = "3.2 R 2Doors"
    carSery.save()

    carSery.detail = "3.2 R 4Doors"
    carSery.save()

    carSery.year = "2013"
    carSery.detail = "2.2 Hi-Racer 2Doors"
    carSery.save()

    carSery.detail = "2.2 Hi-Racer 4Doors"
    carSery.save()

    carSery.detail = "2.2 S 2Doors"
    carSery.save()

    carSery.detail = "2.2 S 4Doors"
    carSery.save()

    carSery.detail = "2.2 V 2Doors"
    carSery.save()

    carSery.detail = "2.2 V 4Doors"
    carSery.save()

    carSery.detail = "3.2 R 2Doors"
    carSery.save()

    carSery.detail = "3.2 R 4Doors"
    carSery.save()

    carSery.year = "2014"
    carSery.detail = "2.2 Hi-Racer 2Doors"
    carSery.save()

    carSery.detail = "2.2 Hi-Racer 4Doors"
    carSery.save()

    carSery.detail = "2.2 Hi-Racer Eclipse 2Doors"
    carSery.save()

    carSery.detail = "2.2 Hi-Racer Eclipse 4Doors"
    carSery.save()

    carSery.detail = "2.2 S 2Doors"
    carSery.save()

    carSery.detail = "2.2 S 4Doors"
    carSery.save()

    carSery.detail = "2.2 V 2Doors"
    carSery.save()

    carSery.detail = "2.2 V 4Doors"
    carSery.save()

    carSery.detail = "2.5 S 2Doors"
    carSery.save()

    carSery.detail = "2.5 S 4Doors"
    carSery.save()

    carSery.detail = "3.2 R 4Doors"
    carSery.save()

    carSery.year = "2015"
    carSery.detail = "2.2 Hi-Racer 2Doors"
    carSery.save()

    carSery.detail = "2.2 Hi-Racer 4Doors"
    carSery.save()

    carSery.detail = "2.2 Hi-Racer Eclipse 2Doors"
    carSery.save()

    carSery.detail = "2.2 Hi-Racer Eclipse 4Doors"
    carSery.save()

    carSery.detail = "2.2 S 2Doors"
    carSery.save()

    carSery.detail = "2.2 S 4Doors"
    carSery.save()

    carSery.detail = "2.2 V 2Doors"
    carSery.save()

    carSery.detail = "2.2 V 4Doors"
    carSery.save()

    carSery.detail = "2.5 S 2Doors"
    carSery.save()

    carSery.detail = "2.5 S 4Doors"
    carSery.save()

    carSery.detail = "3.2 R 4Doors"
    carSery.save()

    carSery.year = "2016"
    carSery.detail = "2.2 Hi-Racer 2Doors"
    carSery.save()

    carSery.detail = "2.2 Hi-Racer 4Doors"
    carSery.save()

    carSery.detail = "2.2 S 2Doors"
    carSery.save()

    carSery.detail = "2.2 S 4Doors"
    carSery.save()

    carSery.detail = "2.2 V 2Doors"
    carSery.save()

    carSery.detail = "2.2 V 4Doors"
    carSery.save()

    carSery.detail = "2.5 S 2Doors"
    carSery.save()

    carSery.detail = "2.5 S 4Doors"
    carSery.save()

    carSery.detail = "3.2 R 4Doors"
    carSery.save()

    carSery.year = "2017"
    carSery.detail = "2.2 Hi-Racer 2Doors"
    carSery.save()

    carSery.detail = "2.2 Hi-Racer 4Doors"
    carSery.save()

    carSery.detail = "2.2 S 2Doors"
    carSery.save()

    carSery.detail = "2.2 S 4Doors"
    carSery.save()

    carSery.detail = "2.2 V 2Doors"
    carSery.save()

    carSery.detail = "2.2 V 4Doors"
    carSery.save()

    carSery.detail = "3.2 R 4Doors"
    carSery.save()

    carSery.year = "2018"
    carSery.detail = "2.2 Hi-Racer 2Doors"
    carSery.save()

    carSery.detail = "2.2 Hi-Racer 4Doors"
    carSery.save()

    carSery.detail = "2.2 THUNDER Hi-Racer 2Doors"
    carSery.save()

    carSery.detail = "2.2 THUNDER Hi-Racer 4Doors"
    carSery.save()

    carSery.detail = "2.2 V 2Doors"
    carSery.save()

    carSery.detail = "3.2 R 4Doors"
    carSery.save()

    carSery.year = "2019"
    carSery.detail = "2.2 Hi-Racer 2Doors"
    carSery.save()

    carSery.detail = "2.2 Hi-Racer 4Doors"
    carSery.save()

    carSery.detail = "2.2 THUNDER Hi-Racer 2Doors"
    carSery.save()

    carSery.detail = "2.2 THUNDER Hi-Racer 4Doors"
    carSery.save()
    //----BT50-PRO
    //----CX-3 no group

    carSery.model = "CX-5"
    carSery.year = "2013"
    carSery.detail = "2.0 C 4Doors"
    carSery.car_type_id = 5
    carSery.save()

    carSery.detail = "2.0 S 4Doors"
    carSery.save()

    carSery.detail = "2.2 XDL 4Doors"
    carSery.save()

    carSery.detail = "2.5 S 4Doors"
    carSery.save()

    carSery.year = "2014"
    carSery.detail = "2.0 C 4Doors"
    carSery.save()

    carSery.detail = "2.0 S 4Doors"
    carSery.save()

    carSery.detail = "2.2 XDL 4Doors"
    carSery.save()

    carSery.detail = "2.5 S 4Doors"
    carSery.save()

    carSery.year = "2015"
    carSery.detail = "2.0 C 4Doors"
    carSery.save()

    carSery.detail = "2.0 S 4Doors"
    carSery.save()

    carSery.detail = "2.2 XDL 4Doors"
    carSery.save()

    carSery.detail = "2.5 S 4Doors"
    carSery.save()

    carSery.year = "2016"
    carSery.detail = "2.0 C 4Doors"
    carSery.save()

    carSery.detail = "2.0 S 4Doors"
    carSery.save()

    carSery.detail = "2.2 XD 4Doors"
    carSery.save()

    carSery.detail = "2.2 XDL 4Doors"
    carSery.save()

    carSery.detail = "2.5 S 4Doors"
    carSery.save()

    carSery.year = "2017"
    carSery.detail = "2.0 C 4Doors"
    carSery.save()

    carSery.detail = "2.0 S 4Doors"
    carSery.save()

    carSery.detail = "2.0 SP 4Doors"
    carSery.save()

    carSery.detail = "2.2 XD 4Doors"
    carSery.save()

    carSery.detail = "2.2 XDL 4Doors"
    carSery.save()

    carSery.year = "2018"
    carSery.detail = "2.0 C 4Doors"
    carSery.save()

    carSery.detail = "2.0 S 4Doors"
    carSery.save()

    carSery.detail = "2.0 SP 4Doors"
    carSery.save()

    carSery.detail = "2.2 XD 4Doors"
    carSery.save()

    carSery.detail = "2.2 XDL 4Doors"
    carSery.save()

    carSery.year = "2019"
    carSery.detail = "2.0 C 4Doors"
    carSery.save()

    carSery.detail = "2.0 S 4Doors"
    carSery.save()

    carSery.detail = "2.0 SP 4Doors"
    carSery.save()

    carSery.detail = "2.2 XD 4Doors"
    carSery.save()

    carSery.detail = "2.2 XDL 4Doors"
    carSery.save()
    //----CX-5
    //----CX-9 no group

    carSery.model = "Familia"
    carSery.year = "1992"
    carSery.detail = "1.4 STD/SGL 2Doors"
    carSery.car_group_id = 5
    carSery.car_type_id = 2
    carSery.save()

    carSery.detail = "1.4 STR Super Cab 2Doors"
    carSery.save()

    carSery.year = "1993"
    carSery.detail = "1.4 STD 2Doors"
    carSery.save()

    carSery.detail = "1.4 STD/SGL 2Doors"
    carSery.save()

    carSery.detail = "1.4 STR Super Cab 2Doors"
    carSery.save()

    carSery.year = "1994"
    carSery.detail = "1.4 S/STR 2Doors"
    carSery.save()

    carSery.detail = "1.4 STD 2Doors"
    carSery.save()

    carSery.detail = "1.4 STR Super Cab 2Doors"
    carSery.save()

    carSery.year = "1995"
    carSery.detail = "1.4 S/STR 2Doors"
    carSery.save()

    carSery.detail = "1.4 STD 2Doors"
    carSery.save()

    carSery.detail = "1.4 STD Economy 2Doors"
    carSery.save()

    carSery.detail = "1.4 STR Super Cab 2Doors"
    carSery.save()

    carSery.year = "1996"
    carSery.detail = "1.4 S/STR 2Doors"
    carSery.save()

    carSery.detail = "1.4 STD Economy 2Doors"
    carSery.save()

    carSery.detail = "1.4 STR Super Cab 2Doors"
    carSery.save()

    carSery.year = "1997"
    carSery.detail = "1.4 S/STR 2Doors"
    carSery.save()

    carSery.detail = "1.4 STD Economy 2Doors"
    carSery.save()

    carSery.detail = "1.4 STR Super Cab 2Doors"
    carSery.save()

    carSery.year = "1998"
    carSery.detail = "1.4 S/STR 2Doors"
    carSery.save()

    carSery.detail = "1.4 STD Economy 2Doors"
    carSery.save()

    carSery.detail = "1.4 STR Super Cab 2Doors"
    carSery.save()

    carSery.year = "1999"
    carSery.detail = "1.4 S/STR 2Doors"
    carSery.save()

    carSery.detail = "1.4 STD Economy 2Doors"
    carSery.save()

    carSery.detail = "1.4 STR Super Cab 2Doors"
    carSery.save()
    //----Familia

    carSery.model = "Fighter"
    carSery.year = "1997"
    carSery.detail = "2.5 STD 2Doors"
    carSery.car_group_id = 3
    carSery.save()

    carSery.detail = "2.5 Super Saloon 2Doors"
    carSery.save()

    carSery.detail = "2.5 Super Saloon Lux 2Doors"
    carSery.save()

    carSery.year = "1998"
    carSery.detail = "2.5 Base Superior 2Doors"
    carSery.save()

    carSery.detail = "2.5 STD 2Doors"
    carSery.save()

    carSery.detail = "2.5 Super Saloon 2Doors"
    carSery.save()

    carSery.detail = "2.5 Super Saloon Lux 2Doors"
    carSery.save()

    carSery.detail = "2.5 Super Saloon STR Base 2Doors"
    carSery.save()

    carSery.detail = "2.5 Super Saloon STR Lux 2Doors"
    carSery.save()

    carSery.detail = "2.5 Super Saloon STR Mid 2Doors"
    carSery.save()

    carSery.detail = "2.5 Super Saloon STR Sport 2Doors"
    carSery.save()

    carSery.year = "1999"
    carSery.detail = "2.5 Base Superior 2Doors"
    carSery.save()

    carSery.detail = "2.5 Super Saloon STR Base 2Doors"
    carSery.save()

    carSery.detail = "2.5 Super Saloon STR Lux 2Doors"
    carSery.save()

    carSery.detail = "2.5 Super Saloon STR Mid 2Doors"
    carSery.save()

    carSery.detail = "2.5 Super Saloon STR Sport 2Doors"
    carSery.save()

    carSery.year = "2000"
    carSery.detail = "2.5 4Doors"
    carSery.save()

    carSery.detail = "2.5 Base Superior 2Doors"
    carSery.save()

    carSery.detail = "2.5 Super Saloon STR Base 2Doors"
    carSery.save()

    carSery.detail = "2.5 Super Saloon STR Lux 2Doors"
    carSery.save()

    carSery.detail = "2.5 Super Saloon STR Mid 2Doors"
    carSery.save()

    carSery.detail = "2.5 Super Saloon STR Sport 2Doors"
    carSery.save()

    carSery.detail = "2.9 4Doors"
    carSery.save()

    carSery.detail = "2.9 STD 2Doors"
    carSery.save()

    carSery.detail = "2.9 STR 2Doors"
    carSery.save()

    carSery.detail = "2.9 STR Lux 2Doors"
    carSery.save()

    carSery.year = "2001"
    carSery.detail = "2.5 4Doors"
    carSery.save()

    carSery.detail = "2.5 Base Superior 2Doors"
    carSery.save()

    carSery.detail = "2.5 Ninja 4Doors"
    carSery.save()

    carSery.detail = "2.5 Splash 4Doors"
    carSery.save()

    carSery.detail = "2.5 Super Saloon STR Base 2Doors"
    carSery.save()

    carSery.detail = "2.5 Super Saloon STR Lux 2Doors"
    carSery.save()

    carSery.detail = "2.5 Super Saloon STR Mid 2Doors"
    carSery.save()

    carSery.detail = "2.5 Super Saloon STR Sport 2Doors"
    carSery.save()

    carSery.detail = "2.9 4Doors"
    carSery.save()

    carSery.detail = "2.9 STD 2Doors"
    carSery.save()

    carSery.detail = "2.9 STR 2Doors"
    carSery.save()

    carSery.detail = "2.9 STR Lux 2Doors"
    carSery.save()

    carSery.year = "2002"
    carSery.detail = "2.5 4Doors"
    carSery.save()

    carSery.detail = "2.5 Base Superior 2Doors"
    carSery.save()

    carSery.detail = "2.5 Le Mans 2Doors"
    carSery.save()

    carSery.detail = "2.5 Lux 2Doors"
    carSery.save()

    carSery.detail = "2.5 Lux 4Doors"
    carSery.save()

    carSery.detail = "2.5 Mid 2Doors"
    carSery.save()

    carSery.detail = "2.5 Mid 4Doors"
    carSery.save()

    carSery.detail = "2.5 Super Saloon STR Base 2Doors"
    carSery.save()

    carSery.detail = "2.5 Super Saloon STR Lux 2Doors"
    carSery.save()

    carSery.detail = "2.5 Super Saloon STR Mid 2Doors"
    carSery.save()

    carSery.detail = "2.9 Lux 2Doors"
    carSery.save()

    carSery.detail = "2.9 Lux 4Doors"
    carSery.save()

    carSery.detail = "2.9 Super Saloon STR Lux 2Doors"
    carSery.save()

    carSery.year = "2003"
    carSery.detail = "2.5 4Doors"
    carSery.save()

    carSery.detail = "2.5 Base Superior 2Doors"
    carSery.save()

    carSery.detail = "2.5 Le Mans 2Doors"
    carSery.save()

    carSery.detail = "2.5 Lux 2Doors"
    carSery.save()

    carSery.detail = "2.5 Lux 4Doors"
    carSery.save()

    carSery.detail = "2.5 Lux SE-S 2Doors"
    carSery.save()

    carSery.detail = "2.5 Mid 2Doors"
    carSery.save()

    carSery.detail = "2.5 Mid 4Doors"
    carSery.save()

    carSery.detail = "2.5 SE1 2Doors"
    carSery.save()

    carSery.detail = "2.5 SE1 4Doors"
    carSery.save()

    carSery.detail = "2.5 Super Saloon STR Base 2Doors"
    carSery.save()

    carSery.detail = "2.5 Super Saloon STR Lux 2Doors"
    carSery.save()

    carSery.detail = "2.5 Super Saloon STR Mid 2Doors"
    carSery.save()

    carSery.detail = "2.9 Lux 2Doors"
    carSery.save()

    carSery.detail = "2.9 Lux 4Doors"
    carSery.save()

    carSery.detail = "2.9 Super Saloon STR Lux 2Doors"
    carSery.save()

    carSery.year = "2004"
    carSery.detail = "2.5 4Doors"
    carSery.save()

    carSery.detail = "2.5 Base Superior 2Doors"
    carSery.save()

    carSery.detail = "2.5 Lux 2Doors"
    carSery.save()

    carSery.detail = "2.5 Lux 4Doors"
    carSery.save()

    carSery.detail = "2.5 Lux SE-S 2Doors"
    carSery.save()

    carSery.detail = "2.5 Mid 2Doors"
    carSery.save()

    carSery.detail = "2.5 Mid 4Doors"
    carSery.save()

    carSery.detail = "2.5 SE1 2Doors"
    carSery.save()

    carSery.detail = "2.5 SE1 4Doors"
    carSery.save()

    carSery.detail = "2.5 Super Saloon STR Base 2Doors"
    carSery.save()

    carSery.detail = "2.5 Super Saloon STR Lux 2Doors"
    carSery.save()

    carSery.detail = "2.5 Super Saloon STR Mid 2Doors"
    carSery.save()

    carSery.detail = "2.9 Lux 2Doors"
    carSery.save()

    carSery.detail = "2.9 Lux 4Doors"
    carSery.save()

    carSery.year = "2005"
    carSery.detail = "2.5 Base Superior 2Doors"
    carSery.save()

    carSery.detail = "2.5 Lux 2Doors"
    carSery.save()

    carSery.detail = "2.5 Lux 4Doors"
    carSery.save()

    carSery.detail = "2.5 Lux SE-S 2Doors"
    carSery.save()

    carSery.detail = "2.5 Mid 2Doors"
    carSery.save()

    carSery.detail = "2.5 Mid 4Doors"
    carSery.save()

    carSery.detail = "2.5 SE1 2Doors"
    carSery.save()

    carSery.detail = "2.5 Super Saloon STR Lux 2Doors"
    carSery.save()

    carSery.detail = "2.5 Super Saloon STR Mid 2Doors"
    carSery.save()

    carSery.year = "2006"
    carSery.detail = "2.5 Base Superior 2Doors"
    carSery.save()

    carSery.detail = "2.5 Lux 2Doors"
    carSery.save()

    carSery.detail = "2.5 Lux 4Doors"
    carSery.save()

    carSery.detail = "2.5 Lux SE-S 2Doors"
    carSery.save()

    carSery.detail = "2.5 Mid 2Doors"
    carSery.save()

    carSery.detail = "2.5 Mid 4Doors"
    carSery.save()

    carSery.detail = "2.5 SE1 2Doors"
    carSery.save()

    carSery.detail = "2.5 Super Saloon STR Lux 2Doors"
    carSery.save()

    carSery.detail = "2.5 Super Saloon STR Mid 2Doors"
    carSery.save()
    //----Fighter

    carSery.model = "Lantis"
    carSery.year = "1994"
    carSery.detail = "1.8 4Doors"
    carSery.car_type_id = 1
    carSery.save()

    carSery.detail = "2.0 V6 4Doors"
    carSery.save()

    carSery.year = "1995"
    carSery.detail = "1.8 4Doors"
    carSery.save()

    carSery.detail = "2.0 V6 4Doors"
    carSery.save()

    carSery.year = "1996"
    carSery.detail = "1.8 4Doors"
    carSery.save()

    carSery.detail = "2.0 V6 4Doors"
    carSery.save()

    carSery.year = "1997"
    carSery.detail = "1.8 4Doors"
    carSery.save()

    carSery.year = "1998"
    carSery.save()

    carSery.year = "1999"
    carSery.save()
    //----Lantis
    //----Magnum Thunder no group
    //----MPV no group

    carSery.model = "MX-5"
    carSery.year = "1992"
    carSery.detail = "1.6 2Doors"
    carSery.car_group_id = 2
    carSery.save()

    carSery.year = "1993"
    carSery.save()

    carSery.year = "1994"
    carSery.save()

    carSery.detail = "1.8 2Doors"
    carSery.save()

    carSery.year = "1995"
    carSery.save()

    carSery.year = "1996"
    carSery.save()

    carSery.year = "1997"
    carSery.save()

    carSery.year = "1998"
    carSery.save()

    carSery.year = "2002"
    carSery.save()

    carSery.year = "2003"
    carSery.save()

    carSery.year = "2004"
    carSery.save()

    carSery.year = "2005"
    carSery.save()

    carSery.detail = "2.0 2Doors"
    carSery.save()

    carSery.year = "2006"
    carSery.save()

    carSery.year = "2007"
    carSery.save()

    carSery.year = "2008"
    carSery.save()

    carSery.year = "2009"
    carSery.save()

    carSery.year = "2010"
    carSery.save()

    carSery.year = "2011"
    carSery.save()

    carSery.year = "2012"
    carSery.save()

    carSery.year = "2013"
    carSery.save()

    carSery.year = "2014"
    carSery.save()

    carSery.year = "2015"
    carSery.save()

    carSery.year = "2016"
    carSery.save()

    carSery.year = "2017"
    carSery.save()

    carSery.year = "2018"
    carSery.save()

    carSery.year = "2019"
    carSery.save()
    //----MX-5

    carSery.model = "RX-8"
    carSery.year = "2003"
    carSery.detail = "1.3 2Doors"
    carSery.save()

    carSery.year = "2004"
    carSery.save()

    carSery.year = "2005"
    carSery.save()

    carSery.year = "2006"
    carSery.save()

    carSery.year = "2007"
    carSery.save()
    //----RX-8

    carSery.model = "Tribute"
    carSery.year = "2002"
    carSery.detail = "3.0 SDX 4Doors"
    carSery.car_type_id = 5
    carSery.save()

    carSery.year = "2003"
    carSery.save()

    carSery.detail = "3.0 Victory 4Doors"
    carSery.save()

    carSery.year = "2004"
    carSery.detail = "2.0 DX 4Doors"
    carSery.save()

    carSery.detail = "2.0 SDX 4Doors"
    carSery.save()

    carSery.detail = "2.3 DX 4Doors"
    carSery.save()

    carSery.detail = "2.3 SDX 4Doors"
    carSery.save()

    carSery.detail = "3.0 SDX 4Doors"
    carSery.save()

    carSery.detail = "3.0 Victory 4Doors"
    carSery.save()

    carSery.year = "2005"
    carSery.detail = "2.0 DX 4Doors"
    carSery.save()

    carSery.detail = "2.0 SDX 4Doors"
    carSery.save()

    carSery.detail = "2.3 DX 4Doors"
    carSery.save()

    carSery.detail = "2.3 SDX 4Doors"
    carSery.save()

    carSery.detail = "3.0 SDX 4Doors"
    carSery.save()

    carSery.detail = "3.0 Victory 4Doors"
    carSery.save()

    carSery.year = "2006"
    carSery.detail = "2.3 SDX 4Doors"
    carSery.save()
    //----Tribute
    //----Mazda End

    //----Isuzu Start
    //----Buddy no group
    carSery.brand = "Isuzu"
    carSery.model = "Cameo"
    carSery.year = "1993"
    carSery.detail = "2.5 4Doors"
    carSery.car_group_id = 3
    carSery.car_type_id = 5
    carSery.save()

    carSery.year = "1994"
    carSery.save()

    carSery.year = "1995"
    carSery.save()
    //----Cameo

    carSery.model = "D-Max"
    carSery.year = "2002"
    carSery.detail = "2.5 EX 2Doors"
    carSery.car_type_id = 2
    carSery.save()

    carSery.detail = "2.5 EXY Economy 2Doors"
    carSery.save()

    carSery.detail = "2.5 SL 2Doors"
    carSery.save()

    carSery.detail = "2.5 SL 4Doors"
    carSery.save()

    carSery.detail = "2.5 SLX 2Doors"
    carSery.save()

    carSery.detail = "2.5 SX 2Doors"
    carSery.save()

    carSery.detail = "3.0 EX 2Doors"
    carSery.save()

    carSery.detail = "3.0 LS 4Doors"
    carSery.save()

    carSery.detail = "3.0 Rodeo LS 2Doors"
    carSery.save()

    carSery.detail = "3.0 Rodeo S 2Doors"
    carSery.save()

    carSery.detail = "3.0 SLX 2Doors"
    carSery.save()

    carSery.detail = "3.0 SLX 4Doors"
    carSery.save()

    carSery.year = "2003"
    carSery.detail = "2.5 EX 2Doors"
    carSery.save()

    carSery.detail = "2.5 EXY Economy 2Doors"
    carSery.save()

    carSery.detail = "2.5 SL 2Doors"
    carSery.save()

    carSery.detail = "2.5 SL 4Doors"
    carSery.save()

    carSery.detail = "2.5 SLX 2Doors"
    carSery.save()

    carSery.detail = "2.5 SX 2Doors"
    carSery.save()

    carSery.detail = "2.5 SX 4Doors"
    carSery.save()

    carSery.detail = "3.0 EX 2Doors"
    carSery.save()

    carSery.detail = "3.0 Hi-Lander 2Doors"
    carSery.save()

    carSery.detail = "3.0 Hi-Lander 4Doors"
    carSery.save()

    carSery.detail = "3.0 LS 4Doors"
    carSery.save()

    carSery.detail = "3.0 Rodeo LS 2Doors"
    carSery.save()

    carSery.detail = "3.0 Rodeo S 2Doors"
    carSery.save()

    carSery.detail = "3.0 SLX 2Doors"
    carSery.save()

    carSery.detail = "3.0 SLX 4Doors"
    carSery.save()

    carSery.year = "2004"
    carSery.detail = "2.5 EX 2Doors"
    carSery.save()

    carSery.detail = "2.5 EXL 2Doors"
    carSery.save()

    carSery.detail = "2.5 EXY Economy 2Doors"
    carSery.save()

    carSery.detail = "2.5 SL 2Doors"
    carSery.save()

    carSery.detail = "2.5 SL 4Doors"
    carSery.save()

    carSery.detail = "2.5 SL Ddi i-TEQ 4Doors"
    carSery.save()

    carSery.detail = "2.5 SLX 2Doors"
    carSery.save()

    carSery.detail = "2.5 SLX Ddi i-TEQ 4Doors"
    carSery.save()

    carSery.detail = "2.5 SX 2Doors"
    carSery.save()

    carSery.detail = "2.5 SX 4Doors"
    carSery.save()

    carSery.detail = "3.0 EX 2Doors"
    carSery.save()

    carSery.detail = "3.0 Hi-Lander 2Doors"
    carSery.save()

    carSery.detail = "3.0 Hi-Lander 4Doors"
    carSery.save()

    carSery.detail = "3.0 Hi-Lander Ddi i-TEQ 2Doors"
    carSery.save()

    carSery.detail = "3.0 Hi-Lander Ddi i-TEQ 4Doors"
    carSery.save()

    carSery.detail = "3.0 LS 4Doors"
    carSery.save()

    carSery.detail = "3.0 LS Ddi i-TEQ 4Doors"
    carSery.save()

    carSery.detail = "3.0 Rodeo LS 2Doors"
    carSery.save()

    carSery.detail = "3.0 Rodeo LS Ddi i-TEQ 2Doors"
    carSery.save()

    carSery.detail = "3.0 Rodeo S 2Doors"
    carSery.save()

    carSery.detail = "3.0 Rodeo S Ddi i-TEQ 2Doors"
    carSery.save()

    carSery.detail = "3.0 SLX 2Doors"
    carSery.save()

    carSery.detail = "3.0 SLX 4Doors"
    carSery.save()

    carSery.detail = "3.0 SLX Ddi i-TEQ 2Doors"
    carSery.save()

    carSery.detail = "3.0 SLX Ddi i-TEQ 4Doors"
    carSery.save()

    carSery.year = "2005"
    carSery.detail = "2.5 EX 2Doors"
    carSery.save()

    carSery.detail = "2.5 EX Ddi i-TEQ 2Doors"
    carSery.save()

    carSery.detail = "2.5 EXL 2Doors"
    carSery.save()

    carSery.detail = "2.5 EXY Economy 2Doors"
    carSery.save()

    carSery.detail = "2.5 SL 2Doors"
    carSery.save()

    carSery.detail = "2.5 SL 4Doors"
    carSery.save()

    carSery.detail = "2.5 SL Ddi i-TEQ 2Doors"
    carSery.save()

    carSery.detail = "2.5 SL Ddi i-TEQ 4Doors"
    carSery.save()

    carSery.detail = "2.5 SLX 2Doors"
    carSery.save()

    carSery.detail = "2.5 SLX Ddi i-TEQ 2Doors"
    carSery.save()

    carSery.detail = "2.5 SLX Ddi i-TEQ 4Doors"
    carSery.save()

    carSery.detail = "2.5 SX 2Doors"
    carSery.save()

    carSery.detail = "2.5 SX 4Doors"
    carSery.save()

    carSery.detail = "2.5 SX Ddi i-TEQ 2Doors"
    carSery.save()

    carSery.detail = "2.5 SX Ddi i-TEQ 4Doors"
    carSery.save()

    carSery.detail = "3.0 Hi-Lander Ddi i-TEQ 2Doors"
    carSery.save()

    carSery.detail = "3.0 Hi-Lander Ddi i-TEQ 4Doors"
    carSery.save()

    carSery.detail = "3.0 LS Ddi i-TEQ 4Doors"
    carSery.save()

    carSery.detail = "3.0 Rodeo LS Ddi i-TEQ 2Doors"
    carSery.save()

    carSery.detail = "3.0 Rodeo S 2Doors"
    carSery.save()

    carSery.detail = "3.0 Rodeo S Ddi i-TEQ 2Doors"
    carSery.save()

    carSery.detail = "3.0 SLX Ddi i-TEQ 2Doors"
    carSery.save()

    carSery.detail = "3.0 SLX Ddi i-TEQ 4Doors"
    carSery.save()

    carSery.year = "2006"
    carSery.detail = "2.5 EX Ddi i-TEQ 2Doors"
    carSery.save()

    carSery.detail = "2.5 EXL 2Doors"
    carSery.save()

    carSery.detail = "2.5 EXL Ddi i-TEQ 2Doors"
    carSery.save()

    carSery.detail = "2.5 Hi-Lander Ddi i-TEQ 2Doors"
    carSery.save()

    carSery.detail = "2.5 Hi-Lander Ddi i-TEQ 4Doors"
    carSery.save()

    carSery.detail = "2.5 Rodeo LS Ddi i-TEQ 2Doors"
    carSery.save()

    carSery.detail = "2.5 SL Ddi i-TEQ 2Doors"
    carSery.save()

    carSery.detail = "2.5 SL Ddi i-TEQ 4Doors"
    carSery.save()

    carSery.detail = "2.5 SLX Ddi i-TEQ 2Doors"
    carSery.save()

    carSery.detail = "2.5 SLX Ddi i-TEQ 4Doors"
    carSery.save()

    carSery.detail = "2.5 SX Ddi i-TEQ 2Doors"
    carSery.save()

    carSery.detail = "2.5 SX Ddi i-TEQ 4Doors"
    carSery.save()

    carSery.detail = "3.0 Hi-Lander Ddi i-TEQ 2Doors"
    carSery.save()

    carSery.detail = "3.0 Hi-Lander Ddi i-TEQ 4Doors"
    carSery.save()

    carSery.detail = "3.0 LS Ddi i-TEQ 4Doors"
    carSery.save()

    carSery.detail = "3.0 Rodeo LS Ddi i-TEQ 2Doors"
    carSery.save()

    carSery.detail = "3.0 Rodeo S Ddi i-TEQ 2Doors"
    carSery.save()
    
    carSery.detail = "3.0 SLX Ddi i-TEQ 2Doors"
    carSery.save()

    carSery.detail = "3.0 SLX Ddi i-TEQ 4Doors"
    carSery.save()

    carSery.year = "2007"
    carSery.detail = "2.5 EX Ddi i-TEQ 2Doors"
    carSery.save()

    carSery.detail = "2.5 EXL Ddi i-TEQ 2Doors"
    carSery.save()

    carSery.detail = "2.5 Hi-Lander Ddi i-TEQ 2Doors"
    carSery.save()

    carSery.detail = "2.5 Hi-Lander Ddi i-TEQ 4Doors"
    carSery.save()

    carSery.detail = "2.5 Rodeo LS Ddi i-TEQ 2Doors"
    carSery.save()

    carSery.detail = "2.5 SL Ddi i-TEQ 2Doors"
    carSery.save()

    carSery.detail = "2.5 SL Ddi i-TEQ 4Doors"
    carSery.save()

    carSery.detail = "2.5 SLX Ddi i-TEQ 2Doors"
    carSery.save()

    carSery.detail = "2.5 SLX Ddi i-TEQ 4Doors"
    carSery.save()

    carSery.detail = "2.5 SLX Speed Ddi i-TEQ 2Doors"
    carSery.save()

    carSery.detail = "2.5 SX Ddi i-TEQ 2Doors"
    carSery.save()

    carSery.detail = "2.5 SX Ddi i-TEQ 4Doors"
    carSery.save()

    carSery.detail = "3.0 Hi-Lander Ddi i-TEQ 2Doors"
    carSery.save()

    carSery.detail = "3.0 Hi-Lander Ddi i-TEQ 4Doors"
    carSery.save()

    carSery.detail = "3.0 LS Ddi i-TEQ 4Doors"
    carSery.save()

    carSery.detail = "3.0 LS GT Ddi i-TEQ 4Doors"
    carSery.save()

    carSery.detail = "3.0 Rodeo LS Ddi i-TEQ 2Doors"
    carSery.save()

    carSery.detail = "3.0 Rodeo S Ddi i-TEQ 2Doors"
    carSery.save()
    
    carSery.detail = "3.0 SLX Ddi i-TEQ 2Doors"
    carSery.save()

    carSery.detail = "3.0 SLX Ddi i-TEQ 4Doors"
    carSery.save()

    carSery.detail = "3.0 SLX Speed Ddi i-TEQ 2Doors"
    carSery.save()

    carSery.year = "2008"
    carSery.detail = "2.5 EX Ddi i-TEQ 2Doors"
    carSery.save()

    carSery.detail = "2.5 EX Platinum 2Doors"
    carSery.save()

    carSery.detail = "2.5 EXL Ddi i-TEQ 2Doors"
    carSery.save()

    carSery.detail = "2.5 EXL Platinum 2Doors"
    carSery.save()

    carSery.detail = "2.5 Hi-Lander Ddi i-TEQ 2Doors"
    carSery.save()

    carSery.detail = "2.5 Hi-Lander Ddi i-TEQ 4Doors"
    carSery.save()

    carSery.detail = "2.5 Hi-Lander Platinum 2Doors"
    carSery.save()

    carSery.detail = "2.5 Hi-Lander Platinum 4Doors"
    carSery.save()

    carSery.detail = "2.5 Hi-Lander Platinum Smart 2Doors"
    carSery.save()

    carSery.detail = "2.5 Rodeo LS Ddi i-TEQ 2Doors"
    carSery.save()

    carSery.detail = "2.5 Rodeo LS Platinum 2Doors"
    carSery.save()

    carSery.detail = "2.5 SL Ddi i-TEQ 2Doors"
    carSery.save()

    carSery.detail = "2.5 SL Ddi i-TEQ 4Doors"
    carSery.save()

    carSery.detail = "2.5 SL Platinum 2Doors"
    carSery.save()

    carSery.detail = "2.5 SLX Ddi i-TEQ 2Doors"
    carSery.save()

    carSery.detail = "2.5 SLX Ddi i-TEQ 4Doors"
    carSery.save()

    carSery.detail = "2.5 SLX Platinum 2Doors"
    carSery.save()

    carSery.detail = "2.5 SLX Platinum 4Doors"
    carSery.save()

    carSery.detail = "2.5 SLX Platinum Smart 2Doors"
    carSery.save()

    carSery.detail = "2.5 SLX Platinum Smart 4Doors"
    carSery.save()

    carSery.detail = "2.5 SLX Smart Ddi i-TEQ 2Doors"
    carSery.save()

    carSery.detail = "2.5 SLX Speed Ddi i-TEQ 2Doors"
    carSery.save()

    carSery.detail = "2.5 SX Ddi i-TEQ 2Doors"
    carSery.save()

    carSery.detail = "2.5 SX Ddi i-TEQ 4Doors"
    carSery.save()

    carSery.detail = "2.5 SX Platinum 2Doors"
    carSery.save()

    carSery.detail = "2.5 SX Platinum 4Doors"
    carSery.save()

    carSery.detail = "3.0 Hi-Lander Ddi i-TEQ 2Doors"
    carSery.save()

    carSery.detail = "3.0 Hi-Lander Ddi i-TEQ 4Doors"
    carSery.save()

    carSery.detail = "3.0 Hi-Lander Platinum 2Doors"
    carSery.save()

    carSery.detail = "3.0 Hi-Lander Platinum 4Doors"
    carSery.save()

    carSery.detail = "3.0 LS Ddi i-TEQ 4Doors"
    carSery.save()

    carSery.detail = "3.0 LS GT Ddi i-TEQ 4Doors"
    carSery.save()

    carSery.detail = "3.0 LS Platinum 4Doors"
    carSery.save()

    carSery.detail = "3.0 Rodeo LS Ddi i-TEQ 2Doors"
    carSery.save()

    carSery.detail = "3.0 Rodeo LS Platinum 2Doors"
    carSery.save()
    
    carSery.detail = "3.0 SLX Ddi i-TEQ 2Doors"
    carSery.save()

    carSery.detail = "3.0 SLX Ddi i-TEQ 4Doors"
    carSery.save()

    carSery.detail = "3.0 SLX Platinum 2Doors"
    carSery.save()

    carSery.detail = "3.0 SLX Platinum 4Doors"
    carSery.save()

    carSery.detail = "3.0 SLX Speed Ddi i-TEQ 2Doors"
    carSery.save()

    carSery.year = "2009"
    carSery.detail = "2.5 EX Platinum 2Doors"
    carSery.save()

    carSery.detail = "2.5 EX Super Platinum 2Doors"
    carSery.save()

    carSery.detail = "2.5 EXL Platinum 2Doors"
    carSery.save()

    carSery.detail = "2.5 EXL Super Platinum 2Doors"
    carSery.save()

    carSery.detail = "2.5 Hi-Lander Platinum 2Doors"
    carSery.save()

    carSery.detail = "2.5 Hi-Lander Platinum 4Doors"
    carSery.save()

    carSery.detail = "2.5 Hi-Lander Platinum Smart 2Doors"
    carSery.save()

    carSery.detail = "2.5 Hi-Lander Super Platinum 2Doors"
    carSery.save()

    carSery.detail = "2.5 Hi-Lander Super Platinum 4Doors"
    carSery.save()

    carSery.detail = "2.5 Rodeo LS Platinum 2Doors"
    carSery.save()

    carSery.detail = "2.5 Rodeo LS Super Platinum 2Doors"
    carSery.save()

    carSery.detail = "2.5 SL Platinum 2Doors"
    carSery.save()

    carSery.detail = "2.5 SLX Platinum 2Doors"
    carSery.save()

    carSery.detail = "2.5 SLX Platinum 4Doors"
    carSery.save()

    carSery.detail = "2.5 SLX Platinum Smart 2Doors"
    carSery.save()

    carSery.detail = "2.5 SLX Platinum Smart 4Doors"
    carSery.save()

    carSery.detail = "2.5 SLX Super Platinum 2Doors"
    carSery.save()

    carSery.detail = "2.5 SLX Super Platinum 4Doors"
    carSery.save()

    carSery.detail = "2.5 SLX Super Platinum Smart 2Doors"
    carSery.save()

    carSery.detail = "2.5 SX Platinum 2Doors"
    carSery.save()

    carSery.detail = "2.5 SX Platinum 4Doors"
    carSery.save()

    carSery.detail = "2.5 SX Super Platinum 2Doors"
    carSery.save()

    carSery.detail = "2.5 SX Super Platinum 4Doors"
    carSery.save()

    carSery.detail = "3.0 Hi-Lander Platinum 2Doors"
    carSery.save()

    carSery.detail = "3.0 Hi-Lander Platinum 4Doors"
    carSery.save()

    carSery.detail = "3.0 Hi-Lander Super Platinum 2Doors"
    carSery.save()

    carSery.detail = "3.0 Hi-Lander Super Platinum 4Doors"
    carSery.save()

    carSery.detail = "3.0 LS Platinum 4Doors"
    carSery.save()

    carSery.detail = "3.0 LS Super Platinum 4Doors"
    carSery.save()

    carSery.detail = "3.0 Rodeo LS Platinum 2Doors"
    carSery.save()

    carSery.detail = "3.0 Rodeo LS Super Platinum 2Doors"
    carSery.save()
    
    carSery.detail = "3.0 SLX Platinum 2Doors"
    carSery.save()

    carSery.detail = "3.0 SLX Platinum 4Doors"
    carSery.save()

    carSery.detail = "3.0 SLX Super Platinum 2Doors"
    carSery.save()

    carSery.year = "2010"
    carSery.detail = "2.5 EX Platinum 2Doors"
    carSery.save()

    carSery.detail = "2.5 EX Titanium 2Doors"
    carSery.save()

    carSery.detail = "2.5 EXL Super Platinum 2Doors"
    carSery.save()

    carSery.detail = "2.5 Hi-Lander Super Platinum 2Doors"
    carSery.save()

    carSery.detail = "2.5 Hi-Lander Super Platinum 4Doors"
    carSery.save()

    carSery.detail = "2.5 Hi-Lander Super Titanium 2Doors"
    carSery.save()

    carSery.detail = "2.5 Hi-Lander Super Titanium 4Doors"
    carSery.save()

    carSery.detail = "2.5 Hi-Lander Super Titanium Smart 2Doors"
    carSery.save()

    carSery.detail = "2.5 Hi-Lander X-Series 2Doors"
    carSery.save()

    carSery.detail = "2.5 Hi-Lander X-Series 4Doors"
    carSery.save()

    carSery.detail = "2.5 Hi-Lander X-Series Super Titanium 2Doors"
    carSery.save()

    carSery.detail = "2.5 Hi-Lander X-Series Super Titanium 4Doors"
    carSery.save()

    carSery.detail = "2.5 Rodeo LS Platinum 2Doors"
    carSery.save()

    carSery.detail = "2.5 Rodeo LS Titanium 2Doors"
    carSery.save()

    carSery.detail = "2.5 SLX Super Platinum 2Doors"
    carSery.save()

    carSery.detail = "2.5 SLX Super Platinum 4Doors"
    carSery.save()

    carSery.detail = "2.5 SLX Super Platinum Smart 2Doors"
    carSery.save()

    carSery.detail = "2.5 SLX Super Titanium 2Doors"
    carSery.save()

    carSery.detail = "2.5 SLX Super Titanium 4Doors"
    carSery.save()

    carSery.detail = "2.5 SLX Super Titanium Smart 2Doors"
    carSery.save()

    carSery.detail = "2.5 SLX X-Series 2Doors"
    carSery.save()

    carSery.detail = "2.5 SLX X-Series Super Titanium 2Doors"
    carSery.save()

    carSery.detail = "2.5 SX Platinum 2Doors"
    carSery.save()

    carSery.detail = "2.5 SX Platinum 4Doors"
    carSery.save()

    carSery.detail = "2.5 SX Titanium 2Doors"
    carSery.save()

    carSery.detail = "2.5 SX Titanium 4Doors"
    carSery.save()

    carSery.detail = "3.0 Hi-Lander Super Platinum 2Doors"
    carSery.save()

    carSery.detail = "3.0 Hi-Lander Super Platinum 4Doors"
    carSery.save()

    carSery.detail = "3.0 Hi-Lander Super Titanium 2Doors"
    carSery.save()

    carSery.detail = "3.0 Hi-Lander Super Titanium 4Doors"
    carSery.save()

    carSery.detail = "3.0 Hi-Lander X-Series 2Doors"
    carSery.save()

    carSery.detail = "3.0 Hi-Lander X-Series 4Doors"
    carSery.save()

    carSery.detail = "3.0 Hi-Lander X-Series Super Titanium 4Doors"
    carSery.save()

    carSery.detail = "3.0 LS Super Platinum 4Doors"
    carSery.save()

    carSery.detail = "3.0 LS Super Titanium 4Doors"
    carSery.save()

    carSery.detail = "3.0 LS X-Series 4Doors"
    carSery.save()

    carSery.detail = "3.0 LS X-Series Super Titanium 4Doors"
    carSery.save()

    carSery.detail = "3.0 Rodeo LS Super Platinum 2Doors"
    carSery.save()

    carSery.detail = "3.0 Rodeo LS Super Titanium 2Doors"
    carSery.save()

    carSery.detail = "3.0 Rodeo LS X-Series Super Titanium 2Doors"
    carSery.save()
    
    carSery.detail = "3.0 SLX Super Platinum 2Doors"
    carSery.save()

    carSery.detail = "3.0 SLX Super Titanium 2Doors"
    carSery.save()

    carSery.year = "2011"
    carSery.detail = "2.5 B 2Doors"
    carSery.save()

    carSery.detail = "2.5 EX Super Titanium 2Doors"
    carSery.save()

    carSery.detail = "2.5 Hi-Lander L 2Doors"
    carSery.save()

    carSery.detail = "2.5 Hi-Lander L 4Doors"
    carSery.save()

    carSery.detail = "2.5 Hi-Lander Super Titanium 2Doors"
    carSery.save()

    carSery.detail = "2.5 Hi-Lander Super Titanium 4Doors"
    carSery.save()

    carSery.detail = "2.5 Hi-Lander Super Titanium Smart 2Doors"
    carSery.save()

    carSery.detail = "2.5 Hi-Lander X-Series Super Titanium 2Doors"
    carSery.save()

    carSery.detail = "2.5 Hi-Lander X-Series Super Titanium 4Doors"
    carSery.save()

    carSery.detail = "2.5 Hi-Lander Z 2Doors"
    carSery.save()

    carSery.detail = "2.5 Hi-Lander Z 4Doors"
    carSery.save()

    carSery.detail = "2.5 Hi-Lander Z-Prestige 2Doors"
    carSery.save()

    carSery.detail = "2.5 Hi-Lander Z-Prestige 4Doors"
    carSery.save()

    carSery.detail = "2.5 L 2Doors"
    carSery.save()

    carSery.detail = "2.5 L 4Doors"
    carSery.save()

    carSery.detail = "2.5 Rodeo LS Super Titanium 2Doors"
    carSery.save()

    carSery.detail = "2.5 S 2Doors"
    carSery.save()

    carSery.detail = "2.5 S 4Doors"
    carSery.save()

    carSery.detail = "2.5 SLX Super Titanium 2Doors"
    carSery.save()

    carSery.detail = "2.5 SLX Super Titanium 4Doors"
    carSery.save()

    carSery.detail = "2.5 SLX Super Titanium Smart 2Doors"
    carSery.save()

    carSery.detail = "2.5 SLX X-Series Super Titanium 2Doors"
    carSery.save()

    carSery.detail = "2.5 SX Super Titanium 2Doors"
    carSery.save()

    carSery.detail = "2.5 SX Super Titanium 4Doors"
    carSery.save()

    carSery.detail = "2.5 Vcross L 4Doors"
    carSery.save()

    carSery.detail = "2.5 Vcross Z 2Doors"
    carSery.save()

    carSery.detail = "2.5 Z 2Doors"
    carSery.save()

    carSery.detail = "3.0 Hi-Lander Super Titanium 2Doors"
    carSery.save()

    carSery.detail = "3.0 Hi-Lander Super Titanium 4Doors"
    carSery.save()

    carSery.detail = "3.0 Hi-Lander X-Series Super Titanium 4Doors"
    carSery.save()

    carSery.detail = "3.0 Hi-Lander Z-Prestige 2Doors"
    carSery.save()

    carSery.detail = "3.0 Hi-Lander Z-Prestige 4Doors"
    carSery.save()

    carSery.detail = "3.0 LS Super Titanium 4Doors"
    carSery.save()

    carSery.detail = "3.0 LS X-Series Super Titanium 4Doors"
    carSery.save()

    carSery.detail = "3.0 Rodeo LS Super Titanium 2Doors"
    carSery.save()

    carSery.detail = "3.0 Rodeo LS X-Series Super Titanium 2Doors"
    carSery.save()

    carSery.detail = "3.0 SLX Super Titanium 2Doors"
    carSery.save()

    carSery.detail = "3.0 Vcross Z-Prestige 2Doors"
    carSery.save()

    carSery.detail = "3.0 Vcross Z-Prestige 4Doors"
    carSery.save()

    carSery.year = "2012"
    carSery.detail = "2.5 B 2Doors"
    carSery.save()

    carSery.detail = "2.5 Hi-Lander L 2Doors"
    carSery.save()

    carSery.detail = "2.5 Hi-Lander L 4Doors"
    carSery.save()

    carSery.detail = "2.5 Hi-Lander X-Series 2Doors"
    carSery.save()

    carSery.detail = "2.5 Hi-Lander X-Series 4Doors"
    carSery.save()

    carSery.detail = "2.5 Hi-Lander Z 2Doors"
    carSery.save()

    carSery.detail = "2.5 Hi-Lander Z 4Doors"
    carSery.save()

    carSery.detail = "2.5 Hi-Lander Z-Prestige 2Doors"
    carSery.save()

    carSery.detail = "2.5 Hi-Lander Z-Prestige 4Doors"
    carSery.save()

    carSery.detail = "2.5 L 2Doors"
    carSery.save()

    carSery.detail = "2.5 L 4Doors"
    carSery.save()

    carSery.detail = "2.5 S 2Doors"
    carSery.save()

    carSery.detail = "2.5 S 4Doors"
    carSery.save()

    carSery.detail = "2.5 SLX X-Series 2Doors"
    carSery.save()

    carSery.detail = "2.5 Vcross L 4Doors"
    carSery.save()

    carSery.detail = "2.5 Vcross Z 2Doors"
    carSery.save()

    carSery.detail = "2.5 Z 2Doors"
    carSery.save()

    carSery.detail = "3.0 Hi-Lander Z-Prestige 2Doors"
    carSery.save()

    carSery.detail = "3.0 Hi-Lander Z-Prestige 4Doors"
    carSery.save()

    carSery.detail = "3.0 Vcross Z-Prestige 2Doors"
    carSery.save()

    carSery.detail = "3.0 Vcross Z-Prestige 4Doors"
    carSery.save()

    carSery.year = "2013"
    carSery.detail = "2.5 B 2Doors"
    carSery.save()

    carSery.detail = "2.5 Hi-Lander L 2Doors"
    carSery.save()

    carSery.detail = "2.5 Hi-Lander L 4Doors"
    carSery.save()

    carSery.detail = "2.5 Hi-Lander X-Series 2Doors"
    carSery.save()

    carSery.detail = "2.5 Hi-Lander X-Series 4Doors"
    carSery.save()

    carSery.detail = "2.5 Hi-Lander Z 2Doors"
    carSery.save()

    carSery.detail = "2.5 Hi-Lander Z 4Doors"
    carSery.save()

    carSery.detail = "2.5 Hi-Lander Z-Prestige 2Doors"
    carSery.save()

    carSery.detail = "2.5 Hi-Lander Z-Prestige 4Doors"
    carSery.save()

    carSery.detail = "2.5 L 2Doors"
    carSery.save()

    carSery.detail = "2.5 L 4Doors"
    carSery.save()

    carSery.detail = "2.5 S 2Doors"
    carSery.save()

    carSery.detail = "2.5 S 4Doors"
    carSery.save()

    carSery.detail = "2.5 SLX X-Series 2Doors"
    carSery.save()

    carSery.detail = "2.5 Vcross L 4Doors"
    carSery.save()

    carSery.detail = "2.5 Vcross Z 2Doors"
    carSery.save()

    carSery.detail = "2.5 Z 2Doors"
    carSery.save()

    carSery.detail = "3.0 Hi-Lander Z-Prestige 2Doors"
    carSery.save()

    carSery.detail = "3.0 Hi-Lander Z-Prestige 4Doors"
    carSery.save()

    carSery.detail = "3.0 Vcross Z-Prestige 2Doors"
    carSery.save()

    carSery.detail = "3.0 Vcross Z-Prestige 4Doors"
    carSery.save()

    carSery.year = "2014"
    carSery.detail = "2.5 B 2Doors"
    carSery.save()

    carSery.detail = "2.5 Chassis 2Doors"
    carSery.save()

    carSery.detail = "2.5 Hi-Lander L 2Doors"
    carSery.save()

    carSery.detail = "2.5 Hi-Lander X-Series Z 2Doors"
    carSery.save()

    carSery.detail = "2.5 Hi-Lander X-Series Z 4Doors"
    carSery.save()

    carSery.detail = "2.5 Hi-Lander X-Series Z Prestige 4Doors"
    carSery.save()

    carSery.detail = "2.5 Hi-Lander Z 2Doors"
    carSery.save()

    carSery.detail = "2.5 Hi-Lander Z 4Doors"
    carSery.save()

    carSery.detail = "2.5 Hi-Lander Z-Prestige 2Doors"
    carSery.save()

    carSery.detail = "2.5 Hi-Lander Z-Prestige 4Doors"
    carSery.save()

    carSery.detail = "2.5 L 2Doors"
    carSery.save()

    carSery.detail = "2.5 S 2Doors"
    carSery.save()

    carSery.detail = "2.5 S 4Doors"
    carSery.save()

    carSery.detail = "2.5 Vcross L 2Doors"
    carSery.save()

    carSery.detail = "2.5 Vcross L 4Doors"
    carSery.save()

    carSery.detail = "2.5 Vcross Z 2Doors"
    carSery.save()

    carSery.detail = "2.5 Vcross Z 4Doors"
    carSery.save()

    carSery.detail = "2.5 X-Series Z 4Doors"
    carSery.save()

    carSery.detail = "2.5 Z 2Doors"
    carSery.save()

    carSery.detail = "2.5 Z 4Doors"
    carSery.save()

    carSery.detail = "3.0 B 2Doors"
    carSery.save()

    carSery.detail = "3.0 Hi-Lander Z-Prestige 2Doors"
    carSery.save()

    carSery.detail = "3.0 Hi-Lander Z-Prestige 4Doors"
    carSery.save()

    carSery.detail = "3.0 Vcross Z-Prestige 2Doors"
    carSery.save()

    carSery.detail = "3.0 Vcross Z-Prestige 4Doors"
    carSery.save()

    carSery.year = "2015"
    carSery.detail = "1.9 B 2Doors"
    carSery.save()

    carSery.detail = "1.9 Hi-Lander L 2Doors"
    carSery.save()

    carSery.detail = "1.9 Hi-Lander L 4Doors"
    carSery.save()

    carSery.detail = "1.9 Hi-Lander Z 2Doors"
    carSery.save()

    carSery.detail = "1.9 Hi-Lander Z 4Doors"
    carSery.save()

    carSery.detail = "1.9 Hi-Lander Z-Prestige 2Doors"
    carSery.save()

    carSery.detail = "1.9 Hi-Lander Z-Prestige 4Doors"
    carSery.save()

    carSery.detail = "1.9 L 2Doors"
    carSery.save()

    carSery.detail = "1.9 S 2Doors"
    carSery.save()

    carSery.detail = "1.9 S 4Doors"
    carSery.save()

    carSery.detail = "1.9 Z 2Doors"
    carSery.save()

    carSery.detail = "1.9 Z 4Doors"
    carSery.save()

    carSery.detail = "2.5 B 2Doors"
    carSery.save()

    carSery.detail = "2.5 Chassis 2Doors"
    carSery.save()

    carSery.detail = "2.5 Hi-Lander 99 th anniversary Edition 2Doors"
    carSery.save()

    carSery.detail = "2.5 Hi-Lander 99 th anniversary Edition 4Doors"
    carSery.save()

    carSery.detail = "2.5 Hi-Lander L 2Doors"
    carSery.save()

    carSery.detail = "2.5 Hi-Lander X-Series Z 2Doors"
    carSery.save()

    carSery.detail = "2.5 Hi-Lander X-Series Z 4Doors"
    carSery.save()

    carSery.detail = "2.5 Hi-Lander X-Series Z Prestige 4Doors"
    carSery.save()

    carSery.detail = "2.5 Hi-Lander Z 2Doors"
    carSery.save()

    carSery.detail = "2.5 Hi-Lander Z 4Doors"
    carSery.save()

    carSery.detail = "2.5 Hi-Lander Z-Prestige 2Doors"
    carSery.save()

    carSery.detail = "2.5 Hi-Lander Z-Prestige 4Doors"
    carSery.save()

    carSery.detail = "2.5 L 2Doors"
    carSery.save()

    carSery.detail = "2.5 S 2Doors"
    carSery.save()

    carSery.detail = "2.5 S 4Doors"
    carSery.save()

    carSery.detail = "2.5 Vcross L 2Doors"
    carSery.save()

    carSery.detail = "2.5 Vcross L 4Doors"
    carSery.save()

    carSery.detail = "2.5 Vcross Z 4Doors"
    carSery.save()

    carSery.detail = "2.5 X-Series Z 2Doors"
    carSery.save()

    carSery.detail = "2.5 Z 2Doors"
    carSery.save()

    carSery.detail = "2.5 Z 4Doors"
    carSery.save()

    carSery.detail = "3.0 B 2Doors"
    carSery.save()

    carSery.detail = "3.0 Hi-Lander Z-Prestige 2Doors"
    carSery.save()

    carSery.detail = "3.0 Hi-Lander Z-Prestige 4Doors"
    carSery.save()

    carSery.detail = "3.0 S 2Doors"
    carSery.save()

    carSery.detail = "3.0 Vcross Z 2Doors"
    carSery.save()

    carSery.detail = "3.0 Vcross Z 4Doors"
    carSery.save()

    carSery.detail = "3.0 Vcross Z-Prestige 2Doors"
    carSery.save()

    carSery.detail = "3.0 Vcross Z-Prestige 4Doors"
    carSery.save()
    
    carSery.year = "2016"
    carSery.detail = "1.9 B 2Doors"
    carSery.save()

    carSery.detail = "1.9 Hi-Lander L 2Doors"
    carSery.save()

    carSery.detail = "1.9 Hi-Lander L 4Doors"
    carSery.save()

    carSery.detail = "1.9 Hi-Lander X-Series Z 2Doors"
    carSery.save()

    carSery.detail = "1.9 Hi-Lander X-Series Z 4Doors"
    carSery.save()

    carSery.detail = "1.9 Hi-Lander X-Series Z Prestige 4Doors"
    carSery.save()

    carSery.detail = "1.9 Hi-Lander Z 2Doors"
    carSery.save()

    carSery.detail = "1.9 Hi-Lander Z 4Doors"
    carSery.save()

    carSery.detail = "1.9 Hi-Lander Z-Prestige 2Doors"
    carSery.save()

    carSery.detail = "1.9 Hi-Lander Z-Prestige 4Doors"
    carSery.save()

    carSery.detail = "1.9 L 2Doors"
    carSery.save()

    carSery.detail = "1.9 S 2Doors"
    carSery.save()

    carSery.detail = "1.9 S 4Doors"
    carSery.save()

    carSery.detail = "1.9 X-Series Z 2Doors"
    carSery.save()

    carSery.detail = "1.9 Z 2Doors"
    carSery.save()

    carSery.detail = "1.9 Z 4Doors"
    carSery.save()

    carSery.detail = "3.0 Hi-Lander Z-Prestige 2Doors"
    carSery.save()

    carSery.detail = "3.0 Hi-Lander Z-Prestige 4Doors"
    carSery.save()

    carSery.detail = "3.0 S 2Doors"
    carSery.save()

    carSery.detail = "3.0 Vcross MAX Z-Prestige 4Doors"
    carSery.save()

    carSery.detail = "3.0 Vcross Z 2Doors"
    carSery.save()

    carSery.detail = "3.0 Vcross Z 4Doors"
    carSery.save()

    carSery.detail = "3.0 Vcross Z-Prestige 4Doors"
    carSery.save()

    carSery.year = "2017"
    carSery.detail = "1.9 B 2Doors"
    carSery.save()

    carSery.detail = "1.9 Chassis 2Doors"
    carSery.save()

    carSery.detail = "1.9 Hi-Lander L 2Doors"
    carSery.save()

    carSery.detail = "1.9 Hi-Lander L 4Doors"
    carSery.save()

    carSery.detail = "1.9 Hi-Lander X-Series Z 2Doors"
    carSery.save()

    carSery.detail = "1.9 Hi-Lander X-Series Z 4Doors"
    carSery.save()

    carSery.detail = "1.9 Hi-Lander X-Series Z Prestige 4Doors"
    carSery.save()

    carSery.detail = "1.9 Hi-Lander Z 2Doors"
    carSery.save()

    carSery.detail = "1.9 Hi-Lander Z 4Doors"
    carSery.save()

    carSery.detail = "1.9 Hi-Lander Z-Prestige 2Doors"
    carSery.save()

    carSery.detail = "1.9 Hi-Lander Z-Prestige 4Doors"
    carSery.save()

    carSery.detail = "1.9 L 2Doors"
    carSery.save()

    carSery.detail = "1.9 S 2Doors"
    carSery.save()

    carSery.detail = "1.9 S 4Doors"
    carSery.save()

    carSery.detail = "1.9 X-Series Z 2Doors"
    carSery.save()

    carSery.detail = "1.9 Z 2Doors"
    carSery.save()

    carSery.detail = "1.9 Z 4Doors"
    carSery.save()

    carSery.detail = "3.0 Hi-Lander Z-Prestige 2Doors"
    carSery.save()

    carSery.detail = "3.0 Hi-Lander Z-Prestige 4Doors"
    carSery.save()

    carSery.detail = "3.0 S 2Doors"
    carSery.save()

    carSery.detail = "3.0 Vcross MAX Z-Prestige 4Doors"
    carSery.save()

    carSery.detail = "3.0 Vcross Z 2Doors"
    carSery.save()

    carSery.detail = "3.0 Vcross Z 4Doors"
    carSery.save()

    carSery.detail = "3.0 Vcross Z-Prestige 4Doors"
    carSery.save()
    
    carSery.year = "2018"
    carSery.detail = "1.9 B 2Doors"
    carSery.save()

    carSery.detail = "1.9 Chassis 2Doors"
    carSery.save()

    carSery.detail = "1.9 Hi-Lander L 2Doors"
    carSery.save()

    carSery.detail = "1.9 Hi-Lander L 4Doors"
    carSery.save()

    carSery.detail = "1.9 Hi-Lander Stealth Z 4Doors"
    carSery.save()

    carSery.detail = "1.9 Hi-Lander Stealth Z-Prestige 4Doors"
    carSery.save()

    carSery.detail = "1.9 Hi-Lander X-Series Z 2Doors"
    carSery.save()

    carSery.detail = "1.9 Hi-Lander X-Series Z 4Doors"
    carSery.save()

    carSery.detail = "1.9 Hi-Lander Z 2Doors"
    carSery.save()

    carSery.detail = "1.9 Hi-Lander Z 4Doors"
    carSery.save()

    carSery.detail = "1.9 Hi-Lander Z-Prestige 2Doors"
    carSery.save()

    carSery.detail = "1.9 Hi-Lander Z-Prestige 4Doors"
    carSery.save()

    carSery.detail = "1.9 L 2Doors"
    carSery.save()

    carSery.detail = "1.9 S 2Doors"
    carSery.save()

    carSery.detail = "1.9 S 4Doors"
    carSery.save()

    carSery.detail = "1.9 X-Series Speed 2Doors"
    carSery.save()

    carSery.detail = "1.9 X-Series Speed 4Doors"
    carSery.save()

    carSery.detail = "1.9 Z 2Doors"
    carSery.save()

    carSery.detail = "1.9 Z 4Doors"
    carSery.save()

    carSery.detail = "3.0 Hi-Lander Z-Prestige 2Doors"
    carSery.save()

    carSery.detail = "3.0 Hi-Lander Z-Prestige 4Doors"
    carSery.save()

    carSery.detail = "3.0 S 2Doors"
    carSery.save()

    carSery.detail = "3.0 Vcross MAX Z-Prestige 4Doors"
    carSery.save()

    carSery.detail = "3.0 Vcross Z 2Doors"
    carSery.save()

    carSery.detail = "3.0 Vcross Z 4Doors"
    carSery.save()

    carSery.year = "2019"
    carSery.detail = "1.9 B 2Doors"
    carSery.save()

    carSery.detail = "1.9 Chassis 2Doors"
    carSery.save()

    carSery.detail = "1.9 Hi-Lander L 2Doors"
    carSery.save()

    carSery.detail = "1.9 Hi-Lander L 4Doors"
    carSery.save()

    carSery.detail = "1.9 Hi-Lander Stealth Z 4Doors"
    carSery.save()

    carSery.detail = "1.9 Hi-Lander Stealth Z-Prestige 2Doors"
    carSery.save()

    carSery.detail = "1.9 Hi-Lander Stealth Z-Prestige 4Doors"
    carSery.save()

    carSery.detail = "1.9 Hi-Lander X-Series Z 2Doors"
    carSery.save()

    carSery.detail = "1.9 Hi-Lander X-Series Z 4Doors"
    carSery.save()

    carSery.detail = "1.9 Hi-Lander Z 2Doors"
    carSery.save()

    carSery.detail = "1.9 Hi-Lander Z 4Doors"
    carSery.save()

    carSery.detail = "1.9 Hi-Lander Z-Prestige 2Doors"
    carSery.save()

    carSery.detail = "1.9 Hi-Lander Z-Prestige 4Doors"
    carSery.save()

    carSery.detail = "1.9 L 2Doors"
    carSery.save()

    carSery.detail = "1.9 S 2Doors"
    carSery.save()

    carSery.detail = "1.9 S 4Doors"
    carSery.save()

    carSery.detail = "1.9 X-Series Speed 2Doors"
    carSery.save()

    carSery.detail = "1.9 X-Series Speed 4Doors"
    carSery.save()

    carSery.detail = "1.9 Z 2Doors"
    carSery.save()

    carSery.detail = "1.9 Z 4Doors"
    carSery.save()

    carSery.detail = "3.0 Hi-Lander Stealth Z-Prestige 2Doors"
    carSery.save()

    carSery.detail = "3.0 Hi-Lander Stealth Z-Prestige 4Doors"
    carSery.save()

    carSery.detail = "3.0 Hi-Lander Z-Prestige 2Doors"
    carSery.save()

    carSery.detail = "3.0 Hi-Lander Z-Prestige 4Doors"
    carSery.save()

    carSery.detail = "3.0 S 2Doors"
    carSery.save()

    carSery.detail = "3.0 Vcross MAX Z-Prestige 4Doors"
    carSery.save()

    carSery.detail = "3.0 Vcross Z 2Doors"
    carSery.save()

    carSery.detail = "3.0 Vcross Z 4Doors"
    carSery.save()
    //----D-Max
    //----Dragon Eyes no group
    //----Dragon Power no group
    //----ELF no group
    //----Faster Z no group
    carSery.model = "MU-7"
    carSery.year = "2004"
    carSery.detail = "3.0 4Doors"
    carSery.car_group_id = 4
    carSery.car_type_id = 5
    carSery.save()

    carSery.year = "2005"
    carSery.save()

    carSery.year = "2006"
    carSery.save()

    carSery.detail = "3.0 Activo 4Doors"
    carSery.save()

    carSery.detail = "3.0 Primo 4Doors"
    carSery.save()

    carSery.year = "2007"
    carSery.detail = "3.0 Activo 4Doors"
    carSery.save()

    carSery.detail = "3.0 Primo 4Doors"
    carSery.save()

    carSery.detail = "3.0 Primo Executive 4Doors"
    carSery.save()

    carSery.detail = "3.0 S 4Doors"
    carSery.save()

    carSery.year = "2008"
    carSery.detail = "3.0 Activo 4Doors"
    carSery.save()

    carSery.detail = "3.0 Activo Platinum 4Doors"
    carSery.save()

    carSery.detail = "3.0 Primo 4Doors"
    carSery.save()

    carSery.detail = "3.0 Primo Executive 4Doors"
    carSery.save()

    carSery.detail = "3.0 Primo Platinum 4Doors"
    carSery.save()

    carSery.detail = "3.0 S 4Doors"
    carSery.save()

    carSery.detail = "3.0 S Platinum 4Doors"
    carSery.save()


    carSery.year = "2009"
    carSery.detail = "3.0 Activo Platinum 4Doors"
    carSery.save()

    carSery.detail = "3.0 Activo Super Platinum 4Doors"
    carSery.save()

    carSery.detail = "3.0 Primo Platinum 4Doors"
    carSery.save()

    carSery.detail = "3.0 Primo Super Platinum 4Doors"
    carSery.save()

    carSery.detail = "3.0 S Platinum 4Doors"
    carSery.save()

    carSery.detail = "3.0 Super Platinum 4Doors"
    carSery.save()

    carSery.year = "2010"
    carSery.detail = "3.0 Activo Super Platinum 4Doors"
    carSery.save()

    carSery.detail = "3.0 Activo Super Titanium 4Doors"
    carSery.save()

    carSery.detail = "3.0 Primo Super Platinum 4Doors"
    carSery.save()

    carSery.detail = "3.0 Primo Super Titanium 4Doors"
    carSery.save()

    carSery.detail = "3.0 Super Platinum 4Doors"
    carSery.save()

    carSery.year = "2011"
    carSery.detail = "3.0 Activo Super Titanium 4Doors"
    carSery.save()

    carSery.detail = "3.0 CHOIZ 4Doors"
    carSery.save()

    carSery.detail = "3.0 Primo Super Titanium 4Doors"
    carSery.save()

    carSery.year = "2012"
    carSery.detail = "3.0 Activo Super Titanium 4Doors"
    carSery.save()

    carSery.detail = "3.0 CHOIZ 4Doors"
    carSery.save()

    carSery.detail = "3.0 Primo Super Titanium 4Doors"
    carSery.save()

    carSery.year = "2013"
    carSery.detail = "3.0 CHOIZ 4Doors"
    carSery.save()

    carSery.detail = "3.0 Primo Super Titanium 4Doors"
    carSery.save()
    //----MU-7
    carSery.model = "MU-X"
    carSery.detail = "2.5 4Doors"
    carSery.car_group_id = 3
    carSery.save()

    carSery.detail = "3.0 4Doors"
    carSery.save()

    carSery.year = "2014"
    carSery.detail = "2.5 4Doors"
    carSery.save()

    carSery.detail = "3.0 4Doors"
    carSery.save()

    carSery.year = "2015"
    carSery.detail = "2.5 4Doors"
    carSery.save()

    carSery.detail = "3.0 4Doors"
    carSery.save()

    carSery.year = "2016"
    carSery.detail = "1.9 4Doors"
    carSery.save()

    carSery.detail = "2.5 4Doors"
    carSery.save()

    carSery.detail = "3.0 4Doors"
    carSery.save()

    carSery.year = "2017"
    carSery.detail = "1.9 4Doors"
    carSery.save()

    carSery.detail = "3.0 4Doors"
    carSery.save()

    carSery.year = "2018"
    carSery.detail = "1.9 4Doors"
    carSery.save()

    carSery.detail = "1.9 The ICONIC 4Doors"
    carSery.save()

    carSery.detail = "3.0 4Doors"
    carSery.save()

    carSery.detail = "3.0 The ICONIC 4Doors"
    carSery.save()

    carSery.year = "2019"
    carSery.detail = "1.9 4Doors"
    carSery.save()

    carSery.detail = "1.9 The ICONIC 4Doors"
    carSery.save()

    carSery.detail = "1.9 THE ONYX 4Doors"
    carSery.save()

    carSery.detail = "3.0 4Doors"
    carSery.save()

    carSery.detail = "3.0 The ICONIC 4Doors"
    carSery.save()

    carSery.detail = "3.0 THE ONYX 4Doors"
    carSery.save()
    //----MU-X

    carSery.model = "Trooper"
    carSery.year = "1993"
    carSery.detail = "3.2 XS 4Doors"
    carSery.car_type_id = 5
    carSery.save()

    carSery.year = "1994"
    carSery.save()

    carSery.year = "1995"
    carSery.save()

    carSery.year = "1996"
    carSery.save()

    carSery.year = "1997"
    carSery.detail = "3.2 4Doors"
    carSery.save()

    carSery.detail = "3.2 Limited 4Doors"
    carSery.save()

    carSery.detail = "3.2 Sport 4Doors"
    carSery.save()

    carSery.detail = "3.2 XS 4Doors"
    carSery.save()

    carSery.year = "1998"
    carSery.detail = "3.2 Limited 4Doors"
    carSery.save()

    carSery.detail = "3.2 Sport 4Doors"
    carSery.save()

    carSery.detail = "3.2 XS 4Doors"
    carSery.save()

    carSery.year = "1999"
    carSery.detail = "3.2 Limited 4Doors"
    carSery.save()

    carSery.detail = "3.2 SE 4Doors"
    carSery.save()

    carSery.detail = "3.2 Sport 4Doors"
    carSery.save()

    carSery.year = "2000"
    carSery.detail = "3.2 SE 4Doors"
    carSery.save()

    carSery.year = "2001"
    carSery.detail = "3.0 4Doors"
    carSery.save()

    carSery.detail = "3.2 SE 4Doors"
    carSery.save()

    carSery.year = "2002"
    carSery.detail = "3.0 4Doors"
    carSery.save()

    carSery.detail = "3.2 SE 4Doors"
    carSery.save()

    carSery.year = "2003"
    carSery.detail = "3.0 4Doors"
    carSery.save()

    carSery.detail = "3.2 SE 4Doors"
    carSery.save()

    carSery.year = "2004"
    carSery.detail = "3.0 4Doors"
    carSery.save()

    carSery.year = "2005"
    carSery.detail = "3.0 4Doors"
    carSery.save()
    //----Trooper

    carSery.model = "Vega"
    carSery.year = "1998"
    carSery.detail = "2.8 4Doors"
    carSery.save()

    carSery.year = "1999"
    carSery.save()

    carSery.year = "2000"
    carSery.save()

    carSery.detail = "2.8 LS 4Doors"
    carSery.save()

    carSery.detail = "3.0 4Doors"
    carSery.save()

    carSery.year = "2001"
    carSery.detail = "2.8 4Doors"
    carSery.save()

    carSery.detail = "2.8 LS 4Doors"
    carSery.save()

    carSery.detail = "3.0 4Doors"
    carSery.save()

    carSery.year = "2002"
    carSery.detail = "2.8 4Doors"
    carSery.save()

    carSery.detail = "3.0 4Doors"
    carSery.save()
    //----Vega

    carSery.model = "Vertex"
    carSery.year = "1996"
    carSery.detail = "1.6 J-E 4Doors"
    carSery.car_type_id = 1
    carSery.save()

    carSery.detail = "1.6 J-L 4Doors"
    carSery.save()

    carSery.detail = "1.6 S-E VTEC 4Doors"
    carSery.save()

    carSery.detail = "1.6 S-L VTEC 4Doors"
    carSery.save()

    carSery.year = "1997"
    carSery.detail = "1.6 J-E 4Doors"
    carSery.save()

    carSery.detail = "1.6 J-L 4Doors"
    carSery.save()

    carSery.detail = "1.6 SE VTEC 4Doors"
    carSery.save()

    carSery.detail = "1.6 S-E VTEC 4Doors"
    carSery.save()

    carSery.detail = "1.6 SL VTEC 4Doors"
    carSery.save()

    carSery.detail = "1.6 S-L VTEC 4Doors"
    carSery.save()

    carSery.year = "1998"
    carSery.detail = "1.6 JE 4Doors"
    carSery.save()

    carSery.detail = "1.6 J-E 4Doors"
    carSery.save()

    carSery.detail = "1.6 JL 4Doors"
    carSery.save()

    carSery.detail = "1.6 J-L 4Doors"
    carSery.save()

    carSery.detail = "1.6 SE VTEC 4Doors"
    carSery.save()

    carSery.detail = "1.6 S-E VTEC 4Doors"
    carSery.save()

    carSery.detail = "1.6 SL VTEC 4Doors"
    carSery.save()

    carSery.detail = "1.6 S-L VTEC 4Doors"
    carSery.save()

    carSery.year = "1999"
    carSery.detail = "1.6 JE 4Doors"
    carSery.save()

    carSery.detail = "1.6 J-E 4Doors"
    carSery.save()

    carSery.detail = "1.6 JL 4Doors"
    carSery.save()

    carSery.detail = "1.6 J-L 4Doors"
    carSery.save()

    carSery.detail = "1.6 SE VTEC 4Doors"
    carSery.save()

    carSery.detail = "1.6 S-E VTEC 4Doors"
    carSery.save()

    carSery.detail = "1.6 SL VTEC 4Doors"
    carSery.save()

    carSery.detail = "1.6 S-L VTEC 4Doors"
    carSery.save()

    carSery.year = "2000"
    carSery.detail = "1.6 JE 4Doors"
    carSery.save()

    carSery.detail = "1.6 JL 4Doors"
    carSery.save()

    carSery.detail = "1.6 SE VTEC 4Doors"
    carSery.save()

    carSery.detail = "1.6 S-E VTEC 4Doors"
    carSery.save()

    carSery.detail = "1.6 SL VTEC 4Doors"
    carSery.save()

    carSery.year = "2001"
    carSery.detail = "1.6 JE 4Doors"
    carSery.save()

    carSery.detail = "1.6 JL 4Doors"
    carSery.save()

    carSery.detail = "1.6 SE VTEC 4Doors"
    carSery.save()

    carSery.detail = "1.6 S-E VTEC 4Doors"
    carSery.save()

    carSery.detail = "1.6 SL VTEC 4Doors"
    carSery.save()
    //----Vertex
    //----Isuzu End

    //----Suzuki Start
    carSery.brand = "Suzuki"
    carSery.model = "APV"
    carSery.year = "2004"
    carSery.detail = "1.6 GA 4Doors"
    carSery.car_group_id = 4
    carSery.car_type_id = 4
    carSery.save()

    carSery.detail = "1.6 GL 4Doors"
    carSery.save()

    carSery.detail = "1.6 GLX 4Doors"
    carSery.save()

    carSery.year = "2005"
    carSery.detail = "1.6 GA 4Doors"
    carSery.save()

    carSery.detail = "1.6 GL 4Doors"
    carSery.save()

    carSery.detail = "1.6 GLS 4Doors"
    carSery.save()

    carSery.detail = "1.6 GLX 4Doors"
    carSery.save()

    carSery.year = "2006"
    carSery.detail = "1.6 GA 4Doors"
    carSery.save()

    carSery.detail = "1.6 GL 4Doors"
    carSery.save()

    carSery.detail = "1.6 GLS 4Doors"
    carSery.save()

    carSery.detail = "1.6 GLX 4Doors"
    carSery.save()

    carSery.year = "2007"
    carSery.detail = "1.6 GA 4Doors"
    carSery.save()

    carSery.detail = "1.6 GL 4Doors"
    carSery.save()

    carSery.detail = "1.6 GLS 4Doors"
    carSery.save()

    carSery.detail = "1.6 GLX 4Doors"
    carSery.save()

    carSery.year = "2008"
    carSery.detail = "1.6 GL 4Doors"
    carSery.save()

    carSery.detail = "1.6 GLX 4Doors"
    carSery.save()

    carSery.year = "2009"
    carSery.detail = "1.6 GL 4Doors"
    carSery.save()

    carSery.detail = "1.6 GLX 4Doors"
    carSery.save()

    carSery.year = "2010"
    carSery.detail = "1.6 GL 4Doors"
    carSery.save()

    carSery.detail = "1.6 GLX 4Doors"
    carSery.save()

    carSery.year = "2011"
    carSery.detail = "1.6 GLX 4Doors"
    carSery.save()

    carSery.year = "2012"
    carSery.detail = "1.6 GLX 4Doors"
    carSery.save()
    //----APV

    carSery.model = "Caribian"
    carSery.year = "1992"
    carSery.detail = "1.3 2Doors"
    carSery.car_group_id = 5
    carSery.car_type_id = 2
    carSery.save()

    carSery.year = "1993"
    carSery.save()

    carSery.year = "1994"
    carSery.save()

    carSery.year = "1995"
    carSery.save()

    carSery.detail = "1.3 Sporty 2Doors"
    carSery.save()

    carSery.year = "1996"
    carSery.detail = "1.3 2Doors"
    carSery.save()

    carSery.detail = "1.3 Sporty 2Doors"
    carSery.save()

    carSery.year = "1997"
    carSery.detail = "1.3 2Doors"
    carSery.save()

    carSery.detail = "1.3 Sporty 2Doors"
    carSery.save()

    carSery.year = "1998"
    carSery.save()

    carSery.year = "1999"
    carSery.save()

    carSery.year = "2000"
    carSery.save()

    carSery.year = "2001"
    carSery.save()

    carSery.year = "2002"
    carSery.save()

    carSery.year = "2003"
    carSery.save()

    carSery.year = "2004"
    carSery.save()

    carSery.year = "2005"
    carSery.save()
    //----Caribian
    //----Carry no group

    carSery.model = "Celerio"
    carSery.year = "2014"
    carSery.detail = "1.0 GA 4Doors"
    carSery.car_type_id = 1
    carSery.save()

    carSery.detail = "1.0 GL 4Doors"
    carSery.save()

    carSery.detail = "1.0 GLX 4Doors"
    carSery.save()

    carSery.year = "2015"
    carSery.detail = "1.0 GA 4Doors"
    carSery.save()

    carSery.detail = "1.0 GL 4Doors"
    carSery.save()

    carSery.detail = "1.0 GLX 4Doors"
    carSery.save()

    carSery.year = "2016"
    carSery.detail = "1.0 GA 4Doors"
    carSery.save()

    carSery.detail = "1.0 GA Limited 4Doors"
    carSery.save()

    carSery.detail = "1.0 GL 4Doors"
    carSery.save()

    carSery.detail = "1.0 GL Limited 4Doors"
    carSery.save()

    carSery.detail = "1.0 GLX 4Doors"
    carSery.save()

    carSery.year = "2017"
    carSery.detail = "1.0 GA 4Doors"
    carSery.save()

    carSery.detail = "1.0 GA Limited 4Doors"
    carSery.save()

    carSery.detail = "1.0 GL 4Doors"
    carSery.save()

    carSery.detail = "1.0 GL Limited 4Doors"
    carSery.save()

    carSery.detail = "1.0 GLX 4Doors"
    carSery.save()

    carSery.year = "2018"
    carSery.detail = "1.0 GA 4Doors"
    carSery.save()

    carSery.detail = "1.0 GA Limited 4Doors"
    carSery.save()

    carSery.detail = "1.0 GL 4Doors"
    carSery.save()

    carSery.detail = "1.0 GL Limited 4Doors"
    carSery.save()

    carSery.detail = "1.0 GLX 4Doors"
    carSery.save()

    carSery.year = "2017"
    carSery.detail = "1.0 GA 4Doors"
    carSery.save()

    carSery.detail = "1.0 GL 4Doors"
    carSery.save()

    carSery.detail = "1.0 GLX 4Doors"
    carSery.save()
    //----Celerio
    //----Ciaz no group

    carSery.model = "Ertiga"
    carSery.year = "2013"
    carSery.detail = "1.4 GA 4Doors"
    carSery.car_group_id = 4
    carSery.car_type_id = 6
    carSery.save()

    carSery.detail = "1.4 GL 4Doors"
    carSery.save()

    carSery.detail = "1.4 GX 4Doors"
    carSery.save()

    carSery.year = "2014"
    carSery.detail = "1.4 GA 4Doors"
    carSery.save()

    carSery.detail = "1.4 GL 4Doors"
    carSery.save()

    carSery.detail = "1.4 GX 4Doors"
    carSery.save()

    carSery.year = "2015"
    carSery.detail = "1.4 GA 4Doors"
    carSery.save()

    carSery.detail = "1.4 GL 4Doors"
    carSery.save()

    carSery.detail = "1.4 GX 4Doors"
    carSery.save()

    carSery.year = "2016"
    carSery.detail = "1.4 Dreza 4Doors"
    carSery.save()

    carSery.detail = "1.4 GA 4Doors"
    carSery.save()

    carSery.detail = "1.4 GL 4Doors"
    carSery.save()

    carSery.detail = "1.4 GX 4Doors"
    carSery.save()

    carSery.year = "2017"
    carSery.detail = "1.4 Dreza 4Doors"
    carSery.save()

    carSery.detail = "1.4 GL 4Doors"
    carSery.save()

    carSery.detail = "1.4 GX 4Doors"
    carSery.save()

    carSery.year = "2018"
    carSery.detail = "1.4 Dreza 4Doors"
    carSery.save()

    carSery.detail = "1.4 GL 4Doors"
    carSery.save()

    carSery.detail = "1.4 GX 4Doors"
    carSery.save()

    carSery.year = "2019"
    carSery.detail = "1.4 Dreza 4Doors"
    carSery.save()

    carSery.detail = "1.4 GL 4Doors"
    carSery.save()

    carSery.detail = "1.4 GX 4Doors"
    carSery.save()

    carSery.detail = "1.5 GL 4Doors"
    carSery.save()

    carSery.detail = "1.5 GX 4Doors"
    carSery.save()
    //----Ertiga

    carSery.model = "Esteem"
    carSery.year = "1995"
    carSery.detail = "1.6 GLX 4Doors"
    carSery.car_group_id = 3
    carSery.car_type_id = 1
    carSery.save()

    carSery.year = "1996"
    carSery.save()

    carSery.year = "1997"
    carSery.save()

    carSery.year = "1998"
    carSery.save()

    carSery.year = "1999"
    carSery.save()

    carSery.year = "2000"
    carSery.save()
    //----Esteem
    //----Jimny no group

    carSery.model = "Swift"
    carSery.year = "1992"
    carSery.detail = "1.3 4Doors"
    carSery.car_group_id = 4
    carSery.save()

    carSery.year = "1993"
    carSery.save()

    carSery.year = "1994"
    carSery.save()

    carSery.year = "2006"
    carSery.detail = "1.5 4Doors"
    carSery.save()

    carSery.year = "2007"
    carSery.save()

    carSery.year = "2009"
    carSery.detail = "1.5 GA 4Doors"
    carSery.save()

    carSery.detail = "1.5 GL 4Doors"
    carSery.save()

    carSery.year = "2010"
    carSery.detail = "1.5 GA 4Doors"
    carSery.save()

    carSery.detail = "1.5 GL 4Doors"
    carSery.save()

    carSery.year = "2011"
    carSery.detail = "1.5 GA 4Doors"
    carSery.save()

    carSery.detail = "1.5 GL 4Doors"
    carSery.save()

    carSery.year = "2012"
    carSery.detail = "1.2 GA 4Doors"
    carSery.save()

    carSery.detail = "1.2 GL 4Doors"
    carSery.save()

    carSery.detail = "1.2 GLX 4Doors"
    carSery.save()

    carSery.detail = "1.5 GA 4Doors"
    carSery.save()

    carSery.detail = "1.5 GL 4Doors"
    carSery.save()

    carSery.year = "2013"
    carSery.detail = "1.2 GA 4Doors"
    carSery.save()

    carSery.detail = "1.2 GL 4Doors"
    carSery.save()

    carSery.detail = "1.2 GLX 4Doors"
    carSery.save()

    carSery.year = "2014"
    carSery.detail = "1.2 GA 4Doors"
    carSery.save()

    carSery.detail = "1.2 GL 4Doors"
    carSery.save()

    carSery.detail = "1.2 GLX 4Doors"
    carSery.save()

    carSery.detail = "1.2 RX 4Doors"
    carSery.save()

    carSery.year = "2015"
    carSery.detail = "1.2 GA 4Doors"
    carSery.save()

    carSery.detail = "1.2 GL 4Doors"
    carSery.save()

    carSery.detail = "1.2 GLX 4Doors"
    carSery.save()

    carSery.detail = "1.2 RX 4Doors"
    carSery.save()

    carSery.year = "2016"
    carSery.detail = "1.2 GA 4Doors"
    carSery.save()

    carSery.detail = "1.2 GL 4Doors"
    carSery.save()

    carSery.detail = "1.2 GLX 4Doors"
    carSery.save()

    carSery.detail = "1.2 RX 4Doors"
    carSery.save()

    carSery.detail = "1.2 Sai 4Doors"
    carSery.save()

    carSery.year = "2017"
    carSery.detail = "1.2 GA 4Doors"
    carSery.save()

    carSery.detail = "1.2 GL 4Doors"
    carSery.save()

    carSery.detail = "1.2 GLX 4Doors"
    carSery.save()

    carSery.detail = "1.2 RX II 4Doors"
    carSery.save()

    carSery.detail = "1.2 Sai 4Doors"
    carSery.save()

    carSery.year = "2018"
    carSery.detail = "1.2 GA 4Doors"
    carSery.save()

    carSery.detail = "1.2 GL 4Doors"
    carSery.save()

    carSery.detail = "1.2 GLX 4Doors"
    carSery.save()

    carSery.detail = "1.2 RX II 4Doors"
    carSery.save()

    carSery.year = "2019"
    carSery.detail = "1.2 GA 4Doors"
    carSery.save()

    carSery.detail = "1.2 GL 4Doors"
    carSery.save()

    carSery.detail = "1.2 GLX 4Doors"
    carSery.save()
    //----Swift
    carSery.model = "SX4"
    carSery.year = "2010"
    carSery.detail = "1.6 4Doors"
    carSery.car_type_id = 5
    carSery.save()

    carSery.year = "2011"
    carSery.save()

    carSery.year = "2012"
    carSery.save()

    carSery.year = "2013"
    carSery.save()

    carSery.year = "2014"
    carSery.save()
    //----SX4
    carSery.model = "Vitara"
    carSery.year = "1992"
    carSery.detail = "1.6 2Doors"
    carSery.car_group_id = 3
    carSery.save()

    carSery.year = "1993"
    carSery.save()

    carSery.year = "1994"
    carSery.save()

    carSery.detail = "1.6 4Doors"
    carSery.save()

    carSery.year = "1995"
    carSery.detail = "1.6 2Doors"
    carSery.save()

    carSery.detail = "1.6 4Doors"
    carSery.save()

    carSery.year = "1996"
    carSery.save()

    carSery.detail = "2.0 V6 4Doors"
    carSery.save()

    carSery.year = "1997"
    carSery.detail = "1.6 4Doors"
    carSery.save()

    carSery.detail = "2.0 V6 4Doors"
    carSery.save()

    carSery.year = "1998"
    carSery.detail = "1.6 4Doors"
    carSery.save()

    carSery.detail = "2.0 V6 4Doors"
    carSery.save()

    carSery.year = "1999"
    carSery.detail = "1.6 4Doors"
    carSery.save()

    carSery.year = "2000"
    carSery.save()

    carSery.year = "2001"
    carSery.save()

    carSery.year = "2002"
    carSery.save()

    carSery.year = "2003"
    carSery.save()

    carSery.detail = "2.0 Grand 4Doors"
    carSery.save()

    carSery.detail = "2.7 Grand XL-7 4Doors"
    carSery.save()

    carSery.year = "2004"
    carSery.detail = "1.6 4Doors"
    carSery.save()

    carSery.detail = "2.0 Grand 4Doors"
    carSery.save()

    carSery.detail = "2.7 Grand XL-7 4Doors"
    carSery.save()

    carSery.year = "2005"
    carSery.detail = "1.6 4Doors"
    carSery.save()

    carSery.detail = "2.0 Grand 4Doors"
    carSery.save()

    carSery.detail = "2.7 Grand XL-7 4Doors"
    carSery.save()

    carSery.year = "2006"
    carSery.detail = "2.0 Grand 4Doors"
    carSery.save()

    carSery.year = "2007"
    carSery.detail = "2.0 Grand JLX 4Doors"
    carSery.save()

    carSery.year = "2008"
    carSery.save()

    carSery.year = "2009"
    carSery.save()

    carSery.year = "2010"
    carSery.save()

    carSery.year = "2011"
    carSery.save()

    carSery.year = "2012"
    carSery.save()
    //----Vitara
    //----Suzuki End

    //----Ford Start
    //----Aspire no group
    //----Capri no group

    carSery.brand = "Ford"
    carSery.model = "EcoSport"
    carSery.year = "2013"
    carSery.detail = "1.5 Ambiente 4Doors"
    carSery.car_group_id = 4
    carSery.car_type_id = 5
    carSery.save()

    carSery.detail = "1.5 Titanium 4Doors"
    carSery.save()

    carSery.detail = "1.5 Trend 4Doors"
    carSery.save()

    carSery.year = "2014"
    carSery.detail = "1.5 Ambiente 4Doors"
    carSery.save()

    carSery.detail = "1.5 Titanium 4Doors"
    carSery.save()

    carSery.detail = "1.5 Trend 4Doors"
    carSery.save()

    carSery.year = "2015"
    carSery.detail = "1.5 Ambiente 4Doors"
    carSery.save()

    carSery.detail = "1.5 Titanium 4Doors"
    carSery.save()

    carSery.detail = "1.5 Trend 4Doors"
    carSery.save()

    carSery.year = "2016"
    carSery.detail = "1.5 Ambiente 4Doors"
    carSery.save()

    carSery.detail = "1.5 Titanium 4Doors"
    carSery.save()

    carSery.detail = "1.5 Trend 4Doors"
    carSery.save()

    carSery.year = "2017"
    carSery.detail = "1.5 Ambiente 4Doors"
    carSery.save()

    carSery.detail = "1.5 Titanium 4Doors"
    carSery.save()

    carSery.detail = "1.5 Trend 4Doors"
    carSery.save()

    carSery.year = "2018"
    carSery.detail = "1.5 Trend 4Doors"
    carSery.save()
    //----EcoSport

    carSery.model = "Escape"
    carSery.year = "2002"
    carSery.detail = "3.0 XLT 4Doors"
    carSery.car_group_id = 3
    carSery.save()

    carSery.year = "2003"
    carSery.detail = "2.0 4Doors"
    carSery.save()

    carSery.detail = "3.0 Centennial Edition 4Doors"
    carSery.save()

    carSery.detail = "3.0 XLT 4Doors"
    carSery.save()

    carSery.year = "2004"
    carSery.detail = "2.0 4Doors"
    carSery.save()

    carSery.detail = "2.3 XLS 4Doors"
    carSery.save()

    carSery.detail = "2.3 XLT 4Doors"
    carSery.save()

    carSery.detail = "3.0 Centennial Edition 4Doors"
    carSery.save()

    carSery.detail = "3.0 XLT 4Doors"
    carSery.save()

    carSery.year = "2005"
    carSery.detail = "2.0 4Doors"
    carSery.save()

    carSery.detail = "2.3 XLS 4Doors"
    carSery.save()

    carSery.detail = "2.3 XLT 4Doors"
    carSery.save()

    carSery.detail = "3.0 XLT 4Doors"
    carSery.save()

    carSery.year = "2006"
    carSery.detail = "2.3 XLS 4Doors"
    carSery.save()

    carSery.detail = "2.3 XLT 4Doors"
    carSery.save()

    carSery.detail = "3.0 LTD 4Doors"
    carSery.save()

    carSery.detail = "3.0 XLS 4Doors"
    carSery.save()

    carSery.detail = "3.0 XLT 4Doors"
    carSery.save()

    carSery.year = "2007"
    carSery.detail = "2.3 XLS 4Doors"
    carSery.save()

    carSery.detail = "2.3 XLT 4Doors"
    carSery.save()

    carSery.detail = "3.0 LTD 4Doors"
    carSery.save()

    carSery.detail = "3.0 XLS 4Doors"
    carSery.save()

    carSery.year = "2008"
    carSery.detail = "2.3 XLS 4Doors"
    carSery.save()

    carSery.detail = "2.3 XLT 4Doors"
    carSery.save()

    carSery.year = "2009"
    carSery.detail = "2.3 XLS 4Doors"
    carSery.save()

    carSery.detail = "2.3 XLT 4Doors"
    carSery.save()

    carSery.year = "2010"
    carSery.detail = "2.3 XLS 4Doors"
    carSery.save()

    carSery.detail = "2.3 XLT 4Doors"
    carSery.save()

    carSery.year = "2011"
    carSery.detail = "2.3 XLS 4Doors"
    carSery.save()

    carSery.detail = "2.3 XLT 4Doors"
    carSery.save()

    carSery.year = "2012"
    carSery.detail = "2.3 XLS 4Doors"
    carSery.save()

    carSery.detail = "2.3 XLT 4Doors"
    carSery.save()

    carSery.year = "2013"
    carSery.save()

    carSery.year = "2014"
    carSery.save()

    carSery.year = "2015"
    carSery.save()
    //----Escape
    //----Escort no group

    carSery.model = "Everest"
    carSery.year = "2003"
    carSery.detail = "2.5 LTD 4Doors"
    carSery.save()

    carSery.detail = "2.5 Velour 4Doors"
    carSery.save()

    carSery.year = "2004"
    carSery.detail = "2.5 LTD 4Doors"
    carSery.save()

    carSery.detail = "2.5 Mid 4Doors"
    carSery.save()

    carSery.detail = "2.5 XLT 4Doors"
    carSery.save()

    carSery.year = "2005"
    carSery.detail = "2.5 LTD 4Doors"
    carSery.save()

    carSery.detail = "2.5 Mid 4Doors"
    carSery.save()

    carSery.detail = "2.5 XLT 4Doors"
    carSery.save()

    carSery.year = "2006"
    carSery.detail = "2.5 LTD 4Doors"
    carSery.save()

    carSery.detail = "2.5 LTD TDCi 4Doors"
    carSery.save()

    carSery.detail = "2.5 Mid 4Doors"
    carSery.save()

    carSery.detail = "2.5 XLT 4Doors"
    carSery.save()

    carSery.detail = "2.5 XLT TDCi 4Doors"
    carSery.save()

    carSery.detail = "3.0 LTD TDCi 4Doors"
    carSery.save()

    carSery.detail = "3.0 XLT TDCi 4Doors"
    carSery.save()

    carSery.year = "2007"
    carSery.detail = "2.5 LTD TDCi 4Doors"
    carSery.save()

    carSery.detail = "2.5 XLT TDCi 4Doors"
    carSery.save()

    carSery.detail = "3.0 Cool White LTD TDCi 4Doors"
    carSery.save()

    carSery.detail = "3.0 LTD TDCi 4Doors"
    carSery.save()

    carSery.detail = "3.0 XLT TDCi 4Doors"
    carSery.save()

    carSery.year = "2008"
    carSery.detail = "2.5 LTD TDCi 4Doors"
    carSery.save()

    carSery.detail = "2.5 XLT TDCi 4Doors"
    carSery.save()

    carSery.detail = "3.0 Cool White LTD TDCi 4Doors"
    carSery.save()

    carSery.detail = "3.0 LTD TDCi 4Doors"
    carSery.save()

    carSery.detail = "3.0 XLT TDCi 4Doors"
    carSery.save()

    carSery.year = "2009"
    carSery.detail = "2.5 LTD TDCi 4Doors"
    carSery.save()

    carSery.detail = "2.5 XLT TDCi 4Doors"
    carSery.save()

    carSery.detail = "3.0 Cool White LTD TDCi 4Doors"
    carSery.save()

    carSery.detail = "3.0 LTD TDCi 4Doors"
    carSery.save()

    carSery.year = "2010"
    carSery.detail = "2.5 LTD Sport TDCi 4Doors"
    carSery.save()

    carSery.detail = "2.5 LTD TDCi 4Doors"
    carSery.save()

    carSery.detail = "2.5 XLT TDCi 4Doors"
    carSery.save()

    carSery.detail = "3.0 LTD Sport TDCi 4Doors"
    carSery.save()

    carSery.detail = "3.0 LTD TDCi 4Doors"
    carSery.save()

    carSery.year = "2011"
    carSery.detail = "2.5 LTD Sport TDCi 4Doors"
    carSery.save()

    carSery.detail = "2.5 LTD TDCi 4Doors"
    carSery.save()

    carSery.detail = "2.5 XLT TDCi 4Doors"
    carSery.save()

    carSery.detail = "3.0 LTD Sport TDCi 4Doors"
    carSery.save()

    carSery.detail = "3.0 LTD TDCi 4Doors"
    carSery.save()

    carSery.year = "2012"
    carSery.detail = "2.5 LTD Sport TDCi 4Doors"
    carSery.save()

    carSery.detail = "2.5 LTD TDCi 4Doors"
    carSery.save()

    carSery.detail = "2.5 XLT TDCi 4Doors"
    carSery.save()

    carSery.detail = "3.0 LTD Sport TDCi 4Doors"
    carSery.save()

    carSery.detail = "3.0 LTD TDCi 4Doors"
    carSery.save()

    carSery.year = "2013"
    carSery.detail = "2.5 LTD TDCi 4Doors"
    carSery.save()

    carSery.detail = "3.0 LTD TDCi 4Doors"
    carSery.save()

    carSery.year = "2014"
    carSery.detail = "2.5 LTD TDCi 4Doors"
    carSery.save()

    carSery.detail = "3.0 LTD TDCi 4Doors"
    carSery.save()

    carSery.year = "2015"
    carSery.detail = "2.2 Titanium 4Doors"
    carSery.save()

    carSery.detail = "2.5 LTD TDCi 4Doors"
    carSery.save()

    carSery.detail = "3.0 LTD TDCi 4Doors"
    carSery.save()

    carSery.detail = "3.2 Titanium 4Doors"
    carSery.save()

    carSery.detail = "3.2 Titanium+ 4Doors"
    carSery.save()

    carSery.year = "2016"
    carSery.detail = "2.2 Titanium 4Doors"
    carSery.save()

    carSery.detail = "2.2 Titanium+ 4Doors"
    carSery.save()

    carSery.detail = "3.2 Titanium 4Doors"
    carSery.save()

    carSery.detail = "3.2 Titanium+ 4Doors"
    carSery.save()

    carSery.year = "2017"
    carSery.detail = "2.2 Titanium 4Doors"
    carSery.save()

    carSery.detail = "2.2 Titanium+ 4Doors"
    carSery.save()

    carSery.detail = "3.2 Titanium+ 4Doors"
    carSery.save()

    carSery.year = "2018"
    carSery.detail = "2.0 Titanium 4Doors"
    carSery.save()

    carSery.detail = "2.0 Titanium+ 4Doors"
    carSery.save()

    carSery.detail = "2.0 Trend 4Doors"
    carSery.save()

    carSery.detail = "2.2 Titanium 4Doors"
    carSery.save()

    carSery.detail = "2.2 Titanium+ 4Doors"
    carSery.save()

    carSery.detail = "3.2 Titanium+ 4Doors"
    carSery.save()

    carSery.year = "2019"
    carSery.detail = "2.0 Titanium 4Doors"
    carSery.save()

    carSery.detail = "2.0 Titanium+ 4Doors"
    carSery.save()

    carSery.detail = "2.0 Trend 4Doors"
    carSery.save()
    //----Everest
    //----Explorer no group
    //----Festival no group
    carSery.model = "Fiesta"
    carSery.year = "2010"
    carSery.detail = "1.4 Style 4Doors"
    carSery.car_group_id = 5
    carSery.car_type_id = 1
    carSery.save()

    carSery.detail = "1.6 Sport 4Doors"
    carSery.save()

    carSery.detail = "1.6 Trend 4Doors"
    carSery.save()

    carSery.year = "2011"
    carSery.detail = "1.4 Style 4Doors"
    carSery.save()

    carSery.detail = "1.6 Sport 4Doors"
    carSery.save()

    carSery.detail = "1.6 Sport+ 4Doors"
    carSery.save()

    carSery.detail = "1.6 Trend 4Doors"
    carSery.save()

    carSery.year = "2012"
    carSery.detail = "1.4 Style 4Doors"
    carSery.save()

    carSery.detail = "1.5 Sport 4Doors"
    carSery.save()

    carSery.detail = "1.5 Trend 4Doors"
    carSery.save()

    carSery.detail = "1.6 Sport 4Doors"
    carSery.save()

    carSery.detail = "1.6 Sport Ultimate 4Doors"
    carSery.save()

    carSery.detail = "1.6 Sport+ 4Doors"
    carSery.save()

    carSery.detail = "1.6 Trend 4Doors"
    carSery.save()

    carSery.year = "2013"
    carSery.detail = "1.0 Sport 4Doors"
    carSery.save()

    carSery.detail = "1.0 Titanium 4Doors"
    carSery.save()

    carSery.detail = "1.5 Sport 4Doors"
    carSery.save()

    carSery.detail = "1.5 Trend 4Doors"
    carSery.save()

    carSery.detail = "1.6 Sport Ultimate 4Doors"
    carSery.save()

    carSery.detail = "1.6 Sport+ 4Doors"
    carSery.save()

    carSery.year = "2014"
    carSery.detail = "1.0 Sport 4Doors"
    carSery.save()

    carSery.detail = "1.0 Titanium 4Doors"
    carSery.save()

    carSery.detail = "1.5 Ambiente 4Doors"
    carSery.save()

    carSery.detail = "1.5 Sport 4Doors"
    carSery.save()

    carSery.detail = "1.5 Titanium 4Doors"
    carSery.save()

    carSery.detail = "1.5 Trend 4Doors"
    carSery.save()

    carSery.detail = "1.6 Sport Ultimate 4Doors"
    carSery.save()

    carSery.detail = "1.6 Sport+ 4Doors"
    carSery.save()

    carSery.year = "2015"
    carSery.detail = "1.0 Sport 4Doors"
    carSery.save()

    carSery.detail = "1.0 Titanium 4Doors"
    carSery.save()

    carSery.detail = "1.5 Ambiente 4Doors"
    carSery.save()

    carSery.detail = "1.5 Sport 4Doors"
    carSery.save()

    carSery.detail = "1.5 Titanium 4Doors"
    carSery.save()

    carSery.detail = "1.5 Trend 4Doors"
    carSery.save()

    carSery.year = "2016"
    carSery.detail = "1.0 Sport 4Doors"
    carSery.save()

    carSery.detail = "1.0 Titanium 4Doors"
    carSery.save()

    carSery.detail = "1.5 Ambiente 4Doors"
    carSery.save()

    carSery.detail = "1.5 Sport 4Doors"
    carSery.save()

    carSery.detail = "1.5 Titanium 4Doors"
    carSery.save()

    carSery.detail = "1.5 Trend 4Doors"
    carSery.save()

    carSery.year = "2017"
    carSery.detail = "1.5 Sport 4Doors"
    carSery.save()

    carSery.detail = "1.5 Trend 4Doors"
    carSery.save()
    //----Fiesta

    carSery.model = "Focus"
    carSery.year = "2005"
    carSery.detail = "1.8 Finesse 4Doors"
    carSery.car_group_id = 3
    carSery.save()

    carSery.detail = "1.8 Ghia 4Doors"
    carSery.save()

    carSery.detail = "1.8 Trend 4Doors"
    carSery.save()

    carSery.detail = "2.0 Sport 4Doors"
    carSery.save()

    carSery.year = "2006"
    carSery.detail = "1.8 Finesse 4Doors"
    carSery.save()

    carSery.detail = "1.8 Ghia 4Doors"
    carSery.save()

    carSery.detail = "1.8 Trend 4Doors"
    carSery.save()

    carSery.detail = "2.0 Sport 4Doors"
    carSery.save()

    carSery.year = "2007"
    carSery.detail = "1.8 Finesse 4Doors"
    carSery.save()

    carSery.detail = "1.8 Ghia 4Doors"
    carSery.save()

    carSery.detail = "1.8 Trend 4Doors"
    carSery.save()

    carSery.detail = "2.0 Ghia 4Doors"
    carSery.save()

    carSery.detail = "2.0 Sport 4Doors"
    carSery.save()

    carSery.year = "2008"
    carSery.detail = "1.8 Finesse 4Doors"
    carSery.save()

    carSery.detail = "2.0 Ghia 4Doors"
    carSery.save()

    carSery.detail = "2.0 Sport 4Doors"
    carSery.save()

    carSery.year = "2009"
    carSery.detail = "1.8 Ambiente 4Doors"
    carSery.save()

    carSery.detail = "1.8 Finesse 4Doors"
    carSery.save()

    carSery.detail = "2.0 Ghia 4Doors"
    carSery.save()

    carSery.detail = "2.0 Sport 4Doors"
    carSery.save()

    carSery.year = "2010"
    carSery.detail = "1.8 Ambiente 4Doors"
    carSery.save()

    carSery.detail = "1.8 Finesse 4Doors"
    carSery.save()

    carSery.detail = "2.0 Ghia 4Doors"
    carSery.save()

    carSery.detail = "2.0 Sport 4Doors"
    carSery.save()

    carSery.year = "2011"
    carSery.detail = "1.8 Finesse 4Doors"
    carSery.save()

    carSery.detail = "2.0 Ghia 4Doors"
    carSery.save()

    carSery.detail = "2.0 Sport 4Doors"
    carSery.save()

    carSery.year = "2012"
    carSery.detail = "1.6 Ambiente 4Doors"
    carSery.save()

    carSery.detail = "1.6 Trend 4Doors"
    carSery.save()

    carSery.detail = "1.8 Finesse 4Doors"
    carSery.save()

    carSery.detail = "2.0 Ghia 4Doors"
    carSery.save()

    carSery.detail = "2.0 Sport 4Doors"
    carSery.save()

    carSery.detail = "2.0 Sport+ 4Doors"
    carSery.save()

    carSery.detail = "2.0 Titanium 4Doors"
    carSery.save()

    carSery.detail = "2.0 Titanium+ 4Doors"
    carSery.save()

    carSery.year = "2013"
    carSery.detail = "1.6 Ambiente 4Doors"
    carSery.save()

    carSery.detail = "1.6 Trend 4Doors"
    carSery.save()

    carSery.detail = "2.0 Sport 4Doors"
    carSery.save()

    carSery.detail = "2.0 Sport+ 4Doors"
    carSery.save()

    carSery.detail = "2.0 Titanium 4Doors"
    carSery.save()

    carSery.detail = "2.0 Titanium+ 4Doors"
    carSery.save()

    carSery.year = "2014"
    carSery.detail = "1.6 Ambiente 4Doors"
    carSery.save()

    carSery.detail = "1.6 Trend 4Doors"
    carSery.save()

    carSery.detail = "2.0 Sport 4Doors"
    carSery.save()

    carSery.detail = "2.0 Sport+ 4Doors"
    carSery.save()

    carSery.detail = "2.0 Titanium 4Doors"
    carSery.save()

    carSery.detail = "2.0 Titanium+ 4Doors"
    carSery.save()

    carSery.year = "2015"
    carSery.detail = "1.6 Ambiente 4Doors"
    carSery.save()

    carSery.detail = "1.6 Trend 4Doors"
    carSery.save()

    carSery.detail = "2.0 Sport 4Doors"
    carSery.save()

    carSery.detail = "2.0 Sport+ 4Doors"
    carSery.save()

    carSery.detail = "2.0 Titanium 4Doors"
    carSery.save()

    carSery.detail = "2.0 Titanium+ 4Doors"
    carSery.save()

    carSery.year = "2016"
    carSery.detail = "1.5 Sport 4Doors"
    carSery.save()

    carSery.detail = "1.6 Ambiente 4Doors"
    carSery.save()

    carSery.detail = "1.6 Trend 4Doors"
    carSery.save()

    carSery.detail = "2.0 Sport 4Doors"
    carSery.save()

    carSery.detail = "2.0 Sport+ 4Doors"
    carSery.save()

    carSery.detail = "2.0 Titanium 4Doors"
    carSery.save()

    carSery.detail = "2.0 Titanium+ 4Doors"
    carSery.save()

    carSery.year = "2017"
    carSery.detail = "1.5 Sport 4Doors"
    carSery.save()

    carSery.detail = "1.5 Trend 4Doors"
    carSery.save()

    carSery.year = "2018"
    carSery.detail = "1.5 Sport 4Doors"
    carSery.save()

    carSery.detail = "1.5 Trend 4Doors"
    carSery.save()
    //----Focus

    carSery.model = "Granada"
    carSery.year = "1992"
    carSery.detail = "2.0 LX 4Doors"
    carSery.save()

    carSery.year = "1993"
    carSery.detail = "2.0 Ghia 4Doors"
    carSery.save()

    carSery.detail = "2.0 LX 4Doors"
    carSery.save()

    carSery.year = "1994"
    carSery.detail = "2.0 Ghia 4Doors"
    carSery.save()

    carSery.detail = "2.0 LX 4Doors"
    carSery.save()

    carSery.year = "1995"
    carSery.detail = "2.0 Ghia 4Doors"
    carSery.save()

    carSery.detail = "2.0 LX 4Doors"
    carSery.save()

    carSery.year = "1996"
    carSery.detail = "2.0 Ghia 4Doors"
    carSery.save()

    carSery.detail = "2.0 LX 4Doors"
    carSery.save()

    carSery.year = "1993"
    carSery.detail = "2.0 Ghia 4Doors"
    carSery.save()
    //----Granada

    carSery.model = "Laser"
    carSery.year = "1992"
    carSery.detail = "1.6 GL 4Doors"
    carSery.save()

    carSery.detail = "1.6 GLX 4Doors"
    carSery.save()

    carSery.detail = "1.6 XL 4Doors"
    carSery.save()

    carSery.year = "1993"
    carSery.detail = "1.3 XLi 4Doors"
    carSery.save()

    carSery.detail = "1.6 GL 4Doors"
    carSery.save()

    carSery.detail = "1.6 GLi 4Doors"
    carSery.save()

    carSery.detail = "1.6 GLX 4Doors"
    carSery.save()

    carSery.detail = "1.6 GLXi 4Doors"
    carSery.save()

    carSery.detail = "1.6 XL 4Doors"
    carSery.save()

    carSery.year = "1994"
    carSery.detail = "1.3 XLi 4Doors"
    carSery.save()

    carSery.detail = "1.6 GL 4Doors"
    carSery.save()

    carSery.detail = "1.6 GLi 4Doors"
    carSery.save()

    carSery.detail = "1.6 GLX 4Doors"
    carSery.save()

    carSery.detail = "1.6 GLXi 4Doors"
    carSery.save()

    carSery.detail = "1.6 XL 4Doors"
    carSery.save()

    carSery.detail = "1.8 GLXi 2Doors"
    carSery.save()

    carSery.year = "1995"
    carSery.detail = "1.3 XLi 4Doors"
    carSery.save()

    carSery.detail = "1.6 GLXi 4Doors"
    carSery.save()

    carSery.detail = "1.8 GLXi 2Doors"
    carSery.save()

    carSery.year = "1996"
    carSery.detail = "1.6 GLXi 4Doors"
    carSery.save()

    carSery.detail = "1.8 GLXi 2Doors"
    carSery.save()

    carSery.year = "1997"
    carSery.save()

    carSery.year = "2000"
    carSery.detail = "1.6 GLX 4Doors"
    carSery.save()

    carSery.detail = "1.8 Ghia 4Doors"
    carSery.save()

    carSery.year = "2001"
    carSery.detail = "1.6 Flash GLX 4Doors"
    carSery.save()

    carSery.detail = "1.6 GLX 4Doors"
    carSery.save()

    carSery.detail = "1.8 Ghia 4Doors"
    carSery.save()

    carSery.year = "2002"
    carSery.detail = "1.6 GLX 4Doors"
    carSery.save()

    carSery.detail = "1.6 Tierra VXI 4Doors"
    carSery.save()

    carSery.detail = "1.8 Ghia 4Doors"
    carSery.save()

    carSery.detail = "1.8 Tierra Ghia 4Doors"
    carSery.save()

    carSery.year = "2003"
    carSery.detail = "1.6 Tierra VXI 4Doors"
    carSery.save()

    carSery.detail = "1.8 Tierra Ghia 4Doors"
    carSery.save()

    carSery.detail = "2.0 Tierra RS 4Doors"
    carSery.save()

    carSery.year = "2004"
    carSery.detail = "1.6 Tierra VXI 4Doors"
    carSery.save()

    carSery.detail = "1.8 Tierra Ghia 4Doors"
    carSery.save()

    carSery.detail = "2.0 Tierra RS 4Doors"
    carSery.save()

    carSery.year = "2005"
    carSery.detail = "1.6 Tierra VXI 4Doors"
    carSery.save()

    carSery.detail = "1.8 Tierra Ghia 4Doors"
    carSery.save()

    carSery.detail = "2.0 Tierra RS 4Doors"
    carSery.save()
    //----Laser
    carSery.model = "Marathon"
    carSery.year = "1992"
    carSery.detail = "2.5 Jumbo 2Doors"
    carSery.car_type_id = 2
    carSery.save()

    carSery.detail = "2.5 STD 2Doors"
    carSery.save()

    carSery.year = "1993"
    carSery.detail = "2.5 Jumbo 2Doors"
    carSery.save()

    carSery.detail = "2.5 STD 2Doors"
    carSery.save()

    carSery.year = "1994"
    carSery.detail = "2.5 Jumbo 2Doors"
    carSery.save()

    carSery.detail = "2.5 STD 2Doors"
    carSery.save()

    carSery.year = "1995"
    carSery.detail = "2.5 Jumbo 2Doors"
    carSery.save()

    carSery.detail = "2.5 STD 2Doors"
    carSery.save()

    carSery.year = "1996"
    carSery.detail = "2.5 Jumbo 2Doors"
    carSery.save()

    carSery.detail = "2.5 STD 2Doors"
    carSery.save()

    carSery.year = "1997"
    carSery.detail = "2.5 2Doors"
    carSery.save()

    carSery.detail = "2.5 Jumbo 2Doors"
    carSery.save()

    carSery.detail = "2.5 STD 2Doors"
    carSery.save()

    carSery.year = "1998"
    carSery.detail = "2.5 2Doors"
    carSery.save()

    carSery.detail = "2.5 STD 2Doors"
    carSery.save()
    //----Marathon

    carSery.model = "Mondeo"
    carSery.year = "1993"
    carSery.detail = "2.0 GLX 4Doors"
    carSery.car_type_id = 1
    carSery.save()

    carSery.year = "1994"
    carSery.save()

    carSery.year = "1995"
    carSery.save()

    carSery.detail = "2.0 Verona 4Doors"
    carSery.save()

    carSery.year = "1996"
    carSery.detail = "2.0 GLX 4Doors"
    carSery.save()

    carSery.detail = "2.0 Verona 4Doors"
    carSery.save()

    carSery.year = "1997"
    carSery.detail = "2.0 GLX 4Doors"
    carSery.save()

    carSery.detail = "2.0 Verona 4Doors"
    carSery.save()

    carSery.year = "1998"
    carSery.detail = "2.0 GLX 4Doors"
    carSery.save()
    //----Mondeo

    carSery.model = "Mustang"
    carSery.year = "2018"
    carSery.detail = "2.3 EcoBoost 2Doors"
    carSery.save()

    carSery.detail = "5.0 GT 2Doors"
    carSery.save()

    carSery.year = "2019"
    carSery.detail = "2.3 EcoBoost 2Doors"
    carSery.save()

    carSery.detail = "5.0 GT 2Doors"
    carSery.save()
    //----Mustang

    carSery.model = "Ranger"
    carSery.year = "1997"
    carSery.detail = "2.5 Base XL 2Doors"
    carSery.car_type_id = 2
    carSery.save()

    carSery.detail = "2.5 Standard XL 2Doors"
    carSery.save()

    carSery.detail = "2.5 XL 2Doors"
    carSery.save()

    carSery.detail = "2.5 XLT 2Doors"
    carSery.save()

    carSery.year = "1998"
    carSery.detail = "2.5 Base XL 2Doors"
    carSery.save()

    carSery.detail = "2.5 Standard XL 2Doors"
    carSery.save()

    carSery.detail = "2.5 XL 2Doors"
    carSery.save()

    carSery.detail = "2.5 XLT 2Doors"
    carSery.save()

    carSery.year = "1999"
    carSery.detail = "2.5 Base XL 2Doors"
    carSery.save()

    carSery.detail = "2.5 Standard XL 2Doors"
    carSery.save()

    carSery.detail = "2.5 XL 2Doors"
    carSery.save()

    carSery.detail = "2.5 XLT 2Doors"
    carSery.save()

    carSery.year = "2000"
    carSery.detail = "2.5 Base XL 2Doors"
    carSery.save()

    carSery.detail = "2.5 Standard XL 2Doors"
    carSery.save()

    carSery.detail = "2.5 XL 2Doors"
    carSery.save()

    carSery.detail = "2.5 XL 4Doors"
    carSery.save()

    carSery.detail = "2.5 XLT 2Doors"
    carSery.save()

    carSery.detail = "2.5 XLT 4Doors"
    carSery.save()

    carSery.detail = "2.9 Standard XL 2Doors"
    carSery.save()

    carSery.detail = "2.9 XL 2Doors"
    carSery.save()

    carSery.detail = "2.9 XLT 2Doors"
    carSery.save()

    carSery.detail = "2.9 XLT 4Doors"
    carSery.save()

    carSery.year = "2001"
    carSery.detail = "2.5 Base XL 2Doors"
    carSery.save()

    carSery.detail = "2.5 Standard XL 2Doors"
    carSery.save()

    carSery.detail = "2.5 XL 2Doors"
    carSery.save()

    carSery.detail = "2.5 XL 4Doors"
    carSery.save()

    carSery.detail = "2.5 XLT 2Doors"
    carSery.save()

    carSery.detail = "2.5 XLT 4Doors"
    carSery.save()

    carSery.detail = "2.9 Standard XL 2Doors"
    carSery.save()

    carSery.detail = "2.9 XL 2Doors"
    carSery.save()

    carSery.detail = "2.9 XLT 2Doors"
    carSery.save()

    carSery.detail = "2.9 XLT 4Doors"
    carSery.save()

    carSery.year = "2002"
    carSery.detail = "2.5 Base XL 2Doors"
    carSery.save()

    carSery.detail = "2.5 Hurricane 2Doors"
    carSery.save()

    carSery.detail = "2.5 Limited 2Doors"
    carSery.save()

    carSery.detail = "2.5 Standard XL 2Doors"
    carSery.save()

    carSery.detail = "2.5 XL 2Doors"
    carSery.save()

    carSery.detail = "2.5 XL 4Doors"
    carSery.save()

    carSery.detail = "2.5 XLS 2Doors"
    carSery.save()

    carSery.detail = "2.5 XLS 4Doors"
    carSery.save()

    carSery.detail = "2.5 XLT 2Doors"
    carSery.save()

    carSery.detail = "2.5 XLT 4Doors"
    carSery.save()

    carSery.detail = "2.5 XLT Hurricane 4Doors"
    carSery.save()

    carSery.detail = "2.5 XLT Limited 4Doors"
    carSery.save()

    carSery.detail = "2.9 Standard XL 2Doors"
    carSery.save()

    carSery.detail = "2.9 XL 2Doors"
    carSery.save()

    carSery.detail = "2.9 XLT 2Doors"
    carSery.save()

    carSery.detail = "2.9 XLT 4Doors"
    carSery.save()

    carSery.year = "2003"
    carSery.detail = "2.5 Base XL 2Doors"
    carSery.save()

    carSery.detail = "2.5 Hurricane 2Doors"
    carSery.save()

    carSery.detail = "2.5 Limited 2Doors"
    carSery.save()

    carSery.detail = "2.5 Standard XL 2Doors"
    carSery.save()

    carSery.detail = "2.5 XL 2Doors"
    carSery.save()

    carSery.detail = "2.5 XL 4Doors"
    carSery.save()

    carSery.detail = "2.5 XLS 2Doors"
    carSery.save()

    carSery.detail = "2.5 XLS 4Doors"
    carSery.save()

    carSery.detail = "2.5 XLT 2Doors"
    carSery.save()

    carSery.detail = "2.5 XLT 4Doors"
    carSery.save()

    carSery.detail = "2.5 XLT Hurricane 4Doors"
    carSery.save()

    carSery.detail = "2.5 XLT Limited 4Doors"
    carSery.save()

    carSery.detail = "2.9 Standard XL 2Doors"
    carSery.save()

    carSery.detail = "2.9 XL 2Doors"
    carSery.save()

    carSery.detail = "2.9 XLT 2Doors"
    carSery.save()

    carSery.detail = "2.9 XLT 4Doors"
    carSery.save()

    carSery.year = "2004"
    carSery.detail = "2.5 Base XL 2Doors"
    carSery.save()

    carSery.detail = "2.5 Hi-Rider XLT 2Doors"
    carSery.save()

    carSery.detail = "2.5 Hi-Rider XLT 4Doors"
    carSery.save()

    carSery.detail = "2.5 Hurricane 2Doors"
    carSery.save()

    carSery.detail = "2.5 Standard XL 2Doors"
    carSery.save()

    carSery.detail = "2.5 XL 2Doors"
    carSery.save()

    carSery.detail = "2.5 XL 4Doors"
    carSery.save()

    carSery.detail = "2.5 XLS 2Doors"
    carSery.save()

    carSery.detail = "2.5 XLS 4Doors"
    carSery.save()

    carSery.detail = "2.5 XLT 2Doors"
    carSery.save()

    carSery.detail = "2.5 XLT 4Doors"
    carSery.save()

    carSery.detail = "2.9 Standard XL 2Doors"
    carSery.save()

    carSery.detail = "2.9 XL 2Doors"
    carSery.save()

    carSery.detail = "2.9 XLT 2Doors"
    carSery.save()

    carSery.detail = "2.9 XLT 4Doors"
    carSery.save()

    carSery.year = "2005"
    carSery.detail = "2.5 Base XL 2Doors"
    carSery.save()

    carSery.detail = "2.5 Hi-Rider XLT 2Doors"
    carSery.save()

    carSery.detail = "2.5 Hi-Rider XLT 4Doors"
    carSery.save()

    carSery.detail = "2.5 Hurricane 2Doors"
    carSery.save()

    carSery.detail = "2.5 Standard XL 2Doors"
    carSery.save()

    carSery.detail = "2.5 XL 2Doors"
    carSery.save()

    carSery.detail = "2.5 XL 4Doors"
    carSery.save()

    carSery.detail = "2.5 XLS 2Doors"
    carSery.save()

    carSery.detail = "2.5 XLS 4Doors"
    carSery.save()

    carSery.detail = "2.5 XLT 2Doors"
    carSery.save()

    carSery.detail = "2.5 XLT 4Doors"
    carSery.save()

    carSery.year = "2006"
    carSery.detail = "2.5 Base XL 2Doors"
    carSery.save()

    carSery.detail = "2.5 Hi-Rider XLS 2Doors"
    carSery.save()

    carSery.detail = "2.5 Hi-Rider XLT 2Doors"
    carSery.save()

    carSery.detail = "2.5 Hi-Rider XLT 4Doors"
    carSery.save()

    carSery.detail = "2.5 Hurricane 2Doors"
    carSery.save()

    carSery.detail = "2.5 Standard XL 2Doors"
    carSery.save()

    carSery.detail = "2.5 XL 2Doors"
    carSery.save()

    carSery.detail = "2.5 XL 4Doors"
    carSery.save()

    carSery.detail = "2.5 XLS 2Doors"
    carSery.save()

    carSery.detail = "2.5 XLS 4Doors"
    carSery.save()

    carSery.detail = "2.5 XLT 2Doors"
    carSery.save()

    carSery.detail = "2.5 XLT 4Doors"
    carSery.save()

    carSery.detail = "3.0 Hi-Rider XLT TDCi 2Doors"
    carSery.save()

    carSery.detail = "3.0 XLS TDCi 2Doors"
    carSery.save()

    carSery.detail = "3.0 XLT Limited TDCi 4Doors"
    carSery.save()

    carSery.detail = "3.0 XLT TDCi 2Doors"
    carSery.save()

    carSery.detail = "3.0 XLT TDCi 4Doors"
    carSery.save()

    carSery.year = "2007"
    carSery.detail = "2.5 Base XL 2Doors"
    carSery.save()

    carSery.detail = "2.5 Hi-Rider XLS 2Doors"
    carSery.save()

    carSery.detail = "2.5 Hi-Rider XLS TDCi 4Doors"
    carSery.save()

    carSery.detail = "2.5 Hi-Rider XLT 4Doors"
    carSery.save()

    carSery.detail = "2.5 Standard XL 2Doors"
    carSery.save()

    carSery.detail = "2.5 XL 2Doors"
    carSery.save()

    carSery.detail = "2.5 XL 4Doors"
    carSery.save()

    carSery.detail = "2.5 XLS 2Doors"
    carSery.save()

    carSery.detail = "2.5 XLS 4Doors"
    carSery.save()

    carSery.detail = "3.0 Hi-Rider XLT TDCi 2Doors"
    carSery.save()

    carSery.detail = "3.0 WildTrak I XLT TDCi 4Doors"
    carSery.save()

    carSery.detail = "3.0 XLS TDCi 2Doors"
    carSery.save()

    carSery.detail = "3.0 XLT Limited TDCi 4Doors"
    carSery.save()

    carSery.detail = "3.0 XLT TDCi 2Doors"
    carSery.save()

    carSery.detail = "3.0 XLT TDCi 4Doors"
    carSery.save()

    carSery.year = "2008"
    carSery.detail = "2.5 Hi-Rider WildTrak II XLS 2Doors"
    carSery.save()

    carSery.detail = "2.5 Hi-Rider WildTrak II XLT 4Doors"
    carSery.save()

    carSery.detail = "2.5 Hi-Rider XLS 2Doors"
    carSery.save()

    carSery.detail = "2.5 Hi-Rider XLS TDCi 4Doors"
    carSery.save()

    carSery.detail = "2.5 Hi-Rider XLT 4Doors"
    carSery.save()

    carSery.detail = "2.5 Standard XL 2Doors"
    carSery.save()

    carSery.detail = "2.5 XL 2Doors"
    carSery.save()

    carSery.detail = "2.5 XL 4Doors"
    carSery.save()

    carSery.detail = "2.5 XLS 2Doors"
    carSery.save()

    carSery.detail = "2.5 XLS 4Doors"
    carSery.save()

    carSery.detail = "3.0 Hi-Rider XLT TDCi 2Doors"
    carSery.save()

    carSery.detail = "3.0 WildTrak I XLT TDCi 4Doors"
    carSery.save()

    carSery.detail = "3.0 WildTrak II XLT TDCi 4Doors"
    carSery.save()

    carSery.detail = "3.0 XLS TDCi 2Doors"
    carSery.save()

    carSery.detail = "3.0 XLT Limited TDCi 4Doors"
    carSery.save()

    carSery.detail = "3.0 XLT TDCi 2Doors"
    carSery.save()

    carSery.detail = "3.0 XLT TDCi 4Doors"
    carSery.save()

    carSery.year = "2009"
    carSery.detail = "2.5 Hi-Rider WildTrak II XLS 2Doors"
    carSery.save()

    carSery.detail = "2.5 Hi-Rider WildTrak II XLT 4Doors"
    carSery.save()

    carSery.detail = "2.5 Hi-Rider WildTrak XLT 2Doors"
    carSery.save()

    carSery.detail = "2.5 Hi-Rider WildTrak XLT 4Doors"
    carSery.save()

    carSery.detail = "2.5 Hi-Rider XLS 2Doors"
    carSery.save()

    carSery.detail = "2.5 Hi-Rider XLS TDCi 2Doors"
    carSery.save()

    carSery.detail = "2.5 Hi-Rider XLS TDCi 4Doors"
    carSery.save()

    carSery.detail = "2.5 Hi-Rider XLT 4Doors"
    carSery.save()

    carSery.detail = "2.5 Hi-Rider XLT TDCi 2Doors"
    carSery.save()

    carSery.detail = "2.5 Hi-Rider XLT TDCi 4Doors"
    carSery.save()

    carSery.detail = "2.5 Standard XL 2Doors"
    carSery.save()

    carSery.detail = "2.5 XL 2Doors"
    carSery.save()

    carSery.detail = "2.5 XL 4Doors"
    carSery.save()

    carSery.detail = "2.5 XL TDCi 2Doors"
    carSery.save()

    carSery.detail = "2.5 XL TDCi 4Doors"
    carSery.save()

    carSery.detail = "2.5 XLS 2Doors"
    carSery.save()

    carSery.detail = "2.5 XLS 4Doors"
    carSery.save()

    carSery.detail = "2.5 XLS TDCi 2Doors"
    carSery.save()

    carSery.detail = "2.5 XLS TDCi 4Doors"
    carSery.save()

    carSery.detail = "2.5 XLT TDCi 2Doors"
    carSery.save()

    carSery.detail = "3.0 Hi-Rider XLT TDCi 2Doors"
    carSery.save()

    carSery.detail = "3.0 Standard XL 2Doors"
    carSery.save()

    carSery.detail = "3.0 WildTrak II XLT TDCi 4Doors"
    carSery.save()

    carSery.detail = "3.0 WildTrak XLT TDCi 4Doors"
    carSery.save()

    carSery.detail = "3.0 XLS TDCi 2Doors"
    carSery.save()

    carSery.detail = "3.0 XLT TDCi 2Doors"
    carSery.save()

    carSery.detail = "3.0 XLT TDCi 4Doors"
    carSery.save()

    carSery.year = "2010"
    carSery.detail = "2.5 Hi-Rider WildTrak LTD 2Doors"
    carSery.save()

    carSery.detail = "2.5 Hi-Rider WildTrak LTD 4Doors"
    carSery.save()

    carSery.detail = "2.5 Hi-Rider WildTrak XLT 2Doors"
    carSery.save()

    carSery.detail = "2.5 Hi-Rider WildTrak XLT 4Doors"
    carSery.save()

    carSery.detail = "2.5 Hi-Rider XLS TDCi 2Doors"
    carSery.save()

    carSery.detail = "2.5 Hi-Rider XLS TDCi 4Doors"
    carSery.save()

    carSery.detail = "2.5 Hi-Rider XLT TDCi 2Doors"
    carSery.save()

    carSery.detail = "2.5 Hi-Rider XLT TDCi 4Doors"
    carSery.save()

    carSery.detail = "2.5 Standard XL 2Doors"
    carSery.save()

    carSery.detail = "2.5 XL TDCi 2Doors"
    carSery.save()

    carSery.detail = "2.5 XL TDCi 4Doors"
    carSery.save()

    carSery.detail = "2.5 XLS TDCi 2Doors"
    carSery.save()

    carSery.detail = "2.5 XLS TDCi 4Doors"
    carSery.save()

    carSery.detail = "2.5 XLT TDCi 2Doors"
    carSery.save()

    carSery.detail = "3.0 Hi-Rider XLT TDCi 2Doors"
    carSery.save()

    carSery.detail = "3.0 Standard XL 2Doors"
    carSery.save()

    carSery.detail = "3.0 WildTrak XLT TDCi 4Doors"
    carSery.save()

    carSery.detail = "3.0 XLS TDCi 2Doors"
    carSery.save()

    carSery.detail = "3.0 XLT TDCi 2Doors"
    carSery.save()

    carSery.detail = "3.0 XLT TDCi 4Doors"
    carSery.save()

    carSery.year = "2011"
    carSery.detail = "2.2 Hi-Rider WildTrak 2Doors"
    carSery.save()

    carSery.detail = "2.2 Hi-Rider WildTrak 4Doors"
    carSery.save()

    carSery.detail = "2.2 Hi-Rider XLT 2Doors"
    carSery.save()

    carSery.detail = "2.2 Hi-Rider XLT 4Doors"
    carSery.save()

    carSery.detail = "2.2 WildTrak 4Doors"
    carSery.save()

    carSery.detail = "2.2 XLT 2Doors"
    carSery.save()

    carSery.detail = "2.2 XLT 4Doors"
    carSery.save()

    carSery.detail = "2.5 Hi-Rider WildTrak LTD 2Doors"
    carSery.save()

    carSery.detail = "2.5 Hi-Rider WildTrak LTD 4Doors"
    carSery.save()

    carSery.detail = "2.5 Hi-Rider WildTrak XLT 2Doors"
    carSery.save()

    carSery.detail = "2.5 Hi-Rider WildTrak XLT 4Doors"
    carSery.save()

    carSery.detail = "2.5 Hi-Rider XLS TDCi 2Doors"
    carSery.save()

    carSery.detail = "2.5 Hi-Rider XLS TDCi 4Doors"
    carSery.save()

    carSery.detail = "2.5 Hi-Rider XLT TDCi 2Doors"
    carSery.save()

    carSery.detail = "2.5 Hi-Rider XLT TDCi 4Doors"
    carSery.save()

    carSery.detail = "2.5 Standard XL 2Doors"
    carSery.save()

    carSery.detail = "2.5 XL TDCi 2Doors"
    carSery.save()

    carSery.detail = "2.5 XL TDCi 4Doors"
    carSery.save()

    carSery.detail = "2.5 XLS TDCi 2Doors"
    carSery.save()

    carSery.detail = "2.5 XLS TDCi 4Doors"
    carSery.save()

    carSery.detail = "2.5 XLT TDCi 2Doors"
    carSery.save()

    carSery.detail = "3.0 Hi-Rider XLT TDCi 2Doors"
    carSery.save()

    carSery.detail = "3.0 Standard XL 2Doors"
    carSery.save()

    carSery.detail = "3.0 WildTrak XLT TDCi 4Doors"
    carSery.save()

    carSery.detail = "3.0 XLS TDCi 2Doors"
    carSery.save()

    carSery.detail = "3.0 XLT TDCi 2Doors"
    carSery.save()

    carSery.detail = "3.0 XLT TDCi 4Doors"
    carSery.save()

    carSery.detail = "3.2 WildTrak 4Doors"
    carSery.save()

    carSery.year = "2012"
    carSery.detail = "2.2 Hi-Rider WildTrak 2Doors"
    carSery.save()

    carSery.detail = "2.2 Hi-Rider WildTrak 4Doors"
    carSery.save()

    carSery.detail = "2.2 Hi-Rider XLT 2Doors"
    carSery.save()

    carSery.detail = "2.2 Hi-Rider XLT 4Doors"
    carSery.save()

    carSery.detail = "2.2 WildTrak 4Doors"
    carSery.save()

    carSery.detail = "2.2 XLT 2Doors"
    carSery.save()

    carSery.detail = "2.2 XLT 4Doors"
    carSery.save()

    carSery.detail = "2.5 Standard XL 2Doors"
    carSery.save()

    carSery.detail = "3.0 Standard XL 2Doors"
    carSery.save()

    carSery.detail = "3.2 WildTrak 4Doors"
    carSery.save()

    carSery.year = "2013"
    carSery.detail = "2.2 Hi-Rider WildTrak 2Doors"
    carSery.save()

    carSery.detail = "2.2 Hi-Rider WildTrak 4Doors"
    carSery.save()

    carSery.detail = "2.2 Hi-Rider WildTrak TDCi 4Doors"
    carSery.save()

    carSery.detail = "2.2 Hi-Rider XLS TDCi 2Doors"
    carSery.save()

    carSery.detail = "2.2 Hi-Rider XLT 2Doors"
    carSery.save()

    carSery.detail = "2.2 Hi-Rider XLT 4Doors"
    carSery.save()

    carSery.detail = "2.2 WildTrak 4Doors"
    carSery.save()

    carSery.detail = "2.2 XLS TDCi 2Doors"
    carSery.save()

    carSery.detail = "2.2 XLT 2Doors"
    carSery.save()

    carSery.detail = "2.2 XLT 4Doors"
    carSery.save()

    carSery.detail = "2.5 Standard XL 2Doors"
    carSery.save()

    carSery.detail = "2.5 XL 2Doors"
    carSery.save()

    carSery.detail = "3.2 WildTrak 4Doors"
    carSery.save()

    carSery.year = "2014"
    carSery.detail = "2.2 Hi-Rider WildTrak 2Doors"
    carSery.save()

    carSery.detail = "2.2 Hi-Rider WildTrak 4Doors"
    carSery.save()

    carSery.detail = "2.2 Hi-Rider WildTrak TDCi 4Doors"
    carSery.save()

    carSery.detail = "2.2 Hi-Rider XLS TDCi 2Doors"
    carSery.save()

    carSery.detail = "2.2 Hi-Rider XLT 2Doors"
    carSery.save()

    carSery.detail = "2.2 Hi-Rider XLT 4Doors"
    carSery.save()

    carSery.detail = "2.2 WildTrak 4Doors"
    carSery.save()

    carSery.detail = "2.2 XLS TDCi 2Doors"
    carSery.save()

    carSery.detail = "2.2 XLT 2Doors"
    carSery.save()

    carSery.detail = "2.2 XLT 4Doors"
    carSery.save()

    carSery.detail = "2.5 Standard XL 2Doors"
    carSery.save()

    carSery.detail = "2.5 XL 2Doors"
    carSery.save()

    carSery.detail = "3.2 WildTrak 4Doors"
    carSery.save()

    carSery.year = "2015"
    carSery.detail = "2.2 Hi-Rider WildTrak 2Doors"
    carSery.save()

    carSery.detail = "2.2 Hi-Rider WildTrak 4Doors"
    carSery.save()

    carSery.detail = "2.2 Hi-Rider WildTrak TDCi 4Doors"
    carSery.save()

    carSery.detail = "2.2 Hi-Rider XLS 2Doors"
    carSery.save()

    carSery.detail = "2.2 Hi-Rider XLS 4Doors"
    carSery.save()

    carSery.detail = "2.2 Hi-Rider XLS TDCi 2Doors"
    carSery.save()

    carSery.detail = "2.2 Hi-Rider XLT 2Doors"
    carSery.save()

    carSery.detail = "2.2 Hi-Rider XLT 4Doors"
    carSery.save()

    carSery.detail = "2.2 Standard XL 2Doors"
    carSery.save()

    carSery.detail = "2.2 WildTrak 4Doors"
    carSery.save()

    carSery.detail = "2.2 XL 2Doors"
    carSery.save()

    carSery.detail = "2.2 XLS 2Doors"
    carSery.save()

    carSery.detail = "2.2 XLS TDCi 2Doors"
    carSery.save()

    carSery.detail = "2.2 XLT 2Doors"
    carSery.save()

    carSery.detail = "2.2 XLT 4Doors"
    carSery.save()

    carSery.detail = "2.5 Standard XL 2Doors"
    carSery.save()

    carSery.detail = "2.5 XL 2Doors"
    carSery.save()

    carSery.detail = "3.2 WildTrak 4Doors"
    carSery.save()

    carSery.detail = "3.2 XLT 2Doors"
    carSery.save()

    carSery.detail = "3.2 XLT 4Doors"
    carSery.save()

    carSery.year = "2016"
    carSery.detail = "2.2 Hi-Rider FX4 4Doors"
    carSery.save()

    carSery.detail = "2.2 Hi-Rider WildTrak 4Doors"
    carSery.save()

    carSery.detail = "2.2 Hi-Rider XL+ 2Doors"
    carSery.save()

    carSery.detail = "2.2 Hi-Rider XLS 2Doors"
    carSery.save()

    carSery.detail = "2.2 Hi-Rider XLS 4Doors"
    carSery.save()

    carSery.detail = "2.2 Hi-Rider XLT 2Doors"
    carSery.save()

    carSery.detail = "2.2 Hi-Rider XLT 4Doors"
    carSery.save()

    carSery.detail = "2.2 Standard XL 2Doors"
    carSery.save()

    carSery.detail = "2.2 WildTrak 4Doors"
    carSery.save()

    carSery.detail = "2.2 XL 2Doors"
    carSery.save()

    carSery.detail = "2.2 XLS 2Doors"
    carSery.save()

    carSery.detail = "2.2 XLT 2Doors"
    carSery.save()

    carSery.detail = "2.2 XLT 4Doors"
    carSery.save()

    carSery.detail = "3.2 WildTrak 4Doors"
    carSery.save()

    carSery.detail = "3.2 XLT 2Doors"
    carSery.save()

    carSery.detail = "3.2 XLT 4Doors"
    carSery.save()

    carSery.year = "2017"
    carSery.detail = "2.2 Hi-Rider FX4 4Doors"
    carSery.save()

    carSery.detail = "2.2 Hi-Rider WildTrak 4Doors"
    carSery.save()

    carSery.detail = "2.2 Hi-Rider XL+ 2Doors"
    carSery.save()

    carSery.detail = "2.2 Hi-Rider XLS 2Doors"
    carSery.save()

    carSery.detail = "2.2 Hi-Rider XLS 4Doors"
    carSery.save()

    carSery.detail = "2.2 Hi-Rider XLT 2Doors"
    carSery.save()

    carSery.detail = "2.2 Hi-Rider XLT 4Doors"
    carSery.save()

    carSery.detail = "2.2 Standard XL 2Doors"
    carSery.save()

    carSery.detail = "2.2 WildTrak 4Doors"
    carSery.save()

    carSery.detail = "2.2 XL 2Doors"
    carSery.save()

    carSery.detail = "2.2 XLS 2Doors"
    carSery.save()

    carSery.detail = "2.2 XLT 2Doors"
    carSery.save()

    carSery.detail = "2.2 XLT 4Doors"
    carSery.save()

    carSery.detail = "3.2 WildTrak 4Doors"
    carSery.save()

    carSery.detail = "3.2 XLT 2Doors"
    carSery.save()

    carSery.detail = "3.2 XLT 4Doors"
    carSery.save()

    carSery.year = "2018"
    carSery.detail = "2.0 Hi-Rider Limited 4Doors"
    carSery.save()

    carSery.detail = "2.0 Hi-Rider WildTrak 4Doors"
    carSery.save()

    carSery.detail = "2.0 Limited 2Doors"
    carSery.save()

    carSery.detail = "2.0 Limited 4Doors"
    carSery.save()

    carSery.detail = "2.0 Raptor 4Doors"
    carSery.save()

    carSery.detail = "2.0 WildTrak 4Doors"
    carSery.save()

    carSery.detail = "2.2 Hi-Rider FX4 4Doors"
    carSery.save()

    carSery.detail = "2.2 Hi-Rider WildTrak 4Doors"
    carSery.save()

    carSery.detail = "2.2 Hi-Rider XL+ 2Doors"
    carSery.save()

    carSery.detail = "2.2 Hi-Rider XLS 2Doors"
    carSery.save()

    carSery.detail = "2.2 Hi-Rider XLS 4Doors"
    carSery.save()

    carSery.detail = "2.2 Hi-Rider XLT 2Doors"
    carSery.save()

    carSery.detail = "2.2 Hi-Rider XLT 4Doors"
    carSery.save()

    carSery.detail = "2.2 Standard XL 2Doors"
    carSery.save()

    carSery.detail = "2.2 WildTrak 4Doors"
    carSery.save()

    carSery.detail = "2.2 XL 2Doors"
    carSery.save()

    carSery.detail = "2.2 XLS 2Doors"
    carSery.save()

    carSery.detail = "2.2 XLT 2Doors"
    carSery.save()

    carSery.detail = "2.2 XLT 4Doors"
    carSery.save()

    carSery.detail = "3.2 WildTrak 4Doors"
    carSery.save()

    carSery.detail = "3.2 XLT 4Doors"
    carSery.save()

    carSery.year = "2019"
    carSery.detail = "2.0 Hi-Rider Limited 4Doors"
    carSery.save()

    carSery.detail = "2.0 Hi-Rider WildTrak 4Doors"
    carSery.save()

    carSery.detail = "2.0 Limited 2Doors"
    carSery.save()

    carSery.detail = "2.0 Limited 4Doors"
    carSery.save()

    carSery.detail = "2.0 Raptor 4Doors"
    carSery.save()

    carSery.detail = "2.0 WildTrak 4Doors"
    carSery.save()

    carSery.detail = "2.2 Hi-Rider XL+ 2Doors"
    carSery.save()

    carSery.detail = "2.2 Hi-Rider XL+ 4Doors"
    carSery.save()

    carSery.detail = "2.2 Hi-Rider XLS 2Doors"
    carSery.save()

    carSery.detail = "2.2 Hi-Rider XLS 4Doors"
    carSery.save()

    carSery.detail = "2.2 Hi-Rider XLT 2Doors"
    carSery.save()

    carSery.detail = "2.2 Hi-Rider XLT 4Doors"
    carSery.save()

    carSery.detail = "2.2 Standard XL 2Doors"
    carSery.save()

    carSery.detail = "2.2 XL 2Doors"
    carSery.save()

    carSery.detail = "2.2 XL 4Doors"
    carSery.save()

    carSery.detail = "2.2 XLS 2Doors"
    carSery.save()

    carSery.detail = "2.2 XLT 2Doors"
    carSery.save()
    //----Ranger

    carSery.model = "Scorpior"
    carSery.year = "1992"
    carSery.detail = "2.9 4Doors"
    carSery.car_type_id = 1
    carSery.save()

    carSery.year = "1993"
    carSery.save()
    //----Scorpio

    carSery.model = "Sierra"
    carSery.year = "1992"
    carSery.detail = "2.0 Ghia 4Doors"
    carSery.save()

    carSery.detail = "2.0 LX 4Doors"
    carSery.save()

    carSery.year = "1993"
    carSery.detail = "2.0 Ghia 4Doors"
    carSery.save()

    carSery.detail = "2.0 LX 4Doors"
    carSery.save()

    carSery.year = "1994"
    carSery.detail = "2.0 Ghia 4Doors"
    carSery.save()

    carSery.detail = "2.0 LX 4Doors"
    carSery.save()

    carSery.year = "1995"
    carSery.detail = "2.0 Ghia 4Doors"
    carSery.save()

    carSery.detail = "2.0 LX 4Doors"
    carSery.save()

    carSery.year = "1996"
    carSery.detail = "2.0 Ghia 4Doors"
    carSery.save()

    carSery.detail = "2.0 LX 4Doors"
    carSery.save()

    carSery.year = "1997"
    carSery.detail = "2.0 Ghia 4Doors"
    carSery.save()

    carSery.detail = "2.0 LX 4Doors"
    carSery.save()
    //----Sierra

    carSery.model = "Telstar"
    carSery.year = "1992"
    carSery.detail = "2.0 TX-4 4Doors"
    carSery.save()

    carSery.detail = "2.0 TX-5 4Doors"
    carSery.save()

    carSery.year = "1993"
    carSery.detail = "1.8 TX-4 4Doors"
    carSery.save()

    carSery.detail = "2.0 TX-4 4Doors"
    carSery.save()

    carSery.detail = "2.0 TX-5 4Doors"
    carSery.save()

    carSery.year = "1994"
    carSery.detail = "1.8 TX-4 4Doors"
    carSery.save()

    carSery.detail = "2.0 TX-5 4Doors"
    carSery.save()

    carSery.year = "1995"
    carSery.detail = "1.8 TX-4 4Doors"
    carSery.save()

    carSery.detail = "2.0 TX-4 4Doors"
    carSery.save()

    carSery.detail = "2.0 TX-5 4Doors"
    carSery.save()

    carSery.year = "1996"
    carSery.detail = "1.8 TX-4 4Doors"
    carSery.save()

    carSery.detail = "2.0 TX-4 4Doors"
    carSery.save()

    carSery.detail = "2.0 TX-5 4Doors"
    carSery.save()
    //----Telstar

    carSery.model = "Territory"
    carSery.year = "2006"
    carSery.detail = "4.0 Ghia 4Doors"
    carSery.car_group_id = 2
    carSery.car_type_id = 5
    carSery.save()

    carSery.year = "2007"
    carSery.save()

    carSery.year = "2012"
    carSery.detail = "2.7 4Doors"
    carSery.save()

    carSery.year = "2013"
    carSery.save()

    carSery.year = "2014"
    carSery.save()

    carSery.year = "2015"
    carSery.save()
    //----Territory

    carSery.model = "Transit"
    carSery.year = "1992"
    carSery.detail = "2.0 4Doors"
    carSery.car_group_id = 3
    carSery.car_type_id = 4
    carSery.save()

    carSery.detail = "2.5 4Doors"
    carSery.save()

    carSery.detail = "2.9 4Doors"
    carSery.save()

    carSery.year = "1993"
    carSery.detail = "2.0 4Doors"
    carSery.save()

    carSery.detail = "2.5 4Doors"
    carSery.save()

    carSery.detail = "2.9 4Doors"
    carSery.save()

    carSery.year = "1994"
    carSery.detail = "2.0 4Doors"
    carSery.save()

    carSery.detail = "2.5 4Doors"
    carSery.save()

    carSery.detail = "2.9 4Doors"
    carSery.save()

    carSery.year = "1995"
    carSery.detail = "2.0 4Doors"
    carSery.save()

    carSery.detail = "2.9 4Doors"
    carSery.save()

    carSery.year = "1996"
    carSery.detail = "2.0 4Doors"
    carSery.save()
    
    carSery.detail = "2.9 4Doors"
    carSery.save()

    carSery.year = "1997"
    carSery.detail = "2.0 4Doors"
    carSery.save()
    
    carSery.detail = "2.9 4Doors"
    carSery.save()
    //----Transit
    //----Ford End

    //----Chevrolet Start
    carSery.brand = "Chevrolet"
    carSery.model = "Aveo"
    carSery.year = "2006"
    carSery.detail = "1.4 Base 4Doors"
    carSery.car_group_id = 5
    carSery.car_type_id = 1
    carSery.save()

    carSery.detail = "1.4 LS 4Doors"
    carSery.save()

    carSery.detail = "1.4 LT 4Doors"
    carSery.save()

    carSery.year = "2007"
    carSery.detail = "1.4 Base 4Doors"
    carSery.save()

    carSery.detail = "1.4 LS 4Doors"
    carSery.save()

    carSery.detail = "1.4 LSX 4Doors"
    carSery.save()

    carSery.detail = "1.4 LT 4Doors"
    carSery.save()

    carSery.detail = "1.4 Lux 4Doors"
    carSery.save()

    carSery.detail = "1.4 SS 4Doors"
    carSery.save()

    carSery.year = "2008"
    carSery.detail = "1.4 Base 4Doors"
    carSery.save()

    carSery.detail = "1.4 LS 4Doors"
    carSery.save()

    carSery.detail = "1.4 LSX 4Doors"
    carSery.save()

    carSery.detail = "1.4 LT 4Doors"
    carSery.save()

    carSery.detail = "1.4 Lux 4Doors"
    carSery.save()

    carSery.detail = "1.4 SS 4Doors"
    carSery.save()

    carSery.year = "2009"
    carSery.detail = "1.4 Base 4Doors"
    carSery.save()

    carSery.detail = "1.4 LS 4Doors"
    carSery.save()

    carSery.detail = "1.4 LSX 4Doors"
    carSery.save()

    carSery.detail = "1.4 LT 4Doors"
    carSery.save()

    carSery.detail = "1.4 Lux 4Doors"
    carSery.save()

    carSery.detail = "1.4 SS 4Doors"
    carSery.save()

    carSery.detail = "1.6 LSX 4Doors"
    carSery.save()

    carSery.detail = "1.6 LT 4Doors"
    carSery.save()

    carSery.detail = "1.6 Lux 4Doors"
    carSery.save()

    carSery.detail = "1.6 SS 4Doors"
    carSery.save()

    carSery.year = "2010"
    carSery.detail = "1.4 Base 4Doors"
    carSery.save()

    carSery.detail = "1.4 LS 4Doors"
    carSery.save()

    carSery.detail = "1.4 LSX 4Doors"
    carSery.save()

    carSery.detail = "1.4 LT 4Doors"
    carSery.save()

    carSery.detail = "1.4 Lux 4Doors"
    carSery.save()

    carSery.detail = "1.4 SS 4Doors"
    carSery.save()

    carSery.detail = "1.6 Base 4Doors"
    carSery.save()

    carSery.detail = "1.6 LS 4Doors"
    carSery.save()

    carSery.detail = "1.6 LSX 4Doors"
    carSery.save()

    carSery.detail = "1.6 LT 4Doors"
    carSery.save()

    carSery.detail = "1.6 Lux 4Doors"
    carSery.save()

    carSery.detail = "1.6 SS 4Doors"
    carSery.save()

    carSery.year = "2011"
    carSery.detail = "1.4 Base 4Doors"
    carSery.save()

    carSery.detail = "1.4 LS 4Doors"
    carSery.save()

    carSery.detail = "1.4 LSX 4Doors"
    carSery.save()

    carSery.detail = "1.6 Base 4Doors"
    carSery.save()

    carSery.detail = "1.6 LS 4Doors"
    carSery.save()

    carSery.detail = "1.6 LSX 4Doors"
    carSery.save()

    carSery.detail = "1.6 LT 4Doors"
    carSery.save()

    carSery.detail = "1.6 Lux 4Doors"
    carSery.save()

    carSery.detail = "1.6 SS 4Doors"
    carSery.save()

    carSery.year = "2012"
    carSery.detail = "1.4 Base 4Doors"
    carSery.save()

    carSery.detail = "1.4 LS 4Doors"
    carSery.save()

    carSery.detail = "1.6 Base 4Doors"
    carSery.save()

    carSery.detail = "1.6 LS 4Doors"
    carSery.save()

    carSery.detail = "1.6 LSX 4Doors"
    carSery.save()

    carSery.detail = "1.6 LT 4Doors"
    carSery.save()

    carSery.detail = "1.6 SS 4Doors"
    carSery.save()

    carSery.year = "2013"
    carSery.detail = "1.6 Base 4Doors"
    carSery.save()

    carSery.detail = "1.6 LS 4Doors"
    carSery.save()

    carSery.detail = "1.6 LSX 4Doors"
    carSery.save()
    //----Aveo

    carSery.model = "Captiva"
    carSery.year = "2007"
    carSery.detail = "2.0 LS 4Doors"
    carSery.car_group_id = 3
    carSery.car_type_id = 5
    carSery.save()

    carSery.detail = "2.0 LT 4Doors"
    carSery.save()

    carSery.detail = "2.4 LS 4Doors"
    carSery.save()

    carSery.detail = "2.4 LT 4Doors"
    carSery.save()

    carSery.year = "2008"
    carSery.detail = "2.0 LS 4Doors"
    carSery.save()

    carSery.detail = "2.0 LT 4Doors"
    carSery.save()

    carSery.detail = "2.4 LS 4Doors"
    carSery.save()

    carSery.detail = "2.4 LT 4Doors"
    carSery.save()

    carSery.year = "2009"
    carSery.detail = "2.0 LS 4Doors"
    carSery.save()

    carSery.detail = "2.0 LSX 4Doors"
    carSery.save()

    carSery.detail = "2.0 LT 4Doors"
    carSery.save()

    carSery.detail = "2.0 LTZ 4Doors"
    carSery.save()

    carSery.detail = "2.4 LS 4Doors"
    carSery.save()

    carSery.detail = "2.4 LT 4Doors"
    carSery.save()

    carSery.year = "2010"
    carSery.detail = "2.0 LS 4Doors"
    carSery.save()

    carSery.detail = "2.0 LSX 4Doors"
    carSery.save()

    carSery.detail = "2.0 LT 4Doors"
    carSery.save()

    carSery.detail = "2.0 LTZ 4Doors"
    carSery.save()

    carSery.detail = "2.4 LS 4Doors"
    carSery.save()

    carSery.detail = "2.4 LT 4Doors"
    carSery.save()

    carSery.year = "2011"
    carSery.detail = "2.0 LS 4Doors"
    carSery.save()

    carSery.detail = "2.0 LSX 4Doors"
    carSery.save()

    carSery.detail = "2.0 LT 4Doors"
    carSery.save()

    carSery.detail = "2.0 LTZ 4Doors"
    carSery.save()

    carSery.detail = "2.4 LS 4Doors"
    carSery.save()

    carSery.detail = "2.4 LSX 4Doors"
    carSery.save()

    carSery.detail = "2.4 LT 4Doors"
    carSery.save()

    carSery.detail = "2.4 LTZ 4Doors"
    carSery.save()

    carSery.year = "2012"
    carSery.detail = "2.0 LSX 4Doors"
    carSery.save()

    carSery.detail = "2.0 LT 4Doors"
    carSery.save()

    carSery.detail = "2.0 LTZ 4Doors"
    carSery.save()

    carSery.detail = "2.4 LS 4Doors"
    carSery.save()

    carSery.detail = "2.4 LSX 4Doors"
    carSery.save()

    carSery.detail = "2.4 LT 4Doors"
    carSery.save()

    carSery.detail = "2.4 LTZ 4Doors"
    carSery.save()

    carSery.year = "2013"
    carSery.detail = "2.0 LSX 4Doors"
    carSery.save()

    carSery.detail = "2.0 LT 4Doors"
    carSery.save()

    carSery.detail = "2.0 LTZ 4Doors"
    carSery.save()

    carSery.detail = "2.4 LS 4Doors"
    carSery.save()

    carSery.detail = "2.4 LSX 4Doors"
    carSery.save()

    carSery.detail = "2.4 LT 4Doors"
    carSery.save()

    carSery.detail = "2.4 LTZ 4Doors"
    carSery.save()

    carSery.year = "2014"
    carSery.detail = "2.0 LSX 4Doors"
    carSery.save()

    carSery.detail = "2.0 LT 4Doors"
    carSery.save()

    carSery.detail = "2.0 LTZ 4Doors"
    carSery.save()

    carSery.detail = "2.0 LTZ SVP 4Doors"
    carSery.save()

    carSery.detail = "2.4 LS 4Doors"
    carSery.save()

    carSery.detail = "2.4 LSX 4Doors"
    carSery.save()

    carSery.detail = "2.4 LT 4Doors"
    carSery.save()

    carSery.detail = "2.4 LTZ 4Doors"
    carSery.save()

    carSery.detail = "2.4 LTZ SVP 4Doors"
    carSery.save()

    carSery.year = "2015"
    carSery.detail = "2.0 LSX 4Doors"
    carSery.save()

    carSery.detail = "2.0 LTZ 4Doors"
    carSery.save()

    carSery.detail = "2.0 LTZ SVP 4Doors"
    carSery.save()

    carSery.detail = "2.4 LSX 4Doors"
    carSery.save()

    carSery.detail = "2.4 LTZ 4Doors"
    carSery.save()

    carSery.detail = "2.4 LTZ SVP 4Doors"
    carSery.save()

    carSery.year = "2016"
    carSery.detail = "2.0 LSX 4Doors"
    carSery.save()

    carSery.detail = "2.0 LTZ 4Doors"
    carSery.save()

    carSery.detail = "2.0 LTZ SVP 4Doors"
    carSery.save()

    carSery.detail = "2.4 LSX 4Doors"
    carSery.save()

    carSery.detail = "2.4 LTZ 4Doors"
    carSery.save()

    carSery.detail = "2.4 LTZ SVP 4Doors"
    carSery.save()

    carSery.year = "2017"
    carSery.detail = "2.0 LSX 4Doors"
    carSery.save()

    carSery.detail = "2.0 LTZ 4Doors"
    carSery.save()

    carSery.detail = "2.0 LTZ SVP 4Doors"
    carSery.save()

    carSery.detail = "2.4 LSX 4Doors"
    carSery.save()

    carSery.detail = "2.4 LTZ 4Doors"
    carSery.save()

    carSery.detail = "2.4 LTZ SVP 4Doors"
    carSery.save()

    carSery.year = "2018"
    carSery.detail = "2.0 LSX 4Doors"
    carSery.save()

    carSery.detail = "2.0 LTZ 4Doors"
    carSery.save()

    carSery.detail = "2.4 LTZ 4Doors"
    carSery.save()
    //----Captiva
    carSery.model = "Colorado"
    carSery.year = "2004"
    carSery.detail = "2.5 Base XL 2Doors"
    carSery.car_type_id = 2
    carSery.save()

    carSery.detail = "2.5 LS 2Doors"
    carSery.save()

    carSery.detail = "2.5 LS1 2Doors"
    carSery.save()

    carSery.detail = "3.0 Base XL 4Doors"
    carSery.save()

    carSery.detail = "3.0 LS 2Doors"
    carSery.save()

    carSery.detail = "3.0 LS 4Doors"
    carSery.save()

    carSery.detail = "3.0 LT 2Doors"
    carSery.save()

    carSery.detail = "3.0 LT 4Doors"
    carSery.save()

    carSery.detail = "3.0 LT1 2Doors"
    carSery.save()

    carSery.detail = "3.0 LT1 4Doors"
    carSery.save()

    carSery.detail = "3.0 Z71 2Doors"
    carSery.save()

    carSery.detail = "3.0 Z71 4Doors"
    carSery.save()

    carSery.year = "2005"
    carSery.detail = "2.5 2Doors"
    carSery.save()

    carSery.detail = "2.5 Base XL 2Doors"
    carSery.save()

    carSery.detail = "2.5 LS 2Doors"
    carSery.save()

    carSery.detail = "2.5 LS 4Doors"
    carSery.save()

    carSery.detail = "2.5 LS1 2Doors"
    carSery.save()

    carSery.detail = "2.5 LT 2Doors"
    carSery.save()

    carSery.detail = "2.5 LT 4Doors"
    carSery.save()

    carSery.detail = "3.0 Base XL 4Doors"
    carSery.save()

    carSery.detail = "3.0 LS 4Doors"
    carSery.save()

    carSery.detail = "3.0 LT 2Doors"
    carSery.save()

    carSery.detail = "3.0 LT 4Doors"
    carSery.save()

    carSery.detail = "3.0 LT1 2Doors"
    carSery.save()

    carSery.detail = "3.0 LT1 4Doors"
    carSery.save()

    carSery.detail = "3.0 Z71 2Doors"
    carSery.save()

    carSery.detail = "3.0 Z71 4Doors"
    carSery.save()

    carSery.year = "2006"
    carSery.detail = "2.5 2Doors"
    carSery.save()

    carSery.detail = "2.5 Base XL 2Doors"
    carSery.save()

    carSery.detail = "2.5 LS 2Doors"
    carSery.save()

    carSery.detail = "2.5 LS 4Doors"
    carSery.save()

    carSery.detail = "2.5 LS1 2Doors"
    carSery.save()

    carSery.detail = "2.5 LT 2Doors"
    carSery.save()

    carSery.detail = "2.5 LT 4Doors"
    carSery.save()

    carSery.detail = "2.5 Z71 2Doors"
    carSery.save()

    carSery.detail = "2.5 Z71 4Doors"
    carSery.save()

    carSery.detail = "3.0 Base XL 4Doors"
    carSery.save()

    carSery.detail = "3.0 LS 4Doors"
    carSery.save()

    carSery.detail = "3.0 LT 2Doors"
    carSery.save()

    carSery.detail = "3.0 LT 4Doors"
    carSery.save()

    carSery.detail = "3.0 LT1 2Doors"
    carSery.save()

    carSery.detail = "3.0 LT1 4Doors"
    carSery.save()

    carSery.detail = "3.0 Z71 2Doors"
    carSery.save()

    carSery.detail = "3.0 Z71 4Doors"
    carSery.save()

    carSery.year = "2007"
    carSery.detail = "2.5 2Doors"
    carSery.save()

    carSery.detail = "2.5 LS 2Doors"
    carSery.save()

    carSery.detail = "2.5 LS 4Doors"
    carSery.save()

    carSery.detail = "2.5 LS1 2Doors"
    carSery.save()

    carSery.detail = "2.5 LT 2Doors"
    carSery.save()

    carSery.detail = "2.5 LT 4Doors"
    carSery.save()

    carSery.detail = "2.5 Z71 2Doors"
    carSery.save()

    carSery.detail = "2.5 Z71 4Doors"
    carSery.save()

    carSery.detail = "3.0 LS 4Doors"
    carSery.save()

    carSery.detail = "3.0 LT 2Doors"
    carSery.save()

    carSery.detail = "3.0 LT 4Doors"
    carSery.save()

    carSery.detail = "3.0 LT1 2Doors"
    carSery.save()

    carSery.detail = "3.0 LT1 4Doors"
    carSery.save()

    carSery.detail = "3.0 Z71 2Doors"
    carSery.save()

    carSery.detail = "3.0 Z71 4Doors"
    carSery.save()

    carSery.year = "2008"
    carSery.detail = "2.5 2Doors"
    carSery.save()

    carSery.detail = "2.5 LS 2Doors"
    carSery.save()

    carSery.detail = "2.5 LS 4Doors"
    carSery.save()

    carSery.detail = "2.5 LS1 2Doors"
    carSery.save()

    carSery.detail = "2.5 LT 2Doors"
    carSery.save()

    carSery.detail = "2.5 LT 4Doors"
    carSery.save()

    carSery.detail = "2.5 Z71 2Doors"
    carSery.save()

    carSery.detail = "2.5 Z71 4Doors"
    carSery.save()

    carSery.detail = "3.0 LS 4Doors"
    carSery.save()

    carSery.detail = "3.0 LT 2Doors"
    carSery.save()

    carSery.detail = "3.0 LT 4Doors"
    carSery.save()

    carSery.detail = "3.0 LT1 2Doors"
    carSery.save()

    carSery.detail = "3.0 LT1 4Doors"
    carSery.save()

    carSery.detail = "3.0 Z71 2Doors"
    carSery.save()

    carSery.detail = "3.0 Z71 4Doors"
    carSery.save()

    carSery.year = "2009"
    carSery.detail = "2.5 2Doors"
    carSery.save()

    carSery.detail = "2.5 LS 2Doors"
    carSery.save()

    carSery.detail = "2.5 LS 4Doors"
    carSery.save()

    carSery.detail = "2.5 LS1 2Doors"
    carSery.save()

    carSery.detail = "2.5 LT 2Doors"
    carSery.save()

    carSery.detail = "2.5 LT 4Doors"
    carSery.save()

    carSery.detail = "2.5 Z71 2Doors"
    carSery.save()

    carSery.detail = "2.5 Z71 4Doors"
    carSery.save()

    carSery.detail = "3.0 LS 4Doors"
    carSery.save()

    carSery.detail = "3.0 LT 2Doors"
    carSery.save()

    carSery.detail = "3.0 LT 4Doors"
    carSery.save()

    carSery.detail = "3.0 LT1 2Doors"
    carSery.save()

    carSery.detail = "3.0 LT1 4Doors"
    carSery.save()

    carSery.detail = "3.0 Z71 2Doors"
    carSery.save()

    carSery.detail = "3.0 Z71 4Doors"
    carSery.save()

    carSery.year = "2010"
    carSery.detail = "2.5 2Doors"
    carSery.save()

    carSery.detail = "2.5 LS 2Doors"
    carSery.save()

    carSery.detail = "2.5 LS 4Doors"
    carSery.save()

    carSery.detail = "2.5 LS1 2Doors"
    carSery.save()

    carSery.detail = "2.5 LS1 4Doors"
    carSery.save()

    carSery.detail = "2.5 LS2 Sport 2Doors"
    carSery.save()

    carSery.detail = "2.5 LT 2Doors"
    carSery.save()

    carSery.detail = "2.5 LT 4Doors"
    carSery.save()

    carSery.detail = "2.5 Z71 2Doors"
    carSery.save()

    carSery.detail = "2.5 Z71 4Doors"
    carSery.save()

    carSery.detail = "2.5 ZL1 Sport 2Doors"
    carSery.save()

    carSery.detail = "2.5 ZL1 Sport 4Doors"
    carSery.save()

    carSery.detail = "3.0 Cruise 4Doors"
    carSery.save()

    carSery.detail = "3.0 LS 4Doors"
    carSery.save()

    carSery.detail = "3.0 LT 2Doors"
    carSery.save()

    carSery.detail = "3.0 LT 4Doors"
    carSery.save()

    carSery.detail = "3.0 LT1 2Doors"
    carSery.save()

    carSery.detail = "3.0 LT1 4Doors"
    carSery.save()

    carSery.detail = "3.0 Maxx Super 4Doors"
    carSery.save()

    carSery.detail = "3.0 Z71 2Doors"
    carSery.save()

    carSery.detail = "3.0 Z71 4Doors"
    carSery.save()

    carSery.year = "2011"
    carSery.detail = "2.5 2Doors"
    carSery.save()

    carSery.detail = "2.5 LS 2Doors"
    carSery.save()

    carSery.detail = "2.5 LS 4Doors"
    carSery.save()

    carSery.detail = "2.5 LS1 2Doors"
    carSery.save()

    carSery.detail = "2.5 LS1 4Doors"
    carSery.save()

    carSery.detail = "2.5 LS2 Sport 2Doors"
    carSery.save()

    carSery.detail = "2.5 LT 2Doors"
    carSery.save()

    carSery.detail = "2.5 LT 4Doors"
    carSery.save()

    carSery.detail = "2.5 LT Z71 2Doors"
    carSery.save()

    carSery.detail = "2.5 LT Z71 4Doors"
    carSery.save()

    carSery.detail = "2.5 LTZ 2Doors"
    carSery.save()

    carSery.detail = "2.5 Z71 2Doors"
    carSery.save()

    carSery.detail = "2.5 Z71 4Doors"
    carSery.save()

    carSery.detail = "2.5 ZL1 Sport 2Doors"
    carSery.save()

    carSery.detail = "2.5 ZL1 Sport 4Doors"
    carSery.save()

    carSery.detail = "2.8 LT Z71 2Doors"
    carSery.save()

    carSery.detail = "2.8 LT Z71 4Doors"
    carSery.save()

    carSery.detail = "2.8 LTZ 2Doors"
    carSery.save()

    carSery.detail = "2.8 LTZ 4Doors"
    carSery.save()

    carSery.detail = "2.8 LTZ Z71 2Doors"
    carSery.save()

    carSery.detail = "2.8 LTZ Z71 4Doors"
    carSery.save()

    carSery.detail = "3.0 LT1 2Doors"
    carSery.save()

    carSery.detail = "3.0 LT1 4Doors"
    carSery.save()

    carSery.detail = "3.0 Maxx Super 4Doors"
    carSery.save()

    carSery.detail = "3.0 Z71 2Doors"
    carSery.save()

    carSery.detail = "3.0 Z71 4Doors"
    carSery.save()

    carSery.year = "2012"
    carSery.detail = "2.5 LS 2Doors"
    carSery.save()

    carSery.detail = "2.5 LS1 2Doors"
    carSery.save()

    carSery.detail = "2.5 LS1 4Doors"
    carSery.save()

    carSery.detail = "2.5 LT 2Doors"
    carSery.save()

    carSery.detail = "2.5 LT 4Doors"
    carSery.save()

    carSery.detail = "2.5 LT Z71 2Doors"
    carSery.save()

    carSery.detail = "2.5 LT Z71 4Doors"
    carSery.save()

    carSery.detail = "2.5 LTZ 2Doors"
    carSery.save()

    carSery.detail = "2.8 LT Z71 2Doors"
    carSery.save()

    carSery.detail = "2.8 LT Z71 4Doors"
    carSery.save()

    carSery.detail = "2.8 LTZ 2Doors"
    carSery.save()

    carSery.detail = "2.8 LTZ 4Doors"
    carSery.save()

    carSery.detail = "2.8 LTZ Z71 2Doors"
    carSery.save()

    carSery.detail = "2.8 LTZ Z71 4Doors"
    carSery.save()

    carSery.year = "2013"
    carSery.detail = "2.5 LS 2Doors"
    carSery.save()

    carSery.detail = "2.5 LS1 2Doors"
    carSery.save()

    carSery.detail = "2.5 LS1 4Doors"
    carSery.save()

    carSery.detail = "2.5 LT 2Doors"
    carSery.save()

    carSery.detail = "2.5 LT 4Doors"
    carSery.save()

    carSery.detail = "2.5 LT Z71 2Doors"
    carSery.save()

    carSery.detail = "2.5 LT Z71 4Doors"
    carSery.save()

    carSery.detail = "2.5 LTZ 2Doors"
    carSery.save()

    carSery.detail = "2.8 LT Z71 2Doors"
    carSery.save()

    carSery.detail = "2.8 LT Z71 4Doors"
    carSery.save()

    carSery.detail = "2.8 LTZ 2Doors"
    carSery.save()

    carSery.detail = "2.8 LTZ 4Doors"
    carSery.save()

    carSery.detail = "2.8 LTZ Z71 2Doors"
    carSery.save()

    carSery.detail = "2.8 LTZ Z71 4Doors"
    carSery.save()

    carSery.year = "2014"
    carSery.detail = "2.5 LS 2Doors"
    carSery.save()

    carSery.detail = "2.5 LS1 2Doors"
    carSery.save()

    carSery.detail = "2.5 LS1 4Doors"
    carSery.save()

    carSery.detail = "2.5 LT 2Doors"
    carSery.save()

    carSery.detail = "2.5 LT 4Doors"
    carSery.save()

    carSery.detail = "2.5 LT Z71 2Doors"
    carSery.save()

    carSery.detail = "2.5 LT Z71 4Doors"
    carSery.save()

    carSery.detail = "2.8 LT Z71 4Doors"
    carSery.save()

    carSery.detail = "2.8 LTZ 4Doors"
    carSery.save()

    carSery.detail = "2.8 LTZ Z71 2Doors"
    carSery.save()

    carSery.detail = "2.8 LTZ Z71 4Doors"
    carSery.save()

    carSery.year = "2015"
    carSery.detail = "2.5 LS 2Doors"
    carSery.save()

    carSery.detail = "2.5 LS1 2Doors"
    carSery.save()

    carSery.detail = "2.5 LS1 4Doors"
    carSery.save()

    carSery.detail = "2.5 LT 2Doors"
    carSery.save()

    carSery.detail = "2.5 LT 4Doors"
    carSery.save()

    carSery.detail = "2.5 LT Z71 2Doors"
    carSery.save()

    carSery.detail = "2.5 LT Z71 4Doors"
    carSery.save()

    carSery.detail = "2.5 LTZ Z71 2Doors"
    carSery.save()

    carSery.detail = "2.5 LTZ Z71 4Doors"
    carSery.save()

    carSery.detail = "2.8 LT Z71 4Doors"
    carSery.save()

    carSery.detail = "2.8 LTZ Z71 2Doors"
    carSery.save()

    carSery.detail = "2.8 LTZ Z71 4Doors"
    carSery.save()

    carSery.detail = "2.8 LTZ Z71 High Country 4Doors"
    carSery.save()

    carSery.year = "2016"
    carSery.detail = "2.5 2Doors"
    carSery.save()

    carSery.detail = "2.5 High Country 4Doors"
    carSery.save()

    carSery.detail = "2.5 LS 2Doors"
    carSery.save()

    carSery.detail = "2.5 LS 4Doors"
    carSery.save()

    carSery.detail = "2.5 LT 2Doors"
    carSery.save()

    carSery.detail = "2.5 LT 4Doors"
    carSery.save()

    carSery.detail = "2.5 LT Z71 2Doors"
    carSery.save()

    carSery.detail = "2.5 LT Z71 4Doors"
    carSery.save()

    carSery.detail = "2.5 LTZ Z71 2Doors"
    carSery.save()

    carSery.detail = "2.5 LTZ Z71 4Doors"
    carSery.save()

    carSery.detail = "2.8 LT Z71 4Doors"
    carSery.save()

    carSery.detail = "2.8 LTZ Z71 4Doors"
    carSery.save()

    carSery.detail = "2.8 LTZ Z71 High Country 4Doors"
    carSery.save()

    carSery.year = "2017"
    carSery.detail = "2.5 2Doors"
    carSery.save()

    carSery.detail = "2.5 High Country 4Doors"
    carSery.save()

    carSery.detail = "2.5 High Country Storm 4Doors"
    carSery.save()

    carSery.detail = "2.5 LS 2Doors"
    carSery.save()

    carSery.detail = "2.5 LS 4Doors"
    carSery.save()

    carSery.detail = "2.5 LT 2Doors"
    carSery.save()

    carSery.detail = "2.5 LT 4Doors"
    carSery.save()

    carSery.detail = "2.5 LT Z71 2Doors"
    carSery.save()

    carSery.detail = "2.5 LT Z71 4Doors"
    carSery.save()

    carSery.detail = "2.5 LTZ Z71 2Doors"
    carSery.save()

    carSery.detail = "2.5 LTZ Z71 4Doors"
    carSery.save()

    carSery.year = "2018"
    carSery.detail = "2.5 High Country 4Doors"
    carSery.save()

    carSery.detail = "2.5 High Country Storm 4Doors"
    carSery.save()

    carSery.detail = "2.5 LS 2Doors"
    carSery.save()

    carSery.detail = "2.5 LS 4Doors"
    carSery.save()

    carSery.detail = "2.5 LT 2Doors"
    carSery.save()

    carSery.detail = "2.5 LT 4Doors"
    carSery.save()

    carSery.detail = "2.5 LT Z71 2Doors"
    carSery.save()

    carSery.detail = "2.5 LT Z71 4Doors"
    carSery.save()

    carSery.detail = "2.5 LTZ Z71 2Doors"
    carSery.save()

    carSery.detail = "2.5 LTZ Z71 4Doors"
    carSery.save()

    carSery.year = "2019"
    carSery.detail = "2.5 2Doors"
    carSery.save()

    carSery.detail = "2.5 High Country 4Doors"
    carSery.save()

    carSery.detail = "2.5 High Country Storm 4Doors"
    carSery.save()

    carSery.detail = "2.5 LS 2Doors"
    carSery.save()

    carSery.detail = "2.5 LS 4Doors"
    carSery.save()

    carSery.detail = "2.5 LT 2Doors"
    carSery.save()

    carSery.detail = "2.5 LT 4Doors"
    carSery.save()

    carSery.detail = "2.5 LT Z71 2Doors"
    carSery.save()

    carSery.detail = "2.5 LT Z71 4Doors"
    carSery.save()

    carSery.detail = "2.5 LTZ Z71 2Doors"
    carSery.save()

    carSery.detail = "2.5 LTZ Z71 4Doors"
    carSery.save()
    //----Colorado

    carSery.model = "Cruze"
    carSery.year = "2010"
    carSery.detail = "1.6 Base 4Doors"
    carSery.car_group_id = 4
    carSery.car_type_id = 1
    carSery.save()

    carSery.detail = "1.6 LS 4Doors"
    carSery.save()

    carSery.detail = "1.8 LS 4Doors"
    carSery.save()

    carSery.detail = "1.8 LT 4Doors"
    carSery.save()

    carSery.detail = "1.8 LTZ 4Doors"
    carSery.save()

    carSery.detail = "2.0 LTZ 4Doors"
    carSery.save()

    carSery.year = "2011"
    carSery.detail = "1.6 Base 4Doors"
    carSery.save()

    carSery.detail = "1.6 LS 4Doors"
    carSery.save()

    carSery.detail = "1.8 LS 4Doors"
    carSery.save()

    carSery.detail = "1.8 LT 4Doors"
    carSery.save()

    carSery.detail = "1.8 LTZ 4Doors"
    carSery.save()

    carSery.detail = "2.0 LTZ 4Doors"
    carSery.save()

    carSery.year = "2012"
    carSery.detail = "1.6 Base 4Doors"
    carSery.save()

    carSery.detail = "1.6 LS 4Doors"
    carSery.save()

    carSery.detail = "1.6 LT 4Doors"
    carSery.save()

    carSery.detail = "1.8 LS 4Doors"
    carSery.save()

    carSery.detail = "1.8 LT 4Doors"
    carSery.save()

    carSery.detail = "1.8 LTZ 4Doors"
    carSery.save()

    carSery.detail = "2.0 LTZ 4Doors"
    carSery.save()

    carSery.year = "2013"
    carSery.detail = "1.6 Base 4Doors"
    carSery.save()

    carSery.detail = "1.6 LS 4Doors"
    carSery.save()

    carSery.detail = "1.6 LT 4Doors"
    carSery.save()

    carSery.detail = "1.8 LS 4Doors"
    carSery.save()

    carSery.detail = "1.8 LT 4Doors"
    carSery.save()

    carSery.detail = "1.8 LTZ 4Doors"
    carSery.save()

    carSery.detail = "2.0 LTZ 4Doors"
    carSery.save()

    carSery.year = "2014"
    carSery.detail = "1.6 Base 4Doors"
    carSery.save()

    carSery.detail = "1.6 LS 4Doors"
    carSery.save()

    carSery.detail = "1.6 LT 4Doors"
    carSery.save()

    carSery.detail = "1.8 LS 4Doors"
    carSery.save()

    carSery.detail = "1.8 LT 4Doors"
    carSery.save()

    carSery.detail = "1.8 LTZ 4Doors"
    carSery.save()

    carSery.detail = "2.0 LTZ 4Doors"
    carSery.save()

    carSery.year = "2015"
    carSery.detail = "1.6 LT 4Doors"
    carSery.save()

    carSery.detail = "1.8 LS 4Doors"
    carSery.save()

    carSery.detail = "1.8 LT 4Doors"
    carSery.save()

    carSery.detail = "1.8 LTZ 4Doors"
    carSery.save()

    carSery.detail = "2.0 LTZ 4Doors"
    carSery.save()

    carSery.year = "2016"
    carSery.detail = "1.6 LT 4Doors"
    carSery.save()

    carSery.detail = "1.8 LS 4Doors"
    carSery.save()

    carSery.detail = "1.8 LT 4Doors"
    carSery.save()

    carSery.detail = "1.8 LTZ 4Doors"
    carSery.save()

    carSery.year = "2017"
    carSery.detail = "1.8 LT 4Doors"
    carSery.save()

    carSery.detail = "1.8 LTZ 4Doors"
    carSery.save()
    //----Cruze
    //----Lumina no group

    carSery.model = "Optra"
    carSery.year = "2003"
    carSery.detail = "1.6 4Doors"
    carSery.save()

    carSery.detail = "1.8 LS 4Doors"
    carSery.save()

    carSery.detail = "1.8 LT 4Doors"
    carSery.save()

    carSery.year = "2004"
    carSery.detail = "1.6 4Doors"
    carSery.save()

    carSery.detail = "1.8 LS 4Doors"
    carSery.save()

    carSery.detail = "1.8 LS Luxury 4Doors"
    carSery.save()

    carSery.detail = "1.8 LT 4Doors"
    carSery.save()

    carSery.year = "2005"
    carSery.detail = "1.6 4Doors"
    carSery.save()

    carSery.detail = "1.6 LS 4Doors"
    carSery.save()

    carSery.detail = "1.6 LT 4Doors"
    carSery.save()

    carSery.detail = "1.6 LT Sport 4Doors"
    carSery.save()

    carSery.detail = "1.6 Sport 4Doors"
    carSery.save()

    carSery.detail = "1.8 LS 4Doors"
    carSery.save()

    carSery.detail = "1.8 LS Luxury 4Doors"
    carSery.save()

    carSery.detail = "1.8 LS Sport 4Doors"
    carSery.save()

    carSery.detail = "1.8 LT 4Doors"
    carSery.save()

    carSery.detail = "1.8 LT Sport 4Doors"
    carSery.save()

    carSery.year = "2006"
    carSery.detail = "1.6 4Doors"
    carSery.save()

    carSery.detail = "1.6 LS 4Doors"
    carSery.save()

    carSery.detail = "1.6 LT 4Doors"
    carSery.save()

    carSery.detail = "1.6 LT Luxury 4Doors"
    carSery.save()

    carSery.detail = "1.6 LT Luxury Sport 4Doors"
    carSery.save()

    carSery.detail = "1.6 LT Sport 4Doors"
    carSery.save()

    carSery.detail = "1.6 Sport 4Doors"
    carSery.save()

    carSery.detail = "1.8 LS 4Doors"
    carSery.save()

    carSery.detail = "1.8 LS Limited 4Doors"
    carSery.save()

    carSery.detail = "1.8 LS Sport 4Doors"
    carSery.save()

    carSery.detail = "1.8 LT 4Doors"
    carSery.save()

    carSery.detail = "1.8 LT Sport 4Doors"
    carSery.save()

    carSery.year = "2007"
    carSery.detail = "1.6 4Doors"
    carSery.save()

    carSery.detail = "1.6 LS 4Doors"
    carSery.save()

    carSery.detail = "1.6 LS Sport 4Doors"
    carSery.save()

    carSery.detail = "1.6 LT 4Doors"
    carSery.save()

    carSery.detail = "1.6 LT Luxury 4Doors"
    carSery.save()

    carSery.detail = "1.6 LT Luxury Sport 4Doors"
    carSery.save()

    carSery.detail = "1.6 LT Sport 4Doors"
    carSery.save()

    carSery.detail = "1.6 Sport 4Doors"
    carSery.save()

    carSery.detail = "1.8 LS 4Doors"
    carSery.save()

    carSery.detail = "1.8 LS Limited 4Doors"
    carSery.save()

    carSery.detail = "1.8 LS Sport 4Doors"
    carSery.save()

    carSery.detail = "1.8 LT 4Doors"
    carSery.save()

    carSery.detail = "1.8 LT Sport 4Doors"
    carSery.save()

    carSery.year = "2008"
    carSery.detail = "1.6 LS 4Doors"
    carSery.save()

    carSery.detail = "1.6 LS Sport 4Doors"
    carSery.save()

    carSery.detail = "1.6 LT 4Doors"
    carSery.save()

    carSery.detail = "1.6 LT Luxury 4Doors"
    carSery.save()

    carSery.detail = "1.6 LT Luxury Sport 4Doors"
    carSery.save()

    carSery.detail = "1.6 LT Sport 4Doors"
    carSery.save()

    carSery.detail = "1.8 LT 4Doors"
    carSery.save()

    carSery.detail = "1.8 LT Sport 4Doors"
    carSery.save()

    carSery.year = "2009"
    carSery.detail = "1.6 LS 4Doors"
    carSery.save()

    carSery.detail = "1.6 LT 4Doors"
    carSery.save()

    carSery.detail = "1.6 LT Luxury 4Doors"
    carSery.save()

    carSery.detail = "1.6 LT Luxury Sport 4Doors"
    carSery.save()

    carSery.detail = "1.6 LT Sport 4Doors"
    carSery.save()

    carSery.year = "2010"
    carSery.detail = "1.6 LS 4Doors"
    carSery.save()

    carSery.detail = "1.6 LT 4Doors"
    carSery.save()

    carSery.detail = "1.6 LT Luxury 4Doors"
    carSery.save()

    carSery.detail = "1.6 LT Luxury Sport 4Doors"
    carSery.save()

    carSery.detail = "1.6 LT Sport 4Doors"
    carSery.save()
    //----Optra
    carSery.model = "Sonic"
    carSery.year = "2012"
    carSery.detail = "1.4 LS 4Doors"
    carSery.car_group_id = 5
    carSery.save()

    carSery.detail = "1.4 LT 4Doors"
    carSery.save()

    carSery.detail = "1.4 LTZ 4Doors"
    carSery.save()

    carSery.year = "2013"
    carSery.detail = "1.4 LS 4Doors"
    carSery.save()

    carSery.detail = "1.4 LT 4Doors"
    carSery.save()

    carSery.detail = "1.4 LTZ 4Doors"
    carSery.save()

    carSery.detail = "1.6 LT 4Doors"
    carSery.save()

    carSery.detail = "1.6 LTZ 4Doors"
    carSery.save()

    carSery.year = "2014"
    carSery.detail = "1.4 LS 4Doors"
    carSery.save()

    carSery.detail = "1.4 LT 4Doors"
    carSery.save()

    carSery.detail = "1.6 LT 4Doors"
    carSery.save()

    carSery.detail = "1.6 LTZ 4Doors"
    carSery.save()

    carSery.year = "2015"
    carSery.detail = "1.4 LS 4Doors"
    carSery.save()

    carSery.detail = "1.4 LT 4Doors"
    carSery.save()

    carSery.detail = "1.6 LT 4Doors"
    carSery.save()

    carSery.detail = "1.6 LTZ 4Doors"
    carSery.save()
    //----Sonic

    carSery.model = "Spin"
    carSery.year = "2013"
    carSery.detail = "1.5 LTZ 4Doors"
    carSery.car_group_id = 4
    carSery.car_type_id = 5
    carSery.save()

    carSery.year = "2014"
    carSery.save()

    carSery.year = "2015"
    carSery.save()
    //----Spin

    carSery.model = "Trailblazer"
    carSery.year = "2012"
    carSery.detail = "2.5 LT 4Doors"
    carSery.car_group_id = 3
    carSery.save()

    carSery.detail = "2.8 LT 4Doors"
    carSery.save()

    carSery.detail = "2.8 LTZ 4Doors"
    carSery.save()

    carSery.detail = "2.8 LTZ 1 4Doors"
    carSery.save()

    carSery.year = "2013"
    carSery.detail = "2.5 LT 4Doors"
    carSery.save()

    carSery.detail = "2.8 LT 4Doors"
    carSery.save()

    carSery.detail = "2.8 LTZ 4Doors"
    carSery.save()

    carSery.detail = "2.8 LTZ 1 4Doors"
    carSery.save()

    carSery.year = "2014"
    carSery.detail = "2.5 LT 4Doors"
    carSery.save()

    carSery.detail = "2.8 LT 4Doors"
    carSery.save()

    carSery.detail = "2.8 LTZ 4Doors"
    carSery.save()

    carSery.detail = "2.8 LTZ 1 4Doors"
    carSery.save()

    carSery.year = "2015"
    carSery.detail = "2.5 LT 4Doors"
    carSery.save()

    carSery.detail = "2.8 LT 4Doors"
    carSery.save()

    carSery.detail = "2.8 LTZ 4Doors"
    carSery.save()

    carSery.detail = "2.8 LTZ 1 4Doors"
    carSery.save()

    carSery.year = "2016"
    carSery.detail = "2.5 LT 4Doors"
    carSery.save()

    carSery.detail = "2.5 LTZ 4Doors"
    carSery.save()

    carSery.detail = "2.8 LT 4Doors"
    carSery.save()

    carSery.detail = "2.8 LTZ 4Doors"
    carSery.save()

    carSery.detail = "2.8 LTZ 1 4Doors"
    carSery.save()

    carSery.year = "2017"
    carSery.detail = "2.5 LT 4Doors"
    carSery.save()

    carSery.detail = "2.5 LTZ 4Doors"
    carSery.save()

    carSery.detail = "2.5 LTZ Z71 4Doors"
    carSery.save()

    carSery.detail = "2.8 LT 4Doors"
    carSery.save()

    carSery.detail = "2.8 LTZ 4Doors"
    carSery.save()

    carSery.detail = "2.8 LTZ 1 4Doors"
    carSery.save()

    carSery.year = "2018"
    carSery.detail = "2.5 LT 4Doors"
    carSery.save()

    carSery.detail = "2.5 LTZ 4Doors"
    carSery.save()

    carSery.detail = "2.5 LTZ Z71 4Doors"
    carSery.save()

    carSery.year = "2019"
    carSery.detail = "2.5 LT 4Doors"
    carSery.save()

    carSery.detail = "2.5 LTZ 4Doors"
    carSery.save()

    carSery.detail = "2.5 LTZ Z71 4Doors"
    carSery.save()
    //----Trailblazer

    carSery.model = "Zafira"
    carSery.year = "2000"
    carSery.detail = "1.8 CD 4Doors"
    carSery.car_type_id = 6
    carSery.save()

    carSery.detail = "1.8 GL 4Doors"
    carSery.save()

    carSery.detail = "2.2 CDX 4Doors"
    carSery.save()

    carSery.year = "2001"
    carSery.detail = "1.8 CD 4Doors"
    carSery.save()

    carSery.detail = "1.8 GL 4Doors"
    carSery.save()

    carSery.detail = "2.2 CDX 4Doors"
    carSery.save()

    carSery.detail = "2.2 LT 4Doors"
    carSery.save()

    carSery.year = "2002"
    carSery.detail = "1.8 CD 4Doors"
    carSery.save()

    carSery.detail = "1.8 GL 4Doors"
    carSery.save()

    carSery.detail = "2.2 CDX 4Doors"
    carSery.save()

    carSery.detail = "2.2 LT 4Doors"
    carSery.save()

    carSery.detail = "2.2 Sport 4Doors"
    carSery.save()

    carSery.year = "2003"
    carSery.detail = "1.8 CD 4Doors"
    carSery.save()

    carSery.detail = "1.8 GL 4Doors"
    carSery.save()

    carSery.detail = "2.2 CDX 4Doors"
    carSery.save()

    carSery.detail = "2.2 LT 4Doors"
    carSery.save()

    carSery.detail = "2.2 Sport 4Doors"
    carSery.save()

    carSery.year = "2004"
    carSery.detail = "1.8 CD 4Doors"
    carSery.save()

    carSery.detail = "1.8 GL 4Doors"
    carSery.save()

    carSery.detail = "2.2 CDX 4Doors"
    carSery.save()

    carSery.detail = "2.2 LT 4Doors"
    carSery.save()

    carSery.detail = "2.2 Sport 4Doors"
    carSery.save()

    carSery.year = "2005"
    carSery.detail = "1.8 CD 4Doors"
    carSery.save()

    carSery.detail = "1.8 GL 4Doors"
    carSery.save()

    carSery.detail = "2.2 CDX 4Doors"
    carSery.save()

    carSery.detail = "2.2 LT 4Doors"
    carSery.save()

    carSery.detail = "2.2 Sport 4Doors"
    carSery.save()
    //----Zafira
    //----Chevrolet End

    //----Benz Start
    carSery.brand = "Mercedes-Benz"
    carSery.model = "CL500"
    carSery.year = "2000"
    carSery.detail = "5.0 2Doors"
    carSery.car_group_id = 2
    carSery.car_type_id = 1
    carSery.save()
    
    carSery.year = "2001"
    carSery.save()

    carSery.year = "2002"
    carSery.save()

    carSery.year = "2003"
    carSery.save()

    carSery.year = "2007"
    carSery.detail = "5.5 2Doors"
    carSery.save()

    carSery.year = "2008"
    carSery.save()

    carSery.year = "2009"
    carSery.save()

    carSery.year = "2010"
    carSery.detail = "4.7 2Doors"
    carSery.save()

    carSery.detail = "4.7 AMG 2Doors"
    carSery.save()

    carSery.detail = "5.5 2Doors"
    carSery.save()

    carSery.year = "2011"
    carSery.detail = "4.7 2Doors"
    carSery.save()

    carSery.detail = "4.7 AMG 2Doors"
    carSery.save()
    //----CL500

    carSery.model = "CLS350"
    carSery.year = "2005"
    carSery.detail = "3.5 4Doors"
    carSery.save()

    carSery.year = "2006"
    carSery.save()

    carSery.year = "2007"
    carSery.save()

    carSery.year = "2008"
    carSery.save()

    carSery.year = "2009"
    carSery.save()

    carSery.year = "2010"
    carSery.save()
    //----CLS350

    carSery.model = "E300"
    carSery.year = "2010"
    carSery.detail = "3.0 Avantgarde Sports 4Doors"
    carSery.save()

    carSery.year = "2011"
    carSery.save()

    carSery.year = "2012"
    carSery.save()

    carSery.year = "2013"
    carSery.detail = "2.1 AMG Dynamic Blue TEC HYBRID 4Doors"
    carSery.save()

    carSery.detail = "2.1 Executive Blue TEC HYBRID 4Doors"
    carSery.save()

    carSery.year = "2014"
    carSery.detail = "2.1 AMG Dynamic Blue TEC HYBRID 4Doors"
    carSery.save()

    carSery.detail = "2.1 Executive Blue TEC HYBRID 4Doors"
    carSery.save()

    carSery.year = "2015"
    carSery.detail = "2.1 AMG Dynamic Blue TEC HYBRID 4Doors"
    carSery.save()

    carSery.detail = "2.1 Executive Blue TEC HYBRID 4Doors"
    carSery.save()

    carSery.year = "2016"
    carSery.detail = "2.1 AMG Dynamic Blue TEC HYBRID 4Doors"
    carSery.save()

    carSery.detail = "2.1 Executive Blue TEC HYBRID 4Doors"
    carSery.save()

    carSery.year = "2017"
    carSery.detail = "2.0 AMG Dynamic 2Doors"
    carSery.save()

    carSery.year = "2018"
    carSery.detail = "2.0 AMG Dynamic 2Doors"
    carSery.save()

    carSery.year = "2019"
    carSery.detail = "2.0 AMG Dynamic 2Doors"
    carSery.save()
    //----E300

    carSery.model = "E350"
    carSery.year = "2017"
    carSery.detail = "2.0 e AMG Dynamic 4Doors"
    carSery.save()

    carSery.detail = "2.0 e Avantgarde 4Doors"
    carSery.save()

    carSery.detail = "2.0 e Exclusive 4Doors"
    carSery.save()

    carSery.year = "2018"
    carSery.detail = "2.0 e AMG Dynamic 4Doors"
    carSery.save()

    carSery.detail = "2.0 e Avantgarde 4Doors"
    carSery.save()

    carSery.detail = "2.0 e Exclusive 4Doors"
    carSery.save()

    carSery.year = "2019"
    carSery.detail = "2.0 e AMG Dynamic 4Doors"
    carSery.save()

    carSery.detail = "2.0 e Avantgarde 4Doors"
    carSery.save()

    carSery.detail = "2.0 e Exclusive 4Doors"
    carSery.save()
    //----E350

    carSery.model = "ML300 CDI"
    carSery.year = "2010"
    carSery.detail = "3.0 4Doors"
    carSery.save()

    carSery.detail = "3.0 Premium Edition 4Doors"
    carSery.save()

    carSery.year = "2011"
    carSery.detail = "3.0 4Doors"
    carSery.save()

    carSery.detail = "3.0 Premium Edition 4Doors"
    carSery.save()
    //----ML300

    carSery.model = "R300 CDI"
    carSery.year = "2010"
    carSery.detail = "3.0 4MATIC Executive 4Doors"
    carSery.save()

    carSery.detail = "3.0 4MATIC Family 4Doors"
    carSery.save()

    carSery.year = "2011"
    carSery.detail = "3.0 4MATIC Executive 4Doors"
    carSery.save()

    carSery.detail = "3.0 4MATIC Family 4Doors"
    carSery.save()

    carSery.year = "2012"
    carSery.detail = "3.0 4MATIC Executive 4Doors"
    carSery.save()

    carSery.detail = "3.0 4MATIC Family 4Doors"
    carSery.save()
    //----R300

    carSery.model = "S300"
    carSery.year = "2007"
    carSery.detail = "3.0 4Doors"
    carSery.save()

    carSery.year = "2008"
    carSery.save()

    carSery.year = "2009"
    carSery.save()

    carSery.year = "2010"
    carSery.save()

    carSery.year = "2011"
    carSery.save()
    
    carSery.year = "2012"
    carSery.save()

    carSery.year = "2013"
    carSery.save()

    carSery.detail = "3.0 Exclusive 4Doors"
    carSery.save()

    carSery.detail = "3.0 Final Edition 4Doors"
    carSery.save()

    carSery.year = "2014"
    carSery.detail = "2.1 BlueTEC Hybrid 4Doors"
    carSery.save()

    carSery.year = "2015"
    carSery.save()

    carSery.year = "2016"
    carSery.save()
    //----S300

    carSery.model = "S320"
    carSery.year = "1995"
    carSery.detail = "3.2 4Doors"
    carSery.save()

    carSery.year = "1996"
    carSery.save()

    carSery.year = "1997"
    carSery.save()

    carSery.year = "1998"
    carSery.save()

    carSery.year = "1999"
    carSery.save()

    carSery.year = "2000"
    carSery.save()

    carSery.year = "2001"
    carSery.save()

    carSery.year = "2002"
    carSery.save()
    //----S320

    carSery.model = "S350"
    carSery.year = "2003"
    carSery.detail = "3.7 4Doors"
    carSery.save()

    carSery.year = "2004"
    carSery.save()

    carSery.year = "2005"
    carSery.detail = "3.5 4Doors"
    carSery.save()

    carSery.detail = "3.7 4Doors"
    carSery.save()

    carSery.year = "2006"
    carSery.detail = "3.5 4Doors"
    carSery.save()

    carSery.year = "2007"
    carSery.save()

    carSery.year = "2008"
    carSery.save()

    carSery.year = "2009"
    carSery.save()

    carSery.year = "2017"
    carSery.detail = "2.9 d AMG Premium 4Doors"
    carSery.save()

    carSery.year = "2018"
    carSery.save()

    carSery.detail = "2.9 d Exclusive 4Doors"
    carSery.save()

    carSery.year = "2019"
    carSery.detail = "2.9 d AMG Premium 4Doors"
    carSery.save()

    carSery.detail = "2.9 d Exclusive 4Doors"
    carSery.save()
    //----S350

    carSery.model = "S500"
    carSery.year = "1993"
    carSery.detail = "5.0 2Doors"
    carSery.save()

    carSery.year = "1994"
    carSery.save()

    carSery.year = "1995"
    carSery.save()

    carSery.detail = "5.0 L 4Doors"
    carSery.save()

    carSery.year = "1996"
    carSery.detail = "5.0 2Doors"
    carSery.save()

    carSery.detail = "5.0 L 4Doors"
    carSery.save()

    carSery.year = "1997"
    carSery.save()

    carSery.year = "1998"
    carSery.save()

    carSery.year = "1999"
    carSery.save()

    carSery.year = "2000"
    carSery.save()

    carSery.year = "2001"
    carSery.save()

    carSery.year = "2002"
    carSery.save()

    carSery.year = "2003"
    carSery.save()

    carSery.year = "2004"
    carSery.save()

    carSery.year = "2005"
    carSery.save()

    carSery.detail = "5.5 L 4Doors"
    carSery.save()

    carSery.year = "2006"
    carSery.save()

    carSery.year = "2007"
    carSery.save()

    carSery.year = "2008"
    carSery.save()

    carSery.year = "2009"
    carSery.save()

    carSery.year = "2010"
    carSery.save()

    carSery.year = "2011"
    carSery.save()

    carSery.year = "2015"
    carSery.detail = "4.7 AMG Premium 2Doors"
    carSery.save()

    carSery.year = "2016"
    carSery.detail = "3.0 e AMG Premium 4Doors"
    carSery.save()

    carSery.detail = "3.0 e Exclusive 4Doors"
    carSery.save()

    carSery.detail = "3.0 e Executive 4Doors"
    carSery.save()

    carSery.detail = "4.7 e AMG Premium 2Doors"
    carSery.save()

    carSery.year = "2017"
    carSery.detail = "3.0 e AMG Premium 4Doors"
    carSery.save()

    carSery.detail = "3.0 e Exclusive 4Doors"
    carSery.save()

    carSery.detail = "3.0 e Executive 4Doors"
    carSery.save()

    carSery.detail = "4.7 e AMG Premium 2Doors"
    carSery.save()

    carSery.year = "2018"
    carSery.detail = "3.0 e AMG Premium 4Doors"
    carSery.save()

    carSery.detail = "3.0 e Exclusive 4Doors"
    carSery.save()

    carSery.detail = "3.0 e Executive 4Doors"
    carSery.save()

    carSery.detail = "4.7 e AMG Premium 2Doors"
    carSery.save()
    //----S500
    carSery.model = "SL350"
    carSery.year = "2003"
    carSery.detail = "3.7 2Doors"
    carSery.save()

    carSery.year = "2004"
    carSery.save()

    carSery.year = "2005"
    carSery.save()

    carSery.year = "2006"
    carSery.detail = "3.5 2Doors"
    carSery.save()

    carSery.detail = "3.7 2Doors"
    carSery.save()

    carSery.year = "2007"
    carSery.detail = "3.5 2Doors"
    carSery.save()

    carSery.year = "2008"
    carSery.save()

    carSery.year = "2009"
    carSery.save()

    carSery.year = "2010"
    carSery.save()

    carSery.year = "2011"
    carSery.save()

    carSery.year = "2012"
    carSery.detail = "3.5 Sport 2Doors"
    carSery.save()

    carSery.year = "2013"
    carSery.save()

    carSery.year = "2014"
    carSery.save()
    //----SL350

    carSery.model = "SLK350 BlueEFFICIENCY AMG"
    carSery.year = "2011"
    carSery.detail = "3.5 Sport 2Doors"
    carSery.save()

    carSery.year = "2012"
    carSery.save()
    //----SLK350

    carSery.model = "SLS AMG"
    carSery.year = "2010"
    carSery.detail = "6.2 2Doors"
    carSery.save()

    carSery.year = "2011"
    carSery.save()

    carSery.year = "2012"
    carSery.save()
    //-----SLS AMG
    carSery.model = "Viano"
    carSery.year = "2012"
    carSery.detail = "2.2 3Doors"
    carSery.save()

    carSery.year = "2013"
    carSery.save()

    carSery.year = "2014"
    carSery.save()
    //----Viano
    //----Benz End



  }
}

module.exports = CarSerySeeder
