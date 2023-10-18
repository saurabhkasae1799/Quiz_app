const questions = [{
        question: "The full form of CSS is:?",
        answers: [
            { text: "Cascading Style Sheets", correct: true },
            { text: "Coloured Special Sheets", correct: false },
            { text: "Color and Style Sheets", correct: false },
            { text: "None of the above", correct: false },
        ]
    },
    {
        question: "How can we change the background color of an element?",
        answers: [
            { text: "Background-color", correct: true },
            { text: "color", correct: false },
            { text: "Both A and B", correct: false },
            { text: "None of the above", correct: false },
        ]
    }, {
        question: "How can we change the text color of an element?",
        answers: [
            { text: "Background-color", correct: false },
            { text: "color", correct: true },
            { text: "Both A and B", correct: false },
            { text: "None of the above", correct: false },
        ]
    }, {
        question: "In how many ways can CSS be Written in?",
        answers: [
            { text: "1", correct: false },
            { text: "2", correct: false },
            { text: "3", correct: true },
            { text: "4", correct: false },
        ]
    }, {
        question: "What is the smallest header in html  by default?",
        answers: [
            { text: "h1", correct: false },
            { text: "h2", correct: false },
            { text: "h4", correct: false },
            { text: "h6", correct: true },
        ]
    },
    {
        question: "What are the types of lists available in HTML?",
        answers: [
            { text: "Ordered, Unordered Lists", correct: true },
            { text: "Bulleted, Numbered Lists", correct: false },
            { text: "Named, Unnamed Lists", correct: false },
            { text: "None od the above", correct: false },
        ]
    },
    {
        question: "How to create an ordered list in HTML?",
        answers: [
            { text: "ul", correct: false },
            { text: "ol", correct: true },
            { text: "href", correct: false },
            { text: "b", correct: false },
        ]
    },
    {
        question: "HTML file are saved by default with the extension?",
        answers: [
            { text: ".html", correct: true },
            { text: ".h", correct: false },
            { text: ".ht", correct: false },
            { text: "None of the above", correct: false },
        ]
    }, {
        question: "We eclose HTML tage within?",
        answers: [
            { text: "{}", correct: false },
            { text: "<>", correct: true },
            { text: "!!", correct: false },
            { text: "None of the above", correct: false },
        ]
    },
    {
        question: "How to display preformatted text in HTML?",
        answers: [
            { text: "p", correct: false },
            { text: "pre", correct: true },
            { text: "hr", correct: false },
            { text: "All of the above", correct: false },
        ]
    },
];
const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.
    question;


    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}


function resetState() {
    nextButton.style.display = "none";
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if (isCorrect) {
        selectedBtn.classList.add("correct");
        score++;
    } else {
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

function showScore() {
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
}

function handleNextButton() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showScore();
    }
}

nextButton.addEventListener("click", () => {
    if (currentQuestionIndex < questions.length) {
        handleNextButton();
    } else {
        startQuiz();
    }
});
startQuiz();