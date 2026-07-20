class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let buy = 0
        let profit =0
        for(let p =0;p<prices.length;p++){
            if(prices[p]<prices[buy]) buy = p
            profit = Math.max(profit,prices[p]-prices[buy])
        }
        return profit
    }
}
