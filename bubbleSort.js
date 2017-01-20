/**
 * 冒泡排序
 * */

function bubbleSort(arr) {
    var len = arr.length;
    for (var i = 0; i < len; i++) {
        for (var j = 0; j < len - 1 - i; j++) {
            /*如果arr[j]大于arr[j+1]，让两个元素位置对换*/
            if (arr[j] > arr[j + 1]) {
                var temp = arr[j + 1];
                arr[j + 1] = arr[j];
                arr[j] = temp;
            }
        }
    }
    return arr;
}

var Arr=[3,4,1,90,44,29,22,38,54,93,12,34,56,6,8,95];

console.log(bubbleSort(Arr));