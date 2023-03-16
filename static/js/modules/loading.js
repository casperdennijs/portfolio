import { getTime } from "./time.js";
import { browser, explorer, systemWelcome } from "./windows.js";

const body = document.querySelector("body");
const startupSound = new Audio('./../../static/audio/startup.mp3');
startupSound.volume = 0.2;

export function startLoading() {
    setTimeout(createDesktop, 3000)
}

function createDesktop() {
    body.innerHTML = "";
    body.style.backgroundImage = "url('./static/img/background.jpg')"
    body.insertAdjacentHTML("beforeend", `
        <main></main>
        <footer>
            <start>
                <button>
                    <img src="./static/img/windows-icon.png" alt="Windows XP icon">
                    <p>Start</p>
                </button>
                <menu>
                    <header>
                        <div></div>
                        <p>Administrator</p>
                    </header>
                    <main>

                    </main>
                    <footer>
                        <button></button>
                        <p>Log off</p>
                        <button></button>
                        <p>Turn off computer</p>
                    </footer>
                </menu>
            </start>
            <nav>
                <button></button>
                <button></button>
            </nav>
            <info>
                <time>00:00</time>
            </info>
        </footer>
    `)
    startupSound.play();

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

    setTimeout(systemWelcome, 5000)
}