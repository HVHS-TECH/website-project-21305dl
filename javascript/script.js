let quizCategory = "thermochemistry";

////  Random question selector code  ////

const getRandomQuestion = () => {
    const categoryQuestions = questions.find(cat => cat.category.toLowerCase() === quizCategory.toLowerCase()).questions || [];
    
    const randomQuestion = categoryQuestions[Math.floor(Math.random() * categoryQuestions.length)]
    return randomQuestion;
}

const renderQuestion = () => {
  const currentQuestion = getRandomQuestion();
  if(!currentQuestion) return;

  document.querySelector(".question-text").textContent = currentQuestion.question;
}

renderQuestion();