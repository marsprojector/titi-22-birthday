// Love Letter Generator
function generateLoveLetter() {
    const loveLetters = [
        "You are my sunshine on a rainy day",
        "Every moment with you is a moment I cherish",
        "I am so grateful to have you in my life",
        "You are everything to me",
        "My love for you grows stronger every day",
        "I love you more than anything",
        "I want us to be together, forever",
        "You make my life complete",
        "I can't imagine life without you",
        "Our love is the best thing that ever happened to me",
        "You make my heart skip a beat",
        "Being with you feels like home",
        "I cherish every moment we spend together",
        "You are my dream come true",
        "I fall in love with you more every day",
        "You are my everything and more",
        "I am lost in your love",
        "You bring joy and happiness to my life",
        "I will always be by your side",
        "You are the love of my life"
    ];

    const randomIndex = Math.floor(Math.random() * loveLetters.length);
    document.getElementById("loveLetterText").innerText = loveLetters[randomIndex];
}

// Quiz Logic
function checkQuiz() {
    const quizForm = document.getElementById('quizForm');
    let score = 0;

    if (quizForm.q1.value === 'b') score++;
    if (quizForm.q2.value === 'a') score++;

    const result = document.getElementById('quizResult');
    if (score === 2) {
        result.innerHTML = "I’m so happy! I love you, I adore you!";
    } else {
        result.innerHTML = "I'm sad, please try again! :'(";
    }
}