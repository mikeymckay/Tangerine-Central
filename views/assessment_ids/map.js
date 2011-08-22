function(doc) {
  if(doc._id.match(/Assessment/) && doc.urlPathsForPages != null){
    emit(doc._id);
  }
}
