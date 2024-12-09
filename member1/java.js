// เลือกรูปที่ต้องการตรวจจับ
const targetImage = document.getElementById("targetImage");

// ใช้ Intersection Observer เพื่อตรวจจับการแสดงผล
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // เพิ่มคลาส 'show' เพื่อให้รูปแสดงขึ้น
            targetImage.classList.add("show");
        }
    });
});

// บอก Observer ให้สังเกตที่ targetImage
observer.observe(targetImage);
