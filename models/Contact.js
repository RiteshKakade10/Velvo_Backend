// models/Contact.js
import mongoose from "mongoose";

const contactSchema = new mongoose.Schema({
  Name: {
    type: String,
    required: true,
  },
  Email: {
    type: String,
    required: true,
  },
  Message: {
    type: String,
    required: true,
  },
});

export default mongoose.model("Contact", contactSchema);
