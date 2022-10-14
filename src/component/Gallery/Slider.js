import React, { useEffect, useState } from "react";
import Swiper from "react-id-swiper";
import SliderItem from "./SliderItem";
// import "react-id-swiper/src/styles/scss/swiper.scss";

import 'swiper/css';
import './Slider.scss'
import {
    Pagination,
    Navigation,
    Lazy,
    Controller
  } from "swiper";

  const images = [
    {
      src: "https://picsum.photos/320/240?v1"
    },
    {
      src: "https://picsum.photos/320/240?v2"
    },
    {
      src: "https://picsum.photos/320/240?v3"
    },
    {
      src: "https://picsum.photos/320/240?v4"
    }
  ];
const Slider = () => {
    const [swiper, updateSwiper] = useState(null);
    // Swiper thumbsinstance
    const [swiperThumbs, updateSwiperThumbs] = useState(null);
    // Params definition
    let params = {
        modules: [Controller, Pagination, Navigation, Lazy],
        preloadImages: false,
        lazy: true,

    
        pagination: {
          el: ".swiper-pagination",
          type: "bullets",
          clickable: true
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        },
        loop: false,
        spaceBetween: 30,
        getSwiper: updateSwiper
    };
    let thumbsParams = {
        modules: [Controller],
        slideToClickedSlide: true,
        slidesPerView: "auto",
        centeredSlides: true,
        spaceBetween: 10,
        getSwiper: updateSwiperThumbs, // Get swiper instance callback
        style: {
          width: "100px"
        }
    };
  
    // Bind swiper and swiper thumbs
    useEffect(() => {
      if (swiper && swiperThumbs) {
        swiper.controller.control = swiperThumbs;
        swiperThumbs.controller.control = swiper;
      }
    }, [swiper, swiperThumbs]);
  
    return (
      <div>
        <Swiper {...params} >
          {images.map((image, idx) => (
            <SliderItem key={`slide_${idx}`}  style={{ width: "100px", }}>
              <img
                // @note w/o unique key the image won't be updated when the image set updates.
                key={image.src}
                className="swiper-lazy h-[100px] w-[100px] "
                data-src={image.src}
              />
            </SliderItem>
          ))}
        </Swiper>
  
        <Swiper {...thumbsParams}>
          {images.map((image, idx) => (
            <SliderItem key={`slide_${idx}`} className="swiper-slide-auto">
              <img
                // @note w/o unique key the image won't be updated when the image set updates.
                key={image.src}
                className="swiper-lazy"
                // @note Ignore that the images aren't matching
                src={image.src.replace("320/240", "100/100")}
              />
            </SliderItem>
          ))}
        </Swiper>
      </div>
    );
  };

export default Slider