const files = require.context('.', false, /\.js$/)
const locales = {}

files.keys().forEach(fileName => {
  if (fileName === './index.js') {
    return
  }

  const moduleName = fileName.replace(/(\.\/|\.js)/g, '')
  locales[moduleName] = files(fileName).default
})

export default locales
