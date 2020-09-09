/*
 * This file launches the application by asking Ext JS to create
 * and launch() the Application class.
 */
Ext.application({
    extend: 'client.Application',

    name: 'client',

    requires: [
        'client.*'
    ],

    //mainView: 'client.view.main.Main'
});
