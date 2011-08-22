/** Configure the database **/
var DATABASE_NAME = "egra";
var DESIGN_DOC = "central";
Backbone.couch_connector.config.db_name = DATABASE_NAME;
Backbone.couch_connector.config.ddoc_name = DESIGN_DOC;
Backbone.couch_connector.config.global_changes = false;

// This allows us to have separate template files
var loadTemplate = function(filename){
  var templateFunction;
  $.ajax("app/templates/" + filename,{
    async:false, // make sure we pause execution until this template is loaded
    success: function(result){
      templateFunction = Handlebars.compile(result);
    }
  });
  return templateFunction;
}
