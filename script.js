const questionList = [
  {
    question: "What is the capital of Pakistan?",
    choices: ["Karachi", "Islamabad", "Lahore", "Peshawar"],
    answer: "Islamabad"
  },
  {
    question: "Which is the largest province of Pakistan by area?",
    choices: ["Punjab", "Sindh", "Balochistan", "Khyber Pakhtunkhwa"],
    answer: "Balochistan"
  },
  {
    question: "What is the national language of Pakistan?",
    choices: ["Punjabi", "Urdu", "Sindhi", "Pashto"],
    answer: "Urdu"
  },
  {
    question: "Which sea borders Pakistan to the south?",
    choices: ["Red Sea", "Arabian Sea", "Bay of Bengal", "Caspian Sea"],
    answer: "Arabian Sea"
  },
  {
    question: "Which city is known as the 'City of Lights' in Pakistan?",
    choices: ["Karachi", "Lahore", "Islamabad", "Quetta"],
    answer: "Karachi"
  },
  {
    question: "What is the highest peak in Pakistan?",
    choices: ["K2", "Nanga Parbat", "Broad Peak", "Gasherbrum I"],
    answer: "K2"
  },
  {
    question: "Which province is home to the Gwadar Port?",
    choices: ["Sindh", "Punjab", "Balochistan", "Khyber Pakhtunkhwa"],
    answer: "Balochistan"
  },
  {
    question: "Which is the largest desert in Pakistan?",
    choices: ["Thar Desert", "Cholistan Desert", "Kharan Desert", "Karakum Desert"],
    answer: "Thar Desert"
  },
  {
    question: "What is the provincial capital of Balochistan?",
    choices: ["Quetta", "Gwadar", "Turbat", "Khuzdar"],
    answer: "Quetta"
  },
  {
    question: "Which famous pass connects Pakistan with Afghanistan through Balochistan?",
    choices: ["Khyber Pass", "Khojak Pass", "Tochi Pass", "Bolan Pass"],
    answer: "Khojak Pass"
  }
];


const Ques = document.getElementById("questions");
const choiceList = document.getElementById("choice-container");
const btn = document.getElementById("nextBtn");

let questionIndex = 0;
let score = 0;


function startQuiz() {
  if (questionIndex < questionList.length) {
    Ques.innerHTML = questionList[questionIndex].question;

    choiceList.innerHTML = "";
    questionList[questionIndex].choices.forEach(choiceText => {
      let choice = document.createElement("li");
      choice.innerHTML = choiceText;
      choiceList.appendChild(choice);
      choice.addEventListener("click", () => {
        if (choiceText === questionList[questionIndex].answer) {
          score++;
          alert("Correct Answer !")

        }
        else {
          alert("Wrong Answer ! The correct answer is " + questionList[questionIndex].answer)
        }


        questionIndex++;
        startQuiz();
      });

    });
  }
  else {
    Ques.innerHTML = "Quiz Completed !";
    choiceList.innerHTML = `Your score is ${score} out of ${questionList.length}`
    btn.style.display = "none";
  }
}
btn.addEventListener("click", () => {
  startQuiz();
});
startQuiz();
