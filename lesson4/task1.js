// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
    // write your code in JavaScript (Node.js 6.4.0)
    let valuesByIndex = {};
    let result = 1;
    
    for (let i = 0, aLength = A.length; i < aLength; i++) {
        let currentValue = A[i];
        
        if (!valuesByIndex[currentValue - 1]) {
            valuesByIndex[currentValue - 1] = currentValue; 
        } else {
            result = 0;
            break;
        }
        
    }
    
    let valuesByIndexKeys = Object.keys(valuesByIndex);
    
    if (result === 1) {
        for (let i = 0, len = valuesByIndexKeys.length; i < len; i++) {
            let keyValue = parseInt(valuesByIndexKeys[i]);
                
            if (keyValue !== 0 && !valuesByIndex[keyValue - 1]) {
                result = 0;
                break;
            } 
        }
    }
    
    return result;
}