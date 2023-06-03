var maxProfit = function(prices) {
  let smallest = prices[0];
  let maxProfit = 0;
  for (let i = 1; i < prices.length; i++) {
      if (prices[i] < smallest) {
          smallest = prices[i];
      }
      const profit = prices[i] - smallest;
      if (profit > maxProfit) {
          maxProfit = profit;
      }
  }
  return maxProfit;
};