'use strict'

const InsuranceRequest = use('App/Models/InsuranceRequest')

class InsuranceRequestController {


    async store({ request, response }) {
        const {
            car_information_id, customer_id, seller_id,
            insurance_type_id, start_protection_at
        } = request.post()

        const insuranceRequest = await InsuranceRequest.create({
            car_information_id, customer_id, seller_id,
            insurance_type_id, start_protection_at
        })

        response.status(201).json({
            message: 'Successfully created a new insurance request.',
            data: insuranceRequest
        })
    }
}

module.exports = InsuranceRequestController
