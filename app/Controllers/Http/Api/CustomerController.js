'use strict'

const Customer = use('App/Models/Customer')

class CustomerController {


  async index({ request, response }) {
    const customers = await Customer.all()

    response.status(200).json({
      message: 'Here are your customers.',
      data: customers
    })
  }


  async store({ request, response }) {
    const {
      name_prefix, first_name, last_name, ident_number, ident_img, birth_date,
      house_number, changwat, amphoe, tambon, postal_code, phone, email, career
    } = request.post()

    const address = JSON.stringify({house_number, changwat, amphoe, tambon, postal_code})
    
    const customer = await Customer.create({
      name_prefix, first_name, last_name, ident_number, ident_img,
      birth_date, address, phone, email, career
    })

    if (!customer) {
      response.status(400).json({
        message: 'Data is uncomplete. Please use these attributes name => name_prefix, first_name, last_name, ident_number, ident_img, birth_date, house_number, changwat, amphoe, tambon, postal_code, phone, email, career'
      })
    }

    response.status(201).json({
      message: 'Successfully created a new customer.',
      data: customer
    })
  }


  async show({ request, response }) {
    const customer = request.post().customer

    response.status(200).json({
      message: 'Here is your customer.',
      data: customer
    })
  }


  async update({ request, response }) {
    const customer = request.post().customer

    customer.name_prefix = request.post().name_prefix
    customer.first_name = request.post().first_name
    customer.last_name = request.post().last_name
    customer.ident_number = request.post().ident_number
    customer.ident_img = request.post().ident_img
    customer.birth_date = request.post().birth_date
    customer.address = request.post().address
    customer.phone = request.post().phone
    customer.email = request.post().email
    customer.career = request.post().career

    await customer.save()

    response.status(200).json({
      message: 'Successfully updated this customer.',
      data: customer
    })
  }


  async destroy({ request, response }) {
    const customer = request.post().customer

    await customer.delete()

    response.status(200).json({
      message: 'Successfully deleted this customer.',
      data: customer
    })
  }
}

module.exports = CustomerController
