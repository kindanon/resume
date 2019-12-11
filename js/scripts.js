//homepage planet orbits
var system1;
var system2;
var system3;
var system0;

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
  system0 = orbits('orbit0', 'star', 1000);
}
    
document.querySelector('#planet1').onmouseover  = function(){system1.pause();}
document.querySelector('#planet1').onmouseleave = function(){system1.play();}

document.querySelector('#planet2').onmouseover  = function(){system2.pause();}
document.querySelector('#planet2').onmouseleave = function(){system2.play();}
    
document.querySelector('#planet3').onmouseover  = function(){system3.pause();}
document.querySelector('#planet3').onmouseleave = function(){system3.play();}
    
//homepage stars
particlesJS.load('particles-js', './resources/particles.json');

