// 88. 合并两个有序数组
// 简单
// https://leetcode.cn/problems/merge-sorted-array/description/?envType=study-plan&id=shu-ju-jie-gou-ru-men&plan=data-structures&plan_progress=jnfgan7
/**
 Do not return anything, modify nums1 in-place instead.
 */
 function merge(nums1: number[], m: number, nums2: number[], n: number): void {
  let curNum = nums1.length - 1
  let mm = m - 1
  let nn = n - 1

  while(nn >= 0 && mm >= 0) {
      const mValue = nums1[mm]
      const nValue = nums2[nn]
      if(nValue >= mValue) {
          nums1[curNum] = nValue
          nn--
      } else {
          nums1[curNum] = mValue
          mm--
      }
      curNum--
  }

  while(nn >= 0) {
      nums1[curNum] = nums2[nn]
      nn--
      curNum--
  }
};