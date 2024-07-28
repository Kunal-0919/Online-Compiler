const fs = require("fs");
const { exec } = require("child_process");
const path = require("path");
const { rejects } = require("assert");

// const dirOutputs = path.join(__dirname, "outputs");
// if (fs.existsSync(dirOutputs)) {
//   fs.mkdirSync(dirOutputs, { recursive: true });
// }

const executePython = async (filePath) => {
  // do we need jobId nope we dont need

  return new Promise((resolve, reject) => {
    exec(`python3 "${filePath}"`, (error, stdout, stderr) => {
      if (error) {
        return reject({ error, stderr });
      } else if (stderr) {
        return reject({ error, stderr });
      } else {
        resolve(stdout);
      }
    });
  });
};

module.exports = { executePython };
