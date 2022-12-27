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
        $('#slide.active').classList.remove('active');
        $('.slide_content_tab_item.active').classList.remove('active');
        tabsList[count].classList.add('active')
        tabsControll[count].classList.add('active')
    }else{
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
}, 5000)


//form login
const formModal = $('#modal')
const iconCLose = $$('.close')
const iconLogin = $('.header_item.login')
const login = $('.form_login .method_default .basic')
const formLogin = $('.form_login')
const formInputLogin = $('.form_input_login')
const back = $('.form_input_login .back')
const viewPass = $('.on_off_pass')
const inputPass = $('.input_password .password')
const btnGoToTop = $('.btn_go_to_top')

//show form login
iconLogin.onclick = () => {
    formModal.classList.add('active')
    formLogin.classList.add('active')
}

//close form login
iconCLose.forEach( close => {
    close.onclick = () => {
        formModal.classList.remove('active')
        if(formLogin.classList.contains('active')){
            formLogin.classList.remove('active')
        }else if(formInputLogin.classList.contains('active')){
            formInputLogin.classList.remove('active')
        }
    
    }
})

//open form input login
login.onclick = () => {
    formLogin.classList.remove('active')
    formInputLogin.classList.add('active')
}

//back to option login
back.onclick = () => {
    formLogin.classList.add('active')
    formInputLogin.classList.remove('active')
}

// on off pass
viewPass.onclick = () => {
    if(inputPass.type==='password'){
        inputPass.type = 'text'
    }else if(inputPass.type==='text'){
        inputPass.type = 'password'
    }
}


// Go to top
window.onscroll = () => {
    if(this.scrollY>500){
        btnGoToTop.style.display = 'block'
    }else{
        btnGoToTop.style.display = 'none'
    }
}

btnGoToTop.onclick = () => {
    document.documentElement.scrollTop = 0;
}