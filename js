const stars = document.querySelectorAll('.star')
const output = document.querySelector('.output')

for(let i = 0; i < stars.length; i++){
    stars[i].starValue = (i+1);
    ['mouseover', 'mouseout', 'click'].forEach(function(e){
    stars[i].addEventListener(e,starRate)
    })
}
function starRate(e){
    let t = e.type
    let starValue= this.starValue
    stars.forEach(function(ele,ind){
        if(t === 'click' ){
            if(starValue>=1){
                output.innerHTML = ` You rating is ${starValue} stars`
            }
           
         if (ind < starValue){
        ele.classList.add("green")
    }else{
        ele.classList.remove("green")
    }
}
if(t === 'mouseover' ){
    if (ind < starValue){
   ele.classList.add("yellow")
}else{
   ele.classList.remove("yellow")
}
}
if(t === 'mouseout' ){
    if (ind < starValue){
   ele.classList.remove("yellow")
    }
}
    })
}
