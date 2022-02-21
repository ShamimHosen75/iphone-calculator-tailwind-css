// DOM Time Setting
const hourEl = document.querySelector('.hour');
const minuteEl = document.querySelector('.minute');
const valueEl = document.querySelector('.value');

const acEl = document.querySelector('.ac');
const pmEl = document.querySelector('.pm');
const percentEl = document.querySelector('.percent');

// Setting C to clear LCD 
function clr() {
    document.getElementById('outputScreen').innerText = '';
}

// Del button 
function del() {
    document.getElementById('outputScreen').innerText = document.getElementById('outputScreen').innerText.slice(0, -1);
}
// Making button works 
function display(n) {
    document.getElementById('outputScreen').innerText += n;
}

// Making the calculation 
function calc() {
    try {
        document.getElementById('outputScreen').innerText = eval(document.getElementById('outputScreen').innerText);
    } catch {
        document.getElementById('outputScreen').innerText = "I'm a Calculator, not a Robot!";
    }
}

// Enable Keyboard Input
document.addEventListener("keydown", key, false);

function key(e) {
    var keynum;
    if (window.event) {
        keynum = e.keyCode;
    } else if (e.which) {
        keynum = e.which;
    }
    console.log(String.fromCharCode(keynum));
    display(String.fromCharCode(keynum));
}

// Set up the time
const updateTime = () => {
    const currentTime = new Date();
  
    let currentHour = currentTime.getHours();
    const currentMinute = currentTime.getMinutes();
  
    if (currentHour > 12) {
      currentHour -= 12;
    }
    hourEl.textContent = currentHour.toString();
    minuteEl.textContent = currentMinute.toString().padStart(2, '0');
  }
  setInterval(updateTime, 1000);
  updateTime();