var fullBloomFlowers = function (flowers, people) {
    // 初始化一个Map来存储各个时间点的花的增加或减少数
    const cnt = new Map();

    // 遍历每一朵花的开始和结束时间
    for (const [start, end] of flowers) {
        // 当开始时，花的数量+1
        cnt.set(start, cnt.has(start) ? cnt.get(start) + 1 : 1);
        // 当结束时，花的数量-1 (注意：是在end+1的时刻)
        cnt.set(end + 1, cnt.has(end + 1) ? cnt.get(end + 1) - 1 : -1);
    }

    // 将Map的数据转换成二维数组，方便后续排序操作
    const arr = [];
    for (let item of cnt.entries()) {
        arr.push([item[0], item[1]]);
    }
    console.log(arr);


    // 按照时间对数组排序
    arr.sort((a, b) => a[0] - b[0]);

    // 获取people数组的长度，以及为了后续操作建立一个索引数组
    let m = people.length;
    indices = Array.from(new Array(m).keys())
    console.log(indices);
    console.log(people);
    // 按照people的到达时间对索引进行排序
    indices.sort((a, b) => people[a] - people[b]);

    let j = 0, curr = 0;
    // 定义两个变量：j表示当前正在处理的花的时间点的索引，curr表示当前的花的数量
    let ans = new Array(m).fill(0); // 初始化结果数组，存放每个人看到的花的数量
    // 遍历每个人的到达时间
    for (const i of indices) {
        // 当还有花的时间点未处理，且时间点小于等于当前人的到达时间
        while (j < arr.length && arr[j][0] <= people[i]) {
            // 累加花的数量
            curr += arr[j][1];
            // 移动到下一个时间点
            j += 1;
        }
        // 更新当前人看到的花的数量
        ans[i] = curr;
    }

    // 返回结果
    return ans;
};

let flowers = [[1, 6], [3, 7], [9, 12], [4, 13]];
let people = [2, 3, 7, 11];
console.log(fullBloomFlowers(flowers, people)); // [1,2,2,2]