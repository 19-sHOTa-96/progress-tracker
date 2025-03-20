Ext.define('ProgressTracker.view.task.TaskModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.task',

    stores: {
        commentStore: {
            storeId: 'commentStore',
            proxy: {
                type: 'ajax',
                url: 'https://momentum.redberryinternship.ge/api/tasks/{task}/comments',
                reader: {
                    type: 'json',
                    rootProperty: 'data',
                    successProperty: 'success'
                },
                writer: {
                    type: 'json',
                    writeAllFields: true
                },
                beforeRequest: function(options) {
                    let taskId = options.taskId || 1;
                    options.url = options.url.replace('{task}', taskId);
                }
            },
            autoLoad: false
        }
    }
});