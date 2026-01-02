const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    sender: {
        type: String, // This is required for the "Get Posts by Sender" requirement [cite: 9]
        required: true
    }
});

module.exports = mongoose.model("Posts", postSchema);