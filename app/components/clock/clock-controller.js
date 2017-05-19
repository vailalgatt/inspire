function ClockController() {
  function draw(){
  
  var newDate = new Date();
    var hours = newDate.getHours();
    var minutes = newDate.getMinutes();
  
  if (minutes < 10){
    minutes = "0" + minutes
  }

  var clock = document.getElementById("clock")
  clock.innerHTML = hours + ":" + minutes;

  setInterval(function(){
   draw();
  }, 1000);
  }
draw()
}