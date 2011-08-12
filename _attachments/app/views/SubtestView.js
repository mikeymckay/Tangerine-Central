var SubtestView = Backbone.View.extend({
  el: "body",
  template: loadTemplate("editor.template.html"),
  initialize: function (){
    this.model.view = this;
  },
  events: {
    // Why oh why does this fire twice?
    "click button:contains('Save')" : "save"
  },
  save: function() {
    this.model.set({"content": this.$("textarea").val()});
    this.model.save();
  },
  render: function(){
    $(this.el).html(this.template(this.model.toJSON()));
    return this;
  }
});
