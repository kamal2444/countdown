
let seconds = 0;
let minutes = 0;
let hours = 0;
let day = 0;
function Timer() {}



function clearTimer(){
  document.getElementById("seconds").value=0
  document.getElementById("Minutes").value=0;
  document.getElementById("Hours").value=0;
  document.getElementById("Day").value=0;
  seconds=0;
  minutes=0;
  hours =0;
  day = 0;
  resetHandler()
}

var interval;

const startHandler = () => { 

  interval = setInterval(() => {
    document.getElementById("seconds").value = seconds += 1;
    if (seconds == 60) {
      document.getElementById("Minutes").value = minutes += 1;

      seconds = 0;
    }
    if ( minutes == 60) {
      document.getElementById("Hours").value = hours += 1;
      minutes = 0;
    }
    if ( hours == 24) {
      document.getElementById("Day").value = day += 1;
      hours = 0;
    }
  }, 1000);
};

const resetHandler = () => {
  clearInterval(interval);
};
