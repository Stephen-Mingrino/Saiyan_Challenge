const SaiyanController = require("../controllers/SaiyanController");

module.exports = app => {
    app.get('/api/saiyan', SaiyanController.findAllSaiyans);
    app.get('/api/saiyan/:id', SaiyanController.findOneSaiyans);
    app.post('/api/saiyan', SaiyanController.createSaiyan);
    app.patch('/api/saiyan/:id',SaiyanController.updateSaiyan);
    app.delete('/api/saiyan/:id',SaiyanController.deleteSaiyan);
}
