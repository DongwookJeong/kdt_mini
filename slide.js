import domStyling from "./style"

export default async function left(leftButton ,rightButton,div, digimon, count){

    leftButton.innerHTML = "<"
    leftButton.style.fontSize = "3em"
    leftButton.style.cursor = "pointer"
    console.log(domStyling)
    
    rightButton.innerHTML = ">"
    rightButton.style.fontSize = "3em"
    rightButton.style.cursor = "pointer"
  
  
    rightButton.addEventListener("click", ()=>{
      count -= 100
      console.log(count)
      console.log(div.children[0])
    for(let i = 0; i < digimon.length; i++){
      
      div.children[i].style.transform = `translateX(${count}px)`
      div.children[i].style.transition = "1s"
    }
  })
    leftButton.addEventListener("click", ()=>{
      count += 100
      console.log(count)
      console.log(div.children[0])
    for(let i = 0; i < digimon.length; i++){
      
      div.children[i].style.transform = `translateX(${count}px)`
      div.children[i].style.transition = "1s"
    }
  })
}
