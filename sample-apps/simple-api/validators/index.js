const { body, validationResult } = require("express-validator");

function validator(req, res, next) {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const message = Array.from(
      new Set(errors.array().map((err) => `${err.msg}`))
    ).join(", ");
    const error = new Error(message);
    error.status = 400;
    return next(error);
  }
  return next();
}

module.exports.meetingValidator = [
  body("title").notEmpty().withMessage("meeting title must not be empty"),
  validator,
];
