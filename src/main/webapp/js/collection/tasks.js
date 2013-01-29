define(['backbone', 'model/task'], function (Backbone, Task) {

    var Tasks = Backbone.Collection.extend({

        // Reference to this collection's model.
        model: Task,
        url:'api/task'

    });
    return Tasks;
});
