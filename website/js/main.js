/*************VARIABLES************/
var date = new Date(); 

var day = date.getDate();
var month = date.getMonth() + 1;
var year = date.getFullYear(); 

var dayStr = day.toString();
var monthStr = month.toString(); 
var yearStr = year.toString();

var contact = document.querySelector("#contact-section .image-container");

var width = window.innerWidth;
var height = window.innerHeight;

var button_menu_open = document.querySelector("nav .icon-open");
var button_menu_close = document.querySelector("nav .icon-close");
var open_menu = document.querySelector("header nav .menu-container");
/***********************************/

/************DATE VALIDATION*********/
if (dayStr.length < 2) {
    dayStr = '0' + dayStr;
}
if (monthStr.length < 2) {
    monthStr = '0' + monthStr;
}
/************************************/

console.log(dayStr); 
console.log(monthStr);
console.log(yearStr);
console.log(yearStr + '-' + monthStr + '-' + dayStr)

/*******INNER HTML*********/
var info = document.querySelector("#book form .information-container");
    
info.innerHTML += "<label for='date-book'><input type='date' id='date-book' required min='" + yearStr + '-' + monthStr + '-' + dayStr + "'></label>" 
/**************************/

/********SCROLL REVEAL*****/
ScrollReveal().reveal(contact, {reset: true, delay: 500, origin: 'bottom'});
/**************************/

/*********OPEN MENU********/
button_menu_open.addEventListener("click", function (){
    open_menu.classList.add("show");
    button_menu_open.classList.add("show");
    button_menu_close.classList.add("show");
});

button_menu_close.addEventListener("click", function (){
    open_menu.classList.remove("show");
    button_menu_open.classList.remove("show");
    button_menu_close.classList.remove("show");
});
/**************************/


