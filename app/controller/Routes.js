/**
 * The controller for all routing in the application.
 *
 * @see <a href="https://www.sencha.com/blog/how-to-use-routing-in-your-ext-js-5-apps/">How to Use Routing in Your Ext JS 5 Apps</a>
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
            home: 'app-main container[name="home"]',
            users: 'app-main container[name="users"]',
            groups: 'app-main container[name="groups"]',
            settings: 'app-main container[name="settings"]'
        }
    },
    routes: {
        'home': 'onHome',
        'users': 'onUsers',
        'groups': 'onGroups',
        'settings': 'onSettings',
        ':route': 'onRoute'
    },
    init: function () {
        /* trace                                                              */ console.log('~.controller.Routes.init()');
    },
    launch: function() {
        /* trace                                                              */ console.log('~.controller.Routes.launch()');
    },
    onHome: function () {
        /* trace                                                              */ console.log('~.controller.Routes.onUsers()');
        this.enRoute(this.getHome());
    },
    onUsers: function () {
        /* trace                                                              */ console.log('~.controller.Routes.onUsers()');
        this.enRoute(this.getUsers());
    },
    onGroups: function () {
        /* trace                                                              */ console.log('~.controller.Routes.onUsers()');
        this.enRoute(this.getGroups());
    },
    onSettings: function () {
        /* trace                                                              */ console.log('~.controller.Routes.onUsers()');
        this.enRoute(this.getSettings());
    },
    onRoute: function (route) {
        /* trace                                                              */ console.log('~.controller.Routes.onRoute()');
        this.enRoute(
            Ext.ComponentQuery.query(
                'container[route="' + route + '"]')[0]);
    },
    enRoute: function (activeItem) {
        /* trace                                                              */ console.log('~.controller.Routes.enRoute()');
        this.getAppMain().setActiveItem(activeItem);
    }
});
