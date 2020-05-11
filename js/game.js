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
  msg.innerHTML = "Celebrate a special event here or just another beautiful day!";
  var mex = document.createElement('img');
  mex.id = "mex";
  mex.src = "images/icons/mexfood.png";
  msgboard.append(mex);
  var marg = document.createElement('img');
  marg.src = "images/icons/margarita.png";
  marg.id = 'marg';
  setTimeout(function() { msg.innerHTML = "Good music, great food and everything else in between."; msgboard.append(marg) }, 5000);
  setTimeout(function() { marg.parentNode.removeChild(marg); mex.parentNode.removeChild(mex) }, 10000);
}

function activateDowntown() {
  msg.innerHTML = "Visit downtown where the crowd is lively.. grab a coffee..";
  var crowd = document.createElement('img');
  crowd.id = "crowd";
  crowd.src = "images/icons/crowd.png";
  msgboard.append(crowd);
  var coffee = document.createElement('img');
  coffee.src = "images/icons/coffee.png";
  coffee.id = 'coffee';
  msgboard.append(coffee);
  var theater = document.createElement('img');
  theater.src = "images/icons/theater.png";
  theater.id = 'theater';
  setTimeout(function() { msg.innerHTML = "Or catch a show at the Playhouse Square"; msgboard.append(theater) }, 3000);
}

function activateSchool() {
  msg.innerHTML = "Come to Cleveland State, home of the Vikings!";
  var gradhat = document.createElement('img');
  gradhat.id = "gradhat";
  gradhat.src = "images/icons/grad2.png";
  msgboard.append(gradhat);

  var viking = document.createElement('img');
  viking.id = "viking";
  viking.src = "images/icons/viking.png";
  setTimeout(function() { msg.innerHTML = "Go Vikings!!"; msgboard.append(viking) }, 3000);
}

function activateAqua() {
  msg.innerHTML = "Marvel at the deep blue species and have a splash!";
  var fish = document.createElement('img');
  fish.id = "fish";
  fish.src = "images/icons/fish.png";
  msgboard.append(fish);
  var fish1 = document.createElement('img');
  fish1.id = "fish1";
  fish1.src = "images/icons/fish1.png";
  msgboard.append(fish1);
  var fish2 = document.createElement('img');
  fish2.id = "fish2";
  fish2.src = "images/icons/fish2.png";
  msgboard.append(fish2);
  var fish3 = document.createElement('img');
  fish3.id = "fish3";
  fish3.src = "images/icons/fish3.png";
  msgboard.append(fish3);

  var octopus = document.createElement('img');
  octopus.id = "octopus";
  octopus.src = "images/icons/octopus.png";
  setTimeout(function() { msgboard.append(octopus) }, 5000);
}

function activateBat() {
  msg.innerHTML = "Cheer the Cleveland Indians at Progressive Field";
  var ball = document.createElement('img');
  ball.id = "ball";
  ball.src = "images/icons/baseball.png";
  msgboard.append(ball);

  var bat = document.createElement('img');
  bat.id = "bat";
  bat.src = "images/icons/baseball1.png";
  setTimeout(function() { msgboard.append(bat) }, 3000);
  setTimeout(function() { ball.parentNode.removeChild(ball); bat.parentNode.removeChild(bat) }, 6000);
}

function activateLib() {
  msg.innerHTML = "If you need it, they have some of the best medical facilities";
  var med = document.createElement('img');
  med.id = "med";
  med.src = "images/icons/med.png";
  msgboard.append(med);

  var hosp = document.createElement('img');
  hosp.id = "hosp";
  hosp.src = "images/icons/hosp.png";
  msgboard.append(hosp);

  var book = document.createElement('img');
  book.id = "book";
  book.src = "images/icons/book.gif";
  setTimeout(function() { msg.innerHTML = "And some of the best libraries too" ; msgboard.append(book) }, 3000);
  setTimeout(function() { book.parentNode.removeChild(book) }, 6000);
}
