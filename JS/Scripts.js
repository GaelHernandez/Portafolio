const scroll = window.innerWidth - document.body.clientWidth
document.getElementById('main').style.width = `calc(100vw - ${scroll}px)`
document.getElementById('footer').style.width = `calc(100vw - ${scroll}px)`