import express from "express";
import { joingroup, creategroup, getgroups, getmembers, getmygroup, leaveGroup } from "../controllers/group.controller.js"
import protectRoute from "../middleware/protectRoute.js";
const router = express.Router();

router.post("/joingroup", protectRoute, joingroup);

router.post("/creategroup", protectRoute, creategroup);

router.get("/getgroups", protectRoute, getgroups);

router.post("/getmembers", protectRoute, getmembers);

router.get("/getmygroup", protectRoute, getmygroup);

router.get("/leavegroup", protectRoute, leaveGroup);

export default router;
