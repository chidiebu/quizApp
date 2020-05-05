const startBtn = document.getElementById("startBtn");
const nextBtn = document.getElementById("next-Btn");
const questionContainerEl = document.getElementById("questionContainer");
const questionLabel = document.getElementById("qtnLabel");
const answerLabel = document.getElementById("answerBtn");
const qtnAnsSection = document.getElementById("questionContainer");
var Scores = 0;
var QuestionsNum = 0;
var questionCounter = document.getElementById("qtnNum");

document.getElementById("scoreValue").textContent = "0";


let randomQuestions, currentQuestionIndex;


startBtn.addEventListener("click", function() {
    init();
    console.log("Yes too");
    startBtn.classList.add("hide");
    randomQuestions = theQuestions.sort(() => Math.random() -0.5);
    currentQuestionIndex = 0;
    questionContainerEl.classList.remove("hide");
    nextQtn();
    QuestionsNum = 1;
    Scores = 0;
    answerLabel.classList.remove("hide");
    questionLabel.classList.remove("hide");
    scorePercent.classList.add("hide");
    endGameBtn.classList.add("hide")
});


nextBtn.addEventListener("click", () => {
    currentQuestionIndex++
    nextQtn()
})


 function nextQtn() {
    QuestionsNum +=1;
    questionCounter.textContent = "Question number:  " +  QuestionsNum+ "/" + theQuestions.length;
    resetState();
    displayQuestion(randomQuestions[currentQuestionIndex]);
 }

 function displayQuestion(question) {
     questionLabel.innerText = question.question;
     question.answers.forEach(answer => {
         const button = document.createElement("button");
         button.innerText = answer.text;
         button.classList.add("Btn");
         if (answer.correct) {
            button.dataset.correct = answer.correct;
         }
         button.addEventListener("click", chooseAnswer)
         answerLabel.appendChild(button);
     })
 }

 function resetState() {
    nextBtn.classList.add("hide");
    while (answerLabel.firstChild) {
        answerLabel.removeChild(answerLabel.firstChild);
    }
 }

  function chooseAnswer(e) {
    const selectBtn = e.target;
    const correct = selectBtn.dataset.correct;
        if ( selectBtn.dataset.correct) {
            Scores +=1;
            document.querySelector("#scoreValue").textContent = Scores;
            scorePercent.textContent ="Your score percentage is: "+ (Scores/theQuestions.length)*100 +"%";
          }
    Array.from(answerLabel.children).forEach(button =>{
        setStatusClass(button, button.dataset.correct);
    })
    if (randomQuestions.length > currentQuestionIndex+1) {
        nextBtn.classList.remove("hide");
    } else {
        startBtn.innerText = "Restart";
        startBtn.classList.remove("hide");
        scorePercent.classList.remove("hide");
        endGameBtn.classList.remove("hide");
        qtnAnsSection.classList.add("hide");
        document.querySelector("#score").textContent = "Total score:  "
    }
    
  }
  
  function setStatusClass(element, correct) {
      clearStatusClass(element);
       if (correct) {
           element.classList.add("correct");
       } else {
           element.classList.add("wrong");
       }
  }
  
  function clearStatusClass(element) {
    element.classList.remove("correct");
    element.classList.remove("wrong");
  }


  const  theQuestions = [
    {
        question: "What is HTML ?",
        answers: [
           {text: "High Tension", correct: false}, 
           {text: "HyperText Markup Language", correct: true},
            {text: "Highest Temple", correct: false},
            {text: "High Standing Code Language", correct: false},
        ]
    },
    {
       question: "What is CSS ?",
       answers: [
           {text: "Cascading Style Sheet", correct: true},
           {text: "Central  commerce School", correct: false},
           {text: "Set Centre", correct: false},
           {text: "Code Subtitutionary System", correct: false},
       ]
   },
   {
       question: "What is JS ?",
       answers: [
           {text: "Junior Staff", correct: false},
           {text: "Giant Student", correct: false},
           {text: "Jack Silver", correct: false},
           {text: "JavaScript", correct: true}
       ]
   },
   {
       question: "What is  WWW ?",
       answers: [
           {text: "World Wide Web", correct: true},
           {text: "Women Watch Women", correct: false},
           {text: "Wide World Web", correct: false},
           {text: "Web Wide World", correct: false},
       ]
   },
   {
       question: "What is HTTP ?",
       answers: [
           {text: "High Testing Transfer Protocol", correct: false},
           {text: "Highest Temple Protocol", correct: false},
           {text: "HyperText Transfer Protocol", correct: true},
           {text: "Highest Transfer Trainer Person", correct: false},
       ]
   },
]



  var questionCounter = document.getElementById("qtnNum");
  questionCounter.textContent = QuestionsNum + "/" + theQuestions.length;

  var scorePercent = document.getElementById("scorePercentValue");
  scorePercent.textContent =  (Scores / theQuestions)*100;

  scorePercent.classList.add("hide");

  var endGameBtn = document.getElementById("endGam");
endGameBtn.textContent = "Quit Game"

endGameBtn.addEventListener("click", function(){
    if (confirm("Do you really want to quit playing this game ?")) {
        window.close();
    }
})

function init () {
    Scores =0;
    QuestionsNum = 0;
    questionCounter.textContent = 0;
    document.getElementById("scoreValue").textContent = 0;
    document.querySelector("#score").textContent = "Scores:  "
}

