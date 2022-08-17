const mongoos = require("mongoose")
const bookSchema = new mongoos.Schema({
    bookName : {
        type : String,
        required : true,
        unique : true
    },

    authorName : String,
    category : String,
    year: Number,
    tags :[String],
    ispublished : Boolean,
    date :{
        type: Date,
        default : Date.now
          },
    prices : {
        indianPrice: String,
        europianPrice: String
    },
    sales: {
        type: Number,
        default : 10
    }

    


},
{timestamps : true}
);

module.exports = mongoos.model("Book", bookSchema) // books