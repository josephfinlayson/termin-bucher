/* eslint-disable @typescript-eslint/camelcase */
import { Context, Get, HttpResponseOK } from '@foal/core';
import {Location} from '../../entities'
import {getRepository} from 'typeorm'
export class LocationsController {

  @Get('/')
  async get(ctx: Context) {
    const rep = getRepository(Location)

    const locs = await rep.createQueryBuilder()
    .distinctOn(['authority_id'])
    .select(['authority_name', 'authority_id'])
    .getRawMany()
    
    const locations = locs.map(row => {
        return {
            authority_name: row.authority_name.replace('Bezirksamt ', ''),
            authority_id: row.authority_id
        }
    })

    return new HttpResponseOK(locations);
  }

}
