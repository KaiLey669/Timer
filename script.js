let btnStart = document.querySelector(".start_button");
let timer = document.querySelector(".timer");
let currentTime = new Date(0,0,0,0,1,0);
let endTime = new Date(0,0,0,0,0,0);
let checkTimer = false;

btnStart.addEventListener("click", () => {
    currentTime = new Date(0,0,0,0,1,0);
    btnStart.disabled = true;
    runtimer();
})

function runtimer(){
    const promise = new Promise((resolve, reject) => {
        if(currentTime > endTime){
            currentTime.setSeconds(currentTime.getSeconds() - 1);
            
            timeOut = setTimeout(runtimer, 1000);
            timer.innerText = currentTime.toLocaleTimeString();
        }
        else{
            resolve('The End');
        }
    }).then(value => {
        timer.innerText = currentTime.toLocaleTimeString();
        btnStart.disabled = false;
        alert('The End');
    })
}
