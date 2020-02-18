// Gallerie Slider
var images = ['../Img/Image11.jpg', '../Img/Image12.jpg', '../Img/Image13.jpg', '../Img/Image14.jpg', '../Img/Image15.jpg', '../Img/Image16.jpg', '../Img/Image17.jpg', '../Img/Image18.jpg']

var imgContainer = document.getElementById('image-container');
var next = document.getElementById('next');
var prev = document.getElementById('prev');
var i = 0;

// Next slide
next.addEventListener("click", function () {
    if (i >= images.length - 1) {
        i = 0;
    } else {
        i++;
    }
    imgContainer.innerHTML = "<img class='img' src='" + images[i] + "'>";
});

// Previous slide
prev.addEventListener("click", function () {
    if (i <= 0) {
        i = images.length - 1;
    } else {
        i--;
    }
    imgContainer.innerHTML = "<img class='img' src='" + images[i] + "'>";
});

// Validation De Form

// Converter les lettres des formulaires au majuscule
var inputs = document.querySelectorAll('.uppercased');
for (var i = 0; i < inputs.length; i++) {
    inputs[i].addEventListener('keyup', function (event) {
        event.target.value = event.target.value.toUpperCase();
    });
}

// Validation de la formulaire de reservation
var submitBtn = document.getElementById("submit");
submitBtn.addEventListener('click', function (e) {
    var nom = document.getElementById("name").value;
    var prenom = document.getElementById("prenom").value;
    var email = document.getElementById("email").value;
    var telephone = document.getElementById("telephone").value;
    var dateD = document.getElementById("date1").value;
    var dateA = document.getElementById("date2").value;
    var personnes = document.getElementById("nombre-personne").value;

    var dd = new Date(dateD);
    var da = new Date(dateA);

    if (nom == '' || prenom == '' || email == '' || telephone == '' || dateD == '' || dateA == '' || personnes == '') {
        alert('Le remplissage de tout les champs est obligatoire');
    } else {
        if (!/^[a-zA-Z]+$/.test(nom) || !/^[a-zA-Z]+$/.test(prenom)) {
            alert('Le nom ou prenom doit contient que des lettres')
        } else if (email.indexOf('@') == -1) {
            alert("L'email doit etre un email valide");
        } else if (!/^[0-9]{10}$/.test(telephone)) {
            alert('Le nombre doit contient 10 chiffres')
        } else if (!/^[0-9]+$/.test(personnes)) {
            alert('Le nombre de personnes doit contient que des nombres');
        } else if (dd.getTime() > da.getTime()) {
            alert('La date de reservation doit etre superieur a la date de sortie');
        } else {
            alert('Le form est valide');
        }
    }
});

// Ouvrir La Form De Validation De Reservation
var reserverBtns = document.getElementsByClassName('reserver');
var overlay = document.getElementById('overlay');
for (var i = 0; i < reserverBtns.length; i++) {
    reserverBtns[i].addEventListener('click', function (e) {
        overlay.style.display = "block";
    });
}

// Fermer La Form De Validation De Reservation
var close = document.getElementById('close-overlay');
close.addEventListener('click', function (e) {
    overlay.style.display = "none";
});


// Validation de la formulaire d'inscription
var submitBtn = document.getElementById("insc-submit");
submitBtn.addEventListener('click', function (e) {
    var nom = document.getElementById("insc-name").value;
    var prenom = document.getElementById("insc-prenom").value;
    var email = document.getElementById("insc-email").value;
    var telephone = document.getElementById("insc-telephone").value;
    var pass = document.getElementById("insc-pass").value;
    var confPass = document.getElementById("insc-confPass").value;

    if (nom == '' || prenom == '' || email == '' || telephone == '' || pass == '' || confPass == '') {
        alert('Le remplissage de tout les champs est obligatoire');
    } else {
        if (!/^[a-zA-Z]+$/.test(nom) || !/^[a-zA-Z]+$/.test(prenom)) {
            alert('Le nom ou prenom doit contient que des lettres')
        } else if (email.indexOf('@') == -1) {
            alert("L'email doit etre un email valide");
        } else if (pass != confPass) {
            alert('La confirmation de mot de pass doit etre egale a la mot de passe');
        } else if (!/^[0-9]{10}$/.test(telephone)) {
            alert('Le nombre doit contient 10 chiffres')
        } else {
            alert('Le form est valide');
        }
    }
});

// Fermer La Form De Validation De Reservation
var inscClose = document.getElementById('insc-close-overlay');
inscClose.addEventListener('click', function (e) {
    overlay.style.display = "none";
});

// Ouvrir La Form De Validation De Reservation
var inscription = document.getElementById('inscription');
var overlay = document.getElementById('inscr-overlay');
inscription.addEventListener('click', function (e) {
    overlay.style.display = "block";
});

// Hamburger Menu
var hamburger = document.getElementById('hamburger');
var mainMenu = document.getElementById('main-menu');
hamburger.addEventListener('click', function (e) {
    var menuDisplay = mainMenu.style.display;
    if (menuDisplay == 'block') {
        mainMenu.style.display = "none";
    } else {
        mainMenu.style.display = "block";
    }
});