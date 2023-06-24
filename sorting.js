let fruit =["apple","orange","apple","apple","orange"]

let apple=[];
let orange=[];

function arrange(){
    for(i=0 ;i<fruit.length;i++ ){
        if(fruit[i]=== "apple"){
            apple.push(fruit[i])
        
        }
        else{
            orange.push(fruit[i])
            
        }
    }
    return apple 
    
}

console.log(arrange())