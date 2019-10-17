'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class InsuranceRequestsSchema extends Schema {
  up () {
    this.create('insurance_requests', (table) => {
      table.bigIncrements('id')
      table.enu('status',['WAITING', 'DONE']).defaultTo('WAITING')
      table.bigInteger('car_information_id').unsigned().references('id').inTable('car_informations')
      table.bigInteger('customer_id').unsigned().references('id').inTable('customers')
      table.bigInteger('seller_id').unsigned().references('id').inTable('sellers')
      table.bigInteger('insurance_type_id').unsigned().references('id').inTable('insurance_types')
      table.timestamps()
      table.timestamp('deleted_at').nullable()
    })
  }

  down () {
    this.drop('insurance_requests')
  }
}

module.exports = InsuranceRequestsSchema
