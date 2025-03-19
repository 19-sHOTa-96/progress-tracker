Ext.define('ProgressTracker.view.addedTasks.TaskPage', {
    extend: 'Ext.panel.Panel',
    xtype: 'task',

    requires: [
        'ProgressTracker.view.task.TaskController',
        'ProgressTracker.view.task.TaskModel'
    ],

    viewModel: { type: 'task' },

    controller: 'task',

    layout: 'vbox',

    items: [
        {
            xtype: 'header'
        },
        {
            xtype: 'label',
            html: 'Redberry-ს საიტის ლენდინგის დიზაინი'
        },
        {
            xtype: 'displayfield',
            value: 'მიზანია რომ შეიქმნას თანამედროვე, სუფთა და ფუნქციონალური დიზაინი,\n რომელიც უზრუნველყოფს მარტივ ნავიგაციას და მკაფიო ინფორმაციის\n გადაცემას. დიზაინი უნდა იყოს ადაპტირებადი (responsive),\n გამორჩეული ვიზუალით, მინიმალისტური სტილით და ნათელი ტიპოგრაფიით.',
            renderer: function(value) {
                return value.replace(/\n/g, '<br/>');
            }
        },
        {
            xtype: 'form',
            padding: 10,
            frame: true,
            width: 500,
            height: 600,
            layout: 'vbox',
            margin: '0 0 0 1410',
            items: [
                {
                    xtype: 'textareafield',
                    emptyText: 'დაწერე კომენტარი',
                    labelAlign: 'top',
                    width: '100%',
                    height: 100,
                    margin: '20 0 10 0',
                    name: 'commentArea'
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