// console.log(document.querySelector('.pic').firstElementChild)
// console.log(document.querySelector('.pic').lastElementChild)





let next_img = function() {
    let img_current = document.querySelector('.current')
    let img_next;

    if (!(img_current.nextElementSibling)) {
        img_next = document.querySelector('.pic').firstElementChild
    } else {
        img_next = img_current.nextElementSibling
    }

    img_current.classList.add("hidden")
    img_current.classList.remove("current")

    img_next.classList.remove("hidden")
    img_next.classList.add("current")
}

let previous_img = function() {
    let img_current = document.querySelector('.current')
    let img_previous;

    if (!(img_current.previousElementSibling)) {
        img_next = document.querySelector('.pic').lastElementChild
    } else {
        img_next = img_current.previousElementSibling
    }

    img_current.classList.add("hidden")
    img_current.classList.remove("current")

    img_next.classList.remove("hidden")
    img_next.classList.add("current")
}

let timer;
let norepeat = null;

let play = function() {
    let play = document.querySelector('.fa-play')
    let pause = document.querySelector('.fa-pause')

    play.style.color = '#27ae60'
    pause.style.color = 'black'
    if (!norepeat) {
        timer = window.setInterval(function() {
            next_img();
            norepeat = true;
        }, 1000)
    }

}

let pause = function() {
    let play = document.querySelector('.fa-play')
    let pause = document.querySelector('.fa-pause')

    play.style.color = 'black'
    pause.style.color = '#c0392b'
    norepeat = null;
    clearInterval(timer)
}

window.addEventListener('keydown', keyboard_next_prev_img)

function keyboard_next_prev_img(key) {
    if (key.keyCode === 39)
        next_img();
    if (key.keyCode === 37)
        previous_img();
}