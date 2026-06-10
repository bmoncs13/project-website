const quizData = [
{
    question: "When was Pace Academy founded?",
    options: ["2001", "2002", "2003", "2004"],
    answer: "2001"
},
{
    question: "Who is the HS Coordinator in the Civics department?",
    options: ["Mrs Angela Lucas", "Mrs Kae Yvatte Tugade", "Ms Rosemarie Dela Cruz", "Ms Caberlyn Barte"],
    answer: "Ms Caberlyn Barte"
},
{
    question: "Who is the GS Coordinator in the Civics department?",
    options: ["Mrs Angela Lucas", "Mrs Kae Yvatte Tugade", "Ms Rosemarie Dela Cruz", "Ms Caberlyn Barte"],
    answer: "Mrs Angela Lucas"
},
{
    question: "Who are the founders of Pace Academy?",
    options: ["Mr. Eddie Lao and Mrs. Alice Lao", "Bill Gates and Paul Allen", "Steve Jobs and Steve Wozniak", "Wright Brothers"],
    answer: "Mr. Eddie Lao and Mrs. Alice Lao"
},
{
    question: "What are the Pace Academy core values?",
    options: ["Positive, Affirmative, Christ-Centered, Excellent-Oriented, Respectful", "Passion, Achievement, Caring, Endurance, Renewal", "Patience, Adventure Commitment, Entrepreneural, Reciprocity", "Perfection, Advancement, Consistency, Efficiency, Respect"],
    answer: "Positive, Affirmative, Christ-Centered, Excellent-Oriented, Respectful"
},
];

const quiz = document.getElementById("quiz");
const questionElement = document.getElementById("question");
const optionsElement = document.getElementById("options");
const submitButton = document.getElementById("submit");

let currentQuestion = 0;
let score = 0;

function showQuestion() {
    const question = quizData[currentQuestion];
    questionElement.innerText = question.question;

    optionsElement.innerHTML = "";

    question.options.forEach(option => {
        const button = document.createElement("button");
        button.innerText = option;
        optionsElement.appendChild(button);
        button.addEventListener("click", selectAnswer);
    });
}

function selectAnswer(e) {
    const selectedButton = e.target;
    const answer = quizData[currentQuestion].answer;

    if (selectedButton.innerText === answer) {
        score++;
    }

    currentQuestion++;

    if (currentQuestion < quizData.length) {
        showQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    quiz.innerHTML = `
        <h1>Quiz Completed!</h1>
        <p>Your Score: ${score}/${quizData.length}</p>
    `;
}

showQuestion();