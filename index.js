'use strict';
require('dotenv').config()

const express = require('express');
const bodyParser = require('body-parser')
const { success, error } = require('consola')
const port = process.env.PORT

const app = express();

const postgreUserRoutes = require('./routes/postgreUserRoutes')
const sequelizeUserRoutes = require('./routes/sequelizeUserRoutes')


app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.get('/', (req, res) => {
    res.json({info: 'Node.js, Express, and Postgres API'});
})

//pure postgreSql connect and some routes, functions
app.use('/postgre', postgreUserRoutes)

//sequelize postgreSql
app.use('/sq', sequelizeUserRoutes)

app.listen(port, () => {
    success({ message: `Server listening on port ${port}`,  badge: true })
})