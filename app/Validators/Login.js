'use strict'

class Login {
  get rules () {
    return {
      'email': 'required|email|exists:users,email',
      'password': 'required'
    }
  }
  
  get messages() {
    return {
      'required': 'Please enter your {{ field }}.',
      'email': 'Your email is invalid.',
      'exists': 'Your email is not exists.'
    }
  }

  async fail(error) {
    this.ctx.session.withError(error)
      .fetshAll()
    return this.ctx.response.redirect('back')
  }
}

module.exports = Login
