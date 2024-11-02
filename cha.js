// Array of questions with answers
const questions = [
    { question: "It is	an	organized	collection	of	interrelated	components	that function together to perform a task or meet an objective.", options: ["System", "Hardware", "Software", "Application"], correct: 0 },
    { question: "The key feature of a system is _____, each component plays a role, and changing one component can affect the entire system.", options: ["Independent", "Interdependent", "Dependent"], correct: 1 },
    { question: "Every  system  has  a  specific  goal", options: ["Structure", "Interralation", "Purpose", "Diagram"], correct: 2 },
    { question: "The system has a defined arrangement of components", options: ["Structure", "Interralation", "Purpose", "Diagram"], correct: 0 },
    { question: "Components are linked and interact with each other", options: ["Structure", "Interralation", "Purpose", "Diagram"], correct: 1 },
    { question: "Visual representation of a system with components like input", options: ["Structure", "Interralation", "Purpose", "Diagram"], correct: 3 },
    { question: "These are qualities or features that define the system’s overall behavior.", options: ["System Properties", "System Attributes", "System Characters", "System Roles"], correct: 1 },
    { question: "Systems may be simple (few components) or complex (many interconnected components).", options: ["Complexity", "Adaptability", "Efficiency"], correct: 0 },
    { question: "It is how well the system uses resources to perform tasks", options: ["Complexity", "Adaptability", "Efficiency"], correct: 2 },
    { question: "It is the ability to adjust to changes in the environment or user requirements", options: ["Complexity", "Adaptability", "Efficiency"], correct: 1 },
    { question: "These are inherent traits of the system, often measurable, and define its stability and reliability.", options: ["System Properties", "System Attributes", "System Characters", "System Roles"], correct: 0 },
    { question: "This is the observable behaviors that help users or developers understand the system’s functionality.", options: ["System Properties", "System Attributes", "System Characters", "System Roles"], correct: 2 },
    { question: "It refer  to  the  specific  responsibilities  that  each  component  of  the system carries to ensure that the overall system functions efficiently and meets its goals.", options: ["System Properties", "System Attributes", "System Characters", "System Roles"], correct: 3 },
    { question: "It is the system’s ability to perform its intended function under specified conditions", options: ["Reliability","Maintainability", "Security"], correct: 0 },
    { question: "It is how easily a system can be repaired or updated", options: ["Reliability","Maintainability", "Security"], correct: 1 },
    { question: "Measures in place to protect data and system integrity", options: ["Reliability","Maintainability", "Security"], correct: 2 },
    { question: "It is how quickly the system responds to inputs or commands", options: ["Accuracy", "Responsiveness", "User-Friendliness"], correct: 1 },
    { question: "It is how easy it is for users to interact with the system", options: ["Accuracy", "Responsiveness", "User-Friendliness"], correct: 2 },
    { question: "These components are responsible for accepting data or information from external sources.", options: ["Input Roles", "Processing   Roles", "Output Roles", "Control/Feedback  Roles"], correct: 0 },
    { question: "These   components   perform   the   actual   processing   or transformation of input data into meaningful output.", options: ["Input Roles", "Processing   Roles", "Output Roles", "Control/Feedback  Roles"], correct: 1 },
    { question: "These components deliver the results of the processed data back to the user.", options: ["Input Roles", "Processing   Roles", "Output Roles", "Control/Feedback  Roles"], correct: 2 },
    { question: "These  components  monitor  and  regulate  the  system’s operations to ensure that it is working as expected.", options: ["Input Roles", "Processing   Roles", "Output Roles", "Control/Feedback  Roles"], correct: 3 },
    { question: "It refers  to  how  well  a  system  meets  the  users'  and stakeholders'  expectations  and  requirements.", options: ["System Roles", "System Character", "System Acceptability"], correct: 2 },
    { question: "The system must be intuitive and easy for users to navigate.", options: ["Usability", "Compliance", "Security", "Performance"], correct: 0 },
    { question: "The system	should perform	its	functions	efficiently	and	within acceptable time limits.", options: ["Usability", "Compliance", "Security", "Performance"], correct: 3 },
    { question: "Adequate measures must be in place to protect data from unauthorized access or breaches.", options: ["Usability", "Compliance", "Security", "Performance"], correct: 2 },
    { question: "The system should meet industry standards, regulations, and legal requirements.", options: ["Usability", "Compliance", "Security", "Performance"], correct: 1 },
    { question: "The ability to dissect problems, break them down into manageable components, and analyze data.", options: ["Analytical Thinking", "Technical Knowledge", "Communication"], correct: 0 },
    { question: "Proficiency in programming, databases, and  network systems to understand how components interact within the system.", options: ["Analytical Thinking", "Technical Knowledge", "Communication"], correct: 1 },
    { question: "The  ability  to  explain  technical  concepts  to  non-technical stakeholders, ensuring that everyone involved understands the requirements.", options: ["Analytical Thinking", "Technical Knowledge", "Communication"], correct: 2 },
    { question: "One of the Roles of a System Analyst, offers expert advice on system design and development.", options: ["Consultant", "Problem Solver", "Project Manager"], correct: 0 },
    { question: "One of the Roles of a System Analyst, identifies inefficiencies or challenges in existing systems and develops solutions.", options: ["Consultant", "Problem Solver", "Project Manager"], correct: 1 },
    { question: "One of the Roles of a System Analyst, Oversees the implementation of systems, ensuring projects stay on track and within budget.", options: ["Consultant", "Problem Solver", "Project Manager"], correct: 2 },
    { question: "a professional who assesses business problems and designs systems solutions to address those issues. They act as a bridge between the business needs and the IT solutions.", options: ["Consultant", "System Analyst", "Project Manager"], correct: 1 },
    
    //Lesson 2

    { question: "It ensures that the project addresses the true needs of the business and users. It involves identifying, analyzing, and documenting the requirements for the system.", options: ["Requirements Discipline", " Define Requirement", "Evaluate Requirements with Users"], correct: 0 },
    { question: "Collect all relevant information about the system’s needs, functions, and constraints.", options: ["Gathered Information", " Define Requirement", "Prioritize Requirement"], correct: 0 },
    { question: "Clarify and formalize the requirements based on the gathered information", options: ["Gathered Information", " Define Requirement", "Prioritize Requirement"], correct: 1 },
    { question: "Rank the requirements based on factors like business value, feasibility, and urgency.", options: ["Gathered Information", " Define Requirement", "Prioritize Requirement"], correct: 2 },
    { question: "Design the interaction between users and the system. These dialogs help visualize how users will interact with the system.", options: [" Prioritize Requirement", "Develop User Interface Dialogs", "Evaluate Requirements with Users"], correct: 1 },
    { question: "Validate the gathered and defined requirements with the end-users to ensure accuracy and completeness.", options: [" Prioritize Requirement", "Develop User Interface Dialogs", "Evaluate Requirements with Users"], correct: 2 },
    { question: "What is/are the best technique to gather information?", options: ["Interviews", "Surveys/Questionnaires", "Observations", "All of the above"], correct: 3 },
    { question: "Types of Requirements. Describe what the system should do", options: ["Functional Requirements", "Non-Functional Requirements"], correct: 0 },
    { question: "Types of Requirements. Outline how the system should behave", options: ["Functional Requirements", "Non-Functional Requirements"], correct: 1 },
    { question: "Techniques for Prioritizing requirements. : Categorizes requirements into 'Must have,' 'Should have,' 'Could have,' and 'Won't have.' ", options: ["Slovin Method", "MoSCoW Method", "Must-Should Method"], correct: 1 },
    { question: "Techniques for DEVELOP USER INTERFACE DIALOGS. Creating mock-ups of screens to simulate user interaction.", options: ["Prototyping", "Duplicating", "Wireframing"], correct: 0 },
    { question: "Techniques for DEVELOP USER INTERFACE DIALOGS. Basic structural layouts of user interfaces.", options: ["Prototyping", "Duplicating", "Wireframing"], correct: 2 },
    { question: "Methods for Evaluating Requirements with Users. Involving users in testing prototypes or systems against their needs.", options: ["Face-to-face Interviews", "User Acceptance Testing", "Feedback Checking", "Focus Group"], correct: 1 },
    { question: "Methods for Evaluating Requirements with Users. Group discussions with stakeholders to refine requirements.", options: ["Face-to-face Interviews", "User Acceptance Testing", "Feedback Checking", "Focus Group"], correct: 3 },
    { question: "It specify the detailed functionalities and constraints of the system", options: ["Business Requirements", "Functional requirements", "System requirements"], correct: 2 },
    { question: "Have high-level goals and objectives", options: ["Business Requirements", "Functional requirements", "Non-Functional requirements"], correct: 0 },
    { question: "Detailed actions the system must perform.", options: ["Business Requirements", "Functional requirements", "Non-Functional requirements"], correct: 1 },
    { question: "Qualities of the system like performance, reliability, and security.", options: ["Business Requirements", "Functional requirements", "Non-Functional requirements"], correct: 2 },
    { question: "It provide a structured representation of system components and their interactions.", options: ["Models", "Mathematical Models", "Descriptive Models"], correct: 0 },
    { question: "Uses equations to represent system behavior and relationships.", options: ["Graphical Models", "Mathematical Models", "Descriptive Models"], correct: 1 },
    { question: "Describe system components, functions, and processes in written or textual form", options: ["Graphical Models", "Mathematical Models", "Descriptive Models"], correct: 2 },
    { question: "Use visual diagrams to represent system components, data flow, and interactions.", options: ["Graphical Models", "Mathematical Models", "Descriptive Models"], correct: 0 },
    { question: "Types of Diagram. <br> Show interactions between users and the system.", options: ["Case Diagrams", "Entity-Relationship Diagrams (ERD)", "Data Flow Diagrams (DFD)"], correct: 0 },
    { question: "Types of Diagram. <br> Visualize how data moves through the system.", options: ["Case Diagrams", "Entity-Relationship Diagrams (ERD)", "Data Flow Diagrams (DFD)"], correct: 2 },
    { question: "Types of Diagram. <br> Represent data and relationships in databases.", options: ["Case Diagrams", "Entity-Relationship Diagrams (ERD)", "Data Flow Diagrams (DFD)"], correct: 1 },
    { question: "One-on-one discussions with stakeholders.", options: ["Focus Groups", "Interviews", "Questionaires"], correct: 1 },
    { question: "Group meetings to gather diverse perspectives", options: ["Focus Groups", "Interviews", "Document Analysis"], correct: 0 },
    { question: "Reviewing existing documentation", options: ["Focus Groups", "Interviews", "Document Analysis"], correct: 2 },
    { question: "Creating a basic version of the system to gather feedback.", options: ["Duplication", "Prototyping", "Paradigm"], correct: 1 },

    // Continue here

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

    const questionNumber = currentQuestionIndex + 1;
    const question = questions[currentQuestionIndex];
    questionContainer.innerHTML = `
        <h4>${questionNumber}: ${question.question}</h4>
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
    reviewAnswers.innerHTML = userAnswers.slice(page * itemsPerPage, (page + 1) * itemsPerPage).map((answer, index) => {
        const questionNumber = page * itemsPerPage + index + 1;
        return `
            <div class="answer-box">
                <p><strong>Question ${questionNumber}:</strong> ${answer.question}</p>
                <p><strong>Your answer:</strong> ${questions[userAnswers.indexOf(answer)].options[answer.selected]}</p>
                <p><strong>Correct answer:</strong> ${questions[userAnswers.indexOf(answer)].options[answer.correct]}</p>
            </div>
        `;
    }).join('');
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
