import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import express, { Application, Request, Response } from 'express';
import morgan from 'morgan';
import { connection, sequelize } from './config/database';
import { error } from './helpers/responses';

dotenv.config();

const { APP_NAME, APP_PORT, APP_URL, NODE_ENV } = process.env;

const isDevelopment = NODE_ENV === 'development';

const corsOptions = {
  origin: '*',
  methods: 'GET,POST,PUT,PATCH,DELETE',
  allowedHeaders: ['Contet-Type'],
};

const app: Application = express();

app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors(corsOptions));

if (isDevelopment) {
  app.use(morgan('dev'));
}

app.use((request: Request, response: Response) => {
  response
    .status(404)
    .json(error({ status: 404, message: 'Resource not found' }));
});

const startServer = async () => {
  try {
    app.listen(APP_PORT, async () => {
      console.info(`✅ ${APP_NAME} server is running on ${APP_URL}`);
      await connection();
      sequelize.sync({ force: false }).then(() => {
        console.log('✅ Synced database successfully...');
      });
    });
  } catch (err) {
    console.error(`[server]: ${err}`);
  }
};

startServer();
