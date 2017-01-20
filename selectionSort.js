/**
 * 选择排序
 * 在未排序序列中找到最小（大）元素放在初始位置
 * 再从未排序元素中找最小（大）元素，放到已排序的后面
 * 依次循环，直至完毕
 * */

function selectionSort(arr) {
    var len = arr.length;
    var minIndex, temp;
    for (var i = 0; i < len - 1; i++) {
        minIndex = i;
        for (var j = i + 1; j < len; j++) {
            if (arr[j] < arr[minIndex]) { //寻找最小的数
                minIndex = j; //将最小数的索引保存
            }
        }
        /*把arr[i]换为找到的最小值*/
        temp = arr[i];
        arr[i] = arr[minIndex];
        arr[minIndex] = temp;
    }
    return arr;
}

var Arr=[3,4,1,90,44,29,22,38,54,93,12,34,56,6,8,95];
console.log(selectionSort(Arr));
