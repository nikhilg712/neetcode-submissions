class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        let leftMax = height[0]
        let rightMax = height[height.length - 1]
        let water = 0
        let left = 0
        let right = height.length - 1
        while (left != right) {
            if (height[left] < height[right]) {
                leftMax = Math.max(leftMax, height[left])
                water += leftMax-height[left]
                left++
            }
            else {
                rightMax = Math.max(rightMax, height[right])
                water += rightMax-height[right]
                right--

            }
        }
        // for (let h = 0; h < height.length; h++) {
        //     if (h == 0) leftMax[h] = height[h]
        //     else {
        //         leftMax[h] = Math.max(height[h - 1], leftMax[h - 1])
        //     }
        // }
        // for (let h = height.length - 1; h >= 0; h--) {
        //     if (h == height.length - 1) rightMax[h] = height[h]
        //     else {
        //         rightMax[h] = Math.max(height[h + 1], rightMax[h + 1])
        //     }
        // }
        // for (let h = 0; h < height.length; h++) {
        //     if (leftMax[h] > height[h] && rightMax[h] > height[h]) output += Math.min(leftMax[h], rightMax[h]) - height[h]
        // }
        return water

    }
}
