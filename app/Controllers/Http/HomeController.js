'use strict'

// const  = use('App/Models/Customer')

class HomeController {
    async index({ request, response, view }) {
        return view.render('index')
    }
}

module.exports = HomeController
