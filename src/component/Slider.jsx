import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useNavigate } from "react-router-dom";
import "./Slider.css";

const slides = [
  {
    id: 1,
    title: "Interested In Race",
    subtitle: "Book Your Horse Now",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br> Donec pellentesque ante nec cursus scelerisque. <br>Quisque bibendum lobortis pellentesque. Nunc <br>sed congue libero pretium. Nam in rhoncus est. Aenean.",
    buttonText: "Book Jacob",
    imageUrl: "/img2.png",
    horse: "Jacob",
  },
  {
    id: 2,
    title: "Interested In Race",
    subtitle: "Book Your Horse Now",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br> Donec pellentesque ante nec cursus scelerisque. <br>Quisque bibendum lobortis pellentesque. Nunc <br>sed congue libero pretium. Nam in rhoncus est. Aenean.",
    buttonText: "Book Bella",
    imageUrl: "/img4.png",
    horse: "Bella",
  },
  {
    id: 3,
    title: "Interested In Race",
    subtitle: "Book Your Horse Now",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br> Donec pellentesque ante nec cursus scelerisque. <br>Quisque bibendum lobortis pellentesque. Nunc <br>sed congue libero pretium. Nam in rhoncus est. Aenean.",
    buttonText: "Book Max",
    imageUrl: "/img2.png",
    horse: "Max",
  },
  {
    id: 4,
    title: "Interested In Race",
    subtitle: "Book Your Horse Now",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br> Donec pellentesque ante nec cursus scelerisque. <br>Quisque bibendum lobortis pellentesque. Nunc <br>sed congue libero pretium. Nam in rhoncus est. Aenean.",
    buttonText: "Book Daisy",
    imageUrl: "/img4.png",
    horse: "Daisy",
  },
];

const Sliderr = () => {
  const sliderRef = useRef(null);
  const navigate = useNavigate();

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const goToFirstSlide = () => {
    if (sliderRef.current && sliderRef.current.slickGoTo) {
      sliderRef.current.slickGoTo(0);
    }
  };

  const handleBookNowClick = (horse) => {
    navigate("/book", { state: { horse } });
  };

  return (
    <div className="App">
      <header
        className="App-header"
        onClick={goToFirstSlide}
        style={{ cursor: "pointer" }}
      >
        <h1 className="mainHeading">
          Ride_<span>Horse</span>.com
        </h1>
        <button className="Btn" onClick={() => handleBookNowClick("")}>
          Book Now
        </button>
      </header>
      <Slider ref={sliderRef} {...settings}>
        {slides.map((slide) => (
          <div key={slide.id} className="slider">
            <div className="slide-content">
              <h2 className="slider-heading-main">{slide.title}</h2>
              <h3 className="slider-heading-second">
                Book Your <span>Horse</span> Now
              </h3>
              <p
                dangerouslySetInnerHTML={{ __html: slide.description }}
                className="description"
              ></p>
              <button
                className="Btn mainBtn"
                onClick={() => handleBookNowClick(slide.horse)}
              >
                {slide.buttonText}
              </button>
            </div>
            <div className="slide-image">
              <img src={slide.imageUrl} alt={`Slide ${slide.id}`} />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Sliderr;
