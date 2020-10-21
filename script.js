window.onload = function(){
    let x = document.querySelector("#my-nav-menu");
    document.querySelector("#menu").onclick = function(){
         x.classList.toggle('responsive');
    }

    //For Portfolio
    openTab(event, 'All');
    document.querySelector(".header-middle").classList.toggle('_active');
    document.querySelector(".logo").classList.toggle('_active');
}


function openTab(evt, cityName) {
    var tabcontent = document.getElementsByClassName("tabcontent");
    for (var i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    var tablinks = document.getElementsByClassName("tablinks");
    for (var i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    document.getElementById(cityName).style.display = "grid";
    evt.currentTarget.className += " active";
}

function scrollTo(element, x) {
    if (x === 'up') {
        window.scroll({
            left: 0,
            top: -element.offsetTop, 
            behavior: 'smooth'
        });
    } else if (x === 'down') {
        window.scroll({
            left: 0,
            top: element.offsetTop, 
            behavior: 'smooth'
        });
    } 
   
}
var button = document.querySelector(".next-part");
button.addEventListener('click', () => {
    scrollTo(document.querySelector(".about-us"), 'down');
})

var button1 = document.querySelector(".up-button");
button1.addEventListener('click', () => {
    scrollTo(document.querySelector(".header-wrapper"), 'up');
})


window.addEventListener('scroll', function() {
    var val = window.pageYOffset;
    val = 50+(val / 5);
    document.querySelector('.header').style.backgroundPositionY = val + '%';
  });