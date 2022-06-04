
# oops in js
## this 
         In js , the this keyword refers to an object.

##### Note:
         the this keyword is not associated with arrow function.



### Two enviroment in js

- Node
- Browser


### Two mode in js

- strict mode
- non-strict mode

### IMAGE 

 ![CHEESE!](img/this.jpeg)


## Node : non-strict mode

### (i) 
        console.log(this);
     
####   output:   
               { }  - empty object



### (ii) Inside a function     

      function fn(){
          console.log(this)
      } 



####   output:   
               object[global]



### (iii) Inside a function Inside an object (obj -> fun)

        let obj = {
            name : "shashi",
            fn:function(){
                console.log(this)
            }
        }

        obj.fn()


####   output:   
               {name:"shashi" , fn:[function]}  - return an object itself





### (iv) obj -> fun -> fun

      let obj = {
          name:"shashi",
          f: function(){
              function g(){
                  console.log(this)
              }
              g()
          }
      }


     obj.f() 


####   output:   
              object[global]




## Node : strict mode

### (i)   
         "use strict"

         console.log(this)


####   output:   
              { }  - empty object




### (ii)  "Inside a function" with strict mode

         "use strict"

         function fn(){
             console.log(this)
         }


####   output:   
              undefined



### (iii)  obj -> fun
       
       "use strict"

       let obj = {
           name:"shashi",
           fn:function(){
               console.log(this)
           }
       }

       obj.fn()


####   output:   
              
              {name:"shashi",fn:[function]} - object itself



### (iv)  obj -> fun -> fun

     "use strict"

     let obj = {
         name:"shashi",
         fn:function(){
             function g(){
                 console.log(this)
             }
             g()
         }
     }

    
       obj.fn()



####   output:   
              
              undefined



## Browser : non-strict mode

### (i) 
        console.log(this);
     
####   output:   
 ##### on console : 
                    window obj


### (ii) Inside a function     

      function fn(){
          console.log(this)
      } 



####   output:   
                window obj




### (iii) obj -> fun

        let obj = {
            name : "shashi",
            fn:function(){
                console.log(this)
            }
        }

        obj.fn()


####   output:   
                object itself



### (iv) obj -> fun -> fun

      let obj = {
          name:"shashi",
          f: function(){
              function g(){
                  console.log(this)
              }
              g()
          }
      }


     obj.f() 


####   output:   
               window obj





## Browser : strict mode

### (i)   
         "use strict"

         console.log(this)


####   output:   
               window obj




### (ii)  "Inside a function" with strict mode

         "use strict"

         function fn(){
             console.log(this)
         }


####   output:   
              undefined



### (iii)  obj -> fun
       
       "use strict"

       let obj = {
           name:"shashi",
           fn:function(){
               console.log(this)
           }
       }

       obj.fn()


####   output:   
              
              {name:"shashi",fn:[function]} - object itself




### (iv)  obj -> fun -> fun

     "use strict"

     let obj = {
         name:"shashi",
         fn:function(){
             function g(){
                 console.log(this)
             }
             g()
         }
     }

    
       obj.fn()



####   output:   
              
              undefined
