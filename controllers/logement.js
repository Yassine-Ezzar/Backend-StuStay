const Logement = require('../models/logement');

// CREATE - Créer un nouveau logement
exports.createLogement = async (req, res) => {
  try {
    const logement = new Logement(req.body);
    await logement.save();
    res.status(201).json(logement);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// READ - Obtenir la liste des logements
exports.getAllLogements = async (req, res) => {
  try {
    const logements = await Logement.find();
    res.json(logements);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// READ - Obtenir un logement par son ID
exports.getLogementById = async (req, res) => {
  try {
    const logement = await Logement.findById(req.params.id);
    if (!logement) {
      return res.status(404).json({ message: 'Logement introuvable' });
    }
    res.json(logement);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// UPDATE - Mettre à jour un logement par son ID
exports.updateLogement = async (req, res) => {
  try {
    const logement = await Logement.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!logement) {
      return res.status(404).json({ message: 'Logement introuvable' });
    }
    res.json(logement);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// DELETE - Supprimer un logement par son ID
exports.deleteLogement = async (req, res) => {
  try {
    const logement = await Logement.findByIdAndRemove(req.params.id);
    if (!logement) {
      return res.status(404).json({ message: 'Logement introuvable' });
    }
    res.json({ message: 'Logement supprimé avec succès' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
