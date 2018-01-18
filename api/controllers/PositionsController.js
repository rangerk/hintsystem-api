/**
 * PositionsController
 *
 * @description :: Server-side logic for managing positions
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	find: function(req, res){
		//return res.json(req.user_id);
		/*Positions.find().then(function(r){
			return res.json(r);
		});*/
		Snippets.find({
				user_id: req.user_id
			}).then(function(r){
			  //return res.json(r);
				return Positions.find({
					snippet_id: r.map(function(v){ return v.id; })
				});
			}).then(function(r2){
					return res.json(r2);
	  	});
	}
};

