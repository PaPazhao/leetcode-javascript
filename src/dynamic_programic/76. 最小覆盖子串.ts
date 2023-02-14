// 76. 最小覆盖子串
// 困难
// https://leetcode.cn/problems/minimum-window-substring/
function minWindow(s: string, t: string): string {
    if (t.length > s.length) { return '' }
    const needChars = new Map<string, number>();
    const window = new Map<string, number>();

    for (const char of t) {
        let v = needChars.get(char) ?? 0;
        needChars.set(char, v + 1);
    }

    let left = 0, right = 0, start = 0, len = Number.MAX_VALUE;

    while (right < s.length) {
        // 扩大窗口
        const char = s[right];
        right++;

        if (needChars.has(char)) {
            const v = 1 + (window.get(char) ?? 0);
            window.set(char, v);
        }

        // 是否满足覆盖了
        let isValid = true;
        for (const [k, nCount] of needChars) {
            let wCount = window.get(k) ?? 0;
            if (wCount < nCount) {
                isValid = false;
            }
        }

        // 检查是否缩小做边界
        while (isValid) {
            if (right - left < len) {
                start = left;
                len = right - left;
            }
            // 待删除的
            const d = s[left];
            left++;
            if (needChars.has(d)) {
                let v = window.get(d)! - 1;
                window.set(d, v);
                let nCount = needChars.get(d) ?? 0;
                if (v < nCount) {
                    isValid = false;
                }
            }
        }
    }
    return Number.MAX_VALUE === len ? "" : s.slice(start, start + len);
}
let res = minWindow("ADOBECODEBANC", "ABC");
console.log(res);
