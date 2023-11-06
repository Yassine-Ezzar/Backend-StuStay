// controllers/logementController.js
const Logement = require('../models/logement');

// Créer un nouveau logement
exports.createLogement = async (req, res) => {
  try {
    const logement = new Logement(req.body);
    const savedLogement = await logement.save();
    res.status(201).json(savedLogement);
  } catch (error) {
    res.status(500).json({ error: 'Erreur lors de la création du logement' });
  }
};

// Obtenir la liste des logements
exports.getAllLogements = async (req, res) => {
  try {
    const logements = await Logement.find();
    res.json(logements);
  } catch (error) {
    res.status(500).json({ error: 'Erreur lors de la récupération de la liste des logements' });
  }
};

// Obtenir un logement par ID
exports.getLogementById = async (req, res) => {
  try {
    const logement = await Logement.findById(req.params.id);
    if (!logement) {
      return res.status(404).json({ message: 'Logement non trouvé' });
    }
    res.json(logement);
  } catch (error) {
    res.status(500).json({ error: 'Erreur lors de la récupération du logement' });
  }
};

// Mettre à jour un logement par ID
exports.updateLogement = async (req, res) => {
  try {
    const updatedLogement = await Logement.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedLogement) {
      return res.status(404).json({ message: 'Logement non trouvé' });
    }
    res.json(updatedLogement);
  } catch (error) {
    res.status(500).json({ error: 'Erreur lors de la mise à jour du logement' });
  }
};

// Supprimer un logement par ID
exports.deleteLogement = async (req, res) => {
  try {
    const deletedLogement = await Logement.findByIdAndRemove(req.params.id);
    if (!deletedLogement) {
      return res.status(404).json({ message: 'Logement non trouvé' });
    }
    res.json({ message: 'Logement supprimé' });
  } catch (error) {
    res.status(500).json({ error: 'Erreur lors de la suppression du logement' });
  }
};
