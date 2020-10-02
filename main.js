let correctAns = "";

async function getApi(){
    let response = await fetch (`https://opentdb.com/api.php?amount=10&type=boolean`);
    let data = await response.json();
    //console.log(data);
    // console.log("this is question " + data.results[0].question)
    // console.log("this is correct " + data.results[0].correct_answer);
    // console.log("this is incorrect " + data.results[0].incorrect_answers[0]);
    newQuestion(data.results[0].question);
    //questions = data.results[0].correct_answer;
    correctAns = data.results[0].correct_answer;
    console.log(correctAns);
};

getApi();

// Username 
let userName = document.querySelector(".user_name")
let  userBtn = document.querySelector(".user_button")
let userHeader = document.querySelector(".header-one")
userBtn.addEventListener("click", function userCreator(){
    userHeader.innerText = "Player: " + userName.value
})

// Question

let question = document.querySelector(".Question")

function newQuestion (string) {
    let p = document.createElement("p")
    p.innerText = string;
    question.appendChild(p);
};

//buttons
let trueBtn = document.querySelector("#true");
let falseBtn = document.querySelector("#false");

trueBtn.addEventListener("click", buttonClickTrue);
falseBtn.addEventListener("click", buttonClickFalse);

function buttonClickTrue(correctAns) {
    if (correctAns === "True"){
        alert("Correct!");
    } alert("Incorrect!");
}

function buttonClickFalse(correctAns){
    if (correctAns === "False"){
        alert("Correct!");
    } alert("Incorrect!");
}

// score - not working at the moment
let games = 0
let wins = 0
let losses = 0

let gameTotal = document.querySelector(".games_played") 
gameTotal.innerText = "Games Played: " + games.toString()
let winTotal = document.querySelector(".wins") 
winTotal.innerText = "Wins: " + wins.toString()
let lossTotal = document.querySelector(".losses") 
lossTotal.innerText = "Losses: " + losses.toString()

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











