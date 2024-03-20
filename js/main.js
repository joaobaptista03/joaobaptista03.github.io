function exiting(url) {
    var mainElement = document.querySelector('main');

    mainElement.style.animationName = 'slide-out';
    mainElement.style.animationDuration = '0.3s';

    mainElement.addEventListener('animationend', function () {
        mainElement.style.display = 'none';
        window.location.href = url;
    });
}