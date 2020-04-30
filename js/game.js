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
  msg.innerHTML = "Have a festive time in Asiatown..";
  var momo = document.createElement('img');
  momo.src = "images/icons/momo.png";
  momo.id = 'momo';
  msgboard.append(momo);

  var noodles = document.createElement('img');
  noodles.id = "noodles";
  noodles.src = "images/icons/noodles.gif";
  setTimeout(function() { msg.innerHTML = "Eat a variety hearty meal from momos to noodles, yummm!"; msgboard.append(noodles) }, 3000);
  setTimeout(function() { noodles.parentNode.removeChild(noodles) }, 6000);
}

function activateBeach() {
  msg.innerHTML = "Grab a beach chair and relax..";
  var chair = document.createElement('img');
  chair.src = "images/icons/chair.png";
  chair.id = 'chair';
  msgboard.append(chair);

  var ship = document.createElement('img');
  ship.src = "images/icons/ship.png";
  ship.id = 'ship';
  setTimeout(function() { msg.innerHTML = "Or take a sail on waters of Lake Eerie!"; msgboard.append(ship) }, 5000);
  setTimeout(function() { chair.parentNode.removeChild(chair); ship.parentNode.removeChild(ship) }, 6000);
}

function activateMargarita() {
//   msg.innerHTML = "Celebrate a special event here or just another beautiful day!";
//   var mexdiv = document.createElement('div');
//   mexdiv.id = "mexdiv";
//   mexdiv.style.backgroundImage = "url('images/icons/mexfood.png')";
//   mexdiv.style.backgroundRepeat = "no-repeat";
//   mexdiv.style.backgroundPosition = "center center";
//   mexdiv.style.animation = "inner-circle 6s linear infinite";
//   msgboard.append(mexdiv);
//   var marg = document.createElement('img');
//   marg.src = "images/icons/margarita.png";
//   marg.id = 'marg';
//   marg.className = 'marg-start';
//   setTimeout(function() { msg.innerHTML = "Good music, great food and everything else in between."; mexdiv.append(marg) }, 3000);
//   setTimeout(function() { marg.parentNode.removeChild(marg); mexdiv.parentNode.removeChild(mexdiv); msgboard.style.backgroundImage = "none" }, 10000);
}
