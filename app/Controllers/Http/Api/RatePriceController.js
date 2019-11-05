'use strict'

const RatePrice = use('App/Models/RatePrice')

class RatePriceController {


  async index({  response }) {
    const ratePrices = await RatePrice.query()
      .with('insuranceType', insuranceTypeQuery => {
        insuranceTypeQuery.select('id', 'insurance_name', 'option', 'protection_detail_id')
          .with('protectionDetail', protectionDetailQuery => {
            protectionDetailQuery.select('id', 'details')
          })
      }).fetch()

    response.status(200).json({
      message: 'Here are your customers.',
      data: ratePrices
    })
  }
}

module.exports = RatePriceController
