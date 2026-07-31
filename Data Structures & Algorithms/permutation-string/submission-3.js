class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkZeroFrequnecy(map) {
        for (const v of map.values()) {
            if (v != 0) return false
        }
        return true
    }
    findFreq(s1) {
        let map = new Map()
        for (const s of s1) {
            map.set(s, ((map.get(s)) || 0) + 1)
        }
        return map
    }
    checkInclusion(s1, s2) {
        let left = 0

        let freq = this.findFreq(s1)
        for (let r = s1.length - 1; r < s2.length; r++) {
            for (let i = left; i <= r; i++) {
                if (!freq.get(s2.charAt(i))) {
                    freq = this.findFreq(s1)
                    left++
                    break
                }
                if (freq.get(s2.charAt(i)) > 0) freq.set(s2.charAt(i), freq.get(s2.charAt(i)) - 1)
                const zFreq = this.checkZeroFrequnecy(freq)
                if (zFreq) return true

            }



        }
        return false
    }
}
