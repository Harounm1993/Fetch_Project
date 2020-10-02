//let questions = undefined;

async function getApi(){
    let response = await fetch (`https://opentdb.com/api.php?amount=10&type=boolean`);
    let data = await response.json();
    console.log(data);
    console.log("this is question " + data.results[0].question)
    console.log("this is correct " + data.results[0].correct_answer);
    console.log("this is incorrect " + data.results[0].incorrect_answers[0]);
    newQuestion(data.results[0].question);
    //questions = data.results[0].correct_answer;
    whenTrue(data.results[0].correct_answer);
    whenFalse(data.results[0].correct_answer);
};

getApi();

let games = document.querySelector(".games_played")
let wins = document.querySelector(".wins")
let losses = document.querySelector(".losses")

games = 0
wins = 0
losses = 0

// Answers

// function answerCheck(string){
//     if (string === "True" && trueClick){
//         alert = "Correct!"
//         games++;
//         wins++;
//     } else if (string !== "True" && trueClick){
//         alert = "Incorrect!"
//         games++;
//         losses++;
//     };

//     if (string === "False" && falseClick){
//         alert = "Correct!"
//         games++;
//         wins++;
//     } else if (string !== "False" && falseClick){
//         alert = "Incorrect!"
//         games++;
//         losses++;
//     };

//console.log(answerCheck);

//button

let trueBtn = document.querySelector(".true")
let falseBtn = document.querySelector(".false")

trueBtn.addEventListener("click", whenTrue);
falseBtn.addEventListener("click", whenFalse);

function whenTrue(){
    //if (string === "True"){
        alert = "Correct!"
        games++;
        wins++;
        return
    //} else if (string !== "True"){
        alert = "Incorrect!"
        games++;
        losses++;
    //};

}

function whenFalse(){
    //if (string === "False"){
        alert = "Correct!"
        games++;
        wins++;
    //} else if (string !== "True"){
        alert = "Incorrect!"
        games++;
        losses++;
    //};
}


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













