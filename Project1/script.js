var navShowCount = 0;
document.querySelector("p.three_dot").addEventListener("click", ()=>{
    if(navShowCount === 0){
        document.querySelector("header nav").classList.add("show_now");
        navShowCount++;
    }else{
        document.querySelector("header nav").classList.remove("show_now");
        navShowCount--;
    }
})