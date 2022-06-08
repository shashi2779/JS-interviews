function printFirstName(firstName){
     console.log(firstName)
}


function printLastName(lastName){
    console.log(lastName)
} 


// printFirstName('shashi')

// printLastName('yadav')


//===============================================================================

// callback


function printFullName(firstName,cb){
    console.log(firstName)
    cb('yadav')
}

function printLastName(lastName){
    console.log(lastName)
}


// printFullName('shashi',printLastName)



//==============================================================================


function x(args){
    console.log('xaxi')
    args()

}

x(function y(){
    console.log('yadav')
    
}) 


//===================================================================================

console.log('before')

setTimeout(function st1(){
  console.log('i am st1')
},2000)

setTimeout(function st2(){
  console.log('i am st2')
},1000)


console.log('after')


//====================================================================================



// Calclulator create with call back function - addition ,sub , div, mul


// function calc(add, sub, mul, div) {
//     add(2, 3);  sub(4, 2);  mul(3, 3);  div(10, 5); add(2 , 4)
//   }
  
//   function addition(a, b) {
//     console.log(a + b);
//   }
  
//   function substraction(a, b) {
//     console.log(a - b);
//   }
  
//   function multiplication(a, b) {
//     console.log(a * b);
//   }
  
//   function division(a, b) {
//     console.log(a / b);
//   }
  
//   calc(addition, substraction, multiplication, division);
  
  