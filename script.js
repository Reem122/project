var preloader = document.querySelector(".preloader");
var page = document.querySelector(".page");
var nav = document.querySelector("nav");
var navLink = document.querySelectorAll(".nav-link")
var biList = document.querySelector(".bi-list");
var icon = document.querySelector(".nav-logo");
var navItems = document.querySelector("nav .col-7");
var main = document.querySelector("main");
var h1 = document.querySelector("h1");
var layer = document.querySelector(".layer");
var download = document.querySelector(".download");

window.onload = function(){
        preloader.classList.replace("d-flex", "d-none");
        page.classList.replace("d-none", "d-block");
}

window.onscroll = function(){
    if(window.scrollY >= 50){
        nav.classList.replace("nav-trans", "nav-white");
        icon.setAttribute("src", "images/ipec-b.png");
        biList.style.color = "black";
    }
    else{
        nav.classList.replace("nav-white", "nav-trans");
        icon.setAttribute("src", "images/ipec-w.png");    
        biList.style.color = "white";
    }
}

var counter = 0;
function clickList(){
    biList.classList.toggle("bi-x");
    nav.classList.toggle("bg-white");
    biList.classList.toggle("text-black");
    counter++;
    if(counter == 1){
        icon.setAttribute("src", "images/ipec-b.png");
    }
    else{
        if(window.scrollY >= 50){
            icon.setAttribute("src", "images/ipec-b.png");
        }
        else{
            icon.setAttribute("src", "images/ipec-w.png");    
        }
        counter = 0;
    }
}