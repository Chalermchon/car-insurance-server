'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CarTypesSchema extends Schema {
  up () {
    this.create('car_types', (table) => {
      table.bigIncrements('id')
      table.string('type_name', 50).notNullable()
      table.timestamps()
      table.timestamp('deleted_at').nullable()
    })
  }

  down () {
    this.drop('car_types')
  }
}

module.exports = CarTypesSchema
