const express = require("express");
const dotenv = require("dotenv");
const { v4: uuid } = require("uuid");
const { generateFile } = require("./controller/generateFile");
const { executeCpp } = require("./controller/executeCpp");
const { executePython } = require("./controller/executePython");

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
  if (!code) {
    return res.status(400).json({ success: false, message: "Empty Code Body" });
  }

  try {
    // Create file and write code to it
    const filePath = await generateFile(lang, code);
    let output;

    // Compile and run the code
    if (lang === "cpp") {
      output = await executeCpp(filePath);
    } else if (lang === "py") {
      output = await executePython(filePath);
    }

    res.json({ filePath, output, message: "success" });
  } catch (error) {
    console.log("Error while running code: ", error.message);
    res.status(500).json({ error: "Server error", details: error });
  }
});

app.listen(PORT, () => {
  console.log(`Server listening on PORT: ${PORT}`);
});
