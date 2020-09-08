/**
 * The main application class. An instance of this class is created by app.js when it
 * calls Ext.application(). This is the ideal place to handle application launch and
 * initialization details.
 */
Ext.define('client.Application', {
    extend: 'Ext.app.Application',

    name: 'client',

    stores: [
        // TODO: add global / shared stores here
    ],
    views: [
        'client.view.login.Login',
        'client.view.main.Main'
    ],
    launch: function () {

        var loggedIn;

        loggedIn = localStorage.getItem("LoggedIn");

        Ext.widget(loggedIn ? 'app-main' : 'login');

    }
});
