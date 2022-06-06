 # OOP'S : Call , Apply , Bind


# call :
        koi bhi function ko hmm agar multiple object k liye call karna chahte h , 
         toh call-fun ko uss object ka refrence dena hota h
         



 ##### (eg)
             let person1 ={
                 name:"shashi",
                 age:23,

                 showDetails : function(){
                     console.log(this.name+"is"+this.age+"years old")
                 }

              }


              let person2 ={
                 name:"vikash",
                 age:20,

                 showDetails : function(){
                     console.log(this.name+"is"+this.age+"years old")
                 }

              }

              person1.showDetails()
              person2.showDetails()


   #####  note:
         har  obj bna krr yahi (showDetails) fun de rhe , toh kam repeatative ho ja rha 

         kyun na hamare pas ese fun hote ki hamne ek obj me ek fun define kiya h 
         vo mai multiple object's k liye call kar pau
         
         toh esi ko solve karne k liye hamare pas h
              - call
              - apply 
              - Bind
             

### function borrowing:

     kisi obj me ek fun define kiya h vo mai multiple object's k liye call kar pau

      
       let person1 ={
                 name:"shashi",
                 age:23,

                 showDetails : function(){
                     console.log(this.name+"is"+this.age+"years old")
                 }

              }


              let person2 ={
                 name:"vikash",
                 age:20

              }


              person1.showDetails.call(person2)


             # output:
                       vikash is 20 year old


            
            # person1 se showDetails fun liya aur use kisi aur obj k liye call kar diya 
              esi ko hmm function borrowing kahte h  



   ### call() 
        koi bhi function ko hmm agar multiple object k liye call karna chahte h , 
        toh call-fun ko uss object ka refrence dena hota h  





           let person1 ={
                 name:"shashi",
                 age:23,

                 
            }


              
            let person2 ={
                 name:"vikash",
                 age:20,

            }


            let showDetails = function(){
                     console.log(this.name+" is "+this.age+" years old ")
            }



            showDetails.call(person2)
            showDetails.call(person1)


##### output:
            vikash is 20 years old

            shashi is 23 years old



### mana enn obj's k liye arguments pas karna chah rhe 

            let person1 ={
                 name:"shashi",
                 age:23,

                 
            }


              
            let person2 ={
                 name:"vikash",
                 age:20,

            }


            let showDetails = function(city,car){
                     console.log(`${this.name} is ${this.age} year old, he lives in ${city} & he drives ${car}`)
            }

            
            
            showDetails.call(person2,"noida","bmw")



##### output:
         vikash is 20 year old , he lives in noida & he drives bmw





# apply :
       
      apply()
      
       call/apply me arguments pass karne ka difference h 



       showDetails.apply(person1,['noida','bmw'])


##### output:

          shashi is 23 years old , he lives in noida & he drives bmw




 # bind :   
         function (showDetails) ko bind -> bound krr k rakh lega ki ye mere pas h ,
         lekin as a function hi h 
         mai turant call nhi karunga , app jab chahoge use call karna toh use kisi
         variable me store kar rakh lo , phir aap jab chahe tab call kar lena 





         let showDetailsBind = showDetails.bind(person2,'noida','bmw')
         
         console.log(showDetailsBind)
         
         # output :
                   [function : bound.showDetails]


          showDetailsBind() 


  ##### output:        
              vikash is 20 years old , he lives in noida & he drives bmw        


    