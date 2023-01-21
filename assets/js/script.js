let qI = 0;
let clockId;
let time = 60;
const mainDiv = document.querySelector("main");
document.querySelector(".start").addEventListener("click", init);

// handles answers based on correct choice or wrong choice
const handleAns = (answer) => {
  answer == questions[qI].A
    ? console.log("Good!!")
    : (console.log("Bad!!"), (time -= 10));
  // if (qI === questions.length) {
  //   button.addEventListener("click", function () {
  //     finish();
  //   });
  // } else {
  qI === questions.length - 1 ? finish() : qI++, renderQC();
  // }
};
// renders questions and choices
const renderQC = () => {
  let { Q, C } = questions[qI];

  mainDiv.innerHTML = `<h1>${Q}</h1><div id='choices'></div>`;

  C.forEach((choi) => {
    choices.innerHTML += `<button onclick="handleAns('${choi}')">${choi}</button>`;
  });
};
// sets timer
function init() {
  clockId = setInterval(() => {
    time--;
    time < 0 ? finish() : (document.querySelector(".time").innerText = time);
  }, 1000);
  renderQC();
}
// refreshes the page
const refresh = () => {
  window.location.reload(true);
};
// finishes the quiz
const finish = () => {
  console.log("finished");

  mainDiv.innerHTML = `<h1>Well done!</h1><div><p>Enter your name here</p><input type="text"><button onclick="refresh()">Play Again?</button></div>`;
};
