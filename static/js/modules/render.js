/* import { user, repos } from "./fetch.js";
const body = document.querySelector("body");

export function render() {
    const avatar = document.createElement("img")
    avatar.src = user.data.avatar_url;
    body.appendChild(avatar)

    const name = document.createElement("p")
    name.textContent = user.data.name;
    body.appendChild(name)

    const username = document.createElement("p")
    username.textContent = user.data.login;
    body.appendChild(username)

    const unorderedList = document.createElement("ul")
    body.appendChild(unorderedList);
    for (let i = 0; i < repos.data.length; i++) {
        const repo = document.createElement("li")
        const link = document.createElement("a")
        link.textContent = repos.data[i].name;
        link.href = repos.data[i].html_url;
        link.target = "_blank";
        repo.appendChild(link);
        unorderedList.appendChild(repo);
    }
} */