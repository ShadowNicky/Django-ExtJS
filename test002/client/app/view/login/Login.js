Ext.define('client.view.login.Login', {
    extend: 'Ext.window.Window',
    xtype: 'login',

    // подключение классов и ...
    requires: [
        'client.view.login.LoginController',
        'Ext.form.Panel'
    ],

    controller: 'login',                // контроллер
    bodyPadding: 10,                    // паддинг
    title: 'Login',                     // название окна
    closable: false,                    // автозакртытие
    autoShow: true,                     // автоскрытие

    items: {
        xtype: 'form',
        reference: 'form',

        // элементы
        items: [{
            xtype: 'textfield',         // ярлык компонента (тип)
            name: 'username',           // имя
            fieldLabel: 'Username',
            regex: /(^[a-zA-Z][A-Za-z0-9]?$)|^[a-zA-Z]+[A-Za-z0-9.-]+[A-Za-z0-9]{1,20}$/i,
            //maskRe: /[\d\s:amp]/i,
            invalidText: 'Логин должен начинаться с латинской буквы, может содержать цифры, точку, минус, и должен заканчиваться только латинской буквой или цифрой.',
            allowBlank: false
        }, {
            //xtype: 'displayfield',
            hideEmptyLabel: false,
            //value: 'Enter any non-blank password'
        }],

        //массив с кнопками
        buttons: [{
            text: 'login',
            formBind: true,             // если поля не заполнены то кнопку нажать нельзя
            listeners: {                // обработка события
                click: 'onLoginClick'
            }
        }]
    }
});