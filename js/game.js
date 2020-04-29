var msg = document.getElementById('msg');
var msgboard = document.getElementsByClassName('msgboard')[0];

function reset(){
  while (msgboard.hasChildNodes()) {
    msgboard.removeChild(msgboard.firstChild);
  }
}
function activatePlane() {
  //reset();
  var plane = document.createElement('img');
  plane.src = "images/plane.png";
  plane.id = 'fly';
  plane.className = 'plane-start';
  msgboard.append(plane);
  //setTimeout(function() { plane.parentNode.removeChild(plane) }, 6000);
  msg.innerHTML = "Welcome to Cleveland!";
}

function activateAsia() {
  //reset();
  msg.innerHTML = "Have a festive time in Asiatown..";
  var lantern = document.createElement('div');
  lantern.id = "lantern";
  lantern.style.backgroundImage = "url('images/icons/lantern.png')";
  lantern.style.backgroundRepeat = "repeat-x";
  lantern.style.backgroundPosition = "center top";
  lantern.style.backgroundSize = "30px 30px";
  msgboard.append(lantern);
  var momo = document.createElement('img');
  momo.src = "images/icons/momo.png";
  momo.id = 'momo';
  momo.className = 'momo-start';
  msgboard.append(momo);

  var noodles = document.createElement('img');
  noodles.src = "images/icons/noodles.gif";
  noodles.style.margin = '100px';
  noodles.style.height = '150px';
  noodles.style.width = '150px';
  setTimeout(function() { msg.innerHTML = "Eat a variety hearty meal from momos to noodles, yummm!"; animboard.append(noodles) }, 3000);
  setTimeout(function() { momo.parentNode.removeChild(momo); noodles.parentNode.removeChild(noodles); animboard.style.backgroundImage = "none" }, 10000);
}

function activateBeach() {
  reset();
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

function activateMargarita() {
  reset();
  msg.innerHTML = "Celebrate a special event here or just another beautiful day!";
  var mexdiv = document.createElement('div');
  mexdiv.id = "mexdiv";
  mexdiv.style.backgroundImage = "url('images/icons/mexfood.png')";
  mexdiv.style.backgroundRepeat = "no-repeat";
  mexdiv.style.backgroundPosition = "center center";
  mexdiv.style.animation = "inner-circle 6s linear infinite";
  animboard.append(mexdiv);
  var marg = document.createElement('img');
  marg.src = "images/icons/margarita.png";
  marg.id = 'marg';
  marg.className = 'marg-start';
  setTimeout(function() { msg.innerHTML = "Good music, great food and everything else in between."; mexdiv.append(marg) }, 3000);
  setTimeout(function() { marg.parentNode.removeChild(marg); mexdiv.parentNode.removeChild(mexdiv); animboard.style.backgroundImage = "none" }, 10000);
}
