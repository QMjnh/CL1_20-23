const startButton = document.getElementById('startButton')
const submitKey = document.getElementById('submitKey')
const loginForm = document.getElementById('loginForm')
const question = document.getElementById('question')
const skip = document.getElementById('skip')
const secureSection = document.getElementById('secureSection')
const logBtn = document.getElementById('logBtn')
const returnBtn = document.getElementById('returnBtn')
var questionPanel = document.getElementById('question-panel')
var logInput = document.getElementById('logInput')
var quizContainer = document.getElementById('quiz');
var submitButton = document.getElementById('submit');
var answerTimes = 0
var point = 0

returnBtn.addEventListener('click', function() {
    returnBtn.classList.add('show2')
    question.innerText = "Choose 1 method to log in"
    quizContainer.classList.add('show2')
    submitButton.classList.add('show2')
    startButton.classList.remove('show')
    skip.classList.remove('show')
    submitKey.classList.remove('show')
})
startButton.addEventListener('click', function() {
    returnBtn.classList.remove('show2')
    question.innerText = "Answer all the questions"
    quizContainer.classList.remove('show2')
    submitButton.classList.remove('show2')
    startButton.classList.add('show')
    skip.classList.add('show')
    submitKey.classList.add('show')
})
submitKey.addEventListener('click', function() {
    loginForm.classList.remove('show')
    startButton.classList.add('show')
    skip.classList.add('show')
    submitKey.classList.add('show')
    question.innerText = 'Copy or type key here:'
})
skip.addEventListener('click', function() {
    secureSection.classList.add('show')
})
logBtn.onclick = counter
function counter() {
}
var myQuestions = [
    {
      question: "chưa nghĩ ra câu hỏi, chọn a đi :)",
      answers: {
        a: 'bê',
        b: 'aa',
        c: 'cê'
      },
      correctAnswer: 'a'
    },
    {
      question: "1+1=?",
      answers: {
        a: 'hai',
        b: '2',
        c: '?'
      },
      correctAnswer: 'c'
    },
    {
      question: "a",
      answers: {
        a: 'a',
        b: 'b',
        c: 'c'
      },
      correctAnswer: 'a'
    },
    {
        question: "c",
        answers: {
          a: 'a',
          b: 'b',
          c: 'c'
        },
        correctAnswer: 'c'
    },
    {
        question: "a",
        answers: {
          a: 'a',
          b: 'b',
          c: 'c'
        },
        correctAnswer: 'a'
    }
  ];
  
generateQuiz(myQuestions, quizContainer, submitButton);

function generateQuiz(questions, quizContainer, submitButton){

    function showQuestions(questions, quizContainer){
        // we'll need a place to store the output and the answer choices
        var output = [];
        var answers;

        // for each question...
        for(var i=0; i<questions.length; i++){
        
        // first reset the list of answers
        answers = [];

        // for each available answer...
        for(letter in questions[i].answers){

            // ...add an html radio button
            answers.push(
            '<label>'
                + '<input type="radio" name="question'+i+'" value="'+letter+'">'
                + letter + ': '
                + questions[i].answers[letter]
            + '</label>'
            );
        }

        // add this question and its answers to the output
        output.push(
            '<div class="question1">' + questions[i].question + '</div>'
            + '<div class="answers">' + answers.join('') + '</div>'
        );
        }

        // finally combine our output list into one string of html and put it on the page
        quizContainer.innerHTML = output.join('');
    }


    function showResults(questions, quizContainer){
        
        // gather answer containers from our quiz
        var answerContainers = quizContainer.querySelectorAll('.answers');
        
        // keep track of user's answers
        var userAnswer = '';
        var numCorrect = 0;
        
        // for each question...
        for(var i=0; i<questions.length; i++){

        // find selected answer
        userAnswer = (answerContainers[i].querySelector('input[name=question'+i+']:checked')||{}).value;
        
        // if answer is correct
        if(userAnswer===questions[i].correctAnswer){
            // add to the number of correct answers
            numCorrect++;
        }
        }
        if(numCorrect == questions.length) {
            secureSection.classList.add('show')
        } else {
            submitButton.classList.add('show')
        }
    }

    // show questions right away
    showQuestions(questions, quizContainer);

    // on submit, show results
    submitButton.onclick = function(){
        showResults(questions, quizContainer);
    }

}

