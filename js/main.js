var user = prompt("Enter your name please")
var ulList = document.getElementById('unOrder')
function storeInArray() {

  let names = []
  var inputmessage = document.getElementById('txtBox').value;
  names.push(inputmessage)
  for(var i=0; i<names.length;i++)
  {
    if(inputmessage !== "" && inputmessage !== " ")
    {
      var newList = document.createElement('li')
      newList.innerHTML =user + ": " + names[i] + "<br>"
      ulList.appendChild(newList)
    }
    else {
      alert("You have to fill this form")
    }
  }
document.getElementById('txtBox').value = ""
}




var t = setInterval(function(){timer()}, 1000)
//
function timer() {
  var d = new Date()
  document.getElementById('timer').innerHTML = d.toLocaleTimeString()
}
// var timerState = true

// function pauseTimer(btn) {
//   if(timerState)
//   {
//       btn.value = 'Play'
//       timerState = false
//       clearInterval(t)
//
//   }
//   else {
//     btn.value = 'Pause'
//     timerState = true
//     t = setInterval(function(){timer()}, 1000)
//   }
// }
//
// function toStartWrittingText() {
//   var myText = setInterval(function(){
//     document.getElementById("parag").innerHTML += "Hello "
//   },100)
// }
function replaceAll(){
  var p = document.getElementById('pa').innerHTML;
  var re = p.replace(/ka/gi, "farzad")
  document.getElementById('pa').innerHTML = re;
}
replaceAll()

var isOpenMenu = false;

function showMenu(e){
  e.preventDefault()
  var menu = document.getElementById('myContextMenu')
  menu.style.left = e.clientX
  menu.style.top = e.clientY
  menu.style.display = 'block'
  isOpenMenu = true
}

function showPrint(){
  document.getElementById('myContextMenu').style.display = 'none'
  window.print()

}
function hideMenu(){
  document.getElementById('myContextMenu').style.display = 'none'
  isOpenMenu = false
}

function openShortKey(e){
  if(isOpenMenu)
  {
    switch (e.keyCode)
    {
      case 78 : window.open();break;
      case 67 : window.close();break;
      case 80 : showPrint();break;
    }
  }
}


