import express from 'express';
import { register, login, homepage } from "../set/account";

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.post('/hompage', homepage);

export default router;
