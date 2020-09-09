/**
 * This class is the main view for the application. It is specified in `app.js` as the
 * "mainView" property. That setting automatically applies the "viewport"
 * plugin to promote that instance of this class to the body element.
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('client.view.main.Main', {
    extend: 'Ext.container.Container',

    requires: [
        'client.view.main.MainController',
        'client.view.main.MainModel'
    ],

    xtype: 'app-main',

    controller: 'main',
    plugins: 'viewport',
    viewModel: {
        type: 'main'
    },

    layout: {
        type: 'border'
    },

    // Блоки
    items: [
    {
        xtype: 'panel',
        bind: {
            title: '{name}'
        },
        region: 'west',
        /*html: '<ul><li></li></ul>',*/
        width: 250,
        split: true,
        tbar: [{
            text: 'Logout',
            handler: 'onLogoutClick'
        }]
    }
    ,{
        region: 'center',
        xtype: 'panel',
        items:[{
            title: 'Tab 1',
            html: '<h2>Добро пожаловать!</h2>'
        }]
    }]
});