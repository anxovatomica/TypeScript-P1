/**
 * Author: Marcel Dufol
 * DAW2
 * 2018-19
 */
/*When the page is load, the function "start()" is called */
window.addEventListener('load', start, false);
/** First and main function where everything starts **/
function start() {
    muestraMSN(); //Function that shows the mesages
    let btn = document.getElementById("btn");
    let btn2 = document.getElementById("play");
    btn.addEventListener("click", (e: Event) => this.ej2(), false);
    btn2.addEventListener("click", (e: Event) => this.ej3(), false);
}
/**
 * This function shows a list of properties (EX1)
 */
function muestraMSN() {
    var i = new Date();
    var i2 = new Date(2018, 3, 26, 17, 15);
    let miDiv = window.document.getElementById('listaPropiedades');
    miDiv.innerHTML +=
        "<ol>" +
        "<li>" + " Maximum number: " + Number.MAX_VALUE + "</li>" +
        "<li>" + " Minimum number: " + Number.MIN_VALUE + "</li>" +
        "<li>" + " Screen height: " + screen.height + "</li>" +
        "<li>" + " Screen width: " + screen.width + "</li>" +
        "<li>" + " Window inner height: " + window.innerHeight + "</li>" +
        "<li>" + " Window inner width: " +  window.innerWidth + "</li>" +
        "<li>" + " URL: " + document.URL + "</li>" +
        "<li>" + " Title: " + document.title + "</li>" +
        "<li>" + " Random number between 0 and 200: " + Math.random() * 201 + "</li>" +
        "<li>" + " OS: " + navigator.platform + "</li>" +
        "<li>" + " Today's date: " +i + "</li>" +
        "<li>" + " Concrete date(17:15h): " +i2 + "</li>" +
        "</ol>";
}

var num = []; // Number's array
var char = []; //Text's array
/**
 * Here is where the result is showed in a div (EX2)
 */
function ej2() {

    //Get the div and save itin "div"
    let div = window.document.getElementById('div2');
    
    // Get the value inside the input and save it in "value"
    var value = (<HTMLInputElement>document.getElementById('inp')).value; 
    
    // If "value" is a number
    if (!isNaN(Number(value))) {
        if (num.length == 0) { // If its the first value
            div.innerHTML = "First value ;) <br>";
            num[0] = value;
        } else if ( num[0] > value) { // If its not the first value and text entered is smaller than the previous
            div.innerHTML = "Smaller <br>";
            num[0] = value;
        } else if (num[0] < value) {// If its not the first value and text entered is bigger than the previous
            div.innerHTML = "Bigger <br>"
            num[0] = value;
        } else {// If its not any of the previuos conditions it must be equal
            div.innerHTML = "Equal <br>"
        }
    } else{ // If its not a number
        if(char.length == 0){ // And its the first value entered
            char[0] = value;
        }else{
            // If not and the text entered is longer than the previous one
            if(char[0].length < value.length ){
                div.innerHTML += "The text entered is Longer <br>";
                char[0] = value;
            // If not and the text entered is shorter than the previous one
            }else if(char[0].length > value.length ){
                div.innerHTML += "The text entered is Shorter <br>";
                char[0] = value;
            // If the text entered is equal than the previous one
            }else if(char[0].length == value.length ){
                div.innerHTML += "The text entered is Equal <br>";
                char[0] = value;
            }
        }
    }
}
// Function that opens "play.html" in a new window (EX3)
function ej3(){
    var newWindow = window.open('/Practica1-TypeScript/play.html'); // (B)
}