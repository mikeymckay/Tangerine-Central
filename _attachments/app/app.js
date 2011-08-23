
var Router = Backbone.Router.extend({

  routes: {
    "central":"central",    // #help
    "edit":"edit",    // #help
    "edit/*id":"edit",    // #help
    "collect/*id":"collect",  // #search/kiwis
    "neighbors":"neighbors",  // Default
    "*path":"index",  // Default
  },

  central: function() {
  },

  edit: function(id) {
    console.log("YO");
    // Use a default to make testing easier
    id = (id == null || id == "") ? "Assessment.The Gambia EGRA May 2011.ReadingComprehensionInstructions" : id;
    // Set the _id and then call fetch to use the backbone connector to retrieve it from couch
    subtest = new Subtest({_id: id });
    subtest.fetch({
      success: function(model){
        (new SubtestView({model: model})).render();
      }
    })
  },

  collect: function(id) {
    document.location = "/" + DATABASE_NAME + "/_design/app/index.html?" + id;
  },

  index: function(path){
    $.couch.db(DATABASE_NAME).view(DESIGN_DOC + "/assessment_ids", {
      success: function(result){
        $("div#content").html(Template.index({
          editor: true,
          assessments: _.pluck(result.rows, "id")
        }));
      }
    });
  },

  neighbors: function(starting_ip){
    starting_ip = (starting_ip == null || starting_ip == "") ? "192.168.0.1" : starting_ip;
    test_ip = test_ip.substring(0,test_ip.lastIndexOf("."));
    _.each(_.range(0,255),function (last_number){
      console.log(test_ip+"."+last_number);
    });



  }
});

var Template = {};
Template.index = loadTemplate("index.template.html");


router = new Router();

Backbone.history.start()

