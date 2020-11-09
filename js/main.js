//Main js
const app = new Vue({
    el: '#app',
    data: {
        indexPhoto: 0,
        photos: [
            './img/image1.jpg',
            './img/image2.jpg',
            './img/image3.jpg',
            './img/image4.jpg',
        ],
        interval: 0,
    },
    created() {
        this.slideLoop();
    },
    methods: {
        nextImage() {
            this.indexPhoto += 1;

            if (this.indexPhoto > (this.photos.length - 1)) {
                this.indexPhoto = 0;
            }
        },

        prevImage() {
            this.indexPhoto -= 1;

            if (this.indexPhoto < 0) {
                this.indexPhoto = this.photos.length - 1;
            }
        },
        setCircle(index) {
            this.indexPhoto = index;
        },
        slideLoop() {
            this.interval = setInterval(() => {
                this.nextImage();
            }, 3000);
        },
        stopSlideLoop() {
            clearInterval(this.interval);
        }
    }
});