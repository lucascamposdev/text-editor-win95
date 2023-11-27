
// Desktop & Toggle Window 
document.querySelector('.app header').addEventListener("dblclick", maximize)
function maximize(){
    const maximizeButton = document.querySelector('.fa-window-maximize')
    const maximizeButtonContainer = document.querySelector('.maximize-btn-container')
    const closeButton = document.querySelector('.fa-xmark')
    const windowApp = document.querySelector('.app')

    windowApp.classList.toggle('biggerScreen')
    maximizeButton.classList.toggle('biggerIcon')
    closeButton.classList.toggle('biggerIcon')
    maximizeButtonContainer.classList.toggle('selectedButton')
}

function closeApp(){
    const windowApp = document.querySelector('.app-container')

    windowApp.classList.toggle('closeApp')
}

// Variables
let optionsButtons = document.querySelectorAll(".option-button");
let advancedOptionButton = document.querySelectorAll(".adv-option-button");
let linkButton = document.getElementById("createLink");

let fontName = document.getElementById("fontName");
let fontSizeRef = document.getElementById("fontSize");


let fontList = [
    "Arial",
    "Verdana",
    "Times New Roman",
    "Garamond",
    "Georgia",
    "Courier New",
    "Cursive",
];

// App Functions
const initializer = ()=>{

    fontList.forEach((e)=>{
        let option = document.createElement('option')
        option.classList.add('select-option')
        option.value = e
        option.innerHTML = e

        fontName.appendChild(option)
    })

    for (let i = 1; i <= 7; i++) {
        let option = document.createElement('option')
        option.classList.add('select-option')
        option.value = i
        option.innerHTML = i

        fontSizeRef.appendChild(option)
    }
}

const modifyText = (command, defaultUi, value) => {
    document.execCommand(command, defaultUi, value);
};

optionsButtons.forEach((button) => {
    button.addEventListener("click", () => {
        modifyText(button.id, false, null);
    });
});

advancedOptionButton.forEach((button) => {
    button.addEventListener("change", () => {
        modifyText(button.id, false, button.value);
    });
});

linkButton.addEventListener("click", () => {
    let userLink = prompt("Enter a URL?");
    if (/http/i.test(userLink)) {
        modifyText(linkButton.id, false, userLink);
    } else {
        userLink = "http://" + userLink;
        modifyText(linkButton.id, false, userLink);
    }
});


window.onload = initializer();