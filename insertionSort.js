/**
 * 插入排序
 * 将第一待排序序列第一个元素看做一个有序序列，把第二个元素到最后一个元素当成是未排序序列。
 * 从头到尾依次扫描未排序序列，将扫描到的每个元素插入有序序列的适当位置。
 * （如果待插入的元素与有序序列中的某个元素相等，则将待插入元素插入到相等元素的后面。）
 * */

function insertionSort(arr) {
    var len = arr.length;
    var preIndex, current;
    for (var i = 1; i < len; i++) {
        preIndex = i - 1;
        current = arr[i];
        /**
         * 把当前arr[i]取出来后，和它前一个元素相比
         * 如果小于前一个元素，就让前一个元素往后挪一个位置，并继续和前前...个元素比较...
         * 如果大于前（前前...或者已经到最前面）的元素就放在前（前前...或最前面）的元素后面
         * */
        while (preIndex >= 0 && arr[preIndex] > current) {
            arr[preIndex + 1] = arr[preIndex];
            preIndex--;
        }
        arr[preIndex + 1] = current;
    }
    return arr;
}

var Arr = [77, 4, 1, 90, 44, 29, 22, 38, 54, 93, 12, 34, 56, 6, 8, 95];
console.log(insertionSort(Arr));

