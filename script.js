const restartBtn = document.querySelector(".restart-btn");
const darkLightBtn = document.querySelector(".dark-light-mode");
const startBtn = document.querySelector(".start");
const questions = document.querySelectorAll("input");
const quizHeader = document.querySelectorAll("h1");
const header = document.querySelectorAll("h2");
const labels = document.querySelectorAll("label");
const legends = document.querySelectorAll("legend");
const quiz = document.querySelector(".game");
const displayQuiz = document.querySelector(".display-quiz");
const results = document.querySelector(".result");

let switchDarkLight = 0;


darkLightBtn.addEventListener("click", () => {
  if (switchDarkLight === 0) {
    darkLightBtn.innerText = "Switch to light mode";
    document.body.style.backgroundColor = "rgb(12, 31, 12)";
    labels.forEach((e) => {
      e.style.color = "white";
    });
    legends.forEach((e) => {
      e.style.color = "white";
    });
    quizHeader.forEach((e) => {
      e.style.color = "white";
    });
    header.forEach((e) => {
      e.style.color = "white";
    });
    startBtn.style.backgroundColor = "black";
    darkLightBtn.style.backgroundColor = "black";
    startBtn.style.color = "white";
    darkLightBtn.style.color = "white";
    restartBtn.style.backgroundColor = "black";
    restartBtn.style.color = "white";
    switchDarkLight = 1;
  } else if (switchDarkLight === 1) {
    darkLightBtn.innerText = "Switch to dark mode";
    document.body.style.backgroundColor = "lightgrey";
    labels.forEach((e) => {
      e.style.color = "black";
    });
    legends.forEach((e) => {
      e.style.color = "black";
    });
    quizHeader.forEach((e) => {
      e.style.color = "black";
    });
    header.forEach((e) => {
      e.style.color = "black";
    });
    startBtn.style.backgroundColor = "white";
    darkLightBtn.style.backgroundColor = "white";
    startBtn.style.color = "black";
    darkLightBtn.style.color = "black";
    restartBtn.style.backgroundColor = "white";
    restartBtn.style.color = "black";
    switchDarkLight = 0;
  }
});

startBtn.addEventListener("click", () => {
  displayQuiz.style = "display:none";
  quiz.style = "display: block;";
});

restartBtn.addEventListener("click", () => {
  questions.forEach((e) => {
    if (e.checked) {
      e.checked = false;
    }
  });
  quiz.style = "display: none;";
  displayQuiz.style = "display: flex;";


  results1.innerHTML = "";
  results2.innerHTML = "";
  results3.innerHTML = "";
  results4.innerHTML = "";
  results5.innerHTML = "";
  results6.innerHTML = "";
  results7.innerHTML = "";
  results8.innerHTML = "";
  results9.innerHTML = "";
  results10.innerHTML = "";
});


//Question 1
let answers1 = document.querySelectorAll("[name='answer1']");
let results1 = document.querySelector(".result1");
answers1.forEach((e) => {
  e.addEventListener("click", () => {
    if (e.value === "true") {
      
      results1.innerHTML = "Correct answer!";
      results1.style.color = "green";
    } else {
      results1.innerHTML = "Wrong answer!";
      results1.style.color = "red";
    }
  });
});

//Question 2
let answers2 = document.querySelectorAll("[name='answer2']");
let results2 = document.querySelector(".result2");
answers2.forEach((e) => {
  e.addEventListener("click", () => {
    if (e.value === "true") {
      results2.innerHTML = "Correct answer!";
      results2.style.color = "green";
    } else {
      results2.innerHTML = "Wrong answer!";
      results2.style.color = "red";
    }
  });
});

//Question 3
let answers3 = document.querySelectorAll("[name='answer3']");
let results3 = document.querySelector(".result3");
answers3.forEach((e) => {
  e.addEventListener("click", () => {
    if (e.value === "true") {
      results3.innerHTML = "Correct answer!";
      results3.style.color = "green";
    } else {
      results3.innerHTML = "Wrong answer!";
      results3.style.color = "red";
    }
  });
});

//Question 4
let answers4 = document.querySelectorAll("[name='answer4']");
let results4 = document.querySelector(".result4");
answers4.forEach((e) => {
  e.addEventListener("click", () => {
    if (e.value === "true") {
      results4.innerHTML = "Correct answer!";
      results4.style.color = "green";
    } else {
      results4.innerHTML = "Wrong answer!";
      results4.style.color = "red";
    }
  });
});

//Question 5
let answers5 = document.querySelectorAll("[name='answer5']");
let results5 = document.querySelector(".result5");
answers5.forEach((e) => {
  e.addEventListener("click", () => {
    if (e.value === "true") {
      results5.innerHTML = "Correct answer!";
      results5.style.color = "green";
    } else {
      results5.innerHTML = "Wrong answer!";
      results5.style.color = "red";
    }
  });
});
//Question 6
let answers6 = document.querySelectorAll("[name='answer6']");
let results6 = document.querySelector(".result6");
answers6.forEach((e) => {
  e.addEventListener("click", () => {
    if (e.value === "true") {
      results6.innerHTML = "Correct answer!";
      results6.style.color = "green";
    } else {
      results6.innerHTML = "Wrong answer!";
      results6.style.color = "red";
    }
  });
});

//Question 7
let answers7 = document.querySelectorAll("[name='answer7']");
let results7 = document.querySelector(".result7");
answers7.forEach((e) => {
  e.addEventListener("click", () => {
    if (e.value === "true") {
      results7.innerHTML = "Correct answer!";
      results7.style.color = "green";
    } else {
      results7.innerHTML = "Wrong answer!";
      results7.style.color = "red";
    }
  });
});

//Question 8
let answers8 = document.querySelectorAll("[name='answer8']");
let results8 = document.querySelector(".result8");
answers8.forEach((e) => {
  e.addEventListener("click", () => {
    if (e.value === "true") {
      results8.innerHTML = "Correct answer!";
      results8.style.color = "green";
    } else {
      results8.innerHTML = "Wrong answer!";
      results8.style.color = "red";
    }
  });
});

//Question 9
let answers9 = document.querySelectorAll("[name='answer9']");
let results9 = document.querySelector(".result9");
answers9.forEach((e) => {
  e.addEventListener("click", () => {
    if (e.value === "true") {
      results9.innerHTML = "Correct answer!";
      results9.style.color = "green";
    } else {
      results9.innerHTML = "Wrong answer!";
      results9.style.color = "red";
    }
  });
});

//Question 10
let answers10 = document.querySelectorAll("[name='answer10']");
let results10 = document.querySelector(".result10");
answers10.forEach((e) => {
  e.addEventListener("click", () => {
    if (e.value === "true") {
      results10.innerHTML = "Correct answer!";
      results10.style.color = "green";
    } else {
      results10.innerHTML = "Wrong answer!";
      results10.style.color = "red";
    }
  });
});
