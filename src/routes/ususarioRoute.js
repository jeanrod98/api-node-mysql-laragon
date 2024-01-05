import { Router } from "express";

import { consultarUsuarios } from "../controllers/usuarioController.js"

const router = Router();

router.get("/users", consultarUsuarios);

export default router;

