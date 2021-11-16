const menuShowBtn = document.getElementById('nav-show')
const nav = document.getElementById('nav')
const menuHideBtn = document.getElementById('nav-hide')

const backProjectBtn = document.getElementById('back-project')

const selectModal = document.getElementById('selction-modal')
const successModal = document.getElementById('success-modal')
const gotItBtn = document.getElementById('got-it')

const continueBtnArr = document.querySelectorAll('.donation_continue-btn')
// console.log(continueBtn)


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


backProjectBtn.addEventListener('click', ()=>{
    selectModal.style.display = 'block'
})

continueBtnArr.forEach((element) => {
    element.addEventListener('click', ()=>{
        selectModal.style.display = 'none'
        successModal.style.display = 'block'
    })
})

gotItBtn.addEventListener('click', ()=>{
    successModal.style.display = 'none'
})

