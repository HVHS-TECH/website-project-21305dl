const configContainer = document.querySelector(".config-container");
const quizContainer = document.querySelector(".quiz-container");
const answerOptions = document.querySelector(".answer-options");
const nextQuestionBtn = document.querySelector(".next-question-btn");
const questionStatus = document.querySelector(".question-status");
const timerDisplay = document.querySelector(".time-duration");
const resultContainer = document.querySelector(".results-container");

const QUIZ_TIME_LIMIT = 15;
let currentTime = QUIZ_TIME_LIMIT;
let timer = null;

////  Default quiz category and number of questions and answer settings  ////

let quizCategory = "3.2 spectroscopic chemistry";
let numberOfQuestions = 5;
let currentQuestion = null;
const questionsIndexHistory = [];
let correctAnswersCount = 0;

////  Show results container and hide the quiz container once quiz is completed  ////

const showQuizResult = () => {
  quizContainer.style.display = "none";
  resultContainer.style.display = "block";

  const resultText = `You have successfully answered <b>${correctAnswersCount}</b> out of <b>${numberOfQuestions}</b> questions correctly. Good effort!`;
  document.querySelector(".results-message").innerHTML = resultText;
}

////  Reset the timer after a question  ////

const resetTimer = () => {
  clearInterval(timer);
  currentTime = QUIZ_TIME_LIMIT;
  timerDisplay.textContent = `${currentTime}s`;
}

////  Start the timer  ////

const startTimer = () => {
  timer = setInterval(() => {
    currentTime--;
    timerDisplay.textContent = `${currentTime}s`;

    if(currentTime <= 0) {
      clearInterval(timer);
      highlightCorrectAnswer();
      nextQuestionBtn.style.visibility = "visible";
      quizContainer.querySelector(".quiz-timer").style.background = "rgba(179, 20, 20, 1)";

      ////  Disable option selection after time runs out  ////

      answerOptions.querySelectorAll(".answer-option").forEach(option => option.style.pointerEvents = "none");
    }
  }, 1000);
}

////  Random question selector code  ////

const getRandomQuestion = () => {
    const categoryQuestions = questions.find(cat => cat.category.toLowerCase() === quizCategory.toLowerCase()).questions || [];

////  Maximum questions code  ////

    if(questionsIndexHistory.length >= Math.min(categoryQuestions.length, numberOfQuestions)) {
      return showQuizResult();
    }

////  Hide already asked questions and use new ones  ////

    const availableQuestions = categoryQuestions.filter((_, index) => !questionsIndexHistory.includes(index));
    const randomQuestion = availableQuestions[Math.floor(Math.random() * categoryQuestions.length)];

    questionsIndexHistory.push(categoryQuestions.indexOf(randomQuestion));
    return randomQuestion;
}

////  Highlights correct answer if an incorrect answer is selected and inserts icon ////

const highlightCorrectAnswer = () => {
  const correctOption = answerOptions.querySelectorAll(".answer-option")[currentQuestion.correctAnswer];
  correctOption.classList.add("correct");
  const iconHTML = `<span class="material-symbols-rounded">check_circle</span>`;
  correctOption.insertAdjacentHTML("beforeend", iconHTML);
}

////  Handle the user's answer choice  ////

const handleAnswer = (option, answerIndex) => {
  clearInterval(timer);

  const isCorrect = currentQuestion.correctAnswer === answerIndex;
  option.classList.add(isCorrect ? 'correct' : 'incorrect');
  !isCorrect ? highlightCorrectAnswer() : correctAnswersCount++;

////  Insert icons depending on the correct / incorrect answers  ////

  const iconHTML = `<span class="material-symbols-rounded">${isCorrect ? 'check_circle' : 'cancel'}</span>`;
  option.insertAdjacentHTML("beforeend", iconHTML);

////  Disable option selection after one option has already been selected  ////

  answerOptions.querySelectorAll(".answer-option").forEach(option => option.style.pointerEvents = "none");

  nextQuestionBtn.style.visibility = "visible";
}

////  Display the current question and the option choices  ////

const renderQuestion = () => {
  currentQuestion = getRandomQuestion();
  if(!currentQuestion) return;

  resetTimer();
  startTimer();

////  Update the quiz UI  ////

  answerOptions.innerHTML = "";
  nextQuestionBtn.style.visibility = "hidden";
  quizContainer.querySelector(".quiz-timer").style.background = "rgb(39, 39, 39)";
  document.querySelector(".question-text").textContent = currentQuestion.question;
  questionStatus.innerHTML = `<b>${questionsIndexHistory.length}</b> of <b>${numberOfQuestions}</b> Questions`;

////  Create the option choices, append them, and have the ability to be clicked on  ////

  currentQuestion.options.forEach((option, index) => {
    const li = document.createElement("li");
    li.classList.add("answer-option");
    li.textContent = option;
    answerOptions.appendChild(li);
    li.addEventListener("click", () => handleAnswer(li, index));
  });
}

////  Start the quiz and display the first random question with option choices  ////

const startQuiz = () => {
  configContainer.style.display = "none";
  quizContainer.style.display = "block";

////  Update the category and number of questions  ////

  quizCategory = configContainer.querySelector(".category-option.active").textContent;
  numberOfQuestions = parseInt(configContainer.querySelector(".question-option.active").textContent);

  renderQuestion();
}

////  Highlight the chosen category / number of questions  ////

document.querySelectorAll(".category-option, .question-option").forEach(option => {
  option.addEventListener("click", () => {
    option.parentNode.querySelector(".active").classList.remove("active");
    option.classList.add("active");
  });
});

////  Hide the results container and display the configuration container  ////

const resetQuiz = () => {
  resetTimer();
  correctAnswersCount = 0;
  questionsIndexHistory.length = 0;
  configContainer.style.display = "block";
  resultContainer.style.display = "none";
}

nextQuestionBtn.addEventListener("click", renderQuestion);
document.querySelector(".try-again-btn").addEventListener("click", resetQuiz);
document.querySelector(".start-quiz-button").addEventListener("click", startQuiz);