// Include the Mongoose Dependencies
var mongoose = require("mongoose");

var Schema = mongoose.Schema;

// Create a Schema for capturing address.
var AddressSchema = new Schema({
  input: {
    type: String
  },
  address: {
    type: String
  },
  location: {
    type: String
  },
});

// Create the Model
var Address = mongoose.model("Address", AddressSchema);

// Export it for use elsewhere
module.exports = Address;