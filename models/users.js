const {Schema, model} = require("mongoose");
// const Joi = require("joi");

const userSchema = new Schema({
    fullName: {
        type: String,
        required: true,
    },
    username: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    orders: [{
        orderId: {
            type: String
        },
        // date: {
        //     default: Date.now
        // }
    }]
});

module.exports = model("User", userSchema);