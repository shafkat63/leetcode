// Given a 2D integer array nums, return all elements of nums in diagonal order as shown in the below images.

// Example 1:

// Input: nums = [[1,2,3],[4,5,6],[7,8,9]]
// Output: [1,4,2,7,5,3,8,6,9]
// Example 2:

// Input: nums = [[1,2,3,4,5],[6,7],[8],[9,10,11],[12,13,14,15,16]]
// Output: [1,6,2,8,7,3,9,4,12,10,5,13,11,14,15,16]

// /**
//  * @param {number[][]} nums
//  * @return {number[]}
//  */
// var findDiagonalOrder = function(nums) {

// };

function findDiagonalOrder(nums) {
	let m = nums.length;
	let maxSum = 0;
	let map = [];

	for (let i = 0; i < m; i++) {
		for (let j = 0; j < nums[i].length; j++) {
			let sum = i + j;
			if (!map[sum]) map[sum] = [];
			map[sum].push(nums[i][j]);
			console.log(map);
			maxSum = Math.max(maxSum, sum);
            console.log(`'MaxSum:' ${maxSum}`);
		}
	}

	let res = [];
	for (let i = 0; i <= maxSum; i++) {
		let cur = map[i];
		if (cur) {
			for (let j = cur.length - 1; j >= 0; j--) {
				res.push(cur[j]);
				console.log(`Cur: ${cur}`);
			}
		}
	}

	return res;
}

// Test case
const nums = [
	[1, 2, 3],
	[4, 5, 6],
	[7, 8, 9],
];
console.log(findDiagonalOrder(nums)); // Output: [1,4,2,7,5,3,8,6,9]
