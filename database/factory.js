'use strict'

/*
|--------------------------------------------------------------------------
| Factory
|--------------------------------------------------------------------------
|
| Factories are used to define blueprints for database tables or Lucid
| models. Later you can use these blueprints to seed your database
| with dummy data.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')
const Env = use('Env')

// Factory.blueprint('App/Models/User', (faker) => {
//   return {
//     username: faker.username()
//   }
// })

Factory.blueprint('App/Models/Customer', (faker) => {
    let gender = faker.gender()
    return {
        name_prefix: faker.prefix({gender: gender}),
        first_name: faker.first({gender: gender}),
        last_name: faker.last(),
        ident_number: faker.integer({min: 1000000000000, max: 9999999999999}) + '',
        ident_img: Env.get('APP_URL')+'/identImges/default.jpg',
        birth_date: faker.birthday({type: 'adult'}),
        address: {
            houseNumber: faker.integer({min: 10, max: 999}) + '/' + faker.integer({min: 1, max: 99}),
            tambon: faker.country({ full: true }),
            amphoe: faker.city(),
            changwat: faker.province({full: true}),
            postalCode: faker.zip()
        },
        phone: '0' + faker.integer({min: 8, max: 9}) + faker.integer({min: 10000000, max: 99999999}),
        email: faker.email({domain: "example.com"}),
        career: faker.profession()
    }
})

Factory.blueprint('App/Models/Seller', (faker) => {
    let gender = faker.gender()
    let first = faker.first({gender: gender})
    return {
        username: first.toLowerCase() + faker.integer({min: 1, max: 99}),
        password: faker.integer({min: 1000, max: 9999}) + '',
        name_prefix: faker.prefix({gender: gender}),
        first_name: first,
        last_name: faker.last(),
        birth_date: faker.birthday({type: 'adult'}),
        phone: '0' + faker.integer({min: 8, max: 9}) + faker.integer({min: 10000000, max: 99999999}),
        email: faker.email({domain: "example.com"})
    }
})
