// Functionality to toggle dark/light theme. Used the code provided by Joakim in his video "Avancerad - Darkmode toggle"

const darkmodeSwitch = document.querySelector('#darkmode-switch')
const hasDarkmode = localStorage.getItem('darkmode')

if(hasDarkmode == null) {
    if(window.matchMedia('(prefers-color-scheme: dark)').matches) {
        enableDarkMode()
    } else {
        diasableDarkMode()
    }
} else if(hasDarkmode === 'on') {
    enableDarkMode()
} else if(hasDarkmode === 'off') {
    disableDarkMode()
}


darkmodeSwitch.addEventListener('change', () => {
    if(darkmodeSwitch.checked) {
        enableDarkMode()
        localStorage.setItem('darkmode', 'on')
    } else {
        disableDarkMode()
        localStorage.setItem('darkmode', 'off')
    }
})


function enableDarkMode() {
    darkmodeSwitch.checked = true
    document.documentElement.classList.add('dark')
}
function disableDarkMode() {
    darkmodeSwitch.checked = false
    document.documentElement.classList.remove('dark')
}