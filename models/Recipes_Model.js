// Import mongoose
const mongoose = require('mongoose');

// Create the document Str  52965
const recipes_schema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: String,
    ingredients: [String],
    measurement: [String],
    instructions: String,
    category: {
      type: String,
      enum: ['Vegetarian', 'Non-Vegetarian', 'Dessert', 'Breakfast'],
      required: true,
    },
    image: {
      type: String,
    },
  },

  { timestamps: true }
);

// const recipes_schema = new mongoose.Schema( re_schema);
// Export the model
module.exports = mongoose.model('Recipes_Model', recipes_schema, 'recipes');
