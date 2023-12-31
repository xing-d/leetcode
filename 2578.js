// 定义名为 splitNum 的函数，它接受一个名为 num 的参数
var splitNum = function (num) {
    // 将数字 num 转换为字符串，然后拆分成字符数组，并对该数组进行排序
    let s = num.toString().split('').sort();
    console.log(s);
    // 初始化一个数组 a，包含两个元素，都初始化为 0
    let a = [0, 0];
    // 循环遍历排序后的字符数组
    for (let i = 0; i < s.length; i++) {
        // 如果 i 是偶数，更新 a[0]；如果 i 是奇数，更新 a[1]。
        // 通过将 a[i%2] 乘以 10，然后加上当前字符（转换为数字）来更新 a[i%2]
        a[i % 2] = a[i % 2] * 10 + parseInt(s[i]);
        // console.log(a[i % 2]);
    }
    console.log(a[0] ,a[1]);
    // 返回 a[0] 和 a[1] 的和
    return a[0] + a[1];
};

console.log(splitNum(4325));//59 24+35
console.log(splitNum(687));//75 68+7