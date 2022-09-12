document.addEventListener('scroll', function () {
    if (window.pageYOffset) {
        document.querySelector('nav').classList.add('background-black')
    } else {
        document.querySelector('nav').classList.remove('background-black')
    }
})