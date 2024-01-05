import express from "express";
import dotenv from "dotenv";
import usuarioRoute from "./routes/ususarioRoute.js"
import carrosRoute from "./routes/carrosRoute.js"

// Configuracion del servidor
const app = express();

// * Middlewares
// configurando variables de entorno
dotenv.config();
app.use(express.json());

// Rutas
app.use("/api", usuarioRoute);
app.use("/api", carrosRoute);

// levantamos el servidor
let PORT = process.env.PORT || 4040;

app.listen( PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
})