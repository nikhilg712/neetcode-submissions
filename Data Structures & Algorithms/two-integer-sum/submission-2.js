class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const map = new Map()
        const output = []
        for (let num = 0; num < nums.length; num++) {
            if (map.has(target - nums[num])) {
                output.push(num)
                output.push(map.get(target - nums[num]))
            }

            else map.set(nums[num], num)
        }
        return output
    }
}
