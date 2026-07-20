class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        if(s.length<=1)return s.length
        let check = ""
        let output = ""
        for (const ch of s) {
            if (check.includes(ch)) {
                output = check.length>output.length?check:output
                check = check.slice(check.indexOf(ch) + 1)+ch
            }
            else check += ch
        }
        if(output==0 || check.length>output.length) return check.length
        return output.length
    }
}
