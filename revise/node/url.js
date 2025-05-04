const url = require('url')
const link = new URL("https://www.github.com/prgateeshwaran")

console.log(link.protocol)
console.log(link.pathname)
console.log(link.hostname)
console.log(link.port || 'default')
console.log(link.origin)