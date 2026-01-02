const express = require("express");
const router = express.Router();
const postController = require("../controllers/post_controller");

// 1. Add a New Post [cite: 5]
router.post("/", postController.create);

// 2. Get All Posts & 4. Get Posts by Sender [cite: 6, 9]
router.get("/", postController.getAll);

// 3. Get a Post by ID [cite: 7]
router.get("/:id", postController.getById);

// 5. Update a Post [cite: 12]
router.put("/:id", postController.updateItem);

// (Optional for posts but good practice) Delete a Post
router.delete("/:id", postController.deleteItem);

module.exports = router;