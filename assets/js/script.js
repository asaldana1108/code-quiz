var body = document.body; 
var instructionsEl = document.getElementById('instructions');

var divEl = document.createElement('div');
var h1El = document.createElement('h1');
var pEl = document.createElement('p');
var startButtonEl = document.createElement('button');

h1El.textContent = "Coding Quiz Challenge";
pEl.textContent = "Try to answer the following code-related questions within the time limit. Keep in mind that incorrect answers will penalize your score by 10 seconds!";
startButtonEl.textContent = "Start Quiz!";

instructionsEl.appendChild(divEl);
divEl.appendChild(h1El);
divEl.appendChild(pEl);
divEl.appendChild(startButtonEl);

var removeInstuctions = function() {
  instructionsEl.removeChild(divEl)  
};

var nextQuestion = function() {

}; 

startButtonEl.addEventListener("click", function() {
    removeInstuctions();
});
