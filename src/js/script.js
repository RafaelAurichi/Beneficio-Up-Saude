/* global $ */
import $ from 'jquery';
import Tab from 'bootstrap';
import { slick } from 'slick-carousel';

$(function() {
    $('#menu-icon').on('click', function () {
        $('.navbar').toggleClass('menu-open');
    });

    $('.scrollme').on('click', function(event) {
        event.preventDefault();
        $('.navbar').removeClass('menu-open');
        var $this = $(this.hash);
        $('html, body').animate({
            scrollTop: $this.offset().top
        }, 300);
    });

    $('.slider-vantagens').slick({
        infinite: true,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: true,
        arrows: true,
        prevArrow: '<div class="slick-prev"><svg xmlns="http://www.w3.org/2000/svg" width="18.877" height="18.972" viewBox="0 0 18.877 18.972"><g transform="translate(-0.095 18.972) rotate(-90)"><g transform="translate(8.592 0.095)"><rect id="Rectangle_80213" data-name="Rectangle 80213" width="1.789" height="17.887"/></g><g transform="translate(9.486 0) rotate(45)"><rect width="13.415" height="1.789" transform="translate(0 11.627)"/><rect width="1.789" height="13.415" transform="translate(11.627 0)"/></g></g></svg></div>',
        nextArrow: '<div class="slick-next"><svg xmlns="http://www.w3.org/2000/svg" width="18.877" height="18.972" viewBox="0 0 18.877 18.972"><g transform="translate(-0.095 18.972) rotate(-90)"><g transform="translate(8.592 0.095)"><rect id="Rectangle_80213" data-name="Rectangle 80213" width="1.789" height="17.887"/></g><g transform="translate(9.486 0) rotate(45)"><rect width="13.415" height="1.789" transform="translate(0 11.627)"/><rect width="1.789" height="13.415" transform="translate(11.627 0)"/></g></g></svg></div>',
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });
});