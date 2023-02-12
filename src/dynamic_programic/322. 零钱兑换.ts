// 322. 零钱兑换
// 中等
// https://leetcode.cn/problems/coin-change/
function coinChange(coins: number[], amount: number): number {
  if (amount < 0) {
    return -1;
  }
  if (amount === 0) {
    return 0;
  }

  let res = Number.MAX_VALUE;
  for (const coin of coins) {
    let sub = coinChange(coins, amount - coin);
    if (sub === -1) {
      continue;
    }
    res = Math.min(res, sub + 1);
  }

  return res === Number.MAX_VALUE ? -1 : res;
}

function coinChange2(coins: number[], amount: number): number {
  let dp = new Array<number>(amount + 1);
  dp[0] = 0;

  for (let i = 1; i < dp.length; i++) {
    dp[i] = amount + 1;
    for (const coin of coins) {
      if (i - coin < 0) {
        continue;
      }
      dp[i] = Math.min(dp[i], dp[i - coin] + 1);
    }
  }

  return dp[amount] === amount + 1 ? -1 : dp[amount];
}
