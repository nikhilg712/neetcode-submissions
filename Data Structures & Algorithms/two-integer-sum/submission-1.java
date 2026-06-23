class Solution {
    public int[] twoSum(int[] nums, int target) {
        HashMap<Integer,Integer> hs = new HashMap<>();
        for(int i=0; i<nums.length;i++){
            hs.put(nums[i],i);
        }
        int[] arr = {0,0};


        for(int i=0; i<nums.length;i++){
            if(hs.containsKey(target-nums[i])&& i!=hs.get(target-nums[i])){
                arr[0]=i;
                arr[1]=hs.get(target-nums[i]);
                break;
            }
        }

        return arr;
        
    }
}
