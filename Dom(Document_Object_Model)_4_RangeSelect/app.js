let formatNumber = (number)=>{
   let result = new Intl.NumberFormat('en-IN', { maximumSignificantDigits: 3 }).format(number);
    return result;
}
let rangeEl = document.querySelector('#Range');
let amountEl =document.querySelector('amount');
rangeEl.addEventListener('input',function () {
    let rangeAmount = rangeEl.value;
    amountEl.innerText = formatNumber(rangeAmount);

});
