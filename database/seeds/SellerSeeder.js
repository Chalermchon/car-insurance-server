'use strict'

/*
|--------------------------------------------------------------------------
| SellerSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')
const Seller = use('App/Models/Seller')

class SellerSeeder {
  async run () {
    await Factory.model('App/Models/Seller').create()
  }
}

module.exports = SellerSeeder
