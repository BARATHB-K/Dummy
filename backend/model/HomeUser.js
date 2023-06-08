const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const homeSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    address: {
        type: String,
        required: true,
    },
    phoneno: {
        type: Number,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    /* available: {
       type: Boolean,
     },
     image: {
       type: String,
       required: true,
     },*/
});


module.exports = mongoose.model("Home", homeSchema);

// books
