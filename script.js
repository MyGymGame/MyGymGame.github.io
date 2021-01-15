const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
  currentQuestionIndex++
  setNextQuestion()
})

function startGame() {
  startButton.classList.add('hide')
  shuffledQuestions = questions.sort(() => 0- .5)
  currentQuestionIndex = 0
  questionContainerElement.classList.remove('hide')
  setNextQuestion()
}

function setNextQuestion() {
  resetState()
  showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
  questionElement.innerText = question.question
  question.answers.forEach(answer => {
    const button = document.createElement('button')
    button.innerText = answer.text
    button.classList.add('btn')
    if (answer.correct) {
      button.dataset.correct = answer.correct
    }
    button.addEventListener('click', selectAnswer)
    answerButtonsElement.appendChild(button)
  })
}

function resetState() {
  clearStatusClass(document.body)
  nextButton.classList.add('hide')
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild)
  }
}

function selectAnswer(e) {
  const selectedButton = e.target
  const correct = selectedButton.dataset.correct
  setStatusClass(document.body, correct)
  Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct)
  })
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove('hide')
  } else {
    startButton.innerText = 'Restart'
    startButton.classList.remove('hide')
  }
}

function setStatusClass(element, correct) {
  clearStatusClass(element)
  if (correct) {
    element.classList.add('correct')
  } else {
    element.classList.add('wrong')
  }
}

function clearStatusClass(element) {
  element.classList.remove('correct')
  element.classList.remove('wrong')
}


  const questions = [
  {

    question: '1. Αν κάποιος δεν παίρνει συμπληρώματα διατροφής δεν θα βελτιώσει την εικόνα του;',
    answers: [
      { text: 'Οχι', correct: true },
      { text: 'Ναι', correct: false }
    ]
    
  },
  {
    
    question: '2. Οι γυναίκες αν κάνουν προπόνηση με βάρη θα «φουσκώσουν»;',
    answers: [
      { text: 'Αλήθεια', correct: false },
      { text: 'Μύθος', correct: true },
      
    ]
     


  },
  {
    
    question: '3. Αν τρώμε μόνο σαλάτα θα αδυνατίσουμε;',
    answers: [
      { text: 'Ναι', correct: true },
      { text: 'Όχι', correct: false }
    ]
    
  },
  {
  
    question: '4. Ποια είναι η σωστή εκτέλεση της άσκηση hover, της γνωστής σανίδας; ',
    answers: [
      { text: '1', correct: false },
      { text: '2', correct: true }
    ]
    
},
{
    
    question: '5. Ο καφές μας κάνει κυτταρίτιδα ;',
    answers: [
      
      { text: 'Ναι', correct: false },
      { text: 'Οχι', correct: true }
    ]
   
  },
{ 

    question: '6. Μπορούμε με συγκεκριμένες ασκήσεις να χάσουμε τοπικό λίπος;',
    answers: [
      
      { text: 'Ναι', correct: false },
      { text: 'Οχι', correct: true }
    ]
  },
{
    
    question: '7. Το λίπος μπορεί να γίνει μυς;',
    answers: [
      
      { text: 'Ναι', correct: false },
      { text: 'Οχι', correct: true }
    ]
  },
{
  
    question: '8. Αν δεν ιδρώσεις σημαίνει ότι δεν έχεις δουλέψει σωστά;',
    answers: [
      
      { text: 'Αλήθεια', correct: false },
      { text: 'Μύθος', correct: true }
    ]
  },
{
    
    question: '9. Ποια είναι η σωστή τεχνική για την άσκηση triceps cable extension;',
    answers: [
      
      { text: '1', correct: false },
      { text: '2', correct: true }
]
  }
]