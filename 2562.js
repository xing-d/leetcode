var findTheArrayConcVal = function (nums) {
    let concatValue = 0;

    while (nums.length > 0) {
        if (nums.length > 1) {
            // 如果 nums 中存在不止一个数字
            let first = nums.shift().toString();
            let last = nums.pop().toString();
            concatValue += parseInt(first + last);
        } else {
            // 如果仅存在一个元素
            concatValue += nums.pop();
        }
    }

    return concatValue;
}
/**
 * @param {number[]} nums
 * @return {number}
 */
var findTheArrayConcVal = function (nums) {
    let ans = 0;
    for (let i = 0, j = nums.length - 1; i <= j; i++, j--) {
        if (i < j) {
            ans += parseInt(nums[i].toString() + nums[j].toString());
        } else {
            ans += nums[i];
        }
    }
    return ans;
};