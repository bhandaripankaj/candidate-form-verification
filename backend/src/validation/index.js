
const Joi = require('joi');


const candidateSchema = Joi.object({
    firstName: Joi.string().required(),
    lastName: Joi.string().required(),
    email: Joi.string().email().required(),
    dob: Joi.string().required(),
    residentialAddress: Joi.object().required(),
    permanentAddress: Joi.object(),
    documents: Joi.array().items(
      Joi.object({
        fileName: Joi.string().required(),
        fileType: Joi.string().required(),
        file: Joi.binary().required(),
      })
    ),
  });


  const validateCandidate = (req, res, next) => {
    const { error } = candidateSchema.validate(req.body);
    if (error) {
      return res.status(400).json({ error: error.details[0].message });
    }
    next();
  };

  module.exports = validateCandidate