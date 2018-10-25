/**
 * Author: Marcel Dufol
 * DAW2
 * 2018-19
 */
/*When the page is load, the function "start()" is called */
window.addEventListener('load', start, false);
/** First and main function where everything starts **/
function start() {
    //Function that starts a countdown from the sceonds you send (C)
    countdown(7); 
    //save button with id = "inp" in var = "btn"
    let btn = document.getElementById("inp"); 
    // When the button with id="btn" is clicked
    // the function "main()" is called
    btn.addEventListener("click", (e: Event) => this.main(), false);
}

/**
 *  "main()" is a function that compares the number wrote in the input text
 *  with a number generated with the function "rdnInt()"
 */ 
function main() {

    // Generate a number between 0 and 10 (both included) (A)
    var rnd = rdnInt(0, 10); 
    //Get the value inside the input text
    var txt = (<HTMLInputElement>document.getElementById('text')).value; 
    var div = window.document.getElementById('ej3');
    /**
     * If the number generated ramdomly("rdn") is equal to the number that the user wrote("txt")
     */
    if (Number(txt) == rnd) {
        div.innerHTML += " The number matched <br> ";
        div.innerHTML += " Number entered: " + txt;
        div.innerHTML += " Random number: " + rnd + " <br> ";
        window.close();
    } //If not
    else {
        div.innerHTML += " The number doesn't matched <br> ";
        div.innerHTML += " Number entered: " + txt;
        div.innerHTML += " Random number: " + rnd + " <br> ";
    }
}
/* This fuction starts a countdown begining from the second you send (C) */ 
function countdown(seconds) {
    var counter = seconds;
    var div = window.document.getElementById('cd');
    var interval = setInterval(() => {
        div.innerHTML = counter; // Write every second in a div
        counter--;
        if (counter < 0) {
            clearInterval(interval);
            window.close(); // When the counter = 0 the window is closed (C)
        };
    }, 1000);
};
/* Here is just a random number generator with integer numbers (A) */ 
function rdnInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
