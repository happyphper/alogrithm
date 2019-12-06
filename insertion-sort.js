// 2.1 插入排序

/**
 * 输入：n 个数的一个序列
 * 输出：输入序列的一个升序顺序排列
 */
function sort (arr) {
  // TODO 参数判断
  for (var i = 1; i < arr.length; i++) {
    var val = arr[i];
    var j = i - 1;
    while (j >= 0 && arr[j] > val) {
      arr[j + 1] = arr[j]
      j--;
    }
    arr[j + 1] = val;
  }

  return arr;
}

// [1,2,3,4,5]
sort([2, 3, 5, 1, 4]);

/**
 * 输入：n 个数的一个序列，排序方式
 * 输出：输入序列的一个顺序排列
 */
function sortBy (arr, sort = 'asc') {
  // TODO 参数判断
  for (var i = 1; i < arr.length; i++) {
    var val = arr[i]; // 1
    var j = i - 1;
    if (sort === 'asc') {
      while (j >= 0 && arr[j] > val) {
        arr[j + 1] = arr[j]
        j--;
      }
      arr[j + 1] = val;
    } else {
      while (j >= 0 && arr[j] < val) {
        arr[j + 1] = arr[j]
        j--;
      }
      arr[j + 1] = val;
    }
  }

  return arr;
}

// [5,4,3,2,1]
sortBy([2, 3, 4, 5, 1], 'desc');

/**
 * 输入：n 个数的一个序列，和 v
 * 输出：arr[i] === v 时的索引 i，或者 null
 * 
 * @param {*} arr
 * @param {*} v
 * @returns
 */
function search (arr, v) {
  // TODO 参数判断
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === v) {
      return i;
    }
  }

  return null;
}

// 5
search([1, 2, 3, 4, 5, 6], 6)

/**
 * 输入：两个 n 位的二进制整数
 * 输出：两个 n 位的二进制整数相加的结果数组
 *
 * @param {*} arr1
 * @param {*} arr2
 * @returns
 */
function addBinary (arr1, arr2) {
  // TODO 参数判断
  for (let i = (arr2.length - 1); i >= 0; i--) {
    // 求和
    let sum = arr1[i] + arr2[i];
    // 当大于 1 时，则进 1，当前值为 0
    if (sum > 1) {
      arr1[i] = sum % 2;
      // 边际判断
      if (i >= 1) {
        arr1[i - 1] = Math.floor(sum / 2) + arr1[i - 1]
      } else {
        arr1.unshift(1)
      }
    } else {
      arr1[i] = sum;
    }
  }
  return arr1;
}
// 10100
addBinary([1, 1, 1, 1], [0, 1, 0, 1])
