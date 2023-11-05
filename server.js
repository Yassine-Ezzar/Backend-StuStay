import express from 'express';
import mongoose from 'mongoose';
import reclamationRoutes from './routes/reclamation.js';

const app = express();
const port = process.env.PORT || 3000;


mongoose.set("debug", true)
mongoose.Promise = global.Promise;


const databaseName = 'stustay-db';

// Cela afichera les requêtes MongoDB dans le terminal
mongoose.set('debug', true);
// Utilisation des promesses ES6 pour Mongoose, donc aucune callback n'est nécessaire
mongoose.Promise = global.Promise;

// Se connecter à MongoDB
mongoose
  .connect(`mongodb://localhost:27017/${databaseName}`)
  .then(() => {
    // Une fois connecté, afficher un message de réussite sur la console
    console.log(`Connected to ${databaseName}`);
  })
  .catch(err => {
    // Si quelque chose ne va pas, afficher l'erreur sur la console
    console.log(err);
  });



app.use(express.json());
app.use('/reclamations', reclamationRoutes);

// Gestion des erreurs
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Erreur interne du serveur' });
});

// Lancer le serveur
app.listen(port, () => {
  console.log(`Serveur en cours d'exécution sur le port ${port}`);
});