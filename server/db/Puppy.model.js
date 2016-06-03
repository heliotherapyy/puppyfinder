var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PuppySchema = new Schema({

  // Default data
  breed: String,
  description: String,
  image: String,
  created_at: {
    type: Date,
    default: Date.now
  },

  // User info
  // Note that it accpets data as String, not Boolean
  // This is because while most of data comes as "true" or "false,"
  //  it also accepts other cases. e.g.) "Default" or "Don't Mind"
  isUserAllergic: {
    allergic: String,
    weight: Number
  },
  isUserAbsent: {
    absent: String,
    weight: Number
  },
  isUserActive : {
    active: String,
    weight: Number
  },
  isUserSingle: {
    single: String,
    weight: Number
  },

  // Puppy info
  isPuppyFriendly: {
    friendly: String,
    weight: Number
  },
  isPuppyInside: {
    inside: String,
    weight: Number
  },
  initialCost: {
    cost: Number,
    weight: Number
  },
  maintenance: {
    cost: Number,
    weight: Number
  },

  // For statistics
  total_weight: Number,
  num_selected: {
    type: Number,
    default: 0
  }
}, {
  collection: 'puppies'
});

module.exports = mongoose.model('Puppy', PuppySchema);
