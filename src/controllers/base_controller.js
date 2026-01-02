class BaseController {
    constructor(model) {
        this.model = model;
        // Bind methods to ensure 'this' context is preserved in Express routes
        this.getAll = this.getAll.bind(this);
        this.getById = this.getById.bind(this);
        this.create = this.create.bind(this);
        this.updateItem = this.updateItem.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
    }

    async create(req, res) {
        try {
            const item = await this.model.create(req.body);
            res.status(201).send(item);
        } catch (error) {
            res.status(400).send(error.message);
        }
    }

    async getAll(req, res) {
        try {
            const objects = await this.model.find();
            res.status(200).send(objects);
        } catch (error) {
            res.status(400).send(error.message);
        }
    }

    async getById(req, res) {
        try {
            const obj = await this.model.findById(req.params.id);
            if (obj) res.status(200).send(obj);
            else res.status(404).send("Not found");
        } catch (error) {
            res.status(400).send(error.message);
        }
    }

    async updateItem(req, res) {
        try {
            const updatedObj = await this.model.findByIdAndUpdate(
                req.params.id, 
                req.body, 
                { new: true } // returns the updated document
            );
            if (updatedObj) res.status(200).send(updatedObj);
            else res.status(404).send("Not found");
        } catch (error) {
            res.status(400).send(error.message);
        }
    }

    async deleteItem(req, res) {
        try {
            const deleted = await this.model.findByIdAndDelete(req.params.id);
            if (deleted) res.status(200).send({ message: "Deleted successfully" });
            else res.status(404).send("Not found");
        } catch (error) {
            res.status(400).send(error.message);
        }
    }
}

module.exports = BaseController;