import React from 'react';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'; 

const Navigation = () => {
  return (
    <div className="navigation">
      <button className="prev">
        <ArrowBackIosIcon style={{ fontSize: 40 }} /> { }
      </button>
      <button className="next">
        <ArrowForwardIosIcon style={{ fontSize: 40 }} /> {
      </button>
    </div>
  );
};

export default Navigation;

        
        const carouselContainer = document.querySelector('.carousel-container');
        const carouselItems = carouselContainer.querySelectorAll('.carousel-item');
        const prevCarouselButton = document.querySelector('.prev-carousel');
        const nextCarouselButton = document.querySelector('.next-carousel');

        let carouselIndex = 0;

        function showCarouselItem(index) {
            carouselItems.forEach((item, i) => {
                if (i === index) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
        }

        function nextCarousel() {
            carouselIndex = (carouselIndex + 1) % carouselItems.length;
            showCarouselItem(carouselIndex);
        }

        function prevCarousel() {
            carouselIndex = (carouselIndex - 1 + carouselItems.length) % carouselItems.length;
            showCarouselItem(carouselIndex);
        }

        nextCarouselButton.addEventListener('click', nextCarousel);
        prevCarouselButton.addEventListener('click', prevCarousel);

        showCarouselItem(carouselIndex);


        let currentSlide = 0;
        const slides = document.querySelectorAll('.banner-content');
        const dots = document.querySelectorAll('.dot');

        function showSlide(index) {
            slides.forEach((slide, i) => {
                slide.classList.remove('active');
                dots[i].classList.remove('active-dot');
            });
            slides[index].classList.add('active');
            dots[index].classList.add('active-dot');
        }

        document.querySelector('.nav-button-left').addEventListener('click', () => {
            currentSlide = (currentSlide === 0) ? slides.length - 1 : currentSlide - 1;
            showSlide(currentSlide);
        });

        document.querySelector('.nav-button-right').addEventListener('click', () => {
            currentSlide = (currentSlide === slides.length - 1) ? 0 : currentSlide + 1;
            showSlide(currentSlide);
        });

        dots.forEach((dot, index) => {
            dot.addEventListener('click', () => {
                currentSlide = index;
                showSlide(index);
            });
        });
