'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class RatePrice extends Model {
    
    static boot () {
        super.boot()
        
        this.addTrait('@provider:Lucid/SoftDeletes')
    }

    insuranceType() {
        return this.belongsTo('App/Models/InsuranceType')
    }
    carGroup() {
        return this.belongsTo('App/Models/CarGroup')
    }
    carType() {
        return this.belongsTo('App/Models/CarType')
    }
}

module.exports = RatePrice
