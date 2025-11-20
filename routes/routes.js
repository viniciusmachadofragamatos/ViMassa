import express from "express";
import { ClientController } from "../controllers/controllers.js";

const router = express.Router();

router.get("/api/clients", ClientController.getAll);
router.get("/api/clients/:id", ClientController.getById);
router.post("/api/clients", ClientController.create);
router.put("/api/clients/:id", ClientController.update);
router.delete("/api/clients/:id", ClientController.delete);

export default router;
