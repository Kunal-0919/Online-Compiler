const express = require("express");
const dotenv = require("dotenv");
const { v4: uuid } = require("uuid");
const { generateFile } = require("./controller/generateFile.js");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

dotenv.config();

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Online Compiler");
});

app.post("/run", async (req, res) => {
  const { lang = "cpp", code } = req.body;
  if (code === undefined) {
    return res.status(500).json({ success: false, message: "Empty Code Body" });
  }
  try {
    // we are getting two things from frontend lang and code
    // we'll need to create a file containing that file using FS and
    // then copy the code inside the file
    // and use the lang create a file of that particular extension
    const pathFile = await generateFile(lang, code);
    // res.send(pathFile);
  } catch (error) {
    console.log("Error while running code: ", error.message);
    res.status(500).json({ error: "Server error" });
  }
});

app.listen(PORT, () => {
  console.log(`Server listening on PORT: ${PORT}`);
});
