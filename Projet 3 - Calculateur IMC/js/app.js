let result_imc = document.querySelector('.rst_imc')
let result_cat = document.querySelector('.rst_cat')
let container_rst = document.querySelector('.container_rst')
let container_imc = document.querySelector('.container_imc')
let IMC;
let cat;

function getIMC() {
    let poids = document.getElementById("poids").value
    let taille = document.getElementById("taille").value * 0.01
    container_rst.classList.add('hidden')

    if (container_imc.lastChild.innerHTML !== undefined) {
        let last_child = container_imc.lastChild
        last_child.remove()
    }



    if (is_error(poids, taille) !== false) {
        let error = is_error(poids, taille);
        let p = document.createElement('p')
        p.classList.add('error')
        p.innerHTML = 'Erreur: ' + error
        container_imc.appendChild(p)
    } else {
        container_rst.classList.remove('hidden')
        IMC = Math.round((poids / (taille * taille)) * 10) / 10
        cat = get_cat(IMC);
        result_imc.innerHTML = 'Votre IMC est de ' + IMC + ' kg/m2';
        result_cat.innerHTML = cat;
    }


}

function get_cat(IMC) {
    if (IMC < 16)
        return "Anorexie ou dénutrition";
    if (IMC >= 16.5 && IMC < 18.5)
        return "Maigreur";
    if (IMC >= 18.5 && IMC < 25)
        return "Corpulence normale";
    if (IMC >= 25 && IMC < 30)
        return 'Surpoids';
    if (IMC >= 30 && IMC < 35)
        return 'Obésité modérée (Classe 1)';
    if (IMC >= 35 && IMC < 40)
        return 'Obésité modérée (Classe 2)';
    if (IMC >= 40)
        return 'Obésité morbide ou massive';
}

function is_error(poids, taille) {
    if (poids <= 30)
        return "Veuillez rentrer un poids supérieur à 30 kg ";
    else if (poids >= 250)
        return "Veuillez rentrer un poids inférieur à 250 kg ";

    if (taille <= 0.5)
        return "Veuillez rentrer une taille supérieur à 50 cm";
    else if (taille >= 2.5)
        return "Veuillez rentrer une taille inférieur à 250 cm ";
    return false;
}