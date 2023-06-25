const imgs =[
    "/hip1.jpg",
    "/hip2.jpg",
    "/hip3.jpg"

]


let container = document.getElementById("container")


function render(){
    for(let i=0;i<imgs.length;i++){
        container.innerHTML += `<img src="${imgs[i]}">`
    }

}


render()