/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 * Given an array nums, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.
 * For example, given nums = [0, 1, 0, 3, 12], after calling your function, nums should be [1, 3, 12, 0, 0].

     Note:
     You must do this in-place without making a copy of the array.
     Minimize the total number of operations.
 */
var moveZeroes = function (nums) {
    /**
     Validation Checks
     -- Not null
     -- Not undefined
     -- Instance of array
     **/

    var zeroIndex = getZeroIndex(0, nums);
    var nonZeroIndex = getNonZeroIndex(0, nums);

    while (zeroIndex < nums.length && nonZeroIndex < nums.length) {

        if (zeroIndex < nonZeroIndex) {
            swap(zeroIndex, nonZeroIndex, nums);
        }

        zeroIndex = getZeroIndex(++zeroIndex, nums);
        nonZeroIndex = getNonZeroIndex(++nonZeroIndex, nums);
    }

    console.log(nums);
};

function swap(idx1, idx2, arry) {
    var temp = arry[idx1];
    arry[idx1] = arry[idx2];
    arry[idx2] = temp;
}

function getZeroIndex(startIndex, arry) {
    var num = arry[startIndex];

    while (num !== 0 && startIndex < arry.length) {
        startIndex++;
        num = arry[startIndex];
    }

    return startIndex;
}

function getNonZeroIndex(startIndex, arry) {
    var num = arry[startIndex];

    while (num === 0 && startIndex < arry.length) {
        startIndex++;
        num = arry[startIndex];
    }

    return startIndex;
}

// var nums = [1,2,0,4,5];
var nums = [0, 0, 0, 1];
moveZeroes(nums);