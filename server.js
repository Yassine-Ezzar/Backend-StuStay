import express from 'express';
import mongoose from 'mongoose';
import morgan from 'morgan';
import cors from 'cors';
import { notFoundError, errorHandler } from './middlewares/error-handler.js';
import userRoutes from './routes/userRoutes.js';
import logementRoutes from './routes/logementRoutes.js';
import reservationRoutes from './routes/reservationRoutes.js';
import reclamationRoutes from './routes/reclamationRoutes.js';

const app = express();
const hostname = '127.0.0.1';
const port = process.env.PORT || 9090;
const databaseName = 'votreBaseDeDonnées'; 

mongoose.set('debug', true);
mongoose.Promise = global.Promise;

mongoose
  .connect(`mongodb://${hostname}:27017/${databaseName}`)
  .then(() => {
    console.log(`Connecté à ${databaseName}`);
  })
  .catch(err => {
    console.error(`Erreur de connexion à la base de données : ${err}`);
  });

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/utilisateur', userRoutes); 
app.use('/logements', logementRoutes);
app.use('/reservation', reservationRoutes); 
app.use('/reclamation', reclamationRoutes); 

app.use(notFoundError);
app.use(errorHandler);

app.listen(port, () => {
    console.log(`Serveur en cours d'exécution sur ${hostname}:${port}`);
});
