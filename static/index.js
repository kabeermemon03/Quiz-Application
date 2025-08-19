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
            { text: "Paris", correct: false },
            { text: "Berlin", correct: false },
            { text: "Rome", correct: true },
            { text: "London", correct: false },
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
        if(answer.correct)
        {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer())
    });
}

function resetState(){
    nextBtn.style.display = 'none'
    while(answerElement.firstChild)
    {
        answerElement.removeChild(answerElement.firstChild)
    }
}

function selectAnswer(e){
    const selectedButton = e.target
    const isCorrect = selectedButton.dataset.correct === "true";
    if(isCorrect)
    {
        selectedButton.classList.add("correct")
    }
    else{
        selectedButton.classList.add("incorrect")
    }
}
StartQuiz()
