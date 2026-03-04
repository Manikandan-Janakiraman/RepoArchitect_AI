import { get } from "axios";

const response = await get(
  `https://api.github.com/repos/${owner}/${repo}`,
  {
    headers: {
      Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
    },
  }
);