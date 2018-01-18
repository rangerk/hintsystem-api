module.exports = function(req, res, next) {
   Tokens.find({ 
      token: req.headers['x-csrf-token']
    }).then(function(r){
    //  return res.send(req.headers);
      //,return res.send(r);
     // res.set(req.headers);
      // return res.send(req.headers); 
      if (!r){
        return res.forbidden('You are not permitted to perform this action.');
      }
      if (!r.length){
        return res.forbidden('You are not permitted to perform this action.');
      }
      if (r.length < 1){
        return res.forbidden('You are not permitted to perform this action.');
      }
      req.user_id = r[0].user_id;
      //res.set(req.headers);
     return next(); 
     // return res.json(r);
    }).catch(function(r){
      return res.forbidden('You are not permitted to perform this action.');
   });
   
  // User is not allowed
  // (default res.forbidden() behavior can be overridden in `config/403.js`)
 // return res.forbidden('You are not permitted to perform this action.');
};
