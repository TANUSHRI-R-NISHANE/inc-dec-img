let statusImgEl = document.getElementById("statusImg");
let errorMsgEl = document.getElementById("errorMsg");
let msgEl = document.getElementById("msg");

let width = 200;

function onDecrese(){

    if(width >= 110){
        width -= 10;

        statusImgEl.style.width =`${width}px`;
        msgEl.textContent =`Width :${width}px`;
        errorMsgEl.textContent="";
    }
    else{
        errorMsgEl.textContent ="Can't visible.Increase the size of the Image";
        errorMsgEl.style.color="red";
    }


}

function onIncrease(){
    if(width <= 290){
        width += 10;

        statusImgEl.style.width =`${width}px`;
        msgEl.textContent =`Width :${width}px`;
        errorMsgEl.textContent="";
    }
    else{
        errorMsgEl.textContent ="Too Big.Decrease the size of the Image";
        errorMsgEl.style.color="red";
    }

}