document.getElementById("toggle").addEventListener("click", function(event) {
    event.preventDefault();
    document.getElementById("nav-header").classList.toggle("open");
    document.getElementById("body").classList.toggle("overflow-hidden");
});
var currentScrollTop = window.pageYOffsed || document.body.scrollTop;
var lastScrollTop = 0;
window.addEventListener("scroll", function() {
   var currentScroll = window.pageYOffset || document.body.scrollTop;
    if (currentScroll > lastScrollTop) {
        console.log("down");
    } else {
        console.log("up");
    }
    lastScrollTop = currentScroll;
});
    else {
        document.getElementById("nav-header").classList.add("header-in");
        document.getElementById("nav-header").classList.add("solid");
        document.getElementById("nav-header").style.opacity = 1;
    }
    if (currentScroll <= 3) {
        document.getElementById("nav-header").classList.remove("solid");
        document.getElementById("nav-header").classList.remove("header-in");
    }
    if (currentScroll > lastScrollTop) {
    document.getElementById("nav-header").classList.remove("header-in");
    document.getElementById("nav-header").style.opacity = 0;
} else {
    (lastScrollTop = currentScroll;
    }, false);
document.getElementById("toggle").addEventListener("click", function(event) {
    event.preventDefault();
    document.getElementById("header").classList.toggle("open");
    document.getElementById('body').classList.toggle("overflow-hidden");
});