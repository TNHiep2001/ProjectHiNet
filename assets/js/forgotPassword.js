const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

//------------------------------------------------------------------------
//forgot password

const btn_close_form_login = $('#content .form .btn_option .close')
const form_forgot_password = $('#content .form')
const form_login = $('#content .form_login')
const btn_login = $('#content .form_login .main .btn_login_default')
const form_input_login = $('#content .form_input_login')
const back_to_select = $('#content .form_input_login .main .back')
const viewPass = $('#content .form_input_login .main .password .on_off_pass')
const inputPass = $('#content .form_input_login .main .password .input_password')
const btn_register = $('#content .form_login .footer a')
const form_select_register = $('#content .form_select_register')
const btn_to_select_login = $('#content .form_select_register .main p a')
const btn_to_select_register = $('#content .form_input_login .footer a')

//show form login
btn_close_form_login.onclick = () => {
    form_forgot_password.classList.remove('active')
    form_login.classList.add('active')
}

//show form input login
btn_login.onclick = () => {
    form_login.classList.remove('active')
    form_input_login.classList.add('active')
}

//show select login
back_to_select.onclick = () => {
    form_input_login.classList.remove('active')
    form_login.classList.add('active')
}

//on off password
viewPass.onclick = () => {
    if(inputPass.type==='password'){
        inputPass.type = 'text'
    }else if(inputPass.type==='text'){
        inputPass.type = 'password'
    }
}

// show list select register
btn_register.onclick = () => {
    form_login.classList.remove('active')
    form_select_register.classList.add('active')
}

// show list select login
btn_to_select_login.onclick = () => {
    form_select_register.classList.remove('active')
    form_login.classList.add('active')
}

// show list select register
btn_to_select_register.onclick = () => {
    form_input_login.classList.remove('active')
    form_select_register.classList.add('active')
}