import express from "express";
import cors from 'cors';
import morgan from "morgan"
import swaggerJsDoc from "swagger-jsdoc";
import swaggerUI from "swagger-ui-express";


import vacunaRoutes from "./routes/vacuna"
import usuarioRoutes from "./routes/usuario"


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
app.use(vacunaRoutes);
app.use(usuarioRoutes)


/**
 * Create Documentation
 */
app.use('/docs', swaggerUI.serve, swaggerUI.setup(specs))

export default app


