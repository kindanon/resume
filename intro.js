var right = document.querySelector('.right');
var left = document.querySelector('.left');
var timeControlEl = document.querySelector('.parent');
var timeCursorEl = document.querySelector('.profile-pic');
var width = window.innerWidth;
var windowHeight = window.innerHeight;
var scrollAnim;

var timelineAnimation = anime.timeline({
    easing: 'linear',
    autoplay: false
})
    .add({
        targets: timeCursorEl,
        keyframes: [
            { translateX: width-200, duration: 3500},
        ],
        duration: 1500
    }, -100)

    .add({
        targets: right,
        keyframes: [
            { translateX: width-200, duration: 3500},
        ],
        duration: 1500
    }, -100)

    .add({
        targets: left,
        keyframes: [
            { translateX: width-200, duration: 3500},
        ],
        duration: 1500
    }, -100)

function moveControlAnimation() {
    var rect = timeControlEl.getBoundingClientRect();
    var top = rect.top;
    var height = rect.height;
    var scrolled = (top - windowHeight + 100) * -1.5;
    timelineAnimation.seek(scrolled * 2);
    if (true) scrollAnim = requestAnimationFrame(moveControlAnimation);
}

isElementInViewport(timeCursorEl, function (el, entry) {
    windowHeight = window.innerHeight;
    controlAnimationCanMove = true;
    moveControlAnimation();
}, function (el, entry) {
    controlAnimationCanMove = false;
}, '50px');

isElementInViewport(left, function (el, entry) {
    windowHeight = window.innerHeight;
    controlAnimationCanMove = true;
    moveControlAnimation();
}, function (el, entry) {
    controlAnimationCanMove = false;
}, '50px');

isElementInViewport(right, function (el, entry) {
    windowHeight = window.innerHeight;
    controlAnimationCanMove = true;
    moveControlAnimation();
}, function (el, entry) {
    controlAnimationCanMove = false;
}, '50px');