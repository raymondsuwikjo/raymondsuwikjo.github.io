
let colorStatus = document.getElementById("bg-container")

let setColor = document.getElementById("current-color")

let currentColor = window.getComputedStyle(colorStatus, null).getPropertyValue("background-color")

setColor.innerText = currentColor

document.getElementById("clickme-button").addEventListener("click", changeColors_Hex)

function changeColors_Hex() {

    const randomHex = Math.floor(Math.random() * 0xffffff).toString(16)

    let hexCode = '#'+randomHex

    colorStatus.style.backgroundColor = hexCode   
    setColor.innerText = hexCode 
}







