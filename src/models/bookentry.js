const mongoos = require("mongoose")
const bookSchema = new mongoos.Schema({
    bookName : {
        type : String,
        required : true,
        unique : true
    },

    authorName : {
        type : String,
        required : true
    },
    category : String,
    year: Number
},
{timestamps : true}
);

module.exports = mongoos.model("Book", bookSchema) // books