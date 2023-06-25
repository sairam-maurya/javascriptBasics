const imgs =[
    "../images/hips1.jpg",
    "../images/hips2.jpg",
    "../images/hips3.jpg"

]


let container = document.getElementById("container")


function render(){
    for(let i=0;i<imgs.length;i++){
        container.innerHTML+=imgs[i]
    }

}


render()