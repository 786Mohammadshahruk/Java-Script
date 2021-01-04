console.log(document)
//head
console.log(document.head)

//title
console.log(document.title)
document.title='BeBrains Technology'

//body
console.log(document.body)

//Nav
console.log(document.querySelector("nav"))
// ancer
console.log(document.querySelector("nav a"))
//inner text
console.log(document.querySelector("nav").innerText)
//change inner text of ancor tag

let anncortag=document.querySelector("nav a");
anncortag.innerText="Mohammad Shahruk";

//h1 tag
let h1tag = document.querySelector("#msg")
h1tag.innerText='Good Evening';
console.log(h1tag)
//style
h1tag.style.backgroundColor='green';
h1tag.style.color= 'white';
h1tag.style.textAlign='center';
h1tag.style.padding='15px';
h1tag.style.boxShadow='0 0 5px black';
