import { Context, Get, HttpResponseOK } from '@foal/core';
import {Location} from '../../entities'
import {getRepository} from "typeorm"
export class LocationsController {

  @Get('/')
  async get(ctx: Context) {
    const rep = getRepository(Location)
    const locs = await rep.find()
    const locations = locs.map((row) => {
        return {
            authority_name: row.authorityName.replace('Bezirksamt ', ''),
            authority_id: row.authorityId
        }
    })

    return new HttpResponseOK(locations);
  }

}
