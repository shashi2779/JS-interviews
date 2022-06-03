# Types of function in JS 

es5 & before :

1- function statement
2- function Expression , named function Expression
3- function anonymous 


es6 & after :

1- arrow function
2- arrow fun with one parameter
3- arrow fun with implicit return 


## IIFE function 


============================================================================

# difference between function statement and function Expression

===========================================================================


# the major difference btw is "Hoisting" :
-------------------------------------

function a(){
    console.log("a is called)
}
a()




var b = function(){
    console.log("b is called)
}
b()

# output: 
          a is called
          b is called

------------------------------------

a()
b()

function a(){
    console.log("a is called)
}


var b = function(){
    console.log("b is called)
}

# output:
         a is called
         typeError : b is not a function



bcz  during the hoisting phase a() created a memory & this fun assign to a
     but in case of fun Expression this b is treated like a variable & it assigned "undefined" initially


---------------------------------------------------------------------------------------     


===============================================================================

# first class function , first class citizens

==================================================================================

=> fun are treated as a variable 

=> the ability of a function to be used as value & can be passed as arguments to another
   fun & can be returned from the function is this ability is known as first class fun



1- fun inside another fun as arguments

@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@


var b = function(param){
    console.log("param")
}

b(function(){

})


# output:
       f (){

       }




var b = function(param){
    console.log(param)
}

function xyz(){

}

b(xyz)


# output:
       f xyz(){

       }





2- we can return a fun from a function 
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

var b = function(param){
    console.log(param)
    return function(){

    }
}

console.log(b())


# output:
        f (){

        }