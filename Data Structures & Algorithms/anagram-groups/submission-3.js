class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {

        const map = new Map()
        const output = []
        for (const str of strs) {
            const keys = new Array(26).fill(0);
            for (const s of str) {
                keys[s.codePointAt() - 97] += 1
            }
            const key = keys.join(',')
            if (map.has(key)) {
                let getKey = map.get(key)
                getKey.push(str)
                map.set(key, getKey)
            }

            else map.set(key, [str])
        }
        for (const value of map.values()) {
            output.push(value)
        }
        return output
    }
}
