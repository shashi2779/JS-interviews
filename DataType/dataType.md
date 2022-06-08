# Data Type

#### two types of data type in js :
- premitive
- refrance (non-premitive)

###### premitive : 6 types
- string
- number
- boolean
- undefined
- null - show as obj type but it is premitive
- symbol 

###
    
    esme floating nhi hota as a number hi 
    treate hota h 

    var b = 2.3 // as a number 

###
     js me character nhi hota as a string
     treate hota h 

     var c = 'd'              // string
     var b = 'i am string'   // string


###### refrance : obj vs obj 

-      obj - array, function
        
        vs

       obj

   ###### 
       - typeOf array is object  
       - type of fun is fun but it is obj     

###### note

           everythings is object
           - dates
           - error
           - modules
           etc 

              

- (eg)
      
      let a = 'hello'
      console.log(a,typeOf(a))

###### output  

              hello string



- (eg)
        
        let a = 3.3 & b=2

        typeOf(a) // number
        typeOf(b) // number

 - (eg)

       let c = true 
       
       typeOf(c)// boolean       

 - (eg)

        let d = undefined
        console.log(d,typeOf(d)) // undefined undefined
        
        typeOf(d) // undefined

- (eg)

        let e = null
        typeOf(e) // object  


- (eg) 

        let arr = [1,3,4,3]
        console.log(arr,typeOf(arr))

        typeOf(arr) // object

- (eg)      

        let obj = {
            name : 'shashi',
            age:23
        }

        console.log(obj,typeOf(obj)) // object


- (eg) 

       function greet(){
           console.log('hello')
       }

       greet()

       console.log(typeOf(greet())) // function

        

             