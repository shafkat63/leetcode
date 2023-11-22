// Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.

// The overall run time complexity should be O(log (m+n)).

 

// Example 1:

// Input: nums1 = [1,3], nums2 = [2]
// Output: 2.00000
// Explanation: merged array = [1,2,3] and median is 2.
// Example 2:

// Input: nums1 = [1,2], nums2 = [3,4]
// Output: 2.50000
// Explanation: merged array = [1,2,3,4] and median is (2 + 3) / 2 = 2.5.
 

// Constraints:

// nums1.length == m
// nums2.length == n
// 0 <= m <= 1000
// 0 <= n <= 1000
// 1 <= m + n <= 2000
// -106 <= nums1[i], nums2[i] <= 106


/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */

var findMedianSortedArrays = function (nums1, nums2) {
    const mergedArray = mergeSortedArrays(nums1, nums2);
    // // let mergedArray = [...nums1, ...nums2]
    // let mergedArray = nums1.concat(nums2)
    // mergedArray = mergedArray.sort();

    const length = mergedArray.length;

    if (length % 2 === 0) {
        // If the length is even, return the average of the middle two elements
        const mid1 = mergedArray[length / 2 - 1];
        const mid2 = mergedArray[length / 2];
        return (mid1 + mid2) / 2;
    } else {
        // If the length is odd, return the middle element
        return mergedArray[Math.floor(length / 2)];
    }
};

// Helper function to merge two sorted arrays
function mergeSortedArrays(nums1, nums2) {
    const mergedArray = [];
    let i = 0;
    let j = 0;

    while (i < nums1.length && j < nums2.length) {
        if (nums1[i] < nums2[j]) {
            mergedArray.push(nums1[i]);
            i++;
        } else {
            mergedArray.push(nums2[j]);
            j++;
        }
    }

    // Add remaining elements from nums1
    while (i < nums1.length) {
        mergedArray.push(nums1[i]);
        i++;
    }

    // Add remaining elements from nums2
    while (j < nums2.length) {
        mergedArray.push(nums2[j]);
        j++;
    }

    return mergedArray;
}
