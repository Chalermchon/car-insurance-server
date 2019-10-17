'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Seller extends Model {

    static boot() {
        super.boot()

        this.addTrait('@provider:Lucid/SoftDeletes')
    }

    insuranceRequests() {
        return this.hasMany('App/Models/InsuranceRequest')
    }
}

module.exports = Seller
