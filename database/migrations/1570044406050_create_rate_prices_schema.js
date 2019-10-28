'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class RatePricesSchema extends Schema {
  up () {
    this.create('rate_prices', (table) => {
      table.bigIncrements('id')
      table.bigInteger('insurance_type_id').unsigned().references('id').inTable('insurance_types')
      table.bigInteger('car_group_id').unsigned().references('id').inTable('car_groups')
      table.bigInteger('car_type_id').unsigned().references('id').inTable('car_types')
      table.float('price').notNullable()
      table.timestamps()
      table.timestamp('deleted_at').nullable()
    })
  }

  down () {
    this.drop('rate_prices')
  }
}

module.exports = RatePricesSchema
