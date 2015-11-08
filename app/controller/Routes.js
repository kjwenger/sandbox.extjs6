/**
 *
 */
Ext.define('sandbox.extjs6.controller.Routes', {
    extend: 'Ext.app.Controller',
    alias: 'controller.routes',
    requires: [
        'Ext.app.Controller'
    ],
    config: {
        refs: {
            appMain: 'app-main',
            users: 'app-main container[name="users"]'
        }
    },
    routes: {
        'users': 'onUsers'
    },
    init: function () {
        console.log('~.controller.Routes.init()');
    },
    launch: function() {
        console.log('~.controller.Routes.launch()');
    },
    onUsers: function () {
        console.log('~.controller.Routes.onUsers()');
        var appMain = this.getAppMain(),
            users = this.getUsers();
        appMain.setActiveItem(users);
    }
});
