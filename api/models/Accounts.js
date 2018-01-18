/**
 * Accounts.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    nickname: { type: 'string', defaultsTo: '' },
    user_id: { type: 'integer', defaultsTo: 0 },
  },
  
  autoCreatedAt: 'created_at',
  autoUpdatedAt: 'updated_at',
  //schema: false,
  
};

