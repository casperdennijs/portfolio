import { dragElement } from "./draggable.js";
import { render } from "./render.js";

const main = document.querySelector("body > main");

let browserStatus = 0;
let explorerStatus = 0;
let pdfViewerStatus = 0;
let mp4ViewerStatus = 0;

export function browser() {
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
                <file>
                    <img src="./static/img/mp4-icon.png" alt="MP4 icon">
                    <p>t0p_s3cr3t.mp4</p>
                </file>
            </main>
        `);
        dragElement(explorer);
        let pdfBtn = document.querySelector("explorer main file:first-child")
        pdfBtn.addEventListener("click", pdfViewer)
        let mp4Btn = document.querySelector("explorer main file:first-child")
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
                <iframe src="./static/pdf/cv.pdf">
            </main>
        `);
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