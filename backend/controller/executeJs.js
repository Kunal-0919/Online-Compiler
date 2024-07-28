const fs = require("fs");
const path = require("path");
const { exec } = require("child_process");

const executeJs = async (filePath) => {
  return new Promise((res, rej) => {
    exec(`node "${filePath}"`, (error, stdout, stderr) => {
      if (error) return rej({ error, stderr });
      if (stderr) return rej({ error, stderr });
      res(stdout);
    });
  });
};

module.exports = { executeJs };
