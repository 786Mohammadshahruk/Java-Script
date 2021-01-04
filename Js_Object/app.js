console.log("Object")
let camara={
    price:54000,
    BrandName:"Canon"
};
console.log(camara)
console.log(camara.BrandName)
//access the properties from bracket notation

console.log(camara['price'])
//dynamic properties is access by bracket annotation
let prop='BrandName'
console.log(camara.prop) //undefine
console.log(camara[prop])

let mobile={};
mobile.brand="mi";
mobile.price=15000;
mobile.color="Helo weight"
console.log(mobile);

delete mobile.color;
console.log(mobile)
