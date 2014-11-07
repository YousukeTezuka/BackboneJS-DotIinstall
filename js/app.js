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
    // className: "liClass",
    // id: "liId"
    template: _.template("<%- title %>"),
    render: function(){
      var template = this.template(this.model.toJSON());
      this.$el.html(template);
      return this;
    }
  });

  var taskView = new TaskVeiw({ model: task });
  console.log(taskView.render().el);

})();
