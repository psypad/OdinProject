document.write("<h2>External script file starts here:</h2>")

document.write("<p>hello from inside main.js</p>");

window.addEventListener("click", () => {
    alert(("you clicked!"));
});

let button = document.getElementById("b1");
let guess = document.querySelector('.guesses');
let count = 0;

button.addEventListener("click", ()  =>{
    count = count + 1;
    let text = "you clicked on the button " + count + " times";
    guess.textContent = text;
    
});