'use strict'

/** @type {import('@adonisjs/framework/src/Hash')} */
const Hash = use('Hash')

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Seller extends Model {

    static boot() {
        super.boot()

        this.addTrait('@provider:Lucid/SoftDeletes')

        this.addHook('beforeSave', async (sellerInstance) => {
            if (sellerInstance.dirty.password) {
                sellerInstance.password = await Hash.make(sellerInstance.password)
            }
        })
    }

    insuranceRequests() {
        return this.hasMany('App/Models/InsuranceRequest')
    }
}

module.exports = Seller
