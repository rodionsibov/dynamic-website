
setInterval(() => {
    document.querySelector('.button').style.backgroundColor = `hsl(${Math.floor(Math.random() * 360)},50%, 50%)`
    document.querySelector('.logo').style.transform = `translateX(${Math.floor(Math.random() * 10)}px)`
}, 3000)


const hamburgerButton = document.querySelector('#hamburger')
const navList = document.querySelector('#nav-list')

function toggleButton() {
    navList.classList.toggle('show')
}

hamburgerButton.addEventListener('click', toggleButton)