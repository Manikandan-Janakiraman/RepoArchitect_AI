import axios from "axios";

export const analyzeRepo = async (req, res) => {
  try {
    const { repoUrl } = req.body;

    if (!repoUrl) {
      return res.status(400).json({ error: "Repository URL required" });
    }

    const parts = repoUrl.replace("https://github.com/", "").split("/");
    const owner = parts[0];
    const repo = parts[1];

    const githubRes = await axios.get(
      `https://api.github.com/repos/${owner}/${repo}/contents`,
      {
        headers: {
          Authorization: `token ${process.env.GITHUB_TOKEN}`,
        },
      }
    );

    const files = githubRes.data.map((item) => item.name);

    let dependencies = {};

    try {
      const packageRes = await axios.get(
        `https://api.github.com/repos/${owner}/${repo}/contents/package.json`,
        {
          headers: {
            Authorization: `token ${process.env.GITHUB_TOKEN}`,
          },
        }
      );

      const content = Buffer.from(
        packageRes.data.content,
        "base64"
      ).toString();

      const packageJson = JSON.parse(content);
      dependencies = packageJson.dependencies || {};
    } catch {
      dependencies = {};
    }

    const deps = Object.keys(dependencies);

    const detected = {
      frontend: deps.includes("react") ? "React" : "Unknown",
      backend: deps.includes("express") ? "Express" : "Unknown",
      database: deps.includes("mongoose")
        ? "MongoDB"
        : deps.includes("mysql")
        ? "MySQL"
        : "Unknown",
    };

    res.json({
      frontend: {
        folderStructure: files,
        dependencies: dependencies,
      },
      backend: {
        dependencies: dependencies,
      },
      database: detected.database,
      flow: "Client → Server → Database",
      futureIdeas:
        "Add authentication, testing, Docker support, and CI/CD pipeline.",
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};