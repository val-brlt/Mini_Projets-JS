/*  LORSQUE ON SCROLL 
        SI le menu sort de l'écran
        ALORS il deviendra fixe
    */
let nav = document.querySelector(".nav")
let logo = document.querySelector(".logo")

let scroll_Y = function() {
    var supportPageOffset = window.pageXOffset !== undefined;
    var isCSS1Compat = ((document.compatMode || "") === "CSS1Compat");
    return supportPageOffset ? window.pageYOffset : isCSS1Compat ? document.documentElement.scrollTop : document.body.scrollTop;
}

// Pixel entre nav et top
let rect = nav.getBoundingClientRect()
top_nav = rect.top + scroll_Y();



let onScroll = function() {
    console.log(top_nav, scroll_Y())
    if (top_nav <= scroll_Y()) {
        nav.classList.add('fixed-nav')
        nav.style.paddintTop = nav.offsetHeight + 'px';
        logo.style.maxWidth = '500px';
    } else {
        nav.classList.remove('fixed-nav')
        nav.style.paddintTop = 0;
        logo.style.maxWidth = 0;
    }

}

let onResize = function() {

}

window.addEventListener('scroll', onScroll)

window.addEventListener('resize', onResize)