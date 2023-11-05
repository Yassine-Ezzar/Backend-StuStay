// models/Logement.js
const mongoose = require('mongoose');

const logementSchema = new mongoose.Schema({
  image: String,
  titre: String,
  description: String,
  nom: String,
  lieu: String,
  nombreChambre: Number,
  prix: Number,
});

module.exports = mongoose.model('Logement', logementSchema);
