// تحريك زر No عند مرور الماوس
const noBtn = document.getElementById('noBtn');
noBtn.addEventListener('mouseover', moveNoBtn);

function moveNoBtn() {
    const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
    const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);
    noBtn.style.position = 'absolute';
    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;
}

// التعامل مع الضغط على زر Yes
const yesBtn = document.getElementById('yesBtn');
yesBtn.addEventListener('click', () => {
    displayMessage();
    showVideo();
    triggerConfetti();
});

// عرض الرسالة "YUPYYYY, I LOVE YOU ASSIA!"
function displayMessage() {
    const message = document.getElementById('message');
    message.innerText = "YUPYYYY, I LOVE YOU ASSIA!";
}

// إظهار الفيديو عند الضغط على Yes
function showVideo() {
    const video = document.getElementById('video');
    video.style.display = 'block';
}

// تفعيل المفرقعات
function triggerConfetti() {
    const confettiDiv = document.createElement('div');
    confettiDiv.classList.add('confetti');
    document.body.appendChild(confettiDiv);

    // إعدادات المفرقعات باستخدام مكتبة خارجية مثل confetti.js
    confetti({
        particleCount: 150,
        spread: 100,
        origin: { y: 0.6 }
    });

    // إزالة المفرقعات بعد فترة
    setTimeout(() => {
        confettiDiv.remove();
    }, 3000);
}

// يمكنك تحميل مكتبة confetti.js من هنا: https://cdn.jsdelivr.net/npm/canvas-confetti@1.5.1/dist/confetti.min.js
