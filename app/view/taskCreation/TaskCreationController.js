Ext.define('ProgressTracker.view.taskCreation.TaskCreationController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.task-creation',

    onTaskCreationButton: function (button, event) {
        let form = button.up('form');

        if (form.isValid()) {
            let me = this,
                vm = me.getViewModel(),
                store = vm.get('taskStore'),
                formData = form.getValues();

            store.add(formData);

            store.sync({
                success: function (batch, options) {
                    form.reset();
                },
                failure: function (batch, options) {
                    store.rejectChanges();
                }
            });
        }
    }
});