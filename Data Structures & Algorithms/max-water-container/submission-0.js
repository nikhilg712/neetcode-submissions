class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let left =0
        let right = heights.length-1
        let max = -1
        while(left<=right){
            const min = Math.min(heights[left],heights[right])
            const water = (right-left)*min
            max = Math.max(water,max)
            if(min==heights[left])left++
            else right--
        }
        return max 
    }
}
