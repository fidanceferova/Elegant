let plus = document.getElementById("plus")
let minus=document.getElementById("minus")
let input =document.getElementById("van")


plus.addEventListener("click",function(){
    input.value ++
})
minus.addEventListener("click",function(){
   if (input.value>0) {
   input.value --
    
   }else{
    input.value=0
   }
})