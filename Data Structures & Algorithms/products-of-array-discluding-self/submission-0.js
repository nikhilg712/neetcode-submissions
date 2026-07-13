class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        const leftProd = []
        const rightProd = new Array(nums.length).fill(0)
        const output=[]
        for(let l=0;l<nums.length;l++){
            if(l==0){
                leftProd.push(1)
            }
            else{
                leftProd.push(leftProd[l-1]*nums[l-1])
            }
        }
          for(let r=nums.length-1;r>=0;r--){
            if(r==nums.length-1){
                rightProd[r]=1
            }
            else{
                rightProd[r]=rightProd[r+1]*nums[r+1]
            }
        }
        for(let num=0;num<nums.length;num++){
            output.push(leftProd[num]*rightProd[num])
        }
        return output

    }
}
