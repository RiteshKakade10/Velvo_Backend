import Contact from "../models/Contact.js";

export const submitContactForm = async (req, res) => {
  try {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ error: "All fields are required" });
    }

    const newContact = new Contact({
      Name: name,
      Email: email,
      Message: message,
    });

    await newContact.save();

    res.status(201).json({
      message: "Message saved successfully!",
    });
  } catch (error) {
    console.error("Error handling contact form:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
