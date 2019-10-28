'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class SellersSchema extends Schema {
  up () {
    this.create('sellers', (table) => {
      table.bigIncrements('id')
      table.string('username', 50).notNullable().unique()
      table.string('password', 200).notNullable()
      table.string('name_prefix', 25).notNullable()
      table.string('first_name', 50).notNullable()
      table.string('last_name', 50) .notNullable()
      table.date('birth_date').notNullable()
      table.string('phone', 10).notNullable()
      table.string('email', 100).notNullable()
      table.timestamps()
      table.timestamp('deleted_at').nullable()
    })
  }

  down () {
    this.drop('sellers')
  }
}

module.exports = SellersSchema
