const express = require("express");
const app = express();
const PORT = 4000;

app.get("/", (req, res) => {
    res.json({ mssg: "Hello" });
});

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});
