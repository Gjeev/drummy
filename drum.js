const btn = document.querySelector("button");
const gpath = document.querySelectorAll("path");
const gline = document.querySelectorAll("line");
const grect = document.querySelectorAll("rect");
const gcircle = document.querySelectorAll("circle");
btn.addEventListener("click", () => {
  const icon = document.getElementById("icon");
  const header = document.querySelector("header");
  const key = document.querySelectorAll("#key");
  const body = document.querySelector("body");
  if (icon.getAttribute("class") == "fa-solid fa-toggle-off") {
    icon.setAttribute("class", "fa-solid fa-toggle-on");
    header.setAttribute("class", "dark");
    btn.setAttribute("class", "dark");
    for (const each of key) {
      each.setAttribute("class", "keysdark");
    }
    body.setAttribute("class", "body-dark");
    for (const each of gpath) {
      each.setAttribute("fill", "#000000ff");
      each.setAttribute("stroke", "#fae05cff");
    }
    for (const each of gline) {
      each.setAttribute("fill", "#000000ff");
      each.setAttribute("stroke", "#fae05cff");
    }
    for (const each of grect) {
      each.setAttribute("fill", "#000000ff");
      each.setAttribute("stroke", "#fae05cff");
    }
    for (const each of gcircle) {
      each.setAttribute("fill", "#000000ff");
      each.setAttribute("stroke", "#fae05cff");
    }
  } else if (icon.getAttribute("class") == "fa-solid fa-toggle-on") {
    icon.setAttribute("class", "fa-solid fa-toggle-off");
    header.setAttribute("class", "light");
    btn.setAttribute("class", "light");
    for (const each of key) {
      each.setAttribute("class", "keyslight");
    }
    body.setAttribute("class", "body-light");
    for (const each of gpath) {
      each.setAttribute("fill", "#ffffffff");
      each.setAttribute("stroke", "#b98b82ff");
    }
    for (const each of gline) {
      each.setAttribute("fill", "#ffffffff");
      each.setAttribute("stroke", "#b98b82ff");
    }
    for (const each of grect) {
      each.setAttribute("fill", "#ffffffff");
      each.setAttribute("stroke", "#b98b82ff");
    }
    for (const each of gcircle) {
      each.setAttribute("fill", "#ffffffff");
      each.setAttribute("stroke", "#b98b82ff");
    }
  }
});

for (const each of gpath) {
  each.setAttribute("fill", "#ffffffff");
  each.setAttribute("stroke", "#b98b82ff");
}
for (const each of gline) {
  each.setAttribute("fill", "#ffffffff");
  each.setAttribute("stroke", "#b98b82ff");
}
for (const each of grect) {
  each.setAttribute("fill", "#ffffffff");
  each.setAttribute("stroke", "#b98b82ff");
}
for (const each of gcircle) {
  each.setAttribute("fill", "#ffffffff");
  each.setAttribute("stroke", "#b98b82ff");
}

//crash cymbol wobble
crashCymbol = document.getElementById('Crash-Cymbol');
var crashtl = new TimelineMax({
	paused: true
});
crashtl.to(crashCymbol, 0.1, {rotation: 8, transformOrigin: "50% 50%"})
.to(crashCymbol,1.5, {rotation: 0, transformOrigin: "50% 50%", ease: Elastic.easeOut.config(2.5, 0.3)});
function crash(){
	crashtl.restart();
	crashtl.play();
}

//toms right and left
rightTomDrum = document.getElementById('Tom-Right-Drum');
leftTomDrum = document.getElementById('Tom-Left-Drum');
leftTomDrumAll = document.getElementById('Tom-Left-All');
rightTomDrumAll = document.getElementById('Tom-Right-All')
// right tom drum wobble
var rightTomtl = new TimelineMax({
	paused: true
});
rightTomtl.to(rightTomDrum, 0.1, {scaleX: 1.04, transformOrigin: "50% 50%", ease: Expo.easeOut})
.to(rightTomDrum, 0.1, {scaleY: 0.95, transformOrigin: "50% 50%", ease: Expo.easeOut}, '0')
.to(rightTomDrumAll, 0.1, {rotation: 2.5, transformOrigin: "0 50%", ease: Elastic.easeOut}, '0')
.to(rightTomDrum, 0.4, {scale: 1, transformOrigin: "50% 50%", ease: Elastic.easeOut})
.to(rightTomDrumAll, 0.6, {rotation: 0, transformOrigin: "0 50%", ease: Elastic.easeOut}, '-=0.4');

// right tom stuff
function rightTom(){
	rightTomtl.restart();
	rightTomtl.play();
	
}

// left tom drum wobble
var leftTomtl = new TimelineMax({
	paused: true
});
leftTomtl.to(leftTomDrum, 0.1, {scaleX: 1.04, transformOrigin: "50% 50%", ease: Expo.easeOut})
.to(leftTomDrum, 0.1, {scaleY: 0.95, transformOrigin: "50% 50%", ease: Expo.easeOut}, '0')
.to(leftTomDrumAll, 0.1, {rotation: -2.5, transformOrigin: "100% 50%", ease: Elastic.easeOut}, '0')
.to(leftTomDrum, 0.4, {scale: 1, transformOrigin: "50% 50%", ease: Elastic.easeOut})
.to(leftTomDrumAll, 0.6, {rotation: 0, transformOrigin: "100% 50%", ease: Elastic.easeOut}, '-=0.4');

// left tom tl stuff
function leftTom(){
	leftTomtl.restart();
	leftTomtl.play();
	
}

//hi hat stuff

hiHatTop = document.getElementById('Hi-Hat-Top');
hiHatBottom = document.getElementById('Hi-Hat-Bottom');

// hi-hat wobble
var hiHattl = new TimelineMax({
	paused: true
});
hiHattl.to([hiHatTop, hiHatBottom], 0.1, {rotation: -4, transformOrigin: "50% 50%"})
.to([hiHatTop, hiHatBottom], 0.6, {rotation: 0, transformOrigin: "50% 50%", ease: Elastic.easeOut.config(1.5, 0.2)});


function hiHat() {
	
	hiHattl.restart();
	hiHattl.play();
	
}
//snare
snareDrum = document.getElementById('Snare-Drum');

var snaretl = new TimelineMax({
	paused: true
});
snaretl.to(snareDrum, 0.1, {scaleX: 1.04, transformOrigin: "50% 50%", ease: Expo.easeOut})
.to(snareDrum, 0.1, {scaleY: 0.9, transformOrigin: "50% 100%", ease: Expo.easeOut}, '0')
.to(snareDrum, 0.4, {scale: 1, transformOrigin: "50% 100%", ease: Elastic.easeOut});

function snare(){
	snaretl.restart();
	snaretl.play();
	
}

//kick drum
kickDrumAll = document.getElementById('Kick');

var kicktl = new TimelineMax({
	paused: true
});
kicktl.to(kickDrumAll, 0.1, {scale: 1.02, transformOrigin: "50% 100%", ease: Expo.easeOut})
.to(kickDrumAll, 0.4, {scale: 1, transformOrigin: "50% 100%", ease: Elastic.easeOut});

function kick(){
	kicktl.restart();
	kicktl.play();
	
}
//floor tom

floorTomDrumAll = document.getElementById('Floor-Tom');

var floorTomtl = new TimelineMax({
	paused: true
});
floorTomtl.to(floorTomDrumAll, 0.1, {scaleX: 1.02, transformOrigin: "50% 50%", ease: Expo.easeOut})
.to(floorTomDrumAll, 0.1, {scaleY: 0.95, transformOrigin: "50% 100%", ease: Expo.easeOut}, '0')
.to(floorTomDrumAll, 0.4, {scale: 1, transformOrigin: "50% 100%", ease: Elastic.easeOut});

// floor tom tl stuff
function floorTom(){
	floorTomtl.restart();
	floorTomtl.play();
	
}

window.addEventListener("keydown", function (e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  if (!audio) return;
  audio.currentTime = 0;
  audio.play();
  switch (e.keyCode) {
    case 70:
        crash();
        break;
        
    case 76:
        leftTom();
        break;

    case 75:
        rightTom();
        break;
    
    case 83:
        hiHat();
        break;

    case 74:
        snare();
        break;

    case 68:
        kick();
        break;
    case 71:
        floorTom();
        break;
  }
});
