const yesBtn = document.getElementById('yes'),
  noBtn = document.getElementById('no'); // Yes and no buttons on start
const cover = document.querySelector('.cover');
const takingQuizAgain = localStorage.getItem('takingQuizAgain');

if (takingQuizAgain == 'true') {
  document.getElementById('again').textContent = ' again';
  setTimeout(() => {
    localStorage.setItem('takingQuizAgain', false);
  }, 10);
} else {
  document.getElementById('again').textContent = '';
}

cover.style.zIndex = '10';
setTimeout(() => {
  cover.style.backgroundColor = 'transparent';
}, 1500);

setTimeout(() => {
  cover.style.zIndex = '-2';
}, 2100);

yesBtn.onclick = () => {
  // When we click on yes
  cover.style.zIndex = '10';

  setTimeout(() => {
    cover.style.backgroundColor = 'var(--body-color)';
  }, 200);

  setTimeout(() => {
    document.querySelector('.start').style.display = 'none';
    cover.style.backgroundColor = 'transparent';
  }, 2100);

  setTimeout(() => {
    cover.style.zIndex = '-2';
  }, 2700);
};

noBtn.onclick = () => {
  // When we click on no
  cover.style.zIndex = '10';
  document.getElementById('quizTakingMessage').textContent = 'Exiting page';
  document.getElementById('readyMsg').style.opacity = '0';

  let dotdotdot = setInterval(() => {
    document.getElementById('quizTakingMessage').textContent += '.';
  }, 600);

  setTimeout(() => {
    clearInterval(dotdotdot);
  }, 600 * 3);

  setTimeout(() => {
    cover.style.backgroundColor = 'var(--body-color)';
  }, 500 * 3 + 100);

  setTimeout(() => {
    window.location.href = 'description.html';
  }, 500 * 3 + 2050);
};

function startQuiz() {
  // When we click on 'Start Quiz' button
  let questionCount = document.getElementById('questionCount').value;
  if (questionCount < 3 || questionCount > 100 || isNaN(questionCount)) {
    alert('Please enter a number between 3 and 100.');
    return;
  }

  // Save to localStorage for access in another file
  localStorage.setItem('questionCount', questionCount);

  cover.style.zIndex = '10';

  setTimeout(() => {
    cover.style.backgroundColor = 'var(--body-color)';
  }, 200);

  setTimeout(() => {
    window.location.href = 'quiz.html';
  }, 2100);

  // Redirect to the next page, quiz.html
}

document.getElementById('questionCount').addEventListener('keydown', (e) => {
  // If we click on 'Enter' on our keyboard focusing on the input
  if (e.key == 'Enter') {
    startQuiz();
  }
});
