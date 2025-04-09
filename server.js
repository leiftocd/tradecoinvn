/* eslint-disable no-undef */
const path = require('path');
const express = require("express");
const app = express();

app.use(express.static(path.join(__dirname, "dist")));
app.get("*", (req, res) =>
 res.sendFile(path.join(__dirname, "dist/index.html"))
);

const port = process.env.PORT || 5000;
app.listen(port, () => {
 console.log(`Server started on port ${port}`);
})