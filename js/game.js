function showCoords(event) {
  var x = event.clientX-320;
  var y = event.clientY-20;
  document.getElementById("textDisplay").innerHTML = "X is : "+x+", Y is : "+y;
}

function activatePlane() {
  var plane = document.getElementById("fly");
  plane.className = 'plane-start';
  setTimeout(function() { plane.className = 'plane-hide' }, 11000);
}
