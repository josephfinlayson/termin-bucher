// std
import { ok, strictEqual } from 'assert';

// 3p
import { Context, createController, getHttpMethod, getPath, isHttpResponseOK } from '@foal/core';

// App
import { LocationsController } from './locations.controller';
import { createConnection, Connection } from 'typeorm';
import { Location } from '../../entities';

describe('LocationsController', () => {

    
    describe('has a "foo" method that', () => {
        let controller: LocationsController;
        let connection: Connection;
    
        before(async () => {
            connection = await createConnection();
        });
    
        after(() => connection.close());
    
        beforeEach(() => controller = createController(LocationsController));

        it('should return an HttpResponseOK.', async () => {
            const location = new Location()
            location.authorityId = "as"
            location.authorityName = "as"
            location.locationId= "as"
            location.locationName = "a"
            
            await connection.manager.save([ location ]);
            const ctx = new Context({});
            const response = await controller.get(ctx)
            ok(isHttpResponseOK(response))
        });

    });

});
