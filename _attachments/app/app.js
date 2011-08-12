// Set the _id and then call fetch to use the backbone connector to retrieve it from couch
subtest = new Subtest({_id: "Assessment.The Gambia EGRA May 2011.ReadingComprehensionInstructions"});
subtest.fetch({
  success: function(model){
    (new SubtestView({model: model})).render();
  }
})
