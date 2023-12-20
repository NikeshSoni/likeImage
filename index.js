
const box = document.querySelector(".box");

const love = document.querySelector("i");

box.addEventListener("dblclick" , () => {

    love.style.scale = "2";
    love.style.display = "flex";

    setTimeout( () => {
       love.style.scale = "0"
    },1000)

   
})
