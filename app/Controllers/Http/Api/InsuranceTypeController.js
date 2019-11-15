'use strict'

const InsuranceType = use('App/Models/InsuranceType')

class InsuranceTypeController {


  async index({ response }) {
    const insuranceTypes = (await InsuranceType.query().with('protectionDetail').fetch()).rows;

    const insuranceGroups = [];
    const insuranceTypesResult = insuranceTypes.map(insuranceType  => {
      if (!insuranceGroups.includes(insuranceType.insurance_group)) {
        insuranceGroups.push(insuranceType.insurance_group)
      }
      let details = {
        annotation: insuranceType.toJSON().protectionDetail.details.annotation,
        protections: insuranceType.toJSON().protectionDetail.details.protections
      };
      return {
        group: insuranceType.insurance_group,
        name: insuranceType.insurance_name,
        option: JSON.parse(insuranceType.option),
        details: details
      };
    });

    const insuranceTypesRes = insuranceGroups.map(insuranceGroup => {
      const insuranceTypes = insuranceTypesResult.filter(insuranceType => {
        return insuranceType.group === insuranceGroup;
      });
      return {
        [`${insuranceGroup}`]: insuranceTypes
      };
    });

    response.status(200).json({
      message: 'Here are your insurance types.',
      data: insuranceTypesRes
    })
  }
}


module.exports = InsuranceTypeController