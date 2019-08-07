const { Dev } = require('../models');

// View listagem
module.exports = {
    async index(req, res) {
        const Dev = await Dev.findAll();
        return res.json(Dev);
    },

    async store(req, res) {
        const devCreate = await Dev.create(req.body);
        return res.json(devCreate);
    },

    async getDevById(req, res) {
        const { id } = req.params;
        const devOne = await Dev.findOne({
            where: {
                id: id
                }
            }
        );
        return res.json(devOne);
    }

};