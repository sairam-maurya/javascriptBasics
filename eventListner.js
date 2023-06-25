 let data=[
    {
        player:"james",
        score:52
    },
    {
        player:"mark",
        score:41
    }
 ]
 
 
 
 
 let btnEl = document.getElementById("btn-el")

 btnEl.addEventListener("click",function(){
    console.log( data[0].score)
 })