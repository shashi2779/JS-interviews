// parallel order - (eg)- downloading video(independent h)

const fs = require('fs')

console.log('before')

fs.readFile('f1.txt',cb)
fs.readFile('f2.txt',cb2)
fs.readFile('f3.txt',cb3)

function cb(error,data){
    if(error){
        // console.error(error)
        console.log(error)
    }else{
         console.log(''+data)
    }
}

function cb2(error,data){
    if(error){
        // console.error(error)
        console.log(error)
    }else{
         console.log(''+data)
    }
}

function cb3(error,data){
    if(error){
        // console.error(error)
        console.log(error)
    }else{
         console.log(''+data)
    }
}

console.log('after')