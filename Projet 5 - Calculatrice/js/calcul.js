let rst = document.querySelector('.rst')
let rst_temp = document.querySelector('.rst_temp')
let temp_som = 0;
let new_som = 0;
let somme = 0;

function print_nb(txt) {
    let nb = txt.innerText;

    if (rst.innerText.length <= 18) {
        if (rst.innerText.length === 1 && rst.innerText.includes('0')) {
            rst.innerText = '';
            rst.innerText += nb;
        } else if (nb === '.' && rst.innerText.includes('.'))
            alert('Vous avez déjà placé un point !')
        else
            rst.innerText += nb;
    } else
        alert('Vous avez atteint la taille max !')

}

function reset_rst_c() {
    rst_temp.innerText = '0';
    rst.innerText = '0';
}

function reset_rst_ce() {
    rst.innerText = '0';
}

function calcul(signe_btn) {
    let signe = rst.innerText.charAt(0) // SIGNE DANS LE RST

    console.log('taille : ' + rst.innerText.length)
    console.log('rst : ' + rst.innerText)
    console.log('signe : ' + signe)
    if (rst.innerText.length === 1 && (rst.innerText === '-' || rst.innerText === '-' || rst.innerText === '-' || rst.innerText === '-'))
        alert('Vous avez déjà entré un signe, cliquez sur CE pour annuler votre action')
    else if (rst.innerText.length === 1 && rst.innerText === '0')
        alert('Veuillez rentrer un nombre')
    else {
        if (!(rst.innerText.includes(signe_btn.innerText)) && rst_temp.innerText === '0') {
            rst_temp.innerText = rst.innerText
            rst.innerText = signe_btn.innerText
        } else {
            temp_som = parseFloat(rst_temp.innerText)
            somme = somme_fin(signe, temp_som)
            rst_temp.innerText = somme
            rst.innerText = signe_btn.innerText
        }
    }


}

function equal() {
    temp_som = parseFloat(rst_temp.innerText)

    let signe = rst.innerText.charAt(0)
    somme = somme_fin(signe, temp_som)
    console.log(somme)
    rst.innerText = somme
}

let somme_fin = function(signe, temp_som) {

    if (signe.includes('+')) {
        new_som = parseFloat(rst.innerText.replace('+', ''))
        somme = temp_som + new_som
    }
    if (signe.includes('-')) {
        new_som = parseFloat(rst.innerText.replace('-', ''))
        somme = temp_som - new_som
    }
    if (signe.includes('*')) {
        new_som = parseFloat(rst.innerText.replace('*', ''))
        somme = temp_som * new_som
    }
    if (signe.includes('/')) {
        new_som = parseFloat(rst.innerText.replace('/', ''))
        somme = temp_som / new_som
    }
    return somme;
}