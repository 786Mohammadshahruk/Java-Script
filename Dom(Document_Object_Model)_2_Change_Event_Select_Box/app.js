//chanhe even on select box
let event1=document.querySelector('#lang')
event1.addEventListener('change ',function () {
    let langOption=event1.value;
    let msg=document.querySelector('#language-option')
    msg.innerText=langOption;

})
