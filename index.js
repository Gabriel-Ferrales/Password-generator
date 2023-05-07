const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

// Variables to place the generated passwords
let passwordOne = document.getElementById("password-one")
let passwordTwo = document.getElementById("password-two")

// Generates random number to index the characters array
function number(){
    let random = Math.floor(Math.random() * characters.length)
    return random
}

// Creates password by given input length
function password() {
    let howLong = document.getElementById("p-length").value
    let pass = ""
    if (howLong > 0) {
        for (let i = 0; i < howLong; i++) {
            let index = number()
            pass += characters[index]
        }
        return pass
    } else {
        return null
    }
}

// Display hidden copy buttons
function showButtons() {
    let buttons = document.querySelectorAll(".copy")
    buttons[0].style.display = "block"
    buttons[1].style.display = "block"
}

// Hide buttons again when no input given
function hideButtons() {
    let buttons = document.querySelectorAll(".copy")
    buttons[0].style.display = "none"
    buttons[1].style.display = "none"
}

// Calls functions to display the passwords
function generate() {
    passwordOne.textContent = password()
    passwordTwo.textContent = password()
    // Check if passwords exist to generate the buttons
    if (passwordOne.textContent.length > 0 && passwordTwo.textContent.length > 0) {
        showButtons()
    } else {
        hideButtons()
    }
}

// Copy password one to clipboard
function copyP1() {
    // get the container
    const element = document.querySelector('#password-one');
    // Create a fake `textarea` and set the contents to the text
    // you want to copy
    const storage = document.createElement('textarea');
    storage.value = element.innerHTML;
    element.appendChild(storage);
  
    // Copy the text in the fake `textarea` and remove the `textarea`
    storage.select();
    storage.setSelectionRange(0, 99999);
    document.execCommand('copy');
    element.removeChild(storage);
  }

// Copy password two to clipboard
function copyP2() {
    // get the container
    const element = document.querySelector('#password-two');
    // Create a fake `textarea` and set the contents to the text
    // you want to copy
    const storage = document.createElement('textarea');
    storage.value = element.innerHTML;
    element.appendChild(storage);
  
    // Copy the text in the fake `textarea` and remove the `textarea`
    storage.select();
    storage.setSelectionRange(0, 99999);
    document.execCommand('copy');
    element.removeChild(storage);
}



