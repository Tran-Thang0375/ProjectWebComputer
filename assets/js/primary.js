

var searchHeader = document.querySelector(".header__container-main-input")
var btn_searchHeader = document.querySelector(".header__container-main-btn")
var searchFooter = document.querySelector(".footer__main-notification-input")
var btn_searchFooter = document.querySelector(".footer__main-notification-import-icon")

var searchs = function (item) {
    if (item.value) {

    }
    else {
        alert("Vui lòng nhập nội dung !")
    }
}

btn_searchHeader.onclick = function () {
    searchs(searchHeader)
}
btn_searchFooter.onclick = function () {
    searchs(searchFooter)
}


var next_left = document.querySelector(".container__top-synthetic-banner-next-left");
var next_right = document.querySelector(".container__top-synthetic-banner-next-right");
var radio_btns = document.querySelectorAll(".container__top-synthetic-banner-top-radio-item");
var Sliders = document.querySelectorAll(".container__top-synthetic-banner-top-slider");
var left__right = -696;
var left__left = -6960;
var count = 1;
var check = 0;
// radio_btns.forEach(function (item, index) {

//     left__right = 0;
//     left__left = -6264;
//     item.onclick = function () {
//         if (!item.classList.contains("background-radio")) {
//             radio_btns.forEach(function (itemRadio, indexRadio) {
//                 if (itemRadio.classList.contains("background-radio")) {
//                     check = indexRadio + 1;
//                 }
//             })
//             radio_btns[check - 1].classList.remove("background-radio");
//             item.classList.add("background-radio")
//             count = index + 1;
//             left__right += (check - count) * 696;
//             left__left += (check - count) * 696;
//             console.log(count)
//             console.log(check - count);
//             Sliders.forEach(function (itemSlider) {
//                 itemSlider.style.transition = "left 0.3s";
//             })
//             Sliders[0].style.left = left__right + "px";
//             Sliders[1].style.left = left__left + "px";
//             check = index + 1;
//         }
//     };
// })

function Slider(direction) {
    left__right += (696 * direction);
    left__left += (696 * direction);
    count += 1 * direction;
    if (count > 9) {
        count = 1;
    } else if (count < 1) {
        count = 9;
    }
    radio_btns.forEach(function (item) {
        if (item.id != "radio_" + count) {
            item.classList.remove("background-radio");
        }
        else {
            item.classList.add("background-radio");
        }
    })
    Sliders.forEach(function (item) {
        item.style.transition = "left 0.3s";
    })
    Sliders[0].style.left = left__right + "px";
    Sliders[1].style.left = left__left + "px";
    if (direction > 0) {
        if (left__right === 5568) {
            left__right = -6960;
            Sliders[0].style.left = left__right + "px";
            Sliders[0].style.transition = "left 0s";
        }
        if (left__left === 5568) {
            left__left = -6960;
            Sliders[1].style.left = left__left + "px";
            Sliders[1].style.transition = "left 0s";
        }
    }
    else {
        if (left__right === -4872) {
            left__left = 1392;
            Sliders[1].style.left = left__left + "px";
            Sliders[1].style.transition = "left 0s";
        }
        if (left__left === -4872) {
            left__right = 1392;
            Sliders[0].style.left = left__right + "px";
            Sliders[0].style.transition = "left 0s";
        }
    }
}
setInterval(function () { Slider(1) }, 6000)
next_left.onclick = function () {
    Slider(-1);
}
next_right.onclick = function () {
    Slider(1);
};
var Dom_slide = document.querySelector(".slider__product-to-slide-wrapper")
var slider__product = document.querySelectorAll(".slider__product-to-slide");
var product_next_left = document.querySelectorAll(".slider__product-next-left");
var product_next_right = document.querySelectorAll(".slider__product-next-right");
var current_begin = 0;
var current_end = 15;
var direction_time = 1;
var Sale_imgs = document.querySelectorAll(".content-sale__navbar-link")
var Test = 0;
Dom_slide1() ;
function Dom_slide1() {
    Dom_slide.innerHTML =
        `<div class="slider__product-to-slide" location="0">
    <div class="slider__product-item">
        <a href="#" class="slider__product-item-link">
            <img src="./assets/img/product/Sale/radiator_fan2.jpg" alt="#"
                class="slider__product-item-img">
        </a>
        <div class="slider__product-info">
            <div class="slider__product-info-synthetic">
                <div class="slider__product-review-code">
                    <span class="slider__product-review">
                        <img class="slider__product-review-img"
                            src="./assets/img/icon/star_5.png" alt="#">
                    </span>
                    <span class="slider__product-code">
                        Mã SP:
                        <span class="slider__product-code-text">CLML016</span>
                    </span>
                </div>
                <div class="slider__product-name-price">
                    <h4 class="slider__product-name">
                        Tản nhiệt nước AIO Shark Solution 240 SSTC-CPU-WC240ARGB
                    </h4>
                    <span class="slider__product-price">1.399.999đ</span>
                    <span class="slider__product-price-brick">1.400.000đ</span>
                </div>
            </div>
            <div class="slider__product-status-basket">
                <span class="slider__product-status text-main"><i class=" text-main fa fa-phone"></i></i>Liên hệ</span>
                <a href="#" class="slider__product-basket">
                    <img class="slider__product-basket-img" src="./assets/img/icon/cart.png"
                        alt="#">
                </a>
            </div>
        </div>
    </div>
    <div class="slider__product-item">
        <a href="#" class="slider__product-item-link">
            <img src="./assets/img/product/250_1396_m__n_h__nh_asus_proart_pa248qv_24inch.jpg" alt="#"
                class="slider__product-item-img">
        </a>
        <div class="slider__product-info">
            <div class="slider__product-info-synthetic">
                <div class="slider__product-review-code">
                    <span class="slider__product-review">
                        <img class="slider__product-review-img"
                            src="./assets/img/icon/star_5.png" alt="#">
                    </span>
                    <span class="slider__product-code">
                        Mã SP:
                        <span class="slider__product-code-text"> MOAS024</span>
                    </span>
                </div>
                <div class="slider__product-name-price">
                    <h4 class="slider__product-name">
                        Màn hình Asus ProArt PA248QV 24inch WUXGA/75Hz/Flat
                    </h4>
                    <span class="slider__product-price">5.990.000đ</span>
                    <span class="slider__product-price-brick">6.000.000đ</span>
                </div>
            </div>
            <div class="slider__product-status-basket">
                <span class="slider__product-status"><i class="fas fa-check"></i>Còn hàng</span>
                <a href="#" class="slider__product-basket">
                    <img class="slider__product-basket-img" src="./assets/img/icon/cart.png"
                        alt="#">
                </a>
            </div>
        </div>
    </div>
    <div class="slider__product-item">
        <a href="#" class="slider__product-item-link">
            <img src="./assets/img/product/250_7014_m__n_h__nh_asus_vg279q.jpg" alt="#"
                class="slider__product-item-img">
        </a>
        <div class="slider__product-info">
            <div class="slider__product-info-synthetic">
                <div class="slider__product-review-code">
                    <span class="slider__product-review">
                        <img class="slider__product-review-img"
                            src="./assets/img/icon/star_5.png" alt="#">
                    </span>
                    <span class="slider__product-code">
                        Mã SP:
                        <span class="slider__product-code-text">MOAS027</span>
                    </span>
                </div>
                <div class="slider__product-name-price">
                    <h4 class="slider__product-name">
                        Màn hình Asus VG279Q 27inch Full HD/144Hz/Flat
                    </h4>
                    <span class="slider__product-price">6.850.000đ</span>
                    <span class="slider__product-price-brick">7.499.000đ</span>
                </div>
            </div>
            <div class="slider__product-status-basket">
                <span class="slider__product-status"><i class="fas fa-check"></i>Còn hàng</span>
                <a href="#" class="slider__product-basket">
                    <img class="slider__product-basket-img" src="./assets/img/icon/cart.png"
                        alt="#">
                </a>
            </div>
        </div>
    </div>
    <div class="slider__product-item">
        <a href="#" class="slider__product-item-link">
            <img src="./assets/img/product/250_4869_m__n_h__nh_asus_vg278qr_27inch.jpg" alt="#"
                class="slider__product-item-img">
        </a>
        <div class="slider__product-info">
            <div class="slider__product-info-synthetic">
                <div class="slider__product-review-code">
                    <span class="slider__product-review">
                        <img class="slider__product-review-img"
                            src="./assets/img/icon/star_5.png" alt="#">
                    </span>
                    <span class="slider__product-code">
                        Mã SP:
                        <span class="slider__product-code-text">MOAS021</span>
                    </span>
                </div>
                <div class="slider__product-name-price">
                    <h4 class="slider__product-name">
                        Màn hình Asus VG278QR 27inch Full HD/165Hz/Flat
                    </h4>
                    <span class="slider__product-price">8.180.000đ</span>
                    <span class="slider__product-price-brick">9.299.000đ</span>
                </div>
            </div>
            <div class="slider__product-status-basket">
                <span class="slider__product-status"><i class="fas fa-check"></i>Còn hàng</span>
                <a href="#" class="slider__product-basket">
                    <img class="slider__product-basket-img" src="./assets/img/icon/cart.png"
                        alt="#">
                </a>
            </div>
        </div>
    </div>
    <div class="slider__product-item">
        <a href="#" class="slider__product-item-link">
            <img src="./assets/img/product/Sale/PC-1.jpg" alt="#"
                class="slider__product-item-img">
        </a>
        <div class="slider__product-info">
            <div class="slider__product-info-synthetic">
                <div class="slider__product-review-code">
                    <span class="slider__product-review">
                        <img class="slider__product-review-img"
                            src="./assets/img/icon/star_5.png" alt="#">
                    </span>
                    <span class="slider__product-code">
                        Mã SP:
                        <span class="slider__product-code-text">PCZT006</span>
                    </span>
                </div>
                <div class="slider__product-name-price">
                    <h4 class="slider__product-name">
                        PC Gaming Zotac MEK ULTRA-S13060 i7-9700k/RAM 16GB/SSD 240GB/HDD
                        2TB/Wifi+BT/Win10
                    </h4>
                    <span class="slider__product-price">14.999.000đ</span>
                    <span class="slider__product-price-brick">26.000.000đ</span>
                </div>
            </div>
            <div class="slider__product-status-basket">
                <span class="slider__product-status"><i class="fas fa-check"></i>Còn hàng</span>
                <a href="#" class="slider__product-basket">
                    <img class="slider__product-basket-img" src="./assets/img/icon/cart.png"
                        alt="#">
                </a>
            </div>
        </div>
    </div>
    <div class="slider__product-item">
        <a href="#" class="slider__product-item-link">
            <img src="./assets/img/product/Sale/PC-1.jpg" alt="#"
                class="slider__product-item-img">
        </a>
        <div class="slider__product-info">
            <div class="slider__product-info-synthetic">
                <div class="slider__product-review-code">
                    <span class="slider__product-review">
                        <img class="slider__product-review-img"
                            src="./assets/img/icon/star_5.png" alt="#">
                    </span>
                    <span class="slider__product-code">
                        Mã SP:
                        <span class="slider__product-code-text">VGLT014</span>
                    </span>
                </div>
                <div class="slider__product-name-price">
                    <h4 class="slider__product-name">
                        Card màn hình Leadtek Quadro P2200
                    </h4>
                    <span class="slider__product-price">10.699.000đ</span>
                    <span class="slider__product-price-brick hide">26.000.000đ</span>
                </div>
            </div>
            <div class="slider__product-status-basket">
                <span class="slider__product-status"><i class="fas fa-check"></i>Còn hàng</span>
                <a href="#" class="slider__product-basket">
                    <img class="slider__product-basket-img" src="./assets/img/icon/cart.png"
                        alt="#">
                </a>
            </div>
        </div>
    </div>
    <div class="slider__product-item">
        <a href="#" class="slider__product-item-link">
            <img src="./assets/img/product/Sale/PC-1.jpg" alt="#"
                class="slider__product-item-img">
        </a>
        <div class="slider__product-info">
            <div class="slider__product-info-synthetic">
                <div class="slider__product-review-code">
                    <span class="slider__product-review">
                        <img class="slider__product-review-img"
                            src="./assets/img/icon/star_5.png" alt="#">
                    </span>
                    <span class="slider__product-code">
                        Mã SP:
                        <span class="slider__product-code-text">PCZT006</span>
                    </span>
                </div>
                <div class="slider__product-name-price">
                    <h4 class="slider__product-name">
                        PC Gaming Zotac MEK ULTRA-S13060 i7-9700k/RAM 16GB/SSD 240GB/HDD
                        2TB/Wifi+BT/Win10
                    </h4>
                    <span class="slider__product-price">14.999.000đ</span>
                    <span class="slider__product-price-brick">26.000.000đ</span>
                </div>
            </div>
            <div class="slider__product-status-basket">
                <span class="slider__product-status"><i class="fas fa-check"></i>Còn hàng</span>
                <a href="#" class="slider__product-basket">
                    <img class="slider__product-basket-img" src="./assets/img/icon/cart.png"
                        alt="#">
                </a>
            </div>
        </div>
    </div>
    <div class="slider__product-item">
        <a href="#" class="slider__product-item-link">
            <img src="./assets/img/product/Sale/PC-1.jpg" alt="#"
                class="slider__product-item-img">
        </a>
        <div class="slider__product-info">
            <div class="slider__product-info-synthetic">
                <div class="slider__product-review-code">
                    <span class="slider__product-review">
                        <img class="slider__product-review-img"
                            src="./assets/img/icon/star_5.png" alt="#">
                    </span>
                    <span class="slider__product-code">
                        Mã SP:
                        <span class="slider__product-code-text">PCZT006</span>
                    </span>
                </div>
                <div class="slider__product-name-price">
                    <h4 class="slider__product-name">
                        PC Gaming Zotac MEK ULTRA-S13060 i7-9700k/RAM 16GB/SSD 240GB/HDD
                        2TB/Wifi+BT/Win10
                    </h4>
                    <span class="slider__product-price">14.999.000đ</span>
                    <span class="slider__product-price-brick">26.000.000đ</span>
                </div>
            </div>
            <div class="slider__product-status-basket">
                <span class="slider__product-status"><i class="fas fa-check"></i>Còn hàng</span>
                <a href="#" class="slider__product-basket">
                    <img class="slider__product-basket-img" src="./assets/img/icon/cart.png"
                        alt="#">
                </a>
            </div>
        </div>
    </div>
    <div class="slider__product-item">
        <a href="#" class="slider__product-item-link">
            <img src="./assets/img/product/Sale/PC-1.jpg" alt="#"
                class="slider__product-item-img">
        </a>
        <div class="slider__product-info">
            <div class="slider__product-info-synthetic">
                <div class="slider__product-review-code">
                    <span class="slider__product-review">
                        <img class="slider__product-review-img"
                            src="./assets/img/icon/star_5.png" alt="#">
                    </span>
                    <span class="slider__product-code">
                        Mã SP:
                        <span class="slider__product-code-text">PCZT006</span>
                    </span>
                </div>
                <div class="slider__product-name-price">
                    <h4 class="slider__product-name">
                        PC Gaming Zotac MEK ULTRA-S13060 i7-9700k/RAM 16GB/SSD 240GB/HDD
                        2TB/Wifi+BT/Win10
                    </h4>
                    <span class="slider__product-price">14.999.000đ</span>
                    <span class="slider__product-price-brick">26.000.000đ</span>
                </div>
            </div>
            <div class="slider__product-status-basket">
                <span class="slider__product-status"><i class="fas fa-check"></i>Còn hàng</span>
                <a href="#" class="slider__product-basket">
                    <img class="slider__product-basket-img" src="./assets/img/icon/cart.png"
                        alt="#">
                </a>
            </div>
        </div>
    </div>
    <div class="slider__product-item">
        <a href="#" class="slider__product-item-link">
            <img src="./assets/img/product/Sale/PC-1.jpg" alt="#"
                class="slider__product-item-img">
        </a>
        <div class="slider__product-info">
            <div class="slider__product-info-synthetic">
                <div class="slider__product-review-code">
                    <span class="slider__product-review">
                        <img class="slider__product-review-img"
                            src="./assets/img/icon/star_5.png" alt="#">
                    </span>
                    <span class="slider__product-code">
                        Mã SP:
                        <span class="slider__product-code-text">PCZT006</span>
                    </span>
                </div>
                <div class="slider__product-name-price">
                    <h4 class="slider__product-name">
                        PC Gaming Zotac MEK ULTRA-S13060 i7-9700k/RAM 16GB/SSD 240GB/HDD
                        2TB/Wifi+BT/Win10
                    </h4>
                    <span class="slider__product-price">14.999.000đ</span>
                    <span class="slider__product-price-brick">26.000.000đ</span>
                </div>
            </div>
            <div class="slider__product-status-basket">
                <span class="slider__product-status"><i class="fas fa-check"></i>Còn hàng</span>
                <a href="#" class="slider__product-basket">
                    <img class="slider__product-basket-img" src="./assets/img/icon/cart.png"
                        alt="#">
                </a>
            </div>
        </div>
    </div>
    <div class="slider__product-item">
        <a href="#" class="slider__product-item-link">
            <img src="./assets/img/product/Sale/PC-1.jpg" alt="#"
                class="slider__product-item-img">
        </a>
        <div class="slider__product-info">
            <div class="slider__product-info-synthetic">
                <div class="slider__product-review-code">
                    <span class="slider__product-review">
                        <img class="slider__product-review-img"
                            src="./assets/img/icon/star_5.png" alt="#">
                    </span>
                    <span class="slider__product-code">
                        Mã SP:
                        <span class="slider__product-code-text">PCZT006</span>
                    </span>
                </div>
                <div class="slider__product-name-price">
                    <h4 class="slider__product-name">
                        PC Gaming Zotac MEK ULTRA-S13060 i7-9700k/RAM 16GB/SSD 240GB/HDD
                        2TB/Wifi+BT/Win10
                    </h4>
                    <span class="slider__product-price">14.999.000đ</span>
                    <span class="slider__product-price-brick">26.000.000đ</span>
                </div>
            </div>
            <div class="slider__product-status-basket">
                <span class="slider__product-status"><i class="fas fa-check"></i>Còn hàng</span>
                <a href="#" class="slider__product-basket">
                    <img class="slider__product-basket-img" src="./assets/img/icon/cart.png"
                        alt="#">
                </a>
            </div>
        </div>
    </div>
    <div class="slider__product-item">
        <a href="#" class="slider__product-item-link">
            <img src="./assets/img/product/Sale/PC-1.jpg" alt="#"
                class="slider__product-item-img">
        </a>
        <div class="slider__product-info">
            <div class="slider__product-info-synthetic">
                <div class="slider__product-review-code">
                    <span class="slider__product-review">
                        <img class="slider__product-review-img"
                            src="./assets/img/icon/star_5.png" alt="#">
                    </span>
                    <span class="slider__product-code">
                        Mã SP:
                        <span class="slider__product-code-text">PCZT006</span>
                    </span>
                </div>
                <div class="slider__product-name-price">
                    <h4 class="slider__product-name">
                        PC Gaming Zotac MEK ULTRA-S13060 i7-9700k/RAM 16GB/SSD 240GB/HDD
                        2TB/Wifi+BT/Win10
                    </h4>
                    <span class="slider__product-price">14.999.000đ</span>
                    <span class="slider__product-price-brick">26.000.000đ</span>
                </div>
            </div>
            <div class="slider__product-status-basket">
                <span class="slider__product-status"><i class="fas fa-check"></i>Còn hàng</span>
                <a href="#" class="slider__product-basket">
                    <img class="slider__product-basket-img" src="./assets/img/icon/cart.png"
                        alt="#">
                </a>
            </div>
        </div>
    </div>
    <div class="slider__product-item">
        <a href="#" class="slider__product-item-link">
            <img src="./assets/img/product/Sale/PC-1.jpg" alt="#"
                class="slider__product-item-img">
        </a>
        <div class="slider__product-info">
            <div class="slider__product-info-synthetic">
                <div class="slider__product-review-code">
                    <span class="slider__product-review">
                        <img class="slider__product-review-img"
                            src="./assets/img/icon/star_5.png" alt="#">
                    </span>
                    <span class="slider__product-code">
                        Mã SP:
                        <span class="slider__product-code-text">PCZT006</span>
                    </span>
                </div>
                <div class="slider__product-name-price">
                    <h4 class="slider__product-name">
                        PC Gaming Zotac MEK ULTRA-S13060 i7-9700k/RAM 16GB/SSD 240GB/HDD
                        2TB/Wifi+BT/Win10
                    </h4>
                    <span class="slider__product-price">14.999.000đ</span>
                    <span class="slider__product-price-brick">26.000.000đ</span>
                </div>
            </div>
            <div class="slider__product-status-basket">
                <span class="slider__product-status"><i class="fas fa-check"></i>Còn hàng</span>
                <a href="#" class="slider__product-basket">
                    <img class="slider__product-basket-img" src="./assets/img/icon/cart.png"
                        alt="#">
                </a>
            </div>
        </div>
    </div>
    <div class="slider__product-item">
        <a href="#" class="slider__product-item-link">
            <img src="./assets/img/product/Sale/PC-1.jpg" alt="#"
                class="slider__product-item-img">
        </a>
        <div class="slider__product-info">
            <div class="slider__product-info-synthetic">
                <div class="slider__product-review-code">
                    <span class="slider__product-review">
                        <img class="slider__product-review-img"
                            src="./assets/img/icon/star_5.png" alt="#">
                    </span>
                    <span class="slider__product-code">
                        Mã SP:
                        <span class="slider__product-code-text">PCZT006</span>
                    </span>
                </div>
                <div class="slider__product-name-price">
                    <h4 class="slider__product-name">
                        PC Gaming Zotac MEK ULTRA-S13060 i7-9700k/RAM 16GB/SSD 240GB/HDD
                        2TB/Wifi+BT/Win10
                    </h4>
                    <span class="slider__product-price">14.999.000đ</span>
                    <span class="slider__product-price-brick">26.000.000đ</span>
                </div>
            </div>
            <div class="slider__product-status-basket">
                <span class="slider__product-status"><i class="fas fa-check"></i>Còn hàng</span>
                <a href="#" class="slider__product-basket">
                    <img class="slider__product-basket-img" src="./assets/img/icon/cart.png"
                        alt="#">
                </a>
            </div>
        </div>
    </div>
    <div class="slider__product-item">
        <a href="#" class="slider__product-item-link">
            <img src="./assets/img/product/Sale/PC-1.jpg" alt="#"
                class="slider__product-item-img">
        </a>
        <div class="slider__product-info">
            <div class="slider__product-info-synthetic">
                <div class="slider__product-review-code">
                    <span class="slider__product-review">
                        <img class="slider__product-review-img"
                            src="./assets/img/icon/star_5.png" alt="#">
                    </span>
                    <span class="slider__product-code">
                        Mã SP:
                        <span class="slider__product-code-text">PCZT006</span>
                    </span>
                </div>
                <div class="slider__product-name-price">
                    <h4 class="slider__product-name">
                        PC Gaming Zotac MEK ULTRA-S13060 i7-9700k/RAM 16GB/SSD 240GB/HDD
                        2TB/Wifi+BT/Win10
                    </h4>
                    <span class="slider__product-price">14.999.000đ</span>
                    <span class="slider__product-price-brick">26.000.000đ</span>
                </div>
            </div>
            <div class="slider__product-status-basket">
                <span class="slider__product-status"><i class="fas fa-check"></i>Còn hàng</span>
                <a href="#" class="slider__product-basket">
                    <img class="slider__product-basket-img" src="./assets/img/icon/cart.png"
                        alt="#">
                </a>
            </div>
        </div>
    </div>
    <div class="slider__product-item">
        <a href="#" class="slider__product-item-link">
            <img src="./assets/img/product/Sale/PC-1.jpg" alt="#"
                class="slider__product-item-img">
        </a>
        <div class="slider__product-info">
            <div class="slider__product-info-synthetic">
                <div class="slider__product-review-code">
                    <span class="slider__product-review">
                        <img class="slider__product-review-img"
                            src="./assets/img/icon/star_5.png" alt="#">
                    </span>
                    <span class="slider__product-code">
                        Mã SP:
                        <span class="slider__product-code-text">PCZT006</span>
                    </span>
                </div>
                <div class="slider__product-name-price">
                    <h4 class="slider__product-name">
                        PC Gaming Zotac MEK ULTRA-S13060 i7-9700k/RAM 16GB/SSD 240GB/HDD
                        2TB/Wifi+BT/Win10
                    </h4>
                    <span class="slider__product-price">14.999.000đ</span>
                    <span class="slider__product-price-brick">26.000.000đ</span>
                </div>
            </div>
            <div class="slider__product-status-basket">
                <span class="slider__product-status"><i class="fas fa-check"></i>Còn hàng</span>
                <a href="#" class="slider__product-basket">
                    <img class="slider__product-basket-img" src="./assets/img/icon/cart.png"
                        alt="#">
                </a>
            </div>
        </div>
    </div>
    <div class="slider__product-item">
        <a href="#" class="slider__product-item-link">
            <img src="./assets/img/product/Sale/PC-1.jpg" alt="#"
                class="slider__product-item-img">
        </a>
        <div class="slider__product-info">
            <div class="slider__product-info-synthetic">
                <div class="slider__product-review-code">
                    <span class="slider__product-review">
                        <img class="slider__product-review-img"
                            src="./assets/img/icon/star_5.png" alt="#">
                    </span>
                    <span class="slider__product-code">
                        Mã SP:
                        <span class="slider__product-code-text">PCZT006</span>
                    </span>
                </div>
                <div class="slider__product-name-price">
                    <h4 class="slider__product-name">
                        PC Gaming Zotac MEK ULTRA-S13060 i7-9700k/RAM 16GB/SSD 240GB/HDD
                        2TB/Wifi+BT/Win10
                    </h4>
                    <span class="slider__product-price">14.999.000đ</span>
                    <span class="slider__product-price-brick">26.000.000đ</span>
                </div>
            </div>
            <div class="slider__product-status-basket">
                <span class="slider__product-status"><i class="fas fa-check"></i>Còn hàng</span>
                <a href="#" class="slider__product-basket">
                    <img class="slider__product-basket-img" src="./assets/img/icon/cart.png"
                        alt="#">
                </a>
            </div>
        </div>
    </div>
    <div class="slider__product-item">
        <a href="#" class="slider__product-item-link">
            <img src="./assets/img/product/Sale/PC-1.jpg" alt="#"
                class="slider__product-item-img">
        </a>
        <div class="slider__product-info">
            <div class="slider__product-info-synthetic">
                <div class="slider__product-review-code">
                    <span class="slider__product-review">
                        <img class="slider__product-review-img"
                            src="./assets/img/icon/star_5.png" alt="#">
                    </span>
                    <span class="slider__product-code">
                        Mã SP:
                        <span class="slider__product-code-text">PCZT006</span>
                    </span>
                </div>
                <div class="slider__product-name-price">
                    <h4 class="slider__product-name">
                        PC Gaming Zotac MEK ULTRA-S13060 i7-9700k/RAM 16GB/SSD 240GB/HDD
                        2TB/Wifi+BT/Win10
                    </h4>
                    <span class="slider__product-price">14.999.000đ</span>
                    <span class="slider__product-price-brick">26.000.000đ</span>
                </div>
            </div>
            <div class="slider__product-status-basket">
                <span class="slider__product-status"><i class="fas fa-check"></i>Còn hàng</span>
                <a href="#" class="slider__product-basket">
                    <img class="slider__product-basket-img" src="./assets/img/icon/cart.png"
                        alt="#">
                </a>
            </div>
        </div>
    </div>
    <div class="slider__product-item">
        <a href="#" class="slider__product-item-link">
            <img src="./assets/img/product/Sale/PC-1.jpg" alt="#"
                class="slider__product-item-img">
        </a>
        <div class="slider__product-info">
            <div class="slider__product-info-synthetic">
                <div class="slider__product-review-code">
                    <span class="slider__product-review">
                        <img class="slider__product-review-img"
                            src="./assets/img/icon/star_5.png" alt="#">
                    </span>
                    <span class="slider__product-code">
                        Mã SP:
                        <span class="slider__product-code-text">PCZT006</span>
                    </span>
                </div>
                <div class="slider__product-name-price">
                    <h4 class="slider__product-name">
                        PC Gaming Zotac MEK ULTRA-S13060 i7-9700k/RAM 16GB/SSD 240GB/HDD
                        2TB/Wifi+BT/Win10
                    </h4>
                    <span class="slider__product-price">14.999.000đ</span>
                    <span class="slider__product-price-brick">26.000.000đ</span>
                </div>
            </div>
            <div class="slider__product-status-basket">
                <span class="slider__product-status"><i class="fas fa-check"></i>Còn hàng</span>
                <a href="#" class="slider__product-basket">
                    <img class="slider__product-basket-img" src="./assets/img/icon/cart.png"
                        alt="#">
                </a>
            </div>
        </div>
    </div>
    <div class="slider__product-item">
        <a href="#" class="slider__product-item-link">
            <img src="./assets/img/product/Sale/PC-1.jpg" alt="#"
                class="slider__product-item-img">
        </a>
        <div class="slider__product-info">
            <div class="slider__product-info-synthetic">
                <div class="slider__product-review-code">
                    <span class="slider__product-review">
                        <img class="slider__product-review-img"
                            src="./assets/img/icon/star_5.png" alt="#">
                    </span>
                    <span class="slider__product-code">
                        Mã SP:
                        <span class="slider__product-code-text">PCZT006</span>
                    </span>
                </div>
                <div class="slider__product-name-price">
                    <h4 class="slider__product-name">
                        PC Gaming Zotac MEK ULTRA-S13060 i7-9700k/RAM 16GB/SSD 240GB/HDD
                        2TB/Wifi+BT/Win10
                    </h4>
                    <span class="slider__product-price">14.999.000đ</span>
                    <span class="slider__product-price-brick">26.000.000đ</span>
                </div>
            </div>
            <div class="slider__product-status-basket">
                <span class="slider__product-status"><i class="fas fa-check"></i>Còn hàng</span>
                <a href="#" class="slider__product-basket">
                    <img class="slider__product-basket-img" src="./assets/img/icon/cart.png"
                        alt="#">
                </a>
            </div>
        </div>
    </div>
    <div class="slider__product-item">
        <a href="#" class="slider__product-item-link">
            <img src="./assets/img/product/Sale/PC-1.jpg" alt="#"
                class="slider__product-item-img">
        </a>
        <div class="slider__product-info">
            <div class="slider__product-info-synthetic">
                <div class="slider__product-review-code">
                    <span class="slider__product-review">
                        <img class="slider__product-review-img"
                            src="./assets/img/icon/star_5.png" alt="#">
                    </span>
                    <span class="slider__product-code">
                        Mã SP:
                        <span class="slider__product-code-text">PCZT006</span>
                    </span>
                </div>
                <div class="slider__product-name-price">
                    <h4 class="slider__product-name">
                        PC Gaming Zotac MEK ULTRA-S13060 i7-9700k/RAM 16GB/SSD 240GB/HDD
                        2TB/Wifi+BT/Win10
                    </h4>
                    <span class="slider__product-price">14.999.000đ</span>
                    <span class="slider__product-price-brick">26.000.000đ</span>
                </div>
            </div>
            <div class="slider__product-status-basket">
                <span class="slider__product-status"><i class="fas fa-check"></i>Còn hàng</span>
                <a href="#" class="slider__product-basket">
                    <img class="slider__product-basket-img" src="./assets/img/icon/cart.png"
                        alt="#">
                </a>
            </div>
        </div>
    </div>
    <!-- <a href="#" class="slider__product-item"><img src="./assets/img/product/Sale/TN11.jpg" alt="#" class="slider__product-item-img"></a>
    <a href="#" class="slider__product-item"><img src="./assets/img/product/Sale/LT-10.jpg" alt="#" class="slider__product-item-img"></a>
    <a href="#" class="slider__product-item"><img src="./assets/img/product/Sale/Ram1.jpg" alt="#" class="slider__product-item-img"></a>
    <a href="#" class="slider__product-item"><img src="./assets/img/product/Sale/MH-10.jpg" alt="#" class="slider__product-item-img"></a>
    <a href="#" class="slider__product-item"><img src="./assets/img/product/Sale/PC-5.jpg" alt="#" class="slider__product-item-img"></a>
    <a href="#" class="slider__product-item"><img src="./assets/img/product/Sale/C3.jpg" alt="#" class="slider__product-item-img"></a>
    <a href="#" class="slider__product-item"><img src="./assets/img/product/Sale/Mic1.jpg" alt="#" class="slider__product-item-img"></a>
    <a href="#" class="slider__product-item"><img src="./assets/img/product/Sale/card1.jpg" alt="#" class="slider__product-item-img"></a>
    <a href="#" class="slider__product-item"><img src="./assets/img/product/Sale/radiator_fan1.jpg" alt="#" class="slider__product-item-img"></a>
    <a href="#" class="slider__product-item"><img src="./assets/img/product/Sale/CPU1.jpg" alt="#" class="slider__product-item-img"></a>
    <a href="#" class="slider__product-item"><img src="./assets/img/product/Sale/Ram2.jpg" alt="#" class="slider__product-item-img"></a>
    <a href="#" class="slider__product-item"><img src="./assets/img/product/Sale/radiator_fan2.jpg" alt="#" class="slider__product-item-img"></a>
    <a href="#" class="slider__product-item"><img src="./assets/img/product/TN15.jpg" alt="#" class="slider__product-item-img"></a>
    <a href="#" class="slider__product-item"><img src="./assets/img/product/Sale/LT-2.jpg" alt="#" class="slider__product-item-img"></a> -->
</div>`
    slider__product = document.querySelectorAll(".slider__product-to-slide");
}
function Dom_slide2() {
    Dom_slide.innerHTML =
        `<div class="slider__product-to-slide " location="0">
    <div class="slider__product-item">
        <a href="#" class="slider__product-item-link">
            <img src="./assets/img/product/Sale/radiator_fan2.jpg" alt="#"
                class="slider__product-item-img">
        </a>
        <div class="slider__product-info">
            <div class="slider__product-info-synthetic">
                <div class="slider__product-review-code">
                    <span class="slider__product-review">
                        <img class="slider__product-review-img"
                            src="./assets/img/icon/star_5.png" alt="#">
                    </span>
                    <span class="slider__product-code">
                        Mã SP:
                        <span class="slider__product-code-text">CLML016</span>
                    </span>
                </div>
                <div class="slider__product-name-price">
                    <h4 class="slider__product-name">
                        Tản nhiệt nước AIO Shark Solution 240 SSTC-CPU-WC240ARGB
                    </h4>
                    <span class="slider__product-price">1.399.999đ</span>
                    <span class="slider__product-price-brick">1.400.000đ</span>
                </div>
            </div>
            <div class="slider__product-status-basket">
                <span class="slider__product-status text-main"><i class=" text-main fa fa-phone"></i></i>Liên hệ</span>
                <a href="#" class="slider__product-basket">
                    <img class="slider__product-basket-img" src="./assets/img/icon/cart.png"
                        alt="#">
                </a>
            </div>
        </div>
    </div>
    <div class="slider__product-item">
        <a href="#" class="slider__product-item-link">
            <img src="./assets/img/product/250_1396_m__n_h__nh_asus_proart_pa248qv_24inch.jpg" alt="#"
                class="slider__product-item-img">
        </a>
        <div class="slider__product-info">
            <div class="slider__product-info-synthetic">
                <div class="slider__product-review-code">
                    <span class="slider__product-review">
                        <img class="slider__product-review-img"
                            src="./assets/img/icon/star_5.png" alt="#">
                    </span>
                    <span class="slider__product-code">
                        Mã SP:
                        <span class="slider__product-code-text"> MOAS024</span>
                    </span>
                </div>
                <div class="slider__product-name-price">
                    <h4 class="slider__product-name">
                        Màn hình Asus ProArt PA248QV 24inch WUXGA/75Hz/Flat
                    </h4>
                    <span class="slider__product-price">5.990.000đ</span>
                    <span class="slider__product-price-brick">6.000.000đ</span>
                </div>
            </div>
            <div class="slider__product-status-basket">
                <span class="slider__product-status"><i class="fas fa-check"></i>Còn hàng</span>
                <a href="#" class="slider__product-basket">
                    <img class="slider__product-basket-img" src="./assets/img/icon/cart.png"
                        alt="#">
                </a>
            </div>
        </div>
    </div>
    <div class="slider__product-item">
        <a href="#" class="slider__product-item-link">
            <img src="./assets/img/product/250_7014_m__n_h__nh_asus_vg279q.jpg" alt="#"
                class="slider__product-item-img">
        </a>
        <div class="slider__product-info">
            <div class="slider__product-info-synthetic">
                <div class="slider__product-review-code">
                    <span class="slider__product-review">
                        <img class="slider__product-review-img"
                            src="./assets/img/icon/star_5.png" alt="#">
                    </span>
                    <span class="slider__product-code">
                        Mã SP:
                        <span class="slider__product-code-text">MOAS027</span>
                    </span>
                </div>
                <div class="slider__product-name-price">
                    <h4 class="slider__product-name">
                        Màn hình Asus VG279Q 27inch Full HD/144Hz/Flat
                    </h4>
                    <span class="slider__product-price">6.850.000đ</span>
                    <span class="slider__product-price-brick">7.499.000đ</span>
                </div>
            </div>
            <div class="slider__product-status-basket">
                <span class="slider__product-status"><i class="fas fa-check"></i>Còn hàng</span>
                <a href="#" class="slider__product-basket">
                    <img class="slider__product-basket-img" src="./assets/img/icon/cart.png"
                        alt="#">
                </a>
            </div>
        </div>
    </div>
    <div class="slider__product-item">
        <a href="#" class="slider__product-item-link">
            <img src="./assets/img/product/250_4869_m__n_h__nh_asus_vg278qr_27inch.jpg" alt="#"
                class="slider__product-item-img">
        </a>
        <div class="slider__product-info">
            <div class="slider__product-info-synthetic">
                <div class="slider__product-review-code">
                    <span class="slider__product-review">
                        <img class="slider__product-review-img"
                            src="./assets/img/icon/star_5.png" alt="#">
                    </span>
                    <span class="slider__product-code">
                        Mã SP:
                        <span class="slider__product-code-text">MOAS021</span>
                    </span>
                </div>
                <div class="slider__product-name-price">
                    <h4 class="slider__product-name">
                        Màn hình Asus VG278QR 27inch Full HD/165Hz/Flat
                    </h4>
                    <span class="slider__product-price">8.180.000đ</span>
                    <span class="slider__product-price-brick">9.299.000đ</span>
                </div>
            </div>
            <div class="slider__product-status-basket">
                <span class="slider__product-status"><i class="fas fa-check"></i>Còn hàng</span>
                <a href="#" class="slider__product-basket">
                    <img class="slider__product-basket-img" src="./assets/img/icon/cart.png"
                        alt="#">
                </a>
            </div>
        </div>
    </div>
    <div class="slider__product-item">
        <a href="#" class="slider__product-item-link">
            <img src="./assets/img/product/Sale/PC-1.jpg" alt="#"
                class="slider__product-item-img">
        </a>
        <div class="slider__product-info">
            <div class="slider__product-info-synthetic">
                <div class="slider__product-review-code">
                    <span class="slider__product-review">
                        <img class="slider__product-review-img"
                            src="./assets/img/icon/star_5.png" alt="#">
                    </span>
                    <span class="slider__product-code">
                        Mã SP:
                        <span class="slider__product-code-text">PCZT006</span>
                    </span>
                </div>
                <div class="slider__product-name-price">
                    <h4 class="slider__product-name">
                        PC Gaming Zotac MEK ULTRA-S13060 i7-9700k/RAM 16GB/SSD 240GB/HDD
                        2TB/Wifi+BT/Win10
                    </h4>
                    <span class="slider__product-price">14.999.000đ</span>
                    <span class="slider__product-price-brick">26.000.000đ</span>
                </div>
            </div>
            <div class="slider__product-status-basket">
                <span class="slider__product-status"><i class="fas fa-check"></i>Còn hàng</span>
                <a href="#" class="slider__product-basket">
                    <img class="slider__product-basket-img" src="./assets/img/icon/cart.png"
                        alt="#">
                </a>
            </div>
        </div>
    </div>
    <div class="slider__product-item">
        <a href="#" class="slider__product-item-link">
            <img src="./assets/img/product/Sale/PC-1.jpg" alt="#"
                class="slider__product-item-img">
        </a>
        <div class="slider__product-info">
            <div class="slider__product-info-synthetic">
                <div class="slider__product-review-code">
                    <span class="slider__product-review">
                        <img class="slider__product-review-img"
                            src="./assets/img/icon/star_5.png" alt="#">
                    </span>
                    <span class="slider__product-code">
                        Mã SP:
                        <span class="slider__product-code-text">VGLT014</span>
                    </span>
                </div>
                <div class="slider__product-name-price">
                    <h4 class="slider__product-name">
                        Card màn hình Leadtek Quadro P2200
                    </h4>
                    <span class="slider__product-price">10.699.000đ</span>
                    <span class="slider__product-price-brick hide">26.000.000đ</span>
                </div>
            </div>
            <div class="slider__product-status-basket">
                <span class="slider__product-status"><i class="fas fa-check"></i>Còn hàng</span>
                <a href="#" class="slider__product-basket">
                    <img class="slider__product-basket-img" src="./assets/img/icon/cart.png"
                        alt="#">
                </a>
            </div>
        </div>
    </div>
    <div class="slider__product-item">
        <a href="#" class="slider__product-item-link">
            <img src="./assets/img/product/Sale/PC-1.jpg" alt="#"
                class="slider__product-item-img">
        </a>
        <div class="slider__product-info">
            <div class="slider__product-info-synthetic">
                <div class="slider__product-review-code">
                    <span class="slider__product-review">
                        <img class="slider__product-review-img"
                            src="./assets/img/icon/star_5.png" alt="#">
                    </span>
                    <span class="slider__product-code">
                        Mã SP:
                        <span class="slider__product-code-text">PCZT006</span>
                    </span>
                </div>
                <div class="slider__product-name-price">
                    <h4 class="slider__product-name">
                        PC Gaming Zotac MEK ULTRA-S13060 i7-9700k/RAM 16GB/SSD 240GB/HDD
                        2TB/Wifi+BT/Win10
                    </h4>
                    <span class="slider__product-price">14.999.000đ</span>
                    <span class="slider__product-price-brick">26.000.000đ</span>
                </div>
            </div>
            <div class="slider__product-status-basket">
                <span class="slider__product-status"><i class="fas fa-check"></i>Còn hàng</span>
                <a href="#" class="slider__product-basket">
                    <img class="slider__product-basket-img" src="./assets/img/icon/cart.png"
                        alt="#">
                </a>
            </div>
        </div>
    </div>
    <div class="slider__product-item">
        <a href="#" class="slider__product-item-link">
            <img src="./assets/img/product/Sale/PC-1.jpg" alt="#"
                class="slider__product-item-img">
        </a>
        <div class="slider__product-info">
            <div class="slider__product-info-synthetic">
                <div class="slider__product-review-code">
                    <span class="slider__product-review">
                        <img class="slider__product-review-img"
                            src="./assets/img/icon/star_5.png" alt="#">
                    </span>
                    <span class="slider__product-code">
                        Mã SP:
                        <span class="slider__product-code-text">PCZT006</span>
                    </span>
                </div>
                <div class="slider__product-name-price">
                    <h4 class="slider__product-name">
                        PC Gaming Zotac MEK ULTRA-S13060 i7-9700k/RAM 16GB/SSD 240GB/HDD
                        2TB/Wifi+BT/Win10
                    </h4>
                    <span class="slider__product-price">14.999.000đ</span>
                    <span class="slider__product-price-brick">26.000.000đ</span>
                </div>
            </div>
            <div class="slider__product-status-basket">
                <span class="slider__product-status"><i class="fas fa-check"></i>Còn hàng</span>
                <a href="#" class="slider__product-basket">
                    <img class="slider__product-basket-img" src="./assets/img/icon/cart.png"
                        alt="#">
                </a>
            </div>
        </div>
    </div>
    <div class="slider__product-item">
        <a href="#" class="slider__product-item-link">
            <img src="./assets/img/product/Sale/PC-1.jpg" alt="#"
                class="slider__product-item-img">
        </a>
        <div class="slider__product-info">
            <div class="slider__product-info-synthetic">
                <div class="slider__product-review-code">
                    <span class="slider__product-review">
                        <img class="slider__product-review-img"
                            src="./assets/img/icon/star_5.png" alt="#">
                    </span>
                    <span class="slider__product-code">
                        Mã SP:
                        <span class="slider__product-code-text">PCZT006</span>
                    </span>
                </div>
                <div class="slider__product-name-price">
                    <h4 class="slider__product-name">
                        PC Gaming Zotac MEK ULTRA-S13060 i7-9700k/RAM 16GB/SSD 240GB/HDD
                        2TB/Wifi+BT/Win10
                    </h4>
                    <span class="slider__product-price">14.999.000đ</span>
                    <span class="slider__product-price-brick">26.000.000đ</span>
                </div>
            </div>
            <div class="slider__product-status-basket">
                <span class="slider__product-status"><i class="fas fa-check"></i>Còn hàng</span>
                <a href="#" class="slider__product-basket">
                    <img class="slider__product-basket-img" src="./assets/img/icon/cart.png"
                        alt="#">
                </a>
            </div>
        </div>
    </div>
    <div class="slider__product-item">
        <a href="#" class="slider__product-item-link">
            <img src="./assets/img/product/Sale/PC-1.jpg" alt="#"
                class="slider__product-item-img">
        </a>
        <div class="slider__product-info">
            <div class="slider__product-info-synthetic">
                <div class="slider__product-review-code">
                    <span class="slider__product-review">
                        <img class="slider__product-review-img"
                            src="./assets/img/icon/star_5.png" alt="#">
                    </span>
                    <span class="slider__product-code">
                        Mã SP:
                        <span class="slider__product-code-text">PCZT006</span>
                    </span>
                </div>
                <div class="slider__product-name-price">
                    <h4 class="slider__product-name">
                        PC Gaming Zotac MEK ULTRA-S13060 i7-9700k/RAM 16GB/SSD 240GB/HDD
                        2TB/Wifi+BT/Win10
                    </h4>
                    <span class="slider__product-price">14.999.000đ</span>
                    <span class="slider__product-price-brick">26.000.000đ</span>
                </div>
            </div>
            <div class="slider__product-status-basket">
                <span class="slider__product-status"><i class="fas fa-check"></i>Còn hàng</span>
                <a href="#" class="slider__product-basket">
                    <img class="slider__product-basket-img" src="./assets/img/icon/cart.png"
                        alt="#">
                </a>
            </div>
        </div>
    </div>
    <div class="slider__product-item">
        <a href="#" class="slider__product-item-link">
            <img src="./assets/img/product/Sale/PC-1.jpg" alt="#"
                class="slider__product-item-img">
        </a>
        <div class="slider__product-info">
            <div class="slider__product-info-synthetic">
                <div class="slider__product-review-code">
                    <span class="slider__product-review">
                        <img class="slider__product-review-img"
                            src="./assets/img/icon/star_5.png" alt="#">
                    </span>
                    <span class="slider__product-code">
                        Mã SP:
                        <span class="slider__product-code-text">PCZT006</span>
                    </span>
                </div>
                <div class="slider__product-name-price">
                    <h4 class="slider__product-name">
                        PC Gaming Zotac MEK ULTRA-S13060 i7-9700k/RAM 16GB/SSD 240GB/HDD
                        2TB/Wifi+BT/Win10
                    </h4>
                    <span class="slider__product-price">14.999.000đ</span>
                    <span class="slider__product-price-brick">26.000.000đ</span>
                </div>
            </div>
            <div class="slider__product-status-basket">
                <span class="slider__product-status"><i class="fas fa-check"></i>Còn hàng</span>
                <a href="#" class="slider__product-basket">
                    <img class="slider__product-basket-img" src="./assets/img/icon/cart.png"
                        alt="#">
                </a>
            </div>
        </div>
    </div>
    <div class="slider__product-item">
        <a href="#" class="slider__product-item-link">
            <img src="./assets/img/product/Sale/PC-1.jpg" alt="#"
                class="slider__product-item-img">
        </a>
        <div class="slider__product-info">
            <div class="slider__product-info-synthetic">
                <div class="slider__product-review-code">
                    <span class="slider__product-review">
                        <img class="slider__product-review-img"
                            src="./assets/img/icon/star_5.png" alt="#">
                    </span>
                    <span class="slider__product-code">
                        Mã SP:
                        <span class="slider__product-code-text">PCZT006</span>
                    </span>
                </div>
                <div class="slider__product-name-price">
                    <h4 class="slider__product-name">
                        PC Gaming Zotac MEK ULTRA-S13060 i7-9700k/RAM 16GB/SSD 240GB/HDD
                        2TB/Wifi+BT/Win10
                    </h4>
                    <span class="slider__product-price">14.999.000đ</span>
                    <span class="slider__product-price-brick">26.000.000đ</span>
                </div>
            </div>
            <div class="slider__product-status-basket">
                <span class="slider__product-status"><i class="fas fa-check"></i>Còn hàng</span>
                <a href="#" class="slider__product-basket">
                    <img class="slider__product-basket-img" src="./assets/img/icon/cart.png"
                        alt="#">
                </a>
            </div>
        </div>
    </div>
    <div class="slider__product-item">
        <a href="#" class="slider__product-item-link">
            <img src="./assets/img/product/Sale/PC-1.jpg" alt="#"
                class="slider__product-item-img">
        </a>
        <div class="slider__product-info">
            <div class="slider__product-info-synthetic">
                <div class="slider__product-review-code">
                    <span class="slider__product-review">
                        <img class="slider__product-review-img"
                            src="./assets/img/icon/star_5.png" alt="#">
                    </span>
                    <span class="slider__product-code">
                        Mã SP:
                        <span class="slider__product-code-text">PCZT006</span>
                    </span>
                </div>
                <div class="slider__product-name-price">
                    <h4 class="slider__product-name">
                        PC Gaming Zotac MEK ULTRA-S13060 i7-9700k/RAM 16GB/SSD 240GB/HDD
                        2TB/Wifi+BT/Win10
                    </h4>
                    <span class="slider__product-price">14.999.000đ</span>
                    <span class="slider__product-price-brick">26.000.000đ</span>
                </div>
            </div>
            <div class="slider__product-status-basket">
                <span class="slider__product-status"><i class="fas fa-check"></i>Còn hàng</span>
                <a href="#" class="slider__product-basket">
                    <img class="slider__product-basket-img" src="./assets/img/icon/cart.png"
                        alt="#">
                </a>
            </div>
        </div>
    </div>
    <div class="slider__product-item">
        <a href="#" class="slider__product-item-link">
            <img src="./assets/img/product/Sale/PC-1.jpg" alt="#"
                class="slider__product-item-img">
        </a>
        <div class="slider__product-info">
            <div class="slider__product-info-synthetic">
                <div class="slider__product-review-code">
                    <span class="slider__product-review">
                        <img class="slider__product-review-img"
                            src="./assets/img/icon/star_5.png" alt="#">
                    </span>
                    <span class="slider__product-code">
                        Mã SP:
                        <span class="slider__product-code-text">PCZT006</span>
                    </span>
                </div>
                <div class="slider__product-name-price">
                    <h4 class="slider__product-name">
                        PC Gaming Zotac MEK ULTRA-S13060 i7-9700k/RAM 16GB/SSD 240GB/HDD
                        2TB/Wifi+BT/Win10
                    </h4>
                    <span class="slider__product-price">14.999.000đ</span>
                    <span class="slider__product-price-brick">26.000.000đ</span>
                </div>
            </div>
            <div class="slider__product-status-basket">
                <span class="slider__product-status"><i class="fas fa-check"></i>Còn hàng</span>
                <a href="#" class="slider__product-basket">
                    <img class="slider__product-basket-img" src="./assets/img/icon/cart.png"
                        alt="#">
                </a>
            </div>
        </div>
    </div>
    <div class="slider__product-item">
        <a href="#" class="slider__product-item-link">
            <img src="./assets/img/product/Sale/PC-1.jpg" alt="#"
                class="slider__product-item-img">
        </a>
        <div class="slider__product-info">
            <div class="slider__product-info-synthetic">
                <div class="slider__product-review-code">
                    <span class="slider__product-review">
                        <img class="slider__product-review-img"
                            src="./assets/img/icon/star_5.png" alt="#">
                    </span>
                    <span class="slider__product-code">
                        Mã SP:
                        <span class="slider__product-code-text">PCZT006</span>
                    </span>
                </div>
                <div class="slider__product-name-price">
                    <h4 class="slider__product-name">
                        PC Gaming Zotac MEK ULTRA-S13060 i7-9700k/RAM 16GB/SSD 240GB/HDD
                        2TB/Wifi+BT/Win10
                    </h4>
                    <span class="slider__product-price">14.999.000đ</span>
                    <span class="slider__product-price-brick">26.000.000đ</span>
                </div>
            </div>
            <div class="slider__product-status-basket">
                <span class="slider__product-status"><i class="fas fa-check"></i>Còn hàng</span>
                <a href="#" class="slider__product-basket">
                    <img class="slider__product-basket-img" src="./assets/img/icon/cart.png"
                        alt="#">
                </a>
            </div>
        </div>
    </div>
    <div class="slider__product-item">
        <a href="#" class="slider__product-item-link">
            <img src="./assets/img/product/Sale/PC-1.jpg" alt="#"
                class="slider__product-item-img">
        </a>
        <div class="slider__product-info">
            <div class="slider__product-info-synthetic">
                <div class="slider__product-review-code">
                    <span class="slider__product-review">
                        <img class="slider__product-review-img"
                            src="./assets/img/icon/star_5.png" alt="#">
                    </span>
                    <span class="slider__product-code">
                        Mã SP:
                        <span class="slider__product-code-text">PCZT006</span>
                    </span>
                </div>
                <div class="slider__product-name-price">
                    <h4 class="slider__product-name">
                        PC Gaming Zotac MEK ULTRA-S13060 i7-9700k/RAM 16GB/SSD 240GB/HDD
                        2TB/Wifi+BT/Win10
                    </h4>
                    <span class="slider__product-price">14.999.000đ</span>
                    <span class="slider__product-price-brick">26.000.000đ</span>
                </div>
            </div>
            <div class="slider__product-status-basket">
                <span class="slider__product-status"><i class="fas fa-check"></i>Còn hàng</span>
                <a href="#" class="slider__product-basket">
                    <img class="slider__product-basket-img" src="./assets/img/icon/cart.png"
                        alt="#">
                </a>
            </div>
        </div>
    </div>
    <div class="slider__product-item">
        <a href="#" class="slider__product-item-link">
            <img src="./assets/img/product/Sale/PC-1.jpg" alt="#"
                class="slider__product-item-img">
        </a>
        <div class="slider__product-info">
            <div class="slider__product-info-synthetic">
                <div class="slider__product-review-code">
                    <span class="slider__product-review">
                        <img class="slider__product-review-img"
                            src="./assets/img/icon/star_5.png" alt="#">
                    </span>
                    <span class="slider__product-code">
                        Mã SP:
                        <span class="slider__product-code-text">PCZT006</span>
                    </span>
                </div>
                <div class="slider__product-name-price">
                    <h4 class="slider__product-name">
                        PC Gaming Zotac MEK ULTRA-S13060 i7-9700k/RAM 16GB/SSD 240GB/HDD
                        2TB/Wifi+BT/Win10
                    </h4>
                    <span class="slider__product-price">14.999.000đ</span>
                    <span class="slider__product-price-brick">26.000.000đ</span>
                </div>
            </div>
            <div class="slider__product-status-basket">
                <span class="slider__product-status"><i class="fas fa-check"></i>Còn hàng</span>
                <a href="#" class="slider__product-basket">
                    <img class="slider__product-basket-img" src="./assets/img/icon/cart.png"
                        alt="#">
                </a>
            </div>
        </div>
    </div>
    <div class="slider__product-item">
        <a href="#" class="slider__product-item-link">
            <img src="./assets/img/product/Sale/PC-1.jpg" alt="#"
                class="slider__product-item-img">
        </a>
        <div class="slider__product-info">
            <div class="slider__product-info-synthetic">
                <div class="slider__product-review-code">
                    <span class="slider__product-review">
                        <img class="slider__product-review-img"
                            src="./assets/img/icon/star_5.png" alt="#">
                    </span>
                    <span class="slider__product-code">
                        Mã SP:
                        <span class="slider__product-code-text">PCZT006</span>
                    </span>
                </div>
                <div class="slider__product-name-price">
                    <h4 class="slider__product-name">
                        PC Gaming Zotac MEK ULTRA-S13060 i7-9700k/RAM 16GB/SSD 240GB/HDD
                        2TB/Wifi+BT/Win10
                    </h4>
                    <span class="slider__product-price">14.999.000đ</span>
                    <span class="slider__product-price-brick">26.000.000đ</span>
                </div>
            </div>
            <div class="slider__product-status-basket">
                <span class="slider__product-status"><i class="fas fa-check"></i>Còn hàng</span>
                <a href="#" class="slider__product-basket">
                    <img class="slider__product-basket-img" src="./assets/img/icon/cart.png"
                        alt="#">
                </a>
            </div>
        </div>
    </div>
    <div class="slider__product-item">
        <a href="#" class="slider__product-item-link">
            <img src="./assets/img/product/Sale/PC-1.jpg" alt="#"
                class="slider__product-item-img">
        </a>
        <div class="slider__product-info">
            <div class="slider__product-info-synthetic">
                <div class="slider__product-review-code">
                    <span class="slider__product-review">
                        <img class="slider__product-review-img"
                            src="./assets/img/icon/star_5.png" alt="#">
                    </span>
                    <span class="slider__product-code">
                        Mã SP:
                        <span class="slider__product-code-text">PCZT006</span>
                    </span>
                </div>
                <div class="slider__product-name-price">
                    <h4 class="slider__product-name">
                        PC Gaming Zotac MEK ULTRA-S13060 i7-9700k/RAM 16GB/SSD 240GB/HDD
                        2TB/Wifi+BT/Win10
                    </h4>
                    <span class="slider__product-price">14.999.000đ</span>
                    <span class="slider__product-price-brick">26.000.000đ</span>
                </div>
            </div>
            <div class="slider__product-status-basket">
                <span class="slider__product-status"><i class="fas fa-check"></i>Còn hàng</span>
                <a href="#" class="slider__product-basket">
                    <img class="slider__product-basket-img" src="./assets/img/icon/cart.png"
                        alt="#">
                </a>
            </div>
        </div>
    </div>
    <div class="slider__product-item">
        <a href="#" class="slider__product-item-link">
            <img src="./assets/img/product/Sale/PC-1.jpg" alt="#"
                class="slider__product-item-img">
        </a>
        <div class="slider__product-info">
            <div class="slider__product-info-synthetic">
                <div class="slider__product-review-code">
                    <span class="slider__product-review">
                        <img class="slider__product-review-img"
                            src="./assets/img/icon/star_5.png" alt="#">
                    </span>
                    <span class="slider__product-code">
                        Mã SP:
                        <span class="slider__product-code-text">PCZT006</span>
                    </span>
                </div>
                <div class="slider__product-name-price">
                    <h4 class="slider__product-name">
                        PC Gaming Zotac MEK ULTRA-S13060 i7-9700k/RAM 16GB/SSD 240GB/HDD
                        2TB/Wifi+BT/Win10
                    </h4>
                    <span class="slider__product-price">14.999.000đ</span>
                    <span class="slider__product-price-brick">26.000.000đ</span>
                </div>
            </div>
            <div class="slider__product-status-basket">
                <span class="slider__product-status"><i class="fas fa-check"></i>Còn hàng</span>
                <a href="#" class="slider__product-basket">
                    <img class="slider__product-basket-img" src="./assets/img/icon/cart.png"
                        alt="#">
                </a>
            </div>
        </div>
    </div>
    <div class="slider__product-item">
        <a href="#" class="slider__product-item-link">
            <img src="./assets/img/product/Sale/PC-1.jpg" alt="#"
                class="slider__product-item-img">
        </a>
        <div class="slider__product-info">
            <div class="slider__product-info-synthetic">
                <div class="slider__product-review-code">
                    <span class="slider__product-review">
                        <img class="slider__product-review-img"
                            src="./assets/img/icon/star_5.png" alt="#">
                    </span>
                    <span class="slider__product-code">
                        Mã SP:
                        <span class="slider__product-code-text">PCZT006</span>
                    </span>
                </div>
                <div class="slider__product-name-price">
                    <h4 class="slider__product-name">
                        PC Gaming Zotac MEK ULTRA-S13060 i7-9700k/RAM 16GB/SSD 240GB/HDD
                        2TB/Wifi+BT/Win10
                    </h4>
                    <span class="slider__product-price">14.999.000đ</span>
                    <span class="slider__product-price-brick">26.000.000đ</span>
                </div>
            </div>
            <div class="slider__product-status-basket">
                <span class="slider__product-status"><i class="fas fa-check"></i>Còn hàng</span>
                <a href="#" class="slider__product-basket">
                    <img class="slider__product-basket-img" src="./assets/img/icon/cart.png"
                        alt="#">
                </a>
            </div>
        </div>
    </div>
    <!-- <a href="#" class="slider__product-item"><img src="./assets/img/product/Sale/TN11.jpg" alt="#" class="slider__product-item-img"></a>
    <a href="#" class="slider__product-item"><img src="./assets/img/product/Sale/LT-10.jpg" alt="#" class="slider__product-item-img"></a>
    <a href="#" class="slider__product-item"><img src="./assets/img/product/Sale/Ram1.jpg" alt="#" class="slider__product-item-img"></a>
    <a href="#" class="slider__product-item"><img src="./assets/img/product/Sale/MH-10.jpg" alt="#" class="slider__product-item-img"></a>
    <a href="#" class="slider__product-item"><img src="./assets/img/product/Sale/PC-5.jpg" alt="#" class="slider__product-item-img"></a>
    <a href="#" class="slider__product-item"><img src="./assets/img/product/Sale/C3.jpg" alt="#" class="slider__product-item-img"></a>
    <a href="#" class="slider__product-item"><img src="./assets/img/product/Sale/Mic1.jpg" alt="#" class="slider__product-item-img"></a>
    <a href="#" class="slider__product-item"><img src="./assets/img/product/Sale/card1.jpg" alt="#" class="slider__product-item-img"></a>
    <a href="#" class="slider__product-item"><img src="./assets/img/product/Sale/radiator_fan1.jpg" alt="#" class="slider__product-item-img"></a>
    <a href="#" class="slider__product-item"><img src="./assets/img/product/Sale/CPU1.jpg" alt="#" class="slider__product-item-img"></a>
    <a href="#" class="slider__product-item"><img src="./assets/img/product/Sale/Ram2.jpg" alt="#" class="slider__product-item-img"></a>
    <a href="#" class="slider__product-item"><img src="./assets/img/product/Sale/radiator_fan2.jpg" alt="#" class="slider__product-item-img"></a>
    <a href="#" class="slider__product-item"><img src="./assets/img/product/TN15.jpg" alt="#" class="slider__product-item-img"></a>
    <a href="#" class="slider__product-item"><img src="./assets/img/product/Sale/LT-2.jpg" alt="#" class="slider__product-item-img"></a> -->
</div>`
    slider__product = document.querySelectorAll(".slider__product-to-slide");
}
function Dom_slide3() {
    Dom_slide.innerHTML =
        `<div class="slider__product-to-slide"  location="0">
    <div class="slider__product-item">
        <a href="#" class="slider__product-item-link">
            <img src="./assets/img/product/Sale/radiator_fan2.jpg" alt="#"
                class="slider__product-item-img">
        </a>
        <div class="slider__product-info">
            <div class="slider__product-info-synthetic">
                <div class="slider__product-review-code">
                    <span class="slider__product-review">
                        <img class="slider__product-review-img"
                            src="./assets/img/icon/star_5.png" alt="#">
                    </span>
                    <span class="slider__product-code">
                        Mã SP:
                        <span class="slider__product-code-text">CLML016</span>
                    </span>
                </div>
                <div class="slider__product-name-price">
                    <h4 class="slider__product-name">
                        Tản nhiệt nước AIO Shark Solution 240 SSTC-CPU-WC240ARGB
                    </h4>
                    <span class="slider__product-price">1.399.999đ</span>
                    <span class="slider__product-price-brick">1.400.000đ</span>
                </div>
            </div>
            <div class="slider__product-status-basket">
                <span class="slider__product-status text-main"><i class=" text-main fa fa-phone"></i></i>Liên hệ</span>
                <a href="#" class="slider__product-basket">
                    <img class="slider__product-basket-img" src="./assets/img/icon/cart.png"
                        alt="#">
                </a>
            </div>
        </div>
    </div>
    <div class="slider__product-item">
        <a href="#" class="slider__product-item-link">
            <img src="./assets/img/product/250_1396_m__n_h__nh_asus_proart_pa248qv_24inch.jpg" alt="#"
                class="slider__product-item-img">
        </a>
        <div class="slider__product-info">
            <div class="slider__product-info-synthetic">
                <div class="slider__product-review-code">
                    <span class="slider__product-review">
                        <img class="slider__product-review-img"
                            src="./assets/img/icon/star_5.png" alt="#">
                    </span>
                    <span class="slider__product-code">
                        Mã SP:
                        <span class="slider__product-code-text"> MOAS024</span>
                    </span>
                </div>
                <div class="slider__product-name-price">
                    <h4 class="slider__product-name">
                        Màn hình Asus ProArt PA248QV 24inch WUXGA/75Hz/Flat
                    </h4>
                    <span class="slider__product-price">5.990.000đ</span>
                    <span class="slider__product-price-brick">6.000.000đ</span>
                </div>
            </div>
            <div class="slider__product-status-basket">
                <span class="slider__product-status"><i class="fas fa-check"></i>Còn hàng</span>
                <a href="#" class="slider__product-basket">
                    <img class="slider__product-basket-img" src="./assets/img/icon/cart.png"
                        alt="#">
                </a>
            </div>
        </div>
    </div>
    <div class="slider__product-item">
        <a href="#" class="slider__product-item-link">
            <img src="./assets/img/product/250_7014_m__n_h__nh_asus_vg279q.jpg" alt="#"
                class="slider__product-item-img">
        </a>
        <div class="slider__product-info">
            <div class="slider__product-info-synthetic">
                <div class="slider__product-review-code">
                    <span class="slider__product-review">
                        <img class="slider__product-review-img"
                            src="./assets/img/icon/star_5.png" alt="#">
                    </span>
                    <span class="slider__product-code">
                        Mã SP:
                        <span class="slider__product-code-text">MOAS027</span>
                    </span>
                </div>
                <div class="slider__product-name-price">
                    <h4 class="slider__product-name">
                        Màn hình Asus VG279Q 27inch Full HD/144Hz/Flat
                    </h4>
                    <span class="slider__product-price">6.850.000đ</span>
                    <span class="slider__product-price-brick">7.499.000đ</span>
                </div>
            </div>
            <div class="slider__product-status-basket">
                <span class="slider__product-status"><i class="fas fa-check"></i>Còn hàng</span>
                <a href="#" class="slider__product-basket">
                    <img class="slider__product-basket-img" src="./assets/img/icon/cart.png"
                        alt="#">
                </a>
            </div>
        </div>
    </div>
    <div class="slider__product-item">
        <a href="#" class="slider__product-item-link">
            <img src="./assets/img/product/250_4869_m__n_h__nh_asus_vg278qr_27inch.jpg" alt="#"
                class="slider__product-item-img">
        </a>
        <div class="slider__product-info">
            <div class="slider__product-info-synthetic">
                <div class="slider__product-review-code">
                    <span class="slider__product-review">
                        <img class="slider__product-review-img"
                            src="./assets/img/icon/star_5.png" alt="#">
                    </span>
                    <span class="slider__product-code">
                        Mã SP:
                        <span class="slider__product-code-text">MOAS021</span>
                    </span>
                </div>
                <div class="slider__product-name-price">
                    <h4 class="slider__product-name">
                        Màn hình Asus VG278QR 27inch Full HD/165Hz/Flat
                    </h4>
                    <span class="slider__product-price">8.180.000đ</span>
                    <span class="slider__product-price-brick">9.299.000đ</span>
                </div>
            </div>
            <div class="slider__product-status-basket">
                <span class="slider__product-status"><i class="fas fa-check"></i>Còn hàng</span>
                <a href="#" class="slider__product-basket">
                    <img class="slider__product-basket-img" src="./assets/img/icon/cart.png"
                        alt="#">
                </a>
            </div>
        </div>
    </div>
    <div class="slider__product-item">
        <a href="#" class="slider__product-item-link">
            <img src="./assets/img/product/Sale/PC-1.jpg" alt="#"
                class="slider__product-item-img">
        </a>
        <div class="slider__product-info">
            <div class="slider__product-info-synthetic">
                <div class="slider__product-review-code">
                    <span class="slider__product-review">
                        <img class="slider__product-review-img"
                            src="./assets/img/icon/star_5.png" alt="#">
                    </span>
                    <span class="slider__product-code">
                        Mã SP:
                        <span class="slider__product-code-text">PCZT006</span>
                    </span>
                </div>
                <div class="slider__product-name-price">
                    <h4 class="slider__product-name">
                        PC Gaming Zotac MEK ULTRA-S13060 i7-9700k/RAM 16GB/SSD 240GB/HDD
                        2TB/Wifi+BT/Win10
                    </h4>
                    <span class="slider__product-price">14.999.000đ</span>
                    <span class="slider__product-price-brick">26.000.000đ</span>
                </div>
            </div>
            <div class="slider__product-status-basket">
                <span class="slider__product-status"><i class="fas fa-check"></i>Còn hàng</span>
                <a href="#" class="slider__product-basket">
                    <img class="slider__product-basket-img" src="./assets/img/icon/cart.png"
                        alt="#">
                </a>
            </div>
        </div>
    </div>
    <div class="slider__product-item">
        <a href="#" class="slider__product-item-link">
            <img src="./assets/img/product/Sale/PC-1.jpg" alt="#"
                class="slider__product-item-img">
        </a>
        <div class="slider__product-info">
            <div class="slider__product-info-synthetic">
                <div class="slider__product-review-code">
                    <span class="slider__product-review">
                        <img class="slider__product-review-img"
                            src="./assets/img/icon/star_5.png" alt="#">
                    </span>
                    <span class="slider__product-code">
                        Mã SP:
                        <span class="slider__product-code-text">VGLT014</span>
                    </span>
                </div>
                <div class="slider__product-name-price">
                    <h4 class="slider__product-name">
                        Card màn hình Leadtek Quadro P2200
                    </h4>
                    <span class="slider__product-price">10.699.000đ</span>
                    <span class="slider__product-price-brick hide">26.000.000đ</span>
                </div>
            </div>
            <div class="slider__product-status-basket">
                <span class="slider__product-status"><i class="fas fa-check"></i>Còn hàng</span>
                <a href="#" class="slider__product-basket">
                    <img class="slider__product-basket-img" src="./assets/img/icon/cart.png"
                        alt="#">
                </a>
            </div>
        </div>
    </div>
    <div class="slider__product-item">
        <a href="#" class="slider__product-item-link">
            <img src="./assets/img/product/Sale/PC-1.jpg" alt="#"
                class="slider__product-item-img">
        </a>
        <div class="slider__product-info">
            <div class="slider__product-info-synthetic">
                <div class="slider__product-review-code">
                    <span class="slider__product-review">
                        <img class="slider__product-review-img"
                            src="./assets/img/icon/star_5.png" alt="#">
                    </span>
                    <span class="slider__product-code">
                        Mã SP:
                        <span class="slider__product-code-text">PCZT006</span>
                    </span>
                </div>
                <div class="slider__product-name-price">
                    <h4 class="slider__product-name">
                        PC Gaming Zotac MEK ULTRA-S13060 i7-9700k/RAM 16GB/SSD 240GB/HDD
                        2TB/Wifi+BT/Win10
                    </h4>
                    <span class="slider__product-price">14.999.000đ</span>
                    <span class="slider__product-price-brick">26.000.000đ</span>
                </div>
            </div>
            <div class="slider__product-status-basket">
                <span class="slider__product-status"><i class="fas fa-check"></i>Còn hàng</span>
                <a href="#" class="slider__product-basket">
                    <img class="slider__product-basket-img" src="./assets/img/icon/cart.png"
                        alt="#">
                </a>
            </div>
        </div>
    </div>
    <div class="slider__product-item">
        <a href="#" class="slider__product-item-link">
            <img src="./assets/img/product/Sale/PC-1.jpg" alt="#"
                class="slider__product-item-img">
        </a>
        <div class="slider__product-info">
            <div class="slider__product-info-synthetic">
                <div class="slider__product-review-code">
                    <span class="slider__product-review">
                        <img class="slider__product-review-img"
                            src="./assets/img/icon/star_5.png" alt="#">
                    </span>
                    <span class="slider__product-code">
                        Mã SP:
                        <span class="slider__product-code-text">PCZT006</span>
                    </span>
                </div>
                <div class="slider__product-name-price">
                    <h4 class="slider__product-name">
                        PC Gaming Zotac MEK ULTRA-S13060 i7-9700k/RAM 16GB/SSD 240GB/HDD
                        2TB/Wifi+BT/Win10
                    </h4>
                    <span class="slider__product-price">14.999.000đ</span>
                    <span class="slider__product-price-brick">26.000.000đ</span>
                </div>
            </div>
            <div class="slider__product-status-basket">
                <span class="slider__product-status"><i class="fas fa-check"></i>Còn hàng</span>
                <a href="#" class="slider__product-basket">
                    <img class="slider__product-basket-img" src="./assets/img/icon/cart.png"
                        alt="#">
                </a>
            </div>
        </div>
    </div>
    <div class="slider__product-item">
        <a href="#" class="slider__product-item-link">
            <img src="./assets/img/product/Sale/PC-1.jpg" alt="#"
                class="slider__product-item-img">
        </a>
        <div class="slider__product-info">
            <div class="slider__product-info-synthetic">
                <div class="slider__product-review-code">
                    <span class="slider__product-review">
                        <img class="slider__product-review-img"
                            src="./assets/img/icon/star_5.png" alt="#">
                    </span>
                    <span class="slider__product-code">
                        Mã SP:
                        <span class="slider__product-code-text">PCZT006</span>
                    </span>
                </div>
                <div class="slider__product-name-price">
                    <h4 class="slider__product-name">
                        PC Gaming Zotac MEK ULTRA-S13060 i7-9700k/RAM 16GB/SSD 240GB/HDD
                        2TB/Wifi+BT/Win10
                    </h4>
                    <span class="slider__product-price">14.999.000đ</span>
                    <span class="slider__product-price-brick">26.000.000đ</span>
                </div>
            </div>
            <div class="slider__product-status-basket">
                <span class="slider__product-status"><i class="fas fa-check"></i>Còn hàng</span>
                <a href="#" class="slider__product-basket">
                    <img class="slider__product-basket-img" src="./assets/img/icon/cart.png"
                        alt="#">
                </a>
            </div>
        </div>
    </div>
    <div class="slider__product-item">
        <a href="#" class="slider__product-item-link">
            <img src="./assets/img/product/Sale/PC-1.jpg" alt="#"
                class="slider__product-item-img">
        </a>
        <div class="slider__product-info">
            <div class="slider__product-info-synthetic">
                <div class="slider__product-review-code">
                    <span class="slider__product-review">
                        <img class="slider__product-review-img"
                            src="./assets/img/icon/star_5.png" alt="#">
                    </span>
                    <span class="slider__product-code">
                        Mã SP:
                        <span class="slider__product-code-text">PCZT006</span>
                    </span>
                </div>
                <div class="slider__product-name-price">
                    <h4 class="slider__product-name">
                        PC Gaming Zotac MEK ULTRA-S13060 i7-9700k/RAM 16GB/SSD 240GB/HDD
                        2TB/Wifi+BT/Win10
                    </h4>
                    <span class="slider__product-price">14.999.000đ</span>
                    <span class="slider__product-price-brick">26.000.000đ</span>
                </div>
            </div>
            <div class="slider__product-status-basket">
                <span class="slider__product-status"><i class="fas fa-check"></i>Còn hàng</span>
                <a href="#" class="slider__product-basket">
                    <img class="slider__product-basket-img" src="./assets/img/icon/cart.png"
                        alt="#">
                </a>
            </div>
        </div>
    </div>
    <div class="slider__product-item">
        <a href="#" class="slider__product-item-link">
            <img src="./assets/img/product/Sale/PC-1.jpg" alt="#"
                class="slider__product-item-img">
        </a>
        <div class="slider__product-info">
            <div class="slider__product-info-synthetic">
                <div class="slider__product-review-code">
                    <span class="slider__product-review">
                        <img class="slider__product-review-img"
                            src="./assets/img/icon/star_5.png" alt="#">
                    </span>
                    <span class="slider__product-code">
                        Mã SP:
                        <span class="slider__product-code-text">PCZT006</span>
                    </span>
                </div>
                <div class="slider__product-name-price">
                    <h4 class="slider__product-name">
                        PC Gaming Zotac MEK ULTRA-S13060 i7-9700k/RAM 16GB/SSD 240GB/HDD
                        2TB/Wifi+BT/Win10
                    </h4>
                    <span class="slider__product-price">14.999.000đ</span>
                    <span class="slider__product-price-brick">26.000.000đ</span>
                </div>
            </div>
            <div class="slider__product-status-basket">
                <span class="slider__product-status"><i class="fas fa-check"></i>Còn hàng</span>
                <a href="#" class="slider__product-basket">
                    <img class="slider__product-basket-img" src="./assets/img/icon/cart.png"
                        alt="#">
                </a>
            </div>
        </div>
    </div>
    <div class="slider__product-item">
        <a href="#" class="slider__product-item-link">
            <img src="./assets/img/product/Sale/PC-1.jpg" alt="#"
                class="slider__product-item-img">
        </a>
        <div class="slider__product-info">
            <div class="slider__product-info-synthetic">
                <div class="slider__product-review-code">
                    <span class="slider__product-review">
                        <img class="slider__product-review-img"
                            src="./assets/img/icon/star_5.png" alt="#">
                    </span>
                    <span class="slider__product-code">
                        Mã SP:
                        <span class="slider__product-code-text">PCZT006</span>
                    </span>
                </div>
                <div class="slider__product-name-price">
                    <h4 class="slider__product-name">
                        PC Gaming Zotac MEK ULTRA-S13060 i7-9700k/RAM 16GB/SSD 240GB/HDD
                        2TB/Wifi+BT/Win10
                    </h4>
                    <span class="slider__product-price">14.999.000đ</span>
                    <span class="slider__product-price-brick">26.000.000đ</span>
                </div>
            </div>
            <div class="slider__product-status-basket">
                <span class="slider__product-status"><i class="fas fa-check"></i>Còn hàng</span>
                <a href="#" class="slider__product-basket">
                    <img class="slider__product-basket-img" src="./assets/img/icon/cart.png"
                        alt="#">
                </a>
            </div>
        </div>
    </div>
    <div class="slider__product-item">
        <a href="#" class="slider__product-item-link">
            <img src="./assets/img/product/Sale/PC-1.jpg" alt="#"
                class="slider__product-item-img">
        </a>
        <div class="slider__product-info">
            <div class="slider__product-info-synthetic">
                <div class="slider__product-review-code">
                    <span class="slider__product-review">
                        <img class="slider__product-review-img"
                            src="./assets/img/icon/star_5.png" alt="#">
                    </span>
                    <span class="slider__product-code">
                        Mã SP:
                        <span class="slider__product-code-text">PCZT006</span>
                    </span>
                </div>
                <div class="slider__product-name-price">
                    <h4 class="slider__product-name">
                        PC Gaming Zotac MEK ULTRA-S13060 i7-9700k/RAM 16GB/SSD 240GB/HDD
                        2TB/Wifi+BT/Win10
                    </h4>
                    <span class="slider__product-price">14.999.000đ</span>
                    <span class="slider__product-price-brick">26.000.000đ</span>
                </div>
            </div>
            <div class="slider__product-status-basket">
                <span class="slider__product-status"><i class="fas fa-check"></i>Còn hàng</span>
                <a href="#" class="slider__product-basket">
                    <img class="slider__product-basket-img" src="./assets/img/icon/cart.png"
                        alt="#">
                </a>
            </div>
        </div>
    </div>
    <div class="slider__product-item">
        <a href="#" class="slider__product-item-link">
            <img src="./assets/img/product/Sale/PC-1.jpg" alt="#"
                class="slider__product-item-img">
        </a>
        <div class="slider__product-info">
            <div class="slider__product-info-synthetic">
                <div class="slider__product-review-code">
                    <span class="slider__product-review">
                        <img class="slider__product-review-img"
                            src="./assets/img/icon/star_5.png" alt="#">
                    </span>
                    <span class="slider__product-code">
                        Mã SP:
                        <span class="slider__product-code-text">PCZT006</span>
                    </span>
                </div>
                <div class="slider__product-name-price">
                    <h4 class="slider__product-name">
                        PC Gaming Zotac MEK ULTRA-S13060 i7-9700k/RAM 16GB/SSD 240GB/HDD
                        2TB/Wifi+BT/Win10
                    </h4>
                    <span class="slider__product-price">14.999.000đ</span>
                    <span class="slider__product-price-brick">26.000.000đ</span>
                </div>
            </div>
            <div class="slider__product-status-basket">
                <span class="slider__product-status"><i class="fas fa-check"></i>Còn hàng</span>
                <a href="#" class="slider__product-basket">
                    <img class="slider__product-basket-img" src="./assets/img/icon/cart.png"
                        alt="#">
                </a>
            </div>
        </div>
    </div>
    <div class="slider__product-item">
        <a href="#" class="slider__product-item-link">
            <img src="./assets/img/product/Sale/PC-1.jpg" alt="#"
                class="slider__product-item-img">
        </a>
        <div class="slider__product-info">
            <div class="slider__product-info-synthetic">
                <div class="slider__product-review-code">
                    <span class="slider__product-review">
                        <img class="slider__product-review-img"
                            src="./assets/img/icon/star_5.png" alt="#">
                    </span>
                    <span class="slider__product-code">
                        Mã SP:
                        <span class="slider__product-code-text">PCZT006</span>
                    </span>
                </div>
                <div class="slider__product-name-price">
                    <h4 class="slider__product-name">
                        PC Gaming Zotac MEK ULTRA-S13060 i7-9700k/RAM 16GB/SSD 240GB/HDD
                        2TB/Wifi+BT/Win10
                    </h4>
                    <span class="slider__product-price">14.999.000đ</span>
                    <span class="slider__product-price-brick">26.000.000đ</span>
                </div>
            </div>
            <div class="slider__product-status-basket">
                <span class="slider__product-status"><i class="fas fa-check"></i>Còn hàng</span>
                <a href="#" class="slider__product-basket">
                    <img class="slider__product-basket-img" src="./assets/img/icon/cart.png"
                        alt="#">
                </a>
            </div>
        </div>
    </div>
    <div class="slider__product-item">
        <a href="#" class="slider__product-item-link">
            <img src="./assets/img/product/Sale/PC-1.jpg" alt="#"
                class="slider__product-item-img">
        </a>
        <div class="slider__product-info">
            <div class="slider__product-info-synthetic">
                <div class="slider__product-review-code">
                    <span class="slider__product-review">
                        <img class="slider__product-review-img"
                            src="./assets/img/icon/star_5.png" alt="#">
                    </span>
                    <span class="slider__product-code">
                        Mã SP:
                        <span class="slider__product-code-text">PCZT006</span>
                    </span>
                </div>
                <div class="slider__product-name-price">
                    <h4 class="slider__product-name">
                        PC Gaming Zotac MEK ULTRA-S13060 i7-9700k/RAM 16GB/SSD 240GB/HDD
                        2TB/Wifi+BT/Win10
                    </h4>
                    <span class="slider__product-price">14.999.000đ</span>
                    <span class="slider__product-price-brick">26.000.000đ</span>
                </div>
            </div>
            <div class="slider__product-status-basket">
                <span class="slider__product-status"><i class="fas fa-check"></i>Còn hàng</span>
                <a href="#" class="slider__product-basket">
                    <img class="slider__product-basket-img" src="./assets/img/icon/cart.png"
                        alt="#">
                </a>
            </div>
        </div>
    </div>
    <div class="slider__product-item">
        <a href="#" class="slider__product-item-link">
            <img src="./assets/img/product/Sale/PC-1.jpg" alt="#"
                class="slider__product-item-img">
        </a>
        <div class="slider__product-info">
            <div class="slider__product-info-synthetic">
                <div class="slider__product-review-code">
                    <span class="slider__product-review">
                        <img class="slider__product-review-img"
                            src="./assets/img/icon/star_5.png" alt="#">
                    </span>
                    <span class="slider__product-code">
                        Mã SP:
                        <span class="slider__product-code-text">PCZT006</span>
                    </span>
                </div>
                <div class="slider__product-name-price">
                    <h4 class="slider__product-name">
                        PC Gaming Zotac MEK ULTRA-S13060 i7-9700k/RAM 16GB/SSD 240GB/HDD
                        2TB/Wifi+BT/Win10
                    </h4>
                    <span class="slider__product-price">14.999.000đ</span>
                    <span class="slider__product-price-brick">26.000.000đ</span>
                </div>
            </div>
            <div class="slider__product-status-basket">
                <span class="slider__product-status"><i class="fas fa-check"></i>Còn hàng</span>
                <a href="#" class="slider__product-basket">
                    <img class="slider__product-basket-img" src="./assets/img/icon/cart.png"
                        alt="#">
                </a>
            </div>
        </div>
    </div>
    <div class="slider__product-item">
        <a href="#" class="slider__product-item-link">
            <img src="./assets/img/product/Sale/PC-1.jpg" alt="#"
                class="slider__product-item-img">
        </a>
        <div class="slider__product-info">
            <div class="slider__product-info-synthetic">
                <div class="slider__product-review-code">
                    <span class="slider__product-review">
                        <img class="slider__product-review-img"
                            src="./assets/img/icon/star_5.png" alt="#">
                    </span>
                    <span class="slider__product-code">
                        Mã SP:
                        <span class="slider__product-code-text">PCZT006</span>
                    </span>
                </div>
                <div class="slider__product-name-price">
                    <h4 class="slider__product-name">
                        PC Gaming Zotac MEK ULTRA-S13060 i7-9700k/RAM 16GB/SSD 240GB/HDD
                        2TB/Wifi+BT/Win10
                    </h4>
                    <span class="slider__product-price">14.999.000đ</span>
                    <span class="slider__product-price-brick">26.000.000đ</span>
                </div>
            </div>
            <div class="slider__product-status-basket">
                <span class="slider__product-status"><i class="fas fa-check"></i>Còn hàng</span>
                <a href="#" class="slider__product-basket">
                    <img class="slider__product-basket-img" src="./assets/img/icon/cart.png"
                        alt="#">
                </a>
            </div>
        </div>
    </div>
    <div class="slider__product-item">
        <a href="#" class="slider__product-item-link">
            <img src="./assets/img/product/Sale/PC-1.jpg" alt="#"
                class="slider__product-item-img">
        </a>
        <div class="slider__product-info">
            <div class="slider__product-info-synthetic">
                <div class="slider__product-review-code">
                    <span class="slider__product-review">
                        <img class="slider__product-review-img"
                            src="./assets/img/icon/star_5.png" alt="#">
                    </span>
                    <span class="slider__product-code">
                        Mã SP:
                        <span class="slider__product-code-text">PCZT006</span>
                    </span>
                </div>
                <div class="slider__product-name-price">
                    <h4 class="slider__product-name">
                        PC Gaming Zotac MEK ULTRA-S13060 i7-9700k/RAM 16GB/SSD 240GB/HDD
                        2TB/Wifi+BT/Win10
                    </h4>
                    <span class="slider__product-price">14.999.000đ</span>
                    <span class="slider__product-price-brick">26.000.000đ</span>
                </div>
            </div>
            <div class="slider__product-status-basket">
                <span class="slider__product-status"><i class="fas fa-check"></i>Còn hàng</span>
                <a href="#" class="slider__product-basket">
                    <img class="slider__product-basket-img" src="./assets/img/icon/cart.png"
                        alt="#">
                </a>
            </div>
        </div>
    </div>
    <div class="slider__product-item">
        <a href="#" class="slider__product-item-link">
            <img src="./assets/img/product/Sale/PC-1.jpg" alt="#"
                class="slider__product-item-img">
        </a>
        <div class="slider__product-info">
            <div class="slider__product-info-synthetic">
                <div class="slider__product-review-code">
                    <span class="slider__product-review">
                        <img class="slider__product-review-img"
                            src="./assets/img/icon/star_5.png" alt="#">
                    </span>
                    <span class="slider__product-code">
                        Mã SP:
                        <span class="slider__product-code-text">PCZT006</span>
                    </span>
                </div>
                <div class="slider__product-name-price">
                    <h4 class="slider__product-name">
                        PC Gaming Zotac MEK ULTRA-S13060 i7-9700k/RAM 16GB/SSD 240GB/HDD
                        2TB/Wifi+BT/Win10
                    </h4>
                    <span class="slider__product-price">14.999.000đ</span>
                    <span class="slider__product-price-brick">26.000.000đ</span>
                </div>
            </div>
            <div class="slider__product-status-basket">
                <span class="slider__product-status"><i class="fas fa-check"></i>Còn hàng</span>
                <a href="#" class="slider__product-basket">
                    <img class="slider__product-basket-img" src="./assets/img/icon/cart.png"
                        alt="#">
                </a>
            </div>
        </div>
    </div>
    <div class="slider__product-item">
        <a href="#" class="slider__product-item-link">
            <img src="./assets/img/product/Sale/PC-1.jpg" alt="#"
                class="slider__product-item-img">
        </a>
        <div class="slider__product-info">
            <div class="slider__product-info-synthetic">
                <div class="slider__product-review-code">
                    <span class="slider__product-review">
                        <img class="slider__product-review-img"
                            src="./assets/img/icon/star_5.png" alt="#">
                    </span>
                    <span class="slider__product-code">
                        Mã SP:
                        <span class="slider__product-code-text">PCZT006</span>
                    </span>
                </div>
                <div class="slider__product-name-price">
                    <h4 class="slider__product-name">
                        PC Gaming Zotac MEK ULTRA-S13060 i7-9700k/RAM 16GB/SSD 240GB/HDD
                        2TB/Wifi+BT/Win10
                    </h4>
                    <span class="slider__product-price">14.999.000đ</span>
                    <span class="slider__product-price-brick">26.000.000đ</span>
                </div>
            </div>
            <div class="slider__product-status-basket">
                <span class="slider__product-status"><i class="fas fa-check"></i>Còn hàng</span>
                <a href="#" class="slider__product-basket">
                    <img class="slider__product-basket-img" src="./assets/img/icon/cart.png"
                        alt="#">
                </a>
            </div>
        </div>
    </div>
    <!-- <a href="#" class="slider__product-item"><img src="./assets/img/product/Sale/TN11.jpg" alt="#" class="slider__product-item-img"></a>
    <a href="#" class="slider__product-item"><img src="./assets/img/product/Sale/LT-10.jpg" alt="#" class="slider__product-item-img"></a>
    <a href="#" class="slider__product-item"><img src="./assets/img/product/Sale/Ram1.jpg" alt="#" class="slider__product-item-img"></a>
    <a href="#" class="slider__product-item"><img src="./assets/img/product/Sale/MH-10.jpg" alt="#" class="slider__product-item-img"></a>
    <a href="#" class="slider__product-item"><img src="./assets/img/product/Sale/PC-5.jpg" alt="#" class="slider__product-item-img"></a>
    <a href="#" class="slider__product-item"><img src="./assets/img/product/Sale/C3.jpg" alt="#" class="slider__product-item-img"></a>
    <a href="#" class="slider__product-item"><img src="./assets/img/product/Sale/Mic1.jpg" alt="#" class="slider__product-item-img"></a>
    <a href="#" class="slider__product-item"><img src="./assets/img/product/Sale/card1.jpg" alt="#" class="slider__product-item-img"></a>
    <a href="#" class="slider__product-item"><img src="./assets/img/product/Sale/radiator_fan1.jpg" alt="#" class="slider__product-item-img"></a>
    <a href="#" class="slider__product-item"><img src="./assets/img/product/Sale/CPU1.jpg" alt="#" class="slider__product-item-img"></a>
    <a href="#" class="slider__product-item"><img src="./assets/img/product/Sale/Ram2.jpg" alt="#" class="slider__product-item-img"></a>
    <a href="#" class="slider__product-item"><img src="./assets/img/product/Sale/radiator_fan2.jpg" alt="#" class="slider__product-item-img"></a>
    <a href="#" class="slider__product-item"><img src="./assets/img/product/TN15.jpg" alt="#" class="slider__product-item-img"></a>
    <a href="#" class="slider__product-item"><img src="./assets/img/product/Sale/LT-2.jpg" alt="#" class="slider__product-item-img"></a> -->
</div>`
    slider__product = document.querySelectorAll(".slider__product-to-slide");
}
function Dom_slide4() {
    Dom_slide.innerHTML =
        `<div class="slider__product-to-slide"  location="0">
    <div class="slider__product-item">
        <a href="#" class="slider__product-item-link">
            <img src="./assets/img/product/Sale/radiator_fan2.jpg" alt="#"
                class="slider__product-item-img">
        </a>
        <div class="slider__product-info">
            <div class="slider__product-info-synthetic">
                <div class="slider__product-review-code">
                    <span class="slider__product-review">
                        <img class="slider__product-review-img"
                            src="./assets/img/icon/star_5.png" alt="#">
                    </span>
                    <span class="slider__product-code">
                        Mã SP:
                        <span class="slider__product-code-text">CLML016</span>
                    </span>
                </div>
                <div class="slider__product-name-price">
                    <h4 class="slider__product-name">
                        Tản nhiệt nước AIO Shark Solution 240 SSTC-CPU-WC240ARGB
                    </h4>
                    <span class="slider__product-price">1.399.999đ</span>
                    <span class="slider__product-price-brick">1.400.000đ</span>
                </div>
            </div>
            <div class="slider__product-status-basket">
                <span class="slider__product-status text-main"><i class=" text-main fa fa-phone"></i></i>Liên hệ</span>
                <a href="#" class="slider__product-basket">
                    <img class="slider__product-basket-img" src="./assets/img/icon/cart.png"
                        alt="#">
                </a>
            </div>
        </div>
    </div>
    <div class="slider__product-item">
        <a href="#" class="slider__product-item-link">
            <img src="./assets/img/product/250_1396_m__n_h__nh_asus_proart_pa248qv_24inch.jpg" alt="#"
                class="slider__product-item-img">
        </a>
        <div class="slider__product-info">
            <div class="slider__product-info-synthetic">
                <div class="slider__product-review-code">
                    <span class="slider__product-review">
                        <img class="slider__product-review-img"
                            src="./assets/img/icon/star_5.png" alt="#">
                    </span>
                    <span class="slider__product-code">
                        Mã SP:
                        <span class="slider__product-code-text"> MOAS024</span>
                    </span>
                </div>
                <div class="slider__product-name-price">
                    <h4 class="slider__product-name">
                        Màn hình Asus ProArt PA248QV 24inch WUXGA/75Hz/Flat
                    </h4>
                    <span class="slider__product-price">5.990.000đ</span>
                    <span class="slider__product-price-brick">6.000.000đ</span>
                </div>
            </div>
            <div class="slider__product-status-basket">
                <span class="slider__product-status"><i class="fas fa-check"></i>Còn hàng</span>
                <a href="#" class="slider__product-basket">
                    <img class="slider__product-basket-img" src="./assets/img/icon/cart.png"
                        alt="#">
                </a>
            </div>
        </div>
    </div>
    <div class="slider__product-item">
        <a href="#" class="slider__product-item-link">
            <img src="./assets/img/product/250_7014_m__n_h__nh_asus_vg279q.jpg" alt="#"
                class="slider__product-item-img">
        </a>
        <div class="slider__product-info">
            <div class="slider__product-info-synthetic">
                <div class="slider__product-review-code">
                    <span class="slider__product-review">
                        <img class="slider__product-review-img"
                            src="./assets/img/icon/star_5.png" alt="#">
                    </span>
                    <span class="slider__product-code">
                        Mã SP:
                        <span class="slider__product-code-text">MOAS027</span>
                    </span>
                </div>
                <div class="slider__product-name-price">
                    <h4 class="slider__product-name">
                        Màn hình Asus VG279Q 27inch Full HD/144Hz/Flat
                    </h4>
                    <span class="slider__product-price">6.850.000đ</span>
                    <span class="slider__product-price-brick">7.499.000đ</span>
                </div>
            </div>
            <div class="slider__product-status-basket">
                <span class="slider__product-status"><i class="fas fa-check"></i>Còn hàng</span>
                <a href="#" class="slider__product-basket">
                    <img class="slider__product-basket-img" src="./assets/img/icon/cart.png"
                        alt="#">
                </a>
            </div>
        </div>
    </div>
    <div class="slider__product-item">
        <a href="#" class="slider__product-item-link">
            <img src="./assets/img/product/250_4869_m__n_h__nh_asus_vg278qr_27inch.jpg" alt="#"
                class="slider__product-item-img">
        </a>
        <div class="slider__product-info">
            <div class="slider__product-info-synthetic">
                <div class="slider__product-review-code">
                    <span class="slider__product-review">
                        <img class="slider__product-review-img"
                            src="./assets/img/icon/star_5.png" alt="#">
                    </span>
                    <span class="slider__product-code">
                        Mã SP:
                        <span class="slider__product-code-text">MOAS021</span>
                    </span>
                </div>
                <div class="slider__product-name-price">
                    <h4 class="slider__product-name">
                        Màn hình Asus VG278QR 27inch Full HD/165Hz/Flat
                    </h4>
                    <span class="slider__product-price">8.180.000đ</span>
                    <span class="slider__product-price-brick">9.299.000đ</span>
                </div>
            </div>
            <div class="slider__product-status-basket">
                <span class="slider__product-status"><i class="fas fa-check"></i>Còn hàng</span>
                <a href="#" class="slider__product-basket">
                    <img class="slider__product-basket-img" src="./assets/img/icon/cart.png"
                        alt="#">
                </a>
            </div>
        </div>
    </div>
    <div class="slider__product-item">
        <a href="#" class="slider__product-item-link">
            <img src="./assets/img/product/Sale/PC-1.jpg" alt="#"
                class="slider__product-item-img">
        </a>
        <div class="slider__product-info">
            <div class="slider__product-info-synthetic">
                <div class="slider__product-review-code">
                    <span class="slider__product-review">
                        <img class="slider__product-review-img"
                            src="./assets/img/icon/star_5.png" alt="#">
                    </span>
                    <span class="slider__product-code">
                        Mã SP:
                        <span class="slider__product-code-text">PCZT006</span>
                    </span>
                </div>
                <div class="slider__product-name-price">
                    <h4 class="slider__product-name">
                        PC Gaming Zotac MEK ULTRA-S13060 i7-9700k/RAM 16GB/SSD 240GB/HDD
                        2TB/Wifi+BT/Win10
                    </h4>
                    <span class="slider__product-price">14.999.000đ</span>
                    <span class="slider__product-price-brick">26.000.000đ</span>
                </div>
            </div>
            <div class="slider__product-status-basket">
                <span class="slider__product-status"><i class="fas fa-check"></i>Còn hàng</span>
                <a href="#" class="slider__product-basket">
                    <img class="slider__product-basket-img" src="./assets/img/icon/cart.png"
                        alt="#">
                </a>
            </div>
        </div>
    </div>
    <div class="slider__product-item">
        <a href="#" class="slider__product-item-link">
            <img src="./assets/img/product/Sale/PC-1.jpg" alt="#"
                class="slider__product-item-img">
        </a>
        <div class="slider__product-info">
            <div class="slider__product-info-synthetic">
                <div class="slider__product-review-code">
                    <span class="slider__product-review">
                        <img class="slider__product-review-img"
                            src="./assets/img/icon/star_5.png" alt="#">
                    </span>
                    <span class="slider__product-code">
                        Mã SP:
                        <span class="slider__product-code-text">VGLT014</span>
                    </span>
                </div>
                <div class="slider__product-name-price">
                    <h4 class="slider__product-name">
                        Card màn hình Leadtek Quadro P2200
                    </h4>
                    <span class="slider__product-price">10.699.000đ</span>
                    <span class="slider__product-price-brick hide">26.000.000đ</span>
                </div>
            </div>
            <div class="slider__product-status-basket">
                <span class="slider__product-status"><i class="fas fa-check"></i>Còn hàng</span>
                <a href="#" class="slider__product-basket">
                    <img class="slider__product-basket-img" src="./assets/img/icon/cart.png"
                        alt="#">
                </a>
            </div>
        </div>
    </div>
    <div class="slider__product-item">
        <a href="#" class="slider__product-item-link">
            <img src="./assets/img/product/Sale/PC-1.jpg" alt="#"
                class="slider__product-item-img">
        </a>
        <div class="slider__product-info">
            <div class="slider__product-info-synthetic">
                <div class="slider__product-review-code">
                    <span class="slider__product-review">
                        <img class="slider__product-review-img"
                            src="./assets/img/icon/star_5.png" alt="#">
                    </span>
                    <span class="slider__product-code">
                        Mã SP:
                        <span class="slider__product-code-text">PCZT006</span>
                    </span>
                </div>
                <div class="slider__product-name-price">
                    <h4 class="slider__product-name">
                        PC Gaming Zotac MEK ULTRA-S13060 i7-9700k/RAM 16GB/SSD 240GB/HDD
                        2TB/Wifi+BT/Win10
                    </h4>
                    <span class="slider__product-price">14.999.000đ</span>
                    <span class="slider__product-price-brick">26.000.000đ</span>
                </div>
            </div>
            <div class="slider__product-status-basket">
                <span class="slider__product-status"><i class="fas fa-check"></i>Còn hàng</span>
                <a href="#" class="slider__product-basket">
                    <img class="slider__product-basket-img" src="./assets/img/icon/cart.png"
                        alt="#">
                </a>
            </div>
        </div>
    </div>
    <div class="slider__product-item">
        <a href="#" class="slider__product-item-link">
            <img src="./assets/img/product/Sale/PC-1.jpg" alt="#"
                class="slider__product-item-img">
        </a>
        <div class="slider__product-info">
            <div class="slider__product-info-synthetic">
                <div class="slider__product-review-code">
                    <span class="slider__product-review">
                        <img class="slider__product-review-img"
                            src="./assets/img/icon/star_5.png" alt="#">
                    </span>
                    <span class="slider__product-code">
                        Mã SP:
                        <span class="slider__product-code-text">PCZT006</span>
                    </span>
                </div>
                <div class="slider__product-name-price">
                    <h4 class="slider__product-name">
                        PC Gaming Zotac MEK ULTRA-S13060 i7-9700k/RAM 16GB/SSD 240GB/HDD
                        2TB/Wifi+BT/Win10
                    </h4>
                    <span class="slider__product-price">14.999.000đ</span>
                    <span class="slider__product-price-brick">26.000.000đ</span>
                </div>
            </div>
            <div class="slider__product-status-basket">
                <span class="slider__product-status"><i class="fas fa-check"></i>Còn hàng</span>
                <a href="#" class="slider__product-basket">
                    <img class="slider__product-basket-img" src="./assets/img/icon/cart.png"
                        alt="#">
                </a>
            </div>
        </div>
    </div>
    <div class="slider__product-item">
        <a href="#" class="slider__product-item-link">
            <img src="./assets/img/product/Sale/PC-1.jpg" alt="#"
                class="slider__product-item-img">
        </a>
        <div class="slider__product-info">
            <div class="slider__product-info-synthetic">
                <div class="slider__product-review-code">
                    <span class="slider__product-review">
                        <img class="slider__product-review-img"
                            src="./assets/img/icon/star_5.png" alt="#">
                    </span>
                    <span class="slider__product-code">
                        Mã SP:
                        <span class="slider__product-code-text">PCZT006</span>
                    </span>
                </div>
                <div class="slider__product-name-price">
                    <h4 class="slider__product-name">
                        PC Gaming Zotac MEK ULTRA-S13060 i7-9700k/RAM 16GB/SSD 240GB/HDD
                        2TB/Wifi+BT/Win10
                    </h4>
                    <span class="slider__product-price">14.999.000đ</span>
                    <span class="slider__product-price-brick">26.000.000đ</span>
                </div>
            </div>
            <div class="slider__product-status-basket">
                <span class="slider__product-status"><i class="fas fa-check"></i>Còn hàng</span>
                <a href="#" class="slider__product-basket">
                    <img class="slider__product-basket-img" src="./assets/img/icon/cart.png"
                        alt="#">
                </a>
            </div>
        </div>
    </div>
    <div class="slider__product-item">
        <a href="#" class="slider__product-item-link">
            <img src="./assets/img/product/Sale/PC-1.jpg" alt="#"
                class="slider__product-item-img">
        </a>
        <div class="slider__product-info">
            <div class="slider__product-info-synthetic">
                <div class="slider__product-review-code">
                    <span class="slider__product-review">
                        <img class="slider__product-review-img"
                            src="./assets/img/icon/star_5.png" alt="#">
                    </span>
                    <span class="slider__product-code">
                        Mã SP:
                        <span class="slider__product-code-text">PCZT006</span>
                    </span>
                </div>
                <div class="slider__product-name-price">
                    <h4 class="slider__product-name">
                        PC Gaming Zotac MEK ULTRA-S13060 i7-9700k/RAM 16GB/SSD 240GB/HDD
                        2TB/Wifi+BT/Win10
                    </h4>
                    <span class="slider__product-price">14.999.000đ</span>
                    <span class="slider__product-price-brick">26.000.000đ</span>
                </div>
            </div>
            <div class="slider__product-status-basket">
                <span class="slider__product-status"><i class="fas fa-check"></i>Còn hàng</span>
                <a href="#" class="slider__product-basket">
                    <img class="slider__product-basket-img" src="./assets/img/icon/cart.png"
                        alt="#">
                </a>
            </div>
        </div>
    </div>
    <div class="slider__product-item">
        <a href="#" class="slider__product-item-link">
            <img src="./assets/img/product/Sale/PC-1.jpg" alt="#"
                class="slider__product-item-img">
        </a>
        <div class="slider__product-info">
            <div class="slider__product-info-synthetic">
                <div class="slider__product-review-code">
                    <span class="slider__product-review">
                        <img class="slider__product-review-img"
                            src="./assets/img/icon/star_5.png" alt="#">
                    </span>
                    <span class="slider__product-code">
                        Mã SP:
                        <span class="slider__product-code-text">PCZT006</span>
                    </span>
                </div>
                <div class="slider__product-name-price">
                    <h4 class="slider__product-name">
                        PC Gaming Zotac MEK ULTRA-S13060 i7-9700k/RAM 16GB/SSD 240GB/HDD
                        2TB/Wifi+BT/Win10
                    </h4>
                    <span class="slider__product-price">14.999.000đ</span>
                    <span class="slider__product-price-brick">26.000.000đ</span>
                </div>
            </div>
            <div class="slider__product-status-basket">
                <span class="slider__product-status"><i class="fas fa-check"></i>Còn hàng</span>
                <a href="#" class="slider__product-basket">
                    <img class="slider__product-basket-img" src="./assets/img/icon/cart.png"
                        alt="#">
                </a>
            </div>
        </div>
    </div>
    <div class="slider__product-item">
        <a href="#" class="slider__product-item-link">
            <img src="./assets/img/product/Sale/PC-1.jpg" alt="#"
                class="slider__product-item-img">
        </a>
        <div class="slider__product-info">
            <div class="slider__product-info-synthetic">
                <div class="slider__product-review-code">
                    <span class="slider__product-review">
                        <img class="slider__product-review-img"
                            src="./assets/img/icon/star_5.png" alt="#">
                    </span>
                    <span class="slider__product-code">
                        Mã SP:
                        <span class="slider__product-code-text">PCZT006</span>
                    </span>
                </div>
                <div class="slider__product-name-price">
                    <h4 class="slider__product-name">
                        PC Gaming Zotac MEK ULTRA-S13060 i7-9700k/RAM 16GB/SSD 240GB/HDD
                        2TB/Wifi+BT/Win10
                    </h4>
                    <span class="slider__product-price">14.999.000đ</span>
                    <span class="slider__product-price-brick">26.000.000đ</span>
                </div>
            </div>
            <div class="slider__product-status-basket">
                <span class="slider__product-status"><i class="fas fa-check"></i>Còn hàng</span>
                <a href="#" class="slider__product-basket">
                    <img class="slider__product-basket-img" src="./assets/img/icon/cart.png"
                        alt="#">
                </a>
            </div>
        </div>
    </div>
    <div class="slider__product-item">
        <a href="#" class="slider__product-item-link">
            <img src="./assets/img/product/Sale/PC-1.jpg" alt="#"
                class="slider__product-item-img">
        </a>
        <div class="slider__product-info">
            <div class="slider__product-info-synthetic">
                <div class="slider__product-review-code">
                    <span class="slider__product-review">
                        <img class="slider__product-review-img"
                            src="./assets/img/icon/star_5.png" alt="#">
                    </span>
                    <span class="slider__product-code">
                        Mã SP:
                        <span class="slider__product-code-text">PCZT006</span>
                    </span>
                </div>
                <div class="slider__product-name-price">
                    <h4 class="slider__product-name">
                        PC Gaming Zotac MEK ULTRA-S13060 i7-9700k/RAM 16GB/SSD 240GB/HDD
                        2TB/Wifi+BT/Win10
                    </h4>
                    <span class="slider__product-price">14.999.000đ</span>
                    <span class="slider__product-price-brick">26.000.000đ</span>
                </div>
            </div>
            <div class="slider__product-status-basket">
                <span class="slider__product-status"><i class="fas fa-check"></i>Còn hàng</span>
                <a href="#" class="slider__product-basket">
                    <img class="slider__product-basket-img" src="./assets/img/icon/cart.png"
                        alt="#">
                </a>
            </div>
        </div>
    </div>
    <div class="slider__product-item">
        <a href="#" class="slider__product-item-link">
            <img src="./assets/img/product/Sale/PC-1.jpg" alt="#"
                class="slider__product-item-img">
        </a>
        <div class="slider__product-info">
            <div class="slider__product-info-synthetic">
                <div class="slider__product-review-code">
                    <span class="slider__product-review">
                        <img class="slider__product-review-img"
                            src="./assets/img/icon/star_5.png" alt="#">
                    </span>
                    <span class="slider__product-code">
                        Mã SP:
                        <span class="slider__product-code-text">PCZT006</span>
                    </span>
                </div>
                <div class="slider__product-name-price">
                    <h4 class="slider__product-name">
                        PC Gaming Zotac MEK ULTRA-S13060 i7-9700k/RAM 16GB/SSD 240GB/HDD
                        2TB/Wifi+BT/Win10
                    </h4>
                    <span class="slider__product-price">14.999.000đ</span>
                    <span class="slider__product-price-brick">26.000.000đ</span>
                </div>
            </div>
            <div class="slider__product-status-basket">
                <span class="slider__product-status"><i class="fas fa-check"></i>Còn hàng</span>
                <a href="#" class="slider__product-basket">
                    <img class="slider__product-basket-img" src="./assets/img/icon/cart.png"
                        alt="#">
                </a>
            </div>
        </div>
    </div>
    <div class="slider__product-item">
        <a href="#" class="slider__product-item-link">
            <img src="./assets/img/product/Sale/PC-1.jpg" alt="#"
                class="slider__product-item-img">
        </a>
        <div class="slider__product-info">
            <div class="slider__product-info-synthetic">
                <div class="slider__product-review-code">
                    <span class="slider__product-review">
                        <img class="slider__product-review-img"
                            src="./assets/img/icon/star_5.png" alt="#">
                    </span>
                    <span class="slider__product-code">
                        Mã SP:
                        <span class="slider__product-code-text">PCZT006</span>
                    </span>
                </div>
                <div class="slider__product-name-price">
                    <h4 class="slider__product-name">
                        PC Gaming Zotac MEK ULTRA-S13060 i7-9700k/RAM 16GB/SSD 240GB/HDD
                        2TB/Wifi+BT/Win10
                    </h4>
                    <span class="slider__product-price">14.999.000đ</span>
                    <span class="slider__product-price-brick">26.000.000đ</span>
                </div>
            </div>
            <div class="slider__product-status-basket">
                <span class="slider__product-status"><i class="fas fa-check"></i>Còn hàng</span>
                <a href="#" class="slider__product-basket">
                    <img class="slider__product-basket-img" src="./assets/img/icon/cart.png"
                        alt="#">
                </a>
            </div>
        </div>
    </div>
    <div class="slider__product-item">
        <a href="#" class="slider__product-item-link">
            <img src="./assets/img/product/Sale/PC-1.jpg" alt="#"
                class="slider__product-item-img">
        </a>
        <div class="slider__product-info">
            <div class="slider__product-info-synthetic">
                <div class="slider__product-review-code">
                    <span class="slider__product-review">
                        <img class="slider__product-review-img"
                            src="./assets/img/icon/star_5.png" alt="#">
                    </span>
                    <span class="slider__product-code">
                        Mã SP:
                        <span class="slider__product-code-text">PCZT006</span>
                    </span>
                </div>
                <div class="slider__product-name-price">
                    <h4 class="slider__product-name">
                        PC Gaming Zotac MEK ULTRA-S13060 i7-9700k/RAM 16GB/SSD 240GB/HDD
                        2TB/Wifi+BT/Win10
                    </h4>
                    <span class="slider__product-price">14.999.000đ</span>
                    <span class="slider__product-price-brick">26.000.000đ</span>
                </div>
            </div>
            <div class="slider__product-status-basket">
                <span class="slider__product-status"><i class="fas fa-check"></i>Còn hàng</span>
                <a href="#" class="slider__product-basket">
                    <img class="slider__product-basket-img" src="./assets/img/icon/cart.png"
                        alt="#">
                </a>
            </div>
        </div>
    </div>
    <div class="slider__product-item">
        <a href="#" class="slider__product-item-link">
            <img src="./assets/img/product/Sale/PC-1.jpg" alt="#"
                class="slider__product-item-img">
        </a>
        <div class="slider__product-info">
            <div class="slider__product-info-synthetic">
                <div class="slider__product-review-code">
                    <span class="slider__product-review">
                        <img class="slider__product-review-img"
                            src="./assets/img/icon/star_5.png" alt="#">
                    </span>
                    <span class="slider__product-code">
                        Mã SP:
                        <span class="slider__product-code-text">PCZT006</span>
                    </span>
                </div>
                <div class="slider__product-name-price">
                    <h4 class="slider__product-name">
                        PC Gaming Zotac MEK ULTRA-S13060 i7-9700k/RAM 16GB/SSD 240GB/HDD
                        2TB/Wifi+BT/Win10
                    </h4>
                    <span class="slider__product-price">14.999.000đ</span>
                    <span class="slider__product-price-brick">26.000.000đ</span>
                </div>
            </div>
            <div class="slider__product-status-basket">
                <span class="slider__product-status"><i class="fas fa-check"></i>Còn hàng</span>
                <a href="#" class="slider__product-basket">
                    <img class="slider__product-basket-img" src="./assets/img/icon/cart.png"
                        alt="#">
                </a>
            </div>
        </div>
    </div>
    <div class="slider__product-item">
        <a href="#" class="slider__product-item-link">
            <img src="./assets/img/product/Sale/PC-1.jpg" alt="#"
                class="slider__product-item-img">
        </a>
        <div class="slider__product-info">
            <div class="slider__product-info-synthetic">
                <div class="slider__product-review-code">
                    <span class="slider__product-review">
                        <img class="slider__product-review-img"
                            src="./assets/img/icon/star_5.png" alt="#">
                    </span>
                    <span class="slider__product-code">
                        Mã SP:
                        <span class="slider__product-code-text">PCZT006</span>
                    </span>
                </div>
                <div class="slider__product-name-price">
                    <h4 class="slider__product-name">
                        PC Gaming Zotac MEK ULTRA-S13060 i7-9700k/RAM 16GB/SSD 240GB/HDD
                        2TB/Wifi+BT/Win10
                    </h4>
                    <span class="slider__product-price">14.999.000đ</span>
                    <span class="slider__product-price-brick">26.000.000đ</span>
                </div>
            </div>
            <div class="slider__product-status-basket">
                <span class="slider__product-status"><i class="fas fa-check"></i>Còn hàng</span>
                <a href="#" class="slider__product-basket">
                    <img class="slider__product-basket-img" src="./assets/img/icon/cart.png"
                        alt="#">
                </a>
            </div>
        </div>
    </div>
    <div class="slider__product-item">
        <a href="#" class="slider__product-item-link">
            <img src="./assets/img/product/Sale/PC-1.jpg" alt="#"
                class="slider__product-item-img">
        </a>
        <div class="slider__product-info">
            <div class="slider__product-info-synthetic">
                <div class="slider__product-review-code">
                    <span class="slider__product-review">
                        <img class="slider__product-review-img"
                            src="./assets/img/icon/star_5.png" alt="#">
                    </span>
                    <span class="slider__product-code">
                        Mã SP:
                        <span class="slider__product-code-text">PCZT006</span>
                    </span>
                </div>
                <div class="slider__product-name-price">
                    <h4 class="slider__product-name">
                        PC Gaming Zotac MEK ULTRA-S13060 i7-9700k/RAM 16GB/SSD 240GB/HDD
                        2TB/Wifi+BT/Win10
                    </h4>
                    <span class="slider__product-price">14.999.000đ</span>
                    <span class="slider__product-price-brick">26.000.000đ</span>
                </div>
            </div>
            <div class="slider__product-status-basket">
                <span class="slider__product-status"><i class="fas fa-check"></i>Còn hàng</span>
                <a href="#" class="slider__product-basket">
                    <img class="slider__product-basket-img" src="./assets/img/icon/cart.png"
                        alt="#">
                </a>
            </div>
        </div>
    </div>
    <div class="slider__product-item">
        <a href="#" class="slider__product-item-link">
            <img src="./assets/img/product/Sale/PC-1.jpg" alt="#"
                class="slider__product-item-img">
        </a>
        <div class="slider__product-info">
            <div class="slider__product-info-synthetic">
                <div class="slider__product-review-code">
                    <span class="slider__product-review">
                        <img class="slider__product-review-img"
                            src="./assets/img/icon/star_5.png" alt="#">
                    </span>
                    <span class="slider__product-code">
                        Mã SP:
                        <span class="slider__product-code-text">PCZT006</span>
                    </span>
                </div>
                <div class="slider__product-name-price">
                    <h4 class="slider__product-name">
                        PC Gaming Zotac MEK ULTRA-S13060 i7-9700k/RAM 16GB/SSD 240GB/HDD
                        2TB/Wifi+BT/Win10
                    </h4>
                    <span class="slider__product-price">14.999.000đ</span>
                    <span class="slider__product-price-brick">26.000.000đ</span>
                </div>
            </div>
            <div class="slider__product-status-basket">
                <span class="slider__product-status"><i class="fas fa-check"></i>Còn hàng</span>
                <a href="#" class="slider__product-basket">
                    <img class="slider__product-basket-img" src="./assets/img/icon/cart.png"
                        alt="#">
                </a>
            </div>
        </div>
    </div>
    <div class="slider__product-item">
        <a href="#" class="slider__product-item-link">
            <img src="./assets/img/product/Sale/PC-1.jpg" alt="#"
                class="slider__product-item-img">
        </a>
        <div class="slider__product-info">
            <div class="slider__product-info-synthetic">
                <div class="slider__product-review-code">
                    <span class="slider__product-review">
                        <img class="slider__product-review-img"
                            src="./assets/img/icon/star_5.png" alt="#">
                    </span>
                    <span class="slider__product-code">
                        Mã SP:
                        <span class="slider__product-code-text">PCZT006</span>
                    </span>
                </div>
                <div class="slider__product-name-price">
                    <h4 class="slider__product-name">
                        PC Gaming Zotac MEK ULTRA-S13060 i7-9700k/RAM 16GB/SSD 240GB/HDD
                        2TB/Wifi+BT/Win10
                    </h4>
                    <span class="slider__product-price">14.999.000đ</span>
                    <span class="slider__product-price-brick">26.000.000đ</span>
                </div>
            </div>
            <div class="slider__product-status-basket">
                <span class="slider__product-status"><i class="fas fa-check"></i>Còn hàng</span>
                <a href="#" class="slider__product-basket">
                    <img class="slider__product-basket-img" src="./assets/img/icon/cart.png"
                        alt="#">
                </a>
            </div>
        </div>
    </div>
    <!-- <a href="#" class="slider__product-item"><img src="./assets/img/product/Sale/TN11.jpg" alt="#" class="slider__product-item-img"></a>
    <a href="#" class="slider__product-item"><img src="./assets/img/product/Sale/LT-10.jpg" alt="#" class="slider__product-item-img"></a>
    <a href="#" class="slider__product-item"><img src="./assets/img/product/Sale/Ram1.jpg" alt="#" class="slider__product-item-img"></a>
    <a href="#" class="slider__product-item"><img src="./assets/img/product/Sale/MH-10.jpg" alt="#" class="slider__product-item-img"></a>
    <a href="#" class="slider__product-item"><img src="./assets/img/product/Sale/PC-5.jpg" alt="#" class="slider__product-item-img"></a>
    <a href="#" class="slider__product-item"><img src="./assets/img/product/Sale/C3.jpg" alt="#" class="slider__product-item-img"></a>
    <a href="#" class="slider__product-item"><img src="./assets/img/product/Sale/Mic1.jpg" alt="#" class="slider__product-item-img"></a>
    <a href="#" class="slider__product-item"><img src="./assets/img/product/Sale/card1.jpg" alt="#" class="slider__product-item-img"></a>
    <a href="#" class="slider__product-item"><img src="./assets/img/product/Sale/radiator_fan1.jpg" alt="#" class="slider__product-item-img"></a>
    <a href="#" class="slider__product-item"><img src="./assets/img/product/Sale/CPU1.jpg" alt="#" class="slider__product-item-img"></a>
    <a href="#" class="slider__product-item"><img src="./assets/img/product/Sale/Ram2.jpg" alt="#" class="slider__product-item-img"></a>
    <a href="#" class="slider__product-item"><img src="./assets/img/product/Sale/radiator_fan2.jpg" alt="#" class="slider__product-item-img"></a>
    <a href="#" class="slider__product-item"><img src="./assets/img/product/TN15.jpg" alt="#" class="slider__product-item-img"></a>
    <a href="#" class="slider__product-item"><img src="./assets/img/product/Sale/LT-2.jpg" alt="#" class="slider__product-item-img"></a> -->
</div>`
    slider__product = document.querySelectorAll(".slider__product-to-slide");
}
function Dom_slide5() {
    Dom_slide.innerHTML =
        `<div class="slider__product-to-slide" location="0">
    <div class="slider__product-item">
        <a href="#" class="slider__product-item-link">
            <img src="./assets/img/product/Sale/radiator_fan2.jpg" alt="#"
                class="slider__product-item-img">
        </a>
        <div class="slider__product-info">
            <div class="slider__product-info-synthetic">
                <div class="slider__product-review-code">
                    <span class="slider__product-review">
                        <img class="slider__product-review-img"
                            src="./assets/img/icon/star_5.png" alt="#">
                    </span>
                    <span class="slider__product-code">
                        Mã SP:
                        <span class="slider__product-code-text">CLML016</span>
                    </span>
                </div>
                <div class="slider__product-name-price">
                    <h4 class="slider__product-name">
                        Tản nhiệt nước AIO Shark Solution 240 SSTC-CPU-WC240ARGB
                    </h4>
                    <span class="slider__product-price">1.399.999đ</span>
                    <span class="slider__product-price-brick">1.400.000đ</span>
                </div>
            </div>
            <div class="slider__product-status-basket">
                <span class="slider__product-status text-main"><i class=" text-main fa fa-phone"></i></i>Liên hệ</span>
                <a href="#" class="slider__product-basket">
                    <img class="slider__product-basket-img" src="./assets/img/icon/cart.png"
                        alt="#">
                </a>
            </div>
        </div>
    </div>
    <div class="slider__product-item">
        <a href="#" class="slider__product-item-link">
            <img src="./assets/img/product/250_1396_m__n_h__nh_asus_proart_pa248qv_24inch.jpg" alt="#"
                class="slider__product-item-img">
        </a>
        <div class="slider__product-info">
            <div class="slider__product-info-synthetic">
                <div class="slider__product-review-code">
                    <span class="slider__product-review">
                        <img class="slider__product-review-img"
                            src="./assets/img/icon/star_5.png" alt="#">
                    </span>
                    <span class="slider__product-code">
                        Mã SP:
                        <span class="slider__product-code-text"> MOAS024</span>
                    </span>
                </div>
                <div class="slider__product-name-price">
                    <h4 class="slider__product-name">
                        Màn hình Asus ProArt PA248QV 24inch WUXGA/75Hz/Flat
                    </h4>
                    <span class="slider__product-price">5.990.000đ</span>
                    <span class="slider__product-price-brick">6.000.000đ</span>
                </div>
            </div>
            <div class="slider__product-status-basket">
                <span class="slider__product-status"><i class="fas fa-check"></i>Còn hàng</span>
                <a href="#" class="slider__product-basket">
                    <img class="slider__product-basket-img" src="./assets/img/icon/cart.png"
                        alt="#">
                </a>
            </div>
        </div>
    </div>
    <div class="slider__product-item">
        <a href="#" class="slider__product-item-link">
            <img src="./assets/img/product/250_7014_m__n_h__nh_asus_vg279q.jpg" alt="#"
                class="slider__product-item-img">
        </a>
        <div class="slider__product-info">
            <div class="slider__product-info-synthetic">
                <div class="slider__product-review-code">
                    <span class="slider__product-review">
                        <img class="slider__product-review-img"
                            src="./assets/img/icon/star_5.png" alt="#">
                    </span>
                    <span class="slider__product-code">
                        Mã SP:
                        <span class="slider__product-code-text">MOAS027</span>
                    </span>
                </div>
                <div class="slider__product-name-price">
                    <h4 class="slider__product-name">
                        Màn hình Asus VG279Q 27inch Full HD/144Hz/Flat
                    </h4>
                    <span class="slider__product-price">6.850.000đ</span>
                    <span class="slider__product-price-brick">7.499.000đ</span>
                </div>
            </div>
            <div class="slider__product-status-basket">
                <span class="slider__product-status"><i class="fas fa-check"></i>Còn hàng</span>
                <a href="#" class="slider__product-basket">
                    <img class="slider__product-basket-img" src="./assets/img/icon/cart.png"
                        alt="#">
                </a>
            </div>
        </div>
    </div>
    <div class="slider__product-item">
        <a href="#" class="slider__product-item-link">
            <img src="./assets/img/product/250_4869_m__n_h__nh_asus_vg278qr_27inch.jpg" alt="#"
                class="slider__product-item-img">
        </a>
        <div class="slider__product-info">
            <div class="slider__product-info-synthetic">
                <div class="slider__product-review-code">
                    <span class="slider__product-review">
                        <img class="slider__product-review-img"
                            src="./assets/img/icon/star_5.png" alt="#">
                    </span>
                    <span class="slider__product-code">
                        Mã SP:
                        <span class="slider__product-code-text">MOAS021</span>
                    </span>
                </div>
                <div class="slider__product-name-price">
                    <h4 class="slider__product-name">
                        Màn hình Asus VG278QR 27inch Full HD/165Hz/Flat
                    </h4>
                    <span class="slider__product-price">8.180.000đ</span>
                    <span class="slider__product-price-brick">9.299.000đ</span>
                </div>
            </div>
            <div class="slider__product-status-basket">
                <span class="slider__product-status"><i class="fas fa-check"></i>Còn hàng</span>
                <a href="#" class="slider__product-basket">
                    <img class="slider__product-basket-img" src="./assets/img/icon/cart.png"
                        alt="#">
                </a>
            </div>
        </div>
    </div>
    <div class="slider__product-item">
        <a href="#" class="slider__product-item-link">
            <img src="./assets/img/product/Sale/PC-1.jpg" alt="#"
                class="slider__product-item-img">
        </a>
        <div class="slider__product-info">
            <div class="slider__product-info-synthetic">
                <div class="slider__product-review-code">
                    <span class="slider__product-review">
                        <img class="slider__product-review-img"
                            src="./assets/img/icon/star_5.png" alt="#">
                    </span>
                    <span class="slider__product-code">
                        Mã SP:
                        <span class="slider__product-code-text">PCZT006</span>
                    </span>
                </div>
                <div class="slider__product-name-price">
                    <h4 class="slider__product-name">
                        PC Gaming Zotac MEK ULTRA-S13060 i7-9700k/RAM 16GB/SSD 240GB/HDD
                        2TB/Wifi+BT/Win10
                    </h4>
                    <span class="slider__product-price">14.999.000đ</span>
                    <span class="slider__product-price-brick">26.000.000đ</span>
                </div>
            </div>
            <div class="slider__product-status-basket">
                <span class="slider__product-status"><i class="fas fa-check"></i>Còn hàng</span>
                <a href="#" class="slider__product-basket">
                    <img class="slider__product-basket-img" src="./assets/img/icon/cart.png"
                        alt="#">
                </a>
            </div>
        </div>
    </div>
    <div class="slider__product-item">
        <a href="#" class="slider__product-item-link">
            <img src="./assets/img/product/Sale/PC-1.jpg" alt="#"
                class="slider__product-item-img">
        </a>
        <div class="slider__product-info">
            <div class="slider__product-info-synthetic">
                <div class="slider__product-review-code">
                    <span class="slider__product-review">
                        <img class="slider__product-review-img"
                            src="./assets/img/icon/star_5.png" alt="#">
                    </span>
                    <span class="slider__product-code">
                        Mã SP:
                        <span class="slider__product-code-text">VGLT014</span>
                    </span>
                </div>
                <div class="slider__product-name-price">
                    <h4 class="slider__product-name">
                        Card màn hình Leadtek Quadro P2200
                    </h4>
                    <span class="slider__product-price">10.699.000đ</span>
                    <span class="slider__product-price-brick hide">26.000.000đ</span>
                </div>
            </div>
            <div class="slider__product-status-basket">
                <span class="slider__product-status"><i class="fas fa-check"></i>Còn hàng</span>
                <a href="#" class="slider__product-basket">
                    <img class="slider__product-basket-img" src="./assets/img/icon/cart.png"
                        alt="#">
                </a>
            </div>
        </div>
    </div>
    <div class="slider__product-item">
        <a href="#" class="slider__product-item-link">
            <img src="./assets/img/product/Sale/PC-1.jpg" alt="#"
                class="slider__product-item-img">
        </a>
        <div class="slider__product-info">
            <div class="slider__product-info-synthetic">
                <div class="slider__product-review-code">
                    <span class="slider__product-review">
                        <img class="slider__product-review-img"
                            src="./assets/img/icon/star_5.png" alt="#">
                    </span>
                    <span class="slider__product-code">
                        Mã SP:
                        <span class="slider__product-code-text">PCZT006</span>
                    </span>
                </div>
                <div class="slider__product-name-price">
                    <h4 class="slider__product-name">
                        PC Gaming Zotac MEK ULTRA-S13060 i7-9700k/RAM 16GB/SSD 240GB/HDD
                        2TB/Wifi+BT/Win10
                    </h4>
                    <span class="slider__product-price">14.999.000đ</span>
                    <span class="slider__product-price-brick">26.000.000đ</span>
                </div>
            </div>
            <div class="slider__product-status-basket">
                <span class="slider__product-status"><i class="fas fa-check"></i>Còn hàng</span>
                <a href="#" class="slider__product-basket">
                    <img class="slider__product-basket-img" src="./assets/img/icon/cart.png"
                        alt="#">
                </a>
            </div>
        </div>
    </div>
    <div class="slider__product-item">
        <a href="#" class="slider__product-item-link">
            <img src="./assets/img/product/Sale/PC-1.jpg" alt="#"
                class="slider__product-item-img">
        </a>
        <div class="slider__product-info">
            <div class="slider__product-info-synthetic">
                <div class="slider__product-review-code">
                    <span class="slider__product-review">
                        <img class="slider__product-review-img"
                            src="./assets/img/icon/star_5.png" alt="#">
                    </span>
                    <span class="slider__product-code">
                        Mã SP:
                        <span class="slider__product-code-text">PCZT006</span>
                    </span>
                </div>
                <div class="slider__product-name-price">
                    <h4 class="slider__product-name">
                        PC Gaming Zotac MEK ULTRA-S13060 i7-9700k/RAM 16GB/SSD 240GB/HDD
                        2TB/Wifi+BT/Win10
                    </h4>
                    <span class="slider__product-price">14.999.000đ</span>
                    <span class="slider__product-price-brick">26.000.000đ</span>
                </div>
            </div>
            <div class="slider__product-status-basket">
                <span class="slider__product-status"><i class="fas fa-check"></i>Còn hàng</span>
                <a href="#" class="slider__product-basket">
                    <img class="slider__product-basket-img" src="./assets/img/icon/cart.png"
                        alt="#">
                </a>
            </div>
        </div>
    </div>
    <div class="slider__product-item">
        <a href="#" class="slider__product-item-link">
            <img src="./assets/img/product/Sale/PC-1.jpg" alt="#"
                class="slider__product-item-img">
        </a>
        <div class="slider__product-info">
            <div class="slider__product-info-synthetic">
                <div class="slider__product-review-code">
                    <span class="slider__product-review">
                        <img class="slider__product-review-img"
                            src="./assets/img/icon/star_5.png" alt="#">
                    </span>
                    <span class="slider__product-code">
                        Mã SP:
                        <span class="slider__product-code-text">PCZT006</span>
                    </span>
                </div>
                <div class="slider__product-name-price">
                    <h4 class="slider__product-name">
                        PC Gaming Zotac MEK ULTRA-S13060 i7-9700k/RAM 16GB/SSD 240GB/HDD
                        2TB/Wifi+BT/Win10
                    </h4>
                    <span class="slider__product-price">14.999.000đ</span>
                    <span class="slider__product-price-brick">26.000.000đ</span>
                </div>
            </div>
            <div class="slider__product-status-basket">
                <span class="slider__product-status"><i class="fas fa-check"></i>Còn hàng</span>
                <a href="#" class="slider__product-basket">
                    <img class="slider__product-basket-img" src="./assets/img/icon/cart.png"
                        alt="#">
                </a>
            </div>
        </div>
    </div>
    <div class="slider__product-item">
        <a href="#" class="slider__product-item-link">
            <img src="./assets/img/product/Sale/PC-1.jpg" alt="#"
                class="slider__product-item-img">
        </a>
        <div class="slider__product-info">
            <div class="slider__product-info-synthetic">
                <div class="slider__product-review-code">
                    <span class="slider__product-review">
                        <img class="slider__product-review-img"
                            src="./assets/img/icon/star_5.png" alt="#">
                    </span>
                    <span class="slider__product-code">
                        Mã SP:
                        <span class="slider__product-code-text">PCZT006</span>
                    </span>
                </div>
                <div class="slider__product-name-price">
                    <h4 class="slider__product-name">
                        PC Gaming Zotac MEK ULTRA-S13060 i7-9700k/RAM 16GB/SSD 240GB/HDD
                        2TB/Wifi+BT/Win10
                    </h4>
                    <span class="slider__product-price">14.999.000đ</span>
                    <span class="slider__product-price-brick">26.000.000đ</span>
                </div>
            </div>
            <div class="slider__product-status-basket">
                <span class="slider__product-status"><i class="fas fa-check"></i>Còn hàng</span>
                <a href="#" class="slider__product-basket">
                    <img class="slider__product-basket-img" src="./assets/img/icon/cart.png"
                        alt="#">
                </a>
            </div>
        </div>
    </div>
    <div class="slider__product-item">
        <a href="#" class="slider__product-item-link">
            <img src="./assets/img/product/Sale/PC-1.jpg" alt="#"
                class="slider__product-item-img">
        </a>
        <div class="slider__product-info">
            <div class="slider__product-info-synthetic">
                <div class="slider__product-review-code">
                    <span class="slider__product-review">
                        <img class="slider__product-review-img"
                            src="./assets/img/icon/star_5.png" alt="#">
                    </span>
                    <span class="slider__product-code">
                        Mã SP:
                        <span class="slider__product-code-text">PCZT006</span>
                    </span>
                </div>
                <div class="slider__product-name-price">
                    <h4 class="slider__product-name">
                        PC Gaming Zotac MEK ULTRA-S13060 i7-9700k/RAM 16GB/SSD 240GB/HDD
                        2TB/Wifi+BT/Win10
                    </h4>
                    <span class="slider__product-price">14.999.000đ</span>
                    <span class="slider__product-price-brick">26.000.000đ</span>
                </div>
            </div>
            <div class="slider__product-status-basket">
                <span class="slider__product-status"><i class="fas fa-check"></i>Còn hàng</span>
                <a href="#" class="slider__product-basket">
                    <img class="slider__product-basket-img" src="./assets/img/icon/cart.png"
                        alt="#">
                </a>
            </div>
        </div>
    </div>
    <div class="slider__product-item">
        <a href="#" class="slider__product-item-link">
            <img src="./assets/img/product/Sale/PC-1.jpg" alt="#"
                class="slider__product-item-img">
        </a>
        <div class="slider__product-info">
            <div class="slider__product-info-synthetic">
                <div class="slider__product-review-code">
                    <span class="slider__product-review">
                        <img class="slider__product-review-img"
                            src="./assets/img/icon/star_5.png" alt="#">
                    </span>
                    <span class="slider__product-code">
                        Mã SP:
                        <span class="slider__product-code-text">PCZT006</span>
                    </span>
                </div>
                <div class="slider__product-name-price">
                    <h4 class="slider__product-name">
                        PC Gaming Zotac MEK ULTRA-S13060 i7-9700k/RAM 16GB/SSD 240GB/HDD
                        2TB/Wifi+BT/Win10
                    </h4>
                    <span class="slider__product-price">14.999.000đ</span>
                    <span class="slider__product-price-brick">26.000.000đ</span>
                </div>
            </div>
            <div class="slider__product-status-basket">
                <span class="slider__product-status"><i class="fas fa-check"></i>Còn hàng</span>
                <a href="#" class="slider__product-basket">
                    <img class="slider__product-basket-img" src="./assets/img/icon/cart.png"
                        alt="#">
                </a>
            </div>
        </div>
    </div>
    <div class="slider__product-item">
        <a href="#" class="slider__product-item-link">
            <img src="./assets/img/product/Sale/PC-1.jpg" alt="#"
                class="slider__product-item-img">
        </a>
        <div class="slider__product-info">
            <div class="slider__product-info-synthetic">
                <div class="slider__product-review-code">
                    <span class="slider__product-review">
                        <img class="slider__product-review-img"
                            src="./assets/img/icon/star_5.png" alt="#">
                    </span>
                    <span class="slider__product-code">
                        Mã SP:
                        <span class="slider__product-code-text">PCZT006</span>
                    </span>
                </div>
                <div class="slider__product-name-price">
                    <h4 class="slider__product-name">
                        PC Gaming Zotac MEK ULTRA-S13060 i7-9700k/RAM 16GB/SSD 240GB/HDD
                        2TB/Wifi+BT/Win10
                    </h4>
                    <span class="slider__product-price">14.999.000đ</span>
                    <span class="slider__product-price-brick">26.000.000đ</span>
                </div>
            </div>
            <div class="slider__product-status-basket">
                <span class="slider__product-status"><i class="fas fa-check"></i>Còn hàng</span>
                <a href="#" class="slider__product-basket">
                    <img class="slider__product-basket-img" src="./assets/img/icon/cart.png"
                        alt="#">
                </a>
            </div>
        </div>
    </div>
    <div class="slider__product-item">
        <a href="#" class="slider__product-item-link">
            <img src="./assets/img/product/Sale/PC-1.jpg" alt="#"
                class="slider__product-item-img">
        </a>
        <div class="slider__product-info">
            <div class="slider__product-info-synthetic">
                <div class="slider__product-review-code">
                    <span class="slider__product-review">
                        <img class="slider__product-review-img"
                            src="./assets/img/icon/star_5.png" alt="#">
                    </span>
                    <span class="slider__product-code">
                        Mã SP:
                        <span class="slider__product-code-text">PCZT006</span>
                    </span>
                </div>
                <div class="slider__product-name-price">
                    <h4 class="slider__product-name">
                        PC Gaming Zotac MEK ULTRA-S13060 i7-9700k/RAM 16GB/SSD 240GB/HDD
                        2TB/Wifi+BT/Win10
                    </h4>
                    <span class="slider__product-price">14.999.000đ</span>
                    <span class="slider__product-price-brick">26.000.000đ</span>
                </div>
            </div>
            <div class="slider__product-status-basket">
                <span class="slider__product-status"><i class="fas fa-check"></i>Còn hàng</span>
                <a href="#" class="slider__product-basket">
                    <img class="slider__product-basket-img" src="./assets/img/icon/cart.png"
                        alt="#">
                </a>
            </div>
        </div>
    </div>
    <div class="slider__product-item">
        <a href="#" class="slider__product-item-link">
            <img src="./assets/img/product/Sale/PC-1.jpg" alt="#"
                class="slider__product-item-img">
        </a>
        <div class="slider__product-info">
            <div class="slider__product-info-synthetic">
                <div class="slider__product-review-code">
                    <span class="slider__product-review">
                        <img class="slider__product-review-img"
                            src="./assets/img/icon/star_5.png" alt="#">
                    </span>
                    <span class="slider__product-code">
                        Mã SP:
                        <span class="slider__product-code-text">PCZT006</span>
                    </span>
                </div>
                <div class="slider__product-name-price">
                    <h4 class="slider__product-name">
                        PC Gaming Zotac MEK ULTRA-S13060 i7-9700k/RAM 16GB/SSD 240GB/HDD
                        2TB/Wifi+BT/Win10
                    </h4>
                    <span class="slider__product-price">14.999.000đ</span>
                    <span class="slider__product-price-brick">26.000.000đ</span>
                </div>
            </div>
            <div class="slider__product-status-basket">
                <span class="slider__product-status"><i class="fas fa-check"></i>Còn hàng</span>
                <a href="#" class="slider__product-basket">
                    <img class="slider__product-basket-img" src="./assets/img/icon/cart.png"
                        alt="#">
                </a>
            </div>
        </div>
    </div>
    <div class="slider__product-item">
        <a href="#" class="slider__product-item-link">
            <img src="./assets/img/product/Sale/PC-1.jpg" alt="#"
                class="slider__product-item-img">
        </a>
        <div class="slider__product-info">
            <div class="slider__product-info-synthetic">
                <div class="slider__product-review-code">
                    <span class="slider__product-review">
                        <img class="slider__product-review-img"
                            src="./assets/img/icon/star_5.png" alt="#">
                    </span>
                    <span class="slider__product-code">
                        Mã SP:
                        <span class="slider__product-code-text">PCZT006</span>
                    </span>
                </div>
                <div class="slider__product-name-price">
                    <h4 class="slider__product-name">
                        PC Gaming Zotac MEK ULTRA-S13060 i7-9700k/RAM 16GB/SSD 240GB/HDD
                        2TB/Wifi+BT/Win10
                    </h4>
                    <span class="slider__product-price">14.999.000đ</span>
                    <span class="slider__product-price-brick">26.000.000đ</span>
                </div>
            </div>
            <div class="slider__product-status-basket">
                <span class="slider__product-status"><i class="fas fa-check"></i>Còn hàng</span>
                <a href="#" class="slider__product-basket">
                    <img class="slider__product-basket-img" src="./assets/img/icon/cart.png"
                        alt="#">
                </a>
            </div>
        </div>
    </div>
    <div class="slider__product-item">
        <a href="#" class="slider__product-item-link">
            <img src="./assets/img/product/Sale/PC-1.jpg" alt="#"
                class="slider__product-item-img">
        </a>
        <div class="slider__product-info">
            <div class="slider__product-info-synthetic">
                <div class="slider__product-review-code">
                    <span class="slider__product-review">
                        <img class="slider__product-review-img"
                            src="./assets/img/icon/star_5.png" alt="#">
                    </span>
                    <span class="slider__product-code">
                        Mã SP:
                        <span class="slider__product-code-text">PCZT006</span>
                    </span>
                </div>
                <div class="slider__product-name-price">
                    <h4 class="slider__product-name">
                        PC Gaming Zotac MEK ULTRA-S13060 i7-9700k/RAM 16GB/SSD 240GB/HDD
                        2TB/Wifi+BT/Win10
                    </h4>
                    <span class="slider__product-price">14.999.000đ</span>
                    <span class="slider__product-price-brick">26.000.000đ</span>
                </div>
            </div>
            <div class="slider__product-status-basket">
                <span class="slider__product-status"><i class="fas fa-check"></i>Còn hàng</span>
                <a href="#" class="slider__product-basket">
                    <img class="slider__product-basket-img" src="./assets/img/icon/cart.png"
                        alt="#">
                </a>
            </div>
        </div>
    </div>
    <div class="slider__product-item">
        <a href="#" class="slider__product-item-link">
            <img src="./assets/img/product/Sale/PC-1.jpg" alt="#"
                class="slider__product-item-img">
        </a>
        <div class="slider__product-info">
            <div class="slider__product-info-synthetic">
                <div class="slider__product-review-code">
                    <span class="slider__product-review">
                        <img class="slider__product-review-img"
                            src="./assets/img/icon/star_5.png" alt="#">
                    </span>
                    <span class="slider__product-code">
                        Mã SP:
                        <span class="slider__product-code-text">PCZT006</span>
                    </span>
                </div>
                <div class="slider__product-name-price">
                    <h4 class="slider__product-name">
                        PC Gaming Zotac MEK ULTRA-S13060 i7-9700k/RAM 16GB/SSD 240GB/HDD
                        2TB/Wifi+BT/Win10
                    </h4>
                    <span class="slider__product-price">14.999.000đ</span>
                    <span class="slider__product-price-brick">26.000.000đ</span>
                </div>
            </div>
            <div class="slider__product-status-basket">
                <span class="slider__product-status"><i class="fas fa-check"></i>Còn hàng</span>
                <a href="#" class="slider__product-basket">
                    <img class="slider__product-basket-img" src="./assets/img/icon/cart.png"
                        alt="#">
                </a>
            </div>
        </div>
    </div>
    <div class="slider__product-item">
        <a href="#" class="slider__product-item-link">
            <img src="./assets/img/product/Sale/PC-1.jpg" alt="#"
                class="slider__product-item-img">
        </a>
        <div class="slider__product-info">
            <div class="slider__product-info-synthetic">
                <div class="slider__product-review-code">
                    <span class="slider__product-review">
                        <img class="slider__product-review-img"
                            src="./assets/img/icon/star_5.png" alt="#">
                    </span>
                    <span class="slider__product-code">
                        Mã SP:
                        <span class="slider__product-code-text">PCZT006</span>
                    </span>
                </div>
                <div class="slider__product-name-price">
                    <h4 class="slider__product-name">
                        PC Gaming Zotac MEK ULTRA-S13060 i7-9700k/RAM 16GB/SSD 240GB/HDD
                        2TB/Wifi+BT/Win10
                    </h4>
                    <span class="slider__product-price">14.999.000đ</span>
                    <span class="slider__product-price-brick">26.000.000đ</span>
                </div>
            </div>
            <div class="slider__product-status-basket">
                <span class="slider__product-status"><i class="fas fa-check"></i>Còn hàng</span>
                <a href="#" class="slider__product-basket">
                    <img class="slider__product-basket-img" src="./assets/img/icon/cart.png"
                        alt="#">
                </a>
            </div>
        </div>
    </div>
    <div class="slider__product-item">
        <a href="#" class="slider__product-item-link">
            <img src="./assets/img/product/Sale/PC-1.jpg" alt="#"
                class="slider__product-item-img">
        </a>
        <div class="slider__product-info">
            <div class="slider__product-info-synthetic">
                <div class="slider__product-review-code">
                    <span class="slider__product-review">
                        <img class="slider__product-review-img"
                            src="./assets/img/icon/star_5.png" alt="#">
                    </span>
                    <span class="slider__product-code">
                        Mã SP:
                        <span class="slider__product-code-text">PCZT006</span>
                    </span>
                </div>
                <div class="slider__product-name-price">
                    <h4 class="slider__product-name">
                        PC Gaming Zotac MEK ULTRA-S13060 i7-9700k/RAM 16GB/SSD 240GB/HDD
                        2TB/Wifi+BT/Win10
                    </h4>
                    <span class="slider__product-price">14.999.000đ</span>
                    <span class="slider__product-price-brick">26.000.000đ</span>
                </div>
            </div>
            <div class="slider__product-status-basket">
                <span class="slider__product-status"><i class="fas fa-check"></i>Còn hàng</span>
                <a href="#" class="slider__product-basket">
                    <img class="slider__product-basket-img" src="./assets/img/icon/cart.png"
                        alt="#">
                </a>
            </div>
        </div>
    </div>
    <div class="slider__product-item">
        <a href="#" class="slider__product-item-link">
            <img src="./assets/img/product/Sale/PC-1.jpg" alt="#"
                class="slider__product-item-img">
        </a>
        <div class="slider__product-info">
            <div class="slider__product-info-synthetic">
                <div class="slider__product-review-code">
                    <span class="slider__product-review">
                        <img class="slider__product-review-img"
                            src="./assets/img/icon/star_5.png" alt="#">
                    </span>
                    <span class="slider__product-code">
                        Mã SP:
                        <span class="slider__product-code-text">PCZT006</span>
                    </span>
                </div>
                <div class="slider__product-name-price">
                    <h4 class="slider__product-name">
                        PC Gaming Zotac MEK ULTRA-S13060 i7-9700k/RAM 16GB/SSD 240GB/HDD
                        2TB/Wifi+BT/Win10
                    </h4>
                    <span class="slider__product-price">14.999.000đ</span>
                    <span class="slider__product-price-brick">26.000.000đ</span>
                </div>
            </div>
            <div class="slider__product-status-basket">
                <span class="slider__product-status"><i class="fas fa-check"></i>Còn hàng</span>
                <a href="#" class="slider__product-basket">
                    <img class="slider__product-basket-img" src="./assets/img/icon/cart.png"
                        alt="#">
                </a>
            </div>
        </div>
    </div>
    <!-- <a href="#" class="slider__product-item"><img src="./assets/img/product/Sale/TN11.jpg" alt="#" class="slider__product-item-img"></a>
    <a href="#" class="slider__product-item"><img src="./assets/img/product/Sale/LT-10.jpg" alt="#" class="slider__product-item-img"></a>
    <a href="#" class="slider__product-item"><img src="./assets/img/product/Sale/Ram1.jpg" alt="#" class="slider__product-item-img"></a>
    <a href="#" class="slider__product-item"><img src="./assets/img/product/Sale/MH-10.jpg" alt="#" class="slider__product-item-img"></a>
    <a href="#" class="slider__product-item"><img src="./assets/img/product/Sale/PC-5.jpg" alt="#" class="slider__product-item-img"></a>
    <a href="#" class="slider__product-item"><img src="./assets/img/product/Sale/C3.jpg" alt="#" class="slider__product-item-img"></a>
    <a href="#" class="slider__product-item"><img src="./assets/img/product/Sale/Mic1.jpg" alt="#" class="slider__product-item-img"></a>
    <a href="#" class="slider__product-item"><img src="./assets/img/product/Sale/card1.jpg" alt="#" class="slider__product-item-img"></a>
    <a href="#" class="slider__product-item"><img src="./assets/img/product/Sale/radiator_fan1.jpg" alt="#" class="slider__product-item-img"></a>
    <a href="#" class="slider__product-item"><img src="./assets/img/product/Sale/CPU1.jpg" alt="#" class="slider__product-item-img"></a>
    <a href="#" class="slider__product-item"><img src="./assets/img/product/Sale/Ram2.jpg" alt="#" class="slider__product-item-img"></a>
    <a href="#" class="slider__product-item"><img src="./assets/img/product/Sale/radiator_fan2.jpg" alt="#" class="slider__product-item-img"></a>
    <a href="#" class="slider__product-item"><img src="./assets/img/product/TN15.jpg" alt="#" class="slider__product-item-img"></a>
    <a href="#" class="slider__product-item"><img src="./assets/img/product/Sale/LT-2.jpg" alt="#" class="slider__product-item-img"></a> -->
</div>`
    slider__product = document.querySelectorAll(".slider__product-to-slide");
}
slider__product.forEach(function (item) {
    item.setAttribute("location", "0")
})

function domSL (index,item) {
    if(!item.classList.contains("active-color")){
        switch (index) {
            case 0:
                Dom_slide1()
                break;
            case 1:
                Dom_slide2()
                break;
            case 2:
                Dom_slide3()
                break;
            case 3:
                Dom_slide4()
                break;
            case 4:
                Dom_slide5()
                break;
        }
    }
}
Sale_imgs.forEach(function (item, index) {
    item.onclick = function () {
        domSL (index,item);
        Sale_imgs.forEach(function (item) {
            item.classList.remove("active-color");
        })
        !item.classList.contains("active-color")
            ? item.classList.add("active-color")
            : "";
    }
})

var Fslider__product = function (direction, item) {
    current_begin = parseInt(item.getAttribute("location"));
    current_begin += direction;
    if (current_begin >= 1) {
        current_begin = 0;

    }
    else if (current_begin <= 3 - current_end) {
        current_begin = 4 - current_end;
    }
    else {
        item.style.transform = "translateX(" + current_begin * 238 + "px)";
        item.removeAttribute("location");
        item.setAttribute("location", current_begin)
    }
}
var Fslider__product_item = function () {
    product_next_left[0].classList.remove("un__next")
    product_next_right[0].classList.remove("un__next")
    if (current_begin === 0) {
        direction_time = -1;
    }
    else if (current_begin === 4 - current_end) {
        direction_time = 1;
    }
    Fslider__product(direction_time, slider__product[0]);
}

setInterval(Fslider__product_item, 6000);

product_next_left.forEach(function (item_next, index_next) {
    item_next.onclick = function () {
        slider__product.forEach(function (item_product, index_product) {
            console.log(item_product)
            if (index_next === index_product) {
                Fslider__product(-1, item_product)
                if (current_begin <= 4 - current_end) {
                    item_next.classList.remove("un__next");
                    item_next.classList.add("un__next");
                }
                else if (current_begin > 4 - current_end && current_begin < 0) {
                    product_next_right[index_next].classList.remove("un__next");
                }
            }
        })
    }
})

product_next_right.forEach(function (item_next, index_next) {
    item_next.onclick = function () {
        slider__product.forEach(function (item_product, index_product) {
            if (index_next === index_product) {
                Fslider__product(1, item_product)
                if (current_begin >= 0) {
                    item_next.classList.remove("un__next");
                    item_next.classList.add("un__next");
                }
                else if (current_begin >= 4 - current_end && current_begin < 0) {
                    product_next_left[index_next].classList.remove("un__next");
                }
            }
        })
    }
})
