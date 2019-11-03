'use strict'

const InsuranceType = use('App/Models/InsuranceType')

class InsuranceTypeController {


  async index ({ request, response }) {
    const insuranceTypes = await InsuranceType.query().with('protectionDetail').fetch()

    response.status(200).json({
      message: 'Here are your insurance types.',
      data: insuranceTypes
    })
  }
}

module.exports = InsuranceTypeController
