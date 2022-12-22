const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

function handleClick(){
    alert('oke')
}

const btnNextSlide = $('.btn_next_slide')
btnNextSlide.onclick = function(){
    // handleClick()
    alert('oke')
}

// console.log(btnNextSlide)

// var count = 0
// const tabSlide = $$('#slide')
// console.log(tabSlide)
// tabSlide.forEach((slide,index) => {
//     console.log(slide)
//     console.log(index)
// })