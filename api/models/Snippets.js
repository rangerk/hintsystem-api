/**
 * Snippets.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    nickname: { type: 'string', defaultsTo: '' },
    user_id: { type: 'integer', defaultsTo: 0 },
    content: { type: 'string', defaultsTo: '' },
    header: { type: 'string', defaultsTo: '' },
    footer: { type: 'string', defaultsTo: '' },
    account_id: { type: 'integer', defaultsTo: 0 },
    snippet: { type: 'string', defaultsTo: '' },
    num: { type: 'integer', defaultsTo: 0 },
    on: { type: 'string', defaultsTo: 'on' },
    tags: { type: 'string', defaultsTo: '' },
    icon: { type: 'string', defaultsTo: '/hint-icon-i1.png' },
    activation: { type: 'string', defaultsTo: 'persistent' },
    type: { type: 'string', defaultsTo: 'inline' },
    icons: { type: 'string', defaultsTo: '/hint-icon-i1.png,/hint-icon-i2.png,/hint-icon-q1.png' },
    voting: { type: 'string', defaultsTo: 'on' },
    position: { type: 'string', defaultsTo: '' },
  },
  
  autoCreatedAt: 'created_at',
  autoUpdatedAt: 'updated_at',
  schema: false,
};
