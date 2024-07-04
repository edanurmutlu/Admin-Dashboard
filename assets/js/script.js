'use strict';

/* headerdaki toggle active class ın nav-toggle-btn'a basınca çalışması */

const header = document.querySelector("[data-header]") /* data-header özniteliğine sahip ilk öğeyi seç */
const navToggleBtn = document.querySelector("[data-menu-toggle-btn]")

navToggleBtn.addEventListener("click", function() {
    header.classList.toggle("active"); /* navToggleBtn öğesine basıldığında, header bileşeninin sınıf listesine (classList) active sınıfını ekler veya kaldırır */
});

/* card-menu-btn'a basıldığında toggle card-menu açılması */

const menuBtn = document.querySelectorAll("[data-menu-btn]"); /* data-menu-btn özniteliğine sahip tüm öğeleri seç */

for (let i=0; i<menuBtn.length; i++) {
    menuBtn[i].addEventListener("click",function() {
        this.nextElementSibling.classList.toggle("active");
    });
}
