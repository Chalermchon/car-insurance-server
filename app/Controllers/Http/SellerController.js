'use strict'

const Seller = use('App/Models/Seller')

class SellerController {
  
  async index ({ view }) {
    const sellers = (await Seller.all()).rows
    
    return view.render('sellers.index',  {
      beforeThisView: 'HomeController.index',
      sellers: sellers
    })
  }

  async create ({ view }) {
    return view.render('sellers.create', {
      beforeThisView: 'HomeController.index'
    })
  }
  
  async store ({ request, response }) {
    const {
      name_prefix, first_name, last_name, birth_date,
      phone, email, username, password
    } = request.post()

    const birth_date_formated = birth_date.split('-')[2] +'-'+
                                birth_date.split('-')[1] +'-'+
                                birth_date.split('-')[0]
    
    const seller = await Seller.create({
      name_prefix, first_name, last_name, birth_date: birth_date_formated,
      phone, email, username, password
    })

    console.log('CREATE: Seller(' + seller.id + ');')
    return response.route('SellerController.show', {id: seller.username})
  }
  
  async show ({ params: {id}, response, view }) {
    try {
      const seller = await Seller.findByOrFail('username', id)
      return view.render('sellers.show', {
        beforeThisView: 'SellerController.index',
        seller: seller
      })
    } catch (error) {
      return response.status(404).redirect('back')
    }
  }

  async edit ({ params, request, response, view }) {
  }

  async update ({ params, request, response }) {
  }

  async destroy ({ params, request, response }) {
  }
}

module.exports = SellerController
