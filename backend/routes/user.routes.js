import express from "express";
import protectRoute from "../middleware/protectRoute.js";
import { updateTime, getTime } from "../controllers/user.controller.js"
const router = express.Router();

router.post("/updatetime", protectRoute, updateTime);

router.get("/gettime", protectRoute, getTime);


export default router;