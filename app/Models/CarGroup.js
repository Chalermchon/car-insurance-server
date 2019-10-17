'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class CarGroup extends Model {
    
    static boot () {
        super.boot()
        
        this.addTrait('@provider:Lucid/SoftDeletes')
    }

    ratePrices() {
        return this.hasMany('App/Models/RatePrice')
    }
    carInformations() {
        return this.manyThrough('App/Models/CarSery', 'carInformations')
    }
}

module.exports = CarGroup
