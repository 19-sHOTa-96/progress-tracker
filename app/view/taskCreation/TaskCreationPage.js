Ext.define('ProgressTracker.view.taskCreation.TaskCreationPage', {
    extend: 'Ext.panel.Panel',
    xtype: 'task-creation',

    requires: [
        'ProgressTracker.view.taskCreation.TaskCreationController',
        'ProgressTracker.view.taskCreation.TaskCreationModel'
    ],

    viewModel: {type: 'task-creation'},

    controller: 'task-creation',

    layout: 'vbox',

    items: [
        {
            xtype: 'header'
        },
        {
            xtype: 'label',
            html: 'შექმენის ახალი დავალება'
        },
        {
            xtype: 'form',
            layout: 'vbox',
            padding: 10,
            frame: true,
            items: [
                {
                    xtype: 'container',
                    layout: 'hbox',
                    items: [
                        {
                            xtype: 'textfield',
                            fieldLabel: 'სათაური',
                            labelAlign: 'top',
                            name: 'title',
                            allowBlank: false,
                        },
                        {
                            xtype: 'combobox',
                            fieldLabel: 'დეპარტამენტი',
                            labelAlign: 'top',
                            name: 'department',
                            store: ['Option 1', 'Option 2', 'Option 3'],
                            queryMode: 'local',
                            displayField: 'name',
                            valueField: 'id',
                            editable: false
                        }
                    ]
                },
                {
                    xtype: 'container',
                    layout: 'hbox',
                    items: [
                        {
                            xtype: 'textarea',
                            fieldLabel: 'აღწერა',
                            labelAlign: 'top',
                            name: 'description',
                            allowBlank: true
                        },
                        {
                            xtype: 'combobox',
                            fieldLabel: 'პასუხისმგებელი თანამშრომელი',
                            labelAlign: 'top',
                            name: 'responsiblePerson',
                            store: ['Option 1', 'Option 2', 'Option 3'],
                            queryMode: 'local',
                            displayField: 'name',
                            valueField: 'id',
                            editable: false
                        }
                    ]
                },
                {
                    xtype: 'container',
                    layout: 'hbox',
                    items: [
                        {
                            xtype: 'combobox',
                            fieldLabel: 'პრიორიტეტი',
                            labelAlign: 'top',
                            name: 'priority',
                            store: ['Option 1', 'Option 2', 'Option 3'],
                            queryMode: 'local',
                            displayField: 'name',
                            valueField: 'id',
                            editable: false
                        },
                        {
                            xtype: 'combobox',
                            fieldLabel: 'სტატუსი',
                            labelAlign: 'top',
                            name: 'status',
                            store: ['Option 1', 'Option 2', 'Option 3'],
                            queryMode: 'local',
                            displayField: 'name',
                            valueField: 'id',
                            editable: false
                        },
                        {
                            xtype: 'datefield',
                            fieldLabel: 'დედლაინი',
                            labelAlign: 'top',
                            name: 'deadline',
                            format: 'd-MMM-yyyy',
                            allowBlank: false,
                            editable: false
                        }
                    ]
                },
                {
                    xtype: 'button',
                    text: 'დავალების შექმნა',
                    formBind: true
                }
            ]
        }
    ]
});