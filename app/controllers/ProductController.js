const { Product } = require('../models');

// View listagem
module.exports = {
    async index(req, res) {
        const products = await Product.findAll();
        return res.json(products);
    },

    async create(req, res) {
        const productsCreate = await Product.create(req.body);
        return res.json(productsCreate);
    },

    async getProductById(req, res) {
        const { id } = req.params;
        const productsCreate = await Product.findOne({
            where: {
                id: id
                }
            }
        );
        return res.json(productsCreate);
    }

};