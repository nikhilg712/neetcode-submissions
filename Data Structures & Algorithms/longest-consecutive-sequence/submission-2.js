class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        let set = new Set()
        let output = 1
        let max = 1
        if (nums.length == 0) return 0

        for (const num of nums) set.add(num)
        for (const num of nums) {
            let curr = num
            if (!set.has(num - 1)) {
                while (set.has(curr + 1)) {
                    max++
                    curr++
                }
                output = Math.max(output, max)
                max = 1
            }
        }

        return output
    }
}
