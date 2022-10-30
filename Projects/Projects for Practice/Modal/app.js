var b1 = document.getElementById("b1");
var b2 = document.getElementById("b2");
var box1 = document.querySelector(".modal_container");
var box2 = document.querySelector(".modal_container2");
var translayer = document.querySelector(".trans_layer");

function onload1(){
    box1.classList.add("modal_container");
    box1.classList.remove("hide_display");
    box2.classList.add("hide_display");
    box2.classList.remove("modal_container2");
    translayer.setAttribute("style","opacity: 0;")

}
b1.addEventListener("click",function(){
    
    box1.classList.remove("modal_container");
    box1.classList.add("hide_display");
    box2.classList.remove("hide_display");
    box2.classList.add("modal_container2");
    translayer.setAttribute("style","opacity: 0.5;")
});
b2.addEventListener("click",function(){
    box1.classList.add("modal_container");
    box1.classList.remove("hide_display");
    box2.classList.add("hide_display");
    box2.classList.remove("modal_container2");
    translayer.setAttribute("style","opacity: 0;")

});

