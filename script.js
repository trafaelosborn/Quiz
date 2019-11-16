var startButton = document.getElementById("start-btn");
let finishButton = document.getElementById("finish-btn")
var questionEl = document.getElementById("question");
var buttons = document.getElementById("answer-buttons");
let score = 0
document.getElementById("score").textContent = "Score: " + score;
let correctAnswer = "Sun Records"

var bns = document.getElementsByTagName("button");

function addtoev() {
  var bns = document.getElementsByTagName("button");
  for (i = 0; i < bns.length; i++) {
    bns[i].addEventListener("click", function(event) {
      //console.log(event)
      //console.log(this)
      guess = this.textContent
   
      if (guess == correctAnswer) {
        score++
      }
      console.log(correctAnswer)

    });
   
  }
  
}



window.addEventListener("load", function() {
  addtoev();
});

startButton.addEventListener("click", startGame);

function startGame() {
  console.log("started");
  startButton.classList.add("hide");
  
  questionEl.classList.remove("hide");
  buttons.classList.remove("hide");
  let time = setInterval(function(){ logScore(); }, 30000); 
}



function runQuestions() {
  var guess = this.textContent
  if (document.getElementById("question").textContent === questions[0].title) {
    document.getElementById("question").textContent = questions[1].title;
    document.getElementById("answer1").innerHTML = questions[1].choices[0];
    document.getElementById("answer2").innerHTML = questions[1].choices[1];
    document.getElementById("answer3").innerHTML = questions[1].choices[2];
    document.getElementById("answer4").innerHTML = questions[1].choices[3];
    correctAnswer = "priscilla"
   
  } else if (
    document.getElementById("question").textContent == questions[1].title
  ) {
    document.getElementById("question").textContent = questions[2].title;
    document.getElementById("answer1").innerHTML = questions[2].choices[0];
    document.getElementById("answer2").innerHTML = questions[2].choices[1];
    document.getElementById("answer3").innerHTML = questions[2].choices[2];
    document.getElementById("answer4").innerHTML = questions[2].choices[3];
    
  }
  else if (
    document.getElementById("question").textContent == questions[2].title
  ) {
    document.getElementById("question").textContent = questions[3].title;
    document.getElementById("answer1").innerHTML = questions[3].choices[0];
    document.getElementById("answer2").innerHTML = questions[3].choices[1];
    document.getElementById("answer3").innerHTML = questions[3].choices[2];
    document.getElementById("answer4").innerHTML = questions[3].choices[3];
  
  }
  else if (
    document.getElementById("question").textContent == questions[3].title
  ) {
    document.getElementById("question").textContent = questions[4].title;
    document.getElementById("answer1").innerHTML = questions[4].choices[0];
    document.getElementById("answer2").innerHTML = questions[4].choices[1];
    document.getElementById("answer3").innerHTML = questions[4].choices[2];
    document.getElementById("answer4").innerHTML = questions[4].choices[3];

    finishButton.classList.remove("hide");
  }
}

function logScore() {
  console.log("finished");
  let hiScore = prompt("Congratulations! Your score was " + score + ". enter initials to save your score!") + "  " + score;
  localStorage.setItem(hiScore, + score);
  console.log(hiScore)
  //stop timer
  
}


var questions = [
  {
    title: "What was the first label Elvis was signed to?",
    choices: [
      "Sun Records",
      "RCA Records",
      "Staxx Records",
      "Death Row Records"
    ],
    answer: "Sun Records"
  },

  {
    title: "Elvis' wife was named_____",
    choices: ["Priscilla", "Lisa Marie", "Emmylou", "Mom"],
    answer: "Priscilla"
  },

  {
    title: "Elvis' favorite brand of pomade was______",
    choices: ["Dapper Dan", "Fop", "Black and White", "Dandy Boy"],
    answer: "Black and White"
  },

  {
    title: "In 1958 Elvis joined_____",
    choices: ["The Navy", "The Army", "The Air Force", "The Beatles"],
    answer: "The Army"
  },

  {
    title: "Elvis perfomed a duet with",
    choices: [
      "Frank Sinatra",
      "Dolly Parton",
      "Ray Charles",
      "All of the above"
    ],
    answer: "All of the above"
  }
];

document.getElementById("question").textContent = questions[0].title;
document.getElementById("answer1").textContent = questions[0].choices[0];
document.getElementById("answer2").textContent = questions[0].choices[1];
document.getElementById("answer3").textContent = questions[0].choices[2];
document.getElementById("answer4").textContent = questions[0].choices[3];

//one event listener for all buttons
//documentdqueryselector all

//pull value from selected button
//compare to answer
