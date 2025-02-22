﻿document.addEventListener('DOMContentLoaded', function () {
    function updateClock() {
        const now = new Date();
        const hours = String(now.getHours()).padStart(2, '0');
        const minutes = String(now.getMinutes()).padStart(2, '0');
        const seconds = String(now.getSeconds()).padStart(2, '0');

        document.getElementById('gio').textContent = hours;
        document.getElementById('phut').textContent = minutes;
        document.getElementById('giay').textContent = seconds;
        console.log(hours, minutes, seconds)
    }

    //setInterval(updateClock, 1000);
    //updateClock();

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
    
    const openmenu = document.querySelector('.open_menu');
    const navbarmenuresponsive = document.querySelector('.nav-bar-menu_responsive');
    const navbarmenu = document.querySelector('.navbarmenu_responsive');
    const bosutap = document.querySelector('.bosutap_responsive');
    const phukien = document.querySelector('.phukien_responsive');
    const xuhuong = document.querySelector('.xuhuong_responsive');
    const navbarmenu1resposive = document.querySelector('.choxuong1');
    const navbarmenu2resposive = document.querySelector('.choxuong2');
    const navbarmenu3resposive = document.querySelector('.choxuong3');
    const navbarmenu4resposive = document.querySelector('.choxuong4');
    const localLogin = document.querySelector('.dangnhapresponsive');
    let co1 = false, co2 = false, co3 = false, co4 = false;
    if (openmenu && navbarmenuresponsive) {
        openmenu.addEventListener('click', () => {
            navbarmenuresponsive.style.display = 'grid';
            console.log("Xin chào Thương");
        });
    } else {
        console.error("Không tìm thấy phần tử .open_menu hoặc .nav-bar-menu_responsive");
    }
    navbarmenu1resposive.addEventListener('click', () => {
        if (co1 == false) {
            navbarmenu.style.display = 'flex';
            co1 = true;
        } else {
            navbarmenu.style.display = 'none';
             co1 = false;
        }
        
    })
    navbarmenu2resposive.addEventListener('click', () => {
        if (co2 == false) {
            bosutap.style.display = 'flex';
            co2 = true;
            console.log("Bat")
        } else {
            bosutap.style.display = 'none';
            console.log("Tat")
            co2 = false;
        }
    })
    navbarmenu3resposive.addEventListener('click', () => {
        if (co3 == false) {
            phukien.style.display = 'flex';
            co3 = true;
        } else {
            phukien.style.display = 'none';
            co3 = false;
        }
    })
    navbarmenu4resposive.addEventListener('click', () => {
        if (co4 == false) {
            xuhuong.style.display = 'flex';
            co4 = true;
        } else {
            xuhuong.style.display = 'none';
            co4 = false;
        }
    })

    localLogin.addEventListener('click', () => {
        navbarmenuresponsive.style.display = 'none'
    });


    const scrollContainer = document.getElementById('scrollContainer');
    const scrollContainer1 = document.getElementById('scrollContainer1');
    const scrollContainer2 = document.getElementById('scrollContainer2');
    const scrollContainer3 = document.getElementById('scrollContainer3');
    const scrollContainer4 = document.getElementById('scrollContainer4');
    const scrollContainer5 = document.getElementById('scrollContainer5');
    const scrollContainer6 = document.getElementById('scrollContainer6');
    const scrollContainer7 = document.getElementById('scrollContainer7');
    const scrollContainer8 = document.getElementById('scrollContainer8');
    const scrollContainer9 = document.getElementById('scrollContainer9');
    const scrollContainer10 = document.getElementById('scrollContainer10');
    const scrollContainer11 = document.getElementById('scrollContainer11');
    const scrollContainer12 = document.getElementById('scrollContainer12');
    const product = document.getElementsByClassName('.product-top');

    
    //function keohang(scrollContainern) {
    //    let isDragging = false; // Trạng thái kéo riêng cho từng container
    //    let startX, scrollLeft;

    //    // Khi nhấn chuột vào container
    //    scrollContainern.addEventListener('mousedown', (e) => {
    //        isDragging = true;
    //        scrollContainern.classList.add('active');
    //        startX = e.pageX - scrollContainern.offsetLeft; // Vị trí chuột ban đầu
    //        scrollLeft = scrollContainern.scrollLeft; // Vị trí cuộn ban đầu
    //        console.log("Nhấn chuột")
    //        console.log("Giá trị trong mousedown: " + isDragging)
    //    });

    //    // Khi thả chuột
    //    scrollContainern.addEventListener('mouseup', () => {
    //        isDragging = false;
    //        scrollContainern.classList.remove('active');
    //        console.log("Nhả chuột sau khi kéo")
    //        console.log("Giá trị trong mouseup: " + isDragging)
    //    });

    //    // Khi chuột rời khỏi container
    //    scrollContainern.addEventListener('mouseleave', () => {
    //        isDragging = false;
    //        scrollContainern.classList.remove('active');
    //        console.log("Chuột rời khỏi phạm vi")
    //        console.log("Giá trị trong mouseleave: " + isDragging)
    //    });

    //    // Khi di chuyển chuột
    //    scrollContainern.addEventListener('mousemove', (e) => {
    //        if (!isDragging) return; // Nếu không kéo thì không làm gì cả
    //        e.preventDefault();
    //        const x = e.pageX - scrollContainern.offsetLeft; // Vị trí hiện tại của chuột
    //        const walk = (x - startX) * 2; // Tính khoảng cách di chuyển
    //        scrollContainern.scrollLeft = scrollLeft - walk; // Cập nhật vị trí cuộn
    //        console.log("Di chuyển chuột")
    //        console.log("Giá trị trong mousemove: " + isDragging)
    //    });
    //}

    function keohang(scrollContainern) {
        let isDragging = false;
        let startX, scrollLeft;

        // Khi nhấn (chuột hoặc cảm ứng)
        scrollContainern.addEventListener('pointerdown', (e) => {
            isDragging = true;
            scrollContainern.classList.add('active');
            startX = e.pageX - scrollContainern.offsetLeft;
            scrollLeft = scrollContainern.scrollLeft;
            console.log("Nhấn chuột hoặc chạm");
            console.log("Giá trị trong pointerdown: " + isDragging);
        });

        // Khi thả (chuột hoặc ngón tay)
        scrollContainern.addEventListener('pointerup', () => {
            isDragging = false;
            scrollContainern.classList.remove('active');
            console.log("Nhả chuột hoặc kết thúc chạm");
            console.log("Giá trị trong pointerup: " + isDragging);
        });

        // Khi rời khỏi container
        scrollContainern.addEventListener('pointerleave', () => {
            isDragging = false;
            scrollContainern.classList.remove('active');
            console.log("Rời khỏi phạm vi");
            console.log("Giá trị trong pointerleave: " + isDragging);
        });

        // Khi di chuyển (chuột hoặc ngón tay)
        scrollContainern.addEventListener('pointermove', (e) => {
            if (!isDragging) return;
            e.preventDefault();
            const x = e.pageX - scrollContainern.offsetLeft;
            const walk = (x - startX) * 2;
            scrollContainern.scrollLeft = scrollLeft - walk;
            console.log("Di chuyển chuột hoặc ngón tay");
            console.log("Giá trị trong pointermove: " + isDragging);
        });

        // Ngăn chặn trình duyệt cuộn khi kéo
        scrollContainern.addEventListener('touchmove', (e) => {
            e.preventDefault();
        }, { passive: false });
    }



    // Gọi hàm cho từng container
    keohang(scrollContainer);
    keohang(scrollContainer1);
    keohang(scrollContainer2);
    keohang(scrollContainer3);
    keohang(scrollContainer4);
    keohang(scrollContainer5);
    keohang(scrollContainer6);
    keohang(scrollContainer7);
    keohang(scrollContainer8);
    keohang(scrollContainer9);
    keohang(scrollContainer10);
    keohang(scrollContainer11);
    keohang(scrollContainer12);
});





