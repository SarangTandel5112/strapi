/**
 *  restaurant controller
 */

import { factories } from '@strapi/strapi'
import { create } from 'handlebars';

export default factories.createCoreController('api::restaurant.restaurant', ({ strapi }) => ({
    async find(ctx) {
        // some custom logic here
        // ctx.query = { ...ctx.query, local: 'en' }
        // console.log(ctx);


        // Calling the default core action
        const { data, meta } = await super.find(ctx);
        // console.log(data, "***********************************************");

        console.log("runnnnnn");

        // some more custom logic
        meta.date = Date.now()

        return { data, meta };
    },

    async create(ctx) {
        console.log("updated", "---------------------------------------");
    }

})
)