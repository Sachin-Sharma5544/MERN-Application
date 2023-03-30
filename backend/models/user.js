const bcrypt = require("bcrypt");
const validator = require("validator");
const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
});

//Static Method
userSchema.statics.signUp = async function (email, password) {
    if (!email || !password) {
        throw Error("Please fill in all the fields ");
    }

    if (!validator.isEmail(email)) {
        throw Error("Please enter a valid email");
    }

    if (!validator.isStrongPassword(password)) {
        throw Error("Please enter a strong password. ");
    }

    const exists = await this.findOne({ email: email });
    if (exists) {
        throw Error("Email already in use");
    }

    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);
    const user = await this.create({ email, password: hash });
    return user;
};

module.exports = mongoose.model("User", userSchema);
