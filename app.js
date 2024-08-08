// console.log("things are working")

const quizData = [
    {
        question: "What is my dogs name?",
        options: ["Dylan", "Duncan", "Dixie", "Delta"],
        answer: "Dylan"
    },
    // {
    //     question:
    //     options:
    //     answer:
    // }
    // add more questions and new arrary for hard difficulty
    
]
// console.log(quizData[0])

const questionEl = document.querySelector('#question')
const optionsEl = document.querySelector('#options')
const submitButton = document.querySelector('#submit')


//starting point for the player
let currentQuestion = 0;
let score = 0;

//Function once game begins to display question
function giveQuestion() {
    const question = quizData[0];
    questionEl.innerText = question.question

    optionsEl.innerText = "";
    question.options.forEach(option => {
        const button = document.createElement("button");
        button.innerText = option;
        optionsEl.appendChild(button);
        button.addEventListener('click', selectAnswer);
    });
    
}

console.log(giveQuestion(), "give question func working")

//code to select answer
function selectAnswer()