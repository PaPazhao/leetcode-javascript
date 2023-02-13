// 20. 有效的括号
// 简单
// https://leetcode.cn/problems/valid-parentheses/description/
function isValid(s: string): boolean {
  const leftSet = new Set('{[(')
  const rightSet = new Set(')]}')
  const stack: string[] = []
  const isMatch = (left: string, right: string): boolean => {
      if (left === '[' && right === ']') { return true }
      if (left === '{' && right === '}') { return true }
      if (left === '(' && right === ')') { return true }
      return false
  }
  for (const char of s) {
      if (leftSet.has(char)) {
          stack.push(char)
          continue
      }
      if (rightSet.has(char)) {
          const topChar = stack[stack.length - 1]
          if (!isMatch(topChar, char)) {
              return false
          }
          stack.pop()
      }
  }
  return stack.length === 0
};
