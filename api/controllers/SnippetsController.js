module.exports = {
	find: function(req, res){
	 /* Snippets.find({ 
			user_id: req.user_id
		}).then(function(r){
			return res.json(r);
		}); */
		//return res.json(req.headers);
		/* Snippets.find()
		.then(function(r){
			return res.json(r);
		}); */
		//return res.json(req.headers['x-csrf-token']);
		// return res.json(req.user_id);
		Snippets.find({
				user_id: req.user_id
			}).then(function(r){
				return res.json(r);
			}); 
	  //Tokens.find({
		/*	token: {
				startsWith: req.headers['x-csrf-token']
			} */
			//token: req.headers['x-csrf-token']
		//	,user_id: 25
	//	}).then(function(r){
			//return res.json(r);
		/*	Snippets.find({
				user_id: r[0].user_id
			}).then(function(r){
				return res.json(r);
			});
		}).catch(function(r){
			return res.json(r);
		}); */
			/*
		Tokens.find({
			'token': req.headers['x-csrf-token']
		}).then(function(r){
			return Snippets.find({
				'user_id': r[0].user_id
			});
		}).then(function(r){
	   return res.json(r);
		});
		*/
	}
};