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


// Scroll to anchor ID using scrollTO event
var links = document.querySelectorAll(".links")
console.log(links)
links.forEach((link) => {
    link.addEventListener("click", function() {
        var targetID = this.getAttribute("value")
        // console.log(typeof(targetID))
        // console.log(typeof(link))
        var target = document.querySelector("#" + targetID)
        console.log(target)
        // target.scrollTo({
        //     top: 100,
        //     left: 100,
        //     behavior: "smooth"
        // })
        target.scrollTo(target)
        
    })
})


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active
