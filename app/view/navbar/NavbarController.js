Ext.define('ProgressTracker.view.addedTasks.AddedTasksController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.navbar',

    onEmployeeCreationButton: function (button, event) {
        Ext.create('Ext.window.Window', {
            title: '',
            modal: true,
            width: 913,
            height: 766,
            padding: '40 50 60 50',
            header: false,
            resizable: false,
            shadow: false,
            reference: 'addEmployeeModalReference',
            layout: {
                type: 'vbox',
                align: 'stretch'
            },
            items: [
                {
                    xtype: 'add-employee'
                }
            ]
        }).show();
    },

    onTaskCreationButton: function (button, event) {
        Ext.util.History.add('taskCreation');
    }
});
