const mongoose =require('mongoose')


const CarSchema = new mongoose.Schema({
    
    contact: {
        type: String,
        required: true,
        trim: true
      },
    make: {
      type: String,
      required: true,
      trim: true
    },

    AOM: {
      type: String,
      required: true,
      trim: true,
      default: "automatique"
    },

    model: {
      type: String,
      required: true,
      trim: true
    },
    year: {
      type: Number,
      required: true,
      min: 1886  // The year the first car was made
    },
    price: {
      type: Number,
      required: true,
      min: 0
    },

    mileage: {
      type: Number,
      required: true,
      min: 0
    },
   
    description: {
      type: String,
    },

    images: {
      type: [String],  // Array of URLs to images
    },
   
    
    createdAt: {
      type: Date,
      default: Date.now
    },

    
  });


module.exports=mongoose.model('car',CarSchema)