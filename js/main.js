function exiting(url) {
    var mainElement = document.querySelector('main');
    mainElement.style.animationName = 'slide-out';
    mainElement.style.animationDuration = '0.5s';

    setTimeout(function() {
        window.location.href = url;
    }, 300);
}