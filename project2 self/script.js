console.clear();
var bars = document.querySelector("header img");
const navLink = document.querySelector("header ul");
console.log(navLink);
bars.addEventListener("click", function(){
    navLink.classList.toggle("show");
    setTimeout(() => {
        navLink.classList.toggle("showw");
    }, 150);

});