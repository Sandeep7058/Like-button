var con = document.querySelector(".box")
var love=document.querySelector("i")

con.addEventListener("dblclick",function(){
    love.style.transform = 'translate(-50%,-50%)scale(1)';
    love.style.color = 'red';
    love.style.opacity = 0.8;
    setTimeout(function(){
        love.style.opacity = 0;  
    },3000);
    setTimeout(function(){
        love.style.transform = 'translate(-50%,-50%)scale(1)';  
    },2000);
})
