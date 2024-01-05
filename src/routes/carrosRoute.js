import { Router } from "express";

import { consultarCarros, registrarCarros, actualizarCarros, eliminarCarros } from "../controllers/carroController.js"
import { checkAuth } from "../middleware/checkout.js";

const router = Router();


//! Proteccion de rutas por Token de Authenticacion
router.get("/cars", checkAuth ,consultarCarros);
router.post("/cars", checkAuth, registrarCarros);
router.patch("/cars/:id", checkAuth, actualizarCarros);
router.delete("/cars/:id", checkAuth, eliminarCarros);

export default router;

