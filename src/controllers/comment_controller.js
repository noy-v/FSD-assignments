const BaseController = require("./base_controller");
const CommentModel = require("../models/comment_model");

class CommentController extends BaseController {
    constructor() {
        super(CommentModel);
    }

    // Override getAll to handle ?postId=<post_id> and ?sender=<sender_id>
    async getAll(req, res) {
        const { postId, sender } = req.query;
        try {
            // Build filter object based on query parameters
            const filter = {};
            if (postId) filter.postId = postId;
            if (sender) filter.sender = sender;

            // If there are filters, use them; otherwise get all comments
            if (Object.keys(filter).length > 0) {
                const comments = await this.model.find(filter);
                res.status(200).send(comments);
            } else {
                // Get all comments
                super.getAll(req, res);
            }
        } catch (error) {
            res.status(400).send(error.message);
        }
    }
}

module.exports = new CommentController();

