// Boeing 737 NG systems quiz
// array inside of an object that holds oll of the questions and answers for the quiz. object inside of an array for the questions
const questions = [{
        question: "Which of the following are NOT considered data types?",
        answers: {
            a: "alerts",
            b: "strings",
            c: "numbers",
            d: "booleans",
        },
        correctAnswer: "(a)"
    },
    {
        question: "Arrays in Javascript can be used to store?",
        answers: {
            a: "numbers and strings",
            b: "other arrays",
            c: "booleans",
            d: "all of the above",
        },
        correctAnswer: "(d)"
    },
    {
        question: "What is the purpose of a function?",
        answers: {
            a: "a set of statements that performs a task or calculates a value",
            b: "runs code in a loop",
            c: "it creates comments in code",
            d: "a type of taco",
        },
        correctAnswer: "(a)"
    },
    {
        question: "Inside which HTML element do we put the JavaScript?",
        answers: {
            a: "<js>",
            b: "<javascript>",
            c: "<script>",
            d: "<scripting ",
        },
        correctAnswer: "(c) <script>"
    },
    {
        question: "How do you write Hello World in an alert box?",
        answers: {
            a: "alertBox(Hello World);",
            b: "alert(hello world)",
            c: "Alert[hello world",
            d: "alert{hello world}",
        },
        correctAnswer: "(b) "
    },
    {
        question: "How to write an IF statement in JavaScript?",

        answers: {
            a: "if(i===5)",
            b: "ifi==5",
            c: "ifi==5 then",
            d: "ifi=5then",
        },
        correctAnswer: "(a)"
    },
    {
        question: "How can you add a comment in a JavaScript?",
        answers: {
            a: "<!--this is a comment-->",
            b: "//this is a comment",
            c: "**this is a comment",
            d: "(this is a comment)",
        },
        correctAnswer: "(b)"
    },
    {
        question: "Which event occurs when the user clicks on an HTML element?",
        answers: {
            a: "onMouseClick",
            b: "onclick",
            c: "onmouseover",
            d: "onChange"
        },
        correctAnswer: "(b)"
    }
]
//variable assignments
//variable assignment for the start quiz button
var start = document.querySelector("#startBtn")
var timeHTML = document.querySelector("#time");
// variable assignment for the score button
var scoreHTML = document.querySelector("#score");
// time limit variable assignment set to 60 seconds
var timeLimit = 60;
//variable for the index set to zero for array of questions, answers and correct answers
var index = 0;
start.addEventListener("click", function () {
    questionGen(0);
    
    //console.log(questions[0].question)
    //console.log(questions[0].answers)
    setInterval(function () {
        timeLimit--
        timeHTML.textContent = timeLimit
        if (timeLimit === 0) {
            clearInterval(timeHTML);
        }
    }, 1000);
})
timeHTML.innerHTML = timeLimit

function questionGen(questNum) {
    var questionTemp = `
    <h1 id="question-title">Title</h1>
    <div><input id="optionA" name="question" type="radio" value="a"><label id="textA">Question 1</label></div>
    <div><input id="optionB" name="question" type="radio" value="b"><label id="textB">Question 2</label></div>
    <div><input id="optionC" name="question" type="radio" value="c"><label id="textC">Question 3</label></div>
    <div><input id="optionD" name="question" type="radio" value="d"><label id="textD">Question 4</label></div>
    <div id="results">
        <div id="submit">
            <button id="submitButton" onclick="submitProcess(`+questNum+`);">Submit</button> 
        </div>
    </div>
    `;
    document.querySelector("#questionContainer").innerHTML = questionTemp;
    var questHld = document.querySelector("#question-title")
    var currentQuestion = questions[index]
    document.querySelector("#question-title").textContent = questions[questNum].question
    document.querySelector("#textA").textContent = questions[questNum].answers.a
    document.querySelector("#textB").textContent = questions[questNum].answers.b
    document.querySelector("#textC").textContent = questions[questNum].answers.c
    document.querySelector("#textD").textContent = questions[questNum].answers.d
    //var submit = document.querySelector("#submitButton")
   // submit.addEventListener("click", submitProcess());
}

function submitProcess(questNum) {
  
  var correctAns1 = questions[questNum].correctAnswer.substring(1,2)
  var selectedAnswer = document.querySelector('input[name="question"]:checked').value;
  alert(correctAns1 + "-" + selectedAnswer);
 if (correctAns1 == selectedAnswer) {
       alert("You answered correctly!!!");
       questionGen(questNum + 1)
  } 
    else {
       alert("Wrong Answer... Try Again.");
    }
}
