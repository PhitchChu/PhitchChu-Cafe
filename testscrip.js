// script.js
const image = document.getElementById('image');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

const images = ['ทาร์ตไข่ปอย3.jpg', 'pete smo.jpg', 'image3.jpg']; // รายชื่อไฟล์รูปภาพของคุณ

let currentIndex = 0;

function showImage(index) {
    image.src = images[index];
}

prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showImage(currentIndex);
});

nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
});

// เริ่มแสดงรูปภาพแรก
showImage(currentIndex);
