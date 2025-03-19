/**
 * The main application class. An instance of this class is created by app.js when it
 * calls Ext.application(). This is the ideal place to handle application launch and
 * initialization details.
 */
Ext.define('ProgressTracker.Application', {
    extend: 'Ext.app.Application',

    name: 'ProgressTracker',

    quickTips: false,
    platformConfig: {
        desktop: {
            quickTips: true
        }
    },

    launch: function () {
        Ext.util.History.init();

        Ext.util.History.on('change', function (token) {
            let addTasksPageId = Ext.ComponentQuery.query('added-tasks')[0];

            if (token === 'taskCreation') {
                addTasksPageId.removeAll();
                addTasksPageId.add({ xtype: 'task-creation' });
            } else if (token === 'addedTasks') {
                addTasksPageId.removeAll();
                addTasksPageId.add({ xtype: 'added-tasks' });
            } else if (token === 'task') {
                addTasksPageId.removeAll();
                addTasksPageId.add({ xtype: 'task' });
            }
        });

        Ext.util.History.add('addedTasks');
    },

    onAppUpdate: function () {
        Ext.Msg.confirm('Application Update', 'This application has an update, reload?',
            function (choice) {
                if (choice === 'yes') {
                    window.location.reload();
                }
            }
        );
    }
});
