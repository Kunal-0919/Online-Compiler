const { v4: uuid } = require("uuid");
const fs = require("fs");
const path = require("path");

const dirCodes = path.join(__dirname, "codes"); // this is just the path

if (!fs.existsSync(dirCodes)) {
  // if there does not exist make a folder on the path dirCodes named -> codes
  fs.mkdirSync(dirCodes, { recursive: true }); // what does recursive true means
}

const generateFile = async (lang, code) => {
  const jobid = uuid();
  // console.log(jobid);
  // console.log(dirCodes);
  // now the codes folder is generated now
  //  we need to make codefiles inside this folder based on the language and paste the code inside it
  // why do we need to create a unique string -> we need a unique name for the file and a new process need to be assigned that
  const fileName = `${jobid}.${lang}`; // cpp, java, py, whatever
  // where do we want to store this file
  // inside the codes folder
  const filePath = path.join(dirCodes, fileName);
  if (!fs.existsSync(filePath)) fs.writeFileSync(filePath, code);
  else generateFile(lang, code);
  return filePath;
};

module.exports = { generateFile };
