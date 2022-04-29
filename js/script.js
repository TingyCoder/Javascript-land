document.querySelector('#yell').addEventListener('click', run)

function run() {
  const wBox = document.querySelector('#wordBox').value



  // this is the old way to add it
  //concatenation is used here
  // document.querySelector('#placeToYell').innerText = fName + ' ' + fMidName + ' ' + ' ' + lMidName + ' ' + lName



//Add what you should be doing - conditionals go here
//ticks is used here and it is a new way to use it
//output: gets turn into 1 string
  document.querySelector('#placeToYell').innerText = `${wBox}`
}


////////////////////////////////////////////////////////////////

const synth = window.speechSynthesis;
document.querySelector('#yell').addEventListener('click', run)

function run() {

  
  const wBox = document.querySelector('#wordBox').value
  document.querySelector('h2').style.fontSize = '20px'
  document.querySelector('h2').style.color = 'rgba(84, 25, 233, 0.8)'
  document.querySelector('h2').style.fontFamily = 'cursive';
  document.querySelector('h2').style.borderBottom = '1px solid rgba(126, 148, 255, 0.8)'

  document.querySelector('h2').style.borderTop = '1px solid rgba(175, 127, 252, 0.8)'
  document.querySelector('h2').style.padding = '15px 50px 10px 55px'
  document.querySelector('h2').style.margin = ' 100px 0'


  const yellText = `${wBox}`

  document.querySelector('#placeToYell').innerText = yellText

  
  let yellThis = new SpeechSynthesisUtterance(yellText);

  synth.speak(yellThis);



}

 



