let section = document.getElementsByTagName("section")[0]
let boxTop = 0;
let boxLeft = 0;

function movingX(side){
    if(side === 'ArrowLeft'){
        boxLeft-=10
        section.style.left=`${boxLeft}px`
    }if(side === 'ArrowRight'){
        boxLeft+=10
        section.style.left=`${boxLeft}px`
    }if(side === 'ArrowUp'){
        boxTop-=10
        section.style.top=`${boxTop}px`
    }if(side === 'ArrowDown'){
        boxTop+=10
        section.style.top= `${boxTop}px`
    }
}
document.addEventListener("keydown", (event) =>{
    if(event.code === 'ArrowLeft'){
        movingX('ArrowLeft')
    }if(event.code === 'ArrowRight'){
        movingX('ArrowRight')
    }if(event.code === 'ArrowUp'){
        movingX('ArrowUp')
    }if(event.code === 'ArrowDown'){
        movingX('ArrowDown')
    }
})

