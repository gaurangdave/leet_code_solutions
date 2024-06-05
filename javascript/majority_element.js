/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
   
  if(nums == null || typeof nums == "undefined" || typeof nums != "object" || !(nums instanceof Array)){
    console.error("Cannot process " + nums);
    return;
  }
  
  var count = 1;
  var major = nums[0];
  
  nums.forEach(function(elem,index,arry){
    if(index === 0){
      return;
    }
    
    if(count === 0){
      count++;
      major = elem;
    } 
    else if(elem == major){
      count++;
    }
    else{
      count--;
    }
  });
  
  return major;
};


var numsArray = [1,2,1,3,1,1];
majorityElement(numsArray);