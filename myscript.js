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
