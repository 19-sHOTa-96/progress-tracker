Ext.define('ProgressTracker.view.taskCreation.TaskCreationModel', {
    extend: 'ProgressTracker.view.addedTasks.AddedTasksModel',
    alias: 'viewmodel.task-creation',

    stores: {
        statusStore: {
            storeId: 'statusStore',
            proxy: {
                type: 'ajax',
                url: 'https://momentum.redberryinternship.ge/api/statuses',
                reader: {
                    type: 'json',
                    rootProperty: 'data',
                    successProperty: 'success'
                }
            },
            autoLoad: true
        }
    }
});