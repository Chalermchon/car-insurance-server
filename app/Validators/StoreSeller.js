'use strict'

class StoreSeller {
  get rules () {
    return {
      'name_prefix': 'required',
      'first_name': 'required',
      'last_name': 'required',
      'birth_date': 'required',
      'phone': 'required|regex:^[0][689][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9]$|unique:sellers',
      'email': 'required|email|unique:sellers',
      'username': 'required|unique:sellers',
      'password': 'required|regex:^......+$|confirmed',
    }
  }
  
  get messages() {
    return {
      'name_prefix.required': '* กรุณากรอกคำนำหน้าชื่อ *',
      'first_name.required': '* กรุณากรอกชื่อจริง *',
      'last_name.required': '* กรุณากรอกนามสกุล *',
      'birth_date.required': '* กรุณาเลือกวันเกิด *',
      'phone.required': '* กรุณากรอกเบอร์โทรศัพท์ *',
      'email.required': '* กรุณากรอกอีเมล *',
      'username.required': '* กรุณากรอก username *',
      'password.required': '* กรุณากรอก password *',
      'phone.regex': '* หมายเลขของคุณไม่ถูกต้อง *',
      'email': '* อีเมลของคุณไม่ถูกต้อง *',
      'phone.unique': '* หมายเลขนี้ถูกใช้ไปแล้ว *',
      'email.unique': '* อีเมลนี้ถูกใช้ไปแล้ว *',
      'username.unique': '* username นี้ถูกใช้ไปแล้ว *',
      'password.regex': '* password ต้องไม่น้อยกว่า 6 ตัว *',
      'confirmed': '* password ของคุณไม่ตรงกัน *'
    }
  }

  async fail(error) {
    this.ctx.session.withError(error)
      .fetshAll()
    return this.ctx.response.redirect('back')
  }
}

module.exports = StoreSeller
