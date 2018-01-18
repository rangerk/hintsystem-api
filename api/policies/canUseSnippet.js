module.exports = function(req, res, next) {
  Snippets.findOne({ id: req.param('snippet_id') })
  .then(function(r){
    if (r.user_id == req.user_id){
      return next();
    }
    if (r.user_id != req.user_id){
      return res.forbidden('You are not permitted to perform this action.');
    }
  });
  //return res.json(req.params.snippet_id);
 //return res.json(req.param('snippet_id'));
  //return res.json(req.allParams());
  //return res.json(0);
 // return next();
  //return res.json(req.options.values.snippet_id);
 /* if (!req.options.values){
    return res.forbidden('You are not permitted to perform this action.');
  }
  if (!req.options.values.snippet_id){
    return res.forbidden('You are not permitted to perform this action.');
  } */
 // return res.json(req.options.values.snippet_id);
 // return next();
  
  // User is not allowed
  // (default res.forbidden() behavior can be overridden in `config/403.js`)
 // return res.forbidden('You are not permitted to perform this action.');
};
