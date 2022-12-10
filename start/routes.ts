/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer'
|
*/

import Route from '@ioc:Adonis/Core/Route'
import Url from 'App/Models/Url'

Route.get('/:id', async ({  request, response }) => {

  const id = request.param('id')

  const objeto = await Url.findBy('uuid', id)

  return response.redirect().toPath(objeto!.url_larga)



})


Route.group(() => {
    
  Route.resource('shortener', 'UrlsController').apiOnly;

}).prefix('/api')