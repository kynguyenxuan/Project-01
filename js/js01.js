//! Show form
const clickAddressForm = document.querySelector("#address-form-id")
const addressForm = document.querySelector(`.address-form`)
// console.log(addressForm);
// console.log(addressForm);
clickAddressForm.addEventListener("click", function () {
    addressForm.style.display = "flex"
})
//! Đóng Form
const closeAddressForm = document.querySelector("#address-form-close")
closeAddressForm.addEventListener("click", function () {
    addressForm.style.display = "none"
})

// addressForm.addEventListener("click", function () {
//     addressForm.style.display = "none"
// })
// ! slider
let index = 0;
const rightBtn = document.querySelector(".fa-chevron-right")
const leftBtn = document.querySelector(".fa-chevron-left")
const imgNumber = document.querySelectorAll(".slider-content-left-top img")
console.log(imgNumber.length);
rightBtn.addEventListener("click", function () {
    index = index + 1;
    if(index > imgNumber.length - 1) {
        index = 0
    }
    document.querySelector(".slider-content-left-top").style.right = index * 100 + "%"
    
})
leftBtn.addEventListener("click", function () {
    index = index - 1;
    if(index < 0) {
        index = imgNumber.length-1
    }
    document.querySelector(".slider-content-left-top").style.right = index * 100 + "%"
})

// 

const imgNumberLi = document.querySelectorAll(".slider-content-left-bottom li")

imgNumberLi.forEach(function(item, index) {
    // console.log(item);
    item.addEventListener("click", function () {
        removeActive ()
        document.querySelector(".slider-content-left-top").style.right = index * 100 + "%"
        item.classList.add("active-1")
    })
})

const removeActive = () => {
    const imgActive = document.querySelector(".active-1")
    imgActive.classList.remove("active-1")
}

// / slider 2 setimeout

let setThoiGianSlider = () => {
    removeActive();
    index = index + 1;
    if(index > imgNumber.length-1) {
        index = 0
    }
    // console.log(index);
    document.querySelector(".slider-content-left-top").style.right = index * 100 + "%";
    imgNumberLi[index].classList.add("active-1")
}

setInterval(setThoiGianSlider, 3000)

// slider product

const btnRightProduct = document.querySelector(".fa-chevron-right-2")
const btnLeftProduct = document.querySelector(".fa-chevron-left-2")
const sliderShowProduct = document.querySelectorAll(".container-content-3-product")
console.log(sliderShowProduct.length);
btnRightProduct.addEventListener("click", function () {
    index = index + 1
    if(index > sliderShowProduct.length-1){
        index = 0
    }
    document.querySelector(".container-content-3-product-item-2").style.right = index * 100 + "%"
})
// console.log(btnLeftProduct);
// console.log(btnRightProduct);
btnLeftProduct.addEventListener("click", function () {
    index = index - 1
    if(index < 0){
        index = sliderShowProduct.length-1
    }
    document.querySelector(".container-content-3-product-item-2").style.right = index * 100 + "%"
})

// let setThoiGianSlider2 = () => {
//     index = index + 1;
//     if(index > sliderShowProduct.length-1) {
//         index = 0
//     }
//     // console.log(index);
//     document.querySelector(".container-content-3-product-item-2").style.right = index * 100 + "%";
//     // imgNumberLi[index].classList.add("active-1")
// }

// setInterval(setThoiGianSlider2, 2000)



