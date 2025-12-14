function catPositionCalc(){
    const catPic = document.getElementById("cat_container");
    //absolute regex banger
    //grabs filepath name '/personal_website/index.html' -> index
    let fileName = window.location.pathname.split(new RegExp('.*[\/]+([^.]*)'))[1];
    if (fileName === ''){
        fileName = 'index';
    }
    const navButton = document.getElementById(fileName);

    //center cat on buttons (navButton.offsetWidth / number of items * 2 for offsets)
    catPic.style.left = (navButton.offsetLeft + navButton.offsetWidth / 4 - catPic.offsetWidth / 2).toString() + "px";
    catPic.style.top = (navButton.offsetTop - 40).toString() + "px";
    if (fileName === 'index'){
        fileName = 'home'
    }
    document.getElementById("purple_cat").alt = "purple cat sitting above the " + fileName + " button";
    catPic.style.visibility = "visible";
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

//CSS initializing shows as <empty string> for some reason
const colorModeButton = document.getElementById("color_mode");
const flower = document.getElementById("flower");
const wave = document.getElementById("wave");
flower.style.zIndex = "2";
flower.style.opacity = "100";
wave.style.opacity = "0";

const theme = ["--color-main", "--color-secondary", "--color-tertiary", "--color-nav-font"];
const fragrantTheme = ["--fragrant-main", "--fragrant-secondary", "--fragrant-tertiary", "--fragrant-nav-font"];
const waveTheme = ["--wave-main", "--wave-secondary", "--wave-tertiary", "--wave-nav-font"];

const purpleCat = document.getElementById("purple_cat");
const blueCat = document.getElementById("blue_cat");
purpleCat.style.opacity = "100";
blueCat.style.opacity = "0";

colorModeButton.addEventListener('click', function(){
    flower.style.opacity = (flower.style.opacity ^ 100).toString();
    wave.style.opacity = (wave.style.opacity ^ 100).toString();
    blueCat.style.opacity = (blueCat.style.opacity ^ 100).toString();
    purpleCat.style.opacity = (purpleCat.style.opacity ^ 100).toString();

    flower.style.transition = "opacity .25s";
    wave.style.transition = "opacity .25s";
    blueCat.style.transition = "opacity .5s";
    purpleCat.style.transition = "opacity .5s";

    let target = fragrantTheme;
    if (flower.style.opacity !== "100"){
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




