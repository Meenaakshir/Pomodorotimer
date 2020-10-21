function  pomonum() {
         document.body.style.backgroundColor = "rgb(240, 91, 86)";
         document.getElementById("timernumber-minutes").innerHTML = "25";
        document.getElementById("timernumber-seconds").innerHTML = "00";
}
function shortbreak() {
          document.body.style.backgroundColor = "rgb(76, 166, 169)";
          document.getElementById("timernumber-minutes").innerHTML = "05";
        document.getElementById("timernumber-seconds").innerHTML = "00";


        }
function longbreak() {
        document.body.style.backgroundColor = "#498FC1";
        document.getElementById("timernumber-minutes").innerHTML = "15";
        document.getElementById("timernumber-seconds").innerHTML = "00";
}

  var min = 25;
  var sec = 0;
  

 /*function template () {
    document.getElementsById("timernumber-minutes").innerHTML = min;
    document.getElementsById("timernumber-seconds").innerHTML = sec;
      }*/
      function start()
      {
        min = 24;
        sec = 59;
        document.getElementById("timernumber-minutes").innerHTML = min;
        document.getElementById("timernumber-seconds").innerHTML = sec;

        var mininterval = setInterval(minutesTimer,60000);
        var secinterval = setInterval(secondsTimer,1000);
      
      function minutesTimer () {
        min= min-1;
        document.getElementById("timernumber-minutes").innerHTML = min;
              }

      function secondsTimer () {
        sec = sec-1;
        document.getElementById("timernumber-seconds").innerHTML = sec;

        if(sec<=0)
        {
          if(min<=0)
          {
            clearInterval(mininterval);
            clearInterval(secinterval);
          }
         
          sec = 60;
          
        }
      }
    }


/*function actionoftask() {
  var actn = document.getElementsByClassName("taskmenu");
  if (actn[0].style.display === "none") {
    actn[0].style.display = "block";
  } else {
    actn[0].style.display = "none";
  }
}*/


