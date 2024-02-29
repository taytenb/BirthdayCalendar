const mongoose = require("mongoose")

const birthdaySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
    },
    date: {
        type: Date,
        required: true,
    },
    giftIdeas: {
        type: String,
    },
})