
var text = document.getElementById('substring').innerText;  
var textContent = text.innerText;
var subText = text.substring(0,50);
var final = text.innerHTML = subText + " ...";
text.innerHTML = final;
console.log(final);
