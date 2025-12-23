const goalEl = document.getElementById("goal");
    const attemptsEl = document.getElementById("attempts");
    const scoreEl = document.getElementById("score");
    const totalScoreEl = document.getElementById("totalScore");
    const ballsEl = document.getElementById("balls");
    const btn = document.getElementById("generateBtn");
    const gameBox = document.getElementById("game");

    let goal = Math.floor(Math.random() * 50) + 1;
    let attempts = 0;
    let totalScore = 0;
    let gameOver = false;

    goalEl.textContent = goal;
    attemptsEl.textContent = attempts;

    btn.addEventListener("click", () => {
        if (gameOver) return;

        attempts++;
        attemptsEl.textContent = attempts;

        let score = Math.floor(Math.random() * 5) + 1;
        scoreEl.textContent = score;

        if (totalScore + score <= goal) {
            totalScore += score;
            totalScoreEl.textContent = totalScore;
            updateBalls();
        }

        if (totalScore === goal) {
            gameOver = true;
            gameBox.classList.add("win");
            btn.disabled = true;
            btn.textContent = "🎉 You Win!";
        }

        if (attempts >= 15 && !gameOver) {
            gameOver = true;
            gameBox.classList.add("lose");
            btn.disabled = true;
            btn.textContent = "❌ You Lost";
        }
    });

    function updateBalls() {
        ballsEl.innerHTML = "";
        for (let i = 0; i < totalScore; i++) {
            const ball = document.createElement("div");
            ball.className = "ball";
            ballsEl.appendChild(ball);
        }
    }