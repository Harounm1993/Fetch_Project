async function getApi(){
    let response = await fetch (`https://opentdb.com/api.php?amount=10&type=boolean`);
    let data = await response.json();
    console.log(data);
    console.log(data.results[0].question)
    console.log(data.results[0].incorrect_answers[0]);
    console.log(data.results[0].correct_answer);
 
    //answerOne.value = data.results[0].correct_answer;
  
    newQuestion(data.results[0].question)
};


getApi();

// Answers
let trueAnswer = document.querySelector(".true")
let falseAnswer = document.querySelector(".false")

// Question

let question = document.querySelector(".Question")

function newQuestion (string) {
    let p = document.createElement("p")
    p.innerText = string;
    question.appendChild(p);
};




//Username
let userName = document.querySelector(".user_name")
let  userBtn = document.querySelector(".user_button")
let userHeader = document.querySelector(".header-one")
userBtn.addEventListener("click", function userCreator(){
    
    userHeader.innerText = "Player: " + userName.value

})

// score 

let playAgain = true; 
let games = 0
let wins = 0
let losses = 0






//solo player game - player one
//trivia question change after each answer given

//data.results[i].question will give us the question
//console.log(data.results[i].incorrect_answers[i]);
//will give us the incorrect answers
//console.log(data.results[i].correct_answer);
//will give us the correct answers. 

//button to submit answers and give true/false results
//button for new question / next round
//add a score board at the end
//count the score out of the questions answered
// e.g. 3 out of 5 correct
//time limit on questions, after 30 seconds move to next question.
//give incorrect(false) result if no answer given after 30 seconds
//style at the end

//edit the input fields to include all the possible answers 
//(incorrect and correct)
//use the dom to assign the answers from api to the input fields
//select each id for the input answers
//use variable from each id to set innerText to API answers (incorrect/correct)
//randomize the answers on the screen
//
//upon clicking the button, 
//give correct or incorrect result (not the answer)
//add to score tally and questions answered tally
//add eventlistener to refresh questions and answers
//
//<h1 class ="header-one">Player:</h1>
//<input class="user_name" placeholder="Enter Your Username"></input>
//<button class = "user_button">Create User</button>













