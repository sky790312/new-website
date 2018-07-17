export const throttle = (func, wait = 0, options = {}) => {
  let context, args, result
  let timeout = null
  let previous = 0
  if (!options) options = {}
  const later = () => {
    previous = options.leading === false ? 0 : Date.now()
    timeout = null
    result = func.apply(context, args)
    if (!timeout) context = args = null
  }
  return () => {
    const now = Date.now()
    if (!previous && options.leading === false) previous = now
    const remaining = wait - (now - previous)
    context = this
    args = arguments
    if (remaining <= 0 || remaining > wait) {
      if (timeout) {
        clearTimeout(timeout)
        timeout = null
      }
      previous = now
      result = func.apply(context, args)
      if (!timeout) context = args = null
    } else if (!timeout && options.trailing !== false) {
      timeout = setTimeout(later, remaining)
    }
    return result
  }
}

export const getWindowSize = () => {
  let windowSize
  if (window.innerWidth < 768) {
    windowSize = 's'
  } else if (window.innerWidth >= 768 && window.innerWidth < 1024) {
    windowSize = 'm'
  } else {
    windowSize = 'l'
  }
  return windowSize
}
