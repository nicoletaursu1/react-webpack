const req = require.context('.', true, /\.\/[^/]+\/[^/]+\.tsx$/)

req.keys().forEach((key) => {
  const componentName = key.replace(/^.+\/([^/]+)\.tsx/, '$1')
  module.exports[componentName] = req(key).default
})