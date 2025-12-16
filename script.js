num = ["3310", "3304", "3303", "3316"];
message = ["リクシ", "ナギ", "スカイ", "シロハ＝カロウ"];
Input = document.getElementById("input");
Button = document.getElementById("button");

function print() {
  Input.style.display = "none";
  Button.style.display = "none";
  if (num.includes(Input.value)) {
    //document.write(message[num.indexOf(Input.value)]);
    showMessage();
  }
  else {
    game();
  }
}

function showMessage() {
  document.getElementById("h3").textContent = message[num.indexOf(Input.value)];
}

function game() {
const quiz = [
      {
        question: "ある3年生部員が部活中にした意外なこととは？",
        choices: ["靴洗い", "ランニング", "料理", "かくれんぼ"],
        answer:"靴洗い"
      },
    ];

    let current = 0;
    let score = 0;

    const questionEl = document.getElementById("question");
    //const imageEl = document.getElementById("image-container");
    const choicesEl = document.getElementById("choices");
    const resultEl = document.getElementById("result");
    const scoreEl = document.getElementById("score");

    function showQuestion() {
      const q = quiz[current];
      questionEl.textContent = `Q${current + 1}. ${q.question}`;
      resultEl.textContent = "";
      scoreEl.textContent = "";

      //imageEl.innerHTML = q.image ? `<img src="${q.image}" alt="問題画像">` : "";

      choicesEl.innerHTML = "";
      q.choices.forEach(choice => {
        const btn = document.createElement("button");
        btn.textContent = choice;
        btn.onclick = () => checkAnswer(choice);
        choicesEl.appendChild(btn);
      });
    }
  
    function showPopup(isCorrect) {
      const popup = document.createElement("div");
      popup.className = `popup ${isCorrect ? "correct" : "wrong"}`;
      popup.textContent = isCorrect ? "⭕️" : "❌";
      document.body.appendChild(popup);
      setTimeout(() => popup.remove(), 1000);
    }

    function checkAnswer(choice) {
      const correct = quiz[current].answer;
      const isCorrect = choice === correct;
        showPopup(isCorrect);
      if (isCorrect) {
        score++;
      } 
      else {
        resultEl.textContent = `正解は「${correct}」`;
      }
      current++;
      if (current < quiz.length) {
        setTimeout(showQuestion, 1500);
      } else {
        setTimeout(showScore, 1500);
      }
    }

    function showScore() {
      questionEl.textContent = "";
      //imageEl.innerHTML = "";
      choicesEl.innerHTML = "";
      resultEl.textContent = "";
      scoreEl.textContent = `${score} / ${quiz.length} 問正解`;
    }
  
    showQuestion();
}
