function randomInt(min, max){
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function resetHTML(divToReset){
    window.document.getElementById(divToReset).innerHTML="";
}