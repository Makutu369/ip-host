const z = require("zod");

const schema = z.string().ip();

const validate = (value) => {
  try {
    const result = schema.parse(value);
    return;
  } catch (e) {
    return e;
  }
};
module.exports = validate;
