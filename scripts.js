//homepage planet orbits
var system1;
var system2;
var system3;

function orbits(orbit, planet, dura){
    var path = anime.path('.solarSystem #' + orbit);
    var orbits = anime({
      targets: '.solarSystem #' + planet,
      translateX: path('x'),
      translateY: path('y'),
      rotate: path('angle'),
      easing: 'linear',
      duration: dura,
      loop: true
    });
    return orbits;
    }
    window.onload = function() {
    system1 = orbits('orbit1', 'planet1', 25000);
    system2 = orbits('orbit2', 'planet2', 90000);
    system3 = orbits('orbit3', 'planet3', 60000);
    }
    
    document.querySelector('#planet1').onmouseover  = function(){system1.pause();}
    document.querySelector('#planet1').onmouseleave = function(){system1.play();}

    document.querySelector('#planet2').onmouseover  = function(){system2.pause();}
    document.querySelector('#planet2').onmouseleave = function(){system2.play();}
    
    document.querySelector('#planet3').onmouseover  = function(){system3.pause();}
    document.querySelector('#planet3').onmouseleave = function(){system3.play();}
    
//homepage stars
particlesJS.load('particles-js', 'particles.json', function() {
    console.log('callback - particles.js config loaded');
  });

//homepage modals
var modal1 = document.querySelector('#planet1m');
var modal2 = document.querySelector('#planet2m');
var modal3 = document.querySelector('#planet3m');

var planet1 = document.querySelector('#planet1m');
var planet2 = document.querySelector('#planet2m');
var planet3 = document.querySelector('#planet3m');

planet1.onclick = function(){modal1.style.display = "block";}
window.onclick = function(event) {if (event.target == modal1) {modal1.style.display = "none";}}

planet2.onclick = function(){modal2.style.display = "block";}
window.onclick = function(event) {if (event.target == modal2) {modal2.style.display = "none";}}

planet3.onclick = function(){modal3.style.display = "block";}
window.onclick = function(event) {if (event.target == modal3) {modal3.style.display = "none";}}