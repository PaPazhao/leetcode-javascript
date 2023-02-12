// 322. 零钱兑换
// 中等
// https://leetcode.cn/problems/coin-change/
function coinChange(coins: number[], amount: number): number {
  if(amount < 0) {
      return -1
  }
  if(amount === 0) {
      return 0
  }

  let res = Number.MAX_VALUE
  for(const coin of coins) {
      let sub = coinChange(coins, amount - coin)
      if(sub === -1) {
          continue
      }  
      res = Math.min(res, sub + 1)
  }

  return res === Number.MAX_VALUE ? -1 : res
};