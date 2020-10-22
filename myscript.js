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

  var min = 0;
  var sec = 0;
  var mininterval ;
  var secinterval ;
      function start()
      {
        min = document.getElementById("timernumber-minutes").innerText;
        sec = document.getElementById("timernumber-seconds").innerText;
        
        
        
        document.getElementById("timernumber-minutes").innerHTML = min;
        document.getElementById("timernumber-seconds").innerHTML = sec;

         
        var label = document.getElementsByClassName("Startbtn")[0].innerText;
        if(label == "START")
        {
          document.getElementsByClassName("Startbtn")[0].innerHTML = "RESET";
          //clearInterval(mininterval);
          //clearInterval(secinterval);
          mininterval = setInterval(minutesTimer,60000);
          secinterval = setInterval(secondsTimer,1000);

        }
        else if (label == "RESET")
        {
          document.getElementsByClassName("Startbtn")[0].innerHTML = "START";
          clearInterval(mininterval);
          clearInterval(secinterval);
        }
      
      function minutesTimer () {
        min= min-1;
        document.getElementById("timernumber-minutes").innerHTML = min;
              }

      function secondsTimer () {
        if(sec>0)
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





