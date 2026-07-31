class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */


    checkInclusion(s1, s2) {
        let left = 0
        const freq = new Array(26).fill(0)
        for (const s of s1) freq[s.charCodeAt(0) - 97]++;
        for (let right = 0; right < s2.length; right++) {
            if (right - left + 1 > s1.length) {
                freq[s2.charCodeAt(left) - 97]++
                left++
            }
            freq[s2.charCodeAt(right) - 97]--
              if (right - left + 1 == s1.length) {
                let ok =true
                for(const x of freq){
                    if(x!=0) ok = false
                }
                if(ok) return true
            }
        }
        return false

    }
}
