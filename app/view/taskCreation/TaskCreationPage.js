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
                            allowBlank: false
                        },
                        {
                            xtype: 'combobox',
                            fieldLabel: 'დეპარტამენტი',
                            labelAlign: 'top',
                            name: 'department',
                            queryMode: 'local',
                            displayField: 'name',
                            valueField: 'id',
                            editable: false,
                            bind: {
                                store: '{departmentStore}'
                            }
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
                            queryMode: 'local',
                            displayField: 'name',
                            valueField: 'id',
                            editable: false,
                            bind: {
                                store: '{employeeStore}'
                            }
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
                            queryMode: 'local',
                            displayField: 'name',
                            valueField: 'id',
                            editable: false,
                            bind: {
                                store: '{priorityStore}'
                            }
                        },
                        {
                            xtype: 'combobox',
                            fieldLabel: 'სტატუსი',
                            labelAlign: 'top',
                            name: 'status',
                            queryMode: 'local',
                            displayField: 'name',
                            valueField: 'id',
                            editable: false,
                            bind: {
                                store: '{statusStore}'
                            }
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