var x = document.getElementById("useing");
var y = document.getElementById("one");

x.addEventListener("click", function() {
  y.innerHTML = "javascript is working";
  function timeStamp() {
    y.style.color = "blue";
    y.classList.toggle("back");
    // alert("alerting javascript is working");
  }
  var time = setTimeout(timeStamp, 400);
  // clearTimeout(time);
})

// var tune = function() {
//   for(var i = 0; i <= 10; i++) {
//     console.log(i);
//   }
// }

var comment = function() {
  console.log("javascript is working properly!");
  // setTimeout(tune, 3000);
}
comment();
