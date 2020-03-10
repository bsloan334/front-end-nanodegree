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

/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 
function addTopButton(){
    var body = document.querySelector("body")
    var navbar = document.querySelector("nav")
    var count = 0
    document.addEventListener("scroll", function() {
        if (count < 1) {
            var top = document.createElement("a")
            if (window.scrollY != 0){
                top.href = "#"
                top.textContent = "Top"
                top.style.position = "fixed"
                top.style.top = String(navbar.offsetHeight) + "px"
                top.classList.add("likeabutton")
                top.style.padding = "5px"
                top.style.margin = "5px"
                top.style.fontSize = "20px"
                body.appendChild(top)
            }
            count++
        }
        if (window.scrollY == 0 && count != 0) {
            body.lastChild.remove()
            count = 0
        }
        if (count < 1) {
            top.addEventListener("click", function(){
            this.remove()
            nav.scrollIntoView()
            })
        }
        
    })
}

document.addEventListener("load", addTopButton())


// Scroll to section on link click

links.forEach((link) => {
    link.addEventListener("click", function() {
        var targetID = this.getAttribute("value")
        var target = document.querySelector("#" + targetID)
        target.scrollIntoView({behavior: "smooth"})
        
    })
})

// Set sections as active
var sections = document.querySelectorAll(".section")
sections.forEach((section) => {
    section.addEventListener("mouseenter", function(){        
        this.classList.toggle("activeSection")
    })
    section.addEventListener("mouseleave", function(){
        this.classList.toggle("activeSection")
    })
})