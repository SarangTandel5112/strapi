"use strict";
/**
 *  restaurant controller
 */
Object.defineProperty(exports, "__esModule", { value: true });
const strapi_1 = require("@strapi/strapi");
exports.default = strapi_1.factories.createCoreController('api::restaurant.restaurant', ({ strapi }) => ({
    async find(ctx) {
        // some custom logic here
        // ctx.query = { ...ctx.query, local: 'en' }
        // console.log(ctx);
        // Calling the default core action
        const { data, meta } = await super.find(ctx);
        // console.log(data, "***********************************************");
        console.log("runnnnnn");
        // some more custom logic
        meta.date = Date.now();
        return { data, meta };
    },
    async create(ctx) {
        console.log("updated", "---------------------------------------");
    }
}));
