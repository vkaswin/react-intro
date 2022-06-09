export const classNames = (...args) => {
  return String(
    args.reduce((initial, className) => {
      if (typeof className === 'string') {
        return `${initial} ${className}`
      }

      const type = getDateType(className)

      if (type === 'object') {
        return Object.entries(className)
          .filter(([_, value]) => Boolean(value))
          .reduce((initial, [key, _]) => `${initial} ${key}`, initial)
      }

      return initial
    }, '')
  ).trim()
}

const getDateType = (data) => {
  if (typeof data !== 'object') {
    return typeof data
  }

  return Object.prototype.toString
    .call(data)
    .toLowerCase()
    .replace(/^\[object (\S+)\]$/, '$1')
}
