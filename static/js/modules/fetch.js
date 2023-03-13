import { Octokit } from "https://cdn.skypack.dev/@octokit/rest";
import { token } from "./config.js";

const octokit = new Octokit({
    auth: token
});

export const user = await octokit.request("/user");

export const repos = await octokit.request("/user/repos");

console.log(user);
console.log(repos);