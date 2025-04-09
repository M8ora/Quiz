const questionSets = {
    HCI: [
        { 
            question: "It is a field of study that refers to communication between the human user and a computer system.", 
            choices: ["HCI (Human Computer Interaction)", "Computer-Mediated Communication (CMC)", "Computer Science"], 
            answer: "HCI (Human Computer Interaction)"
        },
        { 
            question: "It is to design a systems in such a way that make them efficient, stable, usable and attainable.", 
            choices: ["HCI (Human Computer Interaction)", "Computer-Mediated Communication (CMC)", "Computer Science"], 
            answer: "HCI (Human Computer Interaction)"
        },
        { 
            question: "It is a field of computation and information. Computer science plays a crucial role in modern development of HCI.", 
            choices: ["Fine Arts Design", "Computer science", "Cognitive Psychology"], 
            answer: "Computer science"
        },
        { 
            question: "It is a field of HCI which identifies how human interact with systems. It includes Language based interaction, a set of rules are provided to the system.", 
            choices: ["Fine Arts Design", "Computer science", "Cognitive Psychology"],
            answer: "Cognitive Psychology"
        },
        { 
            question: "An artistic way of thinking always produce creative ideas. E-books and novels, digital drawings, video games are some of the applications of fine arts contributing to HCI.", 
            choices: ["Fine Arts Design", "Computer science", "Cognitive Psychology"],
            answer: "Fine Arts Design"
        },
        { 
            question: "It is one of the oldest interaction style present today. But it is not user friendly because user needs to learn so many commands.", 
            choices: ["Natural Language", "Graphic user interface", "Command Line"], 
            answer: "Command Line"
        },
        { 
            question: "It is one of the popular interaction style available today.", 
            choices: ["Natural Language", "Graphic user interface", "Command Line"], 
            answer: "Graphic user interface"
        },
        { 
            question: "Each task or work have it’s own command, you have to be expert or proficient in writing these commands.", 
            choices: ["Natural Language", "Graphic user interface", "Command Line"], 
            answer: "Command Line"
        },
        { 
            question: "It is one step ahead of GUI. We can interact with system by the help of languages that we are using in our day to day life.", 
            choices: ["Natural Language", "Graphic user interface", "Command Line"], 
            answer: "Natural Language"
        },
        { 
            question: "It encompass a variety of disciplines, including psychology, cognitive science, design, and computer science. These theories guide the design, evaluation, and improvement of interactive systems.", 
            choices: ["Information Processing Theory", "Theoretical Foundations of HCI", "HCI (Human Computer Interaction)"], 
            answer: "Theoretical Foundations of HCI"
        },
        { 
            question: "Understanding how users think, learn, and make decisions is essential in designing intuitive interfaces.", 
            choices: ["Social and Collaborative Theories", "Cognitive Theories", "Emotional and Affective Theories"], 
            answer: "Cognitive Theories"
        },
        { 
            question: "These theories focus on how users perceive and interact with interfaces. Fitts’ Law, Hick’s Law and Gestalt Principles.", 
            choices: ["Social and Collaborative Theories", "Perceptual and Motor Theories", "Emotional and Affective Theories"],
            answer: "Perceptual and Motor Theories"
        },
        { 
            question: "These theories address how people interact with computers and other users. <br> Activity Theory – Views human-computer interaction in the context of broader human activities. <br> Distributed Cognition – Suggests that knowledge is shared across people, objects, and tools. <br> Computer-Supported Cooperative Work (CSCW) – Examines how technology enables collaboration.", 
            choices: ["Social and Collaborative Theories", "Perceptual and Motor Theories", "Emotional and Affective Theories"],
            answer: "Social and Collaborative Theories"
        },
        { 
            question: "These guide the creation of effective and user-friendly interfaces. <br> Norman’s Design Principles – Visibility, feedback, constraints, affordances, and mappings. <br> Shneiderman’s Eight Golden Rules – Guidelines for designing effective user interfaces. <br> Usability Heuristics (Nielsen’s 10 Heuristics) – Common principles for evaluating UI usability.", 
            choices: ["Design and Usability Principles", "Perceptual and Motor Theories", "Emotional and Affective Theories"], 
            answer: ""
        },
        { 
            question: "These explore how users' emotions impact their interactions with technology. <br> Affective Computing – Examines how interfaces can detect and respond to users’ emotions. <br> Flow Theory – Describes a state of deep engagement and immersion in an activity.", 
            choices: ["Design and Usability Principles", "Perceptual and Motor Theories", "Emotional and Affective Theories"], 
            answer: "Emotional and Affective Theories"
        },
        { 
            question: "It ensure that digital interfaces are user-friendly, efficient, and aesthetically pleasing. These principles are based on human psychology, usability best practices, and interaction design methodologies.", 
            choices: ["UI Design Principles", "Usability Heuristics", "HCI Design Principles"], 
            answer: "UI design principles"
        },
        { 
            question: "It makes important elements stand out, Users should easily recognize available actions and system status.", 
            choices: ["SIMPLICITY AND MINIMALISM", "VISIBILITY AND CLARITY", "FEEDBACK AND AFFORDANCE"], 
            answer: "VISIBILITY AND CLARITY"
        },
        { 
            question: "It maintain a uniform design across the interface. Users learn patterns quickly, so it enhances usability.", 
            choices: ["SIMPLICITY AND MINIMALISM", "VISIBILITY AND CLARITY", "CONSISTENCY"], 
            answer: "CONSISTENCY"
        },
        { 
            question: "'Less is more'—remove unnecessary complexity. Focus on essential features and content to reduce cognitive load.", 
            choices: ["SIMPLICITY AND MINIMALISM", "VISIBILITY AND CLARITY", "CONSISTENCY"], 
            answer: "SIMPLICITY AND MINIMALISM"
        },
        { 
            question: "The system should communicate the outcome of user actions.", 
            choices: ["ERROR PREVENTION AND RECOVERY", "USER CONTROL AND FREEDOM", "FEEDBACK AND AFFORDANCE"], 
            answer: "FEEDBACK AND AFFORDANCE"
        },
        { 
            question: "Cater to both novice and expert users. Allow users to perform tasks in multiple ways for efficiency.", 
            choices: ["FLEXIBILITY AND EFFICIENCY", "CONSISTENCY", "USER CONTROL AND FREEDOM"], 
            answer: "FLEXIBILITY AND EFFICIENCY"
        },
        { 
            question: "Prevent errors before they happen and offer easy recovery. Help users recognize and correct mistakes.", 
            choices: ["ERROR PREVENTION AND RECOVERY", "USER CONTROL AND FREEDOM", "FEEDBACK AND AFFORDANCE"], 
            answer: "ERROR PREVENTION AND RECOVERY"
        },
        { 
            question: "Users should feel in control, not trapped. Enable easy navigation and reversal of actions.", 
            choices: ["ERROR PREVENTION AND RECOVERY", "USER CONTROL AND FREEDOM", "FEEDBACK AND AFFORDANCE"], 
            answer: "USER CONTROL AND FREEDOM"
        }
    ],
    Research: [
        { 
            question: "People with limited mobility, tremors, or motor impairments may struggle with precise mouse movements or touchscreen gestures.", 
            choices: ["COGNITIVE AND LEARNING DISABILITIES", "PHYSICAL (MOTOR) DISABILITIES", "VISUAL IMPAIRMENTS"], 
            answer: "PHYSICAL (MOTOR) DISABILITIES"
        },
        { 
            question: "Users may have low vision, color blindness, or complete blindness.", 
            choices: ["VISUAL IMPAIRMENTS", "SITUATIONAL AND TEMPORARY DISABILITIES", "COGNITIVE AND LEARNING DISABILITIES"], 
            answer: "VISUAL IMPAIRMENTS"
        },
        { 
            question: "Users who are deaf or hard of hearing need alternative ways to consume audio content.", 
            choices: ["HEARING IMPAIRMENTS", "SITUATIONAL AND TEMPORARY DISABILITIES", "COGNITIVE AND LEARNING DISABILITIES"], 
            answer: "HEARING IMPAIRMENTS"
        },
        { 
            question: "Includes dyslexia, ADHD, memory impairments, and autism spectrum disorders.", 
            choices: ["PHYSICAL (MOTOR) DISABILITIES", "SITUATIONAL AND TEMPORARY DISABILITIES", "COGNITIVE AND LEARNING DISABILITIES"], 
            answer: "COGNITIVE AND LEARNING DISABILITIES"
        },
        { 
            question: "Users may experience temporary challenges, such as a broken arm, bright sunlight affecting screen visibility, or loud environments making audio unusable.", 
            choices: ["PHYSICAL (MOTOR) DISABILITIES", "SITUATIONAL AND TEMPORARY DISABILITIES", "COGNITIVE AND LEARNING DISABILITIES"], 
            answer: "SITUATIONAL AND TEMPORARY DISABILITIES"
        },
        { 
            question: "Ensure diverse participation by including individuals with: <br> Physical, sensory, and cognitive disabilities. <br> Different cultural and linguistic backgrounds. <br> Varying levels of tech experience and digital access.", 
            choices: ["ETHNOGRAPHIC RESEARCH & OBSERVATIONS", "USABILITY TESTING & PROTOTYPING", "RECRUITMENT AND REPRESENTATION"], 
            answer: "RECRUITMENT AND REPRESENTATION"
        },
        { 
            question: "Understanding user behavior in real-world settings is crucial. <br> Observe users in their natural environment (home, workplace). <br> Consider cultural and contextual factors affecting their interaction. <br> Use screen recordings and voice notes to capture experiences.", 
            choices: ["ETHNOGRAPHIC RESEARCH & OBSERVATIONS", "USABILITY TESTING & PROTOTYPING", "RECRUITMENT AND REPRESENTATION"], 
            answer: "ETHNOGRAPHIC RESEARCH & OBSERVATIONS"
        },
        { 
            question: "Testing should be adaptable for users with different abilities.", 
            choices: ["ETHNOGRAPHIC RESEARCH & OBSERVATIONS", "USABILITY TESTING & PROTOTYPING", "RECRUITMENT AND REPRESENTATION"], 
            answer: "USABILITY TESTING & PROTOTYPING"
        },
        { 
            question: "Modify question formats for clarity and accessibility.", 
            choices: ["ETHNOGRAPHIC RESEARCH & OBSERVATIONS", "RECRUITMENT AND REPRESENTATION", "SURVEYS & INTERVIEWS"], 
            answer: "SURVEYS & INTERVIEWS"
        },
        { 
            question: "It play a crucial role in Human-Computer Interaction (HCI) and User Interface (UI) Design, ensuring that technology respects user rights, promotes inclusivity, and minimizes harm. Ethical design focuses on fairness, privacy, accessibility, and transparency.", 
            choices: ["Principles", "Ethics", "Strategies"], 
            answer: "Ethics"
        },
        { 
            question: "Users should have control over their personal data.", 
            choices: ["PRIVACY AND DATA PROTECTION", "ACCESSIBILITY AND INCLUSIVITY", "PSYCHOLOGICAL WELL-BEING", "USER AUTONOMY AND TRANSPARENCY", "BIAS AND FAIRNESS"], 
            answer: "PRIVACY AND DATA PROTECTION"
        },
        { 
            question: "Technology should be usable by everyone, regardless of ability.", 
            choices: ["PRIVACY AND DATA PROTECTION", "ACCESSIBILITY AND INCLUSIVITY", "PSYCHOLOGICAL WELL-BEING", "USER AUTONOMY AND TRANSPARENCY", "BIAS AND FAIRNESS"], 
            answer: "ACCESSIBILITY AND INCLUSIVITY"
        },
        { 
            question: "Avoid discrimination in AI-driven and data-based interfaces.", 
            choices: ["PRIVACY AND DATA PROTECTION", "ACCESSIBILITY AND INCLUSIVITY", "PSYCHOLOGICAL WELL-BEING", "USER AUTONOMY AND TRANSPARENCY", "BIAS AND FAIRNESS"], 
            answer: "BIAS AND FAIRNESS"
        },
        { 
            question: "Users should be in control of their experience.", 
            choices: ["PRIVACY AND DATA PROTECTION", "ACCESSIBILITY AND INCLUSIVITY", "PSYCHOLOGICAL WELL-BEING", "USER AUTONOMY AND TRANSPARENCY", "BIAS AND FAIRNESS"], 
            answer: "USER AUTONOMY AND TRANSPARENCY"
        },
        { 
            question: "Technology should not exploit user vulnerabilities.", 
            choices: ["PRIVACY AND DATA PROTECTION", "ACCESSIBILITY AND INCLUSIVITY", "PSYCHOLOGICAL WELL-BEING", "USER AUTONOMY AND TRANSPARENCY", "BIAS AND FAIRNESS"], 
            answer: "PSYCHOLOGICAL WELL-BEING"
        }
    ],
    Application: [
        { 
            question: "It focuses on creating intuitive and efficient digital experiences. Ensuring usability (ease of use) and accessibility (inclusivity for diverse users) is essential for designing products that work for everyone.", 
            choices: ["Interaction Design", "HCI", "Design Principles"], 
            answer: "Interaction Design"
        },
        { 
            question: "It ensures that users can interact with a system efficiently, effectively, and satisfactorily.", 
            choices: ["Learnability", "Usability", "Usefull"], 
            answer: "Usability"
        },
        { 
            question: "Users should quickly understand how to use the interface. Best Practice: Provide clear labels, familiar icons, and onboarding tutorials.", 
            choices: ["Learnability", "Efficiency", "Error Prevention & Recovery", "Consistency", "Feedback & Visibility"], 
            answer: "Learnability"
        },
        { 
            question: "Users should complete tasks with minimal effort and time. Best Practice: Use keyboard shortcuts, predictive text, and one-click actions to improve speed.", 
            choices: ["", "", ""], 
            answer: "Efficiency"
        },
        /*
        { 
            question: "", 
            choices: ["", "", ""], 
            answer: "Error Prevention & Recovery"
        },
        { 
            question: "", 
            choices: ["", "", ""], 
            answer: "Consistency"
        },
        { 
            question: "", 
            choices: ["", "", ""], 
            answer: "Feedback & Visibility"
        },
        { 
            question: "", 
            choices: ["", "", ""], 
            answer: ""
        },

        { 
            question: "", 
            choices: ["", "", ""], 
            answer: ""
        },
        { 
            question: "", 
            choices: ["", "", ""], 
            answer: ""
        },
        { 
            question: "", 
            choices: ["", "", ""], 
            answer: ""
        },
        { 
            question: "", 
            choices: ["", "", ""], 
            answer: ""
        },
        { 
            question: "", 
            choices: ["", "", ""], 
            answer: ""
        },
        { 
            question: "", 
            choices: ["", "", ""], 
            answer: ""
        },*/
        // Add more questions...
    ]
};

let selectedTopic = 'HCI';
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
    
    let start = currentPage * 2;
    let end = Math.min(start + 2, selectedQuestions.length);

    for (let i = start; i < end; i++) {
        let q = selectedQuestions[i];
        let qIndex = i;
        let div = document.createElement('div');
        div.classList.add("question-card");
        div.innerHTML = `<h3>${qIndex + 1}. ${q.question}</h3>`;

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
    document.getElementById('next').innerText = currentPage === Math.ceil(selectedQuestions.length / 2) - 1 ? "Finish" : "Next";
}

function saveAnswer(index, value) {
    userAnswers[index] = value;
}

function nextPage() {
    if (currentPage < Math.ceil(selectedQuestions.length / 2) - 1) {
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
                <p>Correct Answer: <span class="correct-answer">${q.answer}</span></p>
            </div>
        `;
    });

    document.getElementById('results-container').style.display = 'block';
}