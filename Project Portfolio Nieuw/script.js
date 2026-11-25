const cookieMelding = document.getElementById("cookie-melding");
const cookieButton = document.getElementById("cookieButton");
const cookieWeigeren = document.getElementById("cookieWeigeren");

if (cookieMelding && cookieButton && cookieWeigeren) {
    let cookieKeuze = localStorage.getItem("cookieKeuze");

    if (cookieKeuze !== null) {
        cookieMelding.style.display = "none";
    }

    cookieButton.addEventListener("click", function() {
        localStorage.setItem("cookieKeuze", "geaccepteerd");
        cookieMelding.style.display = "none";
    });

    cookieWeigeren.addEventListener("click", function() {
        localStorage.setItem("cookieKeuze", "geweigerd");
        cookieMelding.style.display = "none";
    });
}

function resetCookies() {
    localStorage.removeItem("cookieKeuze");
    location.reload();
}

const darkModeButton = document.getElementById("darkModeButton");

if (localStorage.getItem("darkMode") === "aan") {
    document.body.classList.add("dark-mode");
}

function updateDarkModeButton() {
    if (darkModeButton) {
        if (document.body.classList.contains("dark-mode")) {
            darkModeButton.textContent = "Lichtmodus";
        } else {
            darkModeButton.textContent = "Dark mode";
        }
    }
}

if (darkModeButton) {
    updateDarkModeButton();

    darkModeButton.addEventListener("click", function() {
        document.body.classList.toggle("dark-mode");

        if (document.body.classList.contains("dark-mode")) {
            localStorage.setItem("darkMode", "aan");
        } else {
            localStorage.setItem("darkMode", "uit");
        }

        updateDarkModeButton();
    });
}

const timer = document.getElementById("timer");

if (timer) {
    let nieuwjaar = new Date("2027-01-01T00:00:00").getTime();

    let countdown = setInterval(function() {
        let nu = new Date().getTime();
        let verschil = nieuwjaar - nu;

        if (verschil <= 0) {
            clearInterval(countdown);
            timer.textContent = "Gelukkig Nieuwjaar!";
        } else {
            let dagen = Math.floor(verschil / (1000 * 60 * 60 * 24));
            let uren = Math.floor((verschil % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            let minuten = Math.floor((verschil % (1000 * 60 * 60)) / (1000 * 60));
            let seconden = Math.floor((verschil % (1000 * 60)) / 1000);

            timer.textContent = dagen + " dagen " + uren + " uren " + minuten + " minuten " + seconden + " seconden";
        }
    }, 1000);
}

const begroetingElement = document.getElementById("begroeting");

if (begroetingElement) {
    let uur = new Date().getHours();
    let begroeting = "";

    if (uur >= 6 && uur < 12) {
        begroeting = "Goedemorgen!";
    } else if (uur >= 12 && uur < 18) {
        begroeting = "Goedemiddag!";
    } else if (uur >= 18) {
        begroeting = "Goedenavond!";
    } else {
        begroeting = "Goedenacht!";
    }

    begroetingElement.textContent = begroeting;
}

function menuOpenen() {
    const menuLinks = document.getElementById("menuLinks");

    if (menuLinks) {
        menuLinks.classList.toggle("actief");
    }
}
