class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findDuplicate(nums) {
        let out = new Array(nums.length).fill(0)
        for (let n = 0; n < nums.length; n++) {
            if(out[nums[n]]>0) return nums[n]
            else out[nums[n]]++
        }

    }
}
