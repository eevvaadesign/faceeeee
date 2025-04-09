window.onload = () => {
    const bg1 = document.getElementById('bg1');
    const bg2 = document.getElementById('bg2');
    const talk1 = document.getElementById('talk1');
    const talk2 = document.getElementById('talk2');
    const talk3 = document.getElementById('talk3');
    const tryBtn = document.getElementById('try-img');
    const rippleContainer = document.querySelector('.ripple-container');

    // 2秒後淡出 bg1，顯示 bg2
    setTimeout(() => {
        bg1.style.opacity = 0; // 隱藏 bg1
        bg2.style.opacity = 1; // 顯示 bg2

        // 顯示對話框，並依次顯示對話框和按鈕
        setTimeout(() => {
            talk1.style.opacity = 1;
            talk1.style.transform = 'translateY(-20%)'; // 上浮效果
            talk1.style.top = '18%'; // 調整 talk1 的位置
        }, 2000);

        setTimeout(() => {
            talk2.style.opacity = 1;
            talk2.style.transform = 'translateY(-20%)'; // 上浮效果
            talk2.style.top = '41%'; // 調整 talk2 的位置
        }, 3000);

        setTimeout(() => {
            talk3.style.opacity = 1;
            talk3.style.transform = 'translateY(-20%)'; // 上浮效果
            talk3.style.top = '50%'; // 調整 talk3 的位置
        }, 4000);

        // 顯示按鈕 (延遲1000毫秒)
        setTimeout(() => {
            tryBtn.style.opacity = 1;
            tryBtn.style.transform = 'translateY(0)';
            // 開始漣漪特效
            rippleContainer.classList.add('active');
        }, 5000); // 延遲5秒後顯示
        window.onload = () => {
            document.getElementById("talk1").style.opacity = 1;
            setTimeout(() => {
              document.getElementById("talk2").style.opacity = 1;
            }, 1000);
            setTimeout(() => {
              document.getElementById("talk3").style.opacity = 1;
            }, 2000);
            setTimeout(() => {
              document.querySelector(".ripple-container").classList.add("active");
            }, 3000);
          };

    }, 2000); // 在 bg1 顯示 2 秒後執行
    
};
document.getElementById('try-img').addEventListener('click', () => {
    window.location.href = 'page2.html';
  });