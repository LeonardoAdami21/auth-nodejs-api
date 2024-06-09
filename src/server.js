import express from 'express';
import envoriment from './env/envoriment.js';
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(envoriment.appPort, () => {
    console.log(`Server is running on port: http://localhost:${envoriment.appPort}/docs`);
})