// 数组转 HASH
export function toHash(arr, key) {
  const hash = {}
  arr.forEach(item => {
    hash[item[key]] = item
  })
  return hash
}

// 求和
export function sum(arr) {
  return arr.reduce(function(prev, curr, idx, arr) {
    return prev + curr
  })
}

export function avg(arr) {
  return sum(arr) / arr.length
}
