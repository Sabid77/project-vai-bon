const homeNav = document.getElementById('home');
const aboutNav = document.getElementById('about');
const moreNav = document.getElementById('more');
const infoNav = document.getElementById('info');
function clickBtn() {
    homeNav.addEventListener('click', () => {
        document.getElementById('home-comp').style.display = "block";
        document.getElementById('about-comp').style.display = "none";
        document.getElementById('more-comp').style.display = "none";
        document.getElementById('info-comp').style.display = "none";
    });
    aboutNav.addEventListener('click', () => {
        document.getElementById('about-comp').style.display = "block";
        document.getElementById('home-comp').style.display = "none";        
        document.getElementById('more-comp').style.display = "none";
        document.getElementById('info-comp').style.display = "none";
    });
    moreNav.addEventListener('click', () => {
        document.getElementById('more-comp').style.display = "block";
        document.getElementById('about-comp').style.display = "none";
        document.getElementById('home-comp').style.display = "none"; 
        document.getElementById('info-comp').style.display = "none";
    });
    infoNav.addEventListener('click', () => {
        document.getElementById('info-comp').style.display = "block";
        document.getElementById('more-comp').style.display = "none";
        document.getElementById('about-comp').style.display = "none";
        document.getElementById('home-comp').style.display = "none";
    });
}
clickBtn();