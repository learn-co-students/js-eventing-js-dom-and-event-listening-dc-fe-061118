divs = document.querySelectorAll('div')
 
function capture(e) {
  console.log(this.firstChild.nodeValue.trim() + ' captured')
}
 
for (var aDiv of divs) {
  // set the third argument to `true`!
  aDiv.addEventListener('click', capture, true)
}