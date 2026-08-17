class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
      binarySearch(low,high,nums, target) {
        // let low = 0
        // let high = nums.length - 1
        while (low <= high) {

            let mid = Math.floor((low + high) / 2)
            if (nums[mid] == target) {
                return mid
            }
            else if (nums[mid] > target) high = mid-1
            else low = mid+1
        }
        return -1
    }
    search(nums, target) {
        let pivot = nums.length - 1
        for (let n = 0; n < nums.length - 1; n++) {
            if (nums[n] > nums[n + 1]) {
                pivot = n + 1
                break
            }
        }
        const sol = new Solution()
        if (nums[0] <= target && target <= nums[pivot-1]) return sol.binarySearch(0, pivot - 1, nums, target)
        else return sol.binarySearch(pivot, nums.length - 1, nums, target)
    }
}
