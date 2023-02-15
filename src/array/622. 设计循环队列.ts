// 622. 设计循环队列
// 中等
// https://leetcode.cn/problems/design-circular-queue/description/

class MyCircularQueue {
  #arr: number[]
  #size = 0
  #rear = 0
  #front = 0

  constructor(k: number) {
    this.#arr = new Array(k)
  }

  enQueue(value: number): boolean {
    if (this.isFull()) {
      return false
    }

    this.#arr[this.#rear] = value
    this.#rear = (this.#rear + 1) % this.#arr.length
    this.#size++
    return true
  }

  deQueue(): boolean {
    if (this.isEmpty()) {
      return false
    }
    this.#front = (this.#front + 1) % this.#arr.length
    this.#size--
    return true
  }

  Front(): number {
    if (this.isEmpty()) {
      return -1
    }
    const idx = this.#front
    return this.#arr[idx]
  }

  Rear(): number {
    if (this.isEmpty()) {
      return -1
    }
    const idx = (this.#rear - 1 + this.#arr.length) % this.#arr.length
    console.log(idx)
    return this.#arr[idx]
  }

  isEmpty(): boolean {
    return this.#size === 0
  }

  isFull(): boolean {
    return this.#size === this.#arr.length
  }
}

/**
* Your MyCircularQueue object will be instantiated and called as such:
* var obj = new MyCircularQueue(k)
* var param_1 = obj.enQueue(value)
* var param_2 = obj.deQueue()
* var param_3 = obj.Front()
* var param_4 = obj.Rear()
* var param_5 = obj.isEmpty()
* var param_6 = obj.isFull()
*/