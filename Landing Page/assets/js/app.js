// var h1 = document.querySelector('h1');
// var p = document.createElement('p');
// p.innerText = "this is cool";
// console.log(p)
// h1.addEventListener('click', function(){
//     h1.appendChild(p);
// })


/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/


var nav = document.querySelector("#navbar__list")

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/
function buildNavBar() {
    nav.parentElement.style.backgroundColor = "black"
    //nav.parentElement.style.height = "100px"
    for (var i = 0; i < 4; i++) {
        var element = document.createElement("a")
        element.setAttribute("value", "section" + (i+1))
        element.textContent = "Section " + (i+1)
        element.style.fontSize = "30px"
        element.style.padding = "10px"
        element.classList.add("links")
        nav.appendChild(element)
    }
}

function smoothScroll(element) {
    
}


/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
buildNavBar()


// Add class 'active' to section when near top of viewport
var links = document.querySelectorAll(".links")
links.forEach((link) => {
    link.addEventListener("mouseenter", function(){        
        this.classList.toggle("active")
    })
    link.addEventListener("mouseleave", function(){
        this.classList.toggle("active")
    })
})

// Scroll to anchor ID using scrollTO event



/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 
count = 0
console.log(nav.childElementCount);
var body = document.querySelector("body")
var navbar = document.querySelector("nav")
var topList = []
var top = document.createElement("a")
document.addEventListener("scroll", function() {
    console.log(top)
    if (topList.length < 1 && window.scrollY != 0){
        top.href = "#"
        top.textContent = "Top"
        top.style.position = "fixed"
        top.style.top = String(navbar.offsetHeight) + "px"
        body.appendChild(top)
        topList.push(top)
        console.log(topList.length);
    }
    
    if (window.scrollY == 0) {
            console.log("Outside if else")
            nav.lastChild.remove()
    }
    top.addEventListener("click", function(){
        this.remove()
        nav.scrollIntoView()
    })
})

// Scroll to section on link click

links.forEach((link) => {
    link.addEventListener("click", function() {
        var targetID = this.getAttribute("value")
        var target = document.querySelector("#" + targetID)
        target.scrollIntoView({behavior: "smooth"})
        
    })
})

// Set sections as active
