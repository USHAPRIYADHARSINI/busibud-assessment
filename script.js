/*Have the function BitmapHoles(strArr) take the array of strings stored in strArr, 
which will be a 2D matrix of 0 and 1’s, and determine how many holes, or contiguous regions of 0’s, exist in the matrix. 
A contiguous region is one where there is a connected group of 0’s going in one or more of four directions: up, down, left, or right. 
For example: if strArr is [“10111”, “10101”, “11101”, “11111”], then this looks like the following matrix:

1 0 1 1 1
1 0 1 0 1
1 1 1 0 1
1 1 1 1 1

For the input above, your program should return 2 because there are two separate contiguous regions of 0’s, 
which create “holes” in the matrix. You can assume the input will not be empty.*/

var strArr = ["10111", "10101", "11101", "11111"]

function BitmapHoles(strArr) {
    // declare an empty array to hold coordinates of all 0's
    var index = [],
        // initialize the number of holes to 0
        holes = 0,
        checker;
    // loop through each string in the array
    for (var i = 0; i < strArr.length; i++) {
        // split each string into individual characters
        strArr[i] = strArr[i].split('');
        // loop through each character
        for (var j = 0; j < strArr[i].length; j++) {
            // if the character is 0, add its coordinates to the index array
            if (strArr[i][j] === "0") {
                index.push([i, j]);
            }
        }
    }
    // loop through each coordinate in the index array
    for (var c = 0; c < index.length; c++) {
        checker = false;
        // loop through the remaining coordinates in the index array
        for (var k = c + 1; k < index.length; k++) {
            // if the two coordinates are adjacent, set the checker variable to true
            if (index[k][0] === index[c][0] + 1 && index[k][1] === index[c][1] || index[k][0] === index[c][0] && index[k][1] === index[c][1] + 1) {
                checker = true;
            }
        }
        // if the checker variable is still false, increment the holes variable
        if (checker === false) {
            holes += 1;
        }
    }
    // return the number of holes
    return holes;
}

// keep this function call here 
console.log(BitmapHoles(strArr));


/*Have the function MatchingCharacters(str) take the str parameter being passed and determine the largest number of unique characters 
that exists between a pair of matching letters anywhere in the string. 
For example: if str is "ahyjakh" then there are only two pairs of matching letters, the two a's and the two h's. 
Between the pair of a's there are 3 unique characters: h, y, and j. Between the h's there are 4 unique characters: y, j, a, and k. 
So for this example your program should return 4. 
Another example: if str is "ghececgkaem" then your program should return 5 because the most unique characters exists within the 
farthest pair of e characters. The input string may not contain any character pairs, and in that case your program should just return 0. 
The input will only consist of lowercase alphabetic characters. */

function MatchingCharacters(str) { 
    var count  = 0
    for(var i = 0; i < str.length; i++){
      var charObj = {}
      var lastIdx = str.lastIndexOf(str[i])
      if(i == lastIdx) continue
      for(var j = i+1; j < lastIdx; j++){
        if(charObj[str[j]] == undefined) charObj[str[j]] = str[j]
      }
      if(count < Object.keys(charObj).length) count = Object.keys(charObj).length
    }
    console.log(count)
}
MatchingCharacters('ahyjakh') //4
MatchingCharacters('ghececgkaem')

/*Tree Constructor

Have the function TreeConstructor( strArr ) take the array of strings stored in strArr , which will contain pairs of integers 
in the following format: (i1,i2) , where i1 represents a child node in a tree and the second integer i2 signifies that it is the 
parent of i1 . For example: if strArr is ["(1,2)", “(2,4)”, “(7,2)”], then this forms the following tree:
which you can see forms a proper binary tree. Your program should, in this case, return the string true because a valid binary 
tree can be formed. If a proper binary tree cannot be formed with the integer pairs, then return the string false . 
All of the integers within the tree will be unique, which means there can only be one node in the tree with the given integer value.

Examples
Input: ["(1,2)", “(2,4)”, “(5,7)”, “(7,2)”, “(9,5)”]
Output: true

Input: ["(1,2)", “(3,2)”, “(2,12)”, “(5,2)”]
Output: false */

Input1 = ["(1,2)", "(2,4)", "(5,7)", "(7,2)", "(9,5)"];
Input2 = ["(1,2)", "(3,2)", "(2,12)", "(5,2)"];
alert("Input1 is "+validate(Input1)+"\nInput2 is "+validate(Input2));
function validate(arg){
var store=[];
var re;
	for(var i=0;i<arg.length;i++){
		re=(eval('list'+arg[i]));
		if(typeof store[re[1]]=='undefined')store[re[1]]=0;		
		if(++store[re[1]]>2)return "invalade";
	}
	function list(a,b){return [a,b];}
	return "valade";
}