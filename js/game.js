var msg = document.getElementById('msg');
var animboard = document.getElementsByClassName('animboard')[0];
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
  animboard.style.backgroundImage = "url('images/icons/lantern.png')";
  animboard.style.backgroundRepeat = "repeat-x";
  animboard.style.backgroundPosition = "center top";
  msg.innerHTML = "Have a festive time in Asiatown..";
  setTimeout(function() { animboard.style.backgroundImage = 'none' }, 3000);
  var momo = document.createElement('img');
  momo.src = "images/icons/momo.png";
  momo.id = 'momo';
  momo.className = 'momo-start';
  animboard.append(momo);

  var noodles = document.createElement('img');
  noodles.src = "images/icons/noodles.gif";
  noodles.style.margin = '100px';
  noodles.style.height = '150px';
  noodles.style.width = '150px';
  setTimeout(function() { msg.innerHTML = "Eat a variety hearty meal from momos to noodles, yummm!"; animboard.append(noodles) }, 3000);
  setTimeout(function() { momo.parentNode.removeChild(momo); noodles.parentNode.removeChild(noodles) }, 10000);
}

function activateBeach() {
  var chair = document.createElement('img');
  chair.src = "images/icons/chair.png";
  chair.id = 'chair';
  chair.className = 'chair-slider';
  animboard.append(chair);
  msg.innerHTML = "Grab a beach chair and relax..";
  setTimeout(function() { chair.parentNode.removeChild(chair) }, 6000);

  var ship = document.createElement('img');
  ship.src = "images/icons/ship.png";
  ship.id = 'ship';
  ship.className = 'ship-slider';
  animboard.append(ship);
  setInterval(function() { msg.innerHTML = "Or take a sail on waters of Lake Eerie!" }, 4000);
  setTimeout(function() { ship.parentNode.removeChild(chair) }, 6000);
}
