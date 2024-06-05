/**
The Hamming distance between two integers is the number of positions at which the corresponding bits are different.
Given two integers x and y, calculate the Hamming distance.

Note:
0 ≤ x, y < 231. 

Example:

Input: x = 1, y = 4

Output: 2

Explanation:
1   (0 0 0 1)
4   (0 1 0 0)
       ↑   ↑

The above arrows point to positions where the corresponding bits are different.
**/

/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function(x, y) {
  if(x == y){
      return 0;
  }  
  
  var xorNum = x^y
  var binNum = xorNum.toString(2);
   var hammingCount = 0;
for(var index=0;index<binNum.length;index++){
	if(binNum[index] == 1){ 
  	hammingCount++;
  }
}

return hammingCount;
};
