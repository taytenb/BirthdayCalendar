const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    birthdays: {
        type: [mongoose.Schema.Types.ObjectId],
        required: true,
        ref: "Birthday",
    },
    username: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },

})