import express from "express";
import { validateContact } from "../Middlewares/Contact.middleware.js";
import { submitContactForm } from "../Controllers/Contact.page.controller.js";


const router=express.Router();

router.post("/contact",validateContact,submitContactForm);

export default router;

