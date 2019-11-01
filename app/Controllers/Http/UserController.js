'use strict'

class UserController {

    async index({ request, response, view }) {
        return view.render('auth.login')
    }

    async login({ auth, request, response, session }) {
        const { email, password } = request.all()

        try {
           await auth.attempt(email, password)
           return response.redirect('/welcome')
        } catch (error) {
            
            if (error.name === 'PasswordMisMatchException') {
                session.flash({'error': 'Your password is incorrect.'})
                return response.redirect('back')
            }
        }
    }
    
    async logout({ auth, request, response }) {
        await auth.logout()
        return response.redirect('/')
    }

}

module.exports = UserController
