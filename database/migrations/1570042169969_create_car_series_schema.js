'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CarSeriesSchema extends Schema {
  up () {
    this.create('car_series', (table) => {
      table.bigIncrements('id')
      table.string('brand', 50).notNullable()
      table.string('model', 50).notNullable()
      table.string('year', 4).notNullable()
      table.string('detail', 50).notNullable()
      table.bigInteger('car_group_id').unsigned().references('id').inTable('car_groups')
      table.bigInteger('car_type_id').unsigned().references('id').inTable('car_types')
      table.timestamps()
      table.timestamp('deleted_at').nullable()
    })
  }

  down () {
    this.drop('car_series')
  }
}

module.exports = CarSeriesSchema
