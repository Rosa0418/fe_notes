function binarySearch (nums, start, end, target) {
    if(start < end) return -1;
    let mid = Math.floor((start + end)/2);
    if(nums[mid] === target) {
        return mid;
    }
    if(nums[mid] < target ) {
        return binarySearch(nums, mid+1, end, target);
    } else {
        return binarySearch(nums, start, mid-1, target);
    }
}

function search (nums, target) {
    return binarySearch(nums, 0, nums.length, target)
}

console.log('search result: ', search([-1,0,3,5,9,12], 9))
 
function search2 (nums, target) {
    let left = 0;
    let right = nums.length -1;
    while(left <= right) {
        let mid = Math.floor((left + right)/2);
        if(nums[mid] === target) {
            return mid;
        }
        if(nums[mid] < target ) {
            left = mid;
        }else {
            right = mid;
        }
    }
    return -1;
}
console.log('search2 result: ', search2([-1,0,3,5,9,12], 9))

/**
 * @param {number[]} nums 发现数组中的存在target的第一个和最后一个位置
 * @param {number} target
 * @return {number[]}
 */
 var searchRange = function(nums, target) {
    let position = search2(nums, target);
    let ret = [position, position];
    if(position > -1) {
        while(nums[ret[0]-1] === target) {
            ret[0] = ret[0] -1;
        }
        while(nums[ret[1]+1] === target) {
            ret[1] = ret[1] + 1;
        }
    }
    return ret;
};

console.log('searchRange result: ', searchRange([-1,0,3,5,9,9,12], 9))
/**
 * 坐标x旋转，旋转之后的数组，通过mid分成两部分，一定有一部分是有序的
 * @param {*} nums 
 * @param {*} target 
 */
function search3 (nums, target) {
    let left = 0;
    let right = nums.length -1;
    while(left <= right) {
        let mid = Math.floor((left + right)/2);
        if(nums[mid] === target) {
            return mid;
        }
        // 左半部分有序
        if(nums[0] < nums[mid]) {
            if(nums[mid] > target) {
                right = mid; // 在左半部分查找
            } else {
                left = mid + 1;
            }
        } else {
            left = mid + 1;
        }
    }
    return -1;
}
console.log('search3 result: ', search3([-1,0,3,5,9,9,12], 9))

/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    if(matrix.length || matrix[0].length) return false;
    let left = 0;
    let right = matrix.length * matrix[0].length - 1;
    console.log(left, right)
    while(left <= right) {
        let mid = Math.floor(left + (right-left)/2);
        let x = mid % matrix[0].length;
        let y = Math.floor(mid);
        console.log('ddd', y, x , mid)
        if(matrix[y][x] === target) return true;
        if(matrix[y][x] > target) {
            right = mid;
        } else {
            left = mid + 1;
        }
    }
    return false;
};
console.log('searchMatrix result: ', searchMatrix([[1,3,5,7],[10,11,16,20],[23,30,34,60]], 3))

function isBadVersion () {}
function findFirstBadVersion(n) {
    let left = 0;
    let right = n;
    while(left<right){
        let mid = Math.floor((left + right)/2);
        if(isBadVersion(mid)) {
            right=mid;
        }else {
            left = mid + 1;
        }
    }
    if(isBadVersion(right)) {return right}
    return -1;
}