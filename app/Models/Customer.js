'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Customer extends Model {
    
    static boot () {
        super.boot()
        
        this.addTrait('@provider:Lucid/SoftDeletes')
        this.addTrait('@provider:Jsonable', [ 'address' ])
    }

    carInformations() {
        return this.hasMany('App/Models/CarInformation')
    }
    insuranceRequests() {
        return this.hasMany('App/Models/InsuranceRequest')
    }
}

module.exports = Customer
