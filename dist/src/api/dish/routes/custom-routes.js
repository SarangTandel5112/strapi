"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    routes: [{
            method: 'GET',
            path: '/user/try',
            handler: 'dish.trial',
            config: {
                find: {
                    auth: false,
                    policies: [],
                    middlewares: [],
                },
            }
        }]
};
