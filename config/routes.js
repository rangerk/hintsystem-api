module.exports.routes = {

/*
  '/': {
    view: 'homepage'
  }
*/
 // '/': '/positions',
  
  '/': {
    view: 'dash'
  }, 
  

  '/headers': function(req, res){
    return res.send(req.headers);
  },

};