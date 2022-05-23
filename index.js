require('dotenv').config();

import express from 'express';
import bodyParser from 'body-parser';
import { success } from 'consola';

import postgreUserRoutes from './routes/postgreUserRoutes';
import sequelizeUserRoutes from './routes/sequelizeUserRoutes';

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
	res.json({ info: 'Node.js, Express, and Postgres API' });
});

//pure postgreSql connect and some routes, functions
app.use('/postgre', postgreUserRoutes);

//sequelize postgreSql
app.use('/sq', sequelizeUserRoutes);

app.listen(port, () => {
	success({ message: `Server listening on port ${port}`, badge: true });
});

console.log('asd');

export default app;
