'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class ProtectionDetail extends Model {
    
    static boot () {
        super.boot()
        
        this.addTrait('@provider:Lucid/SoftDeletes')
    }
    getDetails(details) {
        return JSON.parse(details);
    }

    insuranceRequests() {
        return this.manyThrough('App/Models/InsuranceType', 'insuranceRequests')
    }
}

module.exports = ProtectionDetail
