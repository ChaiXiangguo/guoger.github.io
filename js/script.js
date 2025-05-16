// 轮播图功能
const sliderImages = document.querySelectorAll('.slider img');
let currentIndex = 0;

function showImage(index) {
    sliderImages.forEach((image, i) => {
        if (i === index) {
            image.classList.add('active');
        } else {
            image.classList.remove('active');
        }
    });
}

function nextImage() {
    currentIndex = (currentIndex + 1) % sliderImages.length;
    showImage(currentIndex);
}

// 初始显示第一张图片
showImage(currentIndex);

// 每隔3秒切换一次图片
setInterval(nextImage, 5000);
