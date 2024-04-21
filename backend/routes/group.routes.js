import express from "express";
import { joingroup, creategroup, getgroups, getmembers, getmygroup } from "../controllers/group.controller.js"
import protectRoute from "../middleware/protectRoute.js";
const router = express.Router();

router.post("/joingroup", protectRoute, joingroup);

router.post("/creategroup", protectRoute, creategroup);

router.get("/getgroups", protectRoute, getgroups);

router.get("/getmembers", protectRoute, getmembers);

router.get("/getmygroup", protectRoute, getmygroup);

export default router;
