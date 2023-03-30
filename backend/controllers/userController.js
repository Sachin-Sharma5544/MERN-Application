const User = require("../models/user");

exports.postLogin = (req, res, next) => {
    res.json({ msg: "User login request received" });
};

exports.postSignup = async (req, res, next) => {
    const { email, password } = req.body;

    try {
        const user = await User.signUp(email, password);
        res.status(201).json(user);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};
