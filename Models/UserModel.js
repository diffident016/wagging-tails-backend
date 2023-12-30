const mongoose = require("mongoose")

const userSchema = mongoose.Schema({
    providerID: String,
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        required: true,
        default: "customers",
        enum: ["users", "customers"]
    },
    provider: {
        type: String,
        required: true,
        default: "email",
        enum: ["email", "google", "facebook"]
    }
}, {
    versionKey: false
})

const UserModel = mongoose.model("User", userSchema)

module.exports = { UserModel };