'use strict'

// const  = use('App/Models/Customer')

class HomeController {
    async index({ request, response, view }) {;
        return view.render('index', {'isHome': true})
    }
}

module.exports = HomeController
