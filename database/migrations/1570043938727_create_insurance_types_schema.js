'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class InsuranceTypesSchema extends Schema {
  up () {
    this.create('insurance_types', (table) => {
      table.bigIncrements('id')
      table.string('insurance_group', 10).notNullable()
      table.string('insurance_name', 100).notNullable()
      table.json('option').nullable().defaultTo(null)
      table.bigInteger('protection_detail_id').unsigned().references('id').inTable('protection_details')
      table.timestamps()
      table.timestamp('deleted_at').nullable()
    })
  }

  down () {
    this.drop('insurance_types')
  }
}

module.exports = InsuranceTypesSchema
