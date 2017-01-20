/**
 * 希尔排序
 * 将整个数组分割成几块，分别内部排序
 * 再将几块整体排序。
 * */

function shellSort(arr) {
    var len = arr.length,
            temp,
            gap = 1;
    while (gap < len / 3) { //这里的3是随机动态定义的间隔序列
        gap = gap * 3 + 1
    }
    for (gap; gap > 0; gap = Math.floor(gap / 3)) {
        for (var i = gap; i < len; i++) {
            temp = arr[i];
            for (var j = i - gap; j >= 0 && arr[j] > temp; j -= gap) {
                arr[j + gap] = arr[j];
            }
            arr[j + gap] = temp;
        }
    }
    return arr;
}

var Arr = [3, 4, 1, 90, 44, 29, 22, 38, 54, 93, 12, 34, 56, 6, 8, 95];
console.log(shellSort(Arr));
