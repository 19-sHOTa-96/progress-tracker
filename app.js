/*
 * This file launches the application by asking Ext JS to create
 * and launch() the Application class.
 */
Ext.application({
    extend: 'ProgressTracker.Application',

    name: 'ProgressTracker',

    requires: [
        // This will automatically load all classes in the ProgressTracker namespace
        // so that application classes do not need to require each other.
        'ProgressTracker.*'
    ],

    // The name of the initial view to create.
    mainView: 'ProgressTracker.view.addedTasks.AddedTasksPage'
});
