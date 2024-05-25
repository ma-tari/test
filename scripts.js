document.addEventListener('DOMContentLoaded', function() {
    // 카카오톡 버튼 클릭 이벤트 처리
    const kakaoButton = document.querySelector('.button-kakao');
    kakaoButton.addEventListener('click', function() {
        window.location.href = 'kakao://Pmangmoney';
    });

    // 내비게이션 링크 클릭 이벤트 처리
    const links = document.querySelectorAll('nav ul li a');
    for (const link of links) {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            targetElement.scrollIntoView({ behavior: 'smooth' });
        });
    }
});
