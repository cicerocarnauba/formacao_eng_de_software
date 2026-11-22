import { Router } from "express";
import {
  listar,
  criar
} from "../controllers/notaController.js";

const router = Router();

router.get("/", listar);
router.post("/", criar);

export default router;