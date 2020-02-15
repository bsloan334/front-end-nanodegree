var h1 = document.querySelector('h1');
var p = document.createElement('p');
p.innerText = "this is cool";
console.log(p)
h1.addEventListener('click', function(){
    h1.appendChild(p);
})