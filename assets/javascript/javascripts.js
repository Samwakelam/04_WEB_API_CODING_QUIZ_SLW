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
// Pseudo Code

// 1. when the start button is pressed start quiz

// 2. start the quiz 

// 3. set the timer to ....
// 4. set the score to 0 
// 5. when an answer is selected
//     if the answer is correct increment the score and display correct
//     add 10 seconds to the timer
//     save the score
//     else display wrong and highlight the riht answer. 
//     deduct 10 seconds from the timer. 
// 6. display next question and clear last option
//     reset 

// 7. when timer =0 stop the quiz 
//     display the score

//     can i save high score? 


// build a start the game
var startButton = document.getElementById("start-btn");
startButton.addEventListener("click", startGame);

var endQuizButton = document.getElementById("end-btn");
endQuizButton.addEventListener("click", startEndQuiz);

var tryAgainButton = document.getElementById("restart-btn");
tryAgainButton.addEventListener("click", tryAgain);

var timeCounter = 0;
var myTimer = document.getElementById("time")
myTimer.innerHTML = "Timer: " + timeCounter;

var scoreCounter = 0;
var wrongScoreCounter = 0;
var myScore = document.getElementById("score")
myScore.innerHTML = "Score: " + scoreCounter;

// saved variables
var saveScore = 0;

// document parts that change 
var welcome = document.getElementById("welcome");
var gameInstructions = document.getElementById("start-instruction");
var highScoreTable = document.getElementById("high-score")

var questionIndex = 0;

var questionContainer = document.querySelector("div.question-container>h3");


function startGame(){
    console.log("game started");
    document.getElementById("welcome").classList.add("hide");
    document.getElementById("question").classList.remove("hide");
    document.getElementById("start-instruction").classList.add("hide");
    document.getElementById("start-btn").classList.add("hide");
    document.getElementById("end-btn").classList.remove("hide"); 
    document.getElementById("quizQuestions").classList.remove("hide"); 
    document.getElementById("indicator").classList.remove("hide"); 
    // document.getElementById("").classList.remove("hide"); 


    startTimer(); 
    showQuestion();
};

var timer;
function startTimer() {
  timeCounter = 100;
  myTimer.innerHTML = "Timer: " + timeCounter;
  timer = setInterval(function() {
    timeCounter--
    myTimer.innerHTML = "Timer: " + timeCounter;
    if(timeCounter == 0) {
      clearInterval(timer);
      endQuiz();
    }
  }, 1000);

}
 

// set the next question
var choiceElement = document.getElementById("quizQuestions");
var choiceContainer = document.getElementById("row2");
var indicator = document.getElementById("indicator");
var questionHeading = document.getElementById("question");


function showQuestion(){
    console.log("show question has been initiated");
    console.log("quizSet.length = " + quizSet.length);
    
    var questionToShow = quizSet[questionIndex];
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
    })
      
    function answerSubmitted() {
      console.log("answer chosen = " + this.value);
      console.log("Correct answer should be = " + quizSet[questionIndex].answer)
      if (this.value === quizSet[questionIndex].answer) {
        var answerCorrect = document.getElementById("correct");
        answerCorrect.style.visibility = "visible"
        
        scoreCounter++
        myScore.textContent = "Score: " + scoreCounter;

        timeCounter += 2;
          myTimer.innerHTML = "Timer: " + timeCounter;

        setTimeout(function(){
          answerCorrect.style.visibility = "hidden";
        },1000);

      } else {
        if (this.value !== quizSet[questionIndex].answer) {
          var answerWrong = document.getElementById("wrong");
          answerWrong.style.visibility = "visible"
          
          // count number of wrong scores for points at the end 
          wrongScoreCounter++

          // Remove time from the countdown
          timeCounter -= 5;
          myTimer.innerHTML = "Timer: " + timeCounter;

          setTimeout(function(){
            answerWrong.style.visibility = "hidden";
          },1000);
        }
      }
      questionIndex++;
      if(questionIndex === quizSet.length){
        setTimeout(function(){
          endQuiz();
        },1250)
      } else {
        setTimeout(function(){
          showQuestion();
        },1250)
        
      }
    }
    
}

// end the quiz if the end button is used. 
function startEndQuiz() {
  // set the timer to zero 
  timeCounter = 0 ;
  myTimer.innerHTML = "Timer: " + timeCounter;
  endQuiz();

}

// Full end of the quiz with any method of getting there. 
function endQuiz() {

  // Stop the timer - time score is saved. 
  clearInterval(timer);

  // what were the final results? 
  console.log("Score = " + scoreCounter);
  console.log("Wrong answers = " + wrongScoreCounter);
  console.log("time left = " + timeCounter + " seconds");
  
  var timeAdjustment = (timeCounter -= wrongScoreCounter);
  if (timeAdjustment < 0) {
    timeCounter = 0;
  }
  console.log("timeAdjustment = " + timeCounter);
  
  var finalScore = (scoreCounter * timeCounter) + scoreCounter;
  console.log("Final Score = " + finalScore);
  
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

// function checkInputValue(){
  
  //   if(localStorage.getItem("Name") == null){
    //     let scoreboard = [];
    //     return scoreboard;
    //   } else {
      //     return scoreboard;
      //   }
      
      // }
      
      // save the user name and score
var scoreboard = [];
function getInputValue(){

  // checkInputValue();
  
  var userName = document.getElementById("name").value;
  console.log("user inputted = " + userName);
  console.log("saveScore2 = " + saveScore);
  
  scoreboard.push( { Name: userName, Score: saveScore } );
  console.log("scoreboard = " + scoreboard);
  console.log("user inputted 2 = " + userName);
  console.log("saveScore = " + saveScore);
  
  localStorage.setItem("Name", userName);
  localStorage.setItem("Score", saveScore);
  localStorage.setItem("storedScore", JSON.stringify(scoreboard));
  
 return scoreboard;
}

function returnInputValue() {
  console.log("localStorage get name" , localStorage.getItem("Name"));
  if (localStorage.getItem("Name") == null){
    highScoreTable.textContent = "You have not played my quiz before. \
    Why not try again and beat yourself?";
    
  } else{

    
    var showUserName = localStorage.getItem("Name");
    var showLastScore = localStorage.getItem("Score");
    var showScoreboard = localStorage.getItem("storedScore");
    var scoreObject =JSON.parse(showScoreboard);

    function getHighScores(){
      console.log("function running");

      console.log("scoreObject = ", scoreObject);
      scoreObject.sort(function(a,b) {
        return b.Score - a.Score;
      });
      console.log("scoreObject sorted = ", scoreObject);
      console.log("scoreObject.length = ", scoreObject.length);

      // if (scoreObject.length > 3){
      //   console.log("if is fireing");
      //   scoreObject.pop();
      // }
      console.log("scoreObject consolodated = ", scoreObject);

      var showHighScores = "";
      for (let index = 0; index < scoreboard.length; index++) {
        showHighScores += scoreObject[index].Name + " = " + scoreObject[index].Score + "<br>";
      }
      return showHighScores;
    }

    highScoreTable.innerHTML = "Your last score: " + showUserName + " = " + 
    showLastScore 
    + "<br/>" + "Highscores:" + "<br>" + getHighScores();
    
  }

}



function tryAgain(){
  console.log("game re-started");
    document.getElementById("question").classList.add("hide");
    document.getElementById("start-instruction").classList.remove("hide");
    document.getElementById("start-btn").classList.remove("hide");
    document.getElementById("indicator").classList.remove("hide");
    document.getElementById("end-btn").classList.add("hide");
    document.getElementById("restart-btn").classList.add("hide");
    document.getElementById("high-score").classList.add("hide"); 
    document.getElementById("nameInput").classList.add("hide");

    welcome.innerHTML = "Welcome to my QUIZ!";
    gameInstructions.innerHTML = "When you are ready, click start. You will be asked a series of questions while a timer counts down to zero. Wrong answers will deduct time while correct answers will add time. You can end the game at any stage but it will affect your score. Goodluck!"
    gameInstructions.style.textAlign = "left";

    // reseting all variables 
    timeCounter = 0;
    myTimer.text = "Timer: " + timeCounter;
    scoreCounter = 0;
    myScore.innerHTML = "Score: " + scoreCounter;
    wrongScoreCounter = 0;
    saveScore = 0;
    questionIndex = 0;

}



// function updateHTML() {
//   var name = getName();
//   document.getElementById("greeting").innerHTML = "Hello, " + name + "! Welcome!";
//   document.getElementById("storedName").innerHTML = name;
// }

// function myFunction() {
//   // Gets input value
//   var name = document.getElementById("name").value;

//   // Saves data to retrieve later
//   localStorage.setItem("userName", name);
  
//   // Updates HTML
//   updateHTML();
// }



    // var showQuizSet = quizSet[i].question;
    //   console.log("showQuizSet = " + showQuizSet);
    //   questionHeading.innerHTML = showQuizSet;
    //   quizSet.forEach(choiceValueFunction);
    
    




// for(quizSet of quizSet[i].choice) {
  
//   // Create elements for choice 
//   var choiceBtn = document.createElement("p");
//   var choiceContent = document.createTextNode("this needs changing to a button element");
//   choiceBtn.append(choiceContent);
//   choiceContainer.insertBefore(choiceBtn, indicator);
// }
    
    // // Select answer






// questions sam version 1 
  // var quizSet = [
  //     { question: "What is 2+2?",
  //     answers:[ 
      //          {text: 4, correct: true},
  //          {text: 22, correct: false},
  //          {text: 14, correct: false}
  //         ]
  //     },   
 
  //     { question: "What is 7+8?",
  //       answers:[ 
  //          {text: 15, correct: true},
  //          {text: 25, correct: false},
  //          {text: 51, correct: false}
  //         ]
  //     },
  
  //     { question: "What is 3+5?",
  //       answers:[ 
      //          {text: 8, correct: true},
  //          {text: 9, correct: false},
  //          {text: 10, correct: false}
  //         ]
  //     }
  // ]

  // question.answers.forEach(answer, function() {
  //     for (var a = 0; a < myNodeList.length; a++) {
  //                 console.log("pick node index " + [a]);
  //                 myNodeList[a].innerHTML = answer.text; 
  //             }
  //     if (answer.correct) {
  //         console.log("you picked the correct answer"); 
  //     }
  // })
  // var answerIndex;
  //     for( var q = 0; q < questionIndex.answers.length; q++) {
  //         console.log("question " + [i] + " answer " + questionIndex.answers[q].text);
  //         answerIndex = questionIndex.answers[q].text
  //         console.log("answerIndex = " + answerIndex);
  //     }
      
  //     for (var a = 0; a < myNodeList.length; a++) {
  //         console.log("pick node index " + [a]);
  //         myNodeList[a].innerHTML = answerIndex[q]; 
  //     }
  
  
  // in questions each question has an index 
  // so questions[0].answers[0].text 
  // returns the answer option
  
 
  