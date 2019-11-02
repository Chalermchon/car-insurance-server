'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CustomersSchema extends Schema {
  up () {
    this.create('customers', (table) => {
      table.bigIncrements('id')
      table.string('name_prefix', 25).notNullable()
      table.string('first_name', 50).notNullable()
      table.string('last_name', 50) .notNullable()
      table.string('ident_number', 20).notNullable()
      table.string('ident_img', 200).notNullable()
      table.datetime('birth_date').notNullable()
      table.json('address').notNullable()
      table.string('phone', 10).notNullable()
      table.string('email', 50).notNullable()
      table.string('career', 50).notNullable()
      table.timestamps()
      table.timestamp('deleted_at').nullable()
    })
  }

  down () {
    this.drop('customers')
  }
}

module.exports = CustomersSchema
