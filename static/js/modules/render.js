import { user, repos } from "./fetch.js";

export function render() {
    const users = document.querySelector("browser main viewer user")
    const repositories = document.querySelector("browser main viewer repos");
    
    const avatar = document.createElement("img")
    avatar.src = user.data.avatar_url;
    users.appendChild(avatar)

    const name = document.createElement("p")
    name.textContent = user.data.name;
    users.appendChild(name)

    const username = document.createElement("p")
    username.textContent = user.data.login;
    users.appendChild(username)

    const bio = document.createElement("p")
    bio.textContent = user.data.bio;
    users.appendChild(bio)

    const button = document.createElement("a")
    button.href = "https://github.com/casperdennijs";
    button.target = "_blank";
    button.textContent = "View profile on GitHub";
    users.appendChild(button)

    const follow = document.createElement("p")
    follow.innerHTML = "<span>" + user.data.followers + "</span> followers · <span>" + user.data.following + "</span> following" ;
    users.appendChild(follow)

    for (let i = 0; i < repos.data.length; i++) {
        const repository = document.createElement("repo");
        repositories.appendChild(repository);
        repository.insertAdjacentHTML('beforeend', `
            <a target="_blank" href="${repos.data[i].html_url}">${repos.data[i].name}</a>
            <p>${repos.data[i].description}</p>
        `);
    }
}