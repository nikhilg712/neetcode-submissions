class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const freqMap = new Map();
        for (let num of nums) {
            if (freqMap.has(num)) freqMap.set(num, freqMap.get(num) + 1);
            else freqMap.set(num, 1)
        }
        for (const val of freqMap.values()) {
            if (val > 1) return true

        }
        return false
    }
}
