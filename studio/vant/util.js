function isDef(value) {
  return value !== undefined && value !== null
}

function isObj(x) {
  const type = typeof x
  return x !== null && (type === 'object' || type === 'function')
}

function get(object, path) {
  const keys = path.split('.')
  let result = object

  keys.forEach(key => {
    result = isDef(result[key]) ? result[key] : ''
  })

  return result
}

// my-name => myName
const camelizeRE = /-(\w)/g
function camelize(str) {
  return str.replace(camelizeRE, (_, c) => c.toUpperCase())
}

// 取中间值
function range(num, min, max) {
  return Math.min(Math.max(num, min), max)
}
