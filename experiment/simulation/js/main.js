//Your JavaScript goes in here
/*
Lab name: Experimental Biochemistry
Exp name: Kinetic characterization of protein-ligand binding by surface plasmon resonance (SPR)
File name: main.js
Developer: Prakriti Dhang*/

function start() {

  document.getElementById("step0").disabled = true;
  document.getElementById("step1").disabled = false;

}

function restartexp() {
  location.reload();
}



/**************************************************** clean with MilliQ ******************************************************************/

function cleanwithmilliq() {
  $('#alertModal').modal('show');
  $('.modal-body').text('Priming the system, Clean with MilliQ ');
  document.getElementById("step2").disabled = false;
  document.getElementById("step1").disabled = true;
}

function cancelmsg() {
  document.getElementById("alertModal").style.display = "none";
  document.getElementById("alertModal").classList.remove("show");
}




/**************************************************** sensor chip ******************************************************************/
var sensorchipimg;
function showopenbtn() {
  document.getElementById("stepopenschipdoor").disabled = false;
  sensorchipimg = document.getElementById("sensorchip");
}


var element1 = document.querySelector(".open");
var element2 = document.querySelector(".door1");

element1.addEventListener("click", toggleDoor);

function toggleDoor() {
  console.log("Door toggled!");
  element2.classList.toggle("doorOpen1");
  window.scrollBy(0, 700);

}

function openschipdoor() {
  var btntext = document.getElementById("stepopenschipdoor");

  if (btntext.innerHTML === "Open") {
    btntext.innerHTML = "Close";
    sensorchipimg.setAttribute("onclick", "insertchip()");
    document.getElementById("stepopenschipdoor").disabled = true;
  } else {
    btntext.innerHTML = "Open";
    
    document.getElementById("step2").disabled = true;
    document.getElementById("stepopenschipdoor").disabled = true;
  }
}

var imgschip = null;
function insertchip() {
  var schip = document.getElementById("sensorchip");
  document.getElementById("stp4a").style.display = "block";
  var schipleftp = 78; //initial  position
  clearInterval(imgschip);

  imgschip = setInterval(frame, 40); /* frame is 40 denotes the speed of the movement*/

  function frame() {
    if (schipleftp == 37) {

      document.getElementById("step3").disabled = false;
      document.getElementById("stepopenschipdoor").disabled = false;
      sensorchipimg.removeAttribute("onclick", "insertchip()");

      clearInterval(imgschip);

    } else {

      schipleftp--;
      schip.style.left = schipleftp + '%';

    }
  }
}



/**************************************************** prime with buffer ******************************************************************/
function primebuffer() {
  $('#alertModal').modal('show');
  $('.modal-body').text('Primed with buffer');

  document.getElementById("chk1").disabled = false;
  document.getElementById("chk2").disabled = false;
  document.getElementById("chk3").disabled = false;
  document.getElementById("chk4").disabled = false;
  document.getElementById("chk5").disabled = false;
  document.getElementById("step41").disabled = false;
  document.getElementById("step3").disabled = true;
}







/*******************************************************  Sample prep **********************************************************************************/
function sampleprep() {
  if ((document.getElementById("chk1").checked) && (document.getElementById("chk2").checked) && (document.getElementById("chk3").checked) && (document.getElementById("chk4").checked) && (document.getElementById("chk5").checked)) {
    document.getElementById("sampletube").style.display = "block";
    document.getElementById("stp4a").style.display = "block";
    document.getElementById("stp4b").style.display = "block";
    document.getElementById("stp4c").style.display = "block";
    document.getElementById("stp4d").style.display = "block";
    window.scrollBy(0, 500);
    document.getElementById("step421").disabled = false;
    document.getElementById("chk1").disabled = true;
  document.getElementById("chk2").disabled = true;
  document.getElementById("chk3").disabled = true;
  document.getElementById("chk4").disabled = true;
  document.getElementById("chk5").disabled = true;
  document.getElementById("step41").disabled = true;
  }
  else {
    $('#alertModal').modal('show');
    $('.modal-body').text('Check all the checkboxes for sample preparation. ');
  }
}


/**************************************************** open rack ******************************************************************/

var imgsrack = null;
var sampletray, trayoutimg, sampletube;
function openrack() {
  trayoutimg = document.getElementById("trayout");
  sampletray = document.getElementById("sampletray");
  sampletube = document.getElementById("sampletube");
  var schiptopp = 72; //initial  position
  window.scrollBy(0, 900);
  clearInterval(imgsrack);

  imgsrack = setInterval(frame, 50); /* frame is 40 denotes the speed of the movement*/

  function frame() {
    if (schiptopp == 85) {


      sampletray.setAttribute("onclick", "sampletrayinsert()");
      sampletube.setAttribute("onclick", "sampletubeinsert()");
      clearInterval(imgsrack);

    } else {

      schiptopp++;
      trayoutimg.style.top = schiptopp + '%';

    }
  }
}

/*** Tray placed in the rack ****/
function sampletrayinsert() {
  sampletray.style.top = 85 + '%';
  sampletray.style.left = 23.8 + '%';

}



/** Ligand sample insert **/
function sampletubeinsert() {
  sampletube.style.top = 87 + '%';
  sampletube.style.left = 26 + '%';
  document.getElementById("step422").disabled = false;
  

}



/*** Insert Tray  ****/

function injectrack() {
  window.scrollBy(0, 800);
  sampletray.style.top = 72 + '%';
  sampletray.style.left = 23.8 + '%';
  trayoutimg.style.top = 72 + '%';
  trayoutimg.style.left = 23.8 + '%';
  sampletube.style.top = 74 + '%';
  sampletube.style.left = 25 + '%';
  document.getElementById("step43").disabled = false;
  document.getElementById("step421").disabled = true;
  document.getElementById("step422").disabled = true;

}


/*************************************************************** Ligand run *************************************************************************/

function ligandrun() {
  document.getElementById("step43").disabled = true;
  document.getElementById('ligandimg1').style.display="block";
  document.getElementById('ligandimg2').style.display="block";
  document.getElementById('ligandimg3').style.display="block";
  document.getElementById('asso_disso').style.display="block";


  const canvas = document.getElementById('triangleCanvas');
  const ctx = canvas.getContext('2d');
  const centerX = canvas.width / 2;
  const centerY = canvas.height / 2;
  const sideLength = 100;
  var speed = 0.1;

  function drawTriangle(posy) {

    const gradient = ctx.createLinearGradient(centerX, centerY - sideLength / 2, centerX, centerY + sideLength / 2);
    gradient.addColorStop(0, '#F5FB9E');
    gradient.addColorStop(1, '#F3FF33');

    ctx.beginPath();
    ctx.moveTo(centerX, centerY - sideLength / 2);
    ctx.lineTo(centerX - sideLength / 2, centerY + sideLength / 2);
    ctx.lineTo(centerX + sideLength / 2, centerY + sideLength / 2);
    ctx.closePath();
    ctx.fillStyle = gradient;
    ctx.fill();
  }

  function moveLine() {
    posy = centerY - sideLength / 2;
    posy += speed;

    if (posy < 0 || posy > centerY) {
      speed = speed * -1;
    }
    return posy;
  }

  function loop() {
    // clear old frame;
    //ctxgs11.clearRect(0,0,canvass11.width, canvass11.height);
    const posy = moveLine();
    drawTriangle(posy);
    cancelani = requestAnimationFrame(loop);
  }

  requestAnimationFrame(loop);





  const canvas1 = document.getElementById('triangleCanvas1');
  const ctx1 = canvas1.getContext('2d');

  function drawTriangle1() {
    const gradient = ctx.createLinearGradient(centerX, centerY - sideLength / 2, centerX, centerY + sideLength / 2);
    gradient.addColorStop(0, '#F5FB9E');
    gradient.addColorStop(1, '#F3FF33');
    const centerX1 = canvas1.width / 2;
    const centerY1 = canvas1.height / 2;
    const sideLength1 = 100;

    // Draw the triangle
    ctx1.beginPath();
    ctx1.moveTo(centerX1, centerY1 - sideLength1 / 2);
    ctx1.lineTo(centerX1 - sideLength1 / 2, centerY1 + sideLength1 / 2);
    ctx1.lineTo(centerX1 + sideLength1 / 2, centerY1 + sideLength1 / 2);
    ctx1.closePath();
    ctx1.fillStyle = gradient;
    ctx1.fill();
  }

  drawTriangle1();
  ligandmove();
}


var imglg1 = null;
var imglg2 = null;
var imglg3 = null;
function ligandmove() {
  document.getElementById('asso_disso').style.top= 34 + "%";
  document.getElementById('asso_disso').style.left= 61 + "%";
  document.getElementById('asso_disso').style.transform= "rotate(-50deg)"; 
  lg1img = document.getElementById("ligandimg1");
  lg2img = document.getElementById("ligandimg2");
  lg3img = document.getElementById("ligandimg3");
  var lg1topp1 = 15;
  var lg1leftp1 = 5;
  var lg2topp = 15;
  var lg2leftp = 5;
  var lg3topp = 15;
  var lg3leftp = 5;

  clearInterval(imglg1);
  clearInterval(imglg2);
  clearInterval(imglg3);

  imglg1 = setInterval(frame, 50); /* frame is 40 denotes the speed of the movement*/
  imglg2 = setInterval(frame2, 50);
  imglg3 = setInterval(frame3, 50);
  function frame() {

    if ((lg1leftp1 == 55)) {

      clearInterval(imglg1);
      imglg1 = setInterval(frametop, 50);

    } else {


      lg1leftp1++;

      lg1img.style.left = lg1leftp1 + '%';


    }

  }

  function frametop() {

    if ((lg1topp1 == 32)) {

      clearInterval(imglg1);


    } else {


      lg1topp1++;

      lg1img.style.top = lg1topp1 + '%';

    }
  }
  /**/
  function frame2() {

    if ((lg2leftp == 45)) {

      clearInterval(imglg2);
      imglg2 = setInterval(frametop2, 50);

    } else {


      lg2leftp++;

      lg2img.style.left = lg2leftp + '%';


    }

  }

  function frametop2() {

    if ((lg2topp == 32)) {

      clearInterval(imglg3);


    } else {


      lg2topp++;

      lg2img.style.top = lg2topp + '%';


    }

  }

  /**/

  function frame3() {

    if ((lg3leftp == 35)) {

      clearInterval(imglg3);
      imglg3 = setInterval(frametop3, 50);

    } else {


      lg3leftp++;

      lg3img.style.left = lg3leftp + '%';


    }

  }

  function frametop3() {

    if ((lg3topp == 32)) {

      clearInterval(imglg3);
      document.getElementById("chk51").disabled = false;
      document.getElementById("chk52").disabled = false;
      document.getElementById("step51").disabled = false;

    } else {


      lg3topp++;

      lg3img.style.top = lg3topp + '%';


    }

  }

  
}


/**************************************************** Analyte sample prep ******************************************************************/

function analytesampleprep() {
  if ((document.getElementById("chk51").checked) && (document.getElementById("chk52").checked)) {
    document.getElementById("sampletube1").style.display = "block";
    document.getElementById("step521").disabled = false;
    window.scrollBy(0, 900);
    document.getElementById("chk51").disabled = true;
  document.getElementById("chk52").disabled = true;
  document.getElementById("step51").disabled = true;
  }
  else {
    $('#alertModal').modal('show');
    $('.modal-body').text('Check both the checkboxes for sample preparation. ');
  }
}




/**************************************************** inject sample analyte tray ******************************************************************/

var imgstray1 = null;
var sampletray1, trayoutimg1, sampletube1;
function opentray() {
  trayoutimg1 = document.getElementById("trayout");
  sampletray1 = document.getElementById("sampletray");
  sampletube = document.getElementById("sampletube");
  sampletube1 = document.getElementById("sampletube1");
  var schiptopp1 = 72;
  var stubetopp1 = 74;//initial  position
  window.scrollBy(0, 900);
  clearInterval(imgstray1);

  imgstray1 = setInterval(frame, 50); /* frame is 40 denotes the speed of the movement*/

  function frame() {
    if (schiptopp1 == 85 && stubetopp1 == 87) {


      sampletube1.setAttribute("onclick", "sampletubeinsert1()");

      clearInterval(imgstray1);

    } else {

      schiptopp1++;
      stubetopp1++;
      trayoutimg.style.top = schiptopp1 + '%';
      sampletray1.style.top = schiptopp1 + '%';
      sampletube.style.top = stubetopp1 + '%';

    }
  }
}


function sampletubeinsert1() {
  sampletube1.style.top = 87 + '%';
  sampletube1.style.left = 31 + '%';
  document.getElementById("step522").disabled = false;

}


function injecttray() {
  window.scrollBy(0, 800);
  sampletray.style.top = 72 + '%';
  sampletray.style.left = 23.8 + '%';
  trayoutimg.style.top = 72 + '%';
  trayoutimg.style.left = 23.8 + '%';
  sampletube.style.top = 74 + '%';
  sampletube.style.left = 25 + '%';
  sampletube1.style.top = 74 + '%';
  sampletube1.style.left = 30 + '%';
  document.getElementById("step53").disabled = false;
  document.getElementById("step521").disabled = true;
  document.getElementById("step522").disabled = true;
}

/***************************************************  Interaction run ******************************************************* */


function runinteraction() {
  document.getElementById("step53").disabled = true;
  document.getElementById('analyteimg1').style.display="block";
  document.getElementById('analyteimg2').style.display="block";
  document.getElementById('analyteimg3').style.display="block";

  const canvas = document.getElementById('triangleCanvas');
  const ctx = canvas.getContext('2d');
  const centerX = canvas.width / 2;
  const centerY = canvas.height / 2;
  const sideLength = 100;
  var speed = 0.1;

  function drawTriangle(posy) {

    const gradient = ctx.createLinearGradient(centerX, centerY - sideLength / 2, centerX, centerY + sideLength / 2);
    gradient.addColorStop(0, '#F5FB9E');
    gradient.addColorStop(1, '#F3FF33');

    ctx.beginPath();
    ctx.moveTo(centerX, centerY - sideLength / 2);
    ctx.lineTo(centerX - sideLength / 2, centerY + sideLength / 2);
    ctx.lineTo(centerX + sideLength / 2, centerY + sideLength / 2);
    ctx.closePath();
    ctx.fillStyle = gradient;
    ctx.fill();
  }

  function moveLine() {
    posy = centerY - sideLength / 2;
    posy += speed;

    if (posy < 0 || posy > centerY) {
      speed = speed * -1;
    }
    return posy;
  }

  function loop() {
    // clear old frame;
    //ctxgs11.clearRect(0,0,canvass11.width, canvass11.height);
    const posy = moveLine();
    drawTriangle(posy);
    cancelani = requestAnimationFrame(loop);
  }

  requestAnimationFrame(loop);





  const canvas1 = document.getElementById('triangleCanvas1');
  const ctx1 = canvas1.getContext('2d');

  function drawTriangle1() {
    const gradient = ctx.createLinearGradient(centerX, centerY - sideLength / 2, centerX, centerY + sideLength / 2);
    gradient.addColorStop(0, '#F5FB9E');
    gradient.addColorStop(1, '#F3FF33');
    const centerX1 = canvas1.width / 2;
    const centerY1 = canvas1.height / 2;
    const sideLength1 = 100;

    // Draw the triangle
    ctx1.beginPath();
    ctx1.moveTo(centerX1, centerY1 - sideLength1 / 2);
    ctx1.lineTo(centerX1 - sideLength1 / 2, centerY1 + sideLength1 / 2);
    ctx1.lineTo(centerX1 + sideLength1 / 2, centerY1 + sideLength1 / 2);
    ctx1.closePath();
    ctx1.fillStyle = gradient;
    ctx1.fill();
  }

  drawTriangle1();


  samplemove();


}


var imganl1 = null;
var imganl2 = null;
var imganl3 = null;
function samplemove() {
  document.getElementById('asso_disso').style.display="block";
  document.getElementById('asso_disso').style.top= 32 + "%";
  document.getElementById('asso_disso').style.left= 61 + "%";
  document.getElementById('asso_disso').style.transform= "rotate(-53deg)"; 
  anl1img = document.getElementById("analyteimg1");
  anl2img = document.getElementById("analyteimg2");
  anl3img = document.getElementById("analyteimg3");
  var anl1topp = 17;
  var anl1leftp = 5;
  var anl2topp = 17;
  var anl2leftp = 5;
  var anl3topp = 17;
  var anl3leftp = 5;

  clearInterval(imglg1);

  imganl1 = setInterval(framea, 50); /* frame is 50 denotes the speed of the movement*/
  imganl2 = setInterval(framea2, 50);
  imganl3 = setInterval(framea3, 50);
  function framea() {

    if (anl1leftp == 55) {

      clearInterval(imganl1);
      imganl1 = setInterval(frametopa, 50);

    } else {


      anl1leftp++;

      anl1img.style.left = anl1leftp + '%';

    }

  }

  function frametopa() {

    if (anl1topp == 30) {

      clearInterval(imganl1);


    } else {


      anl1topp++;

      anl1img.style.top = anl1topp + '%';

    }

  }
  /* */
  function framea2() {

    if (anl2leftp == 45) {

      clearInterval(imganl2);
      imganl2 = setInterval(frametoppa2, 50);
      
    } else {


      anl2leftp++;

      anl2img.style.left = anl2leftp + '%';

    }

  }

  function frametoppa2() {
    
    if (anl2topp ==30 ) {

      clearInterval(imganl2);


    } else {
      anl2topp++;
      anl2img.style.top = anl2topp + '%';

    }

  }

  /**/

  function framea3() {

    if (anl3leftp == 35) {

      clearInterval(imganl3);
      imganl3 = setInterval(frametopa3, 50);

    } else {


      anl3leftp++;

      anl3img.style.left = anl3leftp + '%';

    }

  }

  function frametopa3() {

    if (anl3topp == 30) {

      clearInterval(imganl3);
      document.getElementById("step6").disabled = false;

    } else {


      anl3topp++;

      anl3img.style.top = anl3topp + '%';

    }

  }
  
}


function regglycine(){
  document.getElementById("step6").disabled = true;
  document.getElementById("step7").disabled = false;
  document.getElementById('asso_disso').style.top= 34 + "%";
  document.getElementById('asso_disso').style.left= 61 + "%";
  document.getElementById('asso_disso').style.transform= "rotate(-50deg)"; 
}

function dataanalysis(){
  window.scrollBy(0,900);
  document.getElementById("step7").disabled = false;
}


window.onload = function () {

  var chart = new CanvasJS.Chart("chartContainer", {
    animationEnabled: true,
    title: {
      text: "Surface plasmon resonance (SPR)"
    },
    axisY: {
      title: "Resonance signal",
      minimum: -10,
      maximum: 0,
      gridThickness: 0

    },
    axisX: {
      title: "Time",
      minimum: 0,
      maximum: 2,
      //axisYType: "secondary", // Set axisYType to "secondary" for X-axis at the top
      // axisYIndex: 0

    },

    data: [{
      type: "spline",

      dataPoints: [

      ]
    }]
  });
  chart.render();


}