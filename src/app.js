import express from 'express';
import middleware from './middlewares/app-middlewares';
import AppRouter from './routes';
import createDBConnection from './database/connection';
import configure from './config';
 
configure();
createDBConnection()
    .then((connection) => {
        if (connection.isConnected) {
            console.log(`Connected to ${process.env.DB_DRIVER} database at ${process.env.DB_HOST}`);
 
            const app = express();
            app.use(middleware);
            app.use(AppRouter);
 
            app.listen(process.env.APP_PORT, () => {
                console.log(`${process.env.APP_NAME} listening to port ${process.env.APP_PORT}!`);
            });
        } else {
            throw new Error(`Connection failed to ${process.env.DB_HOST} using current credential.`);
        }
    })
    .catch((error) => {
        console.error(`Error starting up server.`);
        console.error(error);
    })