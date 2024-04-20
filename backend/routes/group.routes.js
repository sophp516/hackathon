import express from "express";
import { joingroup, creategroup } from "../controllers/group.controller.js"
import protectRoute from "../middleware/protectRoute.js";
const router = express.Router();

router.post("/joingroup", protectRoute, joingroup);

router.post("/creategroup", protectRoute, creategroup);

export default router;
