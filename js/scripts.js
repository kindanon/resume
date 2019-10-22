//smooth scroll for webpage
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
  
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
  });

//totes didnt steal these from animejs's website
//btw, why arnt these default functions 
  function dragElement(el, events) {

    function getPointer(e) {
        var x = 'clientX';
        var y = 'clientY';
        var evt = e.touches ? e.touches[0] : e;
        return { x: evt[x], y: evt[y] };
    }

    var drag = { x: 0, y: 0, deltaX: 0, deltaY: 0, active: true, events: events || {} };
    var originalX = 0;
    var originalY = 0;
    var pointerX = 0;
    var pointerY = 0;

    function move(e) {
        if (drag.active) return;
        drag.deltaX = pointerX - getPointer(e).x;
        drag.deltaY = pointerY - getPointer(e).y;
        drag.x = originalX - drag.deltaX;
        drag.y = originalY - drag.deltaY;
        if (drag.events.move) drag.events.move(drag);
    }

    function release(e) {
        drag.active = true;
        if (drag.events.release) drag.events.release(drag);
        document.removeEventListener('mousemove', move, false);
        document.removeEventListener('mouseup', release, false);
        document.removeEventListener('touchmove', move, false);
        document.removeEventListener('touchend', release, false);
    }

    function start(e) {
        if (!drag.active) return;
        e.preventDefault();
        drag.active = false;
        pointerX = getPointer(e).x;
        pointerY = getPointer(e).y;
        originalX = drag.x;
        originalY = drag.y;
        if (drag.events.begin) drag.events.begin(drag);
        document.addEventListener('mousemove', move, false);
        document.addEventListener('mouseup', release, false);
        document.addEventListener('touchmove', move, false);
        document.addEventListener('touchend', release, false);
    }

    el.addEventListener('mousedown', start, false);
    el.addEventListener('touchstart', start, false);

    return drag;

}

// Better scroll events

function onScroll(cb) {
    var isTicking = false;
    var scrollY = 0;
    var body = document.body;
    var html = document.documentElement;
    var scrollHeight = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);
    function scroll() {
        scrollY = window.scrollY;
        if (cb) cb(scrollY, scrollHeight);
        requestTick();
    }
    function requestTick() {
        if (!isTicking) requestAnimationFrame(updateScroll);
        isTicking = true;
    }
    function updateScroll() {
        isTicking = false;
        var currentScrollY = scrollY;
    }
    scroll();
    window.onscroll = scroll;
}

// Scroll to element

function scrollToElement(el, offset) {
    var off = offset || 0;
    var rect = el.getBoundingClientRect();
    var top = rect.top + off;
    var animation = anime({
        targets: [document.body, document.documentElement],
        scrollTop: '+=' + top,
        easing: 'easeInOutSine',
        duration: 1500
    });
    // onScroll(animation.pause);
}

// Check if element is in viewport

function isElementInViewport(el, inCB, outCB, rootMargin) {
    var margin = rootMargin || '-10%';
    function handleIntersect(entries, observer) {
        var entry = entries[0];
        if (entry.isIntersecting) {
            if (inCB && typeof inCB === 'function') inCB(el, entry);
        } else {
            if (outCB && typeof outCB === 'function') outCB(el, entry);
        }
    }
    var observer = new IntersectionObserver(handleIntersect, { rootMargin: margin });
    observer.observe(el);
}

function fitElementToParent(el, padding, exception) {
    var timeout = null;
    function resize() {
        if (timeout) clearTimeout(timeout);
        anime.set(el, { scale: 1 });
        if (exception) anime.set(exception, { scale: 1 });
        var pad = padding || 0;
        var parentEl = el.parentNode;
        var elOffsetWidth = el.offsetWidth - pad;
        var parentOffsetWidth = parentEl.offsetWidth;
        var ratio = parentOffsetWidth / elOffsetWidth;
        var invertedRatio = elOffsetWidth / parentOffsetWidth;
        timeout = setTimeout(function () {
            anime.set(el, { scale: ratio });
            if (exception) anime.set(exception, { scale: invertedRatio });
        }, 1);
    }
    resize();
    window.addEventListener('resize', resize);
}

var morph = anime({
    targets: '.pent',
    points: [
        //  d: [
        // { value: 'M15.6,18.6 4.3,18.6 0.8,7.9 10.0,1.3 19.1,7.9z' },
        // { value: 'M17.6,20.6 6.3,20.6 2.8,9.9 12.0,3.3 21.1,9.9z' },
        { value: '15.6,18.6 4.3,18.6 0.8,7.9 10.0,1.3 19.1,7.9' },
        { value: '17.6,20.6 6.3,20.6 2.8,9.9 12.0,3.3 21.1,9.9' },
    ],
    easing: 'easeOutQuad',
    duration: 2000,
    loop: false
});