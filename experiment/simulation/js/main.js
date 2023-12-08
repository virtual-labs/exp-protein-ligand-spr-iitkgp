//Your JavaScript goes in here


function start() {
   
    document.getElementById("step0").disabled = true;

    //document.getElementById("step1").disabled = false;
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

  }
  
  function restartexp() {
    location.reload();
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