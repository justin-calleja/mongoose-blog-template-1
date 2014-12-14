var mongoose = require('mongoose');

var itemSchema = new mongoose.Schema({
    text: String,
    status: { type: Boolean, default: false }
});

var Item = mongoose.model('Item', itemSchema);

module.exports = {
  schema: itemSchema,
  model: Item
};
