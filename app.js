// console.log("things are working")

const quizData = [
    {
        question: "What country has the highest life expectancy?",
        options: ["China", "Hong Kong", "Russia", "Japan"],
        answer: "Hong Kong",
    },
    {
        question: "Where would you be if you were standing on the Spanish Steps?",
        options: ["Madrid", "Rome", "Mexico City", "Paris"       ],
        answer: "Rome",
    },
    {
        question: "How many elements are on the periodic table?",
        options: ["118", "100", "127", "99"       ],
        answer: "118",
    },
    {
        question: "What planet has the most moons?",
        options: ["Jupiter", "Saturn", "Neptune", "Mars"       ],
        answer: "Saturn",
    },
    {
        question: "What country drinks the most coffee per capita?",
        options: ["USA", "Canada", "Guatemala", "Finland"       ],
        answer: "Finland",
    },
    {
        question: "Where would you be if you were standing on the Spanish Steps?",
        options: ["Madrid", "Rome", "Mexico City", "Paris"       ],
        answer: "Rome",
    },

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
function selectAnswer(options) {
    const selection = options.target;
    const answer = quizData[currentQuestion].answer;

    if (selection.innerText === answer) {
        score++ && currentQuestion++
    } else{
        gameOver()
    }
}

console.log(selectAnswer())
function gameOver() {

}

function showResult() {

}