var body = document.body; 
var instructionsEl = document.getElementById('instructions');
var timerEl = document.getElementById('countdown');
var timeLeft = 60;

var divEl = document.createElement('div');
var h1El = document.createElement('h1');
var pEl = document.createElement('p');
var startButtonEl = document.createElement('button');
startButtonEl.setAttribute("class", "startbuttonstyle");

var questionsEl = document.getElementById('questions-container');
var questionEl = document.createElement('h2');
var answersEl = document.createElement('div');
answersEl.setAttribute("class", "questionstyle")
var aEl = document.createElement('button');
aEl.setAttribute("class", "buttonstyle");
var bEl = document.createElement('button');
bEl.setAttribute("class", "buttonstyle");
var cEl = document.createElement('button');
cEl.setAttribute("class", "buttonstyle");
var dEl = document.createElement('button');
dEl.setAttribute("class", "buttonstyle");
var questionNumber = 0 

var questionsArr = [ 
    {
        question: "Commonly used data type DO NOT include:",
        a: "1. strings",
        b: "2. booleans",
        c: "3. alerts",
        d: "4. numbers"
    },
    {
        question: "String values must be enclosed within _____ when being assinged to variable.",
        a: "1. commas",
        b: "2. curly brackets",
        c: "3. quotes",
        d: "4. parenthesis"
    },
    {
        question: "The condition in an if / else statement is enclosed with _____.?",
        a: "1. quotes",
        b: "2. curly brackets",
        c: "3. parenthesis",
        d: "4. square brackets"
    },
    {
        question: "Arrays in JavaScript can be used to store _____.",
        a: "1. numbers and strings",
        b: "2. other arrays",
        c: "3. all answers are correct",
        d: "4. booleans"
    },
    {
        question: "A very useful too during development and debugging for printing content to the debugger is:",
        a: "1. JavaScript",
        b: "2. terminal/bash",
        c: "3. console.log",
        d: "4. for loops"
    }
];

h1El.textContent = "Coding Quiz Challenge";
pEl.textContent = "Try to answer the following code-related questions within the time limit. Keep in mind that incorrect answers will penalize your score by 10 seconds!";
startButtonEl.textContent = "Start Quiz!";

instructionsEl.appendChild(divEl);
divEl.appendChild(h1El);
divEl.appendChild(pEl);
divEl.appendChild(startButtonEl);

var countdown = function() {
    var timeInterval = setInterval(function() {
        timerEl.textContent = " " + timeLeft;
        timeLeft--;
        if (timeLeft < 0) {
            alert("You are out of time!");
            clearInterval(timeInterval);
        }
    }, 1000);
};

var removeInstuctions = function() {
  instructionsEl.removeChild(divEl)  
};


var nextQuestion = function() {
    if (questionNumber < questionsArr.length) {
        questionEl.textContent = questionsArr[questionNumber].question;
        aEl.textContent = questionsArr[questionNumber].a;
        bEl.textContent = questionsArr[questionNumber].b;
        cEl.textContent = questionsArr[questionNumber].c;
        dEl.textContent = questionsArr[questionNumber].d;
        questionsEl.appendChild(questionEl);
        questionEl.appendChild(answersEl);
        answersEl.appendChild(aEl);
        answersEl.appendChild(bEl);
        answersEl.appendChild(cEl);
        answersEl.appendChild(dEl);
        questionNumber++; 
    } else {
        alert("Quiz Complete! Let's see how you did!")
        finalscore();
    }
};

var removeQuestion = function() {
    questionsEl.removeChild(questionEl);
    answersEl.removeChild(aEl);
    answersEl.removeChild(bEl);
    answersEl.removeChild(cEl);
    answersEl.removeChild(dEl);
}

var finalscore = function() {
    removeQuestion();
    h1El.textContent = "All done!"
    pEl.textContent = "Your final score is " + timeLeft;
    instructionsEl.appendChild(h1El);
    instructionsEl.appendChild(pEl);
    timeLeft = 0; 
}

startButtonEl.addEventListener("click", function() {
    removeInstuctions();
    countdown();
    nextQuestion();
});
answersEl.addEventListener("click", function() {
    removeQuestion; 
    nextQuestion();
});
