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
  shuffledQuestions = questions.sort(() => 0)
  currentQuestionIndex = 0
  questionContainerElement.classList.remove('hide')
  setNextQuestion()
}

function setNextQuestion() {
  resetState()
  showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
  var i=0;

  questionElement.innerText = question.question
  question.answers.forEach(answer => {
    const button = document.createElement('button')
    button.innerText = answer.text
    button.classList.add('btn')
    if (answer.correct) {
      i++;
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
    questionElement.innerText = question.text2
  } else {
    element.classList.add('wrong')
    questionElement.innerText = question.text
  }
}

function clearStatusClass(element) {
  element.classList.remove('correct')
  element.classList.remove('wrong')
}

const questions = [
  {
    img: <img src="image1.png" width="800" height="400" > ;
    question: '1. Αν κάποιος δεν παίρνει συμπληρώματα διατροφής δεν θα βελτιώσει την εικόνα του;',
    answers: [
      { text: 'Οχι', correct: true },
      { text: 'Ναι', correct: false }
    ]
    text: 'Τα συμπληρώματα απλά συμπληρώνουν ένα πρόγραμμα όταν κάποιος δεν μπορεί να το έχει από το φαγητό.
    Δεν αντικαθιστούν τη διατροφή και την προπόνηση. Αν ο ασκούμενος έχει μια σωστή διατροφή ανάλογα με το επίπεδο και τον στόχο του, παίρνει τα απαραίτητα συστατικά από το φαγητό. ;'
  },
  {
    img: <img src="image1.png" width="800" height="400" > ;
    question: '2. Οι γυναίκες αν κάνουν προπόνηση με βάρη θα «φουσκώσουν»;',
    answers: [
      { text: 'Αλήθεια', correct: false },
      { text: 'Μύθος', correct: true },
      
    ]
     text: 'Για το «φούσκωμα» χρειάζεται γενικά πολύ καλή διατροφή και απαιτητική προπόνηση τόσο για τους άνδρες όσο για τις γυναίκες. 
     Σημαντικό ρόλο έχουν και οι ορμόνες που διαθέτει το κάθε φύλο. Οι άντρες έχουν περισσότερη τεστοστερόνη ενώ οι γυναίκες οιστρογόνα. 
     Η άσκηση με βάρη βοηθάει να καεί περισσότερο λίπος, να δυναμώσει το μυϊκό σύστημα και να σμιλέψει όλο το σώμα. Κάνοντας προπόνηση με βάρη επίσης αυξάνεται και η οστική μάζα, 
     κάτι που είναι ιδιαίτερα σημαντικό καθώς η εμφάνιση οστεοπόρωσης στις γυναίκες είναι συνηθισμένη.;'



  },
  {
    img: <img src="image1.png" width="800" height="400" > ;
    question: '3. Αν τρώμε μόνο σαλάτα θα αδυνατίσουμε;',
    answers: [
      { text: 'Ναι', correct: true },
      { text: 'Όχι', correct: false }
    ]
    text: 'Σίγουρα μία διατροφή μόνο με σαλάτα θα μας αδυνατίσει, αλλά αυτή η απώλεια τι είδους κιλά είναι, μυϊκά η λίπος; Μην ξεχνάτε ότι και η αγελάδα χόρτα τρώει...!;'
  },
  {
  
    img: image2.jpg
    question: '4. Ποια είναι η σωστή εκτέλεση της άσκηση hover, της γνωστής σανίδας; ',
    answers: [
      { text: '1', correct: false },
      { text: '2', correct: true }
    ]
    text: 'Μπορεί όλοι να λέμε plank, όμως plank είναι κυρίως όταν ακουμπάνε οι παλάμες! Η άσκηση που είδαμε λέγεται hover γιατί ακουμπάνε οι αγκώνες! Η Αντιγόνη είναι στο γυμναστήριο για να σε βοηθήσει να πετύχεις τη σωστή σανίδα αν δυσκολεύεσαι!;'
    text2: 'Μπορεί όλοι να λέμε plank, όμως plank είναι κυρίως όταν ακουμπάνε οι παλάμες! Η άσκηση που είδαμε λέγεται hover γιατί ακουμπάνε οι αγκώνες! Η Αντιγόνη είναι στο γυμναστήριο για να σε βοηθήσει να πετύχεις τη σωστή σανίδα αν δυσκολεύεσαι!;'
},
{
    img: <img src="image1.png" width="800" height="400" > ;
    question: '5. Ο καφές μας κάνει κυτταρίτιδα ;',
    answers: [
      
      { text: 'Ναι', correct: false },
      { text: 'Οχι', correct: true }
    ]
   
  },
{ 
    img: <img src="image1.png" width="800" height="400" > ;
    question: '6. Μπορούμε με συγκεκριμένες ασκήσεις να χάσουμε τοπικό λίπος;',
    answers: [
      
      { text: 'Ναι', correct: false },
      { text: 'Οχι', correct: true }
    ]
  },
{
    img: <img src="image1.png" width="800" height="400" > ;
    question: '7. Το λίπος μπορεί να γίνει μυς;',
    answers: [
      
      { text: 'Ναι', correct: false },
      { text: 'Οχι', correct: true }
    ]
  },
{
    img: <img src="image1.png" width="800" height="400" > ;
    question: '8. Αν δεν ιδρώσεις σημαίνει ότι δεν έχεις δουλέψει σωστά;',
    answers: [
      
      { text: 'Αλήθεια', correct: false },
      { text: 'Μύθος', correct: true }
    ]
  },
{
    img: image2.jpg
    question: '9. Ποια είναι η σωστή τεχνική για την άσκηση triceps cable extension;',
    answers: [
      
      { text: '1', correct: false },
      { text: '2', correct: true }
]
  }
]