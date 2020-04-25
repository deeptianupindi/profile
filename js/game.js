var msg = document.getElementById('msg');
var msgboard = document.getElementsByClassName('msgboard')[0];
var parent = document.getElementsByClassName('parentdiv')[0];

function activatePlane() {
  var plane = document.createElement('img');
  plane.src = "images/plane.png";
  plane.id = 'fly';
  plane.className = 'plane-start';
  parent.append(plane);
  setTimeout(function() { plane.parentNode.removeChild(plane) }, 6000);
  msg.innerHTML = "Welcome to Cleveland!";
}

function activateAsia() {

}

function activateBeach() {
  var chair = document.createElement('img');
  chair.src = "images/icons/chair.png";
  chair.id = 'chair';
  chair.className = 'msgboard chair-slide';
  msgboard.append(chair);
  msg.innerHTML = "Walk along the banks of Lake Eerie, where families, students, everyone else get to relax and unwind.";
  setTimeout(function() { chair.parentNode.removeChild(chair) }, 6000);
}
