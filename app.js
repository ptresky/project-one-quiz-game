// console.log("things are working")

let quizData = [
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
    // add more questions and new array for hard difficulty
]




const gameMessageEl = document.querySelector('#gameMessage')
const questionEl = document.querySelector('#question')
const optionsEl = document.querySelector('#options')
const resetButtonEl = document.querySelector('#reset')
let currentQuestion = 0;
let gameOver = false;

//starting point for the player
init()

function init() {
    console.log("init working")
    currentQuestion = 0
    gameOver = false
    render()
    giveQuestion()
}

function render() {
    if (gameOver === true) {
        resetButtonEl.classList.remove('hidden')
        // gameMessageEl.classList.remove('hidden')
    }
}

//Function once game begins to display question
function giveQuestion() {
    if (currentQuestion >= quizData.length) {
        return gameMessageEl.innerText = "Congratulations! You won!";
        gameOver = true;
        render();
        return;
    }

    const question = quizData[currentQuestion];
    
        
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
    // console.table(quizData)
    const answer = quizData[currentQuestion].answer;
    // console.log(selection.innerText.toLowerCase(), "this is the on click" )
    console.log(answer, "this is the answer")
    // compare the selection to the answer while both are lower case
    // if (quizData.length === 0) {
    //     return gameMessageEl.textContent = "Congratulations! You won!"
    //     init()
    // }
    if (selection.innerText.toLowerCase() === answer.toLowerCase()) {
        console.log('right answer!')
        // score += 1  
        gameMessageEl.textContent = "CORRECT!"
        currentQuestion += 1
        giveQuestion()
      
        console.log(gameMessageEl.textContent)
        // console.log(currentQuestion, score)
    } else {
        gameMessageEl.textContent = "Wrong Answer, Play Again"
        checkGameOver()
        }
        console.log(gameMessageEl)

    }




function checkGameOver() {
    gameOver === true
    questionEl.classList.remove('hidden')
    optionsEl.classList.remove('hidden')
    resetButtonEl.classList.add('hidden')

}

resetButtonEl.addEventListener('click', init)