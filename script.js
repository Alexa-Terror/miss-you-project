const yesButton = document.getElementById("yesButton");
const noButton = document.getElementById("noButton");
const question = document.getElementById("question");
const fireworksContainer = document.getElementById("fireworks-container");
const heart = document.getElementById("heart");

function moveNoButton () {
    const x = Math.random() * (window.innerWidth - 100)
    const y = Math.random() * (window.innerHeight - 100)
    noButton.style.left = `${x}px`;
    noButton.style.top = `${y}px`;
}

noButton.addEventListener("mouseover", moveNoButton);
noButton.addEventListener("click",moveNoButton);

yesButton.addEventListener("click", () => {
    question.textContent = "Yes, I knew it!";
    yesButton.style.display = "none";
    noButton.style.display = "none";
    heart.style.display = "block";

    for (let i = 0; i < 80; i++){
        const firework = document.createElement("div");
        firework.classList.add("firework");
        firework.style.left = `${Math.random() * window.innerWidth}px`;
        firework.style.top = `${Math.random() * window.innerHeight}px`;
        firework.style.backgroundColor = Math.random() > 0.5 ? "blue" :
        fireworksContainer.appendChild(firework);

        setTimeout(() => {
            firework.remove();
        }, 1000);
    }
});
