import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'

dotenv.config();

import Route from './web/routes.js'

const app = express();

app.use(cors());
app.use(express.json());

app.use('/', Route.route);

app.use((err, req, res, next) => res.status(500).send({ message: `${err.message}` }));

app.listen(process.env.PORT || 8080);