const dotenv = require("dotenv");
dotenv.config();

/**
 * @description middleware to check whether the request is from authourized user or not
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 * @returns 
 */
const verifySource = (req, res, next) => {
    const expectedSource = process.env.LOGIN_SOURCE_KEY;
    const sourceHeader = req?.headers?.['login-source'];

    if(!sourceHeader){
        return res.status(400).json({ error: 'Login source key is missing from headers!' }); 
    }
  
    // Check if the header matches the expected source
    if (sourceHeader !== expectedSource) {
      return res.status(403).json({ error: 'Unauthorized source' });
    }
    next();
  };
  
  module.exports = verifySource;