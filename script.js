function checkQuiz() {
    let score = 0;

    let q1 = document.querySelector('input[name="q1"]:checked');
    if (q1 && q1.value === "correct") {
        score++;
    }

    document.getElementById("result").innerText = "Your Score: " + score;
}
