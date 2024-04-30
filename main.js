///////////  THEME /////////////////
const themeBtn = document.getElementById('themeBtn')
let initialTheme = JSON.parse(localStorage.getItem('dark'))

themeBtn.classList[initialTheme ? 'add' : 'remove']('dark')
document.body.classList[initialTheme ? 'add' : 'remove']('dark')

themeBtn.onclick = (e) => {
    themeBtn.classList.toggle('dark')
    document.body.classList.toggle('dark')
    localStorage.setItem('dark', !initialTheme)
}

///////////////// BACK EFFECT //////////////////////

const mainScreen = document.getElementById('main-section')
if(mainScreen) mainScreen.style.minHeight = window.innerHeight + 'px'



//////////////// SCROLL ANIMATION ////////////////////////

function scrollAnimate() {
    const scrollAnimateElements = document.querySelectorAll('.scroll-animate')
    for(let i = 0; i < scrollAnimateElements.length; i++) {
        const e = scrollAnimateElements[i]
        let windowHeight = window.innerHeight
        let revealTop = e.offsetTop - window.scrollY
        let revealPoint = windowHeight / 8;
        if(revealTop < windowHeight - revealPoint || windowHeight - revealPoint > e.offsetTop) {
            e.classList.add('active')
        }
        else {
            e.classList.remove('active')
        }
    }
}

window.addEventListener('scroll', scrollAnimate)
scrollAnimate()


////////////////// MENU BUTTON //////////

const hamburger = document.getElementById('hamburger')
const menu = document.getElementById('menu-links')
const navRight = document.getElementById('nav-right')


hamburger.onclick = () => {
    menu.classList.toggle('active')
}

window.onclick = (e) => {
    const element = e.target
    if(!navRight.contains(element)) {
        menu.classList.remove('active')
    }
}

/////////////// LIKE ///////////////

const likesCards = document.getElementsByClassName('like-card')

const likesName = document.getElementById('likes-name')

for(let i = 0; i < likesCards.length; i++) {
    const card = likesCards[i]
    const element = card.children[0]
    const id = card.children[1].children[1].children[0].innerHTML
    let likes = JSON.parse(localStorage.getItem('likes')) || []
        if(likes.length !== 0) {
            const isHas = likes.includes(id)
            if(isHas) element.classList.add('active')
        }
    element.onclick = () => {
        const isHas = likes.includes(id)
        if(!isHas) {
            likes.push(id)
            element.classList.add('active')
        } else {
            likes = likes.filter(item => item !== id)
            element.classList.remove('active')
        }
        localStorage.setItem('likes', JSON.stringify(likes))
    }
}