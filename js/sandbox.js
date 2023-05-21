let colors = ['a', 'b', 'c', 'd', 'e', 'f', 1, 2, 3, 4, 5, 6 , 7, 8, 9, 0]
    
const btn = document.getElementById("btn");
const color = document.getElementById("color")

btn.addEventListener("click", ()=>{
  let hexColor = '#';

  for(let i = 0; i < 6; i++){
    hexColor += colors[getRandomNumber()]
  }
  
  color.textContent = hexColor;
  document.body.style.backgroundColor = hexColor
})

function getRandomNumber(){
  return Math.floor(Math.random() * colors.length)
}