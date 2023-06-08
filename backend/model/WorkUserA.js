const mongoose = require("mongoose");

const Schema4 = mongoose.Schema;

const workSchema = new Schema4({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    phoneno: {
        type: String,
        required: true,
    },

    image: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    city: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
});
module.exports = mongoose.model("WorkA", workSchema);