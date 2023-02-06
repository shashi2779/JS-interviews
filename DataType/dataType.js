// data type in js :
//                   1- premitive data type
//                   2-  refrance data type 


// premitive :
//                   1- number
//                   2- string
//                   3- boolean
//                   4- undefined
//                   5- null  - show as object but it is premitive
//                   6- symbol


// refrance :   obj vs obj
                  
                  
//          1- obj - array(type of obj)   , function(type of fun show prr obj hi h )     
                  
//          2- obj    
                  



// ##   JS me character nhi hota as a string treate hota h

//              var b = 2.3 // as number

//              var c = 'd' // as string

//              var d = 'i am a string'







// check prime no or not  (iterviews)

var flag = true
var num = 13

for(var i=2;i*i<=num;i++){
    if(num%i==0){
        flag = false
        break;
    }
}

if(flag == true){
    console.log('number is prime')
}else{
    console.log('number is not prime')
}


