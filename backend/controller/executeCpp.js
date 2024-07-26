const fs = require("fs");
const path = require("path");
const { exec } = require("child_process");

const dirOutputs = path.join(__dirname, "outputs");

if (!fs.existsSync(dirOutputs)) {
  fs.mkdirSync(dirOutputs, { recursive: true });
}

const executeCpp = async (filePath) => {
  const jobid = path.basename(filePath).split(".")[0]; // executable file to be named as cpp filename
  const output_filename = `${jobid}.out`;
  const outputPath = path.join(dirOutputs, output_filename);

  return new Promise((resolve, reject) => {
    exec(
      `g++ "${filePath}" -o "${outputPath}" && "${outputPath}"`,
      (error, stdout, stderr) => {
        if (error) {
          return reject({ error, stderr });
        }
        if (stderr) {
          return reject({ error, stderr });
        }
        resolve(stdout);
      }
    );
  });
};

module.exports = { executeCpp };
