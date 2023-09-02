let colorStatus = document.getElementById("bg-container")

let setColor = document.getElementById("current-color")

let currentColor = window.getComputedStyle(colorStatus, null).getPropertyValue("background-color")

setColor.value = currentColor

let statusElement = document.getElementById("copy-status")

let change_button = document.getElementById("clickme-button")

let copyButton = document.getElementById("copy-to-clipboard")


copyButton.addEventListener("click", function(){

    statusElement.innerHTML = "";
    statusElement.style.display = 'none'

    let getTextValue = document.getElementById("current-color")

    let textToCopy = getTextValue.value


    navigator.clipboard.writeText(textToCopy).then(() => {
       
        const createStatus = document.createElement("p") 
        createStatus.textContent = "The Code has been successfully copied to the clipboard!"

       statusElement.appendChild(createStatus)
       statusElement.style.display = 'block'

       setTimeout(() => {
        statusElement.innerHTML = "";
        statusElement.style.display = 'none'
      }, 1500); // 

    })
    .catch(() => {
        alert("Something went wrong, please refresh the page")
    });

})

const radioRgb = document.querySelector('input[name="color-profile"][value="rgb"]')
const radioHex = document.querySelector('input[name="color-profile"][value="hex"]')

change_button.addEventListener("click", function() {

    if (radioRgb.checked) {
        changeColors_rgb()
    } else if (radioHex.checked) {
        changeColors_Hex()
    }

})


function changeColors_Hex() {

    const randomHex = Math.floor(Math.random() * 0xffffff).toString(16)

    let hexCode = '#'+randomHex

    colorStatus.style.backgroundColor = hexCode   
    setColor.value = hexCode
}

function changeColors_rgb() {

    let red = Math.floor(Math.random() * 256)
    let green = Math.floor(Math.random() * 256)
    let blue = Math.floor(Math.random() * 256)

    let rgbCode =  `rgb(${red},${green},${blue})`

    colorStatus.style.backgroundColor = rgbCode  
    setColor.value = rgbCode
}


