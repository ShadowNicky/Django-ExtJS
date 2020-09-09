Ext.define('client.view.main.MainController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.main',

    // обработчик события кнопки Logout
    onLogoutClick: function () {

        // Remove the localStorage key/value
        localStorage.removeItem("LoggedIn", false);

        // Remove Main View
        this.getView('main-app').destroy();

        // Add the Login Window
        Ext.widget('login');
    }
});