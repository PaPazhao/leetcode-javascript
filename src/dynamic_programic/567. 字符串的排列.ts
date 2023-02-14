// 567. 字符串的排列
// 中等
// https://leetcode.cn/problems/permutation-in-string/description/
function checkInclusion(s1: string, s2: string): boolean {
  if (s1.length > s2.length) { return false }
  const needs = new CharSet(s1)
  const window = new CharSet()

  let left = 0, right = 0, valid = 0, start = 0, len = Number.MAX_VALUE
  while(right < s2.length) {
      const c = s2[right]
      right++

      if(needs.has(c)) {
          window.increment(c)
          if(window.get(c) === needs.get(c)) {
              valid++
          }
      }

      while(right - left >= s1.length) {
          if(valid === needs.size) {
              return true
          }
          let d = s2[left]
          left++
          if(needs.has(d)) {
              if(window.get(d) === needs.get(d)) {
                  valid--
              }
              window.decrement(d)
          }
      }
  }

  return false
};

class CharSet {
  #map: Map<string, number>

  constructor(string: string = '') {
      const map = new Map<string, number>()
      this.#map = map

      for (const char of string) {
          this.increment(char)
      }
  }

  get(key: string): number {
      return this.#map.get(key) ?? 0
  }

  increment(key: string) {
      const v = this.get(key) + 1
      this.set(key, v)
  }

  decrement(key: string) {
      const v = Math.max(0, this.get(key) - 1) 
      this.set(key, v)
  }
  set(key: string, value: number) { 
      this.#map.set(key, value)
  }

  has(key: string): boolean {
      return this.#map.has(key)
  }
  
  get size(): number {
      return this.#map.size
  } 
}