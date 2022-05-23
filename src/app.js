import express from "express";
import cors from 'cors';
import morgan from "morgan"
import swaggerJsDoc from "swagger-jsdoc";
import swaggerUI from "swagger-ui-express";


import usuario from "./routes/usuario.js"
import menu from "./routes/menu.js"
import programa from "./routes/programa.js"
import raza from "./routes/raza.js"
import tipousu from "./routes/tipousu.js"
import proxmen from "./routes/proxmen.js"
import proxusu from "./routes/proxusu.js"

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


