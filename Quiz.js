const questions =  [
    {
        question : "What is the capital of France?",
        options : ["Berlin", "Madrid", "Paris", "Rome"],
        correctAnswers : "Paris"
    },
    {
        question : "Which planet is known as the red planet?",
        options : ["Earth", "Mars", "Jupiter", "Saturn"],
        correctAnswers : "Mars"
    },
    {
        question : "What is the largest mammal in the world?",
        options : ["Elephant", "Blue Whale", "Giraffe", "Hippopotamus"],
        correctAnswers : "Blue Whale"
    },
    {
        question : "Who was the first president of the United States?",
        options : ["George Washington", "Thomas Jefferson", "James Madison", "John Adams"],
        correctAnswers : "George Washington"
    },
    {
        question : "In which year did the first man land on the moon?",
        options : ["1965", "1970", "2000", "2014"],
        correctAnswers : "1965"
    }
];

let currentQuestionIndex = 0;
const questionContainer = document.getElementById('question-container');
const resultContainer = document.getElementById('result-container');

function showQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    questionContainer.innerHTML = currentQuestion.question + "<br>";

    for (let i = 0 ;i < currentQuestion.options.length;i++){
        questionContainer.innerHTML += `<input type ="radio" name="answer" value="${currentQuestion.options[i]}"> ${currentQuestion.options[i]}<br>`;
    }

    questionContainer.innerHTML += '<button onclick="checkAnswer()">Submit Answer</button>';
}

function checkAnswer() {
    const selectedAnswer =  document.querySelector('input[name="answer"]:checked');

    if (selectedAnswer) {
        const isCorrect = selectedAnswer.value  === questions[currentQuestionIndex].correctAnswers;
        displayResult(isCorrect);
        currentQuestionIndex++;
        if(currentQuestionIndex < questions.length) {
            showQuestion();
        } else{
            questionContainer.innerHTML = '';
            resultContainer.innerHTML = "Quiz Completed"
        }
    } else{
        alert("Please select an answer before submitting.");
    }
}


function displayResult(isCorrect) {
    if (isCorrect) {
        resultContainer.innerHTML = 'Correct!';
    } else {
        resultContainer.innerHTML = `Incorrect. The correct answer is: ${questions[currentQuestionIndex].correctAnswers}`;
    }
}


showQuestion();