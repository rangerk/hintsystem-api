/**
 * Positions.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    url: { type: 'string', defaultsTo: '' },
    element_id: { type: 'string', defaultsTo: '' },
    element_class: { type: 'string', defaultsTo: '' },
    location: { type: 'string', defaultsTo: '' },
    alignment: { type: 'string', defaultsTo: '' },
    //created_at: { type: 'string', defaultsTo: '' },
    //updated_at: { type: 'string', defaultsTo: '' },
    snippet_id: { type: 'integer', defaultsTo: 0 },
  },
  
  //autoCreatedAt: false,
  //autoUpdatedAt: false,
  autoCreatedAt: 'created_at',
  autoUpdatedAt: 'updated_at',
  schema: false,
  
};

