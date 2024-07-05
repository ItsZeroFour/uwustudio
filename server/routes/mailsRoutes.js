import express from "express";
import { sendQuizMail } from "../controllers/MailsControllers.js";
import { sendMail } from "../controllers/MailsControllers.js";

const router = express.Router();

router.post("/sendQuizMail", sendQuizMail);
router.post("/sendMail", sendMail);

export default router;
