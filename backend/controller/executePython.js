const fs = require("fs");
const path = require("path");

const dirOutputs = path.join(__dirname, "outputs");

if (!fs.existsSync(dirOutputs)) {
  fs.mkdirSync(dirOutputs, { recursive: true });
}

const executePython = (filePath) => {
  console.log("executePython");
};

module.exports = { executePython };
