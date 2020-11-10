var quizSet = [

    { question: "Using GitBash, how do you open the Visual Studio console?" ,
      choice:['code', 'open', "git vs"],
      answer: 'code'
    },
    
    { question: "In HTML, to make a text element bold which tag do you use?",
      choice:[ 'b', 'em', 'strong'  ],
      answer: 'strong'
    },

    { question: "What does HTML handle in a web page?",
      choice:['Snazzy effects', 'Basic mark-up of a page', 'Fanciful colours and layouts'],
      answer: 'Basic mark-up of a page'
    },

    { question: "In an HTML element tag, what are the additional information references known as?",
      choice:['Attributes', 'Properties', 'Methods'],
      answer: 'Attributes'
    },

    { question: "An element content has the width 10px, margin of 4px, padding of 2px, and a boarder of 2px. What is the total width of the element? ",
      choice:['18px', '14px', '26px'],
      answer: '26px'
    },

    { question: "Which target attribute will open the linked webpage in a new browser window or tab?",
      choice:['_blank', '_self', '_top'],
      answer: '_blank'
    },

    { question: "Which is the right CSS property syntax for background colour of an element",
      choice:['Background_Color', 'backgroundColor', 'background-color'],
      answer: 'background-color'
    },

    { question: "Which of these is not a block element?",
      choice:['aside', 'article', 'object'],
      answer: 'object'
    },

    { question: "An element has an id of example. In CSS what is the correct way to target this element?",
      choice:['#example', '.example', 'example'],
      answer: '#example'
    },

    { question: "In the HTML where should you place the <script> tags for your javascript?",
      choice:['In the head element', 'At the top of the body element', 'At the bottom of the body element', "Outside of the HTML element"],
      answer: 'At the bottom of the body element'
    },

    { question: "Using Javascript which is the best way to get a message to the user?",
      choice:['alert()', 'prompt()', 'confirm()', "console.log()"],
      answer: 'alert()'
    },

    { question: "Which coding language is the $ sign most associated?",
      choice:['Bootstrap', 'Javascript', 'JQuery', "CSS", "HTML"],
      answer: 'JQuery'
    },

    { question: "Which parenthesis creates an object?",
      choice:['[ ]', '{ }', '( )'],
      answer: '{ }'
    },

    { question: "The 'this' keyword in javascript ... ",
      choice:['...refers to the owner of the document window', '... refers to the owner of the object', '... refers to the object', "... refers to the document window", "... refers to the last declared object"],
      answer: '... refers to the owner of the object'
    },

    { question: "Which of these is not an event?",
      choice:['onclick', 'onmouseover', 'onfocus', "onwalkaway"],
      answer: 'onwalkaway'
    },

    { question: "Which of these methods will add an element to an array?",
      choice:['pop()', 'push()', 'join()'],
      answer: 'push()'
    },

    { question: "Which of these selectors will select all the elements that are the  children of a specified element?",
      choice:['div>p', 'div p', 'div.p'],
      answer: 'div>p'
    },

    { question: "What colour is the preset bootstrap value for .bg-info",
      choice:['purple', 'teal', 'blue'],
      answer: 'teal'
    },
  ]


// button variables 
var startButton = document.getElementById("start-btn");
startButton.addEventListener("click", startGame);

var endQuizButton = document.getElementById("end-btn");
endQuizButton.addEventListener("click", startEndQuiz);

var tryAgainButton = document.getElementById("restart-btn");
tryAgainButton.addEventListener("click", tryAgain);

var clearHistoryButton = document.getElementById("clear-history-btn");
clearHistoryButton.addEventListener("click", clearHistory);

// counter variables 

var timeCounter = 0;
var onScreentimer = document.getElementById("time")
onScreentimer.innerHTML = "Timer: " + timeCounter;
var timer;

var scoreCounter = 0;
var wrongScoreCounter = 0;
var onScreenScore = document.getElementById("score")
onScreenScore.innerHTML = "Score: " + scoreCounter;

// save variables
var saveScore = 0;

// document parts that change 
var welcome = document.getElementById("welcome");
var gameInstructions = document.getElementById("start-instruction");
var highScoreTable = document.getElementById("high-score")

var quizSetIndex = 0;

var questionContainer = document.querySelector("div.question-container>h3");

// start the game 
function startGame(){
    // console.log("game started");
    document.getElementById("welcome").classList.add("hide");
    document.getElementById("question").classList.remove("hide");
    document.getElementById("start-instruction").classList.add("hide");
    document.getElementById("start-btn").classList.add("hide");
    document.getElementById("end-btn").classList.remove("hide"); 
    document.getElementById("quizQuestions").classList.remove("hide"); 
    document.getElementById("indicator").classList.remove("hide"); 

    startTimer(); 
    showQuestion();
};

function startTimer() {
  timeCounter = 100;
  onScreentimer.innerHTML = "Timer: " + timeCounter;
  timer = setInterval(function() {
    timeCounter--
    onScreentimer.innerHTML = "Timer: " + timeCounter;
    if(timeCounter == 0) {
      clearInterval(timer);

      endQuiz();
    }
  }, 1000);

}
 

// set the next question variables 
var choiceElement = document.getElementById("quizQuestions");
var choiceContainer = document.getElementById("row2");
var indicator = document.getElementById("indicator");
var questionHeading = document.getElementById("question");

// called in the start game function
function showQuestion(){
    // console.log("show question has been initiated");
    // console.log("quizSet.length = " + quizSet.length);
    
    var questionToShow = quizSet[quizSetIndex];
    questionHeading.textContent = questionToShow.question;
    
    // Clears the choices for next question
    choiceElement.innerHTML = "";
    // Sets the buttons for the choice options
    questionToShow.choice.forEach(function(choice) {
      var choiceToShow = document.createElement("button");
      choiceToShow.setAttribute("value", choice);
      choiceToShow.setAttribute("type", "button");
      choiceToShow.setAttribute("class", "style");
      choiceToShow.textContent = choice;

      choiceToShow.addEventListener("click", answerSubmitted);
      choiceElement.appendChild(choiceToShow);
    });
    
}
  

// Called on click within show question
function answerSubmitted() {
    // console.log("answer chosen = " + this.value);
    // console.log("Correct answer should be = " + quizSet[quizSetIndex].answer)
    if (this.value === quizSet[quizSetIndex].answer) {
      var answerCorrect = document.getElementById("correct");
      answerCorrect.style.visibility = "visible"
        
      scoreCounter++
      onScreenScore.textContent = "Score: " + scoreCounter;
  
      timeCounter += 2;
         onScreentimer.innerHTML = "Timer: " + timeCounter;
  
      setTimeout(function(){
        answerCorrect.style.visibility = "hidden";
      },1000);
  
    } else {
      if (this.value !== quizSet[quizSetIndex].answer) {
        var answerWrong = document.getElementById("wrong");
        answerWrong.style.visibility = "visible"
          
        // count number of wrong scores for points at the end 
        wrongScoreCounter++
  
        // Remove time from the countdown
        timeCounter -= 5;
        onScreentimer.innerHTML = "Timer: " + timeCounter;
  
        setTimeout(function(){
          answerWrong.style.visibility = "hidden";
        },1000);
      }
    }
    quizSetIndex++;
    if(quizSetIndex === quizSet.length){
      setTimeout(function(){
        endQuiz();
      },1250);
  
    } else {
      setTimeout(function(){
        showQuestion();
      },1250)
        
    }
}


//SOFT end the quiz - if the end button is used
function startEndQuiz() {
  // set the timer to zero 
  timeCounter = 0 ;
  onScreentimer.innerHTML = "Timer: " + timeCounter;
  endQuiz();

}


// FULL end of the quiz - Time runs out.
function endQuiz() {

  // Stop the timer - time score is saved. 
  clearInterval(timer);

  // what were the final results? 
  // console.log("Score = " + scoreCounter);
  // console.log("Wrong answers = " + wrongScoreCounter);
  // console.log("time left = " + timeCounter + " seconds");
  
  var timeAdjustment = (timeCounter -= wrongScoreCounter);
  if (timeAdjustment < 0) {
    timeCounter = 0;
  }
  // console.log("timeAdjustment = " + timeCounter);
  
  var finalScore = (scoreCounter * timeCounter) + scoreCounter;
  // console.log("Final Score = " + finalScore);
  
  // Display end of game information and score
  document.querySelector("div.btn-selector>p").classList.remove("hide");

  // what to Display at end game 
  document.getElementById("question").classList.add("hide");
  document.getElementById("welcome").classList.remove("hide");
  document.getElementById("nameInput").classList.remove("hide");
  document.getElementById("indicator").classList.add("hide");
  document.getElementById("high-score").classList.remove("hide");
  document.getElementById("quizQuestions").classList.add("hide");
  document.getElementById("end-btn").classList.add("hide");
  document.getElementById("restart-btn").classList.remove("hide");
  document.getElementById("clear-history-btn").classList.remove("hide");

  document.getElementById("name-btn").classList.remove("hide");
  document.getElementById("score-is-saved").classList.add("hide");

  welcome.innerHTML = "Game Over!";
  
  gameInstructions.innerHTML = "I hope you enjoyed my quiz?" + "<br/>" + 
    "You answered "+ scoreCounter + " correctly." + "<br/>" + "Your final score = " + finalScore;
  gameInstructions.style.textAlign = "center";
  highScoreTable.style.textAlign = "center";

  //show previous score
  returnInputValue();

  choiceElement.innerHTML = "";

  return saveScore = finalScore;
}

var scoreBoard = [];


// called at endQuiz function
function returnInputValue() {
  // console.log("localStorage get name" , localStorage.getItem("Name"));
  if (localStorage.getItem("Name") == null){
    highScoreTable.textContent = "You have not played my quiz before. \
    Why not try again and beat yourself?";
    
  } else {
    
    getHighScores();
    
  }
  
}

// called in returnInputValue function
function getHighScores(){
  // console.log("function running");
  var showLastUserName = localStorage.getItem("Name");
  var showLastUserScore = localStorage.getItem("Score");
  var showScoreboard = localStorage.getItem("storedScore");
  var scoreObject = JSON.parse(showScoreboard);
  // console.log("scoreObject", scoreObject);
  if(localStorage.getItem("storedScore") == null){
    highScoreTable.textContent = "You have not played my quiz before. \
    Why not try again and beat yourself?";
  } else if (localStorage.getItem("storedScore") != null){
    scoreBoard = JSON.parse(showScoreboard);
    // Sort scores highest to lowest
    scoreObject.sort(function(a,b) {
      return b.Score - a.Score;
    });
  }

  var showHighScores = "";
  for (let index = 0; index < scoreBoard.length; index++) {
    showHighScores += scoreObject[index].Name + " = " + scoreObject[index].Score + "<br>";
  }

  highScoreTable.innerHTML = "Your last score: " + showLastUserName + " = " + 
  showLastUserScore 
  + "<br/>" + "Highscores:" + "<br>" + showHighScores;

}

//called on button click name-btn "save your score"
function getInputValue(){

  var userName = document.getElementById("name").value;
  // console.log("user inputted = " + userName);
  // console.log("saveScore2 = " + saveScore);

  scoreBoard.push( { Name: userName, Score: saveScore } );
  // console.log("scoreBoard = " + scoreBoard);
  // console.log("user inputted 2 = " + userName);
  // console.log("saveScore = " + saveScore);

  localStorage.setItem("Name", userName);
  localStorage.setItem("Score", saveScore);
  localStorage.setItem("storedScore", JSON.stringify(scoreBoard));

  showScoreHasSaved();
  return scoreBoard;

}

function showScoreHasSaved() {
  document.getElementById("name-btn").classList.add("hide");
  document.getElementById("score-is-saved").classList.remove("hide");
  getHighScores();
}


// Called on button click restart-btn "try again" 
function tryAgain(){
  // console.log("game re-started");
  document.getElementById("question").classList.add("hide");
  document.getElementById("start-instruction").classList.remove("hide");
  document.getElementById("start-btn").classList.remove("hide");
  document.getElementById("indicator").classList.remove("hide");
  document.getElementById("end-btn").classList.add("hide");
  document.getElementById("restart-btn").classList.add("hide");
  document.getElementById("clear-history-btn").classList.add("hide");
  document.getElementById("high-score").classList.add("hide"); 
  document.getElementById("nameInput").classList.add("hide");

  welcome.innerHTML = "Welcome to my QUIZ!";
  gameInstructions.innerHTML = "When you are ready, click start. You will be asked a series of questions while a timer counts down to zero. Wrong answers will deduct time while correct answers will add time. You can end the game at any stage but it will affect your score. Goodluck!"
  gameInstructions.style.textAlign = "left";

  // reseting all variables 
  timeCounter = 0;
  onScreentimer.text = "Timer: " + timeCounter;
  scoreCounter = 0;
  onScreenScore.innerHTML = "Score: " + scoreCounter;
  wrongScoreCounter = 0;
  saveScore = 0;
  quizSetIndex = 0;

}

function clearHistory(){
  console.log("function fired");
  localStorage.clear();
  scoreBoard = [];
  getHighScores();
}

