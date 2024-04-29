document.addEventListener("DOMContentLoaded", function() {
    const headContainer = document.createElement("head");
    headContainer.innerHTML = `
    <title>Théo Guyard</title>
    <link rel="stylesheet" href="styles.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap" rel="stylesheet">
    `;
    document.querySelector("head").appendChild(headContainer);
});

document.addEventListener("DOMContentLoaded", function() {
    const headerContainer = document.createElement("div");
    headerContainer.classList.add("container");
    headerContainer.innerHTML = `
        <h1>Théo Guyard</h1>
        <nav>
            <ul>
                <li><a href="index.html">About</a></li>
                <li><a href="resume.html">Resume</a></li>
                <li><a href="publications.html">Publications</a></li>
                <li><a href="talks.html">Talks</a></li>
                <li><a href="teaching.html">Teaching</a></li>
                <li><a href="softwares.html">Softwares</a></li>
            </ul>
        </nav>
    `;
    document.querySelector("header").appendChild(headerContainer);
});

document.addEventListener("DOMContentLoaded", function() {
    const footerContainer = document.createElement("div");
    footerContainer.classList.add("container");
    footerContainer.innerHTML = `<p>&copy; 2024 Théo Guyard. All rights reserved.</p>`;
    document.querySelector("footer").appendChild(footerContainer);
});

let CedricHerzet = document.getElementsByName("CedricHerzet")
for (let i = 0; i < CedricHerzet.length; i++) {
    CedricHerzet[i].innerHTML = "<a class='hidelink' href='https://people.rennes.inria.fr/Cedric.Herzet/Cedric.Herzet/Main.html'>Cédric Herzet</a>";
}

let ClementElvira = document.getElementsByName("ClementElvira")
for (let i = 0; i < ClementElvira.length; i++) {
    ClementElvira[i].innerHTML = "<a class='hidelink' href='https://c-elvira.github.io/'>Clément Elvira</a>";
}

let AyseArslan = document.getElementsByName("AyseArslan")
for (let i = 0; i < AyseArslan.length; i++) {
    AyseArslan[i].innerHTML = "<a class='hidelink' href='https://www.researchgate.net/profile/Ayse-Arslan-7'>Ayşe-Nur Arslan</a>";
}

let GillesMonnoyer = document.getElementsByName("GillesMonnoyer")
for (let i = 0; i < GillesMonnoyer.length; i++) {
    GillesMonnoyer[i].innerHTML = "<a class='hidelink' href='https://www.researchgate.net/profile/Gilles-Monnoyer'>Gilles Monnoyer</a>";
}

let JamesLedoux = document.getElementsByName("JamesLedoux")
for (let i = 0; i < JamesLedoux.length; i++) {
    JamesLedoux[i].innerHTML = "<a class='hidelink' href='http://ledoux.perso.math.cnrs.fr/'>James Ledoux</a>";
}

let JeremyOmer = document.getElementsByName("JeremyOmer")
for (let i = 0; i < JeremyOmer.length; i++) {
    JeremyOmer[i].innerHTML = "<a class='hidelink' href='https://jeremyomer.wixsite.com/recherche'>Jérémy Omer</a>";
}

let INSA = document.getElementsByName("INSA")
for (let i = 0; i < INSA.length; i++) {
    INSA[i].innerHTML = "<a class='hidelink' href='https://www.groupe-insa.fr'>INSA</a>";
}

let INRIA = document.getElementsByName("INRIA")
for (let i = 0; i < INRIA.length; i++) {
    INRIA[i].innerHTML = "<a class='hidelink' href='https://www.inria.fr/fr'>INRIA</a>";
}

let CentraleSupelec = document.getElementsByName("CentraleSupelec")
for (let i = 0; i < CentraleSupelec.length; i++) {
    CentraleSupelec[i].innerHTML = "<a class='hidelink' href='https://www.centralesupelec.fr/'>CentraleSupélec</a>";
}

let INSAGM = document.getElementsByName("INSAGM")
for (let i = 0; i < INSAGM.length; i++) {
    INSAGM[i].innerHTML = "<a class='hidelink' href='https://www.groupe-insa.fr/preparer/nos-formations/ingenieur/mathematiques-appliquees-1'>INSA's Mathematics Department</a>";
}

let ENSAI = document.getElementsByName("ENSAI")
for (let i = 0; i < ENSAI.length; i++) {
    ENSAI[i].innerHTML = "<a class='hidelink' href='https://ensai.fr'>ENSAI</a>";
}

let IRMAR = document.getElementsByName("IRMAR")
for (let i = 0; i < IRMAR.length; i++) {
    IRMAR[i].innerHTML = "<a class='hidelink' href='https://irmar.univ-rennes1.fr'>IRMAR</a>";
}

let MyGitHub = document.getElementsByName("MyGitHub")
for (let i = 0; i < MyGitHub.length; i++) {
    MyGitHub[i].innerHTML = "<a class='hidelink' href='https://github.com/TheoGuyard'>GitHub</a>";
}

let ROADEF = document.getElementsByName("ROADEF")
for (let i = 0; i < ROADEF.length; i++) {
    ROADEF[i].innerHTML = "<a class='hidelink' href='https://www.roadef.org'>ROADEF</a>";
}

let SMAIMODE = document.getElementsByName("SMAIMODE")
for (let i = 0; i < SMAIMODE.length; i++) {
    SMAIMODE[i].innerHTML = "<a class='hidelink' href='http://smai.emath.fr'>SMAI-MODE</a>";
}
