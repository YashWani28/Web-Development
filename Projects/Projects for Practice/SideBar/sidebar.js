var toggle_state = document.getElementById("toggle_b");
var sidebar = document.querySelector(".sidebar_container");

toggle_state.addEventListener("click",function(){
    
    if(sidebar.classList.contains("sidebar_off"))
    {
        sidebar.classList.remove("sidebar_off")
    }
    else{
        sidebar.classList.add("sidebar_off");
    }

})