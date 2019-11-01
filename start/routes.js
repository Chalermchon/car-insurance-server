'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.get('/', 'UserController.index').middleware('guest').as('/index')
Route.post('/login', 'UserController.login').validator('Login').middleware('guest').as('/user.login')
Route.post('/logout', 'UserController.logout').middleware('auth').as('/user.logout')

Route.get('/welcome', 'HomeController.index').middleware('auth')
Route.resource('/customers', 'CustomerController').middleware('auth')
Route.group(() => {
    Route.get('/:brand', 'CarSeryController.index').as('/car-series.index')
    Route.get('/:brand/:model', 'CarSeryController.show').as('/car-series.show')
}).prefix('/car-series').middleware('auth')

Route.resource('/api/customers', 'Api/CustomerController').apiOnly()
