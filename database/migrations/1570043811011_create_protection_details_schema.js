'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ProtectionDetailsSchema extends Schema {
  up () {
    this.create('protection_details', (table) => {
      table.bigIncrements('id')
      table.json('details').notNullable()
      table.timestamps()
      table.timestamp('deleted_at').nullable()
    })
  }

  down () {
    this.drop('protection_details')
  }
}

module.exports = ProtectionDetailsSchema
