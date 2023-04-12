import React, { useState } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';

const MyCarousel =()=>{

    const slides = [
        {
          url: 'https://oasis.opstatics.com/content/dam/oasis/page/2023/in/kv-banner/40-y1s/HeroBanner_PC.jpg.thumb.webp',
        },
        {
          url: 'https://oasis.opstatics.com/content/dam/oasis/page/2023/in/large-card/oneplus-11r/udon-pc-2.7.jpg.thumb.webp',
        },
        {
          url: 'https://imgnew.outlookindia.com/uploadimage/library/16_9/16_9_5/IMAGE_1676183711.jpg',
        },
    
        {
          url: 'https://www.premierkitchen.in/wp-content/uploads/2022/07/Best-Wet-Grinder-To-Buy-In-India-2022.jpg',
        },
        {
          url: 'https://cdn.opstatics.com/store/20170907/assets/images/events/2020/07/tws/pc/s4-pc.jpg',
        },
      ];
    
      const [currentIndex, setCurrentIndex] = useState(0);
    
      const prevSlide = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
      };
    
      const nextSlide = () => {
        const isLastSlide = currentIndex === slides.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
      };
    
      const goToSlide = (slideIndex) => {
        setCurrentIndex(slideIndex);
      };
    
      return (
        <div className='max-w-5/12 h-[580px] w-full m-auto py-2 px-0  relative group'>
          <div
            style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
            className='w-full h-full rounded-2xl bg-center bg-cover duration-500'
          ></div>
          {/* Left Arrow */}
          <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
            <BsChevronCompactLeft onClick={prevSlide} size={30} />
          </div>
          {/* Right Arrow */}
          <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
            <BsChevronCompactRight onClick={nextSlide} size={30} />
          </div>
          <div className='flex top-4 justify-center py-2'>
            {slides.map((slide, slideIndex) => (
              <div
                key={slideIndex}
                onClick={() => goToSlide(slideIndex)}
                className='text-2xl cursor-pointer'
              >
                <RxDotFilled />
              </div>
            ))}
          </div>
        </div>
      );
    }
    

  
export default MyCarousel;