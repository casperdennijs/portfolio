export function getTime() {
    const timeElement = document.querySelector("footer info time");
    let today = new Date();
    let time = today.getHours() + ":" + ('0' + today.getMinutes()).slice(-2);
    
    timeElement.textContent = time;
}