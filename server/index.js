const express = require("express");

const PORT = 8000;

const app = express();

const router = require("./router");

const mongoose = require("mongoose");

const dotenv = require("dotenv");

dotenv.config();

app.use(router);

app.listen(PORT, async () => {
    console.log(`server up on port ${PORT}`);
});

mongoose
.connect(process.env.MONGODB_URL,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => {
    console.log("Connected to MongoDB");
 })
 .catch((err) => {
    console.log(err);
});