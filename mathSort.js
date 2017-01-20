/**
 * 运用Math方法排序
 * */

function mathSort(arr) {
    var res = [],
            minVal, minPos;
    while (arr.length>0) {
        minVal = Math.min.apply(Math, arr);
        minPos = arr.indexOf(minVal);
        res.push(minVal);
        arr.splice(minPos, 1);
    }
    return res;
}

/*var Arr = [];
for (var i = 0; i < 50000; i++) {
    Arr.push(Math.floor(Math.random() * 100000));
}*/
var Arr = [3, 4, 1, 90, 44, 29, 22, 38, 54, 3, 12, 34, 56, 6, 8, 95];
console.log(mathSort(Arr));