// function mergeIntervals(intervals) {
//     if (!intervals.length) {
//         return [];
//     }

//     // 根据每个区间的起始值对其进行排序
//     intervals.sort((a, b) => a[0] - b[0]);

//     const merged = [intervals[0]];

//     for (let i = 1; i < intervals.length; i++) {
//         const currentInterval = intervals[i];
//         const lastMergedInterval = merged[merged.length - 1];

//         // 检查当前区间是否与上一个合并的区间重叠
//         if (currentInterval[0] <= lastMergedInterval[1]) {
//             // 合并两个区间
//             merged[merged.length - 1] = [lastMergedInterval[0], Math.max(lastMergedInterval[1], currentInterval[1])];
//         } else {
//             // 如果没有重叠，将当前区间添加到合并的列表中
//             merged.push(currentInterval);
//         }
//     }

//     return merged;
// }

function mergeIntervals(intervals) {
    if (!intervals.length) {
        return [];
    }

    // 根据每个区间的起始值对其进行排序
    intervals.sort((a, b) => a[0] - b[0]);

    const merged = [intervals[0]];

    for (const currentInterval of intervals) {
        const lastMergedInterval = merged[merged.length - 1];

        // 检查当前区间是否与上一个合并的区间重叠
        if (currentInterval[0] <= lastMergedInterval[1]) {
            // 合并两个区间
            lastMergedInterval[1] = Math.max(lastMergedInterval[1], currentInterval[1]);
        } else {
            // 如果没有重叠，将当前区间添加到合并的列表中
            merged.push(currentInterval);
        }
    }

    return merged;
}

// 测试该函数
const intervals1 = [[1,3],[2,6],[8,10],[15,18]];
const intervals2 = [[1,4],[4,5]];

const output1 = mergeIntervals(intervals1);
const output2 = mergeIntervals(intervals2);

console.log(output1);  // [[1, 6], [8, 10], [15, 18]]
console.log(output2);  // [[1, 5]]
