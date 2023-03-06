let fruit = ["🍎", "🍊", "🍎", "🍎", "🍊"]

let appleshelf = document.getElementById("apple-shelf")
let orangeshelf = document.getElementById("orange-shelf")

function sorter() {
  for(let i = 0; i < fruit.length; i++){
    if(fruit[i] === "🍎"){
      appleshelf.textContent +="🍎"
    } else if( fruit[i] === "🍊"){
      orangeshelf.textContent += "🍊"
    } else{
      console.log("console")
    }
  } 
}

sorter()

