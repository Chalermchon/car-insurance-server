'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class InsuranceType extends Model {
    
    static boot () {
        super.boot()
        
        this.addTrait('@provider:Lucid/SoftDeletes')
    }

    insuranceRequests() {
        return this.hasMany('App/Models/InsuranceRequest')
    }
    ratePrices() {
        return this.hasMany('App/Models/RatePrice')
    }
    protectionDetail() {
        return this.belongsTo('App/Models/ProtectionDetail')
    }
}

module.exports = InsuranceType
