const express = require("express");
const router = express.Router();
const commentController = require("../controllers/comment_controller");

// 1. Add a New Comment
router.post("/", commentController.create);

// 2. Get All Comments (also supports filtering by postId and sender)
router.get("/", commentController.getAll);

// 3. Get a Comment by ID
router.get("/:id", commentController.getById);

// 4. Update a Comment
router.put("/:id", commentController.updateItem);

// 5. Delete a Comment
router.delete("/:id", commentController.deleteItem);

module.exports = router;

