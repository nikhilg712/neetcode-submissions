class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums) {
        let low = 0
        let high = nums.length - 1
        let minimum = Infinity
        while (low <= high) {
            let mid = Math.floor((low + high) / 2)
            if (nums[low] <= nums[mid]) {
                minimum = Math.min(nums[low], minimum)
                low = mid + 1
            }
            else if (nums[mid] <= nums[high]) {
                minimum = Math.min(nums[mid], minimum)
                high = mid - 1
            }
        }
        return minimum
    }
}
