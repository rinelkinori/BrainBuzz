/* =========================================================
   BrainBuzz - script.js
   Quiz game logic, timer, scoring, LocalStorage, form handling
   ========================================================= */

const TIME_PER_QUESTION = 20; // seconds
const STORAGE_KEY = "brainbuzz_best_scores";

/* ---------- LocalStorage helpers ---------- */
function loadScores() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
  } catch (e) {
    return {};
  }
}

function saveScores(scores) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(scores));
  } catch (e) {
    /* storage unavailable: the game still works without saving */
  }
}

/* ---------- Game state ---------- */
let currentTopic = null;
let questionList = [];
let currentIndex = 0;
let score = 0;
let timeLeft = TIME_PER_QUESTION;
let timerId = null;
let answered = false;

/* ---------- Small utilities ---------- */
function $(id) {
  return document.getElementById(id);
}

function shuffle(array) {
  const copy = array.slice();
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function showScreen(name) {
  document.querySelectorAll(".screen").forEach(function (s) {
    s.classList.remove("active");
  });
  $("screen-" + name).classList.add("active");
}

/* ---------- Home screen ---------- */
function renderTopicCards() {
  const grid = $("topic-grid");
  if (!grid) return;
  const scores = loadScores();
  grid.innerHTML = "";

  TOPICS.forEach(function (topic) {
    const best = scores[topic.id];
    const card = document.createElement("article");
    const col = document.createElement("div");
    col.className = "col-md-6 col-lg-4";
    card.className = "card h-100";

    const icon = document.createElement("img");
    icon.className = "card-icon";
    icon.src = topic.icon;
    icon.alt = "";

    const title = document.createElement("h3");
    title.textContent = topic.title;

    const desc = document.createElement("p");
    desc.textContent = topic.description;

    const bestBox = document.createElement("div");
    bestBox.className = "best-score";
    bestBox.textContent =
      "Best score: " + (best === undefined ? "Not played yet" : best + " / " + topic.questions.length);

    const btn = document.createElement("button");
    btn.className = "btn btn-secondary";
    btn.type = "button";
    btn.textContent = "Start Quiz";
    btn.addEventListener("click", function () {
      startQuiz(topic.id);
    });

    card.append(icon, title, desc, bestBox, btn);
    col.appendChild(card);
    grid.appendChild(col);
  });
}

function clearScores() {
  if (confirm("Clear all saved best scores?")) {
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch (e) { /* ignore */ }
    renderTopicCards();
  }
}

/* ---------- Quiz flow ---------- */
function startQuiz(topicId) {
  currentTopic = TOPICS.find(function (t) {
    return t.id === topicId;
  });
  questionList = shuffle(currentTopic.questions);
  currentIndex = 0;
  score = 0;
  $("quiz-topic-name").textContent = currentTopic.title;
  showScreen("quiz");
  window.scrollTo({ top: 0, behavior: "smooth" });
  showQuestion();
}

function showQuestion() {
  answered = false;
  const item = questionList[currentIndex];
  const total = questionList.length;

  $("question-number").textContent = "Question " + (currentIndex + 1) + " of " + total;
  $("score-display").textContent = "Score: " + score;
  $("progress-bar").style.width = (currentIndex / total) * 100 + "%";
  $("question-text").textContent = item.q;

  const feedback = $("feedback");
  feedback.className = "feedback";
  feedback.textContent = "";
  $("next-btn").style.visibility = "hidden";

  /* shuffle the options but remember which one is correct */
  const indexed = item.options.map(function (text, i) {
    return { text: text, correct: i === item.answer };
  });
  const box = $("options");
  box.innerHTML = "";
  shuffle(indexed).forEach(function (opt) {
    const b = document.createElement("button");
    b.type = "button";
    b.className = "option-btn";
    b.textContent = opt.text;
    b.dataset.correct = opt.correct ? "true" : "false";
    b.addEventListener("click", function () {
      handleAnswer(b);
    });
    box.appendChild(b);
  });

  startTimer();
}

function startTimer() {
  clearInterval(timerId);
  timeLeft = TIME_PER_QUESTION;
  updateTimerDisplay();
  timerId = setInterval(function () {
    timeLeft--;
    updateTimerDisplay();
    if (timeLeft <= 0) {
      clearInterval(timerId);
      handleAnswer(null); // time ran out
    }
  }, 1000);
}

function updateTimerDisplay() {
  const badge = $("timer-display");
  const bar = $("timer-bar");
  badge.textContent = "Time: " + timeLeft + "s";
  bar.style.width = (timeLeft / TIME_PER_QUESTION) * 100 + "%";
  const danger = timeLeft <= 5;
  badge.classList.toggle("danger", danger);
  bar.classList.toggle("danger", danger);
}

function handleAnswer(chosenButton) {
  if (answered) return;
  answered = true;
  clearInterval(timerId);

  const item = questionList[currentIndex];
  const buttons = document.querySelectorAll(".option-btn");
  buttons.forEach(function (b) {
    b.disabled = true;
    if (b.dataset.correct === "true") b.classList.add("correct");
  });

  const feedback = $("feedback");
  if (chosenButton && chosenButton.dataset.correct === "true") {
    score++;
    feedback.className = "feedback show good";
    feedback.textContent = "Correct! " + item.explain;
  } else {
    if (chosenButton) chosenButton.classList.add("wrong");
    feedback.className = "feedback show bad";
    feedback.textContent =
      (chosenButton ? "Not quite. " : "Time's up! ") + item.explain;
  }

  $("score-display").textContent = "Score: " + score;
  const isLast = currentIndex === questionList.length - 1;
  $("next-btn").textContent = isLast ? "See Results" : "Next Question";
  $("next-btn").style.visibility = "visible";
}

function nextQuestion() {
  currentIndex++;
  if (currentIndex >= questionList.length) {
    showResults();
  } else {
    showQuestion();
  }
}

function showResults() {
  clearInterval(timerId);
  const total = questionList.length;
  const scores = loadScores();
  const previousBest = scores[currentTopic.id];
  const isNewBest = previousBest === undefined || score > previousBest;
  if (isNewBest) {
    scores[currentTopic.id] = score;
    saveScores(scores);
  }
  const best = isNewBest ? score : previousBest;

  $("final-score").textContent = score + " / " + total;
  $("best-score-display").textContent = best + " / " + total;
  $("result-topic").textContent = currentTopic.title;

  let message;
  const ratio = score / total;
  if (ratio === 1) message = "Perfect score! You really know your HTML!";
  else if (ratio >= 0.7) message = "Great job! Keep it up.";
  else if (ratio >= 0.4) message = "Good effort. A little more review and you'll get there.";
  else message = "Keep practicing. Review the lesson and try again!";
  if (isNewBest && score > 0) message += " New best score!";
  $("result-message").textContent = message;

  showScreen("results");
}

function goHome() {
  clearInterval(timerId);
  renderTopicCards();
  showScreen("home");
}

/* ---------- Contact form ---------- */
function setupContactForm() {
  const form = $("feedback-form");
  if (!form) return;
  form.addEventListener("submit", function (event) {
    event.preventDefault();
    const name = $("fullname").value.trim();
    $("form-note").textContent =
      "Thank you, " + (name || "friend") + "! Your feedback has been received (demo only, nothing is sent).";
    form.reset();
  });
}

/* ---------- Page setup ---------- */
document.addEventListener("DOMContentLoaded", function () {
  if ($("topic-grid")) {
    renderTopicCards();
    $("clear-scores-btn").addEventListener("click", clearScores);
    $("next-btn").addEventListener("click", nextQuestion);
    $("quit-btn").addEventListener("click", goHome);
    $("retry-btn").addEventListener("click", function () {
      startQuiz(currentTopic.id);
    });
    $("home-btn").addEventListener("click", goHome);
  }
  setupContactForm();
});
