import { Router } from "express"

const routes = Router();

routes.get('/', (req, res) => res.json({ message: 'Teste ok 5' }));

export default routes;
