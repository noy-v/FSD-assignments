const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const postRoutes = require("./routes/post_routes");
const commentRoutes = require("./routes/comment_routes");

// Load environment variables
dotenv.config();

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/post", postRoutes);
app.use("/comment", commentRoutes);

// Database Connection
const db = mongoose.connection;
db.on("error", (error) => console.error("Database Connection Error:", error));
db.once("open", () => console.log("Connected to MongoDB successfully"));

mongoose.connect(process.env.DATABASE_URL);

// Placeholder for Routes (You will add these in later steps)
// const postRoutes = require("./routes/post_routes");
// app.use("/post", postRoutes);

module.exports = app;