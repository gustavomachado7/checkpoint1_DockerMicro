const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const scheme = new Schema({
    ProductId: {
        type: Number,
        required: true
    },
    ProductTitle: {
        type: String,
    },
    ProductPrice: {
        type: Number,
    }

})
module.exports = mongoose.model('Product', scheme)