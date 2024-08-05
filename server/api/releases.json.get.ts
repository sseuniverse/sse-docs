import { Octokit } from "@octokit/rest";

export default cachedEventHandler(
  async () => {
    if (!process.env.NUXT_GITHUB_TOKEN) {
      return [];
    }

    const octokit = new Octokit({ auth: process.env.NUXT_GITHUB_TOKEN });

    const { data: releases } = await octokit.rest.repos.listReleases({
      owner: "sseworld",
      repo: "sse-nuxt-ui",
    });

    return releases;
  },
  { maxAge: 60 * 60 }
);
