import express from "express";
import protectRoute from "../middleware/protectRoute.js";
import { updateTime, getTime, addTask, getUserAvatar } from "../controllers/user.controller.js"
const router = express.Router();

router.post("/updatetime", protectRoute, updateTime);

router.get("/gettime", protectRoute, getTime);

router.post("/addtask", protectRoute, addTask);

router.get("/getavatar", protectRoute, getUserAvatar);


export default router;