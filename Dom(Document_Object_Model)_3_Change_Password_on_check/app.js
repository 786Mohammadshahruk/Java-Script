let password = document.querySelector('#password');
let checkbox = document.querySelector('#checkbox')
checkbox.addEventListener('change',function () {
        let typeAttribute =password.getAttribute('type');
        if (typeAttribute==='password')
        {
            password.setAttribute('type','text')
        }
        else{
            password.setAttribute('type','password')
        }

});
