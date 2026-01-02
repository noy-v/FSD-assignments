const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema({
    content: {
        type: String,
        required: true
    },
    sender: {
        type: String,
        required: true
    },
    postId: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model("Comments", commentSchema);

