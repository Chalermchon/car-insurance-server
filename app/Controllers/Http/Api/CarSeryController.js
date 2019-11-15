'use strict'

const CarSery = use('App/Models/CarSery')

class CarSeryController {

  
  async brands({ response }) {
    const carSeries = (await CarSery.query().fetch()).rows;

    const carBrands = [];
    carSeries.map(carSery => {

      if (!carBrands.includes(carSery.brand)) {
        carBrands.push(carSery.brand);
      }
    });

    response.status(200).json({
      message: 'Here are your car brands.',
      data: carBrands
    });
  }


  async models({ params: { brand }, response }) {
    const carSeries = (await CarSery.query().fetch()).rows;

    const carSeriesWithBrand = carSeries.filter(carSery => {
      return carSery.brand.toLowerCase() === brand.toLowerCase();
    });

    const carModels = [];
    carSeriesWithBrand.map(carSery => {

      if (!carModels.includes(carSery.model)) {
        carModels.push(carSery.model);
      }
    });

    response.status(200).json({
      message: 'Here are your car models of ' + brand + '.',
      data: carModels
    });
  }


  async years({ params: { model }, response }) {
    const carSeries = (await CarSery.query().fetch()).rows;

    const carSeriesWithModel = carSeries.filter(carSery => {
      return carSery.model.toLowerCase() === model.toLowerCase();
    });

    const carYears = [];
    carSeriesWithModel.map(carSery => {

      if (carYears.indexOf(carSery.year) === -1) {
        carYears.push(carSery.year);
      }
    });

    response.status(200).json({
      message: 'Here are your car years of ' + model + '.',
      data: carYears
    });
  }
  

  async details({ params: { model, year }, response }) {
    const carSeries = (await CarSery.query().fetch()).rows;

    const carSeriesWithModel = carSeries.filter(carSery => {
      return carSery.model.toLowerCase() === model.toLowerCase();
    });

    const carSeriesWithModelAndYear = carSeriesWithModel.filter(carSery => {
      return carSery.year === year;
    });

    const carDetails = carSeriesWithModelAndYear.map(carSery => {
      return carSery.detail;
    });

    response.status(200).json({
      message: 'Here are your car details of ' + model + ' in ' + year + '.',
      data: carDetails
    });
  }

}

module.exports = CarSeryController
