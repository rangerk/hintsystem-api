module.exports.policies = {

  /***************************************************************************
  *                                                                          *
  * Default policy for all controllers and actions (`true` allows public     *
  * access)                                                                  *
  *                                                                          *
  ***************************************************************************/

//  '*': true,
	
 '*': 'tokenAuth',
	
 SnippetsController: {
		 '*': false,
		 find: 'tokenAuth'
	// '*': true
	//  find: true
	},
	
	PositionsController: {
		//'*': 'tokenAuth',
	//	 find: 'tokenAuth',
		create: [ 'tokenAuth', 'canUseSnippet' ],
		update: [ 'tokenAuth', 'canUseSnippet' ]
	},
	
};