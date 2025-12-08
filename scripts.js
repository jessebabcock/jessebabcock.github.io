document.querySelectorAll(".image-set").forEach(function (element){
    element.addEventListener('mouseenter', function(){
        const infoBubble = element.querySelector(".info");
        infoBubble.style.visibility = 'hidden';
    });

    element.addEventListener('mouseleave', function(){
        element.querySelector(".info").style.visibility = 'visible';
    });
});

