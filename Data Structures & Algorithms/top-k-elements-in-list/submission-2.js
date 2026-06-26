class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const freq = new Map();
        const output = []
        const buckets = new Array(nums.length + 1)
            .fill(null)
            .map(() => []);
            console.log(buckets)
        for (const num of nums) {
            freq.set(num, freq.get(num) ? freq.get(num) + 1 : 1)
        }
        for (const [num, count] of freq) {
            buckets[count].push(num)
        }
        for (let i = buckets.length - 1; i > 0; i--) {
            for (const num of buckets[i]) {
                output.push(num)
                if (output.length == k) return output
            }
        }

    }
}
