const mongoose = require('mongoose');

const newuserSchema = new mongoose.Schema( { 
    
    name: String,
	balance: {
        type: Number,
        default: 100
    },
	address: String,
	age: Number,
 	gender: {
        type: String,
        enum: ['male', 'female',"other"]
    },

	isFreeAppUser:{
        type: Boolean,
        default: false
    }
},{ timestamps: true });

module.exports = mongoose.model('NewUser', newuserSchema) 

