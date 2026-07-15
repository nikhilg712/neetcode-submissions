class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        const leftMax= new Array(height.length).fill(0)
        const rightMax= new Array(height.length).fill(0)
        let output = 0
        for(let h=0;h<height.length;h++){
            if(h==0) leftMax[h]=height[h]
            else{
                leftMax[h]= Math.max(height[h-1],leftMax[h-1])
            }
        }
         for(let h=height.length-1;h>=0;h--){
            if(h==height.length-1) rightMax[h]=height[h]
            else{
                rightMax[h]= Math.max(height[h+1],rightMax[h+1])
            }
        }
        for(let h=0;h<height.length;h++){
            if(leftMax[h]>height[h]&&rightMax[h]>height[h]) output += Math.min(leftMax[h],rightMax[h])-height[h]
        }
        return output
        
    }
}
