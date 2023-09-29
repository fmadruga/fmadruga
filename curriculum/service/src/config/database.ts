import dotenv from 'dotenv';
import { DataType, Dialect, Sequelize } from 'sequelize';

dotenv.config();

const {
  DB_DIALECT,
  DB_PORT,
  DB_HOST,
  DB_USERNAME,
  DB_PASSWORD,
  DB_DATABASE,
  NODE_ENV,
} = process.env;

const sequelize = new Sequelize({
  dialect: DB_DIALECT as Dialect,
  host: DB_HOST,
  port: DB_PORT as unknown as number,
  username: DB_USERNAME,
  password: DB_PASSWORD,
  database: DB_DATABASE,
  logging: NODE_ENV === 'development' ? console.log : false,
});

const connection = async () => {
  try {
    await sequelize.authenticate();
    console.log('✅ Connection has been established successfully.');
  } catch (error) {
    console.error('❗ Unable to connect to the database:', error);
  }
};

export { DataType, Sequelize, connection, sequelize };
