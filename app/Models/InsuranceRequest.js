'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class InsuranceRequest extends Model {
    
    static boot () {
        super.boot()
        
        this.addTrait('@provider:Lucid/SoftDeletes')
    }

    static scopeHasStatusWaiting(query) {
        return query.where('status', 'WAITNG')
    }

    carInformation() {
        return this.belongsTo('App/Models/CarInformation')
    }
    customer() {
        return this.belongsTo('App/Models/Customer')
    }
    seller() {
        return this.belongsTo('App/Models/Seller')
    }
    insuranceType() {
        return this.belongsTo('App/Models/InsuranceType')
    }
}

module.exports = InsuranceRequest
