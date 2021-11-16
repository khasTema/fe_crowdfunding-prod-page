const menuShowBtn = document.getElementById('nav-show')
const nav = document.getElementById('nav')
const menuHideBtn = document.getElementById('nav-hide')
const backProjectBtn = document.getElementById('back-project')
const selectModal = document.getElementById('selction-modal')
const successModal = document.getElementById('success-modal')
const gotItBtn = document.getElementById('got-it')
const selectRewardBtnArr = document.querySelectorAll('.option-card_btn')
const continueBtnArr = document.querySelectorAll('.donation_continue-btn')

const moneyTotalDisplay = document.getElementById('money-total')
const usersTotalDisplay = document.getElementById('users-total')
const progressBar = document.getElementById('progress-fill')






let totalFundedSum = parseInt(moneyTotalDisplay.innerText)
// console.log(totalFundedSum +14)

let totalUsers = parseInt(usersTotalDisplay.innerHTML)


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

backProjectBtn.addEventListener('click', showSelectOptions)

selectRewardBtnArr.forEach((element) =>{
    element.addEventListener('click', showSelectOptions)
})

function showSelectOptions(){
    selectModal.style.display = 'block'
}

continueBtnArr.forEach((element) => {
    element.addEventListener('click', ()=>{
        selectModal.style.display = 'none'
        successModal.style.display = 'block'
        totalUsers += 1
        usersTotalDisplay.textContent = totalUsers
        let donationSum = parseInt(element.previousElementSibling.children[1].value)
        totalFundedSum += donationSum
        moneyTotalDisplay.textContent = totalFundedSum
        progressBar.style.width = '91%'
  
    })
})

gotItBtn.addEventListener('click', ()=>{
    successModal.style.display = 'none'
})
