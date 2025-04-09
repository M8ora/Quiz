const questionSets = {
    PHP: [
        { 
            question: "It is similar to that of C and C++ languages, making it accessible for developers familiar with these languages.", 
            choices: ["MySQL Syntax", "Python Syntax", "PHP Syntax"], 
            answer: "PHP Syntax"
        },
        { 
            question: "IT is executed on the server and the result is sent to the client as HTML.", 
            choices: ["HTML/CSS Code", "PHP Syntax", "PHP Code"], 
            answer: "PHP Code"
        },
        { 
            question: "Statements in PHP are terminated with what?", 
            choices: ["Semicolon (;)", "Colon (:)", "Bracket ({})"], 
            answer: "Semicolon (;)"
        },
        { 
            question: "Were created by assigning a value to them using assignment operator (=), and they start with a '$' symbol", 
            choices: ["Variables", "Array List", "Syntax"], 
            answer: "Variables"
        },
        { 
            question: "A variable starts with the $ sign, followed by the name of the variable", 
            choices: ["TRUE", "FALSE"], 
            answer: "TRUE"
        },
        { 
            question: "A variable name CAN'T start with a letter or the underscore character.", 
            choices: ["TRUE", "FALSE"], 
            answer: "FALSE"
        },
        { 
            question: "A variable name CAN start with a number.", 
            choices: ["TRUE", "FALSE"], 
            answer: "FALSE"
        },
        { 
            question: "A variable can contain alpha-numeric, special characters and underscores (A-z, *-#, 0-9, and _).", 
            choices: ["TRUE", "FALSE"], 
            answer: "FALSE"
        },
        { 
            question: "In PHP, keywords (If, else, while, echo, etc.), classes, functions, and user-defined functions are case-sensitive.", 
            choices: ["TRUE", "FALSE"], 
            answer: "FALSE"
        },
        { 
            question: "It can be enclosed in either single quotes ('') or double quotes.", 
            choices: ["String", "Integer", "Variable"], 
            answer: "String"
        },
        { 
            question: "It treat everything inside as literal String.", 
            choices: ["Single quote", "Double quote"], 
            answer: "Single quote"
        },
        { 
            question: "It allow for variable for interpolation", 
            choices: ["Single quote", "Double quote"], 
            answer: "Double quote"
        },
        { 
            question: "This statement is often used to output data to the screen.", 
            choices: ["echo", "print", "vardump()"], 
            answer: ""
        },
        { 
            question: "PHP supports comments, which are ignored by the PHP interpreter. Single-line.", 
            choices: ["/ /", "/* */", "<!-- -->"], 
            answer: "/ /"
        },
        { 
            question: "PHP supports comments, which are ignored by the PHP interpreter. Multi-line.", 
            choices: ["/ /", "/* */", "<!-- -->"], 
            answer: "/* */"
        },
        { 
            question: "It represents the day of the month ( 0 1 to 3 1 ).", 
            choices: ["D", "d", "day"], 
            answer: "d"
        },
        { 
            question: "It represents a month (01 to 12).", 
            choices: ["M", "m", "mons"], 
            answer: "m"
        },
        { 
            question: "It represents a year (in four digits)", 
            choices: ["Y", "y", "y-y-y-y"], 
            answer: "y"
        },
        { 
            question: "It represents the day of the week", 
            choices: ["L", "i", "l"], 
            answer: "l"
        },
        { 
            question: "24 - hour format of an hour (00 to 23)", 
            choices: ["H", "hr", "h"], 
            answer: "H"
        },
        { 
            question: "12 - hour format of an hour with leading zeros ( 01 to 12)", 
            choices: ["hr", "h", "H"], 
            answer: "h"
        },
        { 
            question: "Minutes with leading zeros (00 to 59)", 
            choices: ["i", "l", "m"], 
            answer: "i"
        },
        { 
            question: "Seconds with leading zeros (00 to 59)", 
            choices: ["s", "S", "i"], 
            answer: "s"
        },
        { 
            question: "Lower case Ante meridiem and Post-meridiem (am or pm)", 
            choices: ["a", "p", "A"], 
            answer: "a"
        },
        { 
            question: "These are used to execute code repeatedly", 
            choices: ["Loops", "Conditions", "Output variables"], 
            answer: "Loops"
        },
        { 
            question: "There are used with numeric values to perform common arithmetical operations, such as addition, subtraction, multiplication etc", 
            choices: ["Comparison Operators", "Arithmetic Operators", "Logical Operators"], 
            answer: "Arithmetic Operators"
        },
        { 
            question: "These are used to compare two values (number or string):", 
            choices: ["Comparison Operators", "Arithmetic Operators", "Logical Operators"], 
            answer: "Comparison Operators"
        },
        { 
            question: "These are used to combine conditional statements.", 
            choices: ["Comparison Operators", "Arithmetic Operators", "Logical Operators"], 
            answer: "Logical Operators"
        },
        { 
            question: "It has two operators that are specially designed for strings", 
            choices: ["String Operators", "Arithmetic Operators", "Logical Operators"], 
            answer: "String Operators"
        }
    ],
    CASTING: [
        {
            quetion: "This function returns the length of a String.",
            choices: ["strlen()", "str_word_count()", "str_replace()"],
            answers: "strlen()"
        },
        { 
            question: "It extracts a substring from a string based on a specified start and optionally end position.", 
            choices: ["substr()", "str_replace()", "Strlen()"], 
            answer: "substr()"
        },
        { 
            question: "It replaces all occurrences of a substring with another substring within a string.", 
            choices: ["substr()", "strlen()", "str_replace()"], 
            answer: "str_replace()"
        },
        { 
            question: "It counts the number of words in a string.", 
            choices: ["strlen()", "str_word_count()", "str_replace()"], 
            answer: "str_word_count()"
        },
        { 
            question: "Operator for Exponentiation.", 
            choices: ["%", "**", "*!"], 
            answer: "**"
        },
        { 
            question: "Operator for Equal.", 
            choices: ["=", "==", "==="], 
            answer: "=="
        },
        { 
            question: "Operator for Identical.", 
            choices: ["=", "==", "==="], 
            answer: "==="
        },
        { 
            question: "Operator for Not Equal.", 
            choices: ["!=", "!==", "!=="], 
            answer: "!="
        },
        { 
            question: "Operator for Pre-increment.", 
            choices: ["++$x", "$x++", "+Sx"], 
            answer: "++$x"
        },
        { 
            question: "Operator for Post-increment.", 
            choices: ["++$x", "$x++", "+$x"], 
            answer: "$x++"
        },
        { 
            question: "Operator for Pre-decrement.", 
            choices: ["--$x", "$x--", "-$x"], 
            answer: "--$x"
        },
        { 
            question: "Operator for Post-increment.", 
            choices: ["--$x", "$x--", "-$x"], 
            answer: "$x--"
        },
        { 
            question: "True if either $x or $y is true, but not both.", 
            choices: ["Xor (xor)", "Or (||)", "Not (!)"], 
            answer: "Xor (xor)"
        },
        { 
            question: "True if either $x or $y is true.", 
            choices: ["Xor (xor)", "Or (||)", "Not (!)"], 
            answer: "Or (||)"
        },
        { 
            question: "Operator for Concatenation.", 
            choices: ["(.)", "(.=)", "(=.)"], 
            answer: "(.)"
        },
        { 
            question: "It executes some code if one condition is true", 
            choices: ["if statement", "if...else statement", "if...elseif...else statement"], 
            answer: "if statement"
        },
        { 
            question: "It executes some code if a condition is true and another code if that condition is false", 
            choices: ["if statement", "if...else statement", "if...elseif...else statement"], 
            answer: "if...else statement"
        },
        { 
            question: "It executes different codes for more than two conditions", 
            choices: ["if statement", "if...else statement", "if...elseif...else statement"], 
            answer: "if..elseif...else statement"
        },
    ],
    ARRAYS: [
        { 
            question: "It sort Arrays in Ascending order.", 
            choices: ["sort()", "rsort()"], 
            answer: "sort()"
        },
        { 
            question: "It sort Arrays in Descending order.", 
            choices: ["sort()", "rsort()"], 
            answer: "rsort()"
        },
        { 
            question: "It Compare the values of two arrays and return the Differences.", 
            choices: ["array_filter()", "array_diff()", "array_intersect()"], 
            answer: "array_diff()"
        },
        { 
            question: "This function compares the values of two arrays (or more), and returns the matches.", 
            choices: ["array_filter()", "array_diff()", "array_intersect()"], 
            answer: "array_intersect()"
        },
        { 
            question: "This function sends each value of an array to a user-made function and returns an array with new values given by the user-made function.", 
            choices: ["array_map()", "array_filter()", "array_intersect()"], 
            answer: "array_map()"
        },
        { 
            question: "what is this?", 
            choices: ["Access Indexed Arrays", "Associative Arrays", "Access Associative Arrays"], 
            answer: "Access Indexed Arrays",
            image: "images/AccessIndexed.PNG"
        },
        { 
            question: "Write on Paper. Show the output.", 
            choices: ["Click if Done",], 
            answer: "Click if Done",
            image: "images/changeValueAccessIndexed.PNG"
        },
        { 
            question: "Write on Paper. Show the Syntax for Associative Arrays and Output.", 
            choices: ["Click if Done"], 
            answer: "Click if Done",
            answerImage: "images/AssoArrays.PNG"
        },
        { 
            question: "Write on Paper. Show the syntac for Access Associative Arrays with Output.", 
            choices: ["Click if Done"], 
            answer: "Click if Done",
            answerImage: "images/AccAssoArrays.PNG"
        },
        { 
            question: "Write on Paper. Show the syntac for Change Value Associative Arrays with Output.", 
            choices: ["Click if Done"], 
            answer: "Click if Done",
            answerImage: "images/ChangeValueAccAssoArrays.PNG"
        },
        { 
            question: "Each item has an index number. by default, the first item has index 0, the second item has item 1, etc.", 
            choices: ["Indexed arrays", "PHP Associative Arrays", "Access Indexed Arrays"], 
            answer: "Indexed arrays"
        },
        { 
            question: "To access an array item you can refer to the index number.", 
            choices: ["PHP Associative Arrays", "Indexed arrays", "Access Indexed Arrays"], 
            answer: "Access Indexed Arrays"
        },
        { 
            question: "These are arrays that use named keys that you assign to them.", 
            choices: ["PHP Associative Arrays", "Change Value", "Access Indexed Arrays"], 
            answer: "PHP Associative Arrays"
        },
        { 
            question: "It is a SUPER GLOBAL VARIABLE used to store information on a user to be used across multiple pages.", 
            choices: ["Sessions", "Variables", "ID"], 
            answer: "Sessions"
        },
        { 
            question: "It hold information about one single user, and are available to all pages in one application.", 
            choices: ["Session variables", "Session-Id", "Global variables"], 
            answer: "Sessions variables"
        },
        { 
            question: "It is assigned to a user.", 
            choices: ["Session-Id", "Variables", "ID"], 
            answer: "Session-Id"
        },
    ]
};

let selectedTopic = 'PHP';
let selectedQuestions = [];
let userAnswers = [];
let currentPage = 0;

function toggleMenu() {
    document.querySelector(".nav-links").classList.toggle("show");
}


document.querySelectorAll(".dropdown > a").forEach(menu => {
    menu.addEventListener("click", function (e) {
        if (window.innerWidth <= 768) {
            e.preventDefault();
            this.parentElement.classList.toggle("active");
        }
    });
});

function loadQuestions(topic) {
    selectedTopic = topic;
    document.getElementById('setup').style.display = 'block';
    document.getElementById('quiz-container').style.display = 'none';
    document.getElementById('results-container').style.display = 'none';
}

function shuffleArray(array) {
    return array.sort(() => Math.random() - 0.5);
}

function startQuiz(numQuestions) {
    let questions = [...questionSets[selectedTopic]];
    shuffleArray(questions);
    selectedQuestions = questions.slice(0, numQuestions).map(q => ({
        ...q, choices: shuffleArray([...q.choices])
    }));
    userAnswers = new Array(numQuestions).fill(null);
    currentPage = 0;
    document.getElementById('setup').style.display = 'none';
    document.getElementById('quiz-container').style.display = 'block';
    showPage();
}

function showPage() {
    let container = document.getElementById('questions');
    container.innerHTML = '';
    
    let start = currentPage * 5;
    let end = Math.min(start + 5, selectedQuestions.length);

    for (let i = start; i < end; i++) {
        let q = selectedQuestions[i];
        let qIndex = i;
        let div = document.createElement('div');
        div.classList.add("question-card");

        let imgHTML = q.image ? `<img src="${q.image}" class="question-image">` : "";
        div.innerHTML = `
            <h3>${qIndex + 1}. ${q.question}</h3>
            ${imgHTML}
        `;


        q.choices.forEach(choice => {
            div.innerHTML += `<label>
                <input type="radio" name="q${qIndex}" value="${choice}" 
                ${userAnswers[qIndex] === choice ? 'checked' : ''} 
                onchange="saveAnswer(${qIndex}, this.value)"> 
                ${choice}
            </label>`;
        });

        container.appendChild(div);
    }

    document.getElementById('prev').style.display = currentPage === 0 ? 'none' : 'inline-block';
    document.getElementById('next').innerText = currentPage === Math.ceil(selectedQuestions.length / 5) - 1 ? "Finish" : "Next";
}

function saveAnswer(index, value) {
    userAnswers[index] = value;
}

function nextPage() {
    if (currentPage < Math.ceil(selectedQuestions.length / 5) - 1) {
        currentPage++;
        showPage();
    } else {
        showResults();
    }
}

function prevPage() {
    if (currentPage > 0) {
        currentPage--;
        showPage();
    }
}

function showResults() {
    document.getElementById('quiz-container').style.display = 'none';
    let container = document.getElementById('results-container');
    container.innerHTML = '';
    
    let correctCount = 0;
    
    selectedQuestions.forEach((q, i) => {
        if (userAnswers[i] === q.answer) {
            correctCount++;
        }
    });

    let percentage = Math.round((correctCount / selectedQuestions.length) * 100);

    container.innerHTML += `
        <div class="result-summary">
            <h2>Quiz Completed!</h2>
            <p>Score: ${correctCount} / ${selectedQuestions.length} (${percentage}%)</p>
        </div>
    `;

    selectedQuestions.forEach((q, i) => {
        let isCorrect = userAnswers[i] === q.answer;

        container.innerHTML += `
            <div class="result-card">
                <h3>${i + 1}. ${q.question}</h3>
                <p class="your-answer">Your Answer: 
                    <span class="${isCorrect ? 'correct-answer' : 'wrong-answer'}">
                        ${userAnswers[i] || 'No Answer'}
                    </span>
                </p>
                <p>Correct Answer:</p>
                ${q.answerImage ? `<img src="${q.answerImage}" class="answer-image">` : `<p class="correct-answer">${q.answer}</p>`}
            </div>
        `;
    });

    document.getElementById('results-container').style.display = 'block';
}
