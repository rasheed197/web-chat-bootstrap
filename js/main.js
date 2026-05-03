const toggle = document.querySelector('.floating-chat')

const mainLeft = document.querySelector('.left-section')
const mainRight = document.querySelector('.right-section')

toggle.addEventListener('click', () => {
    if (mainLeft.classList.contains('hide')) {
        mainLeft.classList.remove('hide')
    } else  {
        mainLeft.classList.add('hide')
    }

    if (mainRight.classList.contains('show')) {
        mainRight.classList.remove('show')
    } else {
        mainRight.classList.add('show')
    }
})
