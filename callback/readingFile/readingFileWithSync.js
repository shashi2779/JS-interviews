// This is Synchronous way of reading files
// file System - fs
// readFileSync
// serial order

const fs = require('fs')

console.log("before")

let data = fs.readFileSync('f1.txt')
// console.log(data)  // buffer dega print prr
console.log(''+data)

console.log('after')








