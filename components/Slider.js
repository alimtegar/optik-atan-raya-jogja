import Slider from "react-slick";

/* Styles */
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

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
    };

    return (
        <div id="slider" className="text-white overflow-hidden">
            <Slider {...settings}>
                <div className="slider-item d-flex justify-content-center align-items-center h-100">
                    <div className="item-text-container position-absolute left-0 w-100">
                        <div className="container">
                            <div className="item-text w-40">
                                <h2 className="rufina h5 m-0">Welcome to</h2>
                                <h1 className="rufina h1 mb-3">Optik Atan Raya Jogja</h1>
                                <p className="small">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
                            </div>
                        </div>
                    </div>
                    <img src="/static/images/slider-2.jpeg" className="fit-width" alt="Slider Item 1" />
                </div>
            </Slider>
        </div>
    );
};

export default MySlider;
