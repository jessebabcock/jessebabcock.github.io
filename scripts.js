

document.addEventListener('DOMContentLoaded', function (){
    document.querySelectorAll(".image-set").forEach(function (element){
        console.log(element, element.querySelector(".info"));

        element.addEventListener('mouseenter', function(){
            var infoBubble = element.querySelector(".info");
            infoBubble.style.visibility = 'hidden';
        });

        element.addEventListener('mouseleave', function(){
            element.querySelector(".info").style.visibility = 'visible';
        });

    });
});