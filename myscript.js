function  pomonum() {
         document.body.style.backgroundColor = "rgb(240, 91, 86)";
         var pomonum = document.getElementsByClassName("timernumber");
         pomonum[0].innerHTML = "25:00";
}
function shortbreak() {
          document.body.style.backgroundColor = "rgb(76, 166, 169)";
          var shortnum = document.getElementsByClassName("timernumber");
         /* var sn = document.getElementsByClassName("timernumber");*/
  shortnum[0].innerHTML = "05:00";
 

        }
function longbreak() {
        document.body.style.backgroundColor = "#498FC1";
        var longnum = document.getElementsByClassName("timernumber");
       longnum[0].innerHTML = "15:00";

}
function timercountdown() {
  var min = 25;
  var sec = 0;

  function template () {
    document.getElementsById("timernumber-minutes").innerHTML = min;
    document.getElementsById("timernumber-seconds").innerHTML = sec;
      }
      function start()
      {
        min = 24;
        sec = 59;
        document.getElementsById("min").innerHTML = min;
        document.getElementsById("sec").innerHTML = sec;

        var mininterval = setInterval(minutesTimer,6000);
        var secinterval = setInterval(secondsTimer,1000);
      }
      function minutesTimer () {
        min= min-1;
        document.getElementsById("timernumber-minutes").innerHTML = min;
              }

      function secondsTimer () {
        sec = sec-1;
        document.getElementsById("timernumber-seconds").innerHTML = sec;

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

function actionoftask() {
  var actn = document.getElementsByClassName("taskmenu");
  if (actn[0].style.display === "none") {
    actn[0].style.display = "block";
  } else {
    actn[0].style.display = "none";
  }
}
function maillogin(){
  var login = document.getElementsByClassName("loginframe");
  if(login[0].style.display === "none") 
  {
    login [0].style.display = "block";
  } else {
    login [0].style.display = "none";
  }
}
function settingswindow() {
  var setng = document.getElementsByClassName("settingsblock");
  if(setng[0].style.display === "none") {
    setng [0].style.display = "block";
  } else {
    setng [0].style.display = "none";
  }
  }
