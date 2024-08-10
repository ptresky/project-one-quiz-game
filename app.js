let quizData = [
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
    {
        question: "Who is the author of 'To Kill a Mockingbird'?",
        options: ["F.Scott Fitzgerald", "Harper Lee", "John Steinbeck", "Ernest Hemingway"],
        answer: "Harper Lee",
    },
    {
        question: "What is the capital city of New Zealand?",
        options: ["Auckland", "Christchurch", "Wellington", "Queenstown"],
        answer: "Wellington",
    },
    {
        question: "What country has the highest life expectancy?",
        options: ["China", "Hong Kong", "Russia", "Japan"],
        answer: "Hong Kong",
    },
]

let quizDataHard = [
    {
        question: "In which sport are barani, rudolph, and randolph all techniques?",
        options: ["tennis", "trampolining", "bocce", "fly fishing"],
        answer: "trampolining",
    },
    {
        question: "What color does gold leaf appear if you hold it up to the light?",
        options: ["gold", "white", "green", "orange"],
        answer: "green",
    },
    {
        question: "What is considered the northernmost capital in the world?",
        options: ["Helinski", "Stockholm", "Oslo", "Reykjavik"],
        answer: "Reykjavik",
    },
    {
        question: "Who invented the first mass-produced, practical sewing machine in 1846?",
        options: ["Isaac Singer", "Elias Howe", "Walter Hunt", "Barthélemy Thimonnier"],
        answer: "Elias Howe",
    },
    {
        question: "What is the capital city of Kazakhstan?",
        options: ["Almaty", "Bishkek", "Astana", "Tashkent"],
        answer: "Astana",
    },
    {
        question: "What is the only species of bear found in the Southern Hemisphere?",
        options: ["Polar Bear", "Brown Bear", "Panda Bear", "Spectacled Bear"],
        answer: "Spectacled Bear",
    },
    {
        question: "What is the name of the closest star to Earth, besides the Sun?",
        options: ["Sirius", "Alpha Centauri", "Proxima Centauri", "Betelgeuse"],
        answer: "Proxima Centauri",
    },
    {
        question: "Which two countries fought in the Falklands War?",
        options: ["Argentina & United Kingdom", "Brazil & Chile", "Argentina & Chile", "Chile & United Kingdom"],
        answer: "Argentina & United Kingdom",
    },
    {
        question: "What city holds the title of the oldest continuously inhabited city globally?",
        options: ["Athens", "Jerusalem", "Cairo", "Damascus"],
        answer: "Damascus",
    },
]

const gameMessageEl = document.querySelector('#gameMessage')
const questionEl = document.querySelector('#question')
const optionsEl = document.querySelector('#options')
const resetButtonEl = document.querySelector('#reset')
const toggleButtonEl = document.querySelector('#toggle')
let currentQuestion = 0;
let gameOver = false;
let quizDataCurrent = quizData

init()

function init() {
    console.log("init working")
    currentQuestion = 0
    gameOver = false
    gameMessageEl.innerText = ""
    render()
    giveQuestion()
}

function render() {
    if (gameOver === true) {
        resetButtonEl.classList.remove('hidden')
    } else {
        resetButtonEl.classList.add('hidden')
    }
}

function giveQuestion() {
    if (currentQuestion >= quizDataCurrent.length) {
        gameMessageEl.innerText = "Congratulations! You won!";
        gameOver = true;
        render();
        return;
    }

    const question = quizDataCurrent[currentQuestion];
    
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

function selectAnswer(event) {
    const selection = event.target;
    
    const answer = quizDataCurrent[currentQuestion].answer;
    if (currentQuestion >= quizData.length) {
        return gameMessageEl.textContent = "Congratulations! You won!";
        
    }
    if (selection.innerText.toLowerCase() === answer.toLowerCase()) {
        console.log('right answer!')
        gameMessageEl.textContent = "CORRECT!"
        currentQuestion += 1
        giveQuestion()

    } else {
        gameMessageEl.textContent = "Wrong Answer, Click Play Again"
        gameOver = true
        render()
        }
    }
    
function toggleArrays() {
    quizDataCurrent = (quizDataCurrent === quizData) ? quizDataHard : quizData;
    init()
}

resetButtonEl.addEventListener('click', init)
toggleButtonEl.addEventListener('click', toggleArrays)

const openBtn = document.querySelector("#openDirections");
const closeBtn = document.querySelector("#closeDirections");
const directions = document.querySelector("#directions");

openBtn.addEventListener('click', () => {
    directions.classList.add('open');
});

closeBtn.addEventListener('click', () => {
    directions.classList.remove('open');
});
