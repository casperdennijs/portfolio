/* import { render } from "./modules/render.js"; */
import { browser, explorer } from "./modules/windows.js";

const browserBtn = document.querySelector("footer nav > button:first-child")
const explorerBtn = document.querySelector("footer nav > button:nth-child(2)")

/* render(); */

browserBtn.addEventListener("click", browser)
explorerBtn.addEventListener("click", explorer)


