import Joi from "joi";

const contactValidation = Joi.object({
  name: Joi.string().min(3).max(50).required().messages({
    "string.base": "Name must be a string",
    "string.empty": "Name is required",
    "string.min": "Name must be at least 3 characters",
    "any.required": "Name is required",
  }),
  email: Joi.string().email().required().messages({
    "string.email": "Invalid email format",
    "any.required": "Email is required",
  }),
  message: Joi.string().min(10).required().messages({
    "string.min": "Message must be at least 10 characters",
    "any.required": "Message is required",
  }),
});

export const validateContact = (req, res, next) => {
  const { error } = contactValidation.validate(req.body, { abortEarly: false });

  if (error) {
    return res.status(400).json({
      errors: error.details.map((err) => err.message),
    });
  }

  next();
};
