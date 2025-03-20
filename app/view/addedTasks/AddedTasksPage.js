Ext.define('ProgressTracker.view.addedTasks.AddedTasksPage', {
    extend: 'Ext.panel.Panel',
    xtype: 'added-tasks',

    requires: [
        'ProgressTracker.view.addedTasks.AddedTasksController',
        'ProgressTracker.view.addedTasks.AddedTasksModel'
    ],

    viewModel: { type: 'added-tasks' },

    controller: 'added-tasks',

    layout: 'vbox',

    items: [
        {
            xtype: 'header'
        },
        {
            xtype: 'container',
            layout: 'hbox',
            items: [
                {
                    xtype: 'label',
                    text: 'დავალებების გვერდი'
                }
            ]
        },
        {
            xtype: 'container',
            layout: 'hbox',
            defaults: {
                width: 200,
                height: 44
            },
            items: [
                {
                    xtype: 'combobox',
                    emptyText: 'დეპარტამენტი',
                    queryMode: 'local',
                    displayField: 'name',
                    valueField: 'id',
                    editable: false,
                    allowBlank: false,
                    margin: '0 45 0 0',
                    bind: {
                        store: '{departmentStore}'
                    }
                },
                {
                    xtype: 'combobox',
                    emptyText: 'პრიორიტეტები',
                    queryMode: 'local',
                    displayField: 'name',
                    valueField: 'id',
                    editable: false,
                    allowBlank: false,
                    margin: '0 45 0 0',
                    bind: {
                        store: '{priorityStore}'
                    }
                },
                {
                    xtype: 'combobox',
                    emptyText: 'თანამშრომელი',
                    queryMode: 'local',
                    displayField: 'name',
                    displayTpl: new Ext.XTemplate(
                        '<tpl for=".">',
                        '{firstName} {lastName}',
                        '</tpl>'
                    ),
                    listConfig: {
                        getInnerTpl: function () {
                            return '{firstName} {lastName}';
                        }
                    },
                    valueField: 'name',
                    editable: false,
                    allowBlank: false,
                    margin: '0 45 0 0',
                    bind: {
                        store: '{employeeStore}'
                    }
                }
            ]
        },
        {
            xtype: 'container',
            layout: {
                type: 'hbox',
                pack: 'space-between'
            },
            width: 1920,
            margin: '140 0 0 0',
            padding: '30 120 30 120',
            defaults: {
                flex: 1
            },
            items: [
                {
                    xtype: 'container',
                    layout: 'vbox',
                    margin: '0 30 0 0',
                    items: [
                        {
                            xtype: 'label',
                            html: 'დასაწყები'
                        },
                        {
                            xtype: 'container',
                            layout: 'vbox',
                            items: [
                                {
                                    xtype: 'container',
                                    margin: '10 0 10 0',
                                    layout: 'vbox',
                                    items: [
                                        {
                                            xtype: 'container',
                                            layout: 'hbox',
                                            items: [
                                                {
                                                    xtype: 'button',
                                                    text: 'საშუალო'
                                                },
                                                {
                                                    xtype: 'button',
                                                    text: 'დიზაინი'
                                                },
                                                {
                                                    xtype: 'label',
                                                    text: '22 იანვ, 2022'
                                                }
                                            ]
                                        },
                                        {
                                            xtype: 'container',
                                            html: `
                                            <h2>RedBerry-s საიტის ლენდინგის დიზაინი</h2>
                                            <p>შექმენმი საიტის მთავარი გვერდი, რემოლიც</p>
                                            <p>მოიცავს მთავარ სექციებს, ნავიგაციას</p>
                                            `
                                        },
                                        {
                                            xtype: 'container',
                                            layout: 'hbox',
                                            items: [
                                                {
                                                    xtype: 'image',
                                                    src: '',
                                                    height: 31,
                                                    width: 31,
                                                    listeners: {
                                                        el: {
                                                            click: function () {

                                                            }
                                                        }
                                                    }
                                                },
                                                {
                                                    xtype: 'image',
                                                    src: '',
                                                    height: 31,
                                                    width: 31,
                                                    listeners: {
                                                        el: {
                                                            click: function () {

                                                            }
                                                        }
                                                    }
                                                }
                                            ]
                                        }
                                    ],
                                    listeners: {
                                        el: {
                                            click: function () {
                                                Ext.util.History.add('task');
                                            }
                                        }
                                    },
                                    style: {
                                        cursor: 'pointer'
                                    }
                                },
                                {
                                    xtype: 'container',
                                    margin: '10 0 10 0',
                                    layout: 'vbox',
                                    items: [
                                        {
                                            xtype: 'container',
                                            layout: 'hbox',
                                            items: [
                                                {
                                                    xtype: 'button',
                                                    text: 'მაღალი'
                                                },
                                                {
                                                    xtype: 'button',
                                                    text: 'დიზაინი'
                                                },
                                                {
                                                    xtype: 'label',
                                                    text: '22 იანვ, 2022'
                                                }
                                            ]
                                        },
                                        {
                                            xtype: 'container',
                                            html: `
                                            <h2>RedBerry-s საიტის ლენდინგის დიზაინი</h2>
                                            <p>შექმენმი საიტის მთავარი გვერდი, რემოლიც</p>
                                            <p>მოიცავს მთავარ სექციებს, ნავიგაციას</p>
                                            `
                                        },
                                        {
                                            xtype: 'container',
                                            layout: 'hbox',
                                            items: [
                                                {
                                                    xtype: 'image',
                                                    src: '',
                                                    height: 31,
                                                    width: 31
                                                },
                                                {
                                                    xtype: 'image',
                                                    src: '',
                                                    height: 31,
                                                    width: 31
                                                }
                                            ]
                                        }
                                    ],
                                    listeners: {
                                        el: {
                                            click: function () {
                                                Ext.util.History.add('task');
                                            }
                                        }
                                    },
                                    style: {
                                        cursor: 'pointer'
                                    }
                                }
                            ]
                        }
                    ]
                },
                {
                    xtype: 'container',
                    layout: 'vbox',
                    margin: '0 30 0 0',
                    items: [
                        {
                            xtype: 'label',
                            html: 'პროგრესში'
                        }
                    ]
                },
                {
                    xtype: 'container',
                    layout: 'vbox',
                    margin: '0 30 0 0',
                    items: [
                        {
                            xtype: 'label',
                            html: 'მზად ტესტირებისთვის'
                        }
                    ]
                },
                {
                    xtype: 'container',
                    layout: 'vbox',
                    items: [
                        {
                            xtype: 'label',
                            html: 'დასრულებული'
                        }
                    ]
                }
            ]
        }
    ]
});












