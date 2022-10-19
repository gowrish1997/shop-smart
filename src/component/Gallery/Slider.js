import PropTypes from "prop-types";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Thumbs } from "swiper";
import { useState } from "react";
import GalleryImages from "./GalleryImages";
import "./Slider.scss";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
const ProductImagesSlider = () => {
 const location=useLocation()
 const [allpost,setAllpost]=useState(null)
useEffect(()=>{
  setAllpost(location.state.allpost)
 },[location])
  const [activeThumb, setActiveThumb] = useState();

  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          height: "100vh",
          width: "100vw",
          zIndex: 100,
          backgroundColor: "#fff",
          position: "absolute",
          top: "0px",
          left: "0px",
          overflow: "auto",
        }}
      >
        <div style={{ flex: 6, height: "100%" }}>
          <Swiper
            slidesPerView="1"
            spaceBetween={10}
            navigation={true}
            direction="vertical"
            modules={[Navigation, Thumbs]}
            grabCursor={true}
            thumbs={{
              swiper:
                activeThumb && !activeThumb.destroyed ? activeThumb : null,
            }}
            className="product-images-slider"
          >
            {allpost?.map((item, index) => (
              <SwiperSlide key={index}>
                <GalleryImages eachPostData={item}></GalleryImages>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div
          style={{
            flex: 1,
            height: "100%",
            marginRight: "20px",
            textAlign: "right",
          }}
        >
          <Swiper
            onSwiper={setActiveThumb}
            spaceBetween={10}
            direction="vertical"
            slidesPerView={4}
            modules={[Navigation, Thumbs]}
            className="product-images-slider-thumbs"
          >
            {allpost?.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="product-images-slider-thumbs-wrapper">
                  <GalleryImages eachPostData={item}></GalleryImages>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </>
  );
};

// ProductImagesSlider.propTypes = {
//     images: PropTypes.array.isRequired
// }

export default ProductImagesSlider;
