let loadPage=document.getElementById("loadPage");
setTimeout(() => {
    loadPage.remove();
}, 2000);
let taskbar=document.getElementById("taskbar");
let startmenu=document.getElementById("startmenu");
taskbar.addEventListener("click",function(e) {
    if(startmenu.style.width!="0%"){
        startmenu.style.width="0%";
    }else{
        startmenu.style.width="40%";
    }

});
let icon=document.getElementsByClassName("icon");
let popup=document.getElementsByClassName("popup")[0];
Array.from(icon).forEach(element => {
    
    element.addEventListener("click",function(){

        if(popup.style.width!="0vw"){
            popup.style.width="0vw";
        }else{
            popup.style.width="25vw";  
        }
    });
});