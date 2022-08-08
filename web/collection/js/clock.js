var clock = document.getElementsByClassName('clock')[0];
clock.innerHTML = `<div class="time">hh:mm:ss</div>
                    <div class="hour">
                        <canvas class="circle" data-number="12"/>
                    </div>
                    <div class="minute">
                        <canvas class="circle" data-number="60"/>
                    </div>
                    <div class="second">
                        <canvas class="circle" data-number="61000"/>
                    </div>`;
const hour = document.querySelector(".hour");
const minute = document.querySelector(".minute");
const second = document.querySelector(".second");
const time = document.querySelector(".time");
setInterval(() => {
const date = new Date();
let hh = date.getHours();
let mm = date.getMinutes();
let ss = date.getSeconds();
if (hh >= 12) hh = hh - 12;
time.textContent = date.toLocaleTimeString();
hour.setAttribute("data-number", hh + mm / 60);
minute.setAttribute("data-number", mm + ss / 60);
second.setAttribute("data-number", ss * 1000 + date.getMilliseconds());
const circles = document.querySelectorAll(".circle");
//function for circle canvas ?
function drawCircle(circle, color, strokeWidth, radius) {
  circle.width = window.innerWidth;
  circle.height = window.innerHeight;
  let max_value = circle.dataset.number;
  let actual_value = circle.parentNode.dataset.number;
  let angle = (actual_value / max_value) * 2 * Math.PI;
  const ctx = circle.getContext("2d");
  ctx.beginPath();
  ctx.arc(circle.width / 2, circle.height / 2, radius, 0, angle, false);
  ctx.lineCap = "round";
  ctx.strokeStyle = color;
  ctx.lineWidth = strokeWidth;
  ctx.stroke();
}
drawCircle(circles[0],clock.dataset.hourColor==undefined?"red":clock.dataset.hourColor,clock.dataset.hourStroke==undefined?5:2<clock.dataset.hourStroke&&clock.dataset.hourStroke<9?clock.dataset.hourStroke:5,80);
drawCircle(circles[1],clock.dataset.minColor==undefined?"lime":clock.dataset.minColor,clock.dataset.minStroke==undefined?4:2<clock.dataset.minStroke&&clock.dataset.minStroke<9?clock.dataset.minStroke:4, 70);
drawCircle(circles[2],clock.dataset.secColor==undefined?"dodgerblue":clock.dataset.secColor,clock.dataset.minStroke==undefined?3:2<clock.dataset.secStroke&&clock.dataset.secStroke<9?clock.dataset.secStroke:3, 60);
// circle, length, color, strokeWidth, radius
},clock.dataset.setTime==undefined?1000:clock.dataset.setTime?100:1000);//decrease this interval for more smooth circle for second
    // NOTE: value must be greater than 60 or 70 to reduce RAM use
