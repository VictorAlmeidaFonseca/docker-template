import { Router } from "express";
import hello from './controller/hello-world-controller'

const route = Router();

route.get('/test', hello)

export default route 