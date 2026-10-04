
import express from "express";
import { Signup } from "../Routes/SignUp.js";

const Router = express.Router();

Router.post('/Signup', Signup);

export default Router;