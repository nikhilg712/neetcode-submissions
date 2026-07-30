class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        let left = 0
        let right = 0
        let ans = 0
        let maxFreq = 0
        const freq = new Array(26).fill(0)
        while (right < s.length) {
            const charCode = s.charCodeAt(right);

            // 3. Map ASCII value to 0-25 index ('A' is 65)
            const index = charCode - 65;

            // 4. Increment if it falls within the uppercase alphabet range
            if (index >= 0 && index < 26) {
                freq[index]++;
            }

            for (const f of freq) maxFreq = Math.max(maxFreq, f)
            let substringLength = right - left + 1
            let conversion = substringLength - maxFreq
            if (conversion <= k) {
                right++
                ans = Math.max(substringLength, ans)

            }
            else {
                const charCodeLeft = s.charCodeAt(left);
                const indexLeft = charCodeLeft - 65;
                const charCodeRight = s.charCodeAt(right);
                const indexRight = charCodeRight - 65;
                freq[indexLeft]--;
                freq[indexRight]--;
                left++
            }

        }
        return ans
    }
}
