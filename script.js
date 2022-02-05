"use strict";

const body = document.querySelector('body');

const home = document.querySelector('.header-home')

$(window).scroll(
    {
     previousTop: 0
    },
    function() {
        let currentTop = $(window).scrollTop();
        if (currentTop < this.previousTop) {
            $(".header-title").slideDown();
        } else {
            $(".header-title").slideUp();
        }
        this.previousTop = currentTop;
    }
)
