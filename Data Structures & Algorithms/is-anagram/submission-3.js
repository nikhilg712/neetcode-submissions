class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        const freqMap = new Map()
        for(const str of s){
            if(freqMap.has(str)) freqMap.set(str,freqMap.get(str)+1)
            else freqMap.set(str,1)
        }
        for(const str of t){
            if(freqMap.has(str)) freqMap.set(str,freqMap.get(str)-1)
            else return false
        }

        for(const value of freqMap.values()){
            if(value>0) return false
        }
        return true
    }
}
