// console.log("things are working")

const quizData = [
    {
        question: "What country has the highest life expectancy?",
        options: ["China", "Hong Kong", "Russia", "Japan"],
        answer: "Hong Kong",
    },
    {
        question: "Where would you be if you were standing on the Spanish Steps?",
        options: ["Madrid", "Rome", "Mexico City", "Paris"],
        answer: "Rome",
    },
    {
        question: "How many elements are on the periodic table?",
        options: ["118", "100", "127", "99"],
        answer: "118",
    },
    {
        question: "What planet has the most moons?",
        options: ["Jupiter", "Saturn", "Neptune", "Mars"],
        answer: "Saturn",
    },
    {
        question: "What country drinks the most coffee per capita?",
        options: ["USA", "Canada", "Guatemala", "Finland"],
        answer: "Finland",
    },
    // {
    //     question: "Where would you be if you were standing on the Spanish Steps?",
    //     options: ["Madrid", "Rome", "Mexico City", "Paris"],
    //     answer: "Rome",
    // },

    // add more questions and new array for hard difficulty
    
]
// console.log(quizData[0])

const questionEl = document.querySelector('#question')
const optionsEl = document.querySelector('#options')
// const submitButton = document.querySelector('#submit')
let gameMessageEl = document.querySelector('#gameMessage')
const resetButtonEl = document.querySelector('#reset')


//starting point for the player
init()

function init() {
    console.log("init working")
    resetButtonEl.classList.add("hidden")
    gameMessageEl = ""
    currentQuestion = 0
    score = 0
    gameOver = false
    render()
}

function render() {
    if (gameOver) {
        resetButtonEl.classList.remove('hidden')
        // gameMessageEl.classList.remove('hidden')
    }
}

//Function once game begins to display question
function giveQuestion() {
    const question = quizData[0];
    if (quizData.length === 0) {
        return gameMessageEl = "Congratulations! You won!"
        init()}
        
    questionEl.innerText = question.question

    optionsEl.innerText = "";
    question.options.forEach(option => {
        const button = document.createElement("button");
        button.innerText = option;
        optionsEl.appendChild(button);
        button.addEventListener('click', selectAnswer);
    });
}
giveQuestion()
// console.log(giveQuestion(), "give question func working")

//code to select answer
function selectAnswer(event) {
    const selection = event.target;
    console.table(quizData)
    const answer = quizData[0].answer;
    // console.log(selection.innerText.toLowerCase(), "this is the on click" )
    console.log(answer, "this is the answer")
    // compare the selection to the answer while both are lower case
    if (quizData.length === 0) {
        return gameMessageEl = "Congratulations! You won!"
        init()
    }
    if (selection.innerText.toLowerCase() === answer.toLowerCase()) {
        console.log('right answer!')
        score += 1  
        gameMessageEl = "CORRECT!"
        // remove the current question from the front of the data array
        quizData.shift()
        giveQuestion()
        // console.log(currentQuestion, score)
    } else if (
        selection.innerText.toLowerCase() !== answer.toLowerCase()) {
            console.log("wrong answer")
            console.log(gameMessageEl)
            gameMessageEl = "Wrong Answer, Play Again"
            checkGameOver()
        }
        console.log(gameMessageEl)

    }




function checkGameOver() {
    gameOver = true
    questionEl.classList.remove('hidden')
    optionsEl.classList.remove('hidden')
    resetButtonEl.classList.add('hidden')

}
