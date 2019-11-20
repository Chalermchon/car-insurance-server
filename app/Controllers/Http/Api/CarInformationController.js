'use strict'

const CarInformation = use('App/Models/CarInformation')

const Helpers = use('Helpers')
const Env = use('Env')

class CarInformationController {


    async show({ request, response, params: { license_plate_letter, license_plate_number, license_plate_province } }) {

        const carInformations = (await CarInformation.query().with('carSery').with('customer').fetch()).rows

        const result = carInformations.filter(data => {
            const dataJson = JSON.parse(data.license_plate);

            return (
                dataJson.license_plate_letter === license_plate_letter &&
                dataJson.license_plate_number === license_plate_number &&
                dataJson.license_plate_province === license_plate_province
            );
        });

        if (result.length) {
            const data = result[0].toJSON();
            console.log(Helpers.resourcesPath());
            

            response.status(200).json({
                found: true,
                data: {
                    carInformation: {
                        licensePlate: data.license_plate,
                        vinNumber: data.vin_number,
                        engNumber: data.eng_number,
                        carSeryId: car_sery_id,
                        brand: data.carSery.brand,
                        model: data.carSery.model,
                        year: data.carSery.year,
                        detail: data.carSery.detail.replace(/ /g, '-'),
                    },
                    customerInformation: {
                        customerId: customer_id,
                        namePrefix: data.customer.name_prefix,
                        firstName: data.customer.first_name,
                        lastName: data.customer.last_name,
                        identNumber: data.customer.ident_number,
                        birthDate: data.customer.birth_date,
                        email: data.customer.email,
                        phone: data.customer.phone,
                        identImg: data.customer.ident_img,
                        career: data.customer.career,
                        houseNumber: data.customer.address.house_number,
                        tambon: data.customer.address.tambon,
                        changwat: data.customer.address.changwat,
                        amphoe: data.customer.address.amphoe,
                        postalCode: data.customer.address.postal_code,
                    }
                }
            })
        } else {
            response.status(200).json({
                found: false
            })
        }
    }


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
