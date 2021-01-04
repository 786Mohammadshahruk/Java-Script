//method
let wishMe=(message,color)=>{
    let  h1tag=document.querySelector('#msg-1');
    h1tag.innerText=message;
    h1tag.style.backgroundColor=color;
    h1tag.style.padding='10px';
    h1tag.style.boxShadow='0 0 10px black';
}
let gmButton = document.querySelector('#gm-btn');
gmButton.addEventListener('click',function () {
    wishMe('Good Morning','Blue')
})
let gaButton = document.querySelector('#ga-btn');
gaButton.addEventListener('click',function () {
    wishMe('Good AfterNoon','red')

})
let geButton = document.querySelector('#ge-btn');
geButton.addEventListener('click',function () {
    wishMe('Good Evening','Black')

})
let gnButton = document.querySelector('#gn-btn');
gnButton.addEventListener('click',function () {
    wishMe('Good Night','green')

})



