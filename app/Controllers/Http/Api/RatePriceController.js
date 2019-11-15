'use strict'

const CarSery = use('App/Models/CarSery')
const RatePrice = use('App/Models/RatePrice')

class RatePriceController {


  async index({ params: { brand, model, year, detail }, response }) {
    const carSeries = (await CarSery.query().fetch()).rows;

    const carSery = carSeries.filter(carSery => {
      return ((carSery.brand.toLowerCase() === brand.toLowerCase()) &&
        (carSery.model.toLowerCase() === model.toLowerCase()) &&
        (carSery.year === year) &&
        (carSery.detail.replace(/ /g, "-") === detail));
    });

    const ratePrices = (await RatePrice.query().with('insuranceType').fetch()).rows;
    const ratePricesResult = ratePrices.filter(ratePrice => {
      return ((ratePrice.car_group_id === carSery[0].car_group_id) &&
        (ratePrice.car_type_id === carSery[0].car_type_id));
    });

    const ratePricesResponse = ratePricesResult.map(value => {
      let ratePrice = value.toJSON();
      return {
        id: ratePrice.insuranceType.id,
        name: ratePrice.insuranceType.insurance_name,
        option: ratePrice.insuranceType.option,
        price: ratePrice.price
      }
    })

    response.status(200).json({
      message: 'Here are your rate prices of ' + brand + ' ' + model + ' ' + year + ' ' + detail + '.',
      data: ratePricesResponse
    })
  }
}

module.exports = RatePriceController
