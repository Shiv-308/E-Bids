
import express from "express";
import verifyToken from "../Middlewares/jwt.js";
import allowRoles from "../Middlewares/rolesverify.js";
import { Signup, Login } from "../controllers/User.js";
import { postRequirement } from "../controllers/Requirement.js";
import { createBids } from "../controllers/Bids.js";
const Router = express.Router();

Router.post('/Signup', Signup);
Router.post('/Login', Login);

Router.post('/requirement', verifyToken, allowRoles("buyer"), postRequirement)
Router.post('/bids', verifyToken, allowRoles("seller"), createBids)

export default Router;
