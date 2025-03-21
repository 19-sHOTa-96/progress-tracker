Ext.define('MyApp.view.AddEmployeePanel', {
    extend: 'Ext.form.Panel',
    xtype: 'add-employee',

    layout: {
        type: 'vbox',
        align: 'stretch'
    },

    items: [
        {
            xtype: 'container',
            layout: {
                type: 'hbox',
                pack: 'end'
            },
            items: [
                {
                    xtype: 'image',
                    src: '',
                    width: 40,
                    height: 40,
                    listeners: {
                        el: {
                            click: function () {
                                let addEmployeeModal = this.up('window');
                                if (addEmployeeModal) {
                                    addEmployeeModal.close();
                                }
                            }
                        }
                    }
                }
            ]
        },
        {
            xtype: 'component',
            html: 'თანამშრომლის დამატება',
            margin: '0 0 10 0'
        },
        {
            xtype: 'container',
            layout: 'hbox',
            margin: '45 0 0 0',
            width: 813,
            height: 102,
            items: [
                {
                    xtype: 'textfield',
                    fieldLabel: 'სახელი',
                    labelAlign: 'top',
                    name: 'name',
                    flex: 1,
                    allowBlank: false
                },
                {
                    xtype: 'textfield',
                    fieldLabel: 'გვარი',
                    labelAlign: 'top',
                    name: 'surname',
                    flex: 1,
                    allowBlank: false,
                    margin: '0 0 0 45'
                }
            ]
        },
        {
            xtype: 'container',
            layout: 'hbox',
            width: 813,
            items: [
                {
                    xtype: 'filefield',
                    name: 'avatar',
                    labelAlign: 'top',
                    buttonText: 'ავატარი',
                    margin: '45 0 0 10',
                    listeners: {
                        change: 'onAvatarFileField'
                    }
                }
            ]
        },
        {
            xtype: 'container',
            layout: 'hbox',
            width: 384,
            height: 102,
            margin: '45 0 0 10',
            items: [
                {
                    xtype: 'combobox',
                    fieldLabel: 'დეპარტამენტი',
                    labelAlign: 'top',
                    displayField: 'name',
                    valueField: 'id',
                    name: 'department_id',
                    queryMode: 'local',
                    forceSelection: true,
                    editable: false,
                    allowBlank: false,
                    bind: {
                        store: '{departmentStore}'
                    }
                }
            ]
        },
        {
            xtype: 'container',
            layout: {
                type: 'hbox',
                pack: 'end'
            },
            width: 387,
            height: 42,
            margin: '22 0 0 0',
            items: [
                {
                    xtype: 'button',
                    text: 'გაუქმება',
                    handler: function () {
                        let addEmployeeModal = this.up('window');
                        if (addEmployeeModal) {
                            addEmployeeModal.close();
                        }
                    }
                },
                {
                    xtype: 'button',
                    text: 'დაამატე თანამშრომელი',
                    margin: '0 0 0 22',
                    formBind: true,
                    handler: 'onEmployeeCreationButton'
                }
            ]
        }
    ]
});
