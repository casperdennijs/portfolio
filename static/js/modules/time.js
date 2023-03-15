const timeElement = document.querySelector("time");

export function getTime() {
    let today = new Date();
    let time = today.getHours() + ":" + ('0' + today.getMinutes()).slice(-2);
    
    timeElement.textContent = time;
}