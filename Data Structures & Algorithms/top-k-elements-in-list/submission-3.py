class Solution:
    def topKFrequent(self, nums: List[int], k: int) -> List[int]:
        buckets=[[] for _ in range(len(nums)+1)]
        output=[]
        freq={}
        for n in nums:
            if n in freq:
                freq[n]+=1
            else:
                freq[n]=1
        for num,f in freq.items():
            buckets[f].append(num)
        for b in range(len(buckets)-1,-1,-1):
            if len(output)==k:
                break
            else:
                output=[*output,*buckets[b]]


        return output
        