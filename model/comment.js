const mongoose = require("mongoose");

const CommentSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    productId: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
    },
    comments: {
        type: String,
        required: true
    }
});


module.exports = mongoose.model("Ccomment", CommentSchema)