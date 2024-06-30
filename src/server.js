import express from 'express';
import swaggerUi from 'swagger-ui-express';
import swaggerDocument from '../swagger.json' assert { type: 'json' };
import envoriment from './env/envoriment.js';
import authRouter from './auth/auth.router.js';
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use(authRouter);

app.listen(envoriment.appPort, () => {
  console.log(
    `Server is running on port: http://localhost:${envoriment.appPort}/docs`,
  );
});
