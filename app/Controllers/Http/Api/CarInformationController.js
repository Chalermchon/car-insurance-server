'use strict'

const CarInformation = use('App/Models/CarInformation')

class CarInformationController {


    async store({ request, response }) {
        const {
            license_plate_letter, license_plate_number, license_plate_province,
            vin_number, eng_number, car_sery_id, customer_id
        } = request.post()

        const license_plate = JSON.stringify({ license_plate_letter, license_plate_number, license_plate_province })

        const carInformation = await CarInformation.create({
            license_plate, vin_number, eng_number, car_sery_id, customer_id
        })

        response.status(201).json({
            message: 'Successfully created a new car information.',
            data: carInformation
        })
    }
}

module.exports = CarInformationController
