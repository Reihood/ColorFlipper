const colors = ["green", "red", "rgba(133,122,200)", "#F15025"];
const btn = document.getElementById("btn")
const color = document.querySelector(".color")

btn.addEventListener('click', function(){
    // Obtiene un numero al azar entre el 0 - 3
    const randomNumber = 2;
    document.body.style.backgroundColor = colors[randomNumber];
})