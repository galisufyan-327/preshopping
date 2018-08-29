const mongoose = require('mongoose');

var Product = mongoose.model('Product', {
    name: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    },
    price: {
        type: Number,
        required: true
    },
    price_old: {
        type: Number
    },
    sale_percent: {
        type: Number
    },
    key_features: {
        type: String,
        trim: true
    },
    image_url: {
        type: String,
        required: true,
        minlength: 15,
        trim: true
    }
});

module.exports = {Product};