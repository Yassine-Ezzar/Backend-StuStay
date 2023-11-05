const express = require('express');
const router = express.Router();
const logementController = require('../controllers/logement');

// Routes pour la gestion des logements
router.post('/logements', logementController.createLogement);
router.get('/logements', logementController.getAllLogements);
router.get('/logements/:id', logementController.getLogementById);
router.put('/logements/:id', logementController.updateLogement);
router.delete('/logements/:id', logementController.deleteLogement);

module.exports = router;
