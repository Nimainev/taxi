!function(){var e={642:function(){new Swiper(".mySwiper",{slidesPerView:3,navtion:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},breakpoints:{320:{slidesPerView:1,spaceBetween:20}}}),new Swiper(".mySwiper2",{navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}}),$(window).on("load",(function(){$(window).scrollTop()>100&&$("header").addClass("fixedHeader"),$(window).on("scroll",(function(){$(window).scrollTop()>100?$("header").addClass("fixedHeader"):$("header").removeClass("fixedHeader")}))})),function(e){e(".dropdown__menu").mouseover((function(){e(this).addClass("show__dropdown-menu"),e(".overlay__for-menu").addClass("open")})),e(document).mouseup((function(n){var o=e(".dropdown_menu");o.is(n.target)||0!==o.has(n.target).length||(e(".dropdown__menu").removeClass("show__dropdown-menu"),e(".overlay__for-menu").removeClass("open"))})),e(".dropdown__menu").mouseleave((function(){e(this).removeClass("show__dropdown-menu"),e(".overlay__for-menu").removeClass("open")}))}(jQuery),$(window).scroll((function(){$(window).scrollTop()>5600&&$(".anim_img").addClass("animated")})),$(window).scroll((function(){$(window).scrollTop()>3200&&$(".about__photo").addClass("animated")}));let e=document.querySelectorAll(".container__inner"),n=document.querySelectorAll(".container__item");for(let o=0;o<n.length;o++)n[o].addEventListener("mouseover",(()=>{e.forEach((e=>{e.classList.add("container__inner-hidden")})),n.forEach((e=>{e.classList.remove("tabs-active")})),e[o].classList.remove("container__inner-hidden"),n[o].classList.add("tabs-active")}));document.querySelector(".fake-player").addEventListener("click",(function(){Array.from(this.children).forEach((e=>e.classList.toggle("hidden")))}));var o=document.querySelectorAll(".popup"),r=document.querySelectorAll(".trigger"),t=document.querySelector(".close-button");function i(){for(var e=0;e<o.length;e++)o[e].classList.toggle("show-modal")}r.forEach((function(e){e.addEventListener("click",i)}));var s=document.querySelector(".popup"),a=document.querySelector(".trigger");function i(){s.classList.toggle("show-modal")}t=document.querySelector(".close-button"),a.addEventListener("click",i),t.addEventListener("click",i),window.addEventListener("click",(function(e){e.target===s&&i()}))}},n={};function o(r){var t=n[r];if(void 0!==t)return t.exports;var i=n[r]={exports:{}};return e[r](i,i.exports,o),i.exports}o.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(n,{a:n}),n},o.d=function(e,n){for(var r in n)o.o(n,r)&&!o.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},o.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},function(){"use strict";var e=o(642);o.n(e)()()}()}();