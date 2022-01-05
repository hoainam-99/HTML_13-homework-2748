const login = document.querySelector('.login')

function openForm(){
    login.classList.remove('hide')
}

function closeForm(){
    login.classList.add('hide')
}


function loginCheck(){
    var nameTag = $('#name_id').val()
    var pwd = $('#pwd_id').val()
    if(nameTag == 'admin' && pwd == 'admin'){
        alert('Login success!\nRedirecting to next page...')
    }else{
        alert('Login failed!\nIncorrect username or password')
    }
    return false
}