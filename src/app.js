import express from "express";
import cors from 'cors';
import morgan from "morgan"
import swaggerJsDoc from "swagger-jsdoc";
import swaggerUI from "swagger-ui-express";


import usuario from "./routes/usuario"
import menu from "./routes/menu"
import programa from "./routes/programa"
import raza from "./routes/raza"
import tipousu from "./routes/tipousu"
import proxmen from "./routes/proxmen"
import proxusu from "./routes/proxusu"

import { options } from './swaggerOptions'

const specs = swaggerJsDoc(options)

const app = express();

/**
 * Dependencies
 */
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

/**
 * Routes
 */
app.use(usuario)
app.use(menu)
app.use(programa)
app.use(raza)
app.use(tipousu)
app.use(proxmen)
app.use(proxusu)

/**
 * Create Documentation
 */
app.use('/docs', swaggerUI.serve, swaggerUI.setup(specs))

export default app


