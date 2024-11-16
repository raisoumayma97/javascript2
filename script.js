/**String Manipulation Functions: */

function reverse(str) {
    return str.split('').reverse().join('');
}
 
function count(str) {
    return str.length;
}

function capitalizeWords(str) {
    return str
        .split(' ')              
        .map(str => str.toUpperCase())
        .join(' ');            
}



/**Array Functions: */

function MaxMin(arr) {
    return [Math.max(...arr),Math.min(...arr)];
    
}


function sumArray(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];  // Add each element to the sum
    }
    return sum;
}


function filterArray(arr, condition) {
    return arr.filter(condition);
}


/**Mathematical Functions: */

function factorial(n) {
    let result = 1;
    for (let i = 1; i <= n; i++) {
        result *= i;  
    }
    return result;
}

function isPrime(n) {
    if (n <= 1) {
        return false;
    }
    
    // Check divisibility up to the square root of n
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            return false; 
        }
    }
    
    return true;  
}

function generateFibonacci(n) {
    let fibonacci = [];

    if (n <= 0) {
        return fibonacci;
    }
    else if(n<2) {
        fibonacci.push(0);  
        return fibonacci;  
    }
    else if(n<3) {
        fibonacci.push(0,1)
        return fibonacci;  
    }
    else{
        fibonacci.push(0,1)
        for (let i = 2; i < n; i++) {
            fibonacci.push(fibonacci[i - 1] + fibonacci[i - 2]);
        }
        return fibonacci;
    }
}


