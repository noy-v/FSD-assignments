const BaseController = require("./base_controller");
const PostModel = require("../models/post_model");

class PostController extends BaseController {
    constructor() {
        super(PostModel);
    }

    // Override or extend getAll to handle ?sender=<sender_id>
    async getAll(req, res) {
        const senderFilter = req.query.sender;
        try {
            if (senderFilter) {
                // If sender query exists: /post?sender=123 [cite: 11]
                const posts = await this.model.find({ sender: senderFilter });
                res.status(200).send(posts);
            } else {
                // Standard Get All: /post [cite: 6]
                super.getAll(req, res);
            }
        } catch (error) {
            res.status(400).send(error.message);
        }
    }
}

module.exports = new PostController();