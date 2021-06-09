import { createStore } from 'vuex'

const modulesFiles = require.context('./modules', true, /\.js$/)

// 自动装配模块
const modules = modulesFiles.keys().reduce((modules, modulePath) => {
  const moduleName = modulePath.replace(/^\.\/(.*)\.\w+$/, '$1')
  const value = modulesFiles(modulePath)
  modules[moduleName] = value.default
  return modules
}, {})

export default createStore({
  modules
})
