const { v4: uuid } = require("uuid");
const fs = require("fs");
const path = require("path");

// Define __dirname for CommonJS
const dirCodes = path.join(__dirname, "codes");

const generateFile = async (lang, code) => {
  const jobid = uuid();
  console.log(jobid);
  //   return jobid;
};

module.exports = { generateFile };
