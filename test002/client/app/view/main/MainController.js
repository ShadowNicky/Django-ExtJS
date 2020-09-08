Ext.define('client.view.main.MainController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.main',

    onClickButton: function () {

        // Remove the localStorage key/value
        localStorage.removeItem('LoggedIn');

        // Remove Main View
        this.getView().destroy();

        // Add the Login Window
        Ext.widget('login');
    }
});