var timeControlEl = document.querySelector('.parent');
var timeCursorEl = document.querySelector('.profile-pic');

var windowHeight = window.innerHeight;
var scrollAnim;

var animationPXOffset = (timeControlEl.offsetWidth - (timeControlEl.parentNode.offsetWidth - 20)) / 2;
if (animationPXOffset < 0) animationPXOffset = 0;

var timelineAnimation = anime.timeline({
    easing: 'linear',
    autoplay: false
})
    .add({
        targets: timeControlEl,
        translateX: [animationPXOffset, -animationPXOffset],
        duration: 1500
    }, 0)
    .add({
        targets: timeCursorEl,
        translateZ: 0,
        keyframes: [
            { translateY: [-24, 0], duration: 100, easing: 'easeInQuad' },
            { translateX: 1080, duration: 1500 },
            { translateY: -24, duration: 100, easing: 'easeOutQuad' }
        ],
        duration: 1500
    }, -100)

var time = {
    anim: null,
    start: 0,
    end: 0
};

function moveControlAnimation() {
    var rect = timeControlEl.getBoundingClientRect();
    var top = rect.top;
    var height = rect.height;
    var scrolled = (top - windowHeight + 100) * -1.5;
    timelineAnimation.seek(scrolled * 2);
    if (true) scrollAnim = requestAnimationFrame(moveControlAnimation);
}

isElementInViewport(timeControlEl, function (el, entry) {
    windowHeight = window.innerHeight;
    controlAnimationCanMove = true;
    moveControlAnimation();
}, function (el, entry) {
    controlAnimationCanMove = false;
}, '50px');

onScroll(function () {
    if (time.anim && !time.anim.paused) {
        time.anim.pause();
        controlAnimationCanMove = true;
        moveControlAnimation();
    }
});
