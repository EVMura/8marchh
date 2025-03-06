document.getElementById("playMusic").addEventListener("click", function() {
    let music = document.getElementById("backgroundMusic");
    music.play().then(() => {
        this.style.display = "none";
    }).catch(error => {
        console.log("Ошибка воспроизведения: ", error);
    });
});

// Меняющиеся поздравления
const messages = [
    "С 8 Марта, дорогие девушки!",
    "Пусть каждый день будет счастливым!",
    "Ты прекрасна, не забывай об этом!",
    "Цветы, радость и любовь – для тебя!",
    "Сияй ярче солнца, ведь ты – чудо!",
    "Сегодня твой день – улыбайся!"
];

let messageIndex = 0;
setInterval(() => {
    messageIndex = (messageIndex + 1) % messages.length;
    document.getElementById("changing-text").textContent = messages[messageIndex];
}, 5000);

// Создание падающих сердечек
setInterval(() => {
    let heart = document.createElement("div");
    heart.classList.add("heart");
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = (Math.random() * 3 + 2) + "s";
    document.body.appendChild(heart);
    
    setTimeout(() => {
        heart.remove();
    }, 5000);
}, 500);

// Анимация букетов цветов
setInterval(() => {
    let bouquet = document.createElement("div");
    bouquet.classList.add("bouquet");
    bouquet.style.left = Math.random() * 100 + "vw";
    document.body.appendChild(bouquet);
    
    setTimeout(() => {
        bouquet.remove();
    }, 5000);
}, 1200);