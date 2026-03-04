import fs from "fs";
import path from "path";

export const readProjectFiles = (dirPath) => {
  let allCode = "";

  const readDir = (folder) => {
    const files = fs.readdirSync(folder);

    files.forEach((file) => {
      const fullPath = path.join(folder, file);
      const stat = fs.statSync(fullPath);

      if (stat.isDirectory()) {
        readDir(fullPath);
      } else if (
        file.endsWith(".js") ||
        file.endsWith(".jsx") ||
        file.endsWith(".ts") ||
        file.endsWith(".json")
      ) {
        const content = fs.readFileSync(fullPath, "utf8");
        allCode += `\n\n// FILE: ${fullPath}\n${content}`;
      }
    });
  };

  readDir(dirPath);
  return allCode;
};