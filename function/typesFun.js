//======================================
// function statement 
//======================================


function a(){
    console.log("shashi")
}

// a()

//=======================================
// function Expression
//=====================================

 var b = function(){
      console.log("xaxi")
 }

//  b()



var b = function(){
    return 2+3;
}

var val = b()

// console.log(val)


//================================
//named function Expression
//=================================

var nameFun = function xyz(){
    console.log("xaxi yadav")
    return ("shashi@"+333)
}
// nameFun()                         /*  print - xaxi yadav  */
// console.log(nameFun())              /*  print - xaxi yadav , shashi@333  */


//===========================================
//function anonymous 
//==========================================

//            function(){

//            }  

/*
note: aise likhane prr fun statement require a fun name error aayega 
        bcz anonymous fun looks like fun statement
        toh ECMA script bolta h ki fun statement ko name se define kare 
        nhi toh error aayega invalid syntax
*/


// anonymous fun ka use tab karte h jab koi fun se value return karani ho
// toh anonymous fun ko kisi variable me pas krr de 

var anonFun = function(){

}
// anonFun()

//*****anonymous function to create a function expression***** 



// ------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------


//=================================
// arrow function 
//=================================

var greet = ()=>{
      console.log("hello")
}

// val()


//========================================
// arrow fun with one parameter
//========================================

let arrFun = param => `3 is my lucky number:${param}`

// console.log(arrFun("SHASHI"))


/* 
   NOTE : agar aap do parameter pass krr rhe ho toh {} dena hoga
          aur param1,param2 ko => (param1,param2) aise likhana hoga
*/

//           let arrFunn = param1,param2 =>{
    
//           } //this show error bcz param1,param2 ko aise likhe => (param1,param2)


let arrFunWithTwoParam =( param1 , param2 ) =>{
         return param1+param2
}

// console.log(arrFunWithTwoParam(3,5))




//========================================
// arrow fun with implicit return : ( implicit means ) matlab return nhi dena h
//========================================


let arrowVal = x => x+1

// console.log(arrowVal(2))




let script = ()=> "shashi"

// console.log(script())


//========================================
//IIFE function
//=====================================

/*

how to learn :
------------

()()

+                       == ( function fn(){....} )()

function fn(){  }         


*/


(function () {
    console.log("i will run on my own")
  })();


(function fn() {
    console.log("i will run on my own")
 })();



//IIFE arrow

  (() => {

  })();


// async IIFE

  (async () => {
    
  })();




  