class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        nums = nums.sort((a, b) => a - b);
        let output = []
        for (let i = 0; i < nums.length; i++) {
            let left = i + 1
            let right = nums.length - 1
            if (i > 0 && nums[i] == nums[i - 1]) continue
            while (left < right) {
               
                if (nums[left] + nums[right] == (-nums[i])) {
                    output.push([nums[i],nums[left], nums[right]])
                    left++
                    right--
                    while (left > 0 && nums[left] == nums[left - 1]) left++
                while (right < nums.length - 1 && nums[right] == nums[right + 1]) right--
                    
                }
                else if (nums[left] + nums[right] < (-nums[i])) left++
                else right--
                 

                

            }
        }
        return output
    }
}
