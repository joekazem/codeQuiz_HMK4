// Boeing 737 NG systems quiz
// array inside of an object that holds oll of the questions and answers for the quiz. object inside of an array for the questions
const questions = [{
        question: "Illumination of the blue APU GEN BUS OFF light means?",
        answers: {
            a: "APU is running",
            b: "APU is not running",
            c: "APU is running and powering transfer busses",
            d: "APU is running but not powering transfer busses",
        },
        correctAnswer: "(d) APU is running but not powering transfer busses"
    },
    {
        question: "For landing, what is maximum fuel imbalance between No 1 and No 2 main tanks",
        answers: {
            a: "726 kgs",
            b: "453 kgs",
            c: "553 kgs",
            d: "653 kgs",
        },
        correctAnswer: "(b) 453 kgs"
    },
    {
        question: "What is the condition of the fuel X-feed VALVE OPEN Light when the crossfeed selector is positioned OPEN and the crossfeed valve is closed?",
        answers: {
            a: "Illuminated amber",
            b: "Illuminated bright blue",
            c: "Extinguished",
            d: "Illuminated dim blue",
        },
        correctAnswer: "(b) Illuminated bright blue"
    },
    {
        question: "The APU may be used as a pneumatic source up to?",
        answers: {
            a: "25,000 feet",
            b: "17,000 feet",
            c: "41,000 feet",
            d: "10,000 feet ",
        },
        correctAnswer: "(b) 17,000 feet"
    },
    {
        question: "What pitch mode is annunciated in the FMA after takeoff when the autopilot is first engaged in CMD",
        answers: {
            a: "CWS P",
            b: "V NAV",
            c: "MCP SPD",
            d: "V/S",
        },
        correctAnswer: "(c) MCP SPD"
    },
    {
        question: "What is the primary source of conditioned air from the cockpit",

        answers: {
            a: "Both packs",
            b: "Left pack",
            c: "Ground air",
            d: "Right pack",
        },
        correctAnswer: "(b) Left pack"
    },
    {
        question: "Which A/T modes permit manual thrust changes without A/T interference",
        answers: {
            a: "N1 and ARM",
            b: "THR HLD only",
            c: "THR HLD and ARM",
            d: "GA and ARM",
        },
        correctAnswer: "(c) THR HLD and ARM"
    },
    {
        question: "During an ILS approach, the cross bus tie relay automatically opens at glide slope capture to",
        answers: {
            a: "Provide more power to the AC standby bus",
            b: "Ensure that the standby DC bus is powered",
            c: "Provide more power to DC bus 1",
            d: "Prevent a single bus failure from affecting both navigation receivers and flight control computers"
        },
        correctAnswer: "(d) Prevent a single bus failure from affecting both navigation receivers and flight control computers during critical phase of flight"
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
