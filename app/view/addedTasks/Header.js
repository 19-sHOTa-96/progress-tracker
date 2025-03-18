Ext.define('Momentum.view.Header', {
    extend: 'Ext.container.Container',
    xtype: 'header',

    layout: {
        type: 'hbox',
        pack: 'space-between'
    },

    width: 1920,
    padding: '30 120 30 120',

    items: [
        {
            xtype: 'container',
            layout: 'hbox',
            width: 210,
            height: 38,
            items: [
                {
                    xtype: 'label',
                    text: 'Momentum'
                },
                {
                    xtype: 'image',
                    src: '',
                    height: 31,
                    width: 31
                }
            ]
        },
        { xtype: 'container', flex: 1 },
        {
            xtype: 'container',
            layout: 'hbox',
            items: [
                {
                    xtype: 'button',
                    text: 'თანამშრომლის შექმნა',
                    handler: 'onEmployeeCreationButton'
                },
                {
                    xtype: 'button',
                    text: 'შექმენი ახალი დავალება',
                    icon: '',
                    shadow: false,
                    margin: '0 0 0 40'
                }
            ]
        }
    ]
});
