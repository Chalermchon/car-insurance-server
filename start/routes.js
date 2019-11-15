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
const Helpers = use('Helpers')
const Drive = use('Drive')

Route.get('/', 'LoginController.index').middleware('guest').as('/login.index')
Route.post('/login', 'LoginController.login').validator('Login').middleware('guest').as('/login.login')
Route.post('/logout', 'LoginController.logout').middleware('auth').as('/login.logout')

Route.get('/welcome', 'HomeController.index').middleware('auth')
Route.resource('/sellers', 'SellerController').except(['edit', 'update', 'destroy']).middleware('auth').validator(new Map([
    ['/sellers.store', 'StoreSeller'],
]))
// Route.resource('/customers', 'CustomerController').middleware('auth')
// Route.group(() => {
//     Route.get('/:brand', 'CarSeryController.index').as('/car-series.index')
//     Route.get('/:brand/:model', 'CarSeryController.show').as('/car-series.show')
// }).prefix('/car-series').middleware('auth')

Route.resource('/api/customers', 'Api/CustomerController').apiOnly().middleware(new Map([
    [['show', 'update', 'destroy'], ['findCustomer']], [['store', 'update'], ['checkTypeOfImg']]
]))
Route.get('/api/car-series/brands', 'Api/CarSeryController.brands').as('/api/car-series/brands')
Route.get('/api/car-series/models/:brand', 'Api/CarSeryController.models').as('/api/car-series/models')
Route.get('/api/car-series/years/:model', 'Api/CarSeryController.years').as('/api/car-series/years')
Route.get('/api/car-series/details/:model/:year', 'Api/CarSeryController.details').as('/api/car-series/details')

Route.get('/api/rate-prices/:brand/:model/:year/:detail', 'Api/RatePriceController.index').as('/api/rate-prices.index')

Route.get('/api/insurance-types', 'Api/InsuranceTypeController.index').as('/api/insurance-types.index')
Route.post('/api/car-informations', 'Api/CarInformationController.store').as('/api/car-informations.store')

Route.post('/api/insurance-requests', 'Api/InsuranceRequestController.store').as('/api/insurance-requests.store')

Route.get('/identImges/:imgName', async ({ response, params: {imgName} }) => {
    response.download(Helpers.tmpPath('identImges/'+imgName))
})