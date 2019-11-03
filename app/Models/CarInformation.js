'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class CarInformation extends Model {
    
    static boot () {
        super.boot()
        
        this.addTrait('@provider:Lucid/SoftDeletes')
    }
    getLicensePlate(licensePlate) {
        return JSON.parse(licensePlate);
    }

    insuranceRequests() {
        return this.hasMany('App/Models/InsuranceRequest')
    }
    customer() {
        return this.belongsTo('App/Models/Customer')
    }
    carSery() {
        return this.belongsTo('App/Models/CarSery')
    }
}

module.exports = CarInformation
