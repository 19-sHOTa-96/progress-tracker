Ext.define('ProgressTracker.view.addedTasks.AddedTasksController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.added-tasks',

    onEmployeeCreationButton: function (button, event) {
        let me = this,
            form = button.up('form'),
            vm = me.getViewModel(),
            file = vm.get('avatar');

        if (form.isValid()) {
            let formData = new FormData();

            formData.append('name', form.down('[name=name]').getValue());
            formData.append('surname', form.down('[name=surname]').getValue());
            formData.append('department_id', form.down('[name=department_id]').getValue());

            if (file) {
                formData.append('avatar', file, file.name);
            }

            Ext.Ajax.request({
                url: 'https://momentum.redberryinternship.ge/api/employees',
                method: 'POST',
                rawData: formData,
                headers: {
                    'Authorization': 'Bearer ' + localStorage.getItem('accessToken'),
                    'Content-Type': null
                },
                success: function(response) {
                    form.reset();
                    vm.set('avatar', null);
                },
                failure: function(response) {

                }
            });
        }
    },

    onAvatarFileField: function (field, value) {
        let vm = this.getViewModel(),
            fileInput = field.fileInputEl.dom.files[0];

        if (fileInput) {
            vm.set('avatar', fileInput);
        }
    }
});