//  var start = true;
//  var store = []
//  var color = ["green", "red", "yellow ", "green" ]

//  document.addEventListener("keypress", function(event){
//     if(event.key === "Enter" && start === true){
//     document.getElementsByTagName("h1")[0].innerText = "LET'S PLAY THE GAME"
//     start = false
//     to_Store();
//     }
//  })

//  const to_Store=()=>{
//     var choose = Math.floor(Math.random()*4)
   
//     document.getElementById(color[choose]).classList.add("add")
//     store.push(color[choose])
//     console.log(store)
//     setTimeout(()=>{
//         document.getElementById(color[choose]).classList.remove("add")
//     },200)
//  }

//  var i = 0;
// function game(){
//  if(document.activeElement.id == store[i]){
//     if(i == store.length-1){
//         alert("CORRECT !!")
//         to_Store()
//     }
//  }
 
// }

    
var start = true;
var store = [];
var color = ["green", "yellow", "red", "blue"]

document.addEventListener("keypress", function(event){
if(event.key == "Enter" && start == true){
    document.getElementsByTagName("h1")[0].innerText = "lets play the game"
    start= false 
    to_Store() 
}
})


function to_Store(){
    var choose =  Math.floor(Math.random()*4)
    document.getElementById(color[choose]).classList.add("add")
    store.push(color[choose])
    var audio = new Audio("sound/simonSound1.mp3")
    audio.play()
    setTimeout(()=>{
        document.getElementById(color[choose]).classList.remove("add")
    },200)
}

var i = 0 

function game(){
    if(document.activeElement.id === store[i]){
        if(i === store.length-1){
            alert("CORRECT !!")
            to_Store()
            i = 0
        }else{
          i++
        }
    }else{
       alert("WRONG !!")
       window.location.reload()
    }

}

