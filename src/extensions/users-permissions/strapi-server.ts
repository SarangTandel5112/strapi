module.exports = (plugin) => {
    // console.log(plugin.controllers);
    // console.log("hello")
    const register = plugin.controllers.auth['register'];
    plugin.controllers.auth['register'] = async (ctx) => {
        // await register(ctx)
        console.log(plugin);
        console.log("custom++++++++++++++++++++++++++++++++++++++++++++++++++++++++++")

        // custom logic here
    }

    // plugin.routes['content-api'].routes.push({
    //   method: '<method>',
    //   path: '/your/path',
    //   handler: '<controller>.<new method>',
    //   config: {
    //     policies: [],
    //     prefix: '',
    //   },
    // });

    return plugin;
};
