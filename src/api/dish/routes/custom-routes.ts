export default {
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
}