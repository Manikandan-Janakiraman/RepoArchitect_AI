// import express from "express";
// import cors from "cors";
// import dotenv from "dotenv";
// import axios from "axios";
// import unzipper from "unzipper";
// import fs from "fs-extra";
// import path from "path";
// import { GoogleGenerativeAI } from "@google/generative-ai";
// import analyzeRoute from "./routes/analyzeRoute.js";


// dotenv.config();

// const app = express();
// app.use(cors());
// app.use(express.json());

// app.use("/api/analyze", analyzeRoute);

// const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
// const model = genAI.getGenerativeModel({
//   model: "gemini-1.5-flash-latest",
// });

// app.post("/api/analyze", async (req, res) => {
//   try {
//     const { repoUrl } = req.body;

//     if (!repoUrl) {
//       return res.status(400).json({ message: "Repo URL required" });
//     }

//     // Extract owner and repo name
//     const match = repoUrl.match(/github\.com\/([^\/]+)\/([^\/]+)/);

//     if (!match) {
//       return res.status(400).json({ message: "Invalid GitHub URL" });
//     }

//     const owner = match[1];
//     const repo = match[2].replace(".git", "");

//     const zipUrl = `https://github.com/${owner}/${repo}/archive/refs/heads/main.zip`;

//     const zipPath = "./repo.zip";
//     const extractPath = "./extracted";

//     // Download ZIP
//     const response = await axios({
//       url: zipUrl,
//       method: "GET",
//       responseType: "stream",
//     });

//     await new Promise((resolve, reject) => {
//       response.data
//         .pipe(fs.createWriteStream(zipPath))
//         .on("finish", resolve)
//         .on("error", reject);
//     });

//     // Extract ZIP
//     await fs.createReadStream(zipPath)
//       .pipe(unzipper.Extract({ path: extractPath }))
//       .promise();

//     // Read files
//     function readFiles(dir) {
//       let content = "";
//       const files = fs.readdirSync(dir);

//       for (const file of files) {
//         const filePath = path.join(dir, file);
//         const stat = fs.statSync(filePath);

//         if (stat.isDirectory()) {
//           content += readFiles(filePath);
//         } else if (
//           file.endsWith(".js") ||
//           file.endsWith(".jsx") ||
//           file.endsWith(".ts") ||
//           file.endsWith(".json")
//         ) {
//           content += fs.readFileSync(filePath, "utf8") + "\n";
//         }
//       }

//       return content;
//     }

//     const codeText = readFiles(extractPath).slice(0, 15000);

//     const prompt = `
// You are a senior full stack architect.
// Analyze this project and explain:

// - Folder Structure
// - API Flow
// - Database
// - Authentication
// - Business Logic

// Code:
// ${codeText}
// `;

//     const result = await model.generateContent(prompt);
//     const text = result.response.text();

//     res.json({
//       folderStructure: text,
//       apiFlow: text,
//       database: text,
//       auth: text,
//       businessLogic: text,
//     });

//   } catch (error) {
//     console.error("FULL ERROR:", error);
//     res.status(500).json({ error: error.message });
//   }
// });

// app.listen(5000, () => console.log("Server running on port 5000"));

// app.get("/", (req, res) => {
//   res.send("Backend Working");
// });


// app.get("/test", async (req, res) => {
//   try {
//     const result = await model.generateContent("Explain React useEffect");
//     res.json({ result: result.response.text() });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: error.message });
//   }
// });

import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";
import analyzeRoutes from "./routes/analyzeRoute.js";


const app = express();

app.use(cors()); // Important
app.use(express.json());

app.use("/api", analyzeRoutes);

app.get("/", (req, res) => {
  res.send("Backend Working ✅");
});


// console.log("API Key:", process.env.OPENAI_API_KEY ? "YES" : "NO");

app.listen(5000, () => console.log("Server running on port 5000"));


// http://localhost:5000/api/