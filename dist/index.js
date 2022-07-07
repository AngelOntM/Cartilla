import express from "express";
import cors from 'cors';
import morgan from "morgan";
import usuario from "./routes/usuario.js";
import menu from "./routes/menu.js";
import programa from "./routes/programa.js";
import raza from "./routes/raza.js";
import tipousu from "./routes/tipousu.js";
import proxmen from "./routes/proxmen.js";
import proxusu from "./routes/proxusu.js";
import submenu from "./routes/submenu.js";
import especialidad from "./routes/especialidad.js";
import mascota from "./routes/mascota.js";
import vacuna from "./routes/vacuna.js";
import sucxprv from "./routes/sucxprv.js";
import serxmas from "./routes/serxmas.js";
import masfoto from "./routes/masfoto.js";
import vacxmas from "./routes/vacxmas.js";
import serxsuc from "./routes/serxsuc.js";
import espxsuc from "./routes/espxsuc.js";
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

app.use(especialidad);
app.use(espxsuc);
app.use(mascota);
app.use(masfoto);
app.use(menu);
app.use(programa);
app.use(proxmen);
app.use(proxusu);
app.use(raza);
app.use(serxmas);
app.use(serxsuc);
app.use(submenu);
app.use(sucxprv);
app.use(tipousu);
app.use(usuario);
app.use(vacuna);
app.use(vacxmas);
const PORT = 3001;
app.listen(process.env.PORT || PORT);
console.log('Server listening on port', process.env.PORT || PORT);