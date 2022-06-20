var numOfDrumButtons = document.querySelectorAll(".drum").length;
// console.log(numOfDrumButtons); // 7

for (var i = 0; i < numOfDrumButtons; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    alert("I got clicket");
  });
}
