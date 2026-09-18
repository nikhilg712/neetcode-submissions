class Solution:
    def maxArea(self, heights: List[int]) -> int:
        l=0
        h=len(heights)-1
        mh=-1
        while l<h:
            if heights[l]<heights[h]:
                mh=max(mh,heights[l]*(h-l))
                l+=1
            else:
                mh=max(mh,heights[h]*(h-l))
                h-=1
        return mh
