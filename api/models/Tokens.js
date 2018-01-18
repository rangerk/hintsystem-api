module.exports = {

  attributes: {
    token: { type: 'string', defaultsTo: '' },
    user_id: { type: 'integer', defaultsTo: 0 },
  },
  
  autoCreatedAt: 'created_at',
  autoUpdatedAt: 'updated_at',
  //schema: false,
  
};

