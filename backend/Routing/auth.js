
import express from "express";
import verifyToken from "../Middlewares/jwt.js";
import { Signup, Login } from "../controllers/UserRoutes.js";

const Router = express.Router();

Router.post('/Signup', Signup);
Router.post('/Login', verifyToken, Login);

export default Router;
