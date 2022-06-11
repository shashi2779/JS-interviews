//  Task type - (1) serial order (2) parrel order
//serial order - (eg)- [create video -> edit -> upload] dependent h
// most famous question of iterviews - Asynchronous , parallel order hota h , hmm ne ussee serial order me banaya

const fs = require('fs')

console.log('before')

fs.readFile('f1.txt',cb1)

function cb1(error,data){
    if(error){
        console.log(error)
    }else{
        console.log(''+data)
        fs.readFile('f2.txt',cb2)
    }
}

function cb2(error,data){
    if(error){
        console.log(error)
    }else{
        console.log(''+data)
        fs.readFile('f3.txt',cb3)
    }
}

function cb3(error,data){
    if(error){
        console.log(error)
    }else{
        console.log(''+data)
    }
}

console.log('after')
