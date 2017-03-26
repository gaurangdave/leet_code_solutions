/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var getSum = function(a, b) {
    /*
     Validations:
     //a is not undefined or null. a is a number
     //b is not undefined or null. b is a number
     //if a is zero return b, if b is zero return a.
     */


    var bitA = a.toString(2);
    var bitB = b.toString(2);

    var carry = a & b;

    while(b !== 0){
        carry = a & b;
        a = a ^ b;
        b = carry << 1;
    }

    console.log(a);
    return a;
};

getSum(1,2);