// Array of questions with answers
const questions = [
    { question: "It usually refers to animation Hand-drawn on paper.", options: ["Traditional Animation", "2D Animation", "Whiteboard Animation", "Flipbook Animation"], correct: 0 },
    { question: "It is one of the major types of animation. It is widely used for creating animated for the movies, cartoons, marketing, videos, advertisement and so much more.", options: ["3D Animation", "2D Animation", "Puppetry Animation", "Flipbook Animation"], correct: 1 },
    { question: "It is refers to the process objects and making them come to life by creating the illusion that they are moving through a 3D space.", options: ["Claymation", "Puppetry Animation", "3D Animation", "2D Animation"], correct: 2 },
    { question: "The way to communicate with the viewer, and add depth to story", options: ["Stop Motion", "3D Motion", "Motion Graphics", "Rotoscope Animation"], correct: 2 },
    { question: "It is an animated filmmaking technique in which objects are physically manipulated in small increments between individually photographed frames.", options: ["Stop Motion", "3D Motion", "Motion Graphics", "Rotoscope Animation"], correct: 0 },
    { question: "It is an animation type where an artist draws a scene on a whiteboard and records it as an illustrative story.", options: ["Typography Animation", "3D Motion", "Claymation", "Whiteboard Animation"], correct: 3 },
    { question: "It is a type of animation that involves moving text with effects like Expanding, Shrinking, or anything else that suits the scene.", options: ["Typography Animation", "3D Motion", "Claymation", "Whiteboard Animation"], correct: 0 },
    { question: "It is a type of stop motion animation that involves creating a scene in clay.", options: ["Typography Animation", "3D Motion", "Claymation", "Whiteboard Animation"], correct: 2 },
    { question: "It describes the process of creating animated sequences by tracing over live-action footage frame by frame.", options: ["Rotoscope Animation", "3D Motion", "Stop Motion", "Whiteboard Animation"], correct: 0 },
    { question: "It is one of the earliest forms of animation that involves a small book with drawings on its pages.", options: ["Traditional Animation", "Puppetry Animation", "Flipbook Animation", "Whiteboard Animation"], correct: 2 },
    { question: "It uses puppets as the video’s primary subjects instead of any other objects. ", options: ["Traditional Animation", "Puppetry Animation", "Flipbook Animation", "Whiteboard Animation"], correct: 1 },

    // Lesson 2

    { question: "It let you draw, paint, select, and modify artwork, as well as change the view of the Stage", options: ["Tools Panel", "Tools Control", "Transform Tool"], correct: 0 },
    { question: "It is use to custom-define a brush by setting parameters of the brush such as shape and angle.", options: ["Paint Tool", "Pencil Tool", "Brush Tool"], correct: 2 },
    { question: "It is an Inverse kinematics (IK), a way of animating objects using bones chained into linear or branched armatures in parent-child relationships", options: ["Lasso Tool", "Subselection Tool", "Bone Tool"], correct: 2 },
    { question: "It is use to mimic a virtual camera movement", options: ["Rotational Tool", "Camera Tool", "Transform Tool"], correct: 1 },
    { question: "It is use to draw circles and ovals.", options: ["Ellipse Tool", "Shape Tool", "Pencil Tool"], correct: 0 },
    { question: "Use this tool to draw and edit freehand lines.", options: ["Ellipse Tool", "Brush Tool", "Pencil Tool"], correct: 2 },
    { question: "It is use to draw straight and curved lines to create objects. ", options: ["Pen Tool", "Brush Tool", "Pencil Tool"], correct: 0 },
    { question: "It is use to draw squares and rectangles.", options: ["Shape Tool", "Rectangle Tool", "Square Tool"], correct: 1 },
    { question: "It stores the media assets that you create in the Animate authoring environment or import to use in the document.", options: ["Library Panel", "Creative Cloud Library panel", "Assets"], correct: 0 },
    { question: "It lists all the creative assets that you have stored in your libraries along with the assets that others have shared with you. ", options: ["Library Panel", "Creative Cloud Library panel", "Assets"], correct: 1 },
    { question: "This tool is use to select an entire object. Click or drag an object to enclose object with rectangular selection. ", options: ["Selection Tool", "Lasso Tool", "Subselection Tool"], correct: 0 },
    { question: "It is use to scale, rotate, or skew a selection.", options: ["Selection Tool", "Subselection Tool", "Transform Tool"], correct: 2 },
    { question: "Use this tool to reshape a motion path of an animation. You can expose the control points and Bezier handles on the path that correspond to each position property keyframe. ", options: ["Selection Tool", "Subselection Tool", "Transform Tool"], correct: 1 },
    { question: "Use this tool to create an irregular selection outline on an object.", options: ["Lasso Tool", "Subselection Tool", "Transform Tool"], correct: 0 },
    { question: "Use this tool to define a selection area with a series of connected straight lines.", options: ["Polygon Tool", "Subselection Tool", "Lasso Tool"], correct: 0 },
    { question: "Use this tool to select areas of a bitmap graphic that contain the same or similar colors.", options: ["Bone Tool", "Subselection Tool", "Magic Wand Tool"], correct: 2 },
    
    //Lesson 3

    { question: "It is a graphic, button, or movie clip that you create.", options: ["Assets", "Symbols", "gifs"], correct: 1 },
    { question: "It is use to create reusable pieces of animation in Adobe Animate. It have their own multi-frame timeline that is independent from the main movie's Timeline", options: ["Movie Clips", "Graphic Symbols", "Button Symbols"], correct: 0 },
    { question: "It is a collection of frames used in animations or single frame mode. An animated graphic symbol is tied to the Timeline of the document in which the symbol is placed.", options: ["Movie Clips", "Graphic Symbols", "Button Symbols"], correct: 1 },
    { question: "It is a special type of four-frame interactive movie clip in Adobe Animate.", options: ["Movie Clips", "Graphic Symbols", "Button Symbols"], correct: 2 },
    { question: "It is associated with symbol instance decides playback behavior of that instance.", options: ["Loop", "Looping Modes", "Graphic Looping"], correct: 1 },
    { question: "It plays the frames of the Graphic from ‘first frame’ to ‘last frame’ in sequence and keeps looping until there are frames on the parent timeline’s frame span.", options: ["Loop", "Play Once", "Reverse Loop"], correct: 0 },
    { question: "It plays the frames of the Graphic only once from ‘first frame’ to ‘last frame’. After that instance stays at ‘last frame’ for the rest of the frames in the parent timeline’s frame span.", options: ["Loop", "Play Once", "Reverse Loop"], correct: 1 },
    { question: "It plays only one frame of Graphic that is pointed by the ‘first frame’ property.", options: ["Single Frame", "Reverse Loop", "Reverse Play Once"], correct: 0 },
    { question: "It plays the frames of the Graphic only once in reverse order that is starting from ‘last frame’ to ‘first frame’.", options: ["Single Frame", "Reverse Loop", "Reverse Play Once"], correct: 2 },
    { question: "It plays the frames of the Graphic in reverse order that is starting from ‘last frame’ to ‘first frame’ in sequence & keep looping over in reverse order until there are frames on the parent timeline’s frame span.", options: ["Single Frame", "Reverse Loop", "Reverse Play Once"], correct: 1 },
    { question: "It specifies from which frame of Graphic, the loop playback of symbol instance should begin.", options: ["Single Frame", "First Frame", "Last Frame"], correct: 1 },
    { question: "It specifies up to which frame of Graphic, the loop playback should go.", options: ["Single Frame", "First Frame", "Last Frame"], correct: 2 },
    { question: "It doesn't actually play linearly like a normal timeline; it reacts to mouse pointer movement and actions by jumping to the appropriate frame.", options: ["Graphic Symbols", "Button Symbols", "Movie Clip"], correct: 1 },

    { question: "It plays when its starting keyframe first appears and the plays in its entirety, independently of the playhead in the Timeline, even if the SWF file stops playing.", options: ["Start", "Stream Sound", "Event Sound"], correct: 2 },
    { question: "Animate forces animation to keep pace with stream sounds. If Animate can’t draw animation frames quickly enough, it skips frames. Unlike event sounds, this sound effect stop if the SWF file stops playing.", options: ["Start", "Stream Sound", "Event Sound"], correct: 1 },
    { question: "It is the same as Event, except that if the sound is already playing, no new instance of the sound plays.", options: ["Start", "Stream Sound", "Stop"], correct: 0 },
    { question: "It silences the specified sound.", options: ["Start", "Stream Sound", "Stop"], correct: 2 },
    { question: "This is the native sound format of Adobe® Soundbooth™", options: [".snd", ".asnd", ".sd2"], correct: 1 },

    { question: "Organize and controls a documents content over time in layers and frames", options: ["Timeline Control", "Timeline", "Timeline Header"], correct: 1 },
    { question: "Surfacing extra functionality upfront", options: ["Timeline Control", "Timeline", "Timeline Header"], correct: 0 },
    { question: "Types of Layer View", options: ["Layer Parenting View and Multi Layer View", "Multi Layer View and Single Layer View", "Single Layer View and Layer Depth"], correct: 1 },
    { question: "It can change the rotation and scaling of symbols or frame once you enable this", options: ["Camera Button", "Camera", "Camera Tool"], correct: 2 },
    { question: "It displays the parenting hierarchy of layers", options: ["Layer View", "Layers Depth", "Layer Parenting view"], correct: 2 },
    { question: "Allows you to modify the depth of active layer provided in the list", options: ["Layer view", "Layers Depth", "Layer Parenting view"], correct: 1 },
    { question: "The core of any animation dictating each segment of time and movement.", options: ["Keyframe", "Frame", "Span Frame"], correct: 1 },
    { question: "Frame where a new symbol instance appears in the timeline", options: ["Keyframe", "Frame", "Span Frame"], correct: 0 },
    { question: "Frame selection allows you to select a range of frames between two keyframes with a single click", options: ["Span", "Tweened Frame span", "Static frame span"], correct: 0 },
    { question: "You can use this type of span for animations.", options: ["Span", "Tweened frame span", "Static Frame span"], correct: 2 },
    { question: "The platform type of character animation", options: ["HTML5 canvas", ".fla", "Actionscipt3.0", "Actionscip2.0"], correct: 2 },
];

let currentQuestionIndex = 0;
let score = 0;
const userAnswers = [];
let currentPage = 0;
const itemsPerPage = 3;

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
