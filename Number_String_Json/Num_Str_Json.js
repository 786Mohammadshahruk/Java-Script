console.log('This is Number')

console.log('Max Number :'+ Number.MAX_SAFE_INTEGER);
console.log('Min Number :'+ Number.MIN_SAFE_INTEGER);

console.log('+ve infinity Number :'+Number.POSITIVE_INFINITY);
console.log('-ve Infinity Number :'+Number.POSITIVE_INFINITY);

let str='100';
console.log(typeof str)
console.log(typeof Number.parseInt(str))

let str1='100.99';
console.log(typeof str1)
console.log(str1)
console.log(typeof Number.parseFloat(str1))

let num3=100
console.log(typeof num3.toString())

//fixed like amount
console.log(num3.toFixed(2))

let name=new String('Good Morning')
console.log(name.toLowerCase())
console.log(name.charAt())

//JSON
let Employee={
    name : 'Shahruk',
    designation : 'Developer',
    salary : 100000,
    block : 'A',
    Adress : 'Bangalore'
}
console.log(Employee);
//Object to String
console.log(JSON.stringify(Employee))
console.log(typeof JSON.stringify(Employee))
//String to object
console.log(JSON.parse(JSON.stringify(Employee)))
console.log(typeof JSON.parse(JSON.stringify(Employee)))

