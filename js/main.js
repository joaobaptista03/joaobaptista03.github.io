document.addEventListener('DOMContentLoaded', function() {
    var direction = window.location.href.split('/').pop().split('?')[1].split('=')[1];
    
    var mainElement = document.querySelector('main');
    if (direction === '-1') mainElement.style.animationName = 'slide-in-left';
    else mainElement.style.animationName = 'slide-in-right';
    mainElement.style.animationDuration = '0.3s';
    mainElement.style.visibility = 'visible';
});

function exiting(url, direction) {
    var mainElement = document.querySelector('main');

    if (direction === -1) mainElement.style.animationName = 'slide-out-left';
    else mainElement.style.animationName = 'slide-out-right';
    mainElement.style.animationDuration = '0.3s';

    mainElement.addEventListener('animationend', function () {
        mainElement.style.display = 'none';
        window.location.href = url + '?d=' + direction;
    });
}