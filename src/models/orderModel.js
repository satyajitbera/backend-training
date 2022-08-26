const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema( { 
    userId: String,
	productId: String,
	amount: Number,
	isFreeAppUser: Boolean, 
	Date: String
},{ timestamps: true });

module.exports = mongoose.model('NewOrder', orderSchema)


