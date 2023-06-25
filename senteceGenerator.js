const arr1=["china","india","usa"]
const arr2=["apple","banana"]
const desc1 ="The 3 Largest Countries are"
const desc2 ="The 2 best fruits are"

function sentenceGenerator( desc,arr){

    if(arr.length === 3){
        console.log(`${desc} ${arr[0]},${arr[1]},${arr[2]}
        `)

    }
    else{
        console.log(`${desc} ${arr[0]} ${arr[1]}`)
    }
    

}

sentenceGenerator( desc1,arr1)