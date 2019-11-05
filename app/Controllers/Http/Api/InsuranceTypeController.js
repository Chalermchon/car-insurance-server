'use strict'

const InsuranceType = use('App/Models/InsuranceType')

class InsuranceTypeController {

  async index({ request, response }) {
    const insuranceTypes = (await InsuranceType.query().with('protectionDetail').fetch()).rows

    const getDetails = async () => {
      return Promise.all(insuranceTypes.map(async (insuranceType) => {
        return {
          id: insuranceType.protection_detail_id,
          details: (await insuranceType.protectionDetail().fetch()).details
        }
      }))
    }
    const details = await getDetails()

    const insuranceGroups = []

    const insuranceTypesWithDetails = insuranceTypes.map((value)=>{
      
      if (!insuranceGroups.includes(value.insurance_group)) {
        insuranceGroups.push(value.insurance_group)
      }
      return (
        {
          id: value.id,
          insurance_group: value.insurance_group,
          insurance_name: value.insurance_name,
          option: value.option,
          details: details[value.protection_detail_id].details
        }
      )
    })

    const res = insuranceGroups.map((value) => {
      const insuranceTypesByGroup = []
      insuranceTypesWithDetails.filter(insuranceTypeWithDetails => {
        if (value === insuranceTypeWithDetails.insurance_group) {
          insuranceTypesByGroup.push({
              id: insuranceTypeWithDetails.id,
              insurance_name: insuranceTypeWithDetails.insurance_name,
              option: JSON.parse(insuranceTypeWithDetails.option),
              details: JSON.parse(insuranceTypeWithDetails.details)
          })
        }
      })
      return {
        [`${value}`]: insuranceTypesByGroup
      }
    })

    response.status(200).json({
      message: 'Here are your insurance types.',
      data: res
    })
  }
}


module.exports = InsuranceTypeController
