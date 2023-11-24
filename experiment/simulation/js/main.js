//Your JavaScript goes in here


function start() {
   
    document.getElementById("step0").disabled = true;
    document.getElementById("step1").disabled = false;
  }
  
  function restartexp() {
    location.reload();
  }



  window.onload = function () {

    var chart = new CanvasJS.Chart("chartContainer", {
      animationEnabled: true,
      title: {
        text: "S urface plasmon resonance (SPR)"
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
        crosshair: {
          enabled: false
        }
  
  
  
      },
      data: [{
  
        type: "spline",
        dataPoints: [
  
        ]
      }]
    });
    chart.render();
   
  
  }