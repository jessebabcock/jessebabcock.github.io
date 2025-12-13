function catPositionCalc(){
    const catPic = document.getElementById("cat_container");
    //absolute regex banger
    //grabs filepath name '/personal_website/index.html' -> index
    let fileName = window.location.pathname.split(new RegExp('.*[\/]+([^.]*)'))[1].toString();
    if (fileName === ''){
        fileName = 'index';
    }
    const navButton = document.getElementById(fileName);

    //center cat on buttons
    catPic.style.left = (navButton.offsetLeft + navButton.offsetWidth / 2 - catPic.offsetWidth / 2).toString() + "px";
    catPic.style.top = (navButton.offsetTop - 40).toString() + "px";
    if (fileName === 'index'){
        fileName = 'home'
    }
    document.getElementById("purple_cat").alt = "purple cat sitting above the " + fileName + " button";
}


document.querySelectorAll(".image-set").forEach(function (element){
    element.addEventListener('mouseenter', function(){
        const infoBubble = element.querySelector(".info");
        infoBubble.style.visibility = 'hidden';
    });

    element.addEventListener('focus', function(){
        const infoBubble = element.querySelector(".info");
        infoBubble.style.visibility = 'hidden';
    });

    element.addEventListener('mouseleave', function(){
        if (!(document.activeElement === element)){
            element.querySelector(".info").style.visibility = 'visible';
        }
    });

    element.addEventListener('focusout', function(){
        document.activeElement.blur();
        element.querySelector(".info").style.visibility = 'visible';
    });
});

//CSS initializing z-index = 2 shows as <empty string> for some reason
const colorModeButton = document.getElementById("color_mode");
const flower = colorModeButton.firstElementChild;
flower.style.zIndex = "2";

const theme = ["--color-main", "--color-secondary", "--color-tertiary", "--color-nav-font"];
const fragrantTheme = ["--fragrant-main", "--fragrant-secondary", "--fragrant-tertiary", "--fragrant-nav-font"];
const waveTheme = ["--wave-main", "--wave-secondary", "--wave-tertiary", "--wave-nav-font"];

colorModeButton.addEventListener('click', function(){
    flower.style.zIndex = (flower.style.zIndex ^ 2).toString();
    let target = fragrantTheme;
    if (parseInt(flower.style.zIndex) !== 2){
        target = waveTheme;
    }
    for(let i = 0; i < theme.length; i++){
        document.documentElement.style.setProperty(theme[i], "var(" + target[i] + ")");
    }
});

document.addEventListener("DOMContentLoaded", function() {
    window.addEventListener('resize', catPositionCalc);
    catPositionCalc();
});




