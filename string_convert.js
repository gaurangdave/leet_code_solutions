/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {

    /**
     Validations:
     //s is not undefined or null
     //s is a string and s.length is > 0
     //numRows is not undefined or null
     //numRows is a  number and > 0
     //if num row === 1 return string.
     **/

    var strArray = new Array(numRows);
    var strSplit = s.split("");
    var strCtr = 0;
    var strLength = strSplit.length;

    while (strCtr < strLength) {

        for (var i = 0; i < numRows && strCtr < strLength; i++) {
            if (!strArray[i]) {
                strArray[i] = "";
            }

            strArray[i] = strArray[i] + strSplit[strCtr++];
        }

        for (var j = numRows - 2; j >= 1 && strCtr < strLength; j--) {
            if (!strArray[j]) {
                strArray[j] = "";
            }

            strArray[j] = strArray[j] + strSplit[strCtr++];
        }


    }


    return strArray.join("");

};


convert("PAYPALISHIRING", 1);