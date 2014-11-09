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
    tagName: "li",
    events: {
      "click .command": "sayHello"
    },
    sayHello: function(){
      alert("Hello!");
    },
    template: _.template( $("#task-template").html() ),
    render: function(){
      var template = this.template(this.model.toJSON());
      this.$el.html(template);
      return this;
    }
  });

  var taskView = new TaskVeiw({ model: task });
  console.log(taskView.render().el);
  $("body").append(taskView.render().el);

})();
