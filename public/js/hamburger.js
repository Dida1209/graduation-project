
var hamburgers = document.querySelectorAll(".hamburger");

if (hamburgers.length > 0) {
    forEach(hamburgers, function(hamburger) {
        hamburger.addEventListener("click", function() {
             this.classList.toggle("is-active");
             this.parentNode.classList.toggle("active");
             console.log(this.parentNode,this.nextSibling);
             this.nextElementSibling.classList.toggle("active");
        }, false);
    });
}

