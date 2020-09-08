Ext.define('client.view.login.LoginController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.login',

    // обработчик события OnClick
    onLoginClick: function() {

        localStorage.setItem("LoggedIn", true);

        this.getView().destroy();

        Ext.widget('app-main');

    }
});
