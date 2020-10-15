import express from 'express';
import cors from "cors";

import { config }from 'dotenv';
import { json } from 'body-parser';

import routes from './routes';
import mongoConnection from './config/db-connection'

const app = express()

app.use(cors())
app.use(json())
app.use(routes)
app.listen(process.env.PORT, () => console.log('START API-SERVER!'));

mongoConnection().then(() => console.log('START DB-SERVER!'))
config()