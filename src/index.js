import express from "express";
import cors from 'cors';
import morgan from "morgan"


import usuario from "./routes/usuario.js"
import menu from "./routes/menu.js"
import modulo from "./routes/modulo.js"
import modxtipu from "./routes/modxtipu.js"
import programa from "./routes/programa.js"
import raza from "./routes/raza.js"
import tipousu from "./routes/tipousu.js"
import proxmen from "./routes/proxmen.js"
import especialidad from "./routes/especialidad.js"
import mascota from "./routes/mascota.js"
import vacuna from "./routes/vacuna.js"
import sucxprv from "./routes/sucxprv.js"
import serxmas from "./routes/serxmas.js"
import masfoto from "./routes/masfoto.js"
import vacxmas from "./routes/vacxmas.js"
import serxsuc from "./routes/serxsuc.js"
import espxsuc from "./routes/espxsuc.js"



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
app.use(especialidad)
app.use(espxsuc)
app.use(mascota)
app.use(masfoto)
app.use(menu)
app.use(modulo)
app.use(modxtipu)
app.use(programa)
app.use(proxmen)
app.use(raza)
app.use(serxmas)
app.use(serxsuc)
app.use(sucxprv)
app.use(tipousu)
app.use(usuario)
app.use(vacuna)
app.use(vacxmas)

const PORT = 3001

app.listen(process.env.PORT || PORT)
console.log('Server listening on port', process.env.PORT || PORT)