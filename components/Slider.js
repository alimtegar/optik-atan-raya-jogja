import Slider from "react-slick";

/* Components */
import { SliderNextArrow, SliderPrevArrow } from './SliderArrows';

const MySlider = () => {
    let slider;
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 8000,
        pauseOnHover: true,
        nextArrow: <SliderNextArrow />,
        prevArrow: <SliderPrevArrow />
    };

    return (
        <div id="slider" className="position-relative text-white overflow-hidden">
            <Slider {...settings}>
                {[...Array(2)].map((_, key) => (
                    <div className="slider-item position-relative d-flex justify-content-center align-items-center h-100" key={key}>
                        <div className="item-text-container position-absolute left-0 w-100">
                            <div className="container">
                                <div className="item-text text-center text-lg-left text-shadow-sm col-lg-4 px-0">
                                    <h2 className="rufina h5 m-0">Welcome to</h2>
                                    <h1 className="rufina h2 mb-3">Optik Atan Raya Jogja</h1>
                                    <hr className="divider border-white mx-auto mx-lg-0 mb-3" />
                                    <p className="small mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
                                </div>
                            </div>
                        </div>

                        <img src="/static/images/slider.jpeg" className="fit-width" alt="Slider Item 1" />
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default MySlider;
