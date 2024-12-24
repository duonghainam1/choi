function createSnowflake() {
    const snowflake = document.createElement("div");
    snowflake.classList.add("snowflake");
    snowflake.innerHTML = "❄️";

    snowflake.style.left = Math.random() * window.innerWidth + "px";
    snowflake.style.animationDuration = Math.random() * 3 + 2 + "s";
    snowflake.style.opacity = Math.random();
    snowflake.style.fontSize = Math.random() * 10 + 10 + "px";

    document.body.appendChild(snowflake)

    setTimeout(() => {
        snowflake.remove()
    }, 10000)
}
setInterval(createSnowflake, 100)
const btn = document.querySelector('.btn');
const giftBox = document.getElementById('giftBox');
const christmasLetter = document.getElementById('christmasLetter');
const closeBtn = document.getElementById('closeBtn');

btn.addEventListener('click', () => {
    giftBox.style.display = 'block'; // Hiển thị hộp quà
    giftBox.classList.add('show'); // Thêm lớp 'show' để kích hoạt hiệu ứng xuất hiện
});

giftBox.addEventListener('click', () => {
    giftBox.classList.add('open-gift');
    setTimeout(() => {
        christmasLetter.style.display = 'block';
        setTimeout(() => {
            christmasLetter.classList.add('open');
        }, 10);
    }, 1000);
});

// Đóng lá thư
closeBtn.addEventListener('click', () => {
    christmasLetter.classList.remove('open');
    setTimeout(() => {
        christmasLetter.style.display = 'none';
        giftBox.style.display = 'none';
    }, 2000);
});



