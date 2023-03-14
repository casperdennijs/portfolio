import { dragElement } from "./draggable.js";
import { render } from "./render.js";

const main = document.querySelector("body > main");

let browserStatus = 0;
let explorerStatus = 0;
let pdfViewerStatus = 0;

export function browser() {
    if (browserStatus == 0) {
        const browser = document.createElement("browser");
        main.appendChild(browser);
        browser.insertAdjacentHTML('beforeend', `
            <header>
                <img src="./static/img/github-icon.png" alt="GitHub icon">
                <p>casperdennijs (Casper) - Google Chrome</p>
                <button></button>
            </header>
            <main>
                <header>
                    <form>
                        <input type="text" value="https://github.com/casperdennijs">
                        <input type="submit" value="">
                    </form>
                </header>
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
            </main>
        `);
        dragElement(explorer);
        let pdfBtn = document.querySelector("explorer main file:first-child")
        pdfBtn.addEventListener("click", pdfViewer)
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
                <p>CV.pdf - PDF Viewer</p>
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