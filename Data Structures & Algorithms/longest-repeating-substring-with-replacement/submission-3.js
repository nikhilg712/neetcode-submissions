class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        let left = 0
        // let right = 0
        let ans = 0
        let maxFreq = 0
        const freq = new Array(26).fill(0)
        for (let right=0;right < s.length;right++) {

            // 3. Map ASCII value to 0-25 index ('A' is 65)
            const index = s.charCodeAt(right) - 65;
            freq[index]++;
             maxFreq = Math.max(maxFreq, freq[index])
            let substringLength = right - left + 1
            let conversion = substringLength - maxFreq
            if (conversion <= k) {
                ans = Math.max(substringLength, ans)

            }
            else {
                const charCodeLeft = s.charCodeAt(left);
                const indexLeft = charCodeLeft - 65;
                // const charCodeRight = s.charCodeAt(right);
                // const indexRight = charCodeRight - 65;
                freq[indexLeft]--;
                // freq[indexRight]--;
                left++
            }

        }
        return ans
    }
}
