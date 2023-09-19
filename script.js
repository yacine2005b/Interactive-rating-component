let btn1 = document.querySelector(".btn1");
let btn2 = document.querySelector(".btn2");
let btn3 = document.querySelector(".btn3");
let btn4 = document.querySelector(".btn4");
let btn5 = document.querySelector(".btn5");
let container = document.querySelector(".container");
let thanks = document.querySelector(".thanks");
let submit_btn = document.querySelector("submitBtn");
let output = document.querySelector(".message span");
let checkedbtn = false;
const getRating = (rating) => {
  console.log(rating);
  output.innerHTML = rating;
};
let previousClickedButton = null;

function changeBackgroundColor(clickedButton) {
  clickedButton.style.backgroundColor = "hsl(25, 97%, 53%)";
  clickedButton.style.color = "white";
  checkedbtn = true;
  if (previousClickedButton && previousClickedButton !== clickedButton) {
    previousClickedButton.style.backgroundColor = "hsl(213deg, 20%, 22%)";
    previousClickedButton.style.color = "hsl(216, 12%, 54%)";
    checkedbtn = false;
  }
  previousClickedButton = clickedButton;
  return checkedbtn;
}
function submit() {
  if ((checkedbtn = true)) {
    thanks.style.display = "flex";
    container.style.display = "none";
  } else {
    return 0;
  }
}
