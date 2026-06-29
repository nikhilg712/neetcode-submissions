class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let encoded_str = ""
        for (const str of strs) {
            encoded_str += str.length + "#" + str
        }
        return encoded_str
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        let decoded_str = []
        let length = ""
        let s =0
        while(s < str.length) {
            if (str.charAt(s) >= "0" && str.charAt(s) <= "9") {
                length += str.charAt(s)
            }
            if (str.charAt(s) == "#"){
                decoded_str.push(str.slice(s+1,s+1+Number(length)))
                s = s+Number(length)
                length=""
            }
            s++
        }
        return decoded_str
    }
}
