/* import { render } from "./modules/render.js"; */
import { getTime } from "./modules/time.js";
import { browser, explorer } from "./modules/windows.js";

const startBtn = document.querySelector("footer start > button")
const startMenu = document.querySelector("footer start > menu")
const browserBtn = document.querySelector("footer nav > button:first-child")
const explorerBtn = document.querySelector("footer nav > button:nth-child(2)")

startBtn.addEventListener("click", () => {
    startMenu.classList.toggle("active");
})
browserBtn.addEventListener("click", browser)
explorerBtn.addEventListener("click", explorer)

getTime()
setInterval(getTime, 1000)


