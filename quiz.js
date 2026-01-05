
const quizData = [
    {
        question: "मेवाड़-केसरी किसे कहा गया है?",
        options: ["अकबर", "महाराणा प्रताप", "शिवाजी", "भीम"],
        answer: 1
    },
    {
        question: "हल्दीघाटी का युद्ध किस रस से जुड़ा है?",
        options: ["श्रृंगार", "करुण", "वीर", "हास्य"],
        answer: 2
    },
    {
        question: "‘मानो प्रत्यक्ष कपाली था’ में कौन-सा अलंकार है?",
        options: ["रूपक", "उपमा", "उत्प्रेक्षा", "अनुप्रास"],
        answer: 2
    }
];

let currentQuestion = 0;
let score = 0;

const questionEl = document.getElementById("question");
const optionBtns = document.querySelectorAll(".option");
const resultEl = document.getElementById("result");

loadQuestion();

function loadQuestion() {
    resultEl.innerText = "";
    optionBtns.forEach(btn => {
        btn.classList.remove("correct", "wrong");
        btn.disabled = false;
    });

    const q = quizData[currentQuestion];
    questionEl.innerText = q.question;

    optionBtns.forEach((btn, index) => {
        btn.innerText = q.options[index];
        btn.style.display = "block";
    });
}

function checkAnswer(selected) {
    const correct = quizData[currentQuestion].answer;

    if (selected === correct) {
        optionBtns[selected].classList.add("correct");
        resultEl.innerText = "✅ सही उत्तर";
        score++;
    } else {
        optionBtns[selected].classList.add("wrong");
        optionBtns[correct].classList.add("correct");
        resultEl.innerText = "❌ गलत उत्तर";
    }

    optionBtns.forEach(btn => btn.disabled = true);

    setTimeout(() => {
        currentQuestion++;
        if (currentQuestion < quizData.length) {
            loadQuestion();
        } else {
            showFinalResult();
        }
    }, 1200);
}

function showFinalResult() {
    document.getElementById("options").style.display = "none";

    let message = "";

    if (score === 3) {
        message = "🌟 Excellent!";
    } else if (score === 2) {
        message = "👏 Well Done!";
    } else if (score === 1) {
        message = "🙂 Not Bad";
    } else {
        message = "💪 Better Luck Next Time";
    }

    questionEl.innerText = "Quiz Complete!";
    resultEl.innerText = `आपका स्कोर: ${score}/3 — ${message}`;

}
const quizData2 = [
    {
        question: "‘पवि’ शब्द का अर्थ क्या है?",
        options: ["भाला", "वज्र", "तलवार", "ढाल"],
        answer: 1
    },
    {
        question: "‘शोणित’ शब्द का अर्थ क्या है?",
        options: ["पानी", "घाव", "रक्त", "धरती"],
        answer: 2
    },
    {
        question: "‘मानो उस पर पवि छूट पड़ा’ में कौन-सा अलंकार है?",
        options: ["अनुप्रास", "रूपक", "उपमा", "उत्प्रेक्षा"],
        answer: 3
    }
];

let currentQuestion2 = 0;
let score2 = 0;

const questionEl2 = document.getElementById("question2");
const optionBtns2 = document.querySelectorAll("#options2 .option");
const resultEl2 = document.getElementById("result2");

loadQuestion2();

function loadQuestion2() {
    resultEl2.innerText = "";
    optionBtns2.forEach(btn => {
        btn.classList.remove("correct", "wrong");
        btn.disabled = false;
        btn.style.display = "block";
    });

    const q = quizData2[currentQuestion2];
    questionEl2.innerText = q.question;

    optionBtns2.forEach((btn, index) => {
        btn.innerText = q.options[index];
    });
}

function checkAnswer2(selected) {
    const correct = quizData2[currentQuestion2].answer;

    if (selected === correct) {
        optionBtns2[selected].classList.add("correct");
        resultEl2.innerText = "✅ सही उत्तर";
        score2++;
    } else {
        optionBtns2[selected].classList.add("wrong");
        optionBtns2[correct].classList.add("correct");
        resultEl2.innerText = "❌ गलत उत्तर";
    }

    optionBtns2.forEach(btn => btn.disabled = true);

    setTimeout(() => {
        currentQuestion2++;
        if (currentQuestion2 < quizData2.length) {
            loadQuestion2();
        } else {
            showFinalResult2();
        }
    }, 1200);
}

function showFinalResult2() {
    document.getElementById("options2").style.display = "none";

    let message = "";

    if (score2 === 3) {
        message = "🌟 Excellent!";
    } else if (score2 === 2) {
        message = "👏 Well Done!";
    } else if (score2 === 1) {
        message = "🙂 Not Bad";
    } else {
        message = "💪 Better Luck Next Time";
    }

    questionEl2.innerText = "Quiz Complete!";
    resultEl2.innerText = `आपका स्कोर: ${score2}/3 — ${message}`;
}
const quizData3 = [
    {
        question: "‘अरि’ शब्द का सही अर्थ क्या है?",
        options: ["मित्र", "राजा", "दुश्मन", "सेनापति"],
        answer: 2
    },
    {
        question: "‘नरमुण्डों’ शब्द का क्या अर्थ है?",
        options: [
            "मनुष्यों के शरीर",
            "मनुष्यों के कटे हुए सिर",
            "घोड़ों के सिर",
            "हाथियों के सिर"
        ],
        answer: 1
    },
    {
        question: "‘लड़ते-लड़ते’ में कौन-सा अलंकार है?",
        options: ["अनुप्रास", "रूपक", "पुनरुक्तिप्रकाश", "उत्प्रेक्षा"],
        answer: 2
    }
];

let currentQuestion3 = 0;
let score3 = 0;

const questionEl3 = document.getElementById("question3");
const optionBtns3 = document.querySelectorAll("#options3 .option");
const resultEl3 = document.getElementById("result3");

loadQuestion3();

function loadQuestion3() {
    resultEl3.innerText = "";
    optionBtns3.forEach(btn => {
        btn.classList.remove("correct", "wrong");
        btn.disabled = false;
        btn.style.display = "block";
    });

    const q = quizData3[currentQuestion3];
    questionEl3.innerText = q.question;

    optionBtns3.forEach((btn, index) => {
        btn.innerText = q.options[index];
    });
}

function checkAnswer3(selected) {
    const correct = quizData3[currentQuestion3].answer;

    if (selected === correct) {
        optionBtns3[selected].classList.add("correct");
        resultEl3.innerText = "✅ सही उत्तर";
        score3++;
    } else {
        optionBtns3[selected].classList.add("wrong");
        optionBtns3[correct].classList.add("correct");
        resultEl3.innerText = "❌ गलत उत्तर";
    }

    optionBtns3.forEach(btn => btn.disabled = true);

    setTimeout(() => {
        currentQuestion3++;
        if (currentQuestion3 < quizData3.length) {
            loadQuestion3();
        } else {
            showFinalResult3();
        }
    }, 1200);
}

function showFinalResult3() {
    document.getElementById("options3").style.display = "none";

    let message = "";

    if (score3 === 3) {
        message = "🌟 Excellent!";
    } else if (score3 === 2) {
        message = "👏 Well Done!";
    } else if (score3 === 1) {
        message = "🙂 Not Bad";
    } else {
        message = "💪 Better Luck Next Time";
    }

    questionEl3.innerText = "Quiz Complete!";
    resultEl3.innerText = `आपका स्कोर: ${score3}/3 — ${message}`;
}
const quizData4 = [
    {
        question: "‘चेतक’ किसका नाम है?",
        options: ["राणा प्रताप की तलवार", "राणा प्रताप का घोड़ा", "सेना-नायक", "हाथी"],
        answer: 1
    },
    {
        question: "महाराणा प्रताप ने किस उद्देश्य से युद्ध किया?",
        options: ["राज्य विस्तार", "धन प्राप्ति", "मान-सम्मान की रक्षा", "प्रतिशोध"],
        answer: 2
    },
    {
        question: "‘चढ़ चेतक’ में कौन-सा अलंकार है?",
        options: ["पुनरुक्तिप्रकाश", "रूपक", "अनुप्रास", "उत्प्रेक्षा"],
        answer: 2
    }
];

let currentQuestion4 = 0;
let score4 = 0;

const questionEl4 = document.getElementById("question4");
const optionBtns4 = document.querySelectorAll("#options4 .option");
const resultEl4 = document.getElementById("result4");

loadQuestion4();

function loadQuestion4() {
    resultEl4.innerText = "";
    optionBtns4.forEach(btn => {
        btn.classList.remove("correct", "wrong");
        btn.disabled = false;
        btn.style.display = "block";
    });

    const q = quizData4[currentQuestion4];
    questionEl4.innerText = q.question;

    optionBtns4.forEach((btn, index) => {
        btn.innerText = q.options[index];
    });
}

function checkAnswer4(selected) {
    const correct = quizData4[currentQuestion4].answer;

    if (selected === correct) {
        optionBtns4[selected].classList.add("correct");
        resultEl4.innerText = "✅ सही उत्तर";
        score4++;
    } else {
        optionBtns4[selected].classList.add("wrong");
        optionBtns4[correct].classList.add("correct");
        resultEl4.innerText = "❌ गलत उत्तर";
    }

    optionBtns4.forEach(btn => btn.disabled = true);

    setTimeout(() => {
        currentQuestion4++;
        if (currentQuestion4 < quizData4.length) {
            loadQuestion4();
        } else {
            showFinalResult4();
        }
    }, 1200);
}

function showFinalResult4() {
    document.getElementById("options4").style.display = "none";

    let message = "";

    if (score4 === 3) {
        message = "🌟 Excellent!";
    } else if (score4 === 2) {
        message = "👏 Well Done!";
    } else if (score4 === 1) {
        message = "🙂 Not Bad";
    } else {
        message = "💪 Better Luck Next Time";
    }

    questionEl4.innerText = "Quiz Complete!";
    resultEl4.innerText = `आपका स्कोर: ${score4}/3 — ${message}`;
}
const quizData5 = [
    {
        question: "‘रण कौशल’ शब्द का क्या अर्थ है?",
        options: ["वीरता", "रणनीति", "युद्ध कला", "शक्ति"],
        answer: 2
    },
    {
        question: "‘रण चण्डी’ से कवि का क्या तात्पर्य है?",
        options: ["काली", "दुर्गा", "लक्ष्मी", "सरस्वती"],
        answer: 1
    },
    {
        question: "‘राणा रण’ में कौन-सा अलंकार है?",
        options: ["उत्प्रेक्षा", "रूपक", "अनुप्रास", "पुनरुक्तिप्रकाश"],
        answer: 2
    }
];

let currentQuestion5 = 0;
let score5 = 0;

const questionEl5 = document.getElementById("question5");
const optionBtns5 = document.querySelectorAll("#options5 .option");
const resultEl5 = document.getElementById("result5");

loadQuestion5();

function loadQuestion5() {
    resultEl5.innerText = "";
    optionBtns5.forEach(btn => {
        btn.classList.remove("correct", "wrong");
        btn.disabled = false;
        btn.style.display = "block";
    });

    const q = quizData5[currentQuestion5];
    questionEl5.innerText = q.question;

    optionBtns5.forEach((btn, index) => {
        btn.innerText = q.options[index];
    });
}

function checkAnswer5(selected) {
    const correct = quizData5[currentQuestion5].answer;

    if (selected === correct) {
        optionBtns5[selected].classList.add("correct");
        resultEl5.innerText = "✅ सही उत्तर";
        score5++;
    } else {
        optionBtns5[selected].classList.add("wrong");
        optionBtns5[correct].classList.add("correct");
        resultEl5.innerText = "❌ गलत उत्तर";
    }

    optionBtns5.forEach(btn => btn.disabled = true);

    setTimeout(() => {
        currentQuestion5++;
        if (currentQuestion5 < quizData5.length) {
            loadQuestion5();
        } else {
            showFinalResult5();
        }
    }, 1200);
}

function showFinalResult5() {
    document.getElementById("options5").style.display = "none";

    let message = "";

    if (score5 === 3) {
        message = "🌟 Excellent!";
    } else if (score5 === 2) {
        message = "👏 Well Done!";
    } else if (score5 === 1) {
        message = "🙂 Not Bad";
    } else {
        message = "💪 Better Luck Next Time";
    }

    questionEl5.innerText = "Quiz Complete!";
    resultEl5.innerText = `आपका स्कोर: ${score5}/3 — ${message}`;
}
