import express from 'express'

const route = express.Router();

route.get('/', (req, res, next) => res.status(200).send({ message: 'Hello World' }));

export default { route };