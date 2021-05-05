document.addEventListener('DOMContentLoaded', function () {
    new Vue({
        el: '#app',
        data,
        mounted() {
            this.$nextTick(swiperInit);
        }
    })
});

const swiperInit = () => {
    new Swiper('.courses__photo', {
        slidesPerView: 1,
        spaceBetween: 30,
        preloadImages: false,
        autoplay: true,
        loop: true,
        lazy: true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        breakpoints: {
            900: {
                slidesPerView: 2
            }
        }
    });
}
