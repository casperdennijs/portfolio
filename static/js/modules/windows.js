import { dragElement } from "./draggable.js";
import { render } from "./render.js";

let browserStatus = 0;
let explorerStatus = 0;
let pdfViewerStatus = 0;
let mp4ViewerStatus = 0;

export function browser() {
    const main = document.querySelector("body > main");
    if (browserStatus == 0) {
        const browser = document.createElement("browser");
        main.appendChild(browser);
        browser.insertAdjacentHTML('beforeend', `
            <header>
                <img src="./static/img/internet-icon.png" alt="Internet Explorer icon">
                <p>Internet Explorer</p>
                <button></button>
            </header>
            <main>
                <viewer>
                    <user>
                    </user>
                    <repos>
                        <h2>Repositories</h2>
                    </repos>
                </viewer>
            </main>
        `);
        dragElement(browser);
        render();
        let closeButton = document.querySelector("browser > header button");
        closeButton.addEventListener('click', () => {
            const browser = document.querySelector("browser");
            browser.remove();
            browserStatus = 0;
        })
        browserStatus = 1;
    } else {
        const browser = document.querySelector("browser");
        browser.remove();
        browserStatus = 0;
    }
}

export function explorer() {
    const main = document.querySelector("body > main");
    if (explorerStatus == 0) {
        const explorer = document.createElement("explorer");
        main.appendChild(explorer);
        explorer.insertAdjacentHTML('beforeend', `
            <header>
                <img src="./static/img/file-explorer-icon.png" alt="File Explorer icon">
                <p>File Explorer</p>
                <button></button>
            </header>
            <main>
                <file>
                    <img src="./static/img/pdf-icon.png" alt="PDF icon">
                    <p>CV.pdf</p>
                </file>
                <file title="Open at own risk! You have been warned!">
                    <img src="./static/img/mp4-icon.png" alt="MP4 icon">
                    <p>t0p_s3cr3t.mp4</p>
                </file>
            </main>
        `);
        dragElement(explorer);
        let pdfBtn = document.querySelector("explorer main file:first-child")
        pdfBtn.addEventListener("click", pdfViewer)
        let mp4Btn = document.querySelector("explorer main file:nth-of-type(2)")
        mp4Btn.addEventListener("click", mp4Viewer)
        let closeButton = document.querySelector("explorer > header button");
        closeButton.addEventListener('click', () => {
            const explorer = document.querySelector("explorer");
            explorer.remove();
            explorerStatus = 0;
        })
        explorerStatus = 1;
    } else {
        const explorer = document.querySelector("explorer");
        explorer.remove();
        explorerStatus = 0;
    }
}

export function pdfViewer() {
    const main = document.querySelector("body > main");
    if (pdfViewerStatus == 0) {
        const pdfViewer = document.createElement("pdfViewer");
        main.appendChild(pdfViewer);
        pdfViewer.insertAdjacentHTML('beforeend', `
            <header>
                <img src="./static/img/pdf-icon.png" alt="PDF icon">
                <p>CV.pdf</p>
                <button></button>
            </header>
            <main>
                <iframe src="./static/pdf/cv.pdf">
            </main>
        `);
        dragElement(pdfViewer);
        let closeButton = document.querySelector("pdfViewer > header button");
        closeButton.addEventListener('click', () => {
            const pdfViewer = document.querySelector("pdfViewer");
            pdfViewer.remove();
            pdfViewerStatus = 0;
        })
        pdfViewerStatus = 1;
    } else {
        const pdfViewer = document.querySelector("pdfViewer");
        pdfViewer.remove();
        pdfViewerStatus = 0;
    }
}

export function mp4Viewer() {
    const main = document.querySelector("body > main");
    if (mp4ViewerStatus == 0) {
        const mp4Viewer = document.createElement("mp4Viewer");
        main.appendChild(mp4Viewer);
        mp4Viewer.insertAdjacentHTML('beforeend', `
            <header>
                <img src="./static/img/mp4-icon.png" alt="MP4 icon">
                <p>t0p_s3cr3t.mp4</p>
                <button></button>
            </header>
            <main>
                <video autoplay>
                    <source src="./static/video/t0p_s3cr3t.mp4" type="video/mp4">
                </video>
            </main>
        `);
        const video = document.querySelector("mp4Viewer main video")
        video.volume = 0.5;
        dragElement(mp4Viewer);
        let closeButton = document.querySelector("mp4Viewer > header button");
        closeButton.addEventListener('click', () => {
            const mp4Viewer = document.querySelector("mp4Viewer");
            mp4Viewer.remove();
            mp4ViewerStatus = 0;
        })
        mp4ViewerStatus = 1;
    } else {
        const mp4Viewer = document.querySelector("mp4Viewer");
        mp4Viewer.remove();
        mp4ViewerStatus = 0;
    }
}

export function systemWelcome() {
    const main = document.querySelector("body > main");
    const welcome = document.createElement("welcome");
    main.appendChild(welcome);
    welcome.insertAdjacentHTML('beforeend', `
        <header>
            <img src="./static/img/windows-icon.png" alt="Windows icon">
            <p>Welcome</p>
            <button></button>
        </header>
        <main>
            <img src="./static/img/welcome.gif" alt="Baby Yoda welcome gif">
        </main>
    `);
        
    const popupSound = new Audio('./../../static/audio/popup.mp3');
    popupSound.volume = 1;
    popupSound.play();
    dragElement(welcome);
    let closeButton = document.querySelector("welcome > header button");
    closeButton.addEventListener('click', () => {
        const welcome = document.querySelector("welcome");
        welcome.remove();
    })
}