/* eslint-disable prettier/prettier */
export { };

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      APP_NAME: string;
      APP_HOST: string;
      APP_PORT: string;
      APP_URL: string;
      CLOUDINARY_CLOUD_NAME?: string;
      CLOUDINARY_API_KEY?: string;
      CLOUDINARY_API_SECRET?: string;
      DB_DIALECT?:
        | 'mysql'
        | 'postgres'
        | 'sqlite'
        | 'mariadb'
        | 'mssql'
        | 'db2'
        | 'snowflake'
        | 'oracle';
      DB_HOST?: string;
      DB_PORT?: string;
      DB_USERNAME?: string;
      DB_PASSWORD?: string;
      DB_DATABASE?: string;
      ACCESS_TOKEN_KEY?: string;
      MAIL_NAME?: string;
      MAIL_FROM?: string;
      MAIL_HOST?: string;
      MAIL_PORT?: string;
      MAIL_USERNAME?: string;
      MAIL_PASSWORD?: string;
      MAIL_TLS?: string;
      NODE_ENV: string;
    }
  }
}
