var SubtestView = Backbone.View.extend({
  el: $("body"),
  template: loadTemplate("editor.template.html"),
  initialize: function (){
    this.model.view = this;
  },
  events: {
    "click button:contains('Save')" : "save",
  },
  save: function() {
    this.model.set({"content": this.$("textarea").val()}).save();
  },
  render: function(){
    $(this.el).html(this.template(this.model.toJSON()));
    return this;
  }
});
