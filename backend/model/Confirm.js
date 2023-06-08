const mongoose = require("mongoose");

const SchemaC = mongoose.Schema;

const workConfirm = new SchemaC({
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

    date: {
        type: String,
        required: true,
    },
    time: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },


});
module.exports = mongoose.model("WorkConfirm", workConfirm);