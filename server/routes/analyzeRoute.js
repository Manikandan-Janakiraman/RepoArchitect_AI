// import express from "express";
// import axios from "axios";
// import unzipper from "unzipper";
// import fs from "fs";
// import path from "path";
// import { model } from "../utils/geminiClient.js"
// import { readProjectFiles } from "../utils/extractFiles.js";

// const router = express.Router();

// router.post("/", async (req, res) => {
//   try {
//     const { repoUrl } = req.body;

//     if (!repoUrl) {
//       return res.status(400).json({ message: "Repo URL required" });
//     }


//     let cleanUrl = repoUrl.replace(".git", "").trim();

//     // Convert GitHub URL to ZIP URL
//     // const zipUrl = repoUrl
//     //   .replace("github.com", "codeload.github.com")
//     //   .replace("/tree/main", "")
//     //   + "/zip/refs/heads/main";
//     const zipUrl = cleanUrl
//       .replace("github.com", "codeload.github.com")
//       + "/zip/refs/heads/main";

//     const zipPath = `uploads/repo_${Date.now()}.zip`;
//     const extractPath = `uploads/extracted_${Date.now()}`;

//     // Download ZIP
//     const response = await axios({
//       method: "GET",
//       url: zipUrl,
//       responseType: "stream",
//     });

//     const writer = fs.createWriteStream(zipPath);
//     response.data.pipe(writer);

//     await new Promise((resolve, reject) => {
//       writer.on("finish", resolve);
//       writer.on("error", reject);
//     });

//     fs.mkdirSync(extractPath);

//     await fs
//       .createReadStream(zipPath)
//       .pipe(unzipper.Extract({ path: extractPath }))
//       .promise();

//     const codeContent = readProjectFiles(extractPath);
//     const trimmedCode = codeContent.slice(0, 15000);

//     const prompt = `
// Analyze this MERN project and return JSON:

// {
//   "folderStructure": "",
//   "apiFlow": "",
//   "database": "",
//   "auth": "",
//   "businessLogic": ""
// }

// Project Code:
// ${trimmedCode}
// `;

//     const aiResponse = await model.generateContent(prompt);
//     const resultText = aiResponse.response.text();

//     res.json(JSON.parse(resultText));
//   } catch (error) {
//     console.error("FULL ERROR:", error);
//     res.status(500).json({
//       message: "Error analyzing project",
//       error: error.message,
//     });
//   }
// });

// export default router;

import express from "express";
import { analyzeRepo } from "../controllers/analyzeController.js";


const router = express.Router();

router.post("/analyze", analyzeRepo);

export default router;

// http://localhost:5000/api/analyze