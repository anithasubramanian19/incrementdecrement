const plusBtn = document.querySelector(".plus_btn")
const minusBtn = document.querySelector(".minus_btn")
const display = document.querySelector(".display")

let count = 0
plusBtn.addEventListener('click', ()=>{
   count++
   display.innerHTML = count
})
minusBtn.addEventListener('click',()=>{
    count--
    if(count < 0){
        count = 0
    }
    display.innerHTML = count
})
