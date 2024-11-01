// Array of questions with answers
const questions = [
    { question: "What is 2 + 2?", options: [2, 3, 4, 5], correct: 2 },
    { question: "What is the capital of France?", options: ["Berlin", "Paris", "Rome", "Madrid"], correct: 1 },
    { question: "Which planet is known as the Red Planet?", options: ["Earth", "Mars", "Jupiter", "Venus"], correct: 1 },
    // Add more questions as needed
];

let currentQuestionIndex = 0;
let score = 0;
const userAnswers = [];
let currentPage = 0;
const itemsPerPage = 5;

// HTML elements
const questionContainer = document.getElementById("question-container");
const submitBtn = document.getElementById("submit-btn");
const resultContainer = document.getElementById("result-container");
const scoreElement = document.getElementById("score");
const reviewAnswers = document.getElementById("review-answers");
const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");
const restartBtn = document.getElementById("restart-btn");

// Shuffle questions
function shuffleQuestions() {
    for (let i = questions.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [questions[i], questions[j]] = [questions[j], questions[i]];
    }
}

// Load question
function loadQuestion() {
    if (currentQuestionIndex >= questions.length) {
        showResults();
        return;
    }
    
    const question = questions[currentQuestionIndex];
    questionContainer.innerHTML = `
        <h3>${question.question}</h3>
        ${question.options.map((option, index) => `
            <label>
                <input type="radio" name="answer" value="${index}">
                ${option}
            </label>
        `).join('')}
    `;
}

// Handle answer submission
submitBtn.addEventListener("click", () => {
    const selectedOption = document.querySelector('input[name="answer"]:checked');
    if (selectedOption) {
        const answer = parseInt(selectedOption.value);
        const question = questions[currentQuestionIndex];
        
        // Track answer and score
        userAnswers.push({ question: question.question, selected: answer, correct: question.correct });
        if (answer === question.correct) {
            score++;
        }
        
        // Move to the next question
        currentQuestionIndex++;
        loadQuestion();
    } else {
        alert("Please select an answer.");
    }
});

// Display results with pagination
function showResults() {
    questionContainer.classList.add("hidden");
    submitBtn.classList.add("hidden");
    resultContainer.classList.remove("hidden");
    restartBtn.classList.remove("hidden");
    scoreElement.textContent = `${score} / ${questions.length}`;
    
    displayPage(currentPage);
    updatePaginationButtons();
}

// Display items on the current page
function displayPage(page) {
    reviewAnswers.innerHTML = userAnswers.slice(page * itemsPerPage, (page + 1) * itemsPerPage).map(answer => `
        <div class="answer-box">
            <p><strong>Question:</strong> ${answer.question}</p>
            <p><strong>Your answer:</strong> ${questions[userAnswers.indexOf(answer)].options[answer.selected]}</p>
            <p><strong>Correct answer:</strong> ${questions[userAnswers.indexOf(answer)].options[answer.correct]}</p>
        </div>
    `).join('');
}

// Update pagination button visibility
function updatePaginationButtons() {
    prevBtn.classList.toggle("hidden", currentPage === 0);
    nextBtn.classList.toggle("hidden", (currentPage + 1) * itemsPerPage >= userAnswers.length);
}

// Pagination event listeners
prevBtn.addEventListener("click", () => {
    if (currentPage > 0) {
        currentPage--;
        displayPage(currentPage);
        updatePaginationButtons();
    }
});

nextBtn.addEventListener("click", () => {
    if ((currentPage + 1) * itemsPerPage < userAnswers.length) {
        currentPage++;
        displayPage(currentPage);
        updatePaginationButtons();
    }
});

// Restart quiz functionality
restartBtn.addEventListener("click", () => {
    currentQuestionIndex = 0;
    score = 0;
    userAnswers.length = 0;
    currentPage = 0;
    
    questionContainer.classList.remove("hidden");
    submitBtn.classList.remove("hidden");
    resultContainer.classList.add("hidden");
    restartBtn.classList.add("hidden");
    
    shuffleQuestions();
    loadQuestion();
});

// Initialize quiz
shuffleQuestions();
loadQuestion();