'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CarInformationsSchema extends Schema {
  up () {
    this.create('car_informations', (table) => {
      table.bigIncrements('id')
      table.json('license_plate').notNullable()
      table.string('vin_number', 20).notNullable()
      table.string('eng_number', 20).notNullable()
      table.bigInteger('car_sery_id').unsigned().references('id').inTable('car_series')
      table.bigInteger('customer_id').unsigned().references('id').inTable('customers')
      table.timestamps()
      table.timestamp('deleted_at').nullable()
    })
  }

  down () {
    this.drop('car_informations')
  }
}

module.exports = CarInformationsSchema
