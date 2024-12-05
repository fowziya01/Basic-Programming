function primeNumber(num){
    if(num<=1){
        return false;
    }
    for( let i=2;i<num;i++){
        if(num%i===0){
            return false;
        }
    }
return true;
}
//console.log(primeNumber(2));
//console.log(primeNumber(3));
//console.log(primeNumber(4));
//console.log(primeNumber(6));
function evenOdd(num1){
    if(num1%2===0){
        return true;
    }else {
        return false;
    }
}
console.log(evenOdd(3));
console.log(evenOdd(86));