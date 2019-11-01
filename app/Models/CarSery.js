'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class CarSery extends Model {

    static boot() {
        super.boot()

        this.addTrait('@provider:Lucid/SoftDeletes')
    }

    carInformations() {
        return this.hasMany('App/Models/CarInformation')
    }
    carGroup() {
        return this.belongsTo('App/Models/CarGroup')
    }
    carType() {
        return this.belongsTo('App/Models/CarType')
    }
}

module.exports = CarSery
