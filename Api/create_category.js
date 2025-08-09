const Category = require('../Models/category_schema.js')

module.exports = createCategory = async (req, res) => {
    try {
        const createCategory = new Category(req.body);
        await createCategory.save();
        res.status(201).json(createCategory);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }

}

