let text=document.querySelector('#userName')
text.addEventListener('keyup',function () {
  //  alert('Enterd The Text')
    let txt=text.value;
    let msgelement=document.querySelector('#msg')
    msgelement.innerText=txt;
})
