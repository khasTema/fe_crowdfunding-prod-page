const menuShowBtn = document.getElementById('nav-show')
const nav = document.getElementById('nav')
const menuHideBtn = document.getElementById('nav-hide')


menuShowBtn.addEventListener('click', ()=>{
    console.log('you you')
    nav.style.display = 'flex'
    menuShowBtn.style.display = 'none'
    menuHideBtn.style.display = 'block'
})

menuHideBtn.addEventListener('click', ()=>{
    nav.style.display = 'none'
    menuHideBtn.style.display = 'none'
    menuShowBtn.style.display = 'block'
})
