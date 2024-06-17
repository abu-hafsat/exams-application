quizquestions = [
    {
        quizid : 'question one',
        quiz : 'what is your name ?',

    },
    {
        quizid: "question two",
        quiz: "what is your profession ?",

    },
    {
        quizid: "question three",
        quiz : "who is your best friend ?",
    },
    {
        quizid: "question four",
        quiz : "who do you love must ?",
    },
    {
        quizid: "question five",
        quiz: "what do you hate must ?",
    }
];
questionnumb = document.getElementById("quiz-heading");
questionstatement = document.getElementById("quiz-question");
input = document.getElementById("quiz-input");
submitbutton = document.getElementById("quiz-submit");

let currentquiz = 0;

function startquiz () {
    let quizitem = quizquestions[currentquiz];
    questionnumb.textContent = quizitem.quizid;
    questionstatement.textContent = quizitem.quiz;
}

submitbutton.addEventListener("click", function() {
    if(currentquiz == 0 && input.value == "marwan") {
       document.getElementById("text").textContent = "correct answer"
       document.getElementById("text").style.color = 'blue';
       currentquiz++;
    } else if(currentquiz == 1 && input.value == "web development") {
        document.getElementById("text").textContent = "smart"
        document.getElementById("text").style.color = 'blue';
       currentquiz++; 
    } else if(currentquiz == 2 && input.value == "Aminu") {
    document.getElementById("text").textContent = "handsome"
    document.getElementById("text").style.color = 'blue';
       currentquiz++;
   } else if(currentquiz == 3 && input.value == "my mother") {
    document.getElementById("text").textContent = "interested"
    document.getElementById("text").style.color = "blue";
       currentquiz++;
   } else if(currentquiz == 4 && input.value == "kafir") {
    document.getElementById("text").textContent = "congratulations! you have answered all"
    document.getElementById("text").style.color = 'blue';
   } else if(currentquiz > quizquestions.length -1) {
    alert("no more questions! do you want to retake the quiz again??")
   } else {
    document.getElementById("text").textContent = "wrong answer !!"
    document.getElementById("text").style.color = "red";

   }
startquiz();
}); 