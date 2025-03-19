Ext.define('ProgressTracker.view.addedTasks.AddedTasksPage', {
    extend: 'Ext.panel.Panel',
    xtype: 'added-tasks',

    requires: [
        'ProgressTracker.view.addedTasks.AddedTasksController',
        'ProgressTracker.view.addedTasks.AddedTasksModel'
    ],

    controller: 'navbar',

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
                    store: ['Option 1', 'Option 2', 'Option 3'],
                    queryMode: 'local',
                    displayField: 'name',
                    valueField: 'name',
                    editable: false,
                    allowBlank: false,
                    margin: '0 45 0 0'
                },
                {
                    xtype: 'combobox',
                    emptyText: 'პრიორიტეტები',
                    store: ['Option 1', 'Option 2', 'Option 3'],
                    queryMode: 'local',
                    displayField: 'name',
                    valueField: 'name',
                    editable: false,
                    allowBlank: false,
                    margin: '0 45 0 0'
                },
                {
                    xtype: 'combobox',
                    emptyText: 'თანამშრომელი',
                    store: ['Option 1', 'Option 2', 'Option 3'],
                    queryMode: 'local',
                    displayField: 'name',
                    valueField: 'name',
                    editable: false,
                    allowBlank: false,
                    margin: '0 45 0 0'
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












