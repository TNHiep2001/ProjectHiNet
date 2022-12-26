const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)
var count = 0
const tabsList = $$('#slide')
const tabsControll = $$('.slide_content_tab_item')

//click run slide
function handleClick(){
    count++

    if(count>2){
        count = 0
        console.log(tabsList[count])
        console.log(tabsControll[count])
        $('#slide.active').classList.remove('active');
        $('.slide_content_tab_item.active').classList.remove('active');
        tabsList[count].classList.add('active')
        tabsControll[count].classList.add('active')
    }else{
        console.log(tabsList[count])
        console.log(tabsControll[count])
        $('#slide.active').classList.remove('active');
        $('.slide_content_tab_item.active').classList.remove('active');
        tabsList[count].classList.add('active')
        tabsControll[count].classList.add('active')
    }  

}

const btnSlide = $('.btn_next_slide')
btnSlide.onclick = () => handleClick()

//Auto run slide
setInterval(() => {
    if (count >= 2){
        count = 0
        $('#slide.active').classList.remove('active');
        $('.slide_content_tab_item.active').classList.remove('active');
        tabsList[count].classList.add('active')
        tabsControll[count].classList.add('active')
    }else{
        count++
        $('#slide.active').classList.remove('active');
        $('.slide_content_tab_item.active').classList.remove('active');
        tabsList[count].classList.add('active')
        tabsControll[count].classList.add('active')
    }
    console.log(count)
}, 5000)


//form login
const formModal = $('#modal')
const iconCLose = $('.close')
const iconLogin = $('.header_item.login')

iconLogin.onclick = () => {
    formModal.classList.add('active')
}

iconCLose.onclick = () => {
    formModal.classList.remove('active')
}