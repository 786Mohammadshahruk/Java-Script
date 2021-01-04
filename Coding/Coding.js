let msg ='Good morning';
let findzero = (str)=>{
    let count =0;
    for (let i=0;i<str.length;i++)
    {
        if('o'===str.charAt(i))
        {
            count=count+1
        }
    }
    return count;

}
console.log(`The Zero in String is : ${findzero(msg)}`)


