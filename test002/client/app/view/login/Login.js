Ext.define('client.view.login.Login', {
    extend: 'Ext.window.Window',
    xtype: 'login',

    // подключение классов и ...
    requires: [
        'client.view.login.LoginController',
        'Ext.form.Panel'
    ],

    controller: 'login',        // контроллер
    bodyPadding: 10,            // паддинг
    title: 'Login Window',      // название окна
    closable: false,            // автозакртытие
    autoShow: true,             // автоскрытие

    items: {
        xtype: 'form',
        reference: 'form',

        // элементы
        items: [{
            xtype: 'textfield',         // ярлык компонента (тип)
            name: 'username',           // имя
            fieldLabel: 'Username',     // value
            allowBlank: false
        }, {
            xtype: 'textfield',
            name: 'password',
            inputType: 'password',
            fieldLabel: 'Password',
            allowBlank: false
        }, {
            xtype: 'displayfield',
            hideEmptyLabel: false,
            value: 'Enter any non-blank password'
        }],

        //массив с кнопками
        buttons: [{
            text: 'Login',
            formBind: true,
            listeners: {                // обработка события
                click: 'onLoginClick'
            }
        }]
    }
});