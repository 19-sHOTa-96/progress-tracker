Ext.define('ProgressTracker.view.addedTasks.AddedTasksModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.added-tasks',

    data: {
        avatar: null
    },

    stores: {
        departmentStore: {
            storeId: 'departmentStore',
            proxy: {
                type: 'ajax',
                url: 'https://momentum.redberryinternship.ge/api/departments',
                reader: {
                    type: 'json',
                    rootProperty: 'data',
                    successProperty: 'success'
                }
            },
            autoLoad: true
        },

        priorityStore: {
            storeId: 'priorityStore',
            proxy: {
                type: 'ajax',
                url: 'https://momentum.redberryinternship.ge/api/priorities',
                reader: {
                    type: 'json',
                    rootProperty: 'data',
                    successProperty: 'success'
                }
            },
            autoLoad: true
        },

        employeeStore: {
            storeId: 'employeeStore',
            proxy: {
                type: 'ajax',
                url: 'https://momentum.redberryinternship.ge/api/employees',
                reader: {
                    type: 'json',
                    rootProperty: 'data',
                    successProperty: 'success'
                },
                headers: {
                    Authorization: 'Bearer ' + localStorage.getItem('accessToken')
                }
            },
            autoLoad: true
        },

        taskStore: {
            storeId: 'taskStore',
            proxy: {
                type: 'ajax',
                url: 'https://momentum.redberryinternship.ge/api/tasks',
                reader: {
                    type: 'json',
                    rootProperty: 'data',
                    successProperty: 'success'
                },
                writer: {
                    type: 'json',
                    writeAllFields: true
                },
                headers: {
                    Authorization: 'Bearer ' + localStorage.getItem('accessToken')
                }
            },
            autoLoad: true
        }
    }
});
