let score = 0;
let currentQuestion = 1;

new cursoreffects.fairyDustCursor({ element: document.querySelector("#fairyDust") })

function checkAnswer(answer) {
  if (answer) {
    score += 5;
  }
  currentQuestion++;
  if (currentQuestion <= 20) {
    displayQuestion(currentQuestion);
  } else {
    displayResult(score);
  }
}

function displayQuestion(questionNum) {
  let questionText = "";
  switch (questionNum) {
    case 1:
      questionText = "Question 1: Do you like to wear feminine clothing?";
      break;
    case 2:
      questionText = "Question 2: Do you like to wear makeup?";
      break;
    case 3:
      questionText = "Question 3: Do you enjoy watching anime or reading manga?";
      break;
    case 4:
      questionText = "Question 4: Do you like to paint your nails?";
      break;
    case 5:
      questionText = "Question 5: Do you have a collection of stuffed animals or plushies?";
      break;
    case 6:
      questionText = "Question 6: Do you like to bake or cook?";
      break;
    case 7:
      questionText = "Question 7: Do you have a feminine fashion icon?";
      break;
    case 8:
      questionText = "Question 8: Do you use any of these when texting; :3, UwU, <3 or (:";
      break;
    case 9:
      questionText = "Question 9: Do you prefer to be called by a feminine or gender-neutral name?";
      break;
    case 10:
      questionText = "Question 10: Do you like to wear skirts or dresses?";
      break;
    case 11:
      questionText = "Question 11: Do you want to Wear Thigh Highs or do you wear Thigh Highs?";
      break;
    case 12:
      questionText = "Question 12: Do you like to accessorize with jewelery or hair accessories?";
      break;
    case 13:
      questionText = "Question 13: Are you Dominant or Submissive. Dominant meaning the one controlling in sex and Submissive meaning the one being controlled etc..";
      break;
    case 14:
      questionText = "Question 14: Do you like to experiment with different hairstyles?";
      break;
    case 15:
      questionText = "Question 15: Do you like to wear perfume or scented lotions?";
      break;
    case 16:
      questionText = "Question 16: Do you enjoy watching beauty or fashion videos on YouTube?";
      break;
    case 17:
      questionText = "Question 17: Do you like other femboys or hot/cute men?";
      break;
    case 18:
      questionText = "Question 18: Do you like to take selfies or photos of yourself?";
      break;
    case 19:
      questionText = "Question 19: Do you enjoy shopping for feminine clothing or accessories?";
      break;
    case 20:
      questionText = "Question 20: Do you feel comfortable expressing your femininity in public?";
      break;
  }
  document.querySelector(".question").textContent = questionText;
  document.querySelector(".score").textContent = "Score: " + score;
}

function displayResult(score) {
  let resultText = "You are " + (score / 100 * 100) + "% a femboy (:";
  document.querySelector(".result").textContent = resultText;
  document.querySelector(".question").style.display = "none";
  document.querySelector(".yes").style.display = "none";
  document.querySelector(".no").style.display = "none";
}
