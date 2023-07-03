// BURGER MENU
const burgerBtn = document.querySelector('.menu-btn');
let burgerOpen = false;

const menuRoll = document.querySelector('.menu');

burgerBtn.addEventListener('click', () => {
    if(!burgerOpen){
        burgerBtn.classList.add('open');
        menuRoll.classList.add('open');
        burgerOpen = true;
    } else {
        burgerBtn.classList.remove('open');
        menuRoll.classList.remove('open');
        burgerOpen = false;
    }
});

// STICKED WHEN SCROLL
window.addEventListener("scroll", function(){
    var getSticky = document.querySelector("header");
    getSticky.classList.toggle("sticked", window.scrollY > 1)
});

// MOVE IN LEFT
function onEntry(entry) {
    entry.forEach(change => {
      if (change.isIntersecting) {
       change.target.classList.add('move-in-show');
      }
    });
}
let optionsL = {threshold: [0.35]};
let observerL = new IntersectionObserver(onEntry, optionsL);
let elementsL = document.querySelectorAll('.move-in-left');
  
for (let elm of elementsL) {
    observerL.observe(elm);
}
// MOVE IN RIGHT
function onEntry(entry) {
    entry.forEach(change => {
      if (change.isIntersecting) {
       change.target.classList.add('move-in-show');
      }
    });
}
let optionsR = {threshold: [0.35]};
let observerR = new IntersectionObserver(onEntry, optionsR);
let elementsR = document.querySelectorAll('.move-in-right');
  
for (let elm of elementsR) {
    observerR.observe(elm);
}

// PROJECTS BUTTONS
var activeButton = 0;
var countButtons = document.getElementById("project-buttons").childElementCount;
function invertIcon(buttonOrder) {
    let takeButton = document.querySelector("#project-buttons > button:nth-child(" + buttonOrder +")");
    let takeIcon = document.querySelector("#project-buttons > button:nth-child(" + buttonOrder +") > i");
    let takeProject = document.querySelector("#project-images > div:nth-child(" + buttonOrder +")"); 
    
    if (activeButton == buttonOrder) {
        takeIcon.classList.remove('inverted');
        takeButton.classList.remove('active');
        takeProject.classList.remove('visible');
        activeButton = 0;
    } else {
        takeIcon.classList.add('inverted');
        takeButton.classList.add('active');
        takeProject.classList.add('visible');
        activeButton = buttonOrder;
    }
    
    for (var j=countButtons; j>0; j--) {
        if (j != buttonOrder) {
            let makeMeNormal = document.querySelector("#project-buttons > button:nth-child(" + j +") > i");
            makeMeNormal.classList.remove('inverted');
            let makeMeInactive = document.querySelector("#project-buttons > button:nth-child(" + j +")");
            makeMeInactive.classList.remove('active');
            let makeMeHidden = document.querySelector("#project-images > div:nth-child(" + j +")"); 
            makeMeHidden.classList.remove('visible');   
        } 
    }
}
// Shuffle language logos
var imgWidth = document.querySelector("#languages-wrap > div > img").offsetWidth;
function changeMyPosition(number) {
    let moveMe = document.querySelector("#languages-wrap > div:nth-child(" + number +") > img:nth-child(2)");
    moveMe.style.transform = "translateX("+ imgWidth/(4/3) +"px) rotateY(360deg) translateY(-"+ imgWidth*(6/5) +"px)";
}
function returnMe(number) {
    let moveMe = document.querySelector("#languages-wrap > div:nth-child(" + number +") > img:nth-child(2)");
    moveMe.style.transform = "translateX( 0px) rotateY(0deg) translateY(0px)";
}

