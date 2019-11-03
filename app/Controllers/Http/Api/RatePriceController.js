'use strict'

const RatePrice = use('App/Models/RatePrice')

class RatePriceController {


  async index({ params: { car_group_id, car_type_id }, response }) {
    const ratePrices = await RatePrice.query()
      .where('car_group_id', car_group_id).where('car_type_id', car_type_id)
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
