import express from 'express'

import LoginController from '../app/Controllers/LoginController.js'

const route = express.Router();

route.get('/', (req, res, next) => res.status(200).send({ message: 'Hello World' }));

route.post('/login', LoginController.login);

export default { route };