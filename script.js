// تشغيل المفرقعات وإظهار الرسالة عند الضغط على زر Yes
document.getElementById('yes-btn').addEventListener('click', function() {
    document.querySelector('.container').classList.add('hidden');
    document.getElementById('confetti-container').classList.remove('hidden');
    
    // إضافة مفرقعات (يمكن إضافة مكتبة confetti.js هنا إذا أردت)
});

// تحريك زر No عند كل ضغطة
document.getElementById('no-btn').addEventListener('mouseover', function() {
    const button = document.getElementById('no-btn');
    const x = Math.random() * (window.innerWidth - button.offsetWidth);
    const y = Math.random() * (window.innerHeight - button.offsetHeight);
    button.style.position = 'absolute';
    button.style.left = x + 'px';
    button.style.top = y + 'px';
});
