const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const endpoints = require("./Endpoints/endpoints");
const categoryEndpoints = require("./Endpoints/categoryEndpoints");
const app = express();

dotenv.config();
const port = process.env.PORT || 8080;
app.use(express.json());
app.use(cors());

app.use("/", endpoints);
app.use("/category", categoryEndpoints);

// Mongoose connection
mongoose.connect(process.env.MONGO_URL).then(() => {
    app.listen(port, () => {
        console.log(`Server is running on the port: ${port}`);
    });
}).catch((error) => {
    console.log(error.toString());
});




