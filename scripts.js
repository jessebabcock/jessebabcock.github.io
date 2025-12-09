function catPositionCalc(){
    const catPic = document.getElementById("cat_container");
    //absolute regex banger
    // grabs filepath name '/personal_website/index.html' -> index
    let fileName = window.location.pathname.split(new RegExp('.*[\/]+([^.]*)'))[1].toString();
    if (fileName === ''){
        fileName = 'index';
    }
    const navButton = document.getElementById(fileName);

    //center cat on buttons
    catPic.style.left = (navButton.offsetLeft + navButton.offsetWidth / 2 - catPic.offsetWidth / 2).toString() + "px";
    catPic.style.top = (navButton.offsetTop - 40).toString() + "px";
}


document.querySelectorAll(".image-set").forEach(function (element){
    element.addEventListener('mouseenter', function(){
        const infoBubble = element.querySelector(".info");
        infoBubble.style.visibility = 'hidden';
    });

    element.addEventListener('mouseleave', function(){
        element.querySelector(".info").style.visibility = 'visible';
    });
});

document.addEventListener("DOMContentLoaded", function() {
    window.addEventListener('resize', catPositionCalc);
    catPositionCalc();
});




