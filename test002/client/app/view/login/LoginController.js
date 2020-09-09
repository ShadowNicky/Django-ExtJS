Ext.define('client.view.login.LoginController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.login',

    // обработчик события кнопки Login
    onLoginClick: function() {

        localStorage.setItem("LoggedIn", true);

        this.getView('login').destroy();

        Ext.widget('app-main');

    }

});
