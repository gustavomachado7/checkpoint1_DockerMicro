const mongoose = require('mongoose');
const Product = mongoose.model('Product');

exports.get = async() => {
    const result = await Product.find({});
    return result;
}

exports.create = async(data) => {
    const product = Product(data)
    await product.save()
} 

exports.update = async(id, data) => {
    await Product.findByIdAndUpdate(id, {
        $set:{
            ProductTitle: data.ProductTitle,
            ProductPrice: data.ProductPrice
        }
    })
}