import { Octokit } from "https://cdn.skypack.dev/@octokit/rest";
import { token } from "./config.js";

const octokit = new Octokit({
    auth: token
});

export const { data } = await octokit.request("/user");