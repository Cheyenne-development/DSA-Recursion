
function powerCalculator(number, exp){
       if(exp < 0){
        return console.log('exponent should be >= 0')
    }
    if (exp === 0){
        return 1;
    }
    if (exp <= 1){
        return number;
    }
    
         return number * powerCalculator(number, exp - 1)
        
}
console.log(powerCalculator(2, 5));
