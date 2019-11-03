'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Customer extends Model {
    
    static boot () {
        super.boot()
        
        this.addTrait('@provider:Lucid/SoftDeletes')
        
    }
    getAddress(address) {
        return JSON.parse(address);
    }
    getBirthDate(birth_date) {
        let tmp_birth_date = new Date(birth_date)
        let year = tmp_birth_date.getFullYear()
        let month = (tmp_birth_date.getMonth()<=9 ? '0'.concat(tmp_birth_date.getMonth()+1) : tmp_birth_date.getMonth()+1)
        let date = (tmp_birth_date.getDate()<=9 ? '0'.concat(tmp_birth_date.getDate()) : tmp_birth_date.getDate())
        return year +'-'+ month +'-'+ date 
    }

    carInformations() {
        return this.hasMany('App/Models/CarInformation')
    }
    insuranceRequests() {
        return this.hasMany('App/Models/InsuranceRequest')
    }
}

module.exports = Customer
