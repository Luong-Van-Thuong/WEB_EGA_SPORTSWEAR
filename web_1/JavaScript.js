document.addEventListener('DOMContentLoaded', function () {
//    function updateClock() {
//        const now = new Date();
//        const hours = String(now.getHours()).padStart(2, '0');
//        const minutes = String(now.getMinutes()).padStart(2, '0');
//        const seconds = String(now.getSeconds()).padStart(2, '0');

//        document.getElementById('gio').textContent = hours;
//        document.getElementById('phut').textContent = minutes;
//        document.getElementById('giay').textContent = seconds;
//        console.log(hours, minutes, seconds)
//    }

//    setInterval(updateClock, 1000);
    //    updateClock();

    const contents = document.querySelectorAll('.imgactivelife');
    const button2 = document.querySelector('.imgactivelife1Button');
    const button3 = document.querySelector('.imgactivelife2Button');
    let visibleStart = 0; 
    const visibleCount = 1; 

    function updateVisibility() {
        // Duyệt qua tất cả các phần tử và kiểm tra điều kiện hiển thị
        contents.forEach((content, index) => {
            if (index >= visibleStart && index < visibleStart + visibleCount) {
                content.style.display = 'grid'; // Hiển thị các phần tử trong phạm vi
            } else {
                content.style.display = 'none'; // Ẩn các phần tử ngoài phạm vi
            }
        });

        console.log("Nhan <")
    }
    // Thêm sự kiện cho Button "Next"
    button2.addEventListener('click', () => {
        if (visibleStart + visibleCount < contents.length) {
            visibleStart += 1; // Tăng vị trí hiển thị thêm 2
            console.log(visibleStart)
            updateVisibility();
        } else {
            visibleStart -= 1; // Giảm vị trí hiển thị đi 2
            console.log(visibleStart)
            updateVisibility();
        }
        console.log("Nhan >")
    });
    button3.addEventListener('click', () => {
        console.log("nhan +")
        if (visibleStart > 0) {
            visibleStart -= 1; // Giảm vị trí hiển thị đi 2
            console.log(visibleStart)
            updateVisibility();
        } else {
            visibleStart += 1; // Tăng vị trí hiển thị thêm 2
            console.log(visibleStart)
            updateVisibility();
        }
    });
    // Gọi hàm cập nhật hiển thị lần đầu
    updateVisibility();


    const contents1 = document.querySelectorAll('.imgchosebestnew');
    const button4 = document.querySelector('.button1');
    const button5 = document.querySelector('.button2');
    let visibleStart1 = 0;
    const visibleCount1 = 1;

    function updateVisibility1() {
        // Duyệt qua tất cả các phần tử và kiểm tra điều kiện hiển thị
        contents1.forEach((content, index) => {
            if (index >= visibleStart1 && index < visibleStart1 + visibleCount1) {
                content.style.display = 'grid'; // Hiển thị các phần tử trong phạm vi
            } else {
                content.style.display = 'none'; // Ẩn các phần tử ngoài phạm vi
            }
        });
        
    }
    // Thêm sự kiện cho Button "Next"
    button4.addEventListener('click', () => {
        if (visibleStart1 + visibleCount1 < contents1.length) {
            visibleStart1 += 1; // Tăng vị trí hiển thị thêm 2
            console.log(visibleStart1)
            updateVisibility1();
        } else {
            visibleStart1 -= 1; // Giảm vị trí hiển thị đi 2
            console.log(visibleStart1)
            updateVisibility1();
        }
        console.log("Nhan >")
    });
    button5.addEventListener('click', () => {
        console.log("nhan +")
        if (visibleStart1 > 0) {
            visibleStart1 -= 1; // Giảm vị trí hiển thị đi 2
            console.log(visibleStart1)
            updateVisibility1();
        } else {
            visibleStart1 += 1; // Tăng vị trí hiển thị thêm 2
            console.log(visibleStart1)
            updateVisibility1();
        }
        console.log("Nhan <")
    });
    // Gọi hàm cập nhật hiển thị lần đầu
    updateVisibility1();


    const contents2 = document.querySelectorAll('.imgmainpage2');
    const button6 = document.querySelector('.buttonimgmainpage');
    const button7 = document.querySelector('.buttonimgmainpage2');
    let visibleStart2 = 0;
    const visibleCount2 = 1;

    function updateVisibility2() {
        // Duyệt qua tất cả các phần tử và kiểm tra điều kiện hiển thị
        contents2.forEach((content, index) => {
            if (index >= visibleStart2 && index < visibleStart2 + visibleCount2) {
                content.style.display = 'grid'; // Hiển thị các phần tử trong phạm vi
            } else {
                content.style.display = 'none'; // Ẩn các phần tử ngoài phạm vi
            }
        });

    }
    // Thêm sự kiện cho Button "Next"
    button6.addEventListener('click', () => {
        if (visibleStart2 + visibleCount2 < contents2.length) {
            visibleStart2 += 1; // Tăng vị trí hiển thị thêm 2
            console.log(visibleStart2)
            updateVisibility2();
        } else {
            visibleStart2 -= 1; // Giảm vị trí hiển thị đi 2
            console.log(visibleStart2)
            updateVisibility2();
        }
        console.log("Nhan >")
    });
    button7.addEventListener('click', () => {
        console.log("nhan +")
        if (visibleStart2 > 0) {
            visibleStart2 -= 1; // Giảm vị trí hiển thị đi 2
            console.log(visibleStart2)
            updateVisibility2();
        } else {
            visibleStart2 += 1; // Tăng vị trí hiển thị thêm 2
            console.log(visibleStart2)
            updateVisibility2();
        }
        console.log("Nhan <")
    });
    // Gọi hàm cập nhật hiển thị lần đầu
    updateVisibility2();


    const contents3 = document.querySelectorAll('.imgtalkaboutwe1');
    const button8 = document.querySelector('.buttonimgtalkaboutwe');
    const button9 = document.querySelector('.buttonimgtalkaboutwe2');
    let visibleStart3 = 0;
    const visibleCount3 = 1;

    function updateVisibility3() {
        // Duyệt qua tất cả các phần tử và kiểm tra điều kiện hiển thị
        contents3.forEach((content, index) => {
            if (index >= visibleStart3 && index < visibleStart3 + visibleCount3) {
                content.style.display = 'grid'; // Hiển thị các phần tử trong phạm vi
            } else {
                content.style.display = 'none'; // Ẩn các phần tử ngoài phạm vi
            }
        });

    }
    // Thêm sự kiện cho Button "Next"
    button8.addEventListener('click', () => {
        if (visibleStart3 + visibleCount3 < contents3.length) {
            visibleStart3 += 1; // Tăng vị trí hiển thị thêm 2
            console.log(visibleStart3)
            updateVisibility3();
        } else {
            visibleStart3 -= 1; // Giảm vị trí hiển thị đi 2
            console.log(visibleStart3)
            updateVisibility3();
        }
        console.log("Nhan >")
    });
    button9.addEventListener('click', () => {
        console.log("nhan +")
        if (visibleStart3 > 0) {
            visibleStart3 -= 1; // Giảm vị trí hiển thị đi 2
            console.log(visibleStart3)
            updateVisibility3();
        } else {
            visibleStart3 += 1; // Tăng vị trí hiển thị thêm 2
            console.log(visibleStart3)
            updateVisibility3();
        }
        console.log("Nhan <")
    });
    // Gọi hàm cập nhật hiển thị lần đầu
    updateVisibility3();
});





