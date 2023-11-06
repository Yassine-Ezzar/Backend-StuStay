// models/logement.js
const mongoose = require('mongoose');

const logementSchema = new mongoose.Schema({
  images: [String], 
  titre: String,
  description: String,
  nom: String,
  nombreChambre: Number,
  prix: Number,
  contact: String,
  lieu: String, 
});

module.exports = mongoose.model('Logement', logementSchema);
