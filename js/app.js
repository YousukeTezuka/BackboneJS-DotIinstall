(function() {

  // Model

  var Task = Backbone.Model.extend({
    defaults: {
      title: "do someting!",
      completed: false
    }
  });

  var task = new Task();

  // View

  var TaskVeiw = Backbone.View.extend({
    tagName: "li"
  });

  var taskView = new TaskVeiw({model: task});
  console.log(taskView.el);

})();
