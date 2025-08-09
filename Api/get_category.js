const Category = require('../Models/category_schema.js')

module.exports = getCategory = async (req, res) => {
    const { page = 1, limit = 10 } = req.query;
    const skip = (page - 1) * limit;

    console.log("skip", skip, "limit", limit)
    try {
        const getCategory = await Category.find({})
            .skip(skip)
            .limit(limit);
    

        const total = await Category.countDocuments();

        res.json({
            total,
            page,
            limit,
            totalPages: Math.ceil(total / limit),
            data: getCategory
        });

    } catch (error) {
        res.status(400).json({ message: error.message });
    }

}

