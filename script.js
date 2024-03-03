const bars = document.querySelector(".bars");

function barsTrue() {
    const ul = document.querySelector(".bars--all");
    ul.style.postion = "fixed";
    ul.style.right = "0%";
    ul.style.transition = "0.3s ease";
}

function barsFalse() {
    const ul = document.querySelector(".bars--all");
    ul.style.postion = "fixed";
    ul.style.right = "-100%";
    ul.style.transition = "0.3s ease";
}

console.log("Зачем тебе мой код красть???");
console.log("Могу помочь с разработкой веб-сайта или дизайна пиши мне в инсту: just.zohidovich");
