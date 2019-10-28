'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CarGroupsSchema extends Schema {
  up () {
    this.create('car_groups', (table) => {
      table.bigIncrements('id')
      table.string('group_name', 50).notNullable()
      table.timestamps()
      table.timestamp('deleted_at').nullable()
    })
  }

  down () {
    this.drop('car_groups')
  }
}

module.exports = CarGroupsSchema
