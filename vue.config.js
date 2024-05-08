const { defineConfig } = require('@vue/cli-service')
console.log("process.env.NODE_ENV", process.env.NODE_ENV, process.env.NODE_ENV === 'production'? '/vue-app/': '/')

module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: process.env.NODE_ENV === 'production'? '/vue-app/': '/',
})
