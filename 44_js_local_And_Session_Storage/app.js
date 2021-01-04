//Local storage for simple String
let empName='Shahruk';
//Set the Data
localStorage.setItem('Employee_name',empName);
//get the Data
console.log(localStorage.getItem('Employee_name')) ;
//Delete The Data
localStorage.removeItem('Employee_name');
//Clear The Data
localStorage.clear();

let employee=[{id:1,name:'Shahruk'},
              {id:2,name: 'Rakesh'},
              {id:3,name: 'GAurav'}];
localStorage.setItem('employee',JSON.stringify(employee));
console.log(localStorage.getItem('employee'))
let p=JSON.parse(localStorage.getItem('employee'));
console.log(p)
let studentName='Akahay'
sessionStorage.setItem('student',studentName);

