const btnMenu = document.getElementById("btnMenu");
const overlay = document.getElementById("overlay");
const drawer = document.querySelector(".drawer");


btnMenu.addEventListener("click", () => {
    overlay.style.visibility="visible";
    drawer.style.left="0px";
    drawer.style.boxShadow="0px 0px 10px #5a5a5a";
})

overlay.addEventListener('click', (e) => {
    if(e.target === overlay){
        overlay.style.visibility="hidden";
        drawer.style.left="-300px";
        drawer.style.boxShadow="0px 0px 2px #5a5a5a";
    }
})
