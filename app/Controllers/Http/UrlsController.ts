import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Url from 'App/Models/Url'
import CreateUrlValidator from 'App/Validators/CreateUrlValidator'
import { nanoid } from 'nanoid'
export default class UrlsController {

    public async store({ request, response }: HttpContextContract){
        
       /*  let uuid = nanoid(7)
        let ingreso = false

        const url_corta = `${process.env.ORIGIN}/${uuid}` */

        
      /*   while(!ingreso){
            try { 
                const payload = await request.validate(CreateUrlValidator)
                payload.uuid = uuid
                payload.url_corta = url_corta
                const objeto = await Url.create(payload)
                ingreso = true
                response.send(objeto)
            } catch(error) {
                
                uuid = nanoid(7)
            
            }
        } */


        /* Intento 2:  */

        const payload = await request.validate(CreateUrlValidator)
        let uuid = nanoid(this.randomIntFromInterval(7, 16))
        payload.uuid = uuid
        const url_corta = `${process.env.ORIGIN}/${uuid}`
        payload.url_corta = url_corta
        const objeto = await Url.create(payload)
        response.send(objeto)


    }


    public async update({}: HttpContextContract){}
    public async destroy({}: HttpContextContract){}
    public async show({request}: HttpContextContract){
        const id = request.param('id')
        const objeto = await Url.findBy('uuid', id)
        return { response: objeto}
        
    }

     randomIntFromInterval(min: any, max: any) { // min and max included 
        return Math.floor(Math.random() * (max - min + 1) + min)
      }

    public async index({ request, response }: HttpContextContract) {
        const payload = await request.validate(CreateUrlValidator)
        let uuid = nanoid(this.randomIntFromInterval(7, 16))
        payload.uuid = uuid
        const url_corta = `${process.env.ORIGIN}/${uuid}`
        payload.url_corta = url_corta
        const objeto = await Url.create(payload)
        response.send(objeto)
    }

}
