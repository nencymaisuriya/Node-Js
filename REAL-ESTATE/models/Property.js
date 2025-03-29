const mongoose = require('mongoose');

const PropertySchema = new mongoose.Schema({
    title:{
         type: String,
          required: true 
    }, 
    price: {
         type: Number, 
         required: true 
        },
    location: { 
        type: String, 
        required: true 
    },
    type: { 
        type: String,
        required: true 
    },
    image: { 
        type: String, 
        required: true 
    }
});

module.exports = mongoose.model('Property', PropertySchema);
