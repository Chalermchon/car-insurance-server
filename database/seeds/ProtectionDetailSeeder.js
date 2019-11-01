'use strict'

/*
|--------------------------------------------------------------------------
| ProtectionDetailSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const ProtectionDetail = use('App/Models/ProtectionDetail')

class ProtectionDetailSeeder {
  async run () {
    const protectionDetail = new ProtectionDetail()
    // protectionDetail.detail = JSON.stringify({
    //   "...": "...",
    //   "...": "...",
    // })

    //ยังไม่ต้องทำ
  }
}

module.exports = ProtectionDetailSeeder
