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
var sensorchipimg;
function cleanwithmilliq() {
  $('#alertModal').modal('show');
  $('.modal-body').text('Priming the system, Clean with MilliQ ');
  //document.getElementById("step2").disabled = false;
  document.getElementById("step1").disabled = true;
  document.getElementById("stepopenschipdoor").disabled = false;
  sensorchipimg = document.getElementById("sensorchip");
}

function cancelmsg() {
  document.getElementById("alertModal").style.display = "none";
  document.getElementById("alertModal").classList.remove("show");
}




/**************************************************** sensor chip ******************************************************************/

/*function showopenbtn() {
 
}*/


var element1 = document.querySelector(".open");
var element2 = document.querySelector(".door1");

element1.addEventListener("click", toggleDoor);

function toggleDoor() {
  console.log("Door toggled!");
  element2.classList.toggle("doorOpen1");
  window.scrollBy(0, 900);

}

function openschipdoor() {
  var btntext = document.getElementById("stepopenschipdoor");

  if (btntext.innerHTML === "Open door") {
    btntext.innerHTML = "Close door";
    sensorchipimg.setAttribute("onclick", "insertchip()");
    document.getElementById("stepopenschipdoor").disabled = true;
  } else {
    btntext.innerHTML = "Open door";
    
    //document.getElementById("step2").disabled = true;
    document.getElementById("stepopenschipdoor").disabled = true;
    document.getElementById("chk31").disabled = false;
    document.getElementById("chk32").disabled = false;
    document.getElementById("chk33").disabled = false;
    document.getElementById("chk34").disabled = false;
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
if((document.getElementById("chk31").checked)&& (document.getElementById("chk32").checked)&&(document.getElementById("chk33").checked)&&(document.getElementById("chk34").checked) ){
  $('#alertModal').modal('show');
  $('.modal-body').text('SPR machine is primed with buffer');
  document.getElementById("chk31").disabled = true;
  document.getElementById("chk32").disabled = true;
  document.getElementById("chk33").disabled = true;
  document.getElementById("chk34").disabled = true;

  document.getElementById("chk1").disabled = false;
  document.getElementById("chk2").disabled = false;
 
  document.getElementById("step40").disabled = false;
  document.getElementById("step3").disabled = true;
}
  
else{
  $('#alertModal').modal('show');
  $('.modal-body').text('Check all the checkboxes to prime with buffer.');
}
}



/*******************************************************  Sample prep  EDC NHS**********************************************************************************/
function prepedcnhs(){
  if ((document.getElementById("chk1").checked) && (document.getElementById("chk2").checked)){
    document.getElementById("edcnhs").style.display = "block";
    document.getElementById("stp4a").style.display = "block";
    document.getElementById("p2").style.display = "block";
    document.getElementById("step41").disabled = false;
    document.getElementById("step40").disabled = true;
    document.getElementById("stp4c").style.display = "block";
    window.scrollBy(0, 500);
    document.getElementById("chk1").disabled = true;
    document.getElementById("chk2").disabled = true;
    document.getElementById("chk3").disabled = false;
    document.getElementById("chk4").disabled = false;
   
    $('#alertModal').modal('show');
  $('.modal-body').text('The sample is placed in the sample tray ');
  }
  else {
    $('#alertModal').modal('show');
    $('.modal-body').text('Check EDC and NHS for sample preparation. ');
  }
}


/*******************************************************  Sample prep ligand sodium **********************************************************************************/
function sampleprep() {
  if ( (document.getElementById("chk3").checked) && (document.getElementById("chk4").checked)) {
    document.getElementById("sampletube").style.display = "block";
    document.getElementById("stp4a").style.display = "block";
   // document.getElementById("stp4b").style.display = "block";
    document.getElementById("stp4c").style.display = "block";
    document.getElementById("stp4d").style.display = "block";
    window.scrollBy(0, 500);
    
    document.getElementById("chk5").disabled = false;
  
  document.getElementById("chk4").disabled = true;
  document.getElementById("chk3").disabled = true;
  document.getElementById("step41").disabled = true;
  $('#alertModal').modal('show');
  $('.modal-body').text('The sample is placed in the sample tray ');

  }
  else {
    $('#alertModal').modal('show');
    $('.modal-body').text('Check ligand and sodium acetate buffer for sample preparation. ');
  }
}



function ethacheckbox(){
  if ((document.getElementById("chk5").checked) ){
    document.getElementById("etha").style.display = "block";
    document.getElementById("stp4a").style.display = "block";
  
    document.getElementById("stp4c").style.display = "block";
    document.getElementById("stp4d").style.display = "block";
   
    window.scrollBy(0, 500);
    document.getElementById("chk5").disabled = true;
    document.getElementById("stepopenstraydoor").disabled = false;
    $('#alertModal').modal('show');
  $('.modal-body').text('The sample is placed in the sample tray ');
  }
  else {
    $('#alertModal').modal('show');
    $('.modal-body').text('Check EDC and NHS for sample preparation. ');
  }
}



/**************************************************** sample tray opendoor  ******************************************************************/




var elements11 = document.querySelector(".open1");
var elements12 = document.querySelector(".sdoor1");

elements11.addEventListener("click", toggleDoors1);

function toggleDoors1() {
  console.log("Door toggled!");
  elements12.classList.toggle("sdoorOpen1");
  window.scrollBy(0, 900);

}

function openstraytpdoor() {
  var btntexts1 = document.getElementById("stepopenstraydoor");

  if (btntexts1.innerHTML === "Open door") {
    btntexts1.innerHTML = "Close door";
    //sensorchipimg.setAttribute("onclick", "insertchip()");
    document.getElementById("step421").disabled = false;
    document.getElementById("stepopenstraydoor").disabled = true;
  } else {
    btntexts1.innerHTML = "Open door";
    document.getElementById("step43").disabled = false;
    
    document.getElementById("stepopenstraydoor").disabled = true;
  }
}





/**************************************************** eject rack ******************************************************************/

var imgsrack = null;
var sampletray, trayoutimg, sampletube,sampletubeedc,sampletubeetha;
function openrack() {
  trayoutimg = document.getElementById("trayout");
  sampletray = document.getElementById("sampletray");
  sampletube = document.getElementById("sampletube");
  sampletubeedc = document.getElementById("edcnhs");
  sampletubeetha = document.getElementById("etha");
  var schiptopp = 72; //initial  position
  window.scrollBy(0, 900);
  clearInterval(imgsrack);

  imgsrack = setInterval(frame, 50); /* frame is 40 denotes the speed of the movement*/

  function frame() {
    if (schiptopp == 85) {

      
      sampletray.setAttribute("onclick", "sampletrayinsert()");
      document.getElementById("step421").disabled = true;
     // sampletube.setAttribute("onclick", "sampletubeinsert()");
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
  sampletube.style.top = 87 + '%';
  sampletube.style.left = 25.8 + '%';

  sampletubeedc.style.top = 87 + '%';
  sampletubeedc.style.left = 30.5 + '%';

  sampletubeetha.style.top = 87 + '%';
  sampletubeetha.style.left = 35.2 + '%';
  document.getElementById("step422").disabled = false;
}



/** Ligand sample insert *
function sampletubeinsert() {
  sampletube.style.top = 87 + '%';
  sampletube.style.left = 26 + '%';
  document.getElementById("step422").disabled = false;
  

}*/



/*** Insert Tray  ****/

function injectrack() {
  window.scrollBy(0, 800);
  sampletray.style.top = 72 + '%';
  sampletray.style.left = 23.8 + '%';
  trayoutimg.style.top = 72 + '%';
  trayoutimg.style.left = 23.8 + '%';
  sampletube.style.top = 74 + '%';
  sampletube.style.left = 30.5 + '%';

  sampletubeedc.style.top = 74 + '%';
  sampletubeedc.style.left = 25.2 + '%';

  sampletubeetha.style.top = 74 + '%';
  sampletubeetha.style.left = 35.2 + '%';

  
 
  document.getElementById("step422").disabled = true;
  document.getElementById("stepopenstraydoor").disabled = false;

}


/*************************************************************** Ligand run *************************************************************************/

function ligandrun() {
  window.scrollBy(0, 900);
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
      document.getElementById("stepopenstraydoor1").disabled = false;

    } else {


      lg3topp++;

      lg3img.style.top = lg3topp + '%';


    }

  }

  
}


/**************************************************** sample tray opendoor second time  ******************************************************************/




var elements21 = document.querySelector(".open2");
var elements22 = document.querySelector(".sdoor1");

elements21.addEventListener("click", toggleDoors21);

function toggleDoors21() {
  console.log("Door toggled!");
  elements22.classList.toggle("sdoorOpen1");
  window.scrollBy(0, 900);

}

function openstraytpdoor1() {
  var btntexts21 = document.getElementById("stepopenstraydoor1");

  if (btntexts21.innerHTML === "Open door") {
    btntexts21.innerHTML = "Close door";
    //sensorchipimg.setAttribute("onclick", "insertchip()");
    document.getElementById("step521").disabled = false;
    document.getElementById("stepopenstraydoor1").disabled = true;
  } else {
    btntexts21.innerHTML = "Open door";
    
    document.getElementById("step53").disabled = false;

    document.getElementById("stepopenstraydoor1").disabled = true;
  }
}


/**************************************************** Eject sample tray ******************************************************************/
function ejectsampletray(){
  window.scrollBy(0, 900);
  sampletray.style.top = 72 + '%';
  sampletray.style.left = 78 + '%';
  sampletube.style.top = 74 + '%';
  sampletube.style.left = 84.8 + '%';

  sampletubeedc.style.top = 74 + '%';
  sampletubeedc.style.left = 80 + '%';

  sampletubeetha.style.top = 74 + '%';
  sampletubeetha.style.left = 89.8+ '%';

}
/**************************************************** Remove edc. nhs, ethanolmine ******************************************************************/
function removeedcnhssamples(){
  $('#alertModal').modal('show');
  $('.modal-body').text('EDC, NHS and Ethanolmine sample tubes are removed from the sample tray of SPR machine. ');
  document.getElementById("edcnhs").style.display="none";
  document.getElementById("etha").style.display="none";
  document.getElementById("chk51").disabled = false;
  document.getElementById("chk52").disabled = false;
  document.getElementById("step51").disabled = false;
  document.getElementById("step521").disabled = true;
  document.getElementById("step50b").disabled = true;

}
/**************************************************** Analyte sample prep ******************************************************************/

function analytesampleprep() {
  if ((document.getElementById("chk51").checked) && (document.getElementById("chk52").checked)) {
    document.getElementById("sampletube1").style.display = "block";
    sampletube1.style.top = 87 + '%';
  sampletube1.style.left = 25.2 + '%';
    document.getElementById("step522").disabled = false;
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
var sampletray1, trayoutimg1, sampletube1,sampletubeedc1,sampletubeetha1;
function opentray() {
  trayoutimg1 = document.getElementById("trayout");
  sampletray1 = document.getElementById("sampletray");
  sampletube = document.getElementById("sampletube");
  sampletube1 = document.getElementById("sampletube1");
  sampletubeedc1 = document.getElementById("edcnhs");
  sampletubeetha1 = document.getElementById("etha");
  document.getElementById("step521").disabled = true;
  var straytopp1 = 72;
  var stubetopp1 = 74;//initial  position
  var sedctopp1=74;
  var sethatopp1=74;
  window.scrollBy(0, 900);
  clearInterval(imgstray1);

  imgstray1 = setInterval(frame, 50); /* frame is 40 denotes the speed of the movement*/

  function frame() {
    if (straytopp1 == 85 && stubetopp1 == 87 && sedctopp1 == 87 && sethatopp1 == 87 ) {
      document.getElementById("step50b").disabled = false;

    // sampletube1.setAttribute("onclick", "sampletubeinsert1()");


      clearInterval(imgstray1);

    } else {

      straytopp1++;
      stubetopp1++;
      sedctopp1++;
      sethatopp1++;
      trayoutimg.style.top = straytopp1 + '%';
      sampletray1.style.top = straytopp1 + '%';
      sampletube.style.top = stubetopp1 + '%';
      sampletubeedc1.style.top = stubetopp1 + '%';
      sampletubeetha1.style.top = stubetopp1 + '%';

    }
  }
}


function sampletubeinsert1() {
  sampletube1.style.top = 87 + '%';
  sampletube1.style.left = 25.2 + '%';
  document.getElementById("step522").disabled = false;

}


function injecttray() {
  window.scrollBy(0, 800);
  sampletray.style.top = 72 + '%';
  sampletray.style.left = 23.8 + '%';
  trayoutimg.style.top = 72 + '%';
  trayoutimg.style.left = 23.8 + '%';
  sampletube.style.top = 74 + '%';
  sampletube.style.left = 30.5 + '%';
  sampletube1.style.top = 74 + '%';
  sampletube1.style.left = 25.2 + '%';
  document.getElementById("stepopenstraydoor1").disabled = false;
  
  document.getElementById("step522").disabled = true;
}

/***************************************************  Interaction run ******************************************************* */


function runinteraction() {
  window.scrollBy(0, 900);
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
  document.getElementById("step54").disabled = false;
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

  clearInterval(imganl1);

  imganl1 = setInterval(framea, 50); /* frame is 50 denotes the speed of the movement*/
  imganl2 = setInterval(framea2, 50);
  imganl3 = setInterval(framea3, 50);
  function framea() {

    if (anl1leftp == 56) {

      clearInterval(imganl1);
      imganl1 = setInterval(frametopa, 50);

    } else {


      anl1leftp++;

      anl1img.style.left = anl1leftp + '%';

    }

  }

  function frametopa() {

    if (anl1topp == 29) {

      clearInterval(imganl1);


    } else {


      anl1topp++;

      anl1img.style.top = anl1topp + '%';

    }

  }
  /* */
  function framea2() {

    if (anl2leftp == 46) {

      clearInterval(imganl2);
      imganl2 = setInterval(frametoppa2, 50);
      
    } else {


      anl2leftp++;

      anl2img.style.left = anl2leftp + '%';

    }

  }

  function frametoppa2() {
    
    if (anl2topp ==29 ) {

      clearInterval(imganl2);


    } else {
      anl2topp++;
      anl2img.style.top = anl2topp + '%';

    }

  }

  /**/

  function framea3() {

    if (anl3leftp == 36) {

      clearInterval(imganl3);
      imganl3 = setInterval(frametopa3, 50);

    } else {


      anl3leftp++;

      anl3img.style.left = anl3leftp + '%';

    }

  }

  function frametopa3() {

    if (anl3topp == 29) {

      clearInterval(imganl3);
      

    } else {


      anl3topp++;

      anl3img.style.top = anl3topp + '%';

    }

  }
  
}

/*********************************************************** inject buffer *********************************************************************/
var imganlb1 = null;
var imganlb2 = null;
var imganlb3 = null;
function addbuffer(){
 
  document.getElementById("step7").disabled = false;
  document.getElementById("step8").disabled = false;
  document.getElementById("step54").disabled = true;

/** canvas 1**/
canvasp1 = document.getElementById("bufferc1");
      ctxgp1 = canvasp1.getContext("2d");
      var posYp1 = 0;
      var speedp1 = 0.2;



      function drawLinep1() {


        ctxgp1.strokeStyle = '#89CFFF';
        ctxgp1.lineWidth = 600;
        ctxgp1.beginPath();
        ctxgp1.moveTo(posYp1, 0); /*  */
        ctxgp1.lineTo(0, 0);
        ctxgp1.stroke();
      }

      function moveLinep1() {
        posYp1 += speedp1;

        if (posYp1 < 0 || posYp1 > canvasp1.height) {
          speedp1 = speedp1 * -1;
        }
      }

      function loopp1() {
        // clear old frame;
        //ctxgs11.clearRect(0,0,canvass11.width, canvass11.height);
        moveLinep1();
        drawLinep1();
        cancelani = requestAnimationFrame(loopp1);
      }
      requestAnimationFrame(loopp1);

setInterval(buffercanvas2, 650);

function buffercanvas2(){
/** canvas 2**/
canvasp2 = document.getElementById("bufferc2");
      ctxgp2 = canvasp2.getContext("2d");
      var posYp2 = 0;
      var speedp2 = 0.2;



      function drawLinep2() {


        ctxgp2.strokeStyle = '#89CFFF ';
        ctxgp2.lineWidth = 600;
        ctxgp2.beginPath();
        ctxgp2.moveTo(posYp2, 0); /*  */
        ctxgp2.lineTo(0, 0);
        ctxgp2.stroke();
      }

      function moveLinep2() {
        posYp2 += speedp2;

        if (posYp2 < 0 || posYp2 > canvasp2.height) {
          speedp2 = speedp2 * -1;
        }
      }

      function loopp2() {
        // clear old frame;
        //ctxgs11.clearRect(0,0,canvass11.width, canvass11.height);
        moveLinep2();
        drawLinep2();
        cancelani = requestAnimationFrame(loopp2);
      }
      requestAnimationFrame(loopp2);

      clearcanvas3= setInterval(buffercanvas3, 650);

    }
/** canvas 3**/
function buffercanvas3(){
  clearInterval(clearcanvas3);
   document.getElementById('asso_disso').style.top= 34 + "%";
  document.getElementById('asso_disso').style.left= 61 + "%";
  document.getElementById('asso_disso').style.transform= "rotate(-50deg)"; 

  var anlb1img = document.getElementById("analyteimg1");
  var anlb2img = document.getElementById("analyteimg2");
  var anlb3img = document.getElementById("analyteimg3");
  var anl1toppb = 29;
  var anl1leftpb = 56;
  var anl2toppb = 29;
  var anl2leftpb = 46;
  var anl3toppb= 29;
  var anl3leftpb = 36;

  //

  imganlb1 = setInterval(frametopab, 50); /* frame is 50 denotes the speed of the movement*/
  imganlb2 = setInterval(frametopab2, 50);
  imganlb3 = setInterval(frametopab3, 50);
  

  function frametopab() {
    console.log('frametopab called');
    console.log('anl1toppb:', anl1toppb);

    if (anl1toppb == 17) {

      clearInterval(imganlb1);
      imganlb1 = setInterval(frameleftab, 50);

    } else {


      anl1toppb--;

      anlb1img.style.top = anl1toppb + '%';

    }

  }

  function frameleftab() {
    console.log('frameleftab called');
    console.log('anl1leftpb:', anl1leftpb);


    if (anl1leftpb == 95) {

      clearInterval(imganlb1);
      document.getElementById("analyteimg1").style.display="none";

    } else {


      anl1leftpb++;

      anlb1img.style.left = anl1leftpb + '%';

    }

  }
  /* 2*/
  function frametopab2() {
   
    if (anl2toppb == 17) {

      clearInterval(imganlb2);
      imganlb2 = setInterval(frameleftab2, 50);

    } else {


      anl2toppb--;

      anlb2img.style.top = anl2toppb + '%';

    }

  }

  function frameleftab2() {

    if (anl2leftpb == 95) {

      clearInterval(imganlb2);
      document.getElementById("analyteimg2").style.display="none";

    } else {


      anl2leftpb++;

      anlb2img.style.left = anl2leftpb + '%';

    }

  }

  /*3*/

  function frametopab3() {
   
    if (anl3toppb == 17) {

      clearInterval(imganlb3);
      imganlb3 = setInterval(frameleftab3, 50);

    } else {


      anl3toppb--;

      anlb3img.style.top = anl3toppb + '%';

    }

  }

  function frameleftab3() {

    if (anl3leftpb == 95) {

      clearInterval(imganlb3);
      document.getElementById("analyteimg3").style.display="none";
 
    } else {


      anl3leftpb++;

      anlb3img.style.left = anl3leftpb + '%';

    }

  }




canvasp3 = document.getElementById("bufferc3");
      ctxgp3 = canvasp3.getContext("2d");
      var posYp3 = 0;
      var speedp3 = 0.2;



      function drawLinep3() {


        ctxgp3.strokeStyle = '#89CFFF ';
        ctxgp3.lineWidth = 600;
        ctxgp3.beginPath();
        ctxgp3.moveTo(posYp3, 0); /*  */
        ctxgp3.lineTo(0, 0);
        ctxgp3.stroke();
      }

      function moveLinep3() {
        posYp3 += speedp3;

        if (posYp3 < 0 || posYp3 > canvasp3.height) {
          speedp3 = speedp3 * -1;
        }
      }

      function loopp3() {
        // clear old frame;
        //ctxgs11.clearRect(0,0,canvass11.width, canvass11.height);
        moveLinep3();
        drawLinep3();
        cancelani = requestAnimationFrame(loopp3);
      }
      requestAnimationFrame(loopp3);
      
      setInterval(buffercanvas4, 650);
}



/** canvas 4**/
function buffercanvas4(){
  canvasp4 = document.getElementById("bufferc4");
        ctxgp4 = canvasp4.getContext("2d");
        var posYp4 = 0;
        var speedp4 = 0.2;
  
  
  
        function drawLinep4() {
  
  
          ctxgp4.strokeStyle = '#89CFFF ';
          ctxgp4.lineWidth = 600;
          ctxgp4.beginPath();
          ctxgp4.moveTo(posYp4, 0); /*  */
          ctxgp4.lineTo(0, 0);
          ctxgp4.stroke();
        }
  
        function moveLinep4() {
          posYp4 += speedp4;
  
          if (posYp4 < 0 || posYp4 > canvasp4.height) {
            speedp4 = speedp4 * -1;
          }
        }
  
        function loopp4() {
          // clear old frame;
          //ctxgs11.clearRect(0,0,canvass11.width, canvass11.height);
          moveLinep4();
          drawLinep4();
          cancelani = requestAnimationFrame(loopp4);
        }
        requestAnimationFrame(loopp4);
        setInterval(buffercanvas5, 650);
  }



  /** canvas 5**/
function buffercanvas5(){
  canvasp5 = document.getElementById("bufferc5");
        ctxgp5 = canvasp5.getContext("2d");
        var posYp5 = 0;
        var speedp5 = 0.2;
  
  
  
        function drawLinep5() {
  
  
          ctxgp5.strokeStyle = '#89CFFF ';
          ctxgp5.lineWidth = 600;
          ctxgp5.beginPath();
          ctxgp5.moveTo(posYp5, 0); /*  */
          ctxgp5.lineTo(0, 0);
          ctxgp5.stroke();
        }
  
        function moveLinep5() {
          posYp5 += speedp5;
  
          if (posYp5 < 0 || posYp5 > canvasp5.height) {
            speedp5 = speedp5 * -1;
          }
        }
  
        function loopp5() {
          // clear old frame;
          //ctxgs11.clearRect(0,0,canvass11.width, canvass11.height);
          moveLinep5();
          drawLinep5();
          cancelani = requestAnimationFrame(loopp5);
        }
        requestAnimationFrame(loopp5);
  
  }



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
      title: "Response (μM)",
      minimum: -10,
      maximum: 80,
      gridThickness: 0

    },
    axisX: {
      title: "Time (s)",
      minimum: 0,
      maximum: 250,
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