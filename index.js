require('dotenv').config();

import express from 'express';
import bodyParser from 'body-parser';
import { success } from 'consola';

import postgreUserRoutes from './routes/postgreUserRoutes';
import sequelizeUserRoutes from './routes/sequelizeUserRoutes';

import { swaggerOptions } from './config/swaggerOptions';

const app = express();
const expressSwagger = require('express-swagger-generator')(app);

const port = process.env.PORT || 5000;

app.use(bodyParser.urlencoded({ extended: false  }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
	res.json({ info: 'Node.js, Express, and Postgres API' });
});

//pure postgreSql connect and some routes, functions
app.use('/postgre', postgreUserRoutes);

//sequelize postgreSql
app.use('/sq', sequelizeUserRoutes);

/*
 * const swaggerOptions = {
 * 	swaggerDefinition: {
 * 		info: {
 * 			title: 'SqApiV1',
 * 			version: '1.0.0'
 * 		}
 * 	},
 * 	basePath: 'v1',
 * 	host: 'localhost:5000',
 * 	apis: [ 'index.js' ],
 * 	files: [
 * 		'../utils/*.js'
 *  	]
 * };
 */

expressSwagger(swaggerOptions);

app.listen(port, () => {
	success({ message: `Server listening on port ${port}`, badge: true });
});

export default app;
