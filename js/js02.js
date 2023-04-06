const btnIphone = document.querySelector(".category2")
const btnSamsung = document.querySelector(".category3")
const btnXiao = document.querySelector(".category4")
const btnOppo = document.querySelector(".category5")
const btnVivo = document.querySelector(".category6")
const btnProduct2 = document.querySelectorAll(".category-phone")
const product1 = document.querySelectorAll(".product-item-link")




// btnIphone.addEventListener("click", function () {
//     let phoneButt = this.getAttribute("data-item")
//     // console.log(phoneButt);

//     product1.forEach(function () {
//         let sss = this.getAttribute(".data-item")
//         if(phoneButt === sss) {
//             this.style.display = "flex"
//         } else {
//             this.style.display = "none"
//         }
//     })
// })

$(document).ready(function() {
    $(".category-phone").click(function () {
       
        let btnPhone = $(this).attr("data-item")
        let color = $(this).attr("data-color")
        $(this).css("background", color)
        // console.log(btnPhone);
        $(".product-item-link").each(function() {
            $(this).removeAttr("data-color")
            if(btnPhone === $(this).attr("data-item")) {
                $(this).show()
            } else {
                $(this).hide()
            }
        })
    })
    $(".category-show").click(function () {

        $(".product-item-link").each(function() {
            $(this).remove("data-color")
            const element = $(this);
            element.show()
        })
        $(this).attr("data-color")
    })
})
//! Nhờ anh ghi chú giúp em phần attr em đang bị loạn quá ạ có gì
//! mong anh giúp em 
//! em cảm ơn anh ạ