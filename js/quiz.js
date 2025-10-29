const questions = [
  {
    question: 'The Latin name of Hydrogen is:',
    options: ['Hydrogen', 'Hydrogius', 'Hydroguim', 'Hydrogenium'],
    correctAnswer: 'Hydrogenium',
  },
  {
    question: 'How many neutrons does Hydrogen have?',
    options: [0, 1, 2, 3],
    correctAnswer: 0,
  },
  {
    question: 'When was Iron discovered?',
    options: ['1000', '5000', '1000 BC', '5000 BC'],
    correctAnswer: '5000 BC',
  },
  {
    question: 'What is the Latin name of Potassium?',
    options: ['Natrium', 'Kalium', 'Potassium', 'Ferrum'],
    correctAnswer: 'Kalium',
  },
  {
    question: 'What is the English name of Nickolum?',
    options: ['Nitrogen', 'Nickel', 'Nitrogenium', 'Fluorine'],
    correctAnswer: 'Nickel',
  },
  {
    question: 'What is the phase of Bromine?',
    options: ['Solid', 'Gas', 'Liquid', 'Unknown'],
    correctAnswer: 'Liquid',
  },
  {
    question: 'When was Oxygen discovered?',
    options: ['2000', '10000 BC', '1766', '1828'],
    correctAnswer: '1766',
  },
  {
    question: 'Which one is not a gas?',
    options: ['Hydrogen', 'Argon', 'Krypton', 'Bromine'],
    correctAnswer: 'Bromine',
  },
  {
    question: 'Which indicator turns from colorless to red-violet?',
    options: ['Litmus paper', 'Universal', 'Phenolphthalein', 'Methyl-orange'],
    correctAnswer: 'Phenolphthalein',
  },
  {
    question: 'Which metal is liquid at room temperature?',
    options: ['Mercury', 'Lead', 'Iron', 'Aluminum'],
    correctAnswer: 'Mercury',
  },
  {
    question: "Which gas is known as 'Laughing Gas'?",
    options: ['Oxygen', 'Nitrogen', 'Nitrous Oxide', 'Carbon Dioxide'],
    correctAnswer: 'Nitrous Oxide',
  },
  {
    question: 'What is the atomic number of Carbon?',
    options: [4, 6, 8, 12],
    correctAnswer: 6,
  },
  {
    question: "Which element is the most abundant in Earth's crust?",
    options: ['Iron', 'Oxygen', 'Silicon', 'Aluminum'],
    correctAnswer: 'Oxygen',
  },
  {
    question: 'Which metal is used in making aircraft bodies?',
    options: ['Iron', 'Copper', 'Aluminum', 'Lead'],
    correctAnswer: 'Aluminum',
  },
  {
    question: 'What is the chemical symbol for Gold?',
    options: ['Ag', 'Au', 'Pb', 'Fe'],
    correctAnswer: 'Au',
  },
  {
    question: 'What is the pH of pure water?',
    options: [5, 6, 7, 8],
    correctAnswer: 7,
  },
  {
    question: 'Which gas is used in balloons to make them float?',
    options: ['Oxygen', 'Helium', 'Hydrogen', 'Carbon Dioxide'],
    correctAnswer: 'Helium',
  },
  {
    question: 'Which element is essential for making nuclear energy?',
    options: ['Uranium', 'Plutonium', 'Thorium', 'All of the above'],
    correctAnswer: 'All of the above',
  },
  {
    question: 'Which element is the lightest?',
    options: ['Helium', 'Oxygen', 'Hydrogen', 'Neon'],
    correctAnswer: 'Hydrogen',
  },
  {
    question: 'What is dry ice made of?',
    options: ['Water', 'Oxygen', 'Carbon Dioxide', 'Methane'],
    correctAnswer: 'Carbon Dioxide',
  },
  {
    question: 'What is the most reactive metal?',
    options: ['Potassium', 'Lithium', 'Sodium', 'Francium'],
    correctAnswer: 'Francium',
  },
  {
    question: 'What is the most electronegative element?',
    options: ['Chlorine', 'Fluorine', 'Oxygen', 'Sulfur'],
    correctAnswer: 'Fluorine',
  },
  {
    question: "What is the main gas in Earth's atmosphere?",
    options: ['Oxygen', 'Nitrogen', 'Carbon Dioxide', 'Argon'],
    correctAnswer: 'Nitrogen',
  },
  {
    question: "Which element is known as the 'King of Chemicals'?",
    options: [
      'Sulfuric Acid',
      'Hydrochloric Acid',
      'Nitric Acid',
      'Acetic Acid',
    ],
    correctAnswer: 'Sulfuric Acid',
  },
  {
    question: 'Which gas is used in fire extinguishers?',
    options: ['Oxygen', 'Carbon Dioxide', 'Hydrogen', 'Nitrogen'],
    correctAnswer: 'Carbon Dioxide',
  },
  {
    question: 'Which element is used in thermometers?',
    options: ['Iron', 'Lead', 'Mercury', 'Silver'],
    correctAnswer: 'Mercury',
  },
  {
    question: 'What is the chemical name of common table salt?',
    options: [
      'Sodium Carbonate',
      'Sodium Chloride',
      'Sodium Hydroxide',
      'Calcium Chloride',
    ],
    correctAnswer: 'Sodium Chloride',
  },
  {
    question: 'Which gas is responsible for the greenhouse effect?',
    options: ['Oxygen', 'Carbon Dioxide', 'Nitrogen', 'Helium'],
    correctAnswer: 'Carbon Dioxide',
  },
  {
    question: 'Which metal is the best conductor of electricity?',
    options: ['Copper', 'Gold', 'Silver', 'Aluminum'],
    correctAnswer: 'Silver',
  },
  {
    question: 'What is the main component of natural gas?',
    options: ['Ethane', 'Methane', 'Butane', 'Propane'],
    correctAnswer: 'Methane',
  },
  {
    question: 'What is the atomic number of Oxygen?',
    options: [6, 8, 10, 12],
    correctAnswer: 8,
  },
  {
    question: 'Which metal is most resistant to corrosion?',
    options: ['Iron', 'Aluminum', 'Gold', 'Platinum'],
    correctAnswer: 'Gold',
  },
  {
    question: 'The Latin name of Hydrogen is:',
    options: ['Hydrogen', 'Hydrogius', 'Hydroguim', 'Hydrogenium'],
    correctAnswer: 'Hydrogenium',
  },
  {
    question: 'The symbol of Helium is:',
    options: ['He', 'H', 'He2', 'H2'],
    correctAnswer: 'He',
  },
  {
    question: 'Who discovered Lithium?',
    options: [
      'Dmitri Mendeleev',
      'Johan August Arfvedson',
      'Marie Curie',
      'Albert Einstein',
    ],
    correctAnswer: 'Johan August Arfvedson',
  },
  {
    question: 'What is the atomic number of Boron?',
    options: ['5', '6', '7', '4'],
    correctAnswer: '5',
  },
  {
    question: 'The Latin name of Carbon is:',
    options: ['Carbium', 'Carbonium', 'Carbona', 'Carbon'],
    correctAnswer: 'Carbonium',
  },
  {
    question: 'What is the symbol of Nitrogen?',
    options: ['Ni', 'N', 'Ne', 'Ng'],
    correctAnswer: 'N',
  },
  {
    question: 'Oxygen was discovered by which scientist?',
    options: [
      'Joseph Priestley',
      'Isaac Newton',
      'Albert Einstein',
      'Marie Curie',
    ],
    correctAnswer: 'Joseph Priestley',
  },
  {
    question: 'Which of the following elements is a noble gas?',
    options: ['Oxygen', 'Neon', 'Nitrogen', 'Carbon'],
    correctAnswer: 'Neon',
  },
  {
    question: 'The atomic number of Fluorine is:',
    options: ['9', '10', '7', '8'],
    correctAnswer: '9',
  },
  {
    question: 'The Latin name of Sodium is:',
    options: ['Natrium', 'Sodiam', 'Natrinum', 'Sodiumium'],
    correctAnswer: 'Natrium',
  },
  {
    question: "Which element has the symbol 'Mg'?",
    options: ['Magnesium', 'Manganese', 'Mercury', 'Molybdenum'],
    correctAnswer: 'Magnesium',
  },
  {
    question: 'The atomic number of Phosphorus is:',
    options: ['15', '16', '14', '13'],
    correctAnswer: '15',
  },
  {
    question: 'Who discovered Sulfur?',
    options: [
      'Dmitri Mendeleev',
      'Antoine Lavoisier',
      'Robert Boyle',
      'Marie Curie',
    ],
    correctAnswer: 'Antoine Lavoisier',
  },
  {
    question: 'What is the symbol of Chlorine?',
    options: ['Cl', 'C', 'Ch', 'Cr'],
    correctAnswer: 'Cl',
  },
  {
    question: "Which element is known as 'Quick Silver'?",
    options: ['Silver', 'Gold', 'Mercury', 'Platinum'],
    correctAnswer: 'Mercury',
  },
  {
    question: 'What is the atomic number of Nitrogen?',
    options: ['6', '7', '8', '9'],
    correctAnswer: '7',
  },
  {
    question: 'The Latin name of Potassium is:',
    options: ['Kalium', 'Kalim', 'Potassiumium', 'Potassia'],
    correctAnswer: 'Kalium',
  },
  {
    question: 'Who discovered Calcium?',
    options: [
      'Dmitri Mendeleev',
      'Sir Humphry Davy',
      'Joseph Priestley',
      'Albert Einstein',
    ],
    correctAnswer: 'Sir Humphry Davy',
  },
  {
    question: "Which element has the symbol 'Fe'?",
    options: ['Iron', 'Fluorine', 'Francium', 'Fermium'],
    correctAnswer: 'Iron',
  },
  {
    question: 'The atomic number of Argon is:',
    options: ['17', '18', '19', '20'],
    correctAnswer: '18',
  },
  {
    question: 'What is the Latin name of Calcium?',
    options: ['Calciumium', 'Calcinium', 'Calcium', 'Calcisium'],
    correctAnswer: 'Calcium',
  },
  {
    question: 'What is the atomic number of Scandium?',
    options: ['21', '22', '23', '24'],
    correctAnswer: '21',
  },
  {
    question: 'Which element is a transition metal?',
    options: ['Oxygen', 'Iron', 'Nitrogen', 'Helium'],
    correctAnswer: 'Iron',
  },
  {
    question: 'What is the atomic number of Manganese?',
    options: ['25', '26', '24', '27'],
    correctAnswer: '25',
  },
  {
    question: 'Who discovered Iodine?',
    options: [
      'Joseph Priestley',
      'Marie Curie',
      'Bernard Courtois',
      'Dmitri Mendeleev',
    ],
    correctAnswer: 'Bernard Courtois',
  },
  {
    question: 'The Latin name of Gold is:',
    options: ['Aurum', 'Aurumium', 'Goldium', 'Aurius'],
    correctAnswer: 'Aurum',
  },
  {
    question: 'What is the atomic number of Zinc?',
    options: ['30', '31', '32', '33'],
    correctAnswer: '30',
  },
  {
    question: "Which element has the symbol 'Cu'?",
    options: ['Copper', 'Cobalt', 'Calcium', 'Carbon'],
    correctAnswer: 'Copper',
  },
  {
    question: 'What is the atomic number of Selenium?',
    options: ['34', '35', '36', '33'],
    correctAnswer: '34',
  },
  {
    question: 'The Latin name of Silver is:',
    options: ['Argentum', 'Silvum', 'Argonium', 'Silvia'],
    correctAnswer: 'Argentum',
  },
  {
    question: 'Who discovered Xenon?',
    options: [
      'William Ramsay',
      'Marie Curie',
      'Dmitri Mendeleev',
      'Albert Einstein',
    ],
    correctAnswer: 'William Ramsay',
  },
  {
    question: 'The symbol of Krypton is:',
    options: ['Kr', 'Krpt', 'Krypt', 'Kr1'],
    correctAnswer: 'Kr',
  },
  {
    question: 'What is the atomic number of Bromine?',
    options: ['35', '36', '34', '37'],
    correctAnswer: '35',
  },
  {
    question: 'The Latin name of Iron is:',
    options: ['Ferrum', 'Ferro', 'Ferrumium', 'Fe'],
    correctAnswer: 'Ferrum',
  },
  {
    question: 'Who discovered Radon?',
    options: [
      'Marie Curie',
      'Rudolf Clausius',
      'Ernest Rutherford',
      'Frederick Soddy',
    ],
    correctAnswer: 'Frederick Soddy',
  },
  {
    question: 'What is the atomic number of Strontium?',
    options: ['38', '39', '40', '41'],
    correctAnswer: '38',
  },
  {
    question: 'The symbol for Barium is:',
    options: ['Ba', 'B', 'Bb', 'Br'],
    correctAnswer: 'Ba',
  },
  {
    question: "Which element has the symbol 'Ra'?",
    options: ['Radium', 'Radium', 'Radon', 'Rhenium'],
    correctAnswer: 'Radium',
  },
  {
    question: 'The atomic number of Thorium is:',
    options: ['88', '89', '90', '91'],
    correctAnswer: '90',
  },
  {
    question: 'What is the symbol of Uranium?',
    options: ['Ur', 'U', 'Ura', 'Uraniumium'],
    correctAnswer: 'U',
  },
  {
    question: 'The Latin name of Mercury is:',
    options: ['Hydrargyrum', 'Mercurium', 'Hydrargium', 'Mercur'],
    correctAnswer: 'Hydrargyrum',
  },
  {
    question: 'Who discovered Plutonium?',
    options: [
      'Glenn T. Seaborg',
      'Marie Curie',
      'Albert Einstein',
      'Ernest Rutherford',
    ],
    correctAnswer: 'Glenn T. Seaborg',
  },
  {
    question: 'What is the atomic number of Americium?',
    options: ['95', '96', '97', '98'],
    correctAnswer: '95',
  },
  {
    question: 'The symbol of Curium is:',
    options: ['Cm', 'Cr', 'C', 'Cu'],
    correctAnswer: 'Cm',
  },
  {
    question: 'What is the atomic number of Berkelium?',
    options: ['97', '98', '99', '100'],
    correctAnswer: '97',
  },
  {
    question: 'The Latin name of Californium is:',
    options: ['Californius', 'Californium', 'Californium', 'California'],
    correctAnswer: 'Californium',
  },
  {
    question: 'Who discovered Einsteinium?',
    options: [
      'Glenn T. Seaborg',
      'Albert Einstein',
      'Marie Curie',
      'Joseph Priestley',
    ],
    correctAnswer: 'Glenn T. Seaborg',
  },
  {
    question: 'What is the symbol of Fermium?',
    options: ['Fm', 'Fe', 'Fr', 'Fl'],
    correctAnswer: 'Fm',
  },
  {
    question: 'The atomic number of Mendelevium is:',
    options: ['101', '102', '103', '104'],
    correctAnswer: '101',
  },
  {
    question: 'The symbol of Nobelium is:',
    options: ['No', 'Nobel', 'Nb', 'Nd'],
    correctAnswer: 'No',
  },
  {
    question: 'Who discovered Lawrencium?',
    options: [
      'Albert Ghiorso',
      'Marie Curie',
      'Glenn T. Seaborg',
      'Ernest Rutherford',
    ],
    correctAnswer: 'Albert Ghiorso',
  },
  {
    question: 'The atomic number of Tennessine is:',
    options: ['117', '118', '116', '115'],
    correctAnswer: '117',
  },
  {
    question: 'The symbol of Moscovium is:',
    options: ['Mc', 'Mo', 'Ms', 'Moscovium'],
    correctAnswer: 'Mc',
  },
  {
    question: 'Which element has the highest atomic number?',
    options: ['Oganesson', 'Moscovium', 'Tennessine', 'Flerovium'],
    correctAnswer: 'Oganesson',
  },
  {
    question: 'The symbol for Flerovium is:',
    options: ['Fl', 'Fm', 'Fe', 'Fo'],
    correctAnswer: 'Fl',
  },
  {
    question: 'What is the atomic number of Livermorium?',
    options: ['115', '116', '117', '118'],
    correctAnswer: '116',
  },
  {
    question: 'Who discovered the element Francium?',
    options: [
      'Marguerite Perey',
      'Marie Curie',
      'Glenn T. Seaborg',
      'Ernest Rutherford',
    ],
    correctAnswer: 'Marguerite Perey',
  },
  {
    question: 'What is the Latin name of Lead?',
    options: ['Plumbum', 'Plumbium', 'Plumbumium', 'Leadium'],
    correctAnswer: 'Plumbum',
  },
  {
    question: 'What is the atomic number of Cobalt?',
    options: ['26', '27', '25', '24'],
    correctAnswer: '27',
  },
  {
    question: 'What is the atomic number of Chromium?',
    options: ['24', '25', '26', '27'],
    correctAnswer: '24',
  },
  {
    question: 'The symbol of Vanadium is:',
    options: ['V', 'Va', 'Vl', 'Vn'],
    correctAnswer: 'V',
  },
  {
    question: 'Which element has the highest atomic weight?',
    options: ['Oganesson', 'Uranium', 'Thorium', 'Tennessine'],
    correctAnswer: 'Oganesson',
  },
  {
    question: 'What is the symbol of Bismuth?',
    options: ['Bi', 'Bs', 'Bm', 'Bismuthium'],
    correctAnswer: 'Bi',
  },
  {
    question: 'Which of the following elements is a halogen?',
    options: ['Fluorine', 'Neon', 'Xenon', 'Argon'],
    correctAnswer: 'Fluorine',
  },
  {
    question: 'What is the atomic number of Zirconium?',
    options: ['40', '41', '42', '43'],
    correctAnswer: '40',
  },
  {
    question: 'What is the atomic number of Yttrium?',
    options: ['38', '39', '40', '41'],
    correctAnswer: '39',
  },
  {
    question: 'The Latin name of Tin is:',
    options: ['Stannum', 'Stannium', 'Tinus', 'Sn'],
    correctAnswer: 'Stannum',
  },
  {
    question: 'What is the atomic number of Cadmium?',
    options: ['48', '49', '47', '50'],
    correctAnswer: '48',
  },
];

let skippedQuestions = []; // Array to store skipped questions
let questionIndex = 0; // Index for current question
let correct = 0;
let wrong = 0;
let timer; // Timer reference
let remainingTime = 0; // Store remaining time for the skipped question

const skipButton = document.querySelector('.skip-button');

// Shuffle the questions for random order
function shuffleQuestions(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
}

const storedNumQuestions =
  parseInt(localStorage.getItem('questionCount')) || questions.length;

let randomQuestionStart =
  Math.floor(Math.random() * questions.length) - storedNumQuestions;

if (randomQuestionStart < 0) {
  randomQuestionStart = questions.length - storedNumQuestions;
}

const selectedQuestions = questions.slice(
  randomQuestionStart,
  randomQuestionStart + storedNumQuestions
);

console.log(randomQuestionStart);

shuffleQuestions(selectedQuestions);
document.getElementById(
  'totalQuestions'
).textContent = `/ ${storedNumQuestions}`;

const questionElement = document.querySelector('.question');
const answerContainer = document.querySelector('.answers');
const correctScoreElement = document.querySelector(
  '.correct-score #correctQuestions'
);
const wrongScoreElement = document.querySelector('.wrong-score');
const timerElement = document.querySelector('.timer');

// Skip button functionality
skipButton.addEventListener('click', () => {
  // Push the current question to skippedQuestions array
  skippedQuestions.push({
    question: selectedQuestions[questionIndex], // Store current question
    remainingTime, // Store remaining time
  });

  // wrong++; // Increase wrong score when skipped
  // wrongScoreElement.textContent = wrong;

  // Move to the next question
  nextQuestion();
});

// Start timer for the current question
function startTimer() {
  let timeLeft = 10;
  if (remainingTime > 0) {
    timeLeft = 10; // Resume from remaining time if any
  }
  timerElement.textContent = `Time left: ${timeLeft}s`;

  timer = setInterval(() => {
    timeLeft--;
    remainingTime = timeLeft; // Update remaining time

    timerElement.textContent = `Time left: ${timeLeft}s`;

    if (timeLeft <= 0) {
      clearInterval(timer);
      wrong++; // If time is up, mark it as wrong
      wrongScoreElement.textContent = wrong;
      nextQuestion(); // Move to next question
    }
  }, 1000);
}

// Handle question display
function handleQuestion() {
  if (questionIndex >= selectedQuestions.length) {
    // Once we go through all normal questions, check skipped questions
    if (skippedQuestions.length > 0) {
      // Get the first skipped question and continue from where the timer stopped
      const skipped = skippedQuestions.shift();
      selectedQuestions.push(skipped.question); // Add skipped question back to end of the stack
      remainingTime = skipped.remainingTime; // Set remaining time to where it was stopped
    } else {
      showResults(); // Show results if all questions are answered
      return;
    }
  }

  clearInterval(timer); // Stop previous timer if any
  startTimer(); // Start new timer for current question

  const currentQuestion = selectedQuestions[questionIndex];
  questionElement.textContent = currentQuestion.question;
  answerContainer.innerHTML = '';

  currentQuestion.options.forEach((option) => {
    const button = document.createElement('button');
    button.textContent = option;
    /* const colorArray = [
      'dodgerblue',
      'lime',
      'pink'
    ];
    randomButtonColor = Math.floor(Math.random() * colorArray.length)
    questionElement.style.color = colorArray[randomButtonColor]; */

    button.addEventListener('click', (e) => handleAnswer(e, option));
    answerContainer.appendChild(button);
  });
}

// Handle answer selection
function handleAnswer(e, selectedAnswer) {
  clearInterval(timer); // Stop the timer once an answer is selected
  const correctAnswer = selectedQuestions[questionIndex].correctAnswer;
  if (selectedAnswer == correctAnswer) {
    e.target.classList.add('correct');
    correct++;
    setTimeout(nextQuestion, 600);
  } else {
    answerContainer.childNodes.forEach((button) => {
      if (button.innerText == correctAnswer) {
        button.classList.add('correct');
      } else {
        e.target.classList.add('wrong');
      }
    });
    wrong++;
    setTimeout(nextQuestion, 1200);
  }
  correctScoreElement.textContent = correct;
  wrongScoreElement.textContent = wrong;
  // Wait a bit before moving to the next question
}

// Go to next question
function nextQuestion() {
  questionIndex++;
  handleQuestion();
}

// Show final results
function showResults() {
  clearInterval(timer); // Stop the timer
  document.querySelector('.score-container').style.display = 'none';
  timerElement.style.display = 'none';
  questionElement.textContent = `Quiz finished! You've got ${correct} / ${selectedQuestions.length}`;
  answerContainer.innerHTML =
    '<a onclick="restartQuiz()"><button class="no-before">OK</button></a>';
}

// Restart the quiz

function restartQuiz() {
  localStorage.setItem('takingQuizAgain', true);
  window.location.href = 'question_number.html';
}

handleQuestion();
