let chrono_sec = document.querySelector('.chrono_sec')
let chrono_min = document.querySelector('.chrono_min')
let chrono_hour = document.querySelector('.chrono_hour')
let chrono_millisec = document.querySelector('.chrono_millisec')
let cont_rst = document.querySelector('.container_rst')
let elem_rst = document.querySelector('.rst')
const start = document.querySelector('button:nth-child(1)')
const stopp = document.querySelector('button:nth-child(2)')
const reset = document.querySelector('button:nth-child(3)')
const save = document.querySelector('button:nth-child(4)')

let sec = 0;
let milli_sec = 0;
let min = 0;
let hour = 0;
let rst = 0;
let rste = 0;
let norepeat = true;
let nocreate = false;
var timer;


function stop_chrono() {
    clearInterval(timer)
    save_rst()
    norepeat = true
    stopp.classList.add('hidden')
    save.classList.add('hidden')
    start.classList.remove('hidden')
    reset.classList.remove('hidden')
    cont_rst.classList.remove('hidden')
}

function start_chrono() {
    if (norepeat === true) {
        timer = window.setInterval(function() {
            // MilliSecondes
            milli_sec++;
            chrono_millisec.innerHTML = '0' + milli_sec
            if (milli_sec >= 10)
                chrono_millisec.innerHTML = milli_sec
            if (milli_sec > 98) {
                sec++;
                milli_sec = 0
            }
            // Secondes
            chrono_sec.innerHTML = '0' + sec
            if (sec >= 10)
                chrono_sec.innerHTML = sec
            if (sec > 58) {
                min++;
                sec = 0
            }
            // Minutes
            chrono_min.innerHTML = '0' + min
            if (min >= 10)
                chrono_min.innerHTML = min
            if (min > 58) {
                hour++;
                hour = 0
            }
            // Heures
            chrono_hour.innerHTML = '0' + hour
            if (hour >= 10)
                chrono_hour.innerHTML = hour
            if (hour > 58)
                clearInterval(timer)

        }, 10)
        norepeat = false;
    }
    stopp.classList.remove('hidden')
    save.classList.remove('hidden')
    start.classList.add('hidden')
    reset.classList.add('hidden')
    if (cont_rst.contains('p') === true)
        cont_rst.classList.remove('hidden')
    else
        cont_rst.classList.add('hidden')

}



function reset_chrono() {
    milli_sec = 0;
    sec = 0;
    min = 0;
    hour = 0;
    chrono_millisec.innerHTML = '0' + sec
    chrono_sec.innerHTML = '0' + sec
    chrono_min.innerHTML = '0' + min
    chrono_hour.innerHTML = '0' + min

    stopp.classList.add('hidden')
    save.classList.add('hidden')
    start.classList.remove('hidden')
    reset.classList.add('hidden')
    cont_rst.classList.add('hidden')

    let p = document.querySelectorAll('.container_rst p')
    for (let k = 0; k <= p.length; k++)
        p[k].remove()
}


function save_rst() {
    let rst = chrono_hour.innerHTML + ' : ' + chrono_min.innerHTML + ' : ' + chrono_sec.innerHTML + ' . ' + chrono_millisec.innerHTML
    let p = document.createElement('p')
    p.innerHTML = rst
    elem_rst.appendChild(p)

    cont_rst.classList.remove('hidden')
}