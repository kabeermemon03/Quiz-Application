const Questions = [
    {
        question: "What is the capital of France?",
        answer: [
            { text: "Paris", correct: true },
            { text: "Berlin", correct: false },
            { text: "Rome", correct: false },
            { text: "London", correct: false },
        ]
    },
    {
        question: "What is the capital of Germany?",
        answer: [
            { text: "Paris", correct: false },
            { text: "Berlin", correct: true },
            { text: "Rome", correct: false },
            { text: "London", correct: false },
        ]
    },
    {
        question: "What is the capital of Italy?",
        answer: [
            { text: "Venice", correct: false },
            { text: "Milan", correct: false },
            { text: "Rome", correct: true },
            { text: "Turin", correct: false },
        ]
    },
    {
        question: "Which Italian city is known as the birthplace of pizza?",
        answer: [
            { text: "Rome", correct: false },
            { text: "Florence", correct: false },
            { text: "Naples", correct: true },
            { text: "Venice", correct: false },
        ]
    },
    {
        question: "Which city is known as the fashion capital of Italy?",
        answer: [
            { text: "Turin", correct: false },
            { text: "Milan", correct: true },
            { text: "Genoa", correct: false },
            { text: "Palermo", correct: false },
        ]
    },
    {
        question: "Which Italian city has canals instead of roads?",
        answer: [
            { text: "Venice", correct: true },
            { text: "Florence", correct: false },
            { text: "Rome", correct: false },
            { text: "Bologna", correct: false },
        ]
    },
    {
        question: "Which city is known for Romeo and Juliet?",
        answer: [
            { text: "Verona", correct: true },
            { text: "Rome", correct: false },
            { text: "Naples", correct: false },
            { text: "Milan", correct: false },
        ]
    }
]

const questionElement = document.getElementById("question")
const answerElement = document.getElementById("answerBtns")
const nextBtn = document.getElementById("nextBtn")

let currentQuestionIndex = 0;
let Score = 0;

function StartQuiz() {
    currentQuestionIndex = 0
    Score = 0
    nextBtn.innerHTML = "Next"
    ShowQuestion()
}


function ShowQuestion() {
    resetState()
    let currentQuestion = Questions[currentQuestionIndex]
    let QuestionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = QuestionNo + ". " + currentQuestion.question

    currentQuestion.answer.forEach(answer => {
        const button = document.createElement("button")
        button.innerHTML = answer.text
        button.classList.add("mcq-btn")
        answerElement.appendChild(button)
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer)
    });
}

function resetState() {
    nextBtn.style.display = 'none'
    while (answerElement.firstChild) {
        answerElement.removeChild(answerElement.firstChild)
    }
}

function selectAnswer(e) {
    const selectedButton = e.target
    const isCorrect = selectedButton.dataset.correct === "true";
    if (isCorrect) {
        selectedButton.classList.add("correct")
        Score++
    }
    else {
        selectedButton.classList.add("incorrect")
    }
    Array.from(answerElement.children).forEach(btn => {
        if (btn.dataset.correct === "true") {
            btn.classList.add("correct")
        }
        btn.disabled = true;
    });
    nextBtn.style.display = 'block'
}

nextBtn.addEventListener('click', () => {
    if (currentQuestionIndex < Questions.length - 1) {
        handleNextButton();
    } else {
        ShowScore();
    }
})


function handleNextButton() {
    currentQuestionIndex++
    ShowQuestion()
}

function ShowScore() {
    resetState()
    questionElement.innerHTML = `You Scored ${Score} Out Of ${Questions.length}!`
    nextBtn.innerHTML = 'Play Again'
    nextBtn.style.display = 'block'
    nextBtn.addEventListener('click', ()=>{
        StartQuiz()
    })
}

let timeLeft = 30
let timerId;


StartQuiz()
