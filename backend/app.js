require("dotenv").config();

const express = require("express");
const app = express();

//The middleware to print the method type and path
app.use((req, res, next) => {
    console.log(req.method, req.path);
    next();
});

app.get("/", (req, res) => {
    res.json({ mssg: "Hello" });
});

app.listen(process.env.PORT, () => {
    console.log(`Server started on port ${process.env.PORT}`);
});
